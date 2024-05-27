'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "634598fc95667b80a6dccd2377933fd1",
"index.html": "976b56ce8a47e99fc5550afa36fc0a93",
"/": "976b56ce8a47e99fc5550afa36fc0a93",
"main.dart.js": "f32e18e6c6d07d04da26e4833e48f2e0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "730c95b5754253caa40d98374aab5a07",
"assets/AssetManifest.json": "9ab96b90dbd674ea120afdcc6403f0c6",
"assets/NOTICES": "8a213caa98747744f07acf0f31390503",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8ddabbd2ca931eba7e7314f47b54c664",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e98ac5eb08525045ff1c21d37de7e342",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/share2.png": "71b2c6803c3de607ac5df4171a7ee9b1",
"assets/assets/contact_image.svg": "7f8346dbf339c3e424a8be4140c8e762",
"assets/assets/participate4.png": "752015bebe7375c3aa8c71e9d5d0d89c",
"assets/assets/participate5.png": "8cc918230547069ce1f9afd2bb4ea8ef",
"assets/assets/surveyscreation.png": "6853731549ac1656f959838376e77a63",
"assets/assets/share1.png": "36ff2a0369681c353dc0b46b0e68ee22",
"assets/assets/redeem.png": "34b09bc3cb0c40bc26b08bd3b0a4b152",
"assets/assets/report4.png": "c15f47e809b8c7c29bfcb51568648aeb",
"assets/assets/participate2.png": "2527200076b31aff607b5fdf46c26fc3",
"assets/assets/participate3.png": "f32ed5a2bc1cf93a766685db978a924f",
"assets/assets/live_result.png": "e41cc1ada80e01c834e347e8fd750b01",
"assets/assets/report1.png": "32feb9e7ed405c7c44517a8cf1dfb536",
"assets/assets/collect.png": "ad9259b9ac07a8983e6d1eb4bcddb1a6",
"assets/assets/report3.png": "e9cc94b6ae2a554746ab68f399318115",
"assets/assets/participate1.png": "c053ea543d5f98ed267e959b34e656a9",
"assets/assets/register.svg": "8afb5cb94b042e4665263ce4f25e25cf",
"assets/assets/report2.png": "d674a08a3967a5d9d1240d9f9deec709",
"assets/assets/download-app.png": "986e1780e54c36011ea6839ac0677d73",
"assets/assets/download-app.svg": "8fb6b780f817d5d699f42fdedc604377",
"assets/assets/group_photp.png": "0ae00b03744fe1b0526aea2e1429b19b",
"assets/assets/calender.svg": "118fd80411ca164c442588802f3ab943",
"assets/assets/register.png": "694cc0e10969147d47b5333a8b1046de",
"assets/assets/brands/redeem.png": "6357b47178d4750fbe50e36694da36d8",
"assets/assets/brands/polato.png": "7fd8fd5ed9f109d2b0d68f403b3e16c6",
"assets/assets/brands/tido.svg": "2d74be7fe131890907485703a553c95b",
"assets/assets/brands/tido.png": "05305850f36820535a027c2889abd306",
"assets/assets/brands/polato.svg": "83d70dec66f77334b06e1c757b60939c",
"assets/assets/brands/tibc.svg": "cfc8f46d732f947e55f5fb0e7f013e81",
"assets/assets/brands/digiclub.png": "d5215433889063890f955f4015a4e636",
"assets/assets/brands/hsbc.svg": "f18a7c9b135c1ecde9fadc2ed748d248",
"assets/assets/brands/hsbc.png": "4bf3b8464c07f282c8ed9256f4d7e0e4",
"assets/assets/brands/digiclub.svg": "6908926ad1c2ae7e38bd7c73b846bb6b",
"assets/assets/brands/tibc.png": "b447254b9380abadb31f1158e32e599d",
"assets/assets/google-play.png": "a3b68248c270b5919d3633f17c17786f",
"assets/assets/collect.svg": "bc3e4e5e3a2a7b61089a54859e42b5b8",
"assets/assets/apple-store.png": "1a2f35a07273dd476eaa05b029812105",
"assets/assets/time.svg": "887f2cfa356316166bd41a6ad0beeef1",
"assets/assets/home.png": "9c2e1899f0e5ec8414d5936c759a356a",
"assets/assets/redeem.svg": "ccec4738c9330a4c3dfd4e67aa89034a",
"assets/assets/people.svg": "8e248e4c27233cd1f861856aa9febcb5",
"assets/assets/social/instagram.png": "c50a6fa4fb037726032ec338e67fff19",
"assets/assets/social/x.png": "30c09292a5f09fe83f41e4dd5649e73c",
"assets/assets/social/x.svg": "7e59bff016f5e3bf380d42539f139a8e",
"assets/assets/social/fa.png": "93ae1ddae26a96647caa5a8c0c5f70b4",
"assets/assets/social/instagram.svg": "3235fea600eba780a9a73f9540a0d63f",
"assets/assets/social/telegram.svg": "f95131dfcd9c1445e79bfb1a7c107241",
"assets/assets/social/email.svg": "77db8d5baa1da0cc0ac960faa3aab609",
"assets/assets/social/call-calling.svg": "146e328f4f5edd79b5609c395e88fa80",
"assets/assets/social/facebook.svg": "c43cf0c20aafeebd372c4b74a61f3b06",
"assets/assets/social/whatsapp.svg": "dc9eb9f4607b4e88e1aa7715b32b268b",
"assets/assets/social/linkedin.png": "711906fd74ba79f6f18726679b190631",
"assets/assets/social/linkedin.svg": "8ce075dd363e07ce9d776cb8bfd91f42",
"assets/assets/social/facebook.png": "92907cba5c5159b02a4ed1024c7cc9af",
"assets/assets/header.png": "abd9c85cf0a080c743b90595c5d33ada",
"assets/assets/logo.png": "f0828e73385766e346e73394d285b4ab",
"assets/assets/participant.svg": "4864f95641e8e7def14cd4be526de172",
"assets/assets/phone.png": "de50ef64f04da3064a079649977b9690",
"assets/assets/location.svg": "b8e35bd05fd79a1a70eaf9758aa0cc84",
"assets/assets/coin_taka.svg": "d728b20420044b695f74e8aa618f469a",
"assets/assets/about.png": "29018f59f9d6de8f5ac78f0ef1c94930",
"assets/assets/upload.svg": "db6f83e6713c4888ae866c9817f0390b",
"assets/assets/participant.png": "96b65066b376da3f7d725d23b12774ec",
"assets/assets/data_collection.png": "49688049af0f6767db92ff7017dce991",
"assets/assets/survey_publishing.png": "6e5d7f065295a2a9d0b4b26b9de07f44",
"assets/assets/carbon_time.svg": "f48b5f8a847d9da1a3de185bdca82827",
"assets/assets/building.svg": "bb2b3c999263ed98d0d36c1470bec531",
"assets/assets/whatsap.svg": "1400928ffd3b3dc0b6cbb3bbd2890653",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
