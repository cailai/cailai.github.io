if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,s)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return a;default:return e(i)}}))).then((e=>{const i=s(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"002cc8cadf9574a6255b412dec8b7942"},{url:"2021/07/05/Git基础/index.html",revision:"5a8175d2a5778877fdd2d7128dcf06cb"},{url:"2021/07/06/Markdown基础/index.html",revision:"62cecd0b91a2d4bf8b8ffcc16fa7ab6c"},{url:"2021/07/06/基本Dos命令/index.html",revision:"47b7fe80a89863ef9d857d138f138c50"},{url:"404.html",revision:"68e72e5feb392e745f6d7bc9900a8fa3"},{url:"about/index.html",revision:"a26530b15ab00dfaea6d1c810497e7a5"},{url:"archives/2021/06/index.html",revision:"a6184b674c8a4b0a267ac1e9a7b76867"},{url:"archives/2021/07/index.html",revision:"7f0569e637f46ca03a0abd20a6e73123"},{url:"archives/2021/index.html",revision:"c711ca4858a69f13076d3134b0034eb9"},{url:"archives/index.html",revision:"e6e52b973c3b7411abb77f6d0b635262"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Git基础/index.html",revision:"12f58509cd9538e47cf4c8c3d80c53ee"},{url:"categories/index.html",revision:"9378258dfdf021f1ad416fbbe209a3c8"},{url:"categories/Markdown基础/index.html",revision:"94bacf8e262f09fa2a9345552584629a"},{url:"categories/学习笔记/index.html",revision:"c3d48b0fe1fb75c5723e75204fa6e3d9"},{url:"categories/常用基础Dos命令/index.html",revision:"fc075014070fe28949e9b812d8f62c4c"},{url:"comments/index.html",revision:"f94f59dafaadff38859fd9ba475d7892"},{url:"contact/index.html",revision:"024bd9438cbdc2ec216478ab08f4d11e"},{url:"css/copyright.css",revision:"8a945c7ceb5a4a4c055671868f38d39c"},{url:"css/custom.css",revision:"304e102b8022b2dafc455fbfac80ea5d"},{url:"css/icon.css",revision:"843989c4f4cbe0bbc219fa679ccffd5f"},{url:"css/index.css",revision:"018a551cc6fa10baebb63661b6ca6b53"},{url:"css/Late.css",revision:"41448fdea9fb84f1d62d4727eedbedb3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"c7b598371b40dc8a68e9dd887178a918"},{url:"gallery/index.html",revision:"c85499aff58925579fcd138304ea740f"},{url:"gallery/marvel/index.html",revision:"1741a78209a83e036cc5ef617d9ba289"},{url:"gallery/ohmygirl/index.html",revision:"a820152580bf9d3e2f931f437f689c12"},{url:"gallery/wallpaper/index.html",revision:"f8665c294d152c2ca9c22402afa98777"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"508b9d42f609efabc50dd028bd100496"},{url:"img/favicon1.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"70c01d7ee4e41251d2308153170cc4f8"},{url:"index.html",revision:"16cc436534ab5e68f9625a5717557eca"},{url:"js/jquery-3.5.1.min.js",revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{url:"js/Late.js",revision:"0655a9c49e96278a2471e1f1e66e8de2"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/runtime.js",revision:"fe5f3341eb39d76840b5e0b0ba959be5"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"8650fda4ec69344deea618babbf3ff46"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"9c158d3ee78001b76bc55de1c003da69"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"79eb6c655777f2588d0c2f667d4222f6"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"mainfest.js",revision:"ff074e5d0c2ec65ba22cfabff495dea4"},{url:"movies/index.html",revision:"6db5714d6472dd9af93031f5ce30fdf8"},{url:"music/index.html",revision:"aacf0311b4152df35e0b0c8d741ae677"},{url:"page/index.html",revision:"46e088ac861fd1df7b42f2608bec13c7"},{url:"post/index.html",revision:"91bcb750d6897ba4721a2e613b861951"},{url:"tags/Butterfly/index.html",revision:"b743e260c95367874ca2038a2905881c"},{url:"tags/Coding/index.html",revision:"acbc08e8bfd04d6c60755fbb7d58784d"},{url:"tags/Dos/index.html",revision:"47c3026f932947b66971b90adbb4785b"},{url:"tags/Git/index.html",revision:"90e4f15f3fa6bf3747d42c894920cb0c"},{url:"tags/Gitee/index.html",revision:"52bc238beb447c41bfbf75ae30adf990"},{url:"tags/GitHub/index.html",revision:"718724dec9146423232b47da61dfbef8"},{url:"tags/Git基础操作/index.html",revision:"20c2cd21fbd0a650f2c38d76e9507577"},{url:"tags/Hexo/index.html",revision:"43318fcb47dbc58717d9f5979a4f0f29"},{url:"tags/index.html",revision:"ad168211af7c4b7d0239e847433effab"},{url:"tags/Markdown/index.html",revision:"be1600fa4a38f77b1965d00f428a0941"},{url:"tags/Markdown基础/index.html",revision:"46d720429770d0c290016d9f9c88b8c9"},{url:"tags/Node-js/index.html",revision:"7999a45ac067df7009683a11db6478fa"},{url:"tags/博客/index.html",revision:"8b02f360f10546ef38173390793d32b0"},{url:"tags/常用基础Dos命令/index.html",revision:"704b841779410b0f46f8ebd36f3a4ca4"},{url:"tags/美化/index.html",revision:"d3d96718008612e5ce17cd34c108e676"}],{})}));
//# sourceMappingURL=service-worker.js.map
