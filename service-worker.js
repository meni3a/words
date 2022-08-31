const staticCacheName = 'site-static-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/app.css',
  '/manifest.webmanifest',
  'assets/sounds/correct.mp3',
  'assets/sounds/incorrect.mp3',
  'assets/sounds/turkish-beat.mp3',
  'assets/images/home-icon.png',
  'assets/images/front_img.png'
];

self.addEventListener('install', event =>  {
  console.log('Installing');
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      cache.addAll(filesToCache).then((res)=>{
        console.log('cache added');
        return res;
      }).catch(function (err) {
        console.log('Error caching files', err);
      });
    }));
  
});
self.addEventListener("activate", event => {
  console.log('Activate!');
});
self.addEventListener('fetch', event =>  {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        console.log('fetching from network');
        return fetch(event.request);
      }
    }));
});