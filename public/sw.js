if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PLdPWAI7mdQDUTkNP9jrE/_buildManifest.js",revision:"d1b4e8ea5348277f952f97a30e09f144"},{url:"/_next/static/PLdPWAI7mdQDUTkNP9jrE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/154-68acafc23e30c2f1.js",revision:"68acafc23e30c2f1"},{url:"/_next/static/chunks/365-d9dec61c775198fc.js",revision:"d9dec61c775198fc"},{url:"/_next/static/chunks/424-cdf05098d31578d2.js",revision:"cdf05098d31578d2"},{url:"/_next/static/chunks/547-db0bddedfe04ad39.js",revision:"db0bddedfe04ad39"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-9ee8f46f903f0ee4.js",revision:"9ee8f46f903f0ee4"},{url:"/_next/static/chunks/pages/_app-3bb6bdb7a5bbedd6.js",revision:"3bb6bdb7a5bbedd6"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/admin-c37efcf33efaa911.js",revision:"c37efcf33efaa911"},{url:"/_next/static/chunks/pages/admin/announcements-acb0019bbffc8dc6.js",revision:"acb0019bbffc8dc6"},{url:"/_next/static/chunks/pages/admin/edit-file-acbab57ea353aa7e.js",revision:"acbab57ea353aa7e"},{url:"/_next/static/chunks/pages/admin/forgot-password-b1dcb6b4ac611b0a.js",revision:"b1dcb6b4ac611b0a"},{url:"/_next/static/chunks/pages/admin/login-f632df51b9d5c965.js",revision:"f632df51b9d5c965"},{url:"/_next/static/chunks/pages/dashboard/event/%5Bindex%5D-6eea4ac24818fded.js",revision:"6eea4ac24818fded"},{url:"/_next/static/chunks/pages/dashboard/settings-7b5b5c35bcd644ac.js",revision:"7b5b5c35bcd644ac"},{url:"/_next/static/chunks/pages/dashboard/settings/about-us-76dd095f99b3b482.js",revision:"76dd095f99b3b482"},{url:"/_next/static/chunks/pages/dashboard/settings/privacy-policy-18d3259217dbe880.js",revision:"18d3259217dbe880"},{url:"/_next/static/chunks/pages/dashboard/settings/terms-and-conditions-c64785bcae6c3133.js",revision:"c64785bcae6c3133"},{url:"/_next/static/chunks/pages/index-61bb38ad09ab4095.js",revision:"61bb38ad09ab4095"},{url:"/_next/static/chunks/pages/s3uploader-cd3505ac65aa1a94.js",revision:"cd3505ac65aa1a94"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/1761ba84d2453b5a.css",revision:"1761ba84d2453b5a"},{url:"/_next/static/css/1f0f206e978c39ba.css",revision:"1f0f206e978c39ba"},{url:"/_next/static/css/2324472fdc9dea8d.css",revision:"2324472fdc9dea8d"},{url:"/_next/static/css/77ffc3299ea15542.css",revision:"77ffc3299ea15542"},{url:"/_next/static/css/8663bda2ad17cf9b.css",revision:"8663bda2ad17cf9b"},{url:"/_next/static/css/96d44829070065e4.css",revision:"96d44829070065e4"},{url:"/_next/static/media/icomoon.31340cd8.ttf",revision:"31340cd8"},{url:"/_next/static/media/icomoon.40d9a658.eot",revision:"40d9a658"},{url:"/_next/static/media/icomoon.540820a0.woff",revision:"540820a0"},{url:"/_next/static/media/icomoon.62543076.svg",revision:"62543076"},{url:"/favicon.ico",revision:"c9e10354ff0972df1b9a3d78888836b3"},{url:"/favicon.png",revision:"473023c5d4f5840766b6c0bef0052b56"},{url:"/fonts/Raleway.ttf",revision:"3ec1aa8901bbee53c49cc8b4e011a0e1"},{url:"/images/avatar_placeholder.png",revision:"3b131034c2c1d597bba68edb02369c34"},{url:"/images/down_sans_arrow_icon.svg",revision:"740dfbc9a85b8c6345a310e04557cb49"},{url:"/images/icons/bus.png",revision:"d8443afc61cb17c30fab95b7b9ad712a"},{url:"/images/icons/car.png",revision:"97a7b72e7e8c1e170e761f833b3113d8"},{url:"/images/icons/google.png",revision:"ff665b5398a609bf5206650ce2546ad3"},{url:"/images/icons/gym.png",revision:"9e304e0e1d3aec4185b6d45e6421fcc8"},{url:"/images/icons/park.png",revision:"676dbfd449767cef17099bee5c97b5db"},{url:"/images/leaf.png",revision:"70f512bb23518072481b2790ddf442eb"},{url:"/images/leaf2.png",revision:"00343f28845e9791628eccfd92224bbc"},{url:"/images/logo.png",revision:"5e7411cf9138e13af6a6800ef7d56e65"},{url:"/images/manifest/icon-192x192.png",revision:"f86536731634aa36d3855326baede5d2"},{url:"/images/manifest/icon-256x256.png",revision:"4be5993d25ced6fa024acf10f86c19a5"},{url:"/images/manifest/icon-384x384.png",revision:"66e5177a9724442bf532b0226c9940b4"},{url:"/images/manifest/icon-512x512.png",revision:"1f64556748d7908ebf41ede1ae9583d4"},{url:"/images/placeholder.png",revision:"363f7e495d2d2e4f1407657b52c37cdb"},{url:"/images/prelogin_form_visual.png",revision:"0db4263ccec71c96d4c854d1af4f5372"},{url:"/images/prelogin_visual_bg.png",revision:"252573ec4d961377c45a0a94d3fa9237"},{url:"/images/sample-images/event_1.png",revision:"3f877ae4a59e0baa8baba2790498b4d1"},{url:"/images/sample-images/event_2.png",revision:"87a8bf0889d70639d26cf52d1f54a475"},{url:"/images/sample-images/event_3.png",revision:"98f25865a4ef13506a43a31fc5a640cd"},{url:"/images/sample-images/event_naidc.png",revision:"5dd7ca6e61df77f6275d17d3635d5c0f"},{url:"/images/sidebg.png",revision:"7e3a3d8f63d85f4f4ebcd792de77fc98"},{url:"/images/uplaodpdf.png",revision:"544bc4d7a87c9a7f7407da2ca92cabfc"},{url:"/manifest.json",revision:"8bae4264a9faaa493490852027caf02e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
