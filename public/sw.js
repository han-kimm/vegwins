if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),t={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/202-7ba885a0dcb98562.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/412-9bbf4a9bfa082ee5.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/769-756e1208401402df.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/935-e83f1e96600a65f2.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/doc/%5BdocId%5D/page-d0d801a19f27c092.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/layout-909bff8a7ddb79b8.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/not-found-f62a3b764e3a0389.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/page-9dfa2811eb821031.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/search/page-05ec1c6bf6ebc3e3.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/app/write/page-1f141e8cf9c2676d.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/c2a6b034-b84ef9030908302b.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/main-app-c2e6a3da960aa5f8.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/main-bcdbb5313f267ce0.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/pages/_app-e6145d3ff6d87a04.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/pages/_error-f421dbf59ad65ae0.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-442c58cb5528bf37.js",revision:"wtinwrswZBSuLeOLeu2zs"},{url:"/_next/static/css/c57fe378956f24e6.css",revision:"c57fe378956f24e6"},{url:"/_next/static/media/007d531d99a7511e-s.p.woff2",revision:"44a53dca7c7dc06e2f33ba60333cb8f2"},{url:"/_next/static/media/83d01cd17ab8f5e8-s.p.woff2",revision:"5dfceffe6049f9a29ac7ee343116c81c"},{url:"/_next/static/media/d15039f8186fcd46-s.p.woff2",revision:"91e8a1f3649e565e06cb8b6335097505"},{url:"/_next/static/wtinwrswZBSuLeOLeu2zs/_buildManifest.js",revision:"c71e230a3bdc1068b477d04c0005357c"},{url:"/_next/static/wtinwrswZBSuLeOLeu2zs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/font/NotoSans_bold_sub.woff2",revision:"5dfceffe6049f9a29ac7ee343116c81c"},{url:"/font/NotoSans_medium_sub.woff2",revision:"91e8a1f3649e565e06cb8b6335097505"},{url:"/font/NotoSans_regular_sub.woff2",revision:"44a53dca7c7dc06e2f33ba60333cb8f2"},{url:"/icon-192x192.png",revision:"3d2a1f61bf90d9f25d9d4690c2d038e6"},{url:"/icon-256x256.png",revision:"64a6eb4de926e0f0a007cedae291ecb1"},{url:"/icon-384x384.png",revision:"1d371396b6b97c50fd79c48e060fe8fd"},{url:"/icon-512x512.png",revision:"e4842e9aa23782ebabe263cee270a9e6"},{url:"/icon/arrow-left.svg",revision:"3b53dd042c1ea8a1f1e937c20db3caf0"},{url:"/icon/arrow-up.svg",revision:"60980451d314a56c132751c4cfed019b"},{url:"/icon/bell.svg",revision:"d0d1da6750ea83eda786d9183448c859"},{url:"/icon/cancel.svg",revision:"f90db792fe73fde6acb3076c7e1739e0"},{url:"/icon/chat.svg",revision:"e0f4ddcad181cdbe7f317919085f7fda"},{url:"/icon/docs.svg",revision:"a985faf6345b0c1f540bc4bfa5244e78"},{url:"/icon/fold.svg",revision:"7911613ecd533e661c9e65db9dd1c26f"},{url:"/icon/github.svg",revision:"26c7f8c7e070ee35a5420248e80d3d6e"},{url:"/icon/google.svg",revision:"edd0e34f60d7ca4a2f4ece79cff21ae3"},{url:"/icon/home.svg",revision:"1a0ba5192fc514ddfe7f5617fe1220bb"},{url:"/icon/insta.svg",revision:"42f9ba8364e741e319ecca961bf9b0a2"},{url:"/icon/join.svg",revision:"cc5237b637b1922ff9aaf4357efe45d0"},{url:"/icon/logo.svg",revision:"ed2538f98fad2c23115bfbc3a964d133"},{url:"/icon/pencil.svg",revision:"b6ce7ea9c1ab4bf47203ec6204064bc1"},{url:"/icon/picture.svg",revision:"fae547f4b354e150fadd4cfd0246d68f"},{url:"/icon/place-alch.svg",revision:"288cccd53f1d713a02136cbb9a95d335"},{url:"/icon/place-bake.svg",revision:"12eb106482afd2b418191ab927547336"},{url:"/icon/place-book.svg",revision:"cca198b55ff0f586045c70a74db5bee8"},{url:"/icon/place-cafe.svg",revision:"fb5bef402eaaba11867c3189a6bc7ba0"},{url:"/icon/place-conv.svg",revision:"7466cd853e45801ecc7dc5fa49140fb1"},{url:"/icon/place-cosm.svg",revision:"17342c11e69e5a5063bc02ae8cede7ec"},{url:"/icon/place-exer.svg",revision:"0c8a41994571dd962549aa6d2175a39f"},{url:"/icon/place-hot.svg",revision:"355b3eee32b9911cf0ccb0321fbde3da"},{url:"/icon/place-inst.svg",revision:"2d9d9e33df0f66eb50512cd418024e63"},{url:"/icon/place-mart.svg",revision:"c0769eb5c6506266d96342ba781cf34c"},{url:"/icon/place-movi.svg",revision:"0c296b4364656b8687e00fdc1c710810"},{url:"/icon/place-view.svg",revision:"d5af02dbc1ab5aa17a132442334f7044"},{url:"/icon/plus.svg",revision:"0680ce2d1d708d3a653592edbd413b5b"},{url:"/icon/profile.svg",revision:"058d282f8f92794cb9804a53ad1dde85"},{url:"/icon/rate-0.svg",revision:"d0ddd8e50b0f86084c3e081b7d8690cc"},{url:"/icon/rate-1.svg",revision:"c0d78c74a86a1bc4f61f6de2e37ff3ff"},{url:"/icon/rate-2.svg",revision:"b81e2edb917ffbae0271bef07a03a280"},{url:"/icon/recall.svg",revision:"d2872096ab9deb2f4b1969e75e0e882d"},{url:"/icon/reset.svg",revision:"8832b4590445df5db552c28ef047eede"},{url:"/icon/save.svg",revision:"640cf71598c7abfefbba2562ff825425"},{url:"/icon/search-paper.svg",revision:"eb69abaa2ef1bbe1c20010ca428b3246"},{url:"/icon/search.svg",revision:"2d01fb80919f36799496a8f6657c0020"},{url:"/icon/share.svg",revision:"087fdd9baa141695cae00252e9fb35c1"},{url:"/icon/unfold.svg",revision:"47a7e1d476b519b522ab5eb0fb64faf2"},{url:"/icon/upload.svg",revision:"2691d3d8caa6fd4880ca1efb1ef3d1cd"},{url:"/image/blossom.avif",revision:"deaa323b50c6ed31b1e5c3b862cdd087"},{url:"/image/chat.webp",revision:"fac1620abf166507063346693113f4c2"},{url:"/image/default.webp",revision:"bc1d4ff0ba268852dc9b750369dada1c"},{url:"/image/guide-dark.png",revision:"d75893cae70d7bb9bcc72d9c89169506"},{url:"/image/guide-dark.webp",revision:"6d03ab6985576559784e0399315714cf"},{url:"/image/guide.png",revision:"6b56efd0c1f55cd02569c67f81be215c"},{url:"/image/haribo.jpg",revision:"88baa3f3f2026161d43845981ed06b89"},{url:"/image/sample.png",revision:"689f000f479b39c0af8c19d3530a524b"},{url:"/image/sample2.jpg",revision:"75f4e40ca448e10d8eea22f1481215cb"},{url:"/manifest.webmanifest",revision:"2855ee0ea28a83722ffca6209d3b1b68"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
