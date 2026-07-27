/* Body Map — offline service worker.
   The whole app is a single self-contained index.html (fonts, React and all
   logic inlined), so offline support is simply: cache that one document plus
   this worker, and serve them from cache when the network is gone.
   Your workout/meal data is NOT here — it lives in localStorage + IndexedDB,
   which are per-device and untouched by cache updates. */
const CACHE = 'bodymap-334abda4ae';
const SHELL = ['./', './index.html', './sw.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      // addAll fails whole-batch if any 404s; add best-effort instead.
      Promise.all(SHELL.map((u) => c.add(u).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Navigations (opening the app): serve the cached shell so it launches offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((r) => {
        const copy = r.clone();
        caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
        return r;
      }).catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }
  // Everything else: cache-first, fall back to network, then cache the result.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((r) => {
      const copy = r.clone();
      caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      return r;
    }).catch(() => hit))
  );
});
