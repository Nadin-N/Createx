class t{static CLOSE_MODAL_MENU_BTN_CODE="Escape";constructor(){this.refs={openMenuBtn:document.querySelector(".js-menu-open"),closeMenuBtn:document.querySelector(".js-menu-close"),menu:document.querySelector(".js-modal-menu"),modalMenuItems:document.querySelectorAll(".js-modal-item"),body:document.querySelector("body")},this.addListeners(),this.defineModalCurrentPageLink()}addListeners(){this.refs.openMenuBtn.addEventListener("click",this.openMenu.bind(this))}openMenu(){this.refs.menu.classList.remove("is-hidden"),this.refs.body.classList.add("no-scroll"),this.refs.closeMenuBtn.addEventListener("click",this.closeMenu.bind(this)),document.addEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.addEventListener("click",this.closeMenuWithClickOutside.bind(this))}closeMenu(){this.refs.menu.classList.add("is-hidden"),this.refs.body.classList.remove("no-scroll"),document.removeEventListener("keydown",this.closeMenuWithBtn.bind(this)),document.removeEventListener("click",this.closeMenuWithClickOutside.bind(this)),this.refs.closeMenuBtn.removeEventListener("click",this.closeMenu.bind(this))}closeMenuWithBtn(e){e.code===t.CLOSE_MODAL_MENU_BTN_CODE&&this.closeMenu()}closeMenuWithClickOutside(t){t.target.closest(".js-modal-menu")||t.target.closest(".js-menu-open")||this.closeMenu()}defineModalCurrentPageLink(){const t=[];this.refs.modalMenuItems.forEach((e=>{let n=e.dataset.path;t.push(n),window.location.href.includes(n)?e.classList.add("current-page-main"):e.classList.remove("current-page-main")}))}}new t;function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}new class{constructor(){this.refs={benefitGroups:document.querySelectorAll(".js-benefits-item"),tabButtons:document.querySelectorAll(".js-tab-button")},this.addListeners()}addListeners(){this.refs.tabButtons.forEach((t=>t.addEventListener("click",this.selectBenefitGroup.bind(this))))}selectBenefitGroup(t){const e=t.target.closest(".js-tab-button");this.refs.tabButtons.forEach((t=>{e.name!==t.name?t.classList.remove("clicked"):t.classList.add("clicked")})),this.refs.benefitGroups.forEach((t=>{e.name===t.dataset.name?t.classList.remove("is-hidden"):t.classList.add("is-hidden")}))}};
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function i(t){t.length=0}function r(t,e,n){return Array.prototype.slice.call(t,e,n)}function o(t){return t.bind.apply(t,[null].concat(r(arguments,1)))}var s=setTimeout,a=function(){};function u(t){return requestAnimationFrame(t)}function c(t,e){return typeof e===t}function l(t){return!h(t)&&c("object",t)}var d=Array.isArray,f=o(c,"function"),p=o(c,"string"),v=o(c,"undefined");function h(t){return null===t}function m(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function g(t){return d(t)?t:[t]}function y(t,e){g(t).forEach(e)}function b(t,e){return t.indexOf(e)>-1}function w(t,e){return t.push.apply(t,g(e)),t}function E(t,e,n){t&&y(e,(function(e){e&&t.classList[n?"add":"remove"](e)}))}function _(t,e){E(t,p(e)?e.split(" "):e,!0)}function S(t,e){y(e,t.appendChild.bind(t))}function L(t,e){y(t,(function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)}))}function x(t,e){return m(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function k(t,e){var n=t?r(t.children):[];return e?n.filter((function(t){return x(t,e)})):n}function C(t,e){return e?k(t,e)[0]:t.firstElementChild}var A=Object.keys;function M(t,e,n){return t&&(n?A(t).reverse():A(t)).forEach((function(n){"__proto__"!==n&&e(t[n],n)})),t}function P(t){return r(arguments,1).forEach((function(e){M(e,(function(n,i){t[i]=e[i]}))})),t}function z(t){return r(arguments,1).forEach((function(e){M(e,(function(e,n){d(e)?t[n]=e.slice():l(e)?t[n]=z({},l(t[n])?t[n]:{},e):t[n]=e}))})),t}function O(t,e){y(e||A(t),(function(e){delete t[e]}))}function D(t,e){y(t,(function(t){y(e,(function(e){t&&t.removeAttribute(e)}))}))}function j(t,e,n){l(e)?M(e,(function(e,n){j(t,n,e)})):y(t,(function(t){h(n)||""===n?D(t,e):t.setAttribute(e,String(n))}))}function F(t,e,n){var i=document.createElement(t);return e&&(p(e)?_(i,e):j(i,e)),n&&S(n,i),i}function N(t,e,n){if(v(n))return getComputedStyle(t)[e];h(n)||(t.style[e]=""+n)}function I(t,e){N(t,"display",e)}function B(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function T(t,e){return t.getAttribute(e)}function R(t,e){return t&&t.classList.contains(e)}function W(t){return t.getBoundingClientRect()}function q(t){y(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function G(t){return C((new DOMParser).parseFromString(t,"text/html").body)}function X(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function H(t,e){return t&&t.querySelector(e)}function U(t,e){return e?r(t.querySelectorAll(e)):[]}function Y(t,e){E(t,e,!1)}function K(t){return t.timeStamp}function V(t){return p(t)?t:t?t+"px":""}function J(t,e){if(!t)throw new Error("[splide] "+(e||""))}var Q=Math.min,$=Math.max,Z=Math.floor,tt=Math.ceil,et=Math.abs;function nt(t,e,n){return et(t-e)<n}function it(t,e,n,i){var r=Q(e,n),o=$(e,n);return i?r<t&&t<o:r<=t&&t<=o}function rt(t,e,n){var i=Q(e,n),r=$(e,n);return Q($(i,t),r)}function ot(t){return+(t>0)-+(t<0)}function st(t,e){return y(e,(function(e){t=t.replace("%s",""+e)})),t}function at(t){return t<10?"0"+t:""+t}var ut={};function ct(t){return""+t+at(ut[t]=(ut[t]||0)+1)}function lt(){var t=[];function e(t,e,n){y(t,(function(t){t&&y(e,(function(e){e.split(" ").forEach((function(e){var i=e.split(".");n(t,i[0],i[1])}))}))}))}return{bind:function(n,i,r,o){e(n,i,(function(e,n,i){var s="addEventListener"in e,a=s?e.removeEventListener.bind(e,n,r,o):e.removeListener.bind(e,r);s?e.addEventListener(n,r,o):e.addListener(r),t.push([e,n,i,r,a])}))},unbind:function(n,i,r){e(n,i,(function(e,n,i){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var i;return"function"==typeof CustomEvent?i=new CustomEvent(e,{bubbles:true,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,true,!1,n),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),i(t)}}}function dt(t){var e=t?t.event.bus:document.createDocumentFragment(),n=lt();return t&&t.event.on("destroy",n.destroy),P(n,{bus:e,on:function(t,i){n.bind(e,g(t).join(" "),(function(t){i.apply(i,d(t.detail)?t.detail:[])}))},off:o(n.unbind,e),emit:function(t){n.dispatch(e,t,r(arguments,1))}})}function ft(t,e,n,i){var r,o,s=Date.now,a=0,c=!0,l=0;function d(){if(!c){if(a=t?Q((s()-r)/t,1):1,n&&n(a),a>=1&&(e(),r=s(),i&&++l>=i))return f();o=u(d)}}function f(){c=!0}function p(){o&&cancelAnimationFrame(o),a=0,o=0,c=!0}return{start:function(e){e||p(),r=s()-(e?a*t:0),c=!1,o=u(d)},rewind:function(){r=s(),a=0,n&&n(a)},pause:f,cancel:p,set:function(e){t=e},isPaused:function(){return c}}}var pt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function vt(t,e,n){return{resolve:function(t,e,i){var r="rtl"!==(i=i||n.direction)||e?"ttb"===i?0:-1:1;return pt[t]&&pt[t][r]||t.replace(/width|left|right/i,(function(t,e){var n=pt[t.toLowerCase()][r]||t;return e>0?n.charAt(0).toUpperCase()+n.slice(1):n}))},orient:function(t){return t*("rtl"===n.direction?1:-1)}}}var ht=["role","tabindex","disabled","aria-controls","aria-current","aria-label","aria-labelledby","aria-hidden","aria-orientation","aria-roledescription"],mt="splide",gt="is-active",yt=[gt,"is-visible","is-prev","is-next","is-loading","is-focus-in","is-overflow"],bt={slide:"splide__slide",clone:"splide__slide--clone",arrows:"splide__arrows",arrow:"splide__arrow",prev:"splide__arrow--prev",next:"splide__arrow--next",pagination:"splide__pagination",page:"splide__pagination__page",spinner:"splide__spinner"};function wt(t,e,n,i){var r,s=dt(t),a=s.on,u=s.emit,c=s.bind,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,h=f.i18n,m=f.pagination,g=f.slideFocus,y=l.Direction.resolve,b=T(i,"style"),w=T(i,"aria-label"),_=n>-1,S=C(i,".splide__slide__container");function L(){var r=t.splides.map((function(t){var n=t.splide.Components.Slides.getAt(e);return n?n.slide.id:""})).join(" ");j(i,"aria-label",st(h.slideX,(_?n:e)+1)),j(i,"aria-controls",r),j(i,"role",g?"button":""),g&&D(i,"aria-roledescription")}function x(){r||k()}function k(){if(!r){var n=t.index;(o=A())!==R(i,gt)&&(E(i,gt,o),j(i,"aria-current",p&&o||""),u(o?"active":"inactive",M)),function(){var e=function(){if(t.is("fade"))return A();var e=W(l.Elements.track),n=W(i),r=y("left",!0),o=y("right",!0);return Z(e[r])<=tt(n[r])&&Z(n[o])<=tt(e[o])}(),n=!e&&(!A()||_);t.state.is([4,5])||j(i,"aria-hidden",n||"");j(U(i,f.focusableNodes||""),"tabindex",n?-1:""),g&&j(i,"tabindex",n?-1:0);e!==R(i,"is-visible")&&(E(i,"is-visible",e),u(e?"visible":"hidden",M));if(!e&&document.activeElement===i){var r=l.Slides.getAt(t.index);r&&B(r.slide)}}(),E(i,"is-prev",e===n-1),E(i,"is-next",e===n+1)}var o}function A(){var i=t.index;return i===e||f.cloneStatus&&i===n}var M={index:e,slideIndex:n,slide:i,container:S,isClone:_,mount:function(){_||(i.id=d.id+"-slide"+at(e+1),j(i,"role",m?"tabpanel":"group"),j(i,"aria-roledescription",h.slide),j(i,"aria-label",w||st(h.slideLabel,[e+1,t.length]))),c(i,"click",o(u,"click",M)),c(i,"keydown",o(u,"sk",M)),a(["moved","sh","scrolled"],k),a("navigation:mounted",L),v&&a("move",x)},destroy:function(){r=!0,s.destroy(),Y(i,yt),D(i,ht),j(i,"style",b),j(i,"aria-label",w||"")},update:k,style:function(t,e,n){N(n&&S||i,t,e)},isWithin:function(n,i){var r=et(n-e);return _||!f.rewind&&!t.is("loop")||(r=Q(r,t.length-r)),r<=i}};return M}var Et="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var _t={passive:!1,capture:!0};var St={Spacebar:" ",Right:"ArrowRight",Left:"ArrowLeft",Up:"ArrowUp",Down:"ArrowDown"};function Lt(t){return t=p(t)?t:t.key,St[t]||t}var xt=[" ","Enter"];var kt=Object.freeze({__proto__:null,Media:function(t,e,n){var i=t.state,r=n.breakpoints||{},o=n.reducedMotion||{},s=lt(),a=[];function u(t){t&&s.destroy()}function c(t,e){var n=matchMedia(e);s.bind(n,"change",l),a.push([t,n])}function l(){var e=i.is(7),r=n.direction,o=a.reduce((function(t,e){return z(t,e[1].matches?e[0]:{})}),{});O(n),d(o),n.destroy?t.destroy("completely"===n.destroy):e?(u(!0),t.mount()):r!==n.direction&&t.refresh()}function d(e,r,o){z(n,e),r&&z(Object.getPrototypeOf(n),e),!o&&i.is(1)||t.emit("updated",n)}return{setup:function(){var t="min"===n.mediaQuery;A(r).sort((function(e,n){return t?+e-+n:+n-+e})).forEach((function(e){c(r[e],"("+(t?"min":"max")+"-width:"+e+"px)")})),c(o,"(prefers-reduced-motion: reduce)"),l()},destroy:u,reduce:function(t){matchMedia("(prefers-reduced-motion: reduce)").matches&&(t?z(n,o):O(n,A(o)))},set:d}},Direction:vt,Elements:function(t,e,n){var r,o,s,a=dt(t),u=a.on,c=a.bind,l=t.root,d=n.i18n,p={},v=[],h=[],m=[];function g(){r=S(".splide__track"),o=C(r,".splide__list"),J(r&&o,"A track/list element is missing."),w(v,k(o,".splide__slide:not(.splide__slide--clone)")),M({arrows:"splide__arrows",pagination:"splide__pagination",prev:"splide__arrow--prev",next:"splide__arrow--next",bar:"splide__progress__bar",toggle:"splide__toggle"},(function(t,e){p[e]=S("."+t)})),P(p,{root:l,track:r,list:o,slides:v}),function(){var t=l.id||ct("splide"),e=n.role;l.id=t,r.id=r.id||t+"-track",o.id=o.id||t+"-list",!T(l,"role")&&"SECTION"!==l.tagName&&e&&j(l,"role",e);j(l,"aria-roledescription",d.carousel),j(o,"role","presentation")}(),b()}function y(t){var e=ht.concat("style");i(v),Y(l,h),Y(r,m),D([r,o],e),D(l,t?e:["style","aria-roledescription"])}function b(){Y(l,h),Y(r,m),h=L(mt),m=L("splide__track"),_(l,h),_(r,m),j(l,"aria-label",n.label),j(l,"aria-labelledby",n.labelledby)}function S(t){var e=H(l,t);return e&&function(t,e){if(f(t.closest))return t.closest(e);for(var n=t;n&&1===n.nodeType&&!x(n,e);)n=n.parentElement;return n}(e,"."+mt)===l?e:void 0}function L(t){return[t+"--"+n.type,t+"--"+n.direction,n.drag&&t+"--draggable",n.isNavigation&&t+"--nav",t===mt&&gt]}return P(p,{setup:g,mount:function(){u("refresh",y),u("refresh",g),u("updated",b),c(document,"touchstart mousedown keydown",(function(t){s="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){E(l,"is-focus-in",!!s)}))},destroy:y})},Slides:function(t,e,n){var r=dt(t),s=r.on,a=r.emit,u=r.bind,c=e.Elements,l=c.slides,d=c.list,v=[];function h(){l.forEach((function(t,e){E(t,e,-1)}))}function w(){C((function(t){t.destroy()})),i(v)}function E(e,n,i){var r=wt(t,n,i,e);r.mount(),v.push(r),v.sort((function(t,e){return t.index-e.index}))}function k(t){return t?A((function(t){return!t.isClone})):v}function C(t,e){k(e).forEach(t)}function A(t){return v.filter(f(t)?t:function(e){return p(t)?x(e.slide,t):b(g(t),e.index)})}return{mount:function(){h(),s("refresh",w),s("refresh",h)},destroy:w,update:function(){C((function(t){t.update()}))},register:E,get:k,getIn:function(t){var i=e.Controller,r=i.toIndex(t),o=i.hasFocus()?1:n.perPage;return A((function(t){return it(t.index,r,r+o-1)}))},getAt:function(t){return A(t)[0]},add:function(t,e){y(t,(function(t){if(p(t)&&(t=G(t)),m(t)){var i=l[e];i?L(t,i):S(d,t),_(t,n.classes.slide),r=t,s=o(a,"resize"),c=U(r,"img"),(f=c.length)?c.forEach((function(t){u(t,"load error",(function(){--f||s()}))})):s()}var r,s,c,f})),a("refresh")},remove:function(t){q(A(t).map((function(t){return t.slide}))),a("refresh")},forEach:C,filter:A,style:function(t,e,n){C((function(i){i.style(t,e,n)}))},getLength:function(t){return t?l.length:v.length},isEnough:function(){return v.length>n.perPage}}},Layout:function(t,e,n){var i,r,s,a=dt(t),u=a.on,c=a.bind,d=a.emit,f=e.Slides,p=e.Direction.resolve,v=e.Elements,h=v.root,m=v.track,g=v.list,y=f.getAt,b=f.style;function w(){i="ttb"===n.direction,N(h,"maxWidth",V(n.width)),N(m,p("paddingLeft"),S(!1)),N(m,p("paddingRight"),S(!0)),_(!0)}function _(t){var e=W(h);(t||r.width!==e.width||r.height!==e.height)&&(N(m,"height",function(){var t="";i&&(J(t=L(),"height or heightRatio is missing."),t="calc("+t+" - "+S(!1)+" - "+S(!0)+")");return t}()),b(p("marginRight"),V(n.gap)),b("width",n.autoWidth?null:V(n.fixedWidth)||(i?"":x())),b("height",V(n.fixedHeight)||(i?n.autoHeight?null:x():L()),!0),r=e,d("resized"),s!==(s=z())&&(E(h,"is-overflow",s),d("overflow",s)))}function S(t){var e=n.padding,i=p(t?"right":"left");return e&&V(e[i]||(l(e)?0:e))||"0px"}function L(){return V(n.height||W(g).width*n.heightRatio)}function x(){var t=V(n.gap);return"calc((100%"+(t&&" + "+t)+")/"+(n.perPage||1)+(t&&" - "+t)+")"}function k(){return W(g)[p("width")]}function C(t,e){var n=y(t||0);return n?W(n.slide)[p("width")]+(e?0:P()):0}function A(t,e){var n=y(t);if(n){var i=W(n.slide)[p("right")],r=W(g)[p("left")];return et(i-r)+(e?0:P())}return 0}function M(e){return A(t.length-1)-A(0)+C(0,e)}function P(){var t=y(0);return t&&parseFloat(N(t.slide,p("marginRight")))||0}function z(){return t.is("fade")||M(!0)>k()}return{mount:function(){var t,e,n;w(),c(window,"resize load",(t=o(d,"resize"),n=ft(e||0,t,null,1),function(){n.isPaused()&&n.start()})),u(["updated","refresh"],w),u("resize",_)},resize:_,listSize:k,slideSize:C,sliderSize:M,totalSize:A,getPadding:function(t){return parseFloat(N(m,p("padding"+(t?"Right":"Left"))))||0},isOverflow:z}},Clones:function(t,e,n){var r,o=dt(t),s=o.on,a=e.Elements,u=e.Slides,c=e.Direction.resolve,l=[];function d(){s("refresh",f),s(["updated","resize"],h),(r=m())&&(!function(e){var i=u.get().slice(),r=i.length;if(r){for(;i.length<e;)w(i,i);w(i.slice(-e),i.slice(0,e)).forEach((function(o,s){var c=s<e,d=function(e,i){var r=e.cloneNode(!0);return _(r,n.classes.clone),r.id=t.root.id+"-clone"+at(i+1),r}(o.slide,s);c?L(d,i[0].slide):S(a.list,d),w(l,d),u.register(d,s-e+(c?0:r),o.index)}))}}(r),e.Layout.resize(!0))}function f(){p(),d()}function p(){q(l),i(l),o.destroy()}function h(){var t=m();r!==t&&(r<t||!t)&&o.emit("refresh")}function m(){var i=n.clones;if(t.is("loop")){if(v(i)){var r=n[c("fixedWidth")]&&e.Layout.slideSize(0);i=r&&tt(W(a.track)[c("width")]/r)||n[c("autoWidth")]&&t.length||2*n.perPage}}else i=0;return i}return{mount:d,destroy:p}},Move:function(t,e,n){var i,r=dt(t),o=r.on,s=r.emit,a=t.state.set,u=e.Layout,c=u.slideSize,l=u.getPadding,d=u.totalSize,f=u.listSize,p=u.sliderSize,h=e.Direction,m=h.resolve,g=h.orient,y=e.Elements,b=y.list,w=y.track;function E(){e.Controller.isBusy()||(e.Scroll.cancel(),_(t.index),e.Slides.update())}function _(t){S(C(t,!0))}function S(n,i){if(!t.is("fade")){var r=i?n:function(n){if(t.is("loop")){var i=k(n),r=i>e.Controller.getEnd();(i<0||r)&&(n=L(n,r))}return n}(n);N(b,"transform","translate"+m("X")+"("+r+"px)"),n!==r&&s("sh")}}function L(t,e){var n=t-M(e),i=p();return t-=g(i*(tt(et(n)/i)||1))*(e?1:-1)}function x(){S(A(),!0),i.cancel()}function k(t){for(var n=e.Slides.get(),i=0,r=1/0,o=0;o<n.length;o++){var s=n[o].index,a=et(C(s,!0)-t);if(!(a<=r))break;r=a,i=s}return i}function C(e,i){var r=g(d(e-1)-function(t){var e=n.focus;return"center"===e?(f()-c(t,!0))/2:+e*c(t)||0}(e));return i?function(e){n.trimSpace&&t.is("slide")&&(e=rt(e,0,g(p(!0)-f())));return e}(r):r}function A(){var t=m("left");return W(b)[t]-W(w)[t]+g(l(!1))}function M(t){return C(t?e.Controller.getEnd():0,!!n.trimSpace)}return{mount:function(){i=e.Transition,o(["mounted","resized","updated","refresh"],E)},move:function(t,e,n,r){var o,u;t!==e&&(o=t>n,u=g(L(A(),o)),o?u>=0:u<=b[m("scrollWidth")]-W(w)[m("width")])&&(x(),S(L(A(),t>n),!0)),a(4),s("move",e,n,t),i.start(e,(function(){a(3),s("moved",e,n,t),r&&r()}))},jump:_,translate:S,shift:L,cancel:x,toIndex:k,toPosition:C,getPosition:A,getLimit:M,exceededLimit:function(t,e){e=v(e)?A():e;var n=!0!==t&&g(e)<g(M(!1)),i=!1!==t&&g(e)>g(M(!0));return n||i},reposition:E}},Controller:function(t,e,n){var i,r,s,a,u=dt(t),c=u.on,l=u.emit,d=e.Move,f=d.getPosition,h=d.getLimit,m=d.toPosition,g=e.Slides,y=g.isEnough,b=g.getLength,w=n.omitEnd,E=t.is("loop"),_=t.is("slide"),S=o(M,!1),L=o(M,!0),x=n.start||0,k=x;function C(){r=b(!0),s=n.perMove,a=n.perPage,i=O();var t=rt(x,0,w?i:r-1);t!==x&&(x=t,d.reposition())}function A(){i!==O()&&l("ei")}function M(t,e){var n=s||(N()?1:a),r=P(x+n*(t?-1:1),x,!(s||N()));return-1===r&&_&&!nt(f(),h(!t),1)?t?0:i:e?r:z(r)}function P(e,o,u){if(y()||N()){var c=function(e){if(_&&"move"===n.trimSpace&&e!==x)for(var i=f();i===m(e,!0)&&it(e,0,t.length-1,!n.rewind);)e<x?--e:++e;return e}(e);c!==e&&(o=e,e=c,u=!1),e<0||e>i?e=s||!it(0,e,o,!0)&&!it(i,o,e,!0)?E?u?e<0?-(r%a||a):r:e:n.rewind?e<0?i:0:-1:D(j(e)):u&&e!==o&&(e=D(j(o)+(e<o?-1:1)))}else e=-1;return e}function z(t){return E?(t+r)%r||0:t}function O(){for(var t=r-(N()||E&&s?1:a);w&&t-- >0;)if(m(r-1,!0)!==m(t,!0)){t++;break}return rt(t,0,r-1)}function D(t){return rt(N()?t:a*t,0,i)}function j(t){return N()?Q(t,i):Z((t>=i?r-1:t)/a)}function F(t){t!==x&&(k=x,x=t)}function N(){return!v(n.focus)||n.isNavigation}function I(){return t.state.is([4,5])&&!!n.waitForTransition}return{mount:function(){C(),c(["updated","refresh","ei"],C),c("resized",A)},go:function(t,e,n){if(!I()){var r=function(t){var e=x;if(p(t)){var n=t.match(/([+\-<>])(\d+)?/)||[],r=n[1],o=n[2];"+"===r||"-"===r?e=P(x+ +(""+r+(+o||1)),x):">"===r?e=o?D(+o):S(!0):"<"===r&&(e=L(!0))}else e=E?t:rt(t,0,i);return e}(t),o=z(r);o>-1&&(e||o!==x)&&(F(o),d.move(r,o,k,n))}},scroll:function(t,n,r,o){e.Scroll.scroll(t,n,r,(function(){var t=z(d.toIndex(f()));F(w?Q(t,i):t),o&&o()}))},getNext:S,getPrev:L,getAdjacent:M,getEnd:O,setIndex:F,getIndex:function(t){return t?k:x},toIndex:D,toPage:j,toDest:function(t){var e=d.toIndex(t);return _?rt(e,0,i):e},hasFocus:N,isBusy:I}},Arrows:function(t,e,n){var i,r,s=dt(t),a=s.on,u=s.bind,c=s.emit,l=n.classes,d=n.i18n,f=e.Elements,p=e.Controller,v=f.arrows,h=f.track,m=v,g=f.prev,y=f.next,b={};function w(){!function(){var t=n.arrows;!t||g&&y||(m=v||F("div",l.arrows),g=C(!0),y=C(!1),i=!0,S(m,[g,y]),!v&&L(m,h));g&&y&&(P(b,{prev:g,next:y}),I(m,t?"":"none"),_(m,r="splide__arrows--"+n.direction),t&&(a(["mounted","moved","refresh","scrolled","ei"],A),u(y,"click",o(k,">")),u(g,"click",o(k,"<")),A(),j([g,y],"aria-controls",h.id),c("arrows:mounted",g,y)))}(),a("updated",E)}function E(){x(),w()}function x(){s.destroy(),Y(m,r),i?(q(v?[g,y]:m),g=y=null):D([g,y],ht)}function k(t){p.go(t,!0)}function C(t){return G('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(n.arrowPath||Et)+'" />')}function A(){if(g&&y){var e=t.index,n=p.getPrev(),i=p.getNext(),r=n>-1&&e<n?d.last:d.prev,o=i>-1&&e>i?d.first:d.next;g.disabled=n<0,y.disabled=i<0,j(g,"aria-label",r),j(y,"aria-label",o),c("arrows:updated",g,y,n,i)}}return{arrows:b,mount:w,destroy:x,update:A}},Autoplay:function(t,e,n){var i,r,o=dt(t),s=o.on,a=o.bind,u=o.emit,c=ft(n.interval,t.go.bind(t,">"),(function(t){var e=d.bar;e&&N(e,"width",100*t+"%"),u("autoplay:playing",t)})),l=c.isPaused,d=e.Elements,f=e.Elements,p=f.root,v=f.toggle,h=n.autoplay,m="pause"===h;function g(){l()&&e.Slides.isEnough()&&(c.start(!n.resetProgress),r=i=m=!1,w(),u("autoplay:play"))}function y(t){void 0===t&&(t=!0),m=!!t,w(),l()||(c.pause(),u("autoplay:pause"))}function b(){m||(i||r?y(!1):g())}function w(){v&&(E(v,gt,!m),j(v,"aria-label",n.i18n[m?"play":"pause"]))}function _(t){var i=e.Slides.getAt(t);c.set(i&&+T(i.slide,"data-splide-interval")||n.interval)}return{mount:function(){h&&(!function(){n.pauseOnHover&&a(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()}));n.pauseOnFocus&&a(p,"focusin focusout",(function(t){r="focusin"===t.type,b()}));v&&a(v,"click",(function(){m?g():y(!0)}));s(["move","scroll","refresh"],c.rewind),s("move",_)}(),v&&j(v,"aria-controls",d.track.id),m||g(),w())},destroy:c.cancel,play:g,pause:y,isPaused:l}},Cover:function(t,e,n){var i=dt(t).on;function r(t){e.Slides.forEach((function(e){var n=C(e.container||e.slide,"img");n&&n.src&&s(t,n,e)}))}function s(t,e,n){n.style("background",t?'center/cover no-repeat url("'+e.src+'")':"",!0),I(e,t?"none":"")}return{mount:function(){n.cover&&(i("lazyload:loaded",o(s,!0)),i(["mounted","updated","refresh"],o(r,!0)))},destroy:o(r,!1)}},Scroll:function(t,e,n){var i,r,s=dt(t),a=s.on,u=s.emit,c=t.state.set,l=e.Move,d=l.getPosition,f=l.getLimit,p=l.exceededLimit,v=l.translate,h=t.is("slide"),m=1;function g(t,n,s,a,f){var v=d();if(w(),s&&(!h||!p())){var g=e.Layout.sliderSize(),E=ot(t)*g*Z(et(t)/g)||0;t=l.toPosition(e.Controller.toDest(t%g))+E}var _=nt(v,t,1);m=1,n=_?0:n||$(et(t-v)/1.5,800),r=a,i=ft(n,y,o(b,v,t,f),1),c(5),u("scroll"),i.start()}function y(){c(3),r&&r(),u("scrolled")}function b(t,e,i,o){var s,a,u=d(),c=(t+(e-t)*(s=o,(a=n.easingFunc)?a(s):1-Math.pow(1-s,4))-u)*m;v(u+c),h&&!i&&p()&&(m*=.6,et(c)<10&&g(f(p(!0)),600,!1,r,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){a("move",w),a(["updated","refresh"],E)},destroy:w,scroll:g,cancel:E}},Drag:function(t,e,n){var i,r,o,s,u,c,d,f,p=dt(t),v=p.on,h=p.emit,m=p.bind,g=p.unbind,y=t.state,b=e.Move,w=e.Scroll,E=e.Controller,_=e.Elements.track,S=e.Media.reduce,L=e.Direction,k=L.resolve,C=L.orient,A=b.getPosition,M=b.exceededLimit,P=!1;function z(){var t=n.drag;q(!t),s="free"===t}function O(t){if(c=!1,!d){var e=W(t);i=t.target,r=n.noDrag,x(i,".splide__pagination__page, .splide__arrow")||r&&x(i,r)||!e&&t.button||(E.isBusy()?X(t,!0):(f=e?_:window,u=y.is([4,5]),o=null,m(f,"touchmove mousemove",D,_t),m(f,"touchend touchcancel mouseup click",j,_t),b.cancel(),w.cancel(),N(t)))}var i,r}function D(e){if(y.is(6)||(y.set(6),h("drag")),e.cancelable)if(u){b.translate(i+I(e)/(P&&t.is("slide")?5:1));var r=B(e)>200,o=P!==(P=M());(r||o)&&N(e),c=!0,h("dragging"),X(e)}else(function(t){return et(I(t))>et(I(t,!0))})(e)&&(u=function(t){var e=n.dragMinThreshold,i=l(e),r=i&&e.mouse||0,o=(i?e.touch:+e)||10;return et(I(t))>(W(t)?o:r)}(e),X(e))}function j(i){y.is(6)&&(y.set(3),h("dragged")),u&&(!function(i){var r=function(e){if(t.is("loop")||!P){var n=B(e);if(n&&n<200)return I(e)/n}return 0}(i),o=function(t){return A()+ot(t)*Q(et(t)*(n.flickPower||600),s?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}(r),a=n.rewind&&n.rewindByDrag;S(!1),s?E.scroll(o,0,n.snap):t.is("fade")?E.go(C(ot(r))<0?a?"<":"-":a?">":"+"):t.is("slide")&&P&&a?E.go(M(!0)?">":"<"):E.go(E.toDest(o),!0);S(!0)}(i),X(i)),g(f,"touchmove mousemove",D),g(f,"touchend touchcancel mouseup click",j),u=!1}function F(t){!d&&c&&X(t,!0)}function N(t){o=r,r=t,i=A()}function I(t,e){return R(t,e)-R(T(t),e)}function B(t){return K(t)-K(T(t))}function T(t){return r===t&&o||r}function R(t,e){return(W(t)?t.changedTouches[0]:t)["page"+k(e?"Y":"X")]}function W(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function q(t){d=t}return{mount:function(){m(_,"touchmove mousemove",a,_t),m(_,"touchend touchcancel mouseup click",a,_t),m(_,"touchstart mousedown",O,_t),m(_,"click",F,{capture:!0}),m(_,"dragstart",X),v(["mounted","updated"],z)},disable:q,isDragging:function(){return u}}},Keyboard:function(t,e,n){var i,r,o=dt(t),a=o.on,u=o.bind,c=o.unbind,l=t.root,d=e.Direction.resolve;function f(){var t=n.keyboard;t&&(i="global"===t?window:l,u(i,"keydown",h))}function p(){c(i,"keydown")}function v(){var t=r;r=!0,s((function(){r=t}))}function h(e){if(!r){var n=Lt(e);n===d("ArrowLeft")?t.go("<"):n===d("ArrowRight")&&t.go(">")}}return{mount:function(){f(),a("updated",p),a("updated",f),a("move",v)},destroy:p,disable:function(t){r=t}}},LazyLoad:function(t,e,n){var r=dt(t),s=r.on,a=r.off,u=r.bind,c=r.emit,l="sequential"===n.lazyLoad,d=["moved","scrolled"],f=[];function p(){i(f),e.Slides.forEach((function(t){U(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(e){var i=T(e,"data-splide-lazy"),r=T(e,"data-splide-lazy-srcset");if(i!==e.src||r!==e.srcset){var o=n.classes.spinner,s=e.parentElement,a=C(s,"."+o)||F("span",o,s);f.push([e,t,a]),e.src||I(e,"none")}}))})),l?g():(a(d),s(d,v),v())}function v(){(f=f.filter((function(e){var i=n.perPage*((n.preloadPages||1)+1)-1;return!e[1].isWithin(t.index,i)||h(e)}))).length||a(d)}function h(t){var e=t[0];_(t[1].slide,"is-loading"),u(e,"load error",o(m,t)),j(e,"src",T(e,"data-splide-lazy")),j(e,"srcset",T(e,"data-splide-lazy-srcset")),D(e,"data-splide-lazy"),D(e,"data-splide-lazy-srcset")}function m(t,e){var n=t[0],i=t[1];Y(i.slide,"is-loading"),"error"!==e.type&&(q(t[2]),I(n,""),c("lazyload:loaded",n,i),c("resize")),l&&g()}function g(){f.length&&h(f.shift())}return{mount:function(){n.lazyLoad&&(p(),s("refresh",p))},destroy:o(i,f),check:v}},Pagination:function(t,e,n){var s,a,u=dt(t),c=u.on,l=u.emit,d=u.bind,f=e.Slides,p=e.Elements,v=e.Controller,h=v.hasFocus,m=v.getIndex,g=v.go,y=e.Direction.resolve,b=p.pagination,w=[];function E(){s&&(q(b?r(s.children):s),Y(s,a),i(w),s=null),u.destroy()}function S(t){g(">"+t,!0)}function L(t,e){var n=w.length,i=Lt(e),r=x(),o=-1;i===y("ArrowRight",!1,r)?o=++t%n:i===y("ArrowLeft",!1,r)?o=(--t+n)%n:"Home"===i?o=0:"End"===i&&(o=n-1);var s=w[o];s&&(B(s.button),g(">"+o),X(e,!0))}function x(){return n.paginationDirection||n.direction}function k(t){return w[v.toPage(t)]}function C(){var t=k(m(!0)),e=k(m());if(t){var n=t.button;Y(n,gt),D(n,"aria-selected"),j(n,"tabindex",-1)}if(e){var i=e.button;_(i,gt),j(i,"aria-selected",!0),j(i,"tabindex","")}l("pagination:updated",{list:s,items:w},t,e)}return{items:w,mount:function e(){E(),c(["updated","refresh","ei"],e);var i=n.pagination;b&&I(b,i?"":"none"),i&&(c(["move","scroll","scrolled"],C),function(){var e=t.length,i=n.classes,r=n.i18n,u=n.perPage,c=h()?v.getEnd()+1:tt(e/u);_(s=b||F("ul",i.pagination,p.track.parentElement),a="splide__pagination--"+x()),j(s,"role","tablist"),j(s,"aria-label",r.select),j(s,"aria-orientation","ttb"===x()?"vertical":"");for(var l=0;l<c;l++){var m=F("li",null,s),g=F("button",{class:i.page,type:"button"},m),y=f.getIn(l).map((function(t){return t.slide.id})),E=!h()&&u>1?r.pageX:r.slideX;d(g,"click",o(S,l)),n.paginationKeyboard&&d(g,"keydown",o(L,l)),j(m,"role","presentation"),j(g,"role","tab"),j(g,"aria-controls",y.join(" ")),j(g,"aria-label",st(E,l+1)),j(g,"tabindex",-1),w.push({li:m,button:g,page:l})}}(),C(),l("pagination:mounted",{list:s,items:w},k(t.index)))},destroy:E,getAt:k,update:C}},Sync:function(t,e,n){var r=n.isNavigation,s=n.slideFocus,a=[];function u(){var e,n;t.splides.forEach((function(e){e.isParent||(l(t,e.splide),l(e.splide,t))})),r&&(e=dt(t),(n=e.on)("click",f),n("sk",p),n(["mounted","updated"],d),a.push(e),e.emit("navigation:mounted",t.splides))}function c(){a.forEach((function(t){t.destroy()})),i(a)}function l(t,e){var n=dt(t);n.on("move",(function(t,n,i){e.go(e.is("loop")?i:t)})),a.push(n)}function d(){j(e.Elements.list,"aria-orientation","ttb"===n.direction?"vertical":"")}function f(e){t.go(e.index)}function p(t,e){b(xt,Lt(e))&&(f(t),X(e))}return{setup:o(e.Media.set,{slideFocus:v(s)?r:s},!0),mount:u,destroy:c,remount:function(){c(),u()}}},Wheel:function(t,e,n){var i=dt(t).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,s=o<0,a=K(i),u=n.wheelMinThreshold||0,c=n.wheelSleep||0;et(o)>u&&a-r>c&&(t.go(s?"<":">"),r=a),function(i){return!n.releaseWheel||t.state.is(4)||-1!==e.Controller.getAdjacent(i)}(s)&&X(i)}}return{mount:function(){n.wheel&&i(e.Elements.track,"wheel",o,_t)}}},Live:function(t,e,n){var i=dt(t).on,r=e.Elements.track,s=n.live&&!n.isNavigation,a=F("span","splide__sr"),u=ft(90,o(c,!1));function c(t){j(r,"aria-busy",t),t?(S(r,a),u.start()):(q(a),u.cancel())}function l(t){s&&j(r,"aria-live",t?"off":"polite")}return{mount:function(){s&&(l(!e.Autoplay.isPaused()),j(r,"aria-atomic",!0),a.textContent="…",i("autoplay:play",o(l,!0)),i("autoplay:pause",o(l,!1)),i(["moved","scrolled"],o(c,!0)))},disable:l,destroy:function(){D(r,["aria-live","aria-atomic","aria-busy"]),q(a)}}}}),Ct={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:bt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function At(t,e,n){var i=e.Slides;function r(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){dt(t).on(["mounted","refresh"],r)},start:function(t,e){i.style("transition","opacity "+n.speed+"ms "+n.easing),s(e)},cancel:a}}function Mt(t,e,n){var i,r=e.Move,s=e.Controller,a=e.Scroll,u=e.Elements.list,c=o(N,u,"transition");function l(){c(""),a.cancel()}return{mount:function(){dt(t).bind(u,"transitionend",(function(t){t.target===u&&i&&(l(),i())}))},start:function(e,o){var u=r.toPosition(e,!0),l=r.getPosition(),d=function(e){var i=n.rewindSpeed;if(t.is("slide")&&i){var r=s.getIndex(!0),o=s.getEnd();if(0===r&&e>=o||r>=o&&0===e)return i}return n.speed}(e);et(u-l)>=1&&d>=1?n.useScroll?a.scroll(u,d,!1,o):(c("transform "+d+"ms "+n.easing),r.translate(u,!0),i=o):(r.jump(e),o())},cancel:l}}var Pt=function(){function t(e,n){var i;this.event=dt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return b(g(t),i)}}),this.splides=[],this._o={},this._E={};var r=p(e)?H(document,e):e;J(r,r+" is invalid."),this.root=r,n=z({label:T(r,"aria-label")||"",labelledby:T(r,"aria-labelledby")||""},Ct,t.defaults,n||{});try{z(n,JSON.parse(T(r,"data-splide")))}catch(t){J(!1,"Invalid JSON")}this._o=Object.create(z({},n))}var n,o,s,a=t.prototype;return a.mount=function(t,e){var n=this,i=this.state,r=this.Components;return J(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=e||this._T||(this.is("fade")?At:Mt),this._E=t||this._E,M(P({},kt,this._E,{Transition:this._T}),(function(t,e){var i=t(n,r,n._o);r[e]=i,i.setup&&i.setup()})),M(r,(function(t){t.mount&&t.mount()})),this.emit("mounted"),_(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},a.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},a.go=function(t){return this._C.Controller.go(t),this},a.on=function(t,e){return this.event.on(t,e),this},a.off=function(t){return this.event.off(t),this},a.emit=function(t){var e;return(e=this.event).emit.apply(e,[t].concat(r(arguments,1))),this},a.add=function(t,e){return this._C.Slides.add(t,e),this},a.remove=function(t){return this._C.Slides.remove(t),this},a.is=function(t){return this._o.type===t},a.refresh=function(){return this.emit("refresh"),this},a.destroy=function(t){void 0===t&&(t=!0);var e=this.event,n=this.state;return n.is(1)?dt(this).on("ready",this.destroy.bind(this,t)):(M(this._C,(function(e){e.destroy&&e.destroy(t)}),!0),e.emit("destroy"),e.destroy(),t&&i(this.splides),n.set(7)),this},n=t,(o=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&e(n.prototype,o),s&&e(n,s),Object.defineProperty(n,"prototype",{writable:!1}),t}();Pt.defaults={},Pt.STATES=n;function zt(t,e,n){return Array.prototype.slice.call(t,e,n)}function Ot(t){return t.bind.apply(t,[null].concat(zt(arguments,1)))}function Dt(t){return requestAnimationFrame(t)}function jt(t,e){return typeof e===t}var Ft=Array.isArray;function Nt(t){return Ft(t)?t:[t]}function It(t,e){Nt(t).forEach(e)}Ot(jt,"function"),Ot(jt,"string"),Ot(jt,"undefined");var Bt=Object.keys;function Tt(t,e,n){if(t){var i=Bt(t);i=n?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===e(t[o],o))break}}return t}var Rt=Math.min;function Wt(t){var e=t?t.event.bus:document.createDocumentFragment(),n=function(){var t=[];function e(t,e,n){It(t,(function(t){t&&It(e,(function(e){e.split(" ").forEach((function(e){var i=e.split(".");n(t,i[0],i[1])}))}))}))}return{bind:function(n,i,r,o){e(n,i,(function(e,n,i){var s="addEventListener"in e,a=s?e.removeEventListener.bind(e,n,r,o):e.removeListener.bind(e,r);s?e.addEventListener(n,r,o):e.addListener(r),t.push([e,n,i,r,a])}))},unbind:function(n,i,r){e(n,i,(function(e,n,i){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var i;return"function"==typeof CustomEvent?i=new CustomEvent(e,{bubbles:!0,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,n),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on("destroy",n.destroy),function(t){return zt(arguments,1).forEach((function(e){Tt(e,(function(n,i){t[i]=e[i]}))})),t}(n,{bus:e,on:function(t,i){n.bind(e,Nt(t).join(" "),(function(t){i.apply(i,Ft(t.detail)?t.detail:[])}))},off:Ot(n.unbind,e),emit:function(t){n.dispatch(e,t,zt(arguments,1))}})}function qt(t,e,n,i){var r,o,s=Date.now,a=0,u=!0,c=0;function l(){if(!u){if(a=t?Rt((s()-r)/t,1):1,n&&n(a),a>=1&&(e(),r=s(),i&&++c>=i))return d();Dt(l)}}function d(){u=!0}function f(){o&&cancelAnimationFrame(o),a=0,o=0,u=!0}return{start:function(e){!e&&f(),r=s()-(e?a*t:0),u=!1,Dt(l)},rewind:function(){r=s(),a=0,n&&n(a)},pause:d,cancel:f,set:function(e){t=e},isPaused:function(){return u}}}function Gt(t,e,n){return Array.prototype.slice.call(t,e,n)}function Xt(t){return t.bind(null,...Gt(arguments,1))}function Ht(t,e){return typeof e===t}function Ut(t){return!Vt(t)&&Ht("object",t)}const Yt=Array.isArray;Xt(Ht,"function"),Xt(Ht,"string");const Kt=Xt(Ht,"undefined");function Vt(t){return null===t}function Jt(t,e){var n;(n=t,Yt(n)?n:[n]).forEach(e)}const Qt=Object.keys;function $t(t,e,n){if(t){let i=Qt(t);i=n?i.reverse():i;for(let n=0;n<i.length;n++){const r=i[n];if("__proto__"!==r&&!1===e(t[r],r))break}}return t}function Zt(t){return Gt(arguments,1).forEach((e=>{$t(e,((n,i)=>{t[i]=e[i]}))})),t}function te(t,e,n){Ut(e)?$t(e,((e,n)=>{te(t,n,e)})):Jt(t,(t=>{Vt(n)||""===n?function(t,e){Jt(t,(t=>{Jt(e,(e=>{t&&t.removeAttribute(e)}))}))}(t,e):t.setAttribute(e,String(n))}))}const{min:ee,max:ne,floor:ie,ceil:re,abs:oe}=Math;const se={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},ae={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};const ue=window.screen.width;new Pt(".splide",{pagination:!1,type:"loop",fixedWidth:"285px",gap:""+(ue>1320?"30px":"20px"),speed:500,focus:`${ue>1320?1:"center"}`,autoScroll:{speed:.3}}).mount({AutoScroll:function(t,e,n){const{on:i,off:r,bind:o,unbind:s}=Wt(t),{translate:a,getPosition:u,toIndex:c,getLimit:l}=e.Move,{setIndex:d,getIndex:f}=e.Controller,{orient:p}=e.Direction,{toggle:v}=e.Elements,{Live:h}=e,{root:m}=t,g=function(t,e){var n;return function(){n||(n=qt(e||0,(function(){t(),n=null}),null,1)).start()}}(e.Arrows.update,500);let y,b,w,E,_,S,L={};function x(){t.is("fade")||y||!1===n.autoScroll||(y=qt(0,z),function(){L.pauseOnHover&&o(m,"mouseenter mouseleave",(t=>{w="mouseenter"===t.type,P()}));L.pauseOnFocus&&o(m,"focusin focusout",(t=>{E="focusin"===t.type,P()}));L.useToggleButton&&o(v,"click",(()=>{b?A():M()}));i("updated",C),i(["move","drag","scroll"],(()=>{_=!0,M(!1)})),i(["moved","dragged","scrolled"],(()=>{_=!1,P()}))}(),L.autoStart&&("complete"===document.readyState?A():o(window,"load",A)))}function k(){y&&(y.cancel(),y=null,S=void 0,r(["move","drag","scroll","moved","scrolled"]),s(m,"mouseenter mouseleave focusin focusout"),s(v,"click"))}function C(){const{autoScroll:t}=n;!1!==t?(L=Zt({},L,Ut(t)?t:{}),x()):k(),y&&!Kt(S)&&a(S)}function A(){D()&&(y.start(!0),h.disable(!0),E=w=b=!1,O())}function M(t=!0){b||(b=t,O(),D()||(y.pause(),h.disable(!1)))}function P(){b||(w||E||_?M(!1):A())}function z(){const i=u(),r=function(e){const n=L.speed||1;e+=p(n),t.is("slide")&&(e=function(t,e,n){const i=ee(e,n),r=ne(e,n);return ee(ne(i,t),r)}(e,l(!1),l(!0)));return e}(i);i!==r?(a(r),function(i){const{length:r}=t,o=(c(i)+r)%r;o!==f()&&(d(o),e.Slides.update(),e.Pagination.update(),"nearby"===n.lazyLoad&&e.LazyLoad.check())}(S=u())):(M(!1),L.rewind&&t.go(L.speed>0?0:e.Controller.getEnd())),g()}function O(){if(v){const r=b?"startScroll":"pauseScroll";e="is-active",i=!b,(t=v)&&Jt(e,(e=>{e&&t.classList[i?"add":"remove"](e)})),te(v,"aria-label",n.i18n[r]||ae[r])}var t,e,i}function D(){return!y||y.isPaused()}return{setup:function(){const{autoScroll:t}=n;L=Zt({},se,Ut(t)?t:{})},mount:x,destroy:k,play:A,pause:M,isPaused:D}}});new Swiper(".js-testimonials-swiper",{loop:!0,speed:1500,autoplay:{delay:3e3,disableOnInteraction:!1},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:10,stretch:100,depth:300,modifier:1,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".js-testimonials-swiper-pagination",clickable:!0}});new class{constructor(){this.refs={newsLetterForm:document.querySelector(".js-newsletter-form"),newsLetterFormMailInput:document.querySelector('.js-newsletter-form-input[name="email"]')},this.outputNewsLetterFormObject={},this.addListeners()}addListeners(){this.refs.newsLetterForm.addEventListener("submit",this.onSubmit.bind(this))}onSubmit(t){t.preventDefault();const e=new FormData(this.refs.newsLetterForm);for(let[t,n]of e)this.outputNewsLetterFormObject[t]=n;console.log(this.outputNewsLetterFormObject),t.target.reset()}};
//# sourceMappingURL=index.cb0b5714.js.map
