(()=>{function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},o=t.parcelRequireb18d;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequireb18d=o);var a=o.register;a("kI8SP",function(t,r){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>o,e=>o=e);var n,o,a=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})},o=function(e){var t=a.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),a("hIarR",function(t,r){e(t.exports,"getBundleURL",()=>n,e=>n=e);var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),a("dTwV1",function(e,t){e.exports=o("dNLwc")(o("kI8SP").resolve("eM6PU")).then(()=>o("6vhjD"))}),a("dNLwc",function(e,t){var r=o("7lV8K");e.exports=r(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),r(n)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)})})}),a("7lV8K",function(e,t){var r={},n={},o={};e.exports=function(e,t){return function(a){var i=function(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}(t);return i[a]?i[a]:i[a]=e.apply(null,arguments).catch(function(e){throw delete i[a],e})}}}),o("kI8SP").register(o("hIarR").getBundleURL("cybPK"),JSON.parse('["cybPK","main.js","eM6PU","../dragAndDrop.createDraggables.0f05d1fd.js"]')),document.querySelector(".menu")&&new class{constructor(){this.toggle=document.querySelector(".menu__toggle"),this.details=this.toggle.closest("details"),this.toggle.addEventListener("click",()=>this.toggleMenu()),this.init()}init(){this.toggle.tabIndex=0,this.toggle.setAttribute("role","button"),this.toggle.setAttribute("aria-expanded","false"),this.toggle.setAttribute("aria-controls","menu-content"),this.details.setAttribute("role","presentation")}toggleMenu(){let e=Array.from(document.querySelectorAll(".window"));this.ariaExpanded="false"|JSON.parse(this.toggle.getAttribute("aria-expanded")),this.toggle.setAttribute("aria-expanded",!this.ariaExpanded),e&&e.forEach(e=>e.style.zIndex=0)}},o("dTwV1").then(e=>{e.default()})})();
//# sourceMappingURL=main.js.map
