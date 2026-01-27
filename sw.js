const CACHE = 'workout-v3';
const ASSETS = [
  './',
  './index.html',
  './workout-data.js',
  './workout-app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  console.log('Service Worker installing...');
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('Service Worker activating...');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE) {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  
  // Skip non-GET requests
  if (req.method !== 'GET') return;
  
  const accept = req.headers.get('accept') || '';
  
  // For navigation requests (HTML pages)
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    // For all other requests (JS, CSS, images, etc)
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) {
          // Return cached version but update in background
          fetch(req).then(res => {
            caches.open(CACHE).then(cache => cache.put(req, res));
          }).catch(() => {});
          return cached;
        }
        // Not in cache, fetch from network
        return fetch(req).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, clone));
          return res;
        });
      })
    );
  }
});
