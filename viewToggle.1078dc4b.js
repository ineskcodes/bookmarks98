(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb18d.register)("5rB28",function(e,t){Object.defineProperty(e.exports,"default",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0});class i{constructor(){this.container=document.querySelector(".window__content"),this.buttons=Array.from(this.container.querySelectorAll("button.view-toggle__btn")),this.init()}init(){this.buttons.forEach(e=>e.addEventListener("click",this.handleClick.bind(this)))}handleClick(e){let{currentTarget:t}=e;this.buttons.forEach(e=>e.setAttribute("aria-pressed","false")),t.setAttribute("aria-pressed","true"),this.container.dataset.view=t.dataset.view}}new i;var n=i});
//# sourceMappingURL=viewToggle.1078dc4b.js.map