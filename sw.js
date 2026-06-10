// ================================================================
//  Service Worker – KPSTI PWA
//  Cache untuk offline support
// ================================================================
const CACHE_NAME = 'kpsti-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/admin.html',
  '/manifest.json'
];

// Install – cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate – clear old cache
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch – network first, fallback to cache
self.addEventListener('fetch', e => {
  // Jangan cache Supabase API calls
  if (e.request.url.includes('supabase.co')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
