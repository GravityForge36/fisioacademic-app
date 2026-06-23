const CACHE_NAME = 'fisioacademic-v40';
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

// Intercept requests and return cached version if offline (Network-First Strategy)
self.addEventListener('fetch', (e) => {
  // Apenas interceptar requisições locais do app e ignorar chamadas de APIs externas (como kvdb.io ou google fonts)
  if (e.request.url.startsWith(self.location.origin) && e.request.method === 'GET') {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          // Se obteve com sucesso, clona e atualiza o cache
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Em caso de falha de rede (offline), busca no cache
          return caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Se for navegação de página e não estiver no cache, retorna a página inicial
            if (e.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
        })
    );
  }
});
