class e{static CLOSE_MODAL_MENU_BTN_CODE="Escape";constructor(){this.refs={openMenuBtn:document.querySelector(".js-menu-open"),closeMenuBtn:document.querySelector(".js-menu-close"),menu:document.querySelector(".js-modal-menu"),modalMenuItems:document.querySelectorAll(".js-modal-item"),body:document.querySelector("body")},this.addListeners(),this.defineModalCurrentPageLink()}addListeners(){this.refs.openMenuBtn.addEventListener("click",this.openMenu.bind(this))}openMenu(){this.refs.menu.classList.remove("is-hidden"),this.refs.body.classList.add("no-scroll"),this.refs.closeMenuBtn.addEventListener("click",this.closeMenu.bind(this)),document.addEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.addEventListener("click",this.closeMenuWithClickOutside.bind(this))}closeMenu(){this.refs.menu.classList.add("is-hidden"),this.refs.body.classList.remove("no-scroll"),document.removeEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.removeEventListener("click",this.closeMenuWithClickOutside.bind(this)),this.refs.closeMenuBtn.removeEventListener("click",this.closeMenu.bind(this))}closeMenuWithBtn(t){t.code===e.CLOSE_MODAL_MENU_BTN_CODE&&this.closeMenu()}closeMenuWithClickOutside(e){e.target.closest(".js-modal-menu")||e.target.closest(".js-menu-open")||this.closeMenu()}defineModalCurrentPageLink(){const e=[];this.refs.modalMenuItems.forEach((t=>{let s=t.dataset.path;e.push(s),window.location.href.includes(s)?t.classList.add("current-page-main"):t.classList.remove("current-page-main")}))}}new e;new Swiper(".js-testimonials-swiper",{loop:!0,speed:1500,autoplay:{delay:3e3,disableOnInteraction:!1},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:10,stretch:100,depth:300,modifier:1,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".js-testimonials-swiper-pagination",clickable:!0}});new class{constructor(){this.refs={newsLetterForm:document.querySelector(".js-newsletter-form"),newsLetterFormMailInput:document.querySelector('.js-newsletter-form-input[name="newsEmail"]')},this.outputNewsLetterFormObject={},this.addListeners()}addListeners(){this.refs.newsLetterForm.addEventListener("submit",this.onSubmit.bind(this))}onSubmit(e){e.preventDefault();const t=new FormData(this.refs.newsLetterForm);for(let[e,s]of t)this.outputNewsLetterFormObject[e]=s;console.log(this.outputNewsLetterFormObject),e.target.reset()}};
//# sourceMappingURL=courses.ccd0407b.js.map