!function(){function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb18d,n=e.register;n("2hgwE",function(n,o){t(n.exports,"default",function(){return s});var i=e("cbNRq");class r{constructor(){this.windows=Array.from(document.querySelectorAll(".window")),this.taskButtons=Array.from(document.querySelectorAll(".task-button")),this.settingsTaskButton=document.querySelector("#settings-task-button"),this.init()}init(){this.bindEvents(),this.taskButtons.forEach(t=>{let e=(0,i.getCorrespondingWindow)(t);e&&(this.settingsTaskButton.hidden=e.hidden)})}bindEvents(){this.taskButtons.forEach(t=>t.addEventListener("click",this.handleClick.bind(this))),document.documentElement.addEventListener("settingstoggled",this.toggleSettingsButtonVisibility.bind(this)),this.windows.forEach(t=>t.addEventListener("activewindow",this.toggleActiveState.bind(this)))}handleClick(t){let{currentTarget:e}=t,n=!!t.pageX,o=(0,i.getCorrespondingWindow)(e);if(!o)return;let r=(0,i.getStateBoolean)(e,"aria-pressed"),s=(0,i.getStateBoolean)(o,"data-minimized");(0,i.removeOutlineFromElement)(e,n),r!==s&&o.dispatchEvent(new CustomEvent("toggleminimize",{detail:{windowEl:o,isPressed:r}})),r||s||o.dispatchEvent(new Event("mousedown"))}toggleActiveState(t){let e=t.currentTarget,n=(0,i.getCorrespondingTaskButton)(e),o=(0,i.getStateBoolean)(e,"data-minimized");n&&(this.taskButtons.forEach(t=>t.setAttribute("aria-pressed","false")),n.hidden=!1,n.setAttribute("aria-pressed","true"),(0,i.updatePageHookWindow)(e,o),this.windows.forEach(t=>t.classList.remove("active")),e.classList.toggle("active"))}toggleSettingsButtonVisibility(t){let{isOpen:e}=t.detail;this.settingsTaskButton.hidden=!e}}document.querySelector(".task-button")&&new r;var s=r}),n("cbNRq",function(e,n){t(e.exports,"getDraggableType",function(){return o}),t(e.exports,"getDraggableItemName",function(){return i}),t(e.exports,"checkIfOverlap",function(){return r}),t(e.exports,"populateStorage",function(){return s}),t(e.exports,"getLastPositionFromLocalStorage",function(){return a}),t(e.exports,"getMaxZIndex",function(){return d}),t(e.exports,"getStateBoolean",function(){return u}),t(e.exports,"getCorrespondingTaskButton",function(){return l}),t(e.exports,"getCorrespondingWindow",function(){return g}),t(e.exports,"removeOutlineFromElement",function(){return c}),t(e.exports,"updatePageHookWindow",function(){return p});let o=t=>t.target.dataset.draggable,i=t=>t.target.dataset.item,r=(t,e)=>"icon"!==o(t)?null:(e=e.filter(t=>"true"!==t.dataset.minimized)).some(e=>t.hitTest(e,"25%")),s=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},a=t=>JSON.parse(localStorage.getItem(`${t.target.dataset.item}-position`)),d=([t,e])=>{let n=[getComputedStyle(t).zIndex,getComputedStyle(e).zIndex];return(n=n.map(t=>"auto"===t?0:parseInt(t))).reduce((t,e)=>Math.max(t,e))},u=(t,e)=>"true"===t.getAttribute(e),l=t=>document.querySelector(`#${t.dataset.task}`),g=t=>document.querySelector(`.window[data-task="${t.id}"]`),c=(t,e)=>{e&&(t.classList.add("remove-outline"),t.addEventListener("blur",()=>t.classList.remove("remove-outline"),{once:!0}))},p=(t,e)=>{let n=document.querySelector("#page-hook");n.removeAttribute("data-window-open"),n.removeAttribute("data-popup-open"),e||n.setAttribute(`data-${t.dataset.item}-open`,"")}})}();
//# sourceMappingURL=taskButtons.a760b095.js.map
