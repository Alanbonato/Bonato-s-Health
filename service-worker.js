self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bonatos-health-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './health.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});