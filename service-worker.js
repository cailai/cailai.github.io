if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"0b8018d569110b090e5461050c3891fd"},{url:"404.html",revision:"53e8339a10f262d9af77bad796365852"},{url:"about/index.html",revision:"c591f449299992ae0087002b284c8600"},{url:"archives/2021/06/index.html",revision:"f9682eb7814f19c2aad722f3f58c23ac"},{url:"archives/2021/index.html",revision:"b1ba3e695911efba31caf4a63a130b22"},{url:"archives/index.html",revision:"7020ebe9966eff173b80210cb853cf34"},{url:"categories/index.html",revision:"943193f53b250f30af309dabca109b80"},{url:"categories/学习笔记/index.html",revision:"eed01feb5192636c2418e132e0f2776a"},{url:"contact/index.html",revision:"6f162c41e76eed93ee1d64ee1c75b765"},{url:"css/index.css",revision:"a7314837ffc46dc51914e354651e5ee4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"15c693526857e010d213d2efdad78db5"},{url:"gallery/index.html",revision:"e901b46404655e25baa8b4994f3801c7"},{url:"gallery/marvel/index.html",revision:"175b3cc987b03bef5dfda087543a5fb2"},{url:"gallery/ohmygirl/index.html",revision:"93f130324b1a6d55cef8ad7db3b5e58d"},{url:"gallery/wallpaper/index.html",revision:"96b5534b00776afad9d4866afe75fbf3"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"360801e6cedb1a625b15f7e41eda56af"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"20eeaa6bdbcefc60b8a86fa4ebc1d8f5"},{url:"mainfest.js",revision:"2af6a1915089c163fc929291db9a0de3"},{url:"movies/index.html",revision:"40e2fa918a4dfdee9a4acdf8d45710d1"},{url:"music/index.html",revision:"85852fa5327f1d1559c8d32a28bf8216"},{url:"page/index.html",revision:"1c8f95736c69853c6c22a141c90366d9"},{url:"post/index.html",revision:"b6ef8a3c6ba7e9e0933bb0391bdbac5c"},{url:"tags/Butterfly/index.html",revision:"0b358e5c9675b2fe2ff2f5d54cb22cfb"},{url:"tags/Git/index.html",revision:"46046e42ab7b74048e4a43d18443f811"},{url:"tags/GitHub/index.html",revision:"e630f91baa1e55aef7bfd9862e6a71d2"},{url:"tags/hexo/index.html",revision:"bdf7b4e8c04a6a22bf3e6f03220dbae1"},{url:"tags/index.html",revision:"881f1bb63b04e19c54804dc3045b176f"},{url:"tags/node-js/index.html",revision:"97387a427f69796a26c48f58e5cbc149"},{url:"tags/博客/index.html",revision:"a6aeb4f62f97a8e3afd3f7a9776da3c0"},{url:"tags/美化/index.html",revision:"9bfd6f2a8f42cfd24d12ff5dd247ee57"}],{})}));
//# sourceMappingURL=service-worker.js.map
