importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('imagineee').then(function(cache) {
     return cache.addAll([
        '',
        'index.html',
        'style/style.css',
        'script/app.js',
        'Favicon/favicon.ico',
        'Favicon/apple-touch-icon.png',
        'Favicon/maskable_icon.png',
        'Favicon/android-chrome-512x512.png',
     ]);
   })
 );
});

if (navigator.onLine == true) {
  caches.open('imagineee').then(function(cache) {
    return cache.addAll([
      '',
      'index.html',
      'style/style.css',
      'script/app.js',
      'Favicon/favicon.ico',
      'Favicon/apple-touch-icon.png',
      'Favicon/maskable_icon.png',
      'Favicon/android-chrome-512x512.png',
      'file/IBMPlexMono-Light.ttf',
      'img/logo/16bits JS Foundation banner.png',
      'img/logo/16bits JS Foundation.png',
      'img/logo/16bits JS Foundation block logo.png'
    ]);
  })
}

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
        );
    });