#!/usr/bin/env python3
"""
Rebuild dist/ (the single-file, fully-offline bundle you put on your phone)
from the split source index.html.

Why it works this way
---------------------
The heavy, unchanging parts of the bundle — React + ReactDOM UMD, the dc
runtime (support.js), the base64 latin-subset fonts, the _ds design-system CSS,
and the movement database — are already vendored inside the previous
dist/index.html and are byte-for-byte current (only index.html is ever edited).
So a rebuild only needs to swap the two regions of dist that actually change
when you edit index.html:

  A) the <x-dc> template markup  (between </helmet> and </x-dc>)
  B) the app script body         (inside the data-dc-script <script> ... </script>)

Both regions are lifted verbatim from index.html and dropped into a copy of the
proven dist, so the offline scaffolding is never regenerated (and never breaks).
The service-worker cache name is stamped with a hash of the new bundle so a
phone that already has the app installed picks up this version instead of
serving a stale cached copy.

Usage:  python3 build.py
"""
import hashlib
import pathlib
import sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "index.html"
DIST_HTML = ROOT / "dist" / "index.html"
DIST_SW = ROOT / "dist" / "sw.js"

APP_OPEN = ('<script type="text/x-dc" data-dc-script '
            'data-props="{&quot;$preview&quot;:{&quot;width&quot;:420,'
            '&quot;height&quot;:880}}">')
HELMET_CLOSE = "</helmet>"
XDC_CLOSE = "</x-dc>"
SCRIPT_CLOSE = "</script>"


def die(msg):
    print("build.py: " + msg, file=sys.stderr)
    sys.exit(1)


def slice_app_regions(html, label):
    """Return (template_markup, app_script_body) from a document that has the
    split layout: ... </helmet> <markup> </x-dc> <APP_OPEN> <script body> </script> ...
    Anchored on </helmet> first so the "</x-dc>" string literals living inside
    the inlined support.js (which sits *before* the body) are never matched."""
    if html.count(HELMET_CLOSE) != 1:
        die("%s: expected exactly one %s" % (label, HELMET_CLOSE))
    after_helmet = html.split(HELMET_CLOSE, 1)[1]

    if XDC_CLOSE not in after_helmet:
        die("%s: no %s after </helmet>" % (label, XDC_CLOSE))
    template_markup, _, after_xdc = after_helmet.partition(XDC_CLOSE)

    if APP_OPEN not in after_xdc:
        die("%s: app-script opening tag not found" % label)
    body = after_xdc.split(APP_OPEN, 1)[1]

    if SCRIPT_CLOSE not in body:
        die("%s: app script has no closing </script>" % label)
    app_script = body.split(SCRIPT_CLOSE, 1)[0]

    # The app body must not contain sequences that would end the <script> early.
    for bad in ("</script", "<!--"):
        if bad in app_script:
            die("%s: app script contains %r — bundler would need to escape it"
                % (label, bad))
    return template_markup, app_script


def rebuild_dist_html():
    src = SRC.read_text(encoding="utf-8")
    dist = DIST_HTML.read_text(encoding="utf-8")

    new_template, new_app = slice_app_regions(src, "index.html")

    # Split the proven dist into: head(...</helmet>) | old_template | </x-dc>tail
    head, _, dist_after_helmet = dist.partition(HELMET_CLOSE)
    _old_template, _, dist_after_xdc = dist_after_helmet.partition(XDC_CLOSE)

    # dist_after_xdc = <between></x-dc-was-here> ... APP_OPEN <old body> </script> <tail>
    between, _, dist_body = dist_after_xdc.partition(APP_OPEN)
    _old_body, _, dist_tail = dist_body.partition(SCRIPT_CLOSE)

    rebuilt = (
        head + HELMET_CLOSE
        + new_template
        + XDC_CLOSE
        + between
        + APP_OPEN
        + new_app
        + SCRIPT_CLOSE
        + dist_tail
    )
    return rebuilt


def rebuild_sw(bundle_html):
    """Stamp the SW cache name with a hash of the bundle so an already-installed
    phone treats this build as an update and re-caches it."""
    sw = DIST_SW.read_text(encoding="utf-8")
    ver = hashlib.sha1(bundle_html.encode("utf-8")).hexdigest()[:10]
    import re
    new_sw, n = re.subn(r"const CACHE = '[^']*';",
                        "const CACHE = 'bodymap-%s';" % ver, sw, count=1)
    if n != 1:
        die("sw.js: could not find CACHE constant to stamp")
    return new_sw


def main():
    for p in (SRC, DIST_HTML, DIST_SW):
        if not p.exists():
            die("missing required file: %s" % p)

    bundle = rebuild_dist_html()
    sw = rebuild_sw(bundle)

    DIST_HTML.write_text(bundle, encoding="utf-8")
    DIST_SW.write_text(sw, encoding="utf-8")

    kb = len(bundle.encode("utf-8")) / 1024
    ver = sw.split("bodymap-", 1)[1].split("'", 1)[0]
    print("Built dist/index.html  (%.0f KB)" % kb)
    print("Built dist/sw.js       (cache: bodymap-%s)" % ver)


if __name__ == "__main__":
    main()
