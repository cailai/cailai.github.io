if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"2a8a6939538bf98e77cd562d0be71480"},{url:"404.html",revision:"48f81addf655fb382e9cfd97a6d0bedc"},{url:"about/index.html",revision:"6c44f0be61a268d6aa64894c432c50cd"},{url:"archives/2021/06/index.html",revision:"1eda1c9c2ba5136df09e01447abf46f1"},{url:"archives/2021/index.html",revision:"ebdfca6176a34dcf42ad479feb76d054"},{url:"archives/index.html",revision:"c49a533d7dfab3f7d4080344fb9bf2f5"},{url:"categories/index.html",revision:"53d0aa161261dd1dc67fe6d9eac6a040"},{url:"categories/學習筆記/index.html",revision:"d49b6975696387113a240f4d4a5b7030"},{url:"contact/index.html",revision:"890a2f5a72a8c965c4233c5cbf330dfc"},{url:"css/index.css",revision:"ec4d7ca7a996f538855bc1882555cb35"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"70601fdf45c12bb1aa2fed4bd26b6422"},{url:"gallery/index.html",revision:"d1cb3dcbb4339390876a7343c1c63392"},{url:"gallery/marvel/index.html",revision:"61bb11cf7ad7cb12d6d8e7abeb2c4c49"},{url:"gallery/ohmygirl/index.html",revision:"dc3e54c53e0e7f5613c128c6b6cde403"},{url:"gallery/wallpaper/index.html",revision:"7cc41e7dd66ed33246727a1a1185e4dd"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"6c83503a146ba28568174e7f6be76869"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"9c480160c3f542f8ab8e16f41261b41e"},{url:"mainfest.js",revision:"2af6a1915089c163fc929291db9a0de3"},{url:"music/index.html",revision:"3fa3a921009b56370b90ae2226df9d85"},{url:"page/index.html",revision:"17134c1ee75fac55c90ebc7cc398f0f3"},{url:"post/index.html",revision:"ffde17b2f44f090c7cd43464a26188ad"},{url:"tags/hexo/index.html",revision:"8455aff5769543c5da14938fae96d325"},{url:"tags/index.html",revision:"4596be33446837278b19c91c81f1a572"},{url:"tags/node-js/index.html",revision:"12ee945348bde9c039d4371e886e48fe"}],{})}));
//# sourceMappingURL=service-worker.js.map
