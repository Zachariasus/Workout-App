# Body Map

A workout tracker, training analyzer, and fuel (calorie/macro) log in one — built as a **single, fully-offline web app** that stores everything **locally on your device**. No account, no server, no cloud. Your data never leaves your phone unless you export a backup yourself.

Add it to your home screen and it behaves like a native app, works with no signal, and keeps your history through refreshes and reinstalls.

---

## Highlights

- **Body map muscle analysis** — front/back anatomical map highlighting which of 26 muscles are getting hit and which are neglected, driven by a database of 151 movements.
- **Workout logging** — build a custom workout or start from a saved "premade," log sets × weight × reps, and edit any past session after the fact.
- **Previous-performance hints** — while logging a movement, see your last weight/reps and the date you last did it, so you know what to beat.
- **Notes for next time** — leave a private note on any movement (e.g. *"go up 5 lb"*); it resurfaces the next time you log that exercise.
- **Supersets** — mark consecutive movements as a superset with a single tap (a visual grouping).
- **Fuel plan** — auto-calculate calorie and macro targets from your stats, or enter your own. Live macro math with a non-blocking health warning if a target is set dangerously low.
- **Food library** — save foods and edit their macros in place.
- **Local-first backups** — export a single backup file (Files / iCloud / AirDrop / email) that survives a reinstall; a gentle reminder resurfaces on a 10-day cadence.

---

## Privacy & data model

This app is **local-only by design.**

- All data lives in the browser's **`localStorage` + `IndexedDB`** on the device that opened the app (dual-write, so one is a fallback for the other).
- Nothing is uploaded. There is no backend and no analytics.
- Each device has its own isolated storage — your data is never visible to anyone else who installs the app.
- **Backups are manual and single-file:** exporting writes one backup file you control. Restoring on a fresh install re-links your history. (A browser app cannot silently write files to your phone, which is why the backup step is a deliberate tap rather than automatic.)

> Deleting the app from your home screen deletes its storage with it. Keep a backup file if you want to survive a full delete/reinstall.

---

## Architecture

- **Single-file app.** The whole thing compiles down to one self-contained `dist/index.html` with React, fonts, styles, the runtime, and the movement database all inlined — no external requests at runtime.
- **No JSX / no bundler for the app code.** UI is written with `React.createElement` on top of a small component runtime (`support.js`, the `DCLogic` base class). React 18.3.1 UMD is vendored.
- **Offline PWA.** A service worker (`dist/sw.js`) caches the shell so the app launches with no network, plus standard Apple/PWA meta for "Add to Home Screen."

### Project structure

```
.
├── index.html          # ← source app (edit this)
├── support.js          # component runtime / DCLogic base class (do not edit)
├── movements-db.js     # 151-movement + 26-muscle database
├── _ds/                # design-system CSS + font tokens
├── build.py            # bundles the above into dist/
├── dist/               # ← deployable output
│   ├── index.html      #   single-file, offline, self-contained app
│   ├── sw.js           #   offline service worker
│   └── _headers        #   Netlify cache rules (always revalidate shell + SW)
└── README.md
```

`index.html` is the source you edit. `dist/index.html` is the generated, shippable artifact.

---

## Develop locally

The source app loads its dependencies as separate files, so just serve the project root:

```bash
python3 -m http.server 8899
```

Then open <http://localhost:8899>. Edits to `index.html` show up on refresh.

## Build the deployable bundle

After changing `index.html`, regenerate `dist/`:

```bash
python3 build.py
```

This swaps your updated app code into the proven single-file bundle (reusing the already-vendored React, runtime, fonts, and CSS) and stamps the service-worker cache with a fresh content hash so installed devices treat the build as an update rather than serving a stale copy.

## Deploy (Netlify)

Deploy the **`dist/` folder's contents at the site root** — not the project root.

- **Drag-and-drop:** drop the `dist` folder onto Netlify's Sites page.
- **Git-based:** set the site's **publish directory to `dist`** (no build command needed — it's prebuilt).

Netlify serves HTTPS automatically, which is required for the service worker and Add to Home Screen.

### Install on iPhone

1. Open the site in **Safari**.
2. **Share → Add to Home Screen** — it installs as a standalone app icon.
3. Your data stays on the device, independent of any redeploy.

---

## Credits

- UI runtime built on the `DCLogic` component framework (`support.js`).
- [React](https://react.dev) 18.3.1 (MIT) is vendored into the bundle.
- Fonts: Anton, Archivo, IBM Plex Mono, Special Elite (subset and embedded).

*This is a personal project. Add a `LICENSE` file if you intend to share or reuse it.*
