self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('offline-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './logo.png',
        './manifest.json',
        './style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
