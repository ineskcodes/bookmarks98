!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb18d,n=t.register;n("1NUJT",function(n,o){e(n.exports,"default",function(){return s});var r=t("cbNRq");class i{constructor(){this.taskbar=document.querySelector(".root__taskbar"),this.toggle=document.querySelector(".menu__toggle"),this.details=this.toggle.closest("details"),this.details.addEventListener("toggle",this.toggleMenu.bind(this)),this.isOpen=this.details.open,this.init()}init(){this.toggle.tabIndex=0,this.toggle.setAttribute("role","button"),this.toggle.setAttribute("aria-expanded",this.isOpen),this.toggle.setAttribute("aria-controls","menu-content")}toggleMenu(e){let t=Array.from(document.querySelectorAll(".window"));this.isOpen="open"===e.newState,this.toggle.setAttribute("aria-expanded",this.isOpen),t&&(this.taskbar.style.zIndex=(0,r.getMaxZIndex)(t)+1)}}document.querySelector(".menu")&&new i;var s=i}),n("cbNRq",function(t,n){e(t.exports,"getDraggableType",function(){return o}),e(t.exports,"getDraggableItemName",function(){return r}),e(t.exports,"checkIfOverlap",function(){return i}),e(t.exports,"populateStorage",function(){return s}),e(t.exports,"getLastPositionFromLocalStorage",function(){return a}),e(t.exports,"getMaxZIndex",function(){return u}),e(t.exports,"getStateBoolean",function(){return l}),e(t.exports,"getCorrespondingTaskButton",function(){return d}),e(t.exports,"getCorrespondingWindow",function(){return g}),e(t.exports,"removeOutlineFromElement",function(){return c});let o=e=>e.target.dataset.draggable,r=e=>e.target.dataset.item,i=(e,t)=>"icon"!==o(e)?null:(t=t.filter(e=>"true"!==e.dataset.minimized)).some(t=>e.hitTest(t,"25%")),s=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},a=e=>JSON.parse(localStorage.getItem(`${e.target.dataset.item}-position`)),u=([e,t])=>{let n=[getComputedStyle(e).zIndex,getComputedStyle(t).zIndex];return(n=n.map(e=>"auto"===e?0:parseInt(e))).reduce((e,t)=>Math.max(e,t))},l=(e,t)=>"true"===e.getAttribute(t),d=e=>document.querySelector(`#${e.dataset.task}`),g=e=>document.querySelector(`.window[data-task="${e.id}"]`),c=(e,t)=>{t&&(e.classList.add("remove-outline"),e.addEventListener("blur",()=>e.classList.remove("remove-outline"),{once:!0}))}})}();
//# sourceMappingURL=menu.0760724c.js.map
