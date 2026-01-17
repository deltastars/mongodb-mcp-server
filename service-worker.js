
const CACHE_NAME = 'delta-stars-sovereign-v24.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.tsx'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // استخدام Promise.allSettled لضمان عدم فشل التثبيت إذا تعذر العثور على ملف واحد
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url => cache.add(url))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  // تجاهل الطلبات التي لا تدعم بروتوكول HTTP (مثل الإضافات أو البيانات المضمنة)
  if (!event.request.url.startsWith('http')) return;

  // استراتيجية Stale-While-Revalidate: تقديم المحتوى المخبأ أولاً ثم تحديثه في الخلفية
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => {
        // في حالة الفشل الكامل (أوفلاين)، نكتفي بالاستجابة المخبأة إن وجدت
      });

      return cachedResponse || fetchPromise;
    })
  );
});
