// LE SERVICE WORKER DE CLUTCH — volontairement MINIMAL (14.09.2026).
// Il ne sert qu'à une chose : rendre le site installable sur l'écran d'accueil (et, plus tard,
// recevoir les notifications web). Il ne met AUCUN écran en cache : « le serveur décide, le
// client affiche » (règle de fondation 2), et un cache qui garde une vieille version est la
// panne la plus courante des PWA — David la verrait avant nous.
self.addEventListener('install', () => { self.skipWaiting() })
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()) })
// Un gestionnaire de fetch qui laisse tout passer : certains navigateurs l'exigent pour
// proposer l'installation. Rien n'est intercepté, rien n'est gardé.
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request)) })
