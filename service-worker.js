if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,a,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"5d01a581b705159a3f914eebc08f6a05"},{url:"2021/07/05/Git基础/index.html",revision:"015c556adc57238fa81126c163c18de2"},{url:"2021/07/06/Markdown基础/index.html",revision:"252d42e3419d381a32b6a857ece50cc1"},{url:"2021/07/06/基本Dos命令/index.html",revision:"72e1f5b4934f6cfeac0f72454ebc8481"},{url:"404.html",revision:"28645c0a653fe9c58b9725aef8e62a13"},{url:"about/index.html",revision:"ad72550a04ab7322604a23fa3cf0d8b5"},{url:"archives/2021/06/index.html",revision:"7bdcc9612370d70d669052e7a61aa22a"},{url:"archives/2021/07/index.html",revision:"047ee8bc64b31fa59859de8f0d329daf"},{url:"archives/2021/index.html",revision:"ab40d556dfbbcf0803172b7b765bd6b2"},{url:"archives/index.html",revision:"84642e89a60df532bbdacc0e080e1d0a"},{url:"bangumis/index.html",revision:"2327af787c457470ad7b57591fcd6239"},{url:"books/index.html",revision:"221fd82e6d18e3fc2877929f33b5097e"},{url:"categories/Git基础/index.html",revision:"7763df4a4e7ab428d135bee5c9eee4fb"},{url:"categories/index.html",revision:"6f82567530116b3c0ccaf42811fae71b"},{url:"categories/Markdown基础/index.html",revision:"d5e1cf5a2691f6240a43260484387ecc"},{url:"categories/学习笔记/index.html",revision:"a00aeccf44e79f86d78d530eaaa4c0c4"},{url:"categories/常用基础Dos命令/index.html",revision:"2d07b8f98fbbea95467a2e9d2d3aca43"},{url:"comments/index.html",revision:"3c7b5435e32c184b601ac57fa1f9a924"},{url:"contact/index.html",revision:"7fc490335561f052cc7b56eec9799132"},{url:"css/copyright.css",revision:"8a945c7ceb5a4a4c055671868f38d39c"},{url:"css/cover.css",revision:"136b4eeac72e2870c039e6e6549a100f"},{url:"css/custom.css",revision:"a7a4e8613f6fba3aedafca6d2672c119"},{url:"css/icon.css",revision:"843989c4f4cbe0bbc219fa679ccffd5f"},{url:"css/index.css",revision:"018a551cc6fa10baebb63661b6ca6b53"},{url:"css/Late.css",revision:"41448fdea9fb84f1d62d4727eedbedb3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"559f0ed2d6ed8d64ca264f720f5d50c7"},{url:"gallery/index.html",revision:"cea1619999e94801fdf99e4693d114f1"},{url:"gallery/marvel/index.html",revision:"d27da4c30cfa467293a76e10c99f0874"},{url:"gallery/ohmygirl/index.html",revision:"c58d7507734af566171c7edb4f7ff18a"},{url:"gallery/wallpaper/index.html",revision:"a638aaedeed6b121fba70f476ab8fefa"},{url:"games/index.html",revision:"8f5eaa99880147e226d2328d93336ac9"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"508b9d42f609efabc50dd028bd100496"},{url:"img/favicon1.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/up.gif",revision:"9e918952eedd00361076d168563ad2ba"},{url:"index.html",revision:"f28055e213758284c99ede8fc6c9bab7"},{url:"js/chocolate.js",revision:"535ba684677e5b09f2c12173afdc7735"},{url:"js/cursor.js",revision:"a4ab163d0efd88212549cc93b7c8aeb1"},{url:"js/jquery-3.5.1.min.js",revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{url:"js/Late.js",revision:"31c802ee89f9ff47eedccb53356a401e"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/runtime.js",revision:"fe5f3341eb39d76840b5e0b0ba959be5"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"949511456f0e8c5f66ee28705e6dc7eb"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"864a3e598bd47c726a5174342ce69b67"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"6790fe17ee0264f77ba972c941f5d4c3"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"8077d5699e11d4433d88016378b37030"},{url:"mainfest.js",revision:"2af6a1915089c163fc929291db9a0de3"},{url:"movies/index.html",revision:"8bfd7e62b9db88da45a3256919879c26"},{url:"music/index.html",revision:"b1ebeb158abb8aac04bf42d0f60a2e49"},{url:"page/index.html",revision:"93a6c530d2d4512d9bb256a6fda64fad"},{url:"post/index.html",revision:"fd9a934aeaaad10f4317a286516614f4"},{url:"tags/Butterfly/index.html",revision:"9b5d54d91d26b30d48f3267e161b398f"},{url:"tags/Coding/index.html",revision:"ef9e813437ac2c27cb58ba5bd07b7cc1"},{url:"tags/Dos/index.html",revision:"eda109c6f2166f73dfe682bb7b5807c5"},{url:"tags/Git/index.html",revision:"a446d01a69244e488126f599c2d7fa05"},{url:"tags/Gitee/index.html",revision:"fdd64d09d75517aa7f5cd8973c548331"},{url:"tags/GitHub/index.html",revision:"e85f09f74511954dced7645fd37b227a"},{url:"tags/Git基础操作/index.html",revision:"268938e715cfc959cc0b21057f8b0e2f"},{url:"tags/Hexo/index.html",revision:"29ba7fa071c1f59b2ecc7c7e057728c6"},{url:"tags/index.html",revision:"a7c8bc29891e995a1fcca429d0c92e8a"},{url:"tags/Markdown/index.html",revision:"30050b8864fda947b02691e6af5c6bd8"},{url:"tags/Markdown基础/index.html",revision:"5d2573f48748a0891a546e3321a49bf8"},{url:"tags/Node-js/index.html",revision:"d1dc1eb4afa50524653a79c0e2d05159"},{url:"tags/博客/index.html",revision:"312814e4c179fbdfc9b304e8c1a405b3"},{url:"tags/常用基础Dos命令/index.html",revision:"9d920810505d450da8de9d6952f76705"},{url:"tags/美化/index.html",revision:"99f2df65065f8cf3f9e46ff8d0638b98"}],{})}));
//# sourceMappingURL=service-worker.js.map
