const CACHE_NAME = 'radio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e armazena os arquivos básicos em cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});