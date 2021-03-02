var CACHE_NAME = 'iamgique-cache-v1';
var urlsToCache = [
  '/',
  '/style.css',
  '/signin.png',
  '/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});