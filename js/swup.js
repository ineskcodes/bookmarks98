(()=>{function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=globalThis,n={},r={},o=t.parcelRequireb18d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireb18d=o);var i=o.register;i("kI8SP",function(t,n){e(t.exports,"register",()=>r,e=>r=e),e(t.exports,"resolve",()=>o,e=>o=e);var r,o,i=new Map;r=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})},o=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),i("hIarR",function(t,n){e(t.exports,"getBundleURL",()=>r,e=>r=e);var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("dNovs",function(e,t){e.exports=o("dNLwc")(o("kI8SP").resolve("4Lo6k")).then(()=>o("6N4re"))}),i("dNLwc",function(e,t){var n=o("7lV8K");e.exports=n(function(e){return new Promise(function(t,n){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var r=document.createElement("link");r.href=e,r.rel="preload",r.as="script",document.head.appendChild(r);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var r=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),n(r)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)})})}),i("7lV8K",function(e,t){var n={},r={},o={};e.exports=function(e,t){return function(i){var s=function(e){switch(e){case"preload":return r;case"prefetch":return o;default:return n}}(t);return s[i]?s[i]:s[i]=e.apply(null,arguments).catch(function(e){throw delete s[i],e})}}}),i("5IXZj",function(e,t){e.exports=o("dNLwc")(o("kI8SP").resolve("ayWPq")).then(()=>o("Nxxra"))}),i("2GheJ",function(e,t){e.exports=o("dNLwc")(o("kI8SP").resolve("6ExKj")).then(()=>o("bBmiD"))}),i("dTwV1",function(e,t){e.exports=o("dNLwc")(o("kI8SP").resolve("eM6PU")).then(()=>o("6vhjD"))}),o("kI8SP").register(o("hIarR").getBundleURL("61e5g"),JSON.parse('["61e5g","swup.js","eM6PU","../dragAndDrop.createDraggables.09da2ddc.js","4Lo6k","../menu.06ac61a7.js","ayWPq","../bookmarks.15b678c9.js","6ExKj","../windowManager.b81d9194.js"]'));let s=new WeakMap;function a(e,t,n,r){if(!e&&!s.has(t))return!1;let o=s.get(t)??new WeakMap;s.set(t,o);let i=o.get(n)??new Set;o.set(n,i);let a=i.has(r);return e?i.add(r):i.delete(r),a&&e}var l=function(e,t,n,r={}){let{signal:o,base:i=document}=r;if(o?.aborted)return;let{once:s,...l}=r,c=i instanceof Document?i.documentElement:i,u=!!("object"==typeof r?r.capture:r),h=r=>{let o=function(e,t){let n=e.target;if(n instanceof Text&&(n=n.parentElement),n instanceof Element&&e.currentTarget instanceof Element){let r=n.closest(t);if(r&&e.currentTarget.contains(r))return r}}(r,e);if(o){let e=Object.assign(r,{delegateTarget:o});n.call(c,e),s&&(c.removeEventListener(t,h,l),a(!1,c,n,d))}},d=JSON.stringify({selector:e,type:t,capture:u});a(!0,c,n,d)||c.addEventListener(t,h,l),o?.addEventListener("abort",()=>{a(!1,c,n,d)})};let c=(e,t)=>String(e).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||t||"",u=({hash:e}={})=>window.location.pathname+window.location.search+(e?window.location.hash:""),h=(e,t={})=>{let n={url:e=e||u({hash:!0}),random:Math.random(),source:"swup",...t};window.history.pushState(n,"",e)},d=(e=null,t={})=>{e=e||u({hash:!0});let n={...window.history.state||{},url:e,random:Math.random(),source:"swup",...t};window.history.replaceState(n,"",e)},f=(e,t,n,r)=>{let o=new AbortController;return l(e,t,n,r={...r,signal:o.signal}),{destroy:()=>o.abort()}};class p extends URL{constructor(e,t=document.baseURI){super(e.toString(),t),Object.setPrototypeOf(this,p.prototype)}get url(){return this.pathname+this.search}static fromElement(e){return new p(e.getAttribute("href")||e.getAttribute("xlink:href")||"")}static fromUrl(e){return new p(e)}}let m=function(e,t={}){try{let r=this;function n(n){let{status:i,url:s}=c;return Promise.resolve(c.text()).then(function(n){if(500===i)throw r.hooks.call("fetch:error",o,{status:i,response:c,url:s}),new v(`Server error: ${s}`,{status:i,url:s});if(!n)throw new v(`Empty response: ${s}`,{status:i,url:s});let{url:a}=p.fromUrl(s),l={url:a,html:n};return!o.cache.write||t.method&&"GET"!==t.method||e!==a||r.cache.set(l.url,l),l})}e=p.fromUrl(e).url;let{visit:o=r.visit}=t,i={...r.options.requestHeaders,...t.headers},s=t.timeout??r.options.timeout,a=new AbortController,{signal:l}=a;t={...t,headers:i,signal:l};let c,u=!1,h=null;s&&s>0&&(h=setTimeout(()=>{u=!0,a.abort("timeout")},s));let d=function(n,i){try{var s=Promise.resolve(r.hooks.call("fetch:request",o,{url:e,options:t},(e,{url:t,options:n})=>fetch(t,n))).then(function(e){c=e,h&&clearTimeout(h)})}catch(e){return i(e)}return s&&s.then?s.then(void 0,i):s}(0,function(t){if(u)throw r.hooks.call("fetch:timeout",o,{url:e}),new v(`Request timed out: ${e}`,{url:e,timedOut:u});if("AbortError"===t?.name||l.aborted)throw new v(`Request aborted: ${e}`,{url:e,aborted:!0});throw t});return Promise.resolve(d&&d.then?d.then(n):n())}catch(e){return Promise.reject(e)}};class v extends Error{constructor(e,t){super(e),this.url=void 0,this.status=void 0,this.aborted=void 0,this.timedOut=void 0,this.name="FetchError",this.url=t.url,this.status=t.status,this.aborted=t.aborted||!1,this.timedOut=t.timedOut||!1}}class g{constructor(e){this.swup=void 0,this.pages=new Map,this.swup=e}get size(){return this.pages.size}get all(){let e=new Map;return this.pages.forEach((t,n)=>{e.set(n,{...t})}),e}has(e){return this.pages.has(this.resolve(e))}get(e){let t=this.pages.get(this.resolve(e));return t?{...t}:t}set(e,t){e=this.resolve(e),t={...t,url:e},this.pages.set(e,t),this.swup.hooks.callSync("cache:set",void 0,{page:t})}update(e,t){e=this.resolve(e);let n={...this.get(e),...t,url:e};this.pages.set(e,n)}delete(e){this.pages.delete(this.resolve(e))}clear(){this.pages.clear(),this.swup.hooks.callSync("cache:clear",void 0,void 0)}prune(e){this.pages.forEach((t,n)=>{e(n,t)&&this.delete(n)})}resolve(e){let{url:t}=p.fromUrl(e);return this.swup.resolveUrl(t)}}let w=(e,t=document)=>t.querySelector(e),y=(e,t=document)=>Array.from(t.querySelectorAll(e)),b=()=>new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e()})})});function P(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}class k{constructor(e){this.swup=void 0,this.swupClasses=["to-","is-changing","is-rendering","is-popstate","is-animating","is-leaving"],this.swup=e}get selectors(){let{scope:e}=this.swup.visit.animation;return"containers"===e?this.swup.visit.containers:"html"===e?["html"]:Array.isArray(e)?e:[]}get selector(){return this.selectors.join(",")}get targets(){return this.selector.trim()?y(this.selector):[]}add(){this.targets.forEach(e=>e.classList.add(...[].slice.call(arguments)))}remove(){this.targets.forEach(e=>e.classList.remove(...[].slice.call(arguments)))}clear(){this.targets.forEach(e=>{let t=e.className.split(" ").filter(e=>this.isSwupClass(e));e.classList.remove(...t)})}isSwupClass(e){return this.swupClasses.some(t=>e.startsWith(t))}}class S{constructor(e,t){this.id=void 0,this.state=void 0,this.from=void 0,this.to=void 0,this.containers=void 0,this.animation=void 0,this.trigger=void 0,this.cache=void 0,this.history=void 0,this.scroll=void 0;let{to:n,from:r=e.currentPageUrl,hash:o,el:i,event:s}=t;this.id=Math.random(),this.state=1,this.from={url:r},this.to={url:n,hash:o},this.containers=e.options.containers,this.animation={animate:!0,wait:!1,name:void 0,native:e.options.native,scope:e.options.animationScope,selector:e.options.animationSelector},this.trigger={el:i,event:s},this.cache={read:e.options.cache,write:e.options.cache},this.history={action:"push",popstate:!1,direction:void 0},this.scroll={reset:!0,target:void 0}}advance(e){this.state<e&&(this.state=e)}abort(){this.state=8}get done(){return this.state>=7}}function E(e){return new S(this,e)}let A="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function x(e,t,n){if(!e.s){if(n instanceof T){if(!n.s)return void(n.o=x.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(x.bind(null,e,t),x.bind(null,e,2));e.s=t,e.v=n;let r=e.o;r&&r(e)}}let T=function(){function e(){}return e.prototype.then=function(t,n){let r=new e,o=this.s;if(o){let e=1&o?t:n;if(e){try{x(r,1,e(this.v))}catch(e){x(r,2,e)}return r}return this}return this.o=function(e){try{let o=e.v;1&e.s?x(r,1,t?t(o):o):n?x(r,1,n(o)):x(r,2,o)}catch(e){x(r,2,e)}},r},e}();function U(e){return e instanceof T&&1&e.s}class C{constructor(e){this.swup=void 0,this.registry=new Map,this.hooks=["animation:out:start","animation:out:await","animation:out:end","animation:in:start","animation:in:await","animation:in:end","animation:skip","cache:clear","cache:set","content:replace","content:scroll","enable","disable","fetch:request","fetch:error","fetch:timeout","history:popstate","link:click","link:self","link:anchor","link:newtab","page:load","page:view","scroll:top","scroll:anchor","visit:start","visit:transition","visit:abort","visit:end"],this.swup=e,this.init()}init(){this.hooks.forEach(e=>this.create(e))}create(e){this.registry.has(e)||this.registry.set(e,new Map)}exists(e){return this.registry.has(e)}get(e){let t=this.registry.get(e);if(t)return t;console.error(`Unknown hook '${e}'`)}clear(){this.registry.forEach(e=>e.clear())}on(e,t,n={}){let r=this.get(e);if(!r)return console.warn(`Hook '${e}' not found.`),()=>{};let o={...n,id:r.size+1,hook:e,handler:t};return r.set(t,o),()=>this.off(e,t)}before(e,t,n={}){return this.on(e,t,{...n,before:!0})}replace(e,t,n={}){return this.on(e,t,{...n,replace:!0})}once(e,t,n={}){return this.on(e,t,{...n,once:!0})}off(e,t){let n=this.get(e);n&&t?n.delete(t)||console.warn(`Handler for hook '${e}' not found.`):n&&n.clear()}call(e,t,n,r){try{let o=this,[i,s,a]=o.parseCallArgs(e,t,n,r),{before:l,handler:c,after:u}=o.getHandlers(e,a);return Promise.resolve(o.run(l,i,s)).then(function(){return Promise.resolve(o.run(c,i,s,!0)).then(function([t]){return Promise.resolve(o.run(u,i,s)).then(function(){return o.dispatchDomEvent(e,i,s),t})})})}catch(e){return Promise.reject(e)}}callSync(e,t,n,r){let[o,i,s]=this.parseCallArgs(e,t,n,r),{before:a,handler:l,after:c}=this.getHandlers(e,s);this.runSync(a,o,i);let[u]=this.runSync(l,o,i,!0);return this.runSync(c,o,i),this.dispatchDomEvent(e,o,i),u}parseCallArgs(e,t,n,r){return t instanceof S||"object"!=typeof t&&"function"!=typeof n?[t,n,r]:[void 0,t,n]}run(e,t,n,r=!1){try{let o;let i=this;void 0===t&&(t=i.swup.visit);let s=[],a=function(e,t,n){if("function"==typeof e[A]){var r,o,i,s,a,l,c,u=e[A]();if(function e(r){try{for(;!((a=u.next()).done||n&&n());)if((r=t(a.value))&&r.then){if(!U(r))return void r.then(e,c||(c=x.bind(null,l=new T,2)));r=r.v}l?x(l,1,r):l=r}catch(e){x(l||(l=new T),2,e)}}(),u.return){var h=function(e){try{a.done||u.return()}catch(e){}return e};if(l&&l.then)return l.then(h,function(e){throw h(e)});h()}return l}if(!("length"in e))throw TypeError("Object is not iterable");for(var d=[],f=0;f<e.length;f++)d.push(e[f]);return r=function(e){return t(d[e])},s=-1,function e(t){try{for(;++s<d.length&&(!n||!n());)if((t=r(s))&&t.then){if(!U(t))return void t.then(e,i||(i=x.bind(null,o=new T,2)));t=t.v}o?x(o,1,t):o=t}catch(e){x(o||(o=new T),2,e)}}(),o}(e,function({hook:e,handler:o,defaultHandler:a,once:l}){if(!t?.done)return l&&i.off(e,o),function(e,r){try{var i=Promise.resolve(function(e,t=[]){return new Promise((n,r)=>{let o=e(...t);P(o)?o.then(n,r):n(o)})}(o,[t,n,a])).then(function(e){s.push(e)})}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(t){if(r)throw t;console.error(`Error in hook '${e}':`,t)})},function(){return o});return Promise.resolve(a&&a.then?a.then(function(e){return o?e:s}):o?a:s)}catch(e){return Promise.reject(e)}}runSync(e,t=this.swup.visit,n,r=!1){let o=[];for(let{hook:i,handler:s,defaultHandler:a,once:l}of e)if(!t?.done){l&&this.off(i,s);try{let e=s(t,n,a);o.push(e),P(e)&&console.warn(`Swup will not await Promises in handler for synchronous hook '${i}'.`)}catch(e){if(r)throw e;console.error(`Error in hook '${i}':`,e)}}return o}getHandlers(e,t){let n=this.get(e);if(!n)return{found:!1,before:[],handler:[],after:[],replaced:!1};let r=Array.from(n.values()),o=this.sortRegistrations,i=r.filter(({before:e,replace:t})=>e&&!t).sort(o),s=r.filter(({replace:e})=>e).filter(e=>!0).sort(o),a=r.filter(({before:e,replace:t})=>!e&&!t).sort(o),l=s.length>0,c=[];if(t&&(c=[{id:0,hook:e,handler:t}],l)){let n=s.length-1,r=e=>{let n=s[e-1];return n?(t,o)=>n.handler(t,o,r(e-1)):t};c=[{id:0,hook:e,handler:s[n].handler,defaultHandler:r(n)}]}return{found:!0,before:i,handler:c,after:a,replaced:l}}sortRegistrations(e,t){return(e.priority??0)-(t.priority??0)||e.id-t.id||0}dispatchDomEvent(e,t,n){if(t?.done)return;let r={hook:e,args:n,visit:t||this.swup.visit};document.dispatchEvent(new CustomEvent("swup:any",{detail:r,bubbles:!0})),document.dispatchEvent(new CustomEvent(`swup:${e}`,{detail:r,bubbles:!0}))}}let H=e=>{if(e&&"#"===e.charAt(0)&&(e=e.substring(1)),!e)return null;let t=decodeURIComponent(e),n=document.getElementById(e)||document.getElementById(t)||w(`a[name='${CSS.escape(e)}']`)||w(`a[name='${CSS.escape(t)}']`);return n||"top"!==e||(n=document.body),n},L=function({elements:e,selector:t}){try{if(!1===t&&!e)return Promise.resolve();let n=[];if(e)n=Array.from(e);else if(t&&!(n=y(t,document.body)).length)return console.warn(`[swup] No elements found matching animationSelector \`${t}\``),Promise.resolve();let r=n.map(e=>(function(e){let{type:t,timeout:n,propCount:r}=function(e){let t=window.getComputedStyle(e),n=N(t,`${$}Delay`),r=N(t,`${$}Duration`),o=R(n,r),i=N(t,`${j}Delay`),s=N(t,`${j}Duration`),a=R(i,s),l=Math.max(o,a),c=l>0?o>a?$:j:null;return{type:c,timeout:l,propCount:c?c===$?r.length:s.length:0}}(e);return!(!t||!n)&&new Promise(o=>{let i=`${t}end`,s=performance.now(),a=0,l=()=>{e.removeEventListener(i,c),o()},c=t=>{if(t.target===e){if(![`${$}end`,`${j}end`].includes(t.type))throw Error("Not a transition or animation event.");(performance.now()-s)/1e3<t.elapsedTime||++a>=r&&l()}};setTimeout(()=>{a<r&&l()},n+1),e.addEventListener(i,c)})})(e));return r.filter(Boolean).length>0?Promise.resolve(Promise.all(r)).then(function(){}):(t&&console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``),Promise.resolve())}catch(e){return Promise.reject(e)}},$="transition",j="animation";function N(e,t){return(e[t]||"").split(", ")}function R(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>q(t)+q(e[n])))}function q(e){return 1e3*parseFloat(e)}let M=function(e,t={}){try{let r;let o=this;function n(n){if(r)return n;o.navigating=!0,o.visit=e;let{el:i}=e.trigger;t.referrer=t.referrer||o.currentPageUrl,!1===t.animate&&(e.animation.animate=!1),e.animation.animate||o.classes.clear();let s=t.history||i?.getAttribute("data-swup-history")||void 0;s&&["push","replace"].includes(s)&&(e.history.action=s);let a=t.animation||i?.getAttribute("data-swup-animation")||void 0;return a&&(e.animation.name=a),"object"==typeof t.cache?(e.cache.read=t.cache.read??e.cache.read,e.cache.write=t.cache.write??e.cache.write):void 0!==t.cache&&(e.cache={read:!!t.cache,write:!!t.cache}),delete t.cache,function(n,r){try{var i=function(n,r){try{var i=Promise.resolve(o.hooks.call("visit:start",e,void 0)).then(function(){function n(){if(!e.done)return Promise.resolve(o.hooks.call("visit:transition",e,void 0,function(){try{let n;function t(t){return n?t:(e.advance(4),Promise.resolve(o.animatePageOut(e)).then(function(){function t(){return Promise.resolve(o.animatePageIn(e)).then(function(){})}let n=function(){if(e.animation.native&&document.startViewTransition)return Promise.resolve(document.startViewTransition(function(){try{let t=o.renderPage;return Promise.resolve(r).then(function(n){return Promise.resolve(t.call(o,e,n))})}catch(e){return Promise.reject(e)}}).finished).then(function(){});{let t=o.renderPage;return Promise.resolve(r).then(function(n){return Promise.resolve(t.call(o,e,n)).then(function(){})})}}();return n&&n.then?n.then(t):t()}))}let i=function(){if(!e.animation.animate)return Promise.resolve(o.hooks.call("animation:skip",void 0)).then(function(){let t=o.renderPage;return Promise.resolve(r).then(function(r){return Promise.resolve(t.call(o,e,r)).then(function(){n=1})})})}();return Promise.resolve(i&&i.then?i.then(t):t(i))}catch(e){return Promise.reject(e)}})).then(function(){if(!e.done)return Promise.resolve(o.hooks.call("visit:end",e,void 0,()=>o.classes.clear())).then(function(){e.state=7,o.navigating=!1,o.onVisitEnd&&(o.onVisitEnd(),o.onVisitEnd=void 0)})})}e.state=3;let r=o.hooks.call("page:load",e,{options:t},function(e,t){try{let r;function n(e){return t.page=e,t.cache=!!r,t.page}return e.cache.read&&(r=o.cache.get(e.to.url)),Promise.resolve(r?n(r):Promise.resolve(o.fetchPage(e.to.url,t.options)).then(n))}catch(e){return Promise.reject(e)}});if(r.then(({html:t})=>{e.advance(5),e.to.html=t,e.to.document=(new DOMParser).parseFromString(t,"text/html")}),!e.history.popstate){let t=e.to.url+e.to.hash;"replace"===e.history.action||e.to.url===o.currentPageUrl?d(t):(o.currentHistoryIndex++,h(t,{index:o.currentHistoryIndex}))}o.currentPageUrl=u(),e.history.popstate&&o.classes.add("is-popstate"),e.animation.name&&o.classes.add(`to-${c(e.animation.name)}`);let i=function(){if(e.animation.wait)return Promise.resolve(r).then(function(){})}();return i&&i.then?i.then(n):n()})}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(t){t&&!t?.aborted?(e.state=9,console.error(t),o.options.skipPopStateHandling=()=>(window.location.assign(e.to.url+e.to.hash),!0),window.history.back()):e.state=8})}catch(e){return r(!0,e)}return i&&i.then?i.then(r.bind(null,!1),r.bind(null,!0)):r(!1,i)}(0,function(t,n){if(delete e.to.document,t)throw n;return n})}let i=function(){if(o.navigating)return function(){if(!(o.visit.state>=6))return Promise.resolve(o.hooks.call("visit:abort",o.visit,void 0)).then(function(){delete o.visit.to.document,o.visit.state=8});e.state=2,o.onVisitEnd=()=>o.performNavigation(e,t),r=1}()}();return Promise.resolve(i&&i.then?i.then(n):n(i))}catch(e){return Promise.reject(e)}};function I(e,t={},n={}){if("string"!=typeof e)throw Error("swup.navigate() requires a URL parameter");if(this.shouldIgnoreVisit(e,{el:n.el,event:n.event}))return void window.location.assign(e);let{url:r,hash:o}=p.fromUrl(e),i=this.createVisit({...n,to:r,hash:o});this.performNavigation(i,t)}let V=function(e){try{let t=this;return Promise.resolve(t.hooks.call("animation:out:start",e,void 0,()=>{t.classes.add("is-changing","is-animating","is-leaving")})).then(function(){return Promise.resolve(t.hooks.call("animation:out:await",e,{skip:!1},(e,{skip:n})=>{if(!n)return t.awaitAnimations({selector:e.animation.selector})})).then(function(){return Promise.resolve(t.hooks.call("animation:out:end",e,void 0)).then(function(){})})})}catch(e){return Promise.reject(e)}},D=function(e){let t=e.to.document;if(!t)return!1;let n=t.querySelector("title")?.innerText||"";document.title=n;let r=y('[data-swup-persist]:not([data-swup-persist=""])'),o=e.containers.map(e=>{let n=document.querySelector(e),r=t.querySelector(e);return n&&r?(n.replaceWith(r.cloneNode(!0)),!0):(n||console.warn(`[swup] Container missing in current document: ${e}`),r||console.warn(`[swup] Container missing in incoming document: ${e}`),!1)}).filter(Boolean);return r.forEach(e=>{let t=e.getAttribute("data-swup-persist"),n=w(`[data-swup-persist="${t}"]`);n&&n!==e&&n.replaceWith(e)}),o.length===e.containers.length},O=function(e){let t={behavior:"auto"},{target:n,reset:r}=e.scroll,o=n??e.to.hash,i=!1;return o&&(i=this.hooks.callSync("scroll:anchor",e,{hash:o,options:t},(e,{hash:t,options:n})=>{let r=this.getAnchorElement(t);return r&&r.scrollIntoView(n),!!r})),r&&!i&&(i=this.hooks.callSync("scroll:top",e,{options:t},(e,{options:t})=>(window.scrollTo({top:0,left:0,...t}),!0))),i},_=function(e){try{let t=this;if(e.done)return Promise.resolve();let n=t.hooks.call("animation:in:await",e,{skip:!1},(e,{skip:n})=>{if(!n)return t.awaitAnimations({selector:e.animation.selector})});return Promise.resolve(b()).then(function(){return Promise.resolve(t.hooks.call("animation:in:start",e,void 0,()=>{t.classes.remove("is-animating")})).then(function(){return Promise.resolve(n).then(function(){return Promise.resolve(t.hooks.call("animation:in:end",e,void 0)).then(function(){})})})})}catch(e){return Promise.reject(e)}},W=function(e,t){try{let n=this;if(e.done)return Promise.resolve();e.advance(6);let{url:r}=t;return n.isSameResolvedUrl(u(),r)||(d(r),n.currentPageUrl=u(),e.to.url=n.currentPageUrl),Promise.resolve(n.hooks.call("content:replace",e,{page:t},(e,{})=>{if(n.classes.remove("is-leaving"),e.animation.animate&&n.classes.add("is-rendering"),!n.replaceContent(e))throw Error("[swup] Container mismatch, aborting");e.animation.animate&&(n.classes.add("is-changing","is-animating","is-rendering"),e.animation.name&&n.classes.add(`to-${c(e.animation.name)}`))})).then(function(){return Promise.resolve(n.hooks.call("content:scroll",e,void 0,()=>n.scrollToContent(e))).then(function(){return Promise.resolve(n.hooks.call("page:view",e,{url:n.currentPageUrl,title:document.title})).then(function(){})})})}catch(e){return Promise.reject(e)}},B=function(e){if(e?.isSwupPlugin){if(e.swup=this,!e._checkRequirements||e._checkRequirements())return e._beforeMount&&e._beforeMount(),e.mount(),this.plugins.push(e),this.plugins}else console.error("Not a swup plugin instance",e)};function F(e){let t=this.findPlugin(e);if(t)return t.unmount(),t._afterUnmount&&t._afterUnmount(),this.plugins=this.plugins.filter(e=>e!==t),this.plugins;console.error("No such plugin",t)}function K(e){return this.plugins.find(t=>t===e||t.name===e||t.name===`Swup${String(e)}`)}function z(e){if("function"!=typeof this.options.resolveUrl)return console.warn("[swup] options.resolveUrl expects a callback function."),e;let t=this.options.resolveUrl(e);return t&&"string"==typeof t?t.startsWith("//")||t.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),e):t:(console.warn("[swup] options.resolveUrl needs to return a url"),e)}function J(e,t){return this.resolveUrl(e)===this.resolveUrl(t)}let G={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',animationScope:"html",cache:!0,containers:["#swup"],ignoreVisit:(e,{el:t}={})=>!!t?.closest("[data-no-swup]"),linkSelector:"a[href]",linkToSelf:"scroll",native:!1,plugins:[],resolveUrl:e=>e,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:e=>"swup"!==e.state?.source,timeout:0},X=e=>String(e).split(".").map(e=>String(parseInt(e||"0",10))).concat(["0","0"]).slice(0,3).join(".");class Z{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(e=>e()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return"object"!=typeof this.requires||Object.entries(this.requires).forEach(e=>{let[t,n]=e;if(!function(e,t,n){let r=function(e,t){if("swup"===e)return t.version??"";{let n=t.findPlugin(e);return n?.version??""}}(e,n);return!!r&&t.every(e=>{var t,n;let[,o,i]=e.match(/^([\D]+)?(.*)$/)||[];return((e,t)=>{let n={"":e=>0===e,">":e=>e>0,">=":e=>e>=0,"<":e=>e<0,"<=":e=>e<=0};return(n[t]||n[""])(e)})((n=i,t=X(t=r),n=X(n),t.localeCompare(n,void 0,{numeric:!0})),o||">=")})}(t,n=Array.isArray(n)?n:[n],this.swup)){let e=`${t} ${n.join(", ")}`;throw Error(`Plugin version mismatch: ${this.name} requires ${e}`)}}),!0}on(e,t,n){var r;void 0===n&&(n={}),t=!(r=t).name.startsWith("bound ")||r.hasOwnProperty("prototype")?t.bind(this):t;let o=this.swup.hooks.on(e,t,n);return this.handlersToUnregister.push(o),o}once(e,t,n){return void 0===n&&(n={}),this.on(e,t,{...n,once:!0})}before(e,t,n){return void 0===n&&(n={}),this.on(e,t,{...n,before:!0})}replace(e,t,n){return void 0===n&&(n={}),this.on(e,t,{...n,replace:!0})}off(e,t){return this.swup.hooks.off(e,t)}}function Y(e){return"title"!==e.localName&&!e.matches("[data-swup-theme]")}function Q(e,t){return e.outerHTML===t.outerHTML}function ee(e){return e.matches("link[rel=stylesheet][href]")}function et(e,t){return Object.keys(t).reduce((e,n)=>e.replace(`{${n}}`,t[n]||""),e||"")}!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",function(e){e.preventDefault(),e.stopPropagation()},!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&void 0!==navigator.userAgent&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return e=!1;e=!0}}))}catch(e){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var n=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push([t,t.scrollTop,t.scrollLeft]),t=t.parentNode;return n.push([t=r,t.scrollTop,t.scrollLeft]),n},r=function(e){for(var t=0;t<e.length;t++)e[t][0].scrollTop=e[t][1],e[t][0].scrollLeft=e[t][2];e=[]};HTMLElement.prototype.focus=function(e){if(e&&e.preventScroll){var t=n(this);if("function"==typeof setTimeout){var o=this;setTimeout(function(){o.nativeFocus(),r(t)},0)}else this.nativeFocus(),r(t)}else this.nativeFocus()}}}}();class en{constructor(){this.id="swup-announcer",this.style="position:absolute;top:0;left:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;word-wrap:normal;width:1px;height:1px;",this.region=void 0,this.region=this.getRegion()??this.createRegion()}getRegion(){return document.getElementById(this.id)}createRegion(){let e=function(e){let t=document.createElement("template");return t.innerHTML=e,t.content.children[0]}(`<p aria-live="assertive" aria-atomic="true" id="${this.id}" style="${this.style}"></p>`);return document.body.appendChild(e),e}announce(e,t=0){return new Promise(n=>{setTimeout(()=>{this.region.textContent===e&&(e=`${e}.`),this.region.textContent="",this.region.textContent=e,n()},t)})}}function er(e){let t;if(!((t="string"==typeof e?document.querySelector(e):e)instanceof HTMLElement))return;let n=t.getAttribute("tabindex");t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0}),null!==n&&t.setAttribute("tabindex",n)}new class{constructor(e={}){this.version="4.6.1",this.options=void 0,this.defaults=G,this.plugins=[],this.visit=void 0,this.cache=void 0,this.hooks=void 0,this.classes=void 0,this.currentPageUrl=u(),this.currentHistoryIndex=void 0,this.clickDelegate=void 0,this.navigating=!1,this.onVisitEnd=void 0,this.use=B,this.unuse=F,this.findPlugin=K,this.log=()=>{},this.navigate=I,this.performNavigation=M,this.createVisit=E,this.delegateEvent=f,this.fetchPage=m,this.awaitAnimations=L,this.renderPage=W,this.replaceContent=D,this.animatePageIn=_,this.animatePageOut=V,this.scrollToContent=O,this.getAnchorElement=H,this.getCurrentUrl=u,this.resolveUrl=z,this.isSameResolvedUrl=J,this.options={...this.defaults,...e},this.handleLinkClick=this.handleLinkClick.bind(this),this.handlePopState=this.handlePopState.bind(this),this.cache=new g(this),this.classes=new k(this),this.hooks=new C(this),this.visit=this.createVisit({to:""}),this.currentHistoryIndex=window.history.state?.index??1,this.enable()}enable(){try{let e=this,{linkSelector:t}=e.options;return e.clickDelegate=e.delegateEvent(t,"click",e.handleLinkClick),window.addEventListener("popstate",e.handlePopState),e.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),e.options.native=e.options.native&&!!document.startViewTransition,e.options.plugins.forEach(t=>e.use(t)),"swup"!==window.history.state?.source&&d(null,{index:e.currentHistoryIndex}),Promise.resolve(b()).then(function(){return Promise.resolve(e.hooks.call("enable",void 0,void 0,()=>{let t=document.documentElement;t.classList.add("swup-enabled"),t.classList.toggle("swup-native",e.options.native)})).then(function(){})})}catch(e){return Promise.reject(e)}}destroy(){try{let e=this;return e.clickDelegate.destroy(),window.removeEventListener("popstate",e.handlePopState),e.cache.clear(),e.options.plugins.forEach(t=>e.unuse(t)),Promise.resolve(e.hooks.call("disable",void 0,void 0,()=>{let e=document.documentElement;e.classList.remove("swup-enabled"),e.classList.remove("swup-native")})).then(function(){e.hooks.clear()})}catch(e){return Promise.reject(e)}}shouldIgnoreVisit(e,{el:t,event:n}={}){let{origin:r,url:o,hash:i}=p.fromUrl(e);return r!==window.location.origin||!(!t||!this.triggerWillOpenNewWindow(t))||!!this.options.ignoreVisit(o+i,{el:t,event:n})}handleLinkClick(e){let t=e.delegateTarget,{href:n,url:r,hash:o}=p.fromElement(t);if(this.shouldIgnoreVisit(n,{el:t,event:e}))return;if(this.navigating&&r===this.visit.to.url)return void e.preventDefault();let i=this.createVisit({to:r,hash:o,el:t,event:e});e.metaKey||e.ctrlKey||e.shiftKey||e.altKey?this.hooks.callSync("link:newtab",i,{href:n}):0===e.button&&this.hooks.callSync("link:click",i,{el:t,event:e},()=>{let t=i.from.url??"";e.preventDefault(),r&&r!==t?this.isSameResolvedUrl(r,t)||this.performNavigation(i):o?this.hooks.callSync("link:anchor",i,{hash:o},()=>{d(r+o),this.scrollToContent(i)}):this.hooks.callSync("link:self",i,void 0,()=>{"navigate"===this.options.linkToSelf?this.performNavigation(i):(d(r),this.scrollToContent(i))})})}handlePopState(e){let t=e.state?.url??window.location.href;if(this.options.skipPopStateHandling(e)||this.isSameResolvedUrl(u(),this.currentPageUrl))return;let{url:n,hash:r}=p.fromUrl(t),o=this.createVisit({to:n,hash:r,event:e});o.history.popstate=!0;let i=e.state?.index??0;i&&i!==this.currentHistoryIndex&&(o.history.direction=i-this.currentHistoryIndex>0?"forwards":"backwards",this.currentHistoryIndex=i),o.animation.animate=!1,o.scroll.reset=!1,o.scroll.target=!1,this.options.animateHistoryBrowsing&&(o.animation.animate=!0,o.scroll.reset=!0),this.hooks.callSync("history:popstate",o,{event:e},()=>{this.performNavigation(o)})}triggerWillOpenNewWindow(e){return!!e.matches('[download], [target="_blank"]')}}({containers:["#content","#page-hook"],plugins:[new class extends Z{constructor(e={}){super();let t=this;this.name="SwupHeadPlugin",this.requires={swup:">=4.6"},this.defaults={persistTags:!1,persistAssets:!1,awaitAssets:!1,timeout:3e3},this.options=void 0,this.updateHead=function(e,{}){var n,r;try{let o=e.to.document,{removed:i,added:s}=function(e,t,{shouldPersist:n=()=>!1}={}){let r=Array.from(e.children),o=Array.from(t.children),i=o.reduce((e,t,n)=>(r.some(e=>Q(t,e))||e.push({el:t,index:n}),e),[]),s=r.reduce((e,t)=>(o.some(e=>Q(t,e))||e.push({el:t}),e),[]);return s.reverse().filter(({el:e})=>Y(e)).filter(({el:e})=>!n(e)).forEach(({el:t})=>e.removeChild(t)),i.filter(({el:e})=>Y(e)).forEach(({el:t,index:n=0})=>{e.insertBefore(t.cloneNode(!0),e.children[n+1]||null)}),{removed:s.map(({el:e})=>e),added:i.map(({el:e})=>e)}}(document.head,o.head,{shouldPersist:e=>t.isPersistentTag(e)});t.swup.log(`Removed ${i.length} / added ${s.length} tags in head`);let a=(n=document.documentElement).lang!==(r=o.documentElement).lang?(n.lang=r.lang,n.lang):null;a&&t.swup.log(`Updated lang attribute: ${a}`);let l=function(){if(t.options.awaitAssets){let e=function(e,t=0){return e.filter(ee).map(e=>(function(e,t=0){let n=t=>{(({href:e})=>Array.from(document.styleSheets).map(({href:e})=>e).includes(e))(e)?t():setTimeout(()=>n(t),10)};return new Promise(e=>{n(e),t>0&&setTimeout(e,t)})})(e,t))}(s,t.options.timeout),n=function(){if(e.length)return t.swup.log(`Waiting for ${e.length} assets to load`),Promise.resolve(Promise.all(e)).then(function(){})}();if(n&&n.then)return n.then(function(){})}}();return Promise.resolve(l&&l.then?l.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},this.options={...this.defaults,...e},this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.before("content:replace",this.updateHead)}isPersistentTag(e){let{persistTags:t}=this.options;return"function"==typeof t?t(e):"string"==typeof t?e.matches(t):!!t}},new class extends Z{constructor(e){void 0===e&&(e={}),super(),this.name="SwupScriptsPlugin",this.requires={swup:">=4"},this.defaults={head:!0,body:!0,optin:!1},this.options=void 0,this.options={...this.defaults,...e}}mount(){this.on("content:replace",this.runScripts)}runScripts(){let{head:e,body:t,optin:n}=this.options,r=this.getScope({head:e,body:t});if(!r)return;let o=Array.from(r.querySelectorAll(n?"script[data-swup-reload-script]":"script:not([data-swup-ignore-script])"));o.forEach(e=>this.runScript(e)),this.swup.log(`Executed ${o.length} scripts.`)}runScript(e){let t=document.createElement("script");for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);return t.textContent=e.textContent,e.replaceWith(t),t}getScope(e){let{head:t,body:n}=e;return t&&n?document:t?document.head:n?document.body:null}}({body:!1}),new class extends Z{constructor(e={}){super(),this.name="SwupA11yPlugin",this.requires={swup:">=4"},this.defaults={headingSelector:"h1",respectReducedMotion:!0,autofocus:!1,announcements:{visit:"Navigated to: {title}",url:"New page at {url}"}},this.options=void 0,this.announcer=void 0,this.announcementDelay=100,this.rootSelector="body",this.handleAnchorScroll=(e,{hash:t})=>{let n=this.swup.getAnchorElement(t);n instanceof HTMLElement&&er(n)},this.options={...this.defaults,...e},this.announcer=new en}mount(){this.swup.hooks.create("content:announce"),this.swup.hooks.create("content:focus"),this.before("visit:start",this.prepareVisit),this.on("visit:start",this.markAsBusy),this.on("visit:end",this.unmarkAsBusy),this.on("visit:end",this.focusContent),this.on("visit:end",this.announceContent),this.on("scroll:anchor",this.handleAnchorScroll),this.before("visit:start",this.disableAnimations),this.before("link:self",this.disableAnimations),this.before("link:anchor",this.disableAnimations),this.swup.announce=this.announce.bind(this)}unmount(){this.swup.announce=void 0}announce(e){try{return Promise.resolve(this.announcer.announce(e)).then(function(){})}catch(e){return Promise.reject(e)}}markAsBusy(){document.documentElement.setAttribute("aria-busy","true")}unmarkAsBusy(){document.documentElement.removeAttribute("aria-busy")}prepareVisit(e){e.a11y={announce:void 0,focus:this.rootSelector}}announceContent(e){this.swup.hooks.callSync("content:announce",e,void 0,e=>{void 0===e.a11y.announce&&(e.a11y.announce=this.getPageAnnouncement()),e.a11y.announce&&this.announcer.announce(e.a11y.announce,this.announcementDelay)})}focusContent(e){this.swup.hooks.callSync("content:focus",e,void 0,e=>{e.a11y.focus&&(this.options.autofocus&&!0===function(){let e=function(){let e=document.querySelector("body [autofocus]");if(e&&!e.closest('[inert], [aria-disabled], [aria-hidden="true"]'))return e}();return!!e&&(e!==document.activeElement&&e.focus(),!0)}()||er(e.a11y.focus))})}getPageAnnouncement(){let{headingSelector:e,announcements:t}=this.options;return function({headingSelector:e="h1",announcements:t={}}){let n=document.documentElement.lang||"*",{href:r,url:o,pathname:i}=p.fromUrl(window.location.href),s=t[n]??t["*"]??t;if("object"!=typeof s)return;let a=document.querySelector(e);a||console.warn(`SwupA11yPlugin: No main heading (${e}) found on new page`);let l=a?.getAttribute("aria-label")||a?.textContent||document.title||et(s.url,{href:r,url:o,path:i});return et(s.visit,{title:l,href:r,url:o,path:i})}({headingSelector:e,announcements:t})}disableAnimations(e){this.options.respectReducedMotion&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(e.animation.animate=!1,e.scroll.animate=!1)}}]}).hooks.on("page:view",async()=>{try{let{default:e}=await o("dNovs"),{default:t}=await o("5IXZj"),{default:n}=await o("2GheJ"),{default:r}=await o("dTwV1");document.querySelector(".bookmarks")&&new t,r&&r(),new e,new n,console.log("Modules loaded successfully.")}catch(e){console.error("Error loading modules:",e)}})})();
//# sourceMappingURL=swup.js.map
