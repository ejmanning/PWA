const staticDevUSStates = "dev-state-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/index.js",
  "/js/alabama.json",
  "/js/alaska.json",
  "/js/arizona.json",
  "/js/arkansas.json",
  "/js/california.json",
  "/js/colorado.json",
  "/js/connecticut.json",
  "/js/delaware.json",
  "/js/florida.json",
  "/js/georgia.json",
  "/js/hawaii.json",
  "/js/idaho.json",
  "/js/illinois.json",
  "/js/indiana.json",
  "/js/iowa.json",
  "/js/kansas.json",
  "/js/kentucky.json",
  "/js/louisiana.json",
  "/js/maine.json",
  "/js/maryland.json",
  "/js/massachusetts.json",
  "/js/michigan.json",
  "/js/minnesota.json",
  "/js/mississippi.json",
  "/js/missouri.json",
  "/js/montana.json",
  "/js/nebraska.json",
  "/js/nevada.json",
  "/js/newHampshire.json",
  "/js/newJersey.json",
  "/js/newMexico.json",
  "/js/newYork.json",
  "/js/northCarolina.json",
  "/js/northDakota.json",
  "/js/ohio.json",
  "/js/oklahoma.json",
  "/js/pennsylvania.json",
  "/js/rhodeIsland.json",
  "/js/southCarolina.json",
  "/js/southDakota.json",
  "/js/tennessee.json",
  "/js/texas.json",
  "/js/utah.json",
  "/js/vermont.json",
  "/js/virginia.json",
  "/js/washington.json",
  "/js/westVirginia.json",
  "/js/wisconsin.json",
  "/js/wyoming.json",
  "/images/Usa-html.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevUSStates).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
