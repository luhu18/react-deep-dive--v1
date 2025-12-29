const CACHE_NAME = 'todo-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/icon-cross.svg',
    '/assets/icon-check.svg'
];

'self'.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    )
})

'self'.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then( response => {
            return response || fetch(event.request);
        })
    )
})