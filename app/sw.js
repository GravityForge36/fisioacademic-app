const CACHE_NAME = 'fisioacademic-v2';
const ASSETS = [
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './flashcards.js',
  './planner.js',
  './quiz.js',
  './reference.js',
  './tracker.js',
  './logo.png',
  './lucide.min.js',
  './jspdf.umd.min.js'
];

// Install Service Worker and cache essential files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => {
        console.warn('Alguns assets falharam ao cachear durante install, tudo bem:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate and remove old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercept requests and return cached version if offline
self.addEventListener('fetch', (e) => {
  // Ignorar chamadas de APIs externas (como gsheets ou google fonts) se der erro
  if (e.request.url.startsWith('http')) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((response) => {
          // Se for um arquivo local de sucesso, cacheia dinamicamente
          if (response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return response;
        }).catch(() => {
          // Fallback se estiver offline
          return caches.match('./index.html');
        });
      })
    );
  }
});
