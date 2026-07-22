const CACHE_PREFIX = "menum-wild-draw";
const CACHE_VERSION = "v3";
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;

const OFFLINE_ASSETS = [
  "./draw.html",
  "./styles.css",
  "./draw.css",
  "./card-components.js",
  "./draw.js",
  "./manifest.webmanifest",
  "./app-icon.svg",
  "../brand/menum-logo-source.png",
  "../back/card-back-mosaic-v2.png",
  "../art/approved/01-vstrecha-v1.webp",
  "../art/approved/02-dar-v1.webp",
  "../art/approved/03-otkrytye-ladoni-v1.webp",
  "../art/approved/04-tanets-v1.webp",
  "../art/approved/05-tishina-v1.webp",
  "../art/approved/06-ogon-v1.webp",
  "../art/approved/07-obyatie-v1.webp",
  "../art/approved/08-maska-v1.webp",
  "../art/approved/09-techenie-v1.webp",
  "../art/approved/10-nit-v2.webp",
  "../art/approved/11-rassvet-v1.webp",
  "../art/approved/12-smeh-v1.webp",
  "../art/approved/13-legkost-v1.webp",
  "../art/approved/14-zvezda-v1.webp",
  "../art/approved/15-zhelanie-v1.webp",
  "../art/approved/16-teplo-v2.webp",
  "../art/approved/17-granitsa-v1.webp",
  "../art/approved/18-korni-v1.webp",
  "../art/approved/19-imya-v1.webp",
  "../art/approved/20-koster-v1.webp",
  "../art/approved/21-dozhd-v1.webp",
  "../art/approved/22-uzor-v1.webp",
  "../art/approved/23-polnoch-v1.webp",
  "../art/approved/24-vozvraschenie-v1.webp",
  "../art/approved/25-golos-v1.webp",
  "../art/approved/26-eho-v1.webp",
  "../art/approved/27-klyuch-v1.webp",
  "../art/approved/28-dver-v1.webp",
  "../art/approved/29-volna-v1.webp",
  "../art/approved/30-bereg-v1.webp",
  "../art/approved/31-les-v-ozhidanii-v1.webp",
  "../art/approved/32-reka-volnuetsya-v1.webp",
  "../art/approved/33-veter-zovet-v1.webp",
  "../art/approved/34-luna-smotrit-v1.webp",
  "../art/approved/35-trava-slushaet-v1.webp",
  "../art/approved/36-kosmos-zhdet-tebya-v1.webp",
  "../art/approved/37-ptitsa-na-rassvete-v1.webp",
  "../art/approved/38-semya-v1.webp",
  "../art/approved/39-tropa-v1.webp",
  "../art/approved/40-more-dyshit-v1.webp",
  "../art/approved/41-vopros-v1.webp",
  "../art/approved/42-otvet-v1.webp",
  "../art/approved/43-melodiya-v2.webp",
  "../art/approved/44-ritm-v1.webp",
  "../qr/01-vstrecha.png",
  "../qr/02-dar.png",
  "../qr/03-otkrytye-ladoni.png",
  "../qr/04-tanets.png",
  "../qr/05-tishina.png",
  "../qr/06-ogon.png",
  "../qr/07-obyatie.png",
  "../qr/08-maska.png",
  "../qr/09-techenie.png",
  "../qr/10-nit.png",
  "../qr/11-rassvet.png",
  "../qr/12-smeh.png",
  "../qr/13-legkost.png",
  "../qr/14-zvezda.png",
  "../qr/15-zhelanie.png",
  "../qr/16-teplo.png",
  "../qr/17-granitsa.png",
  "../qr/18-korni.png",
  "../qr/19-imya.png",
  "../qr/20-koster.png",
  "../qr/21-dozhd.png",
  "../qr/22-uzor.png",
  "../qr/23-polnoch.png",
  "../qr/24-vozvraschenie.png",
  "../qr/25-golos.png",
  "../qr/26-eho.png",
  "../qr/27-klyuch.png",
  "../qr/28-dver.png",
  "../qr/29-volna.png",
  "../qr/30-bereg.png",
  "../qr/31-les-v-ozhidanii.png",
  "../qr/32-reka-volnuetsya.png",
  "../qr/33-veter-zovet.png",
  "../qr/34-luna-smotrit.png",
  "../qr/35-trava-slushaet.png",
  "../qr/36-kosmos-zhdet-tebya.png",
  "../qr/37-ptitsa-na-rassvete.png",
  "../qr/38-semya.png",
  "../qr/39-tropa.png",
  "../qr/40-more-dyshit.png",
  "../qr/41-vopros.png",
  "../qr/42-otvet.png",
  "../qr/43-melodiya.png",
  "../qr/44-ritm.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(OFFLINE_ASSETS.map(async (url) => {
      const request = new Request(url, { cache: "reload" });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`Не удалось кешировать ${url}: ${response.status}`);
      await cache.put(request, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(request, { ignoreSearch: true })) || caches.match("./draw.html");
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
