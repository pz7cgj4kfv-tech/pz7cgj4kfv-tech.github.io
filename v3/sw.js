// LE SERVICE WORKER DE CLUTCH — volontairement MINIMAL (14.09.2026).
// Il ne sert qu'à une chose : rendre le site installable sur l'écran d'accueil (et, plus tard,
// recevoir les notifications web). Il ne met AUCUN écran en cache : « le serveur décide, le
// client affiche » (règle de fondation 2), et un cache qui garde une vieille version est la
// panne la plus courante des PWA — David la verrait avant nous.
// Et il n'intercepte AUCUNE requête : la première version portait un gestionnaire de fetch
// « qui laisse tout passer », et il ne laissait pas tout passer. Vu le soir même en local : toutes
// les requêtes vers la base tombaient en ERR_FAILED dès que le service worker prenait la page
// (Chrome bloque les requêtes d'un service worker vers une adresse privée). Installable sans
// gestionnaire de fetch : oui, sur iOS comme sur Chrome depuis 2023.
self.addEventListener('install', () => { self.skipWaiting() })
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()) })
