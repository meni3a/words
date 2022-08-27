const staticCacheName = 'site-static-v1';
const filesToCache = [
  '/index.html',
  '/app.js',
  '/app.css',
  '/manifest.webmanifest',
  'assets/correct.mp3',
  'assets/incorrect.mp3',
  'assets/turkish-beat.mp3',
  'assets/home-icon.png',
  'assets/front_img.png'
];

self.addEventListener('install', event =>  {
  console.log('Installing');
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      cache.addAll(filesToCache);
      console.log('cached files');
    }));
  
});
self.addEventListener("activate", event => {
  console.log('Activate!');
});
self.addEventListener('fetch', event =>  {
  console.log('Fetching');
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    }));
  console.log('Fetch!', event.request);
});