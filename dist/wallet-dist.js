(()=>{"use strict";var e,t,r,n,a,o,i,s={530:(e,t,r)=>{r.a(e,(async e=>{let t;Promise.all([r.e(305),r.e(148)]).then(r.bind(r,305)).then((e=>t=e));const n=async()=>!!await ergo_request_read_access()&&(await a(),await ergo_check_read_access()),a=async()=>{let e=await(async()=>await ergo.get_change_address())();localStorage.setItem("userWallet",e)},o=()=>"userWallet"in localStorage;await(async()=>{console.log(o()),o()?console.log("Wallet not yet registered"):(console.log("Wallet not null!"),await n())})(),document.getElementById("wallet").addEventListener("click",n),e()}),1)}},c={};function l(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return s[e](r,r.exports,l),r.loaded=!0,r.exports}l.m=s,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n=e=>!--e.r&&e(),a=(e,t)=>e?e.push(t):n(t),l.a=(o,i,s)=>{var c,l,u,p=s&&[],d=o.exports,b=!0,f=!1,h=(t,r,n)=>{f||(f=!0,r.r+=t.length,t.map(((t,a)=>t[e](r,n))),f=!1)},m=new Promise(((e,t)=>{u=t,l=()=>(e(d),r(p),p=0)}));m[t]=d,m[e]=(e,t)=>{if(b)return n(e);c&&h(c,e,t),a(p,e),m.catch(t)},o.exports=m,i((o=>{if(!o)return l();var i,s;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var i=[];o.then((e=>{s[t]=e,r(i),i=0}));var s={};return s[e]=(e,t)=>(a(i,e),o.catch(t)),s}}var c={};return c[e]=e=>n(e),c[t]=o,c})))(o);var u=new Promise(((e,r)=>{(i=()=>e(s=c.map((e=>e[t])))).r=0,h(c,i,r)}));return i.r?u:s})).then(l,u),b=!1},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+".wallet-dist.js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},i="cybercitizens:",l.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var a,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==i+r){a=p;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",i+r),a.src=e),o[e]=[t];var d=(t,r)=>{a.onerror=a.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.v=(e,t,r,n)=>{var a=fetch(l.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,n).then((t=>Object.assign(e,t.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=l.p+l.u(t),i=new Error;l.l(o,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,i,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);s&&s(l)}for(t&&t(r);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkcybercitizens=self.webpackChunkcybercitizens||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l(530)})();