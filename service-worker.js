if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"79af810d3b204a60d2f9c87e6f461fc6"},{url:"2021/07/06/Git基础/index.html",revision:"1e2971a39ff3d0c3908b824eed599de3"},{url:"2021/07/06/Markdown基础/index.html",revision:"e94cbaa1b980114b0eed6980eeade973"},{url:"2021/07/06/基本Dos命令/index.html",revision:"5e9c4471b265cebf05d3bf3ec10cac1f"},{url:"2021/07/10/Git基础/index.html",revision:"70b1792c366d0bb65d0adcba4174daa9"},{url:"404.html",revision:"f42404a0f5206c816e8255d371535a8f"},{url:"about/index.html",revision:"fbdbf4e27294abf16232d24e6b08f5ab"},{url:"archives/2021/06/index.html",revision:"735ae80cf761d77e9e5e7c4be8716b70"},{url:"archives/2021/07/index.html",revision:"cbf615646f3d680af8c07defbd8a0fa8"},{url:"archives/2021/index.html",revision:"27df4a1b468888c3e0aa420b832defda"},{url:"archives/index.html",revision:"5858fc9315ffe277cac1374a3c09fd97"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Git基础/index.html",revision:"2ad1b29a67e39d71e505aa1601147456"},{url:"categories/index.html",revision:"7c63b98b7d01a36c11d534eab0552e31"},{url:"categories/Markdown基础/index.html",revision:"141b069fcf56bb4ea5483c6a58717d48"},{url:"categories/学习笔记/index.html",revision:"00204732356ef152fc889c0b65c4c766"},{url:"categories/常用基础Dos命令/index.html",revision:"bccdf82c3da0442680f39a06a121c802"},{url:"comments/index.html",revision:"4be995fc4603e1e409807b9331aee2da"},{url:"contact/index.html",revision:"7963df124fc67cfb415667b2b6d4dde5"},{url:"css/custom.css",revision:"304e102b8022b2dafc455fbfac80ea5d"},{url:"css/icon.css",revision:"843989c4f4cbe0bbc219fa679ccffd5f"},{url:"css/index.css",revision:"2b26629e7b409ed59b36006f9db72476"},{url:"css/Late.css",revision:"41448fdea9fb84f1d62d4727eedbedb3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"fca31cd5ea02e7ba95a874327db84135"},{url:"gallery/index.html",revision:"cf64493031ec1a5da6e37b87a361d1a7"},{url:"gallery/marvel/index.html",revision:"b1f571a31289c50df1ebaa72026b1c55"},{url:"gallery/ohmygirl/index.html",revision:"de363e90e654a8c36f4c54c2405d8706"},{url:"gallery/wallpaper/index.html",revision:"c5681ff039b7cbdd189f29b10b2a389a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"508b9d42f609efabc50dd028bd100496"},{url:"img/favicon1.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"70c01d7ee4e41251d2308153170cc4f8"},{url:"index.html",revision:"0d16fd78c4e1ea00dca38bff33a4810a"},{url:"js/custom.js",revision:"18efce7de0d840dcab146cd172baed71"},{url:"js/jquery-3.5.1.min.js",revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{url:"js/Late.js",revision:"0655a9c49e96278a2471e1f1e66e8de2"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/runtime.js",revision:"fe5f3341eb39d76840b5e0b0ba959be5"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"f6f245cfe89d8bd37190a4968690cc28"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"9c158d3ee78001b76bc55de1c003da69"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"79eb6c655777f2588d0c2f667d4222f6"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"mainfest.js",revision:"ff074e5d0c2ec65ba22cfabff495dea4"},{url:"movies/index.html",revision:"918a987a756d51a26d3bfdaea0e6dfe9"},{url:"music/index.html",revision:"11d991b878df69d250dce0db74036fb1"},{url:"page/index.html",revision:"f26f82a14b76a25f480fac6f80953524"},{url:"post/index.html",revision:"4b23d8046a08e483cb4f42ca281042a6"},{url:"tags/Butterfly/index.html",revision:"0b5fa98344e823ba618fd9b0563ba9ca"},{url:"tags/Coding/index.html",revision:"67f608ea1787d1721b3e12a043d5a4b6"},{url:"tags/Dos/index.html",revision:"6197aa7bc3c0b4b0125bf30cff9a566a"},{url:"tags/Git/index.html",revision:"879492a0188550656a1cf61071cdc727"},{url:"tags/Gitee/index.html",revision:"2583bc0629e878fbd166201961db4326"},{url:"tags/GitHub/index.html",revision:"712675815497eead91c11413c8aa67fe"},{url:"tags/Git基础操作/index.html",revision:"ae988a6bb4a495aca278a9723ffac024"},{url:"tags/hexo/index.html",revision:"9e3ddceb37511a4cebc49124d98fef7d"},{url:"tags/index.html",revision:"9c457f911d564b2e2c2308e26673a9d3"},{url:"tags/Markdown/index.html",revision:"c4ded4c8958740426dfd2cd06fe7b196"},{url:"tags/Markdown基础/index.html",revision:"960b20c2f4826e358b0c728f673696cb"},{url:"tags/node-js/index.html",revision:"8b70105b7a75c94bb36649e0bfbdea1a"},{url:"tags/博客/index.html",revision:"916937874a9a290efc3bfbe9e0c75d2c"},{url:"tags/常用基础Dos命令/index.html",revision:"1772762b14bff8ef606198a3550cec22"},{url:"tags/美化/index.html",revision:"362ef4db35c0e2bfd199140cf4ea3102"}],{})}));
//# sourceMappingURL=service-worker.js.map
