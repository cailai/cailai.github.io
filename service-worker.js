if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,s)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return a;default:return e(i)}}))).then((e=>{const i=s(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/08/hello-world/index.html",revision:"d8f55bcad75d3f1f3b46e9487463534c"},{url:"2021/07/05/Git/index.html",revision:"3bf616f072ead9203d33a403916d2d56"},{url:"404.html",revision:"a53ca2e36f522c385c522aa8edd53421"},{url:"about/index.html",revision:"fb4aca29face4644f1d6649d686580d2"},{url:"archives/2021/06/index.html",revision:"a04954c010914809ed6dde9bb17428f2"},{url:"archives/2021/07/index.html",revision:"906adee355f957f15ec4816e984aec37"},{url:"archives/2021/index.html",revision:"8235689353b0a7b64155faa8c88ac8d4"},{url:"archives/index.html",revision:"c913ec34bd5a0f9f4b0a65ad18e40990"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Git基础/index.html",revision:"ec18ce66205722146f3f2684670645c4"},{url:"categories/index.html",revision:"65398da9d0c79b41ff48357e31a04144"},{url:"categories/学习笔记/index.html",revision:"b6054c1b1ab6dd3c696ee714467e7543"},{url:"comments/index.html",revision:"2da1e9fe4983ec32e49a0c74a34c8bca"},{url:"contact/index.html",revision:"7851fc08fd22bfc00ad4d997b960f67a"},{url:"css/index.css",revision:"a7314837ffc46dc51914e354651e5ee4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"ef243889fb17c75650ff1ec36ed8e266"},{url:"gallery/index.html",revision:"8ac11fc16931931b1c46c8264f95bf2a"},{url:"gallery/marvel/index.html",revision:"ad3241eb0b7dc0478a94fed60a95987c"},{url:"gallery/ohmygirl/index.html",revision:"27e5f7dc0c04ecf3936b1bb259dd1924"},{url:"gallery/wallpaper/index.html",revision:"02fbb877aa0e9afd48ec5bc8bf158169"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7ce9a1a748101438ee3aecd7a88d43e9"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"6e8f4ee4344d99e8df4cf0d18e937853"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"9c158d3ee78001b76bc55de1c003da69"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"79eb6c655777f2588d0c2f667d4222f6"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"mainfest.js",revision:"ff074e5d0c2ec65ba22cfabff495dea4"},{url:"movies/index.html",revision:"09b1db1999d35777a4239ca9d4bf3ded"},{url:"music/index.html",revision:"934e625a068f3b4f9e80040cefedf8dd"},{url:"page/index.html",revision:"5bd80c1c857693bf4df9dd1dc0fb3e13"},{url:"post/index.html",revision:"ee7b96388e8dcfba652395a222945217"},{url:"tags/Butterfly/index.html",revision:"4abd0318ab6bb610c9462b415a20440b"},{url:"tags/Git/index.html",revision:"4d8305476c1e04bf4bbfa6bd659ea75a"},{url:"tags/GitHub/index.html",revision:"e370c906e906506d6356fcf1db76a50c"},{url:"tags/hexo/index.html",revision:"a3d1dcf00604deeff2b340ce1546a562"},{url:"tags/index.html",revision:"e14ae721a5f630b29b684edd0e1fdabb"},{url:"tags/node-js/index.html",revision:"3ee244aba66271572f675ab304f59262"},{url:"tags/博客/index.html",revision:"26c0d3491235c75f50ff961364ceb761"},{url:"tags/美化/index.html",revision:"0fcc9bc1399d5075a672f8d32c9e7714"}],{})}));
//# sourceMappingURL=service-worker.js.map
