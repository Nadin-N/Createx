function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,s){t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s;return e};class s{addListeners(){this.refs.openMenuBtn.addEventListener("click",this.openMenu.bind(this))}openMenu(){this.refs.menu.classList.remove("is-hidden"),this.refs.body.classList.add("no-scroll"),this.refs.closeMenuBtn.addEventListener("click",this.closeMenu.bind(this)),document.addEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.addEventListener("click",this.closeMenuWithClickOutside.bind(this))}closeMenu(){this.refs.menu.classList.add("is-hidden"),this.refs.body.classList.remove("no-scroll"),document.removeEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.removeEventListener("click",this.closeMenuWithClickOutside.bind(this)),this.refs.closeMenuBtn.removeEventListener("click",this.closeMenu.bind(this))}closeMenuWithBtn(e){e.code===s.CLOSE_MODAL_MENU_BTN_CODE&&this.closeMenu()}closeMenuWithClickOutside(e){e.target.closest(".js-modal-menu")||e.target.closest(".js-menu-open")||this.closeMenu()}defineModalCurrentPageLink(){const e=[];this.refs.modalMenuItems.forEach((t=>{let s=t.dataset.path;e.push(s),window.location.href.includes(s)?t.classList.add("current-page-main"):t.classList.remove("current-page-main")}))}constructor(){this.refs={openMenuBtn:document.querySelector(".js-menu-open"),closeMenuBtn:document.querySelector(".js-menu-close"),menu:document.querySelector(".js-modal-menu"),modalMenuItems:document.querySelectorAll(".js-modal-item"),body:document.querySelector("body")},this.addListeners(),this.defineModalCurrentPageLink()}}e(t)(s,"CLOSE_MODAL_MENU_BTN_CODE","Escape"),new s;
//# sourceMappingURL=contacts.fddea023.js.map
