function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},r=t.parcelRequireaf42;null==r&&((r=function(n){if(n in e)return e[n].exports;if(n in i){var t=i[n];delete i[n];var r={id:n,exports:{}};return e[n]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,t){i[n]=t},t.parcelRequireaf42=r),r.register("bINOS",(function(n,t){var e=r("3QJKV"),i=r("8vOOm");const o=window.screen.width;new(0,e.default)(".splide",{pagination:!1,type:"loop",fixedWidth:"285px",gap:""+(o>1320?"30px":"20px"),speed:500,focus:`${o>1320?1:"center"}`,autoScroll:{speed:.3}}).mount({AutoScroll:i.AutoScroll})})),r.register("3QJKV",(function(t,e){function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}n(t.exports,"default",(function(){return $t}));
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var r="(prefers-reduced-motion: reduce)",o={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(n){n.length=0}function a(n,t,e){return Array.prototype.slice.call(n,t,e)}function s(n){return n.bind.apply(n,[null].concat(a(arguments,1)))}var c=setTimeout,l=function(){};function f(n){return requestAnimationFrame(n)}function d(n,t){return typeof t===n}function p(n){return!y(n)&&d("object",n)}var v=Array.isArray,g=s(d,"function"),h=s(d,"string"),m=s(d,"undefined");function y(n){return null===n}function b(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function w(n){return v(n)?n:[n]}function E(n,t){w(n).forEach(t)}function _(n,t){return n.indexOf(t)>-1}function S(n,t){return n.push.apply(n,w(t)),n}function x(n,t,e){n&&E(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function C(n,t){x(n,h(t)?t.split(" "):t,!0)}function P(n,t){E(t,n.appendChild.bind(n))}function k(n,t){E(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function L(n,t){return b(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function A(n,t){var e=n?a(n.children):[];return t?e.filter((function(n){return L(n,t)})):e}function O(n,t){return t?A(n,t)[0]:n.firstElementChild}var D=Object.keys;function M(n,t,e){return n&&(e?D(n).reverse():D(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function z(n){return a(arguments,1).forEach((function(t){M(t,(function(e,i){n[i]=t[i]}))})),n}function N(n){return a(arguments,1).forEach((function(t){M(t,(function(t,e){v(t)?n[e]=t.slice():p(t)?n[e]=N({},p(n[e])?n[e]:{},t):n[e]=t}))})),n}function I(n,t){E(t||D(n),(function(t){delete n[t]}))}function T(n,t){E(n,(function(n){E(t,(function(t){n&&n.removeAttribute(t)}))}))}function j(n,t,e){p(t)?M(t,(function(t,e){j(n,e,t)})):E(n,(function(n){y(e)||""===e?T(n,t):n.setAttribute(t,String(e))}))}function F(n,t,e){var i=document.createElement(n);return t&&(h(t)?C(i,t):j(i,t)),e&&P(e,i),i}function R(n,t,e){if(m(e))return getComputedStyle(n)[t];y(e)||(n.style[t]=""+e)}function W(n,t){R(n,"display",t)}function X(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function G(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function H(n){return n.getBoundingClientRect()}function q(n){E(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function U(n){return O((new DOMParser).parseFromString(n,"text/html").body)}function K(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function V(n,t){return n&&n.querySelector(t)}function Y(n,t){return t?a(n.querySelectorAll(t)):[]}function J(n,t){x(n,t,!1)}function Q(n){return n.timeStamp}function $(n){return h(n)?n:n?n+"px":""}var Z="splide",nn="data-splide";function tn(n,t){if(!n)throw new Error("[splide] "+(t||""))}var en=Math.min,rn=Math.max,on=Math.floor,un=Math.ceil,an=Math.abs;function sn(n,t,e){return an(n-t)<e}function cn(n,t,e,i){var r=en(t,e),o=rn(t,e);return i?r<n&&n<o:r<=n&&n<=o}function ln(n,t,e){var i=en(t,e),r=rn(t,e);return en(rn(i,n),r)}function fn(n){return+(n>0)-+(n<0)}function dn(n,t){return E(t,(function(t){n=n.replace("%s",""+t)})),n}function pn(n){return n<10?"0"+n:""+n}var vn={};function gn(n){return""+n+pn(vn[n]=(vn[n]||0)+1)}function hn(){var n=[];function t(n,t,e){E(n,(function(n){n&&E(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),u(n)}}}var mn="mounted",yn="ready",bn="move",wn="moved",En="click",_n="active",Sn="inactive",xn="visible",Cn="hidden",Pn="refresh",kn="updated",Ln="resize",An="resized",On="scroll",Dn="scrolled",Mn="destroy",zn="arrows:mounted",Nn="navigation:mounted",In="autoplay:play",Tn="autoplay:pause",jn="lazyload:loaded",Fn="sk",Rn="sh",Wn="ei";function Xn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=hn();return n&&n.event.on(Mn,e.destroy),z(e,{bus:t,on:function(n,i){e.bind(t,w(n).join(" "),(function(n){i.apply(i,v(n.detail)?n.detail:[])}))},off:s(e.unbind,t),emit:function(n){e.dispatch(t,n,a(arguments,1))}})}function Gn(n,t,e,i){var r,o,u=Date.now,a=0,s=!0,c=0;function l(){if(!s){if(a=n?en((u()-r)/n,1):1,e&&e(a),a>=1&&(t(),r=u(),i&&++c>=i))return d();o=f(l)}}function d(){s=!0}function p(){o&&cancelAnimationFrame(o),a=0,o=0,s=!0}return{start:function(t){t||p(),r=u()-(t?a*n:0),s=!1,o=f(l)},rewind:function(){r=u(),a=0,e&&e(a)},pause:d,cancel:p,set:function(t){n=t},isPaused:function(){return s}}}var Bn="ArrowLeft",Hn="ArrowRight",qn="ArrowUp",Un="ArrowDown",Kn="ttb",Vn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[qn,Hn],ArrowRight:[Un,Bn]};function Yn(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===Kn?0:-1:1;return Vn[n]&&Vn[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=Vn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}}var Jn="role",Qn="tabindex",$n="aria-controls",Zn="aria-current",nt="aria-selected",tt="aria-label",et="aria-labelledby",it="aria-hidden",rt="aria-orientation",ot="aria-roledescription",ut="aria-live",at="aria-busy",st="aria-atomic",ct=[Jn,Qn,"disabled",$n,Zn,tt,et,it,rt,ot],lt=Z,ft="splide__track",dt="splide__slide",pt="splide__slide--clone",vt="splide__arrows",gt="splide__arrow",ht="splide__arrow--prev",mt="splide__arrow--next",yt="splide__pagination",bt="splide__pagination__page",wt="splide__progress__bar",Et="splide__toggle",_t="is-active",St="is-prev",xt="is-next",Ct="is-visible",Pt="is-loading",kt="is-focus-in",Lt="is-overflow",At=[_t,Ct,St,xt,Pt,kt,Lt],Ot={slide:dt,clone:pt,arrows:vt,arrow:gt,prev:ht,next:mt,pagination:yt,page:bt,spinner:"splide__spinner"};var Dt="touchstart mousedown",Mt="touchmove mousemove",zt="touchend touchcancel mouseup click";var Nt="slide",It="loop",Tt="fade";function jt(n,t,e,i){var r,o=Xn(n),u=o.on,a=o.emit,c=o.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,g=d.i18n,h=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=G(i,"style"),w=G(i,tt),E=e>-1,_=O(i,".splide__slide__container");function S(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");j(i,tt,dn(g.slideX,(E?e:t)+1)),j(i,$n,r),j(i,Jn,m?"button":""),m&&T(i,ot)}function C(){r||P()}function P(){if(!r){var e=n.index;(o=k())!==B(i,_t)&&(x(i,_t,o),j(i,Zn,p&&o||""),a(o?_n:Sn,L)),function(){var t=function(){if(n.is(Tt))return k();var t=H(l.Elements.track),e=H(i),r=y("left",!0),o=y("right",!0);return on(t[r])<=un(e[r])&&on(e[o])<=un(t[o])}(),e=!t&&(!k()||E);n.state.is([4,5])||j(i,it,e||"");j(Y(i,d.focusableNodes||""),Qn,e?-1:""),m&&j(i,Qn,e?-1:0);t!==B(i,Ct)&&(x(i,Ct,t),a(t?xn:Cn,L));if(!t&&document.activeElement===i){var r=l.Slides.getAt(n.index);r&&X(r.slide)}}(),x(i,St,t===e-1),x(i,xt,t===e+1)}var o}function k(){var i=n.index;return i===t||d.cloneStatus&&i===e}var L={index:t,slideIndex:e,slide:i,container:_,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+pn(t+1),j(i,Jn,h?"tabpanel":"group"),j(i,ot,g.slide),j(i,tt,w||dn(g.slideLabel,[t+1,n.length]))),c(i,"click",s(a,En,L)),c(i,"keydown",s(a,Fn,L)),u([wn,Rn,Dn],P),u(Nn,S),v&&u(bn,C)},destroy:function(){r=!0,o.destroy(),J(i,At),T(i,ct),j(i,"style",b),j(i,tt,w||"")},update:P,style:function(n,t,e){R(e&&_||i,n,t)},isWithin:function(e,i){var r=an(e-t);return E||!d.rewind&&!n.is(It)||(r=en(r,n.length-r)),r<=i}};return L}var Ft="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var Rt={passive:!1,capture:!0};var Wt={Spacebar:" ",Right:Hn,Left:Bn,Up:qn,Down:Un};function Xt(n){return n=h(n)?n:n.key,Wt[n]||n}var Gt="keydown";var Bt="data-splide-lazy",Ht="data-splide-lazy-srcset",qt="[data-splide-lazy], [data-splide-lazy-srcset]";var Ut=[" ","Enter"];var Kt=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},u=e.reducedMotion||{},a=hn(),s=[];function c(n){n&&a.destroy()}function l(n,t){var e=matchMedia(t);a.bind(e,"change",f),s.push([n,e])}function f(){var t=i.is(7),r=e.direction,o=s.reduce((function(n,t){return N(n,t[1].matches?t[0]:{})}),{});I(e),d(o),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):r!==e.direction&&n.refresh()}function d(t,r,o){N(e,t),r&&N(Object.getPrototypeOf(e),t),!o&&i.is(1)||n.emit(kn,e)}return{setup:function(){var n="min"===e.mediaQuery;D(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,r),f()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?N(e,u):I(e,D(u)))},set:d}},Direction:Yn,Elements:function(n,t,e){var i,r,o,a=Xn(n),s=a.on,c=a.bind,l=n.root,f=e.i18n,d={},p=[],v=[],h=[];function m(){i=w(".splide__track"),r=O(i,".splide__list"),tn(i&&r,"A track/list element is missing."),S(p,A(r,".splide__slide:not(.splide__slide--clone)")),M({arrows:vt,pagination:yt,prev:ht,next:mt,bar:wt,toggle:Et},(function(n,t){d[t]=w("."+n)})),z(d,{root:l,track:i,list:r,slides:p}),function(){var n=l.id||gn(Z),t=e.role;l.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!G(l,Jn)&&"SECTION"!==l.tagName&&t&&j(l,Jn,t);j(l,ot,f.carousel),j(r,Jn,"presentation")}(),b()}function y(n){var t=ct.concat("style");u(p),J(l,v),J(i,h),T([i,r],t),T(l,n?t:["style",ot])}function b(){J(l,v),J(i,h),v=E(lt),h=E(ft),C(l,v),C(i,h),j(l,tt,e.label),j(l,et,e.labelledby)}function w(n){var t=V(l,n);return t&&function(n,t){if(g(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!L(e,t);)e=e.parentElement;return e}(t,"."+lt)===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===lt&&_t]}return z(d,{setup:m,mount:function(){s(Pn,y),s(Pn,m),s(kn,b),c(document,"touchstart mousedown keydown",(function(n){o="keydown"===n.type}),{capture:!0}),c(l,"focusin",(function(){x(l,kt,!!o)}))},destroy:y})},Slides:function(n,t,e){var i=Xn(n),r=i.on,o=i.emit,a=i.bind,c=t.Elements,l=c.slides,f=c.list,d=[];function p(){l.forEach((function(n,t){m(n,t,-1)}))}function v(){S((function(n){n.destroy()})),u(d)}function m(t,e,i){var r=jt(n,e,i,t);r.mount(),d.push(r),d.sort((function(n,t){return n.index-t.index}))}function y(n){return n?x((function(n){return!n.isClone})):d}function S(n,t){y(t).forEach(n)}function x(n){return d.filter(g(n)?n:function(t){return h(n)?L(t.slide,n):_(w(n),t.index)})}return{mount:function(){p(),r(Pn,v),r(Pn,p)},destroy:v,update:function(){S((function(n){n.update()}))},register:m,get:y,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return x((function(n){return cn(n.index,r,r+o-1)}))},getAt:function(n){return x(n)[0]},add:function(n,t){E(n,(function(n){if(h(n)&&(n=U(n)),b(n)){var i=l[t];i?k(n,i):P(f,n),C(n,e.classes.slide),r=n,u=s(o,Ln),c=Y(r,"img"),(d=c.length)?c.forEach((function(n){a(n,"load error",(function(){--d||u()}))})):u()}var r,u,c,d})),o(Pn)},remove:function(n){q(x(n).map((function(n){return n.slide}))),o(Pn)},forEach:S,filter:x,style:function(n,t,e){S((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,r,o,u=Xn(n),a=u.on,c=u.bind,l=u.emit,f=t.Slides,d=t.Direction.resolve,v=t.Elements,g=v.root,h=v.track,m=v.list,y=f.getAt,b=f.style;function w(){i=e.direction===Kn,R(g,"maxWidth",$(e.width)),R(h,d("paddingLeft"),_(!1)),R(h,d("paddingRight"),_(!0)),E(!0)}function E(n){var t=H(g);(n||r.width!==t.width||r.height!==t.height)&&(R(h,"height",function(){var n="";i&&(tn(n=S(),"height or heightRatio is missing."),n="calc("+n+" - "+_(!1)+" - "+_(!0)+")");return n}()),b(d("marginRight"),$(e.gap)),b("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":C())),b("height",$(e.fixedHeight)||(i?e.autoHeight?null:C():S()),!0),r=t,l(An),o!==(o=D())&&(x(g,Lt,o),l("overflow",o)))}function _(n){var t=e.padding,i=d(n?"right":"left");return t&&$(t[i]||(p(t)?0:t))||"0px"}function S(){return $(e.height||H(m).width*e.heightRatio)}function C(){var n=$(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function P(){return H(m)[d("width")]}function k(n,t){var e=y(n||0);return e?H(e.slide)[d("width")]+(t?0:O()):0}function L(n,t){var e=y(n);if(e){var i=H(e.slide)[d("right")],r=H(m)[d("left")];return an(i-r)+(t?0:O())}return 0}function A(t){return L(n.length-1)-L(0)+k(0,t)}function O(){var n=y(0);return n&&parseFloat(R(n.slide,d("marginRight")))||0}function D(){return n.is(Tt)||A(!0)>P()}return{mount:function(){var n,t,e;w(),c(window,"resize load",(n=s(l,Ln),e=Gn(t||0,n,null,1),function(){e.isPaused()&&e.start()})),a([kn,Pn],w),a(Ln,E)},resize:E,listSize:P,slideSize:k,sliderSize:A,totalSize:L,getPadding:function(n){return parseFloat(R(h,d("padding"+(n?"Right":"Left"))))||0},isOverflow:D}},Clones:function(n,t,e){var i,r=Xn(n),o=r.on,a=t.Elements,s=t.Slides,c=t.Direction.resolve,l=[];function f(){o(Pn,d),o([kn,Ln],v),(i=g())&&(!function(t){var i=s.get().slice(),r=i.length;if(r){for(;i.length<t;)S(i,i);S(i.slice(-t),i.slice(0,t)).forEach((function(o,u){var c=u<t,f=function(t,i){var r=t.cloneNode(!0);return C(r,e.classes.clone),r.id=n.root.id+"-clone"+pn(i+1),r}(o.slide,u);c?k(f,i[0].slide):P(a.list,f),S(l,f),s.register(f,u-t+(c?0:r),o.index)}))}}(i),t.Layout.resize(!0))}function d(){p(),f()}function p(){q(l),u(l),r.destroy()}function v(){var n=g();i!==n&&(i<n||!n)&&r.emit(Pn)}function g(){var i=e.clones;if(n.is(It)){if(m(i)){var r=e[c("fixedWidth")]&&t.Layout.slideSize(0);i=r&&un(H(a.track)[c("width")]/r)||e[c("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(n,t,e){var i,r=Xn(n),o=r.on,u=r.emit,a=n.state.set,s=t.Layout,c=s.slideSize,l=s.getPadding,f=s.totalSize,d=s.listSize,p=s.sliderSize,v=t.Direction,g=v.resolve,h=v.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),_(n.index),t.Slides.update())}function _(n){S(k(n,!0))}function S(e,i){if(!n.is(Tt)){var r=i?e:function(e){if(n.is(It)){var i=P(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=x(e,r))}return e}(e);R(b,"transform","translate"+g("X")+"("+r+"px)"),e!==r&&u(Rn)}}function x(n,t){var e=n-A(t),i=p();return n-=h(i*(un(an(e)/i)||1))*(t?1:-1)}function C(){S(L(),!0),i.cancel()}function P(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=an(k(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function k(t,i){var r=h(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Nt)&&(t=ln(t,0,h(p(!0)-d())));return t}(r):r}function L(){var n=g("left");return H(b)[n]-H(w)[n]+h(l(!1))}function A(n){return k(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,o([mn,An,kn,Pn],E)},move:function(n,t,e,r){var o,s;n!==t&&(o=n>e,s=h(x(L(),o)),o?s>=0:s<=b[g("scrollWidth")]-H(w)[g("width")])&&(C(),S(x(L(),n>e),!0)),a(4),u(bn,t,e,n),i.start(t,(function(){a(3),u(wn,t,e,n),r&&r()}))},jump:_,translate:S,shift:x,cancel:C,toIndex:P,toPosition:k,getPosition:L,getLimit:A,exceededLimit:function(n,t){t=m(t)?L():t;var e=!0!==n&&h(t)<h(A(!1)),i=!1!==n&&h(t)>h(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,r,o,u,a=Xn(n),c=a.on,l=a.emit,f=t.Move,d=f.getPosition,p=f.getLimit,v=f.toPosition,g=t.Slides,y=g.isEnough,b=g.getLength,w=e.omitEnd,E=n.is(It),_=n.is(Nt),S=s(A,!1),x=s(A,!0),C=e.start||0,P=C;function k(){r=b(!0),o=e.perMove,u=e.perPage,i=M();var n=ln(C,0,w?i:r-1);n!==C&&(C=n,f.reposition())}function L(){i!==M()&&l(Wn)}function A(n,t){var e=o||(T()?1:u),r=O(C+e*(n?-1:1),C,!(o||T()));return-1===r&&_&&!sn(d(),p(!n),1)?n?0:i:t?r:D(r)}function O(t,a,s){if(y()||T()){var c=function(t){if(_&&"move"===e.trimSpace&&t!==C)for(var i=d();i===v(t,!0)&&cn(t,0,n.length-1,!e.rewind);)t<C?--t:++t;return t}(t);c!==t&&(a=t,t=c,s=!1),t<0||t>i?t=o||!cn(0,t,a,!0)&&!cn(i,a,t,!0)?E?s?t<0?-(r%u||u):r:t:e.rewind?t<0?i:0:-1:z(N(t)):s&&t!==a&&(t=z(N(a)+(t<a?-1:1)))}else t=-1;return t}function D(n){return E?(n+r)%r||0:n}function M(){for(var n=r-(T()||E&&o?1:u);w&&n-- >0;)if(v(r-1,!0)!==v(n,!0)){n++;break}return ln(n,0,r-1)}function z(n){return ln(T()?n:u*n,0,i)}function N(n){return T()?en(n,i):on((n>=i?r-1:n)/u)}function I(n){n!==C&&(P=C,C=n)}function T(){return!m(e.focus)||e.isNavigation}function j(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){k(),c([kn,Pn,Wn],k),c(An,L)},go:function(n,t,e){if(!j()){var r=function(n){var t=C;if(h(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?t=O(C+ +(""+r+(+o||1)),C):">"===r?t=o?z(+o):S(!0):"<"===r&&(t=x(!0))}else t=E?n:ln(n,0,i);return t}(n),o=D(r);o>-1&&(t||o!==C)&&(I(o),f.move(r,o,P,e))}},scroll:function(n,e,r,o){t.Scroll.scroll(n,e,r,(function(){var n=D(f.toIndex(d()));I(w?en(n,i):n),o&&o()}))},getNext:S,getPrev:x,getAdjacent:A,getEnd:M,setIndex:I,getIndex:function(n){return n?P:C},toIndex:z,toPage:N,toDest:function(n){var t=f.toIndex(n);return _?ln(t,0,i):t},hasFocus:T,isBusy:j}},Arrows:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,c=o.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,g=d.track,h=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(h=v||F("div",l.arrows),m=x(!0),y=x(!1),i=!0,P(h,[m,y]),!v&&k(h,g));m&&y&&(z(b,{prev:m,next:y}),W(h,n?"":"none"),C(h,r="splide__arrows--"+e.direction),n&&(u([mn,wn,Pn,Dn,Wn],L),a(y,"click",s(S,">")),a(m,"click",s(S,"<")),L(),j([m,y],$n,g.id),c(zn,m,y)))}(),u(kn,E)}function E(){_(),w()}function _(){o.destroy(),J(h,r),i?(q(v?[m,y]:h),m=y=null):T([m,y],ct)}function S(n){p.go(n,!0)}function x(n){return U('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="'+'http://www.w3.org/2000/svg" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(e.arrowPath||Ft)+'" />')}function L(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),r=e>-1&&t<e?f.last:f.prev,o=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,j(m,tt,r),j(y,tt,o),c("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:_,update:L}},Autoplay:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,s=o.emit,c=Gn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&R(t,"width",100*n+"%"),s("autoplay:playing",n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,g=e.autoplay,h="pause"===g;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=h=!1,w(),s(In))}function y(n){void 0===n&&(n=!0),h=!!n,w(),l()||(c.pause(),s(Tn))}function b(){h||(i||r?y(!1):m())}function w(){v&&(x(v,_t,!h),j(v,tt,e.i18n[h?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+G(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){g&&(!function(){e.pauseOnHover&&a(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&a(p,"focusin focusout",(function(n){r="focusin"===n.type,b()}));v&&a(v,"click",(function(){h?m():y(!0)}));u([bn,On,Pn],c.rewind),u(bn,E)}(),v&&j(v,$n,f.track.id),h||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=Xn(n).on;function r(n){t.Slides.forEach((function(t){var e=O(t.container||t.slide,"img");e&&e.src&&o(n,e,t)}))}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),W(t,n?"none":"")}return{mount:function(){e.cover&&(i(jn,s(o,!0)),i([mn,kn,Pn],s(r,!0)))},destroy:s(r,!1)}},Scroll:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.emit,c=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,v=l.translate,g=n.is(Nt),h=1;function m(n,e,o,u,d){var v=f();if(w(),o&&(!g||!p())){var m=t.Layout.sliderSize(),E=fn(n)*m*on(an(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}var _=sn(v,n,1);h=1,e=_?0:e||rn(an(n-v)/1.5,800),r=u,i=Gn(e,y,s(b,v,n,d),1),c(5),a(On),i.start()}function y(){c(3),r&&r(),a(Dn)}function b(n,t,i,o){var u,a,s=f(),c=(n+(t-n)*(u=o,(a=e.easingFunc)?a(u):1-Math.pow(1-u,4))-s)*h;v(s+c),g&&!i&&p()&&(h*=.6,an(c)<10&&m(d(p(!0)),600,!1,r,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){u(bn,w),u([kn,Pn],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,r,o,u,a,s,c,f,d=Xn(n),v=d.on,g=d.emit,h=d.bind,m=d.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,_=t.Elements.track,S=t.Media.reduce,x=t.Direction,C=x.resolve,P=x.orient,k=b.getPosition,A=b.exceededLimit,O=!1;function D(){var n=e.drag;G(!n),u="free"===n}function M(n){if(s=!1,!c){var t=X(n);i=n.target,r=e.noDrag,L(i,".splide__pagination__page, .splide__arrow")||r&&L(i,r)||!t&&n.button||(E.isBusy()?K(n,!0):(f=t?_:window,a=y.is([4,5]),o=null,h(f,Mt,z,Rt),h(f,zt,N,Rt),b.cancel(),w.cancel(),T(n)))}var i,r}function z(t){if(y.is(6)||(y.set(6),g("drag")),t.cancelable)if(a){b.translate(i+j(t)/(O&&n.is(Nt)?5:1));var r=F(t)>200,o=O!==(O=A());(r||o)&&T(t),s=!0,g("dragging"),K(t)}else(function(n){return an(j(n))>an(j(n,!0))})(t)&&(a=function(n){var t=e.dragMinThreshold,i=p(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return an(j(n))>(X(n)?o:r)}(t),K(t))}function N(i){y.is(6)&&(y.set(3),g("dragged")),a&&(!function(i){var r=function(t){if(n.is(It)||!O){var e=F(t);if(e&&e<200)return j(t)/e}return 0}(i),o=function(n){return k()+fn(n)*en(an(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),a=e.rewind&&e.rewindByDrag;S(!1),u?E.scroll(o,0,e.snap):n.is(Tt)?E.go(P(fn(r))<0?a?"<":"-":a?">":"+"):n.is(Nt)&&O&&a?E.go(A(!0)?">":"<"):E.go(E.toDest(o),!0);S(!0)}(i),K(i)),m(f,Mt,z),m(f,zt,N),a=!1}function I(n){!c&&s&&K(n,!0)}function T(n){o=r,r=n,i=k()}function j(n,t){return W(n,t)-W(R(n),t)}function F(n){return Q(n)-Q(R(n))}function R(n){return r===n&&o||r}function W(n,t){return(X(n)?n.changedTouches[0]:n)["page"+C(t?"Y":"X")]}function X(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function G(n){c=n}return{mount:function(){h(_,Mt,l,Rt),h(_,zt,l,Rt),h(_,Dt,M,Rt),h(_,"click",I,{capture:!0}),h(_,"dragstart",K),v([mn,kn],D)},disable:G,isDragging:function(){return a}}},Keyboard:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,s=o.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:l,a(i,Gt,g))}function p(){s(i,Gt)}function v(){var n=r;r=!0,c((function(){r=n}))}function g(t){if(!r){var e=Xt(t);e===f(Bn)?n.go("<"):e===f(Hn)&&n.go(">")}}return{mount:function(){d(),u(kn,p),u(kn,d),u(bn,v)},destroy:p,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=Xn(n),r=i.on,o=i.off,a=i.bind,c=i.emit,l="sequential"===e.lazyLoad,f=[wn,Dn],d=[];function p(){u(d),t.Slides.forEach((function(n){Y(n.slide,qt).forEach((function(t){var i=G(t,Bt),r=G(t,Ht);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,a=O(u,"."+o)||F("span",o,u);d.push([t,n,a]),t.src||W(t,"none")}}))})),l?m():(o(f),r(f,v),v())}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||g(t)}))).length||o(f)}function g(n){var t=n[0];C(n[1].slide,Pt),a(t,"load error",s(h,n)),j(t,"src",G(t,Bt)),j(t,"srcset",G(t,Ht)),T(t,Bt),T(t,Ht)}function h(n,t){var e=n[0],i=n[1];J(i.slide,Pt),"error"!==t.type&&(q(n[2]),W(e,""),c(jn,e,i),c(Ln)),l&&m()}function m(){d.length&&g(d.shift())}return{mount:function(){e.lazyLoad&&(p(),r(Pn,p))},destroy:s(u,d),check:v}},Pagination:function(n,t,e){var i,r,o=Xn(n),c=o.on,l=o.emit,f=o.bind,d=t.Slides,p=t.Elements,v=t.Controller,g=v.hasFocus,h=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function E(){i&&(q(b?a(i.children):i),J(i,r),u(w),i=null),o.destroy()}function _(n){m(">"+n,!0)}function S(n,t){var e=w.length,i=Xt(t),r=x(),o=-1;i===y(Hn,!1,r)?o=++n%e:i===y(Bn,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(X(u.button),m(">"+o),K(t,!0))}function x(){return e.paginationDirection||e.direction}function P(n){return w[v.toPage(n)]}function k(){var n=P(h(!0)),t=P(h());if(n){var e=n.button;J(e,_t),T(e,nt),j(e,Qn,-1)}if(t){var r=t.button;C(r,_t),j(r,nt,!0),j(r,Qn,"")}l("pagination:updated",{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),c([kn,Pn,Wn],t);var o=e.pagination;b&&W(b,o?"":"none"),o&&(c([bn,On,Dn],k),function(){var t=n.length,o=e.classes,u=e.i18n,a=e.perPage,c=g()?v.getEnd()+1:un(t/a);C(i=b||F("ul",o.pagination,p.track.parentElement),r="splide__pagination--"+x()),j(i,Jn,"tablist"),j(i,tt,u.select),j(i,rt,x()===Kn?"vertical":"");for(var l=0;l<c;l++){var h=F("li",null,i),m=F("button",{class:o.page,type:"button"},h),y=d.getIn(l).map((function(n){return n.slide.id})),E=!g()&&a>1?u.pageX:u.slideX;f(m,"click",s(_,l)),e.paginationKeyboard&&f(m,"keydown",s(S,l)),j(h,Jn,"presentation"),j(m,Jn,"tab"),j(m,$n,y.join(" ")),j(m,tt,dn(E,l+1)),j(m,Qn,-1),w.push({li:h,button:m,page:l})}}(),k(),l("pagination:mounted",{list:i,items:w},P(n.index)))},destroy:E,getAt:P,update:k}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,o=[];function a(){var t,e;n.splides.forEach((function(t){t.isParent||(l(n,t.splide),l(t.splide,n))})),i&&(t=Xn(n),(e=t.on)(En,d),e(Fn,p),e([mn,kn],f),o.push(t),t.emit(Nn,n.splides))}function c(){o.forEach((function(n){n.destroy()})),u(o)}function l(n,t){var e=Xn(n);e.on(bn,(function(n,e,i){t.go(t.is(It)?i:n)})),o.push(e)}function f(){j(t.Elements.list,rt,e.direction===Kn?"vertical":"")}function d(t){n.go(t.index)}function p(n,t){_(Ut,Xt(t))&&(d(n),K(t))}return{setup:s(t.Media.set,{slideFocus:m(r)?i:r},!0),mount:a,destroy:c,remount:function(){c(),a()}}},Wheel:function(n,t,e){var i=Xn(n).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,u=o<0,a=Q(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;an(o)>s&&a-r>c&&(n.go(u?"<":">"),r=a),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&K(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,Rt)}}},Live:function(n,t,e){var i=Xn(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=F("span","splide__sr"),a=Gn(90,s(c,!1));function c(n){j(r,at,n),n?(P(r,u),a.start()):(q(u),a.cancel())}function l(n){o&&j(r,ut,n?"off":"polite")}return{mount:function(){o&&(l(!t.Autoplay.isPaused()),j(r,st,!0),u.textContent="…",i(In,s(l,!0)),i(Tn,s(l,!1)),i([wn,Dn],s(c,!0)))},disable:l,destroy:function(){T(r,[ut,st,at]),q(u)}}}}),Vt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ot,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Yt(n,t,e){var i=t.Slides;function r(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){Xn(n).on([mn,Pn],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),c(t)},cancel:l}}function Jt(n,t,e){var i,r=t.Move,o=t.Controller,u=t.Scroll,a=t.Elements.list,c=s(R,a,"transition");function l(){c(""),u.cancel()}return{mount:function(){Xn(n).bind(a,"transitionend",(function(n){n.target===a&&i&&(l(),i())}))},start:function(t,a){var s=r.toPosition(t,!0),l=r.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Nt)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&t>=u||r>=u&&0===t)return i}return e.speed}(t);an(s-l)>=1&&f>=1?e.useScroll?u.scroll(s,f,!1,a):(c("transform "+f+"ms "+e.easing),r.translate(s,!0),i=a):(r.jump(t),a())},cancel:l}}var Qt=function(){function n(t,e){var i;this.event=Xn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return _(w(n),i)}}),this.splides=[],this._o={},this._E={};var r=h(t)?V(document,t):t;tn(r,r+" is invalid."),this.root=r,e=N({label:G(r,tt)||"",labelledby:G(r,et)||""},Vt,n.defaults,e||{});try{N(e,JSON.parse(G(r,nn)))}catch(n){tn(!1,"Invalid JSON")}this._o=Object.create(N({},e))}var t,e,r,o=n.prototype;return o.mount=function(n,t){var e=this,i=this.state,r=this.Components;return tn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(Tt)?Yt:Jt),this._E=n||this._E,M(z({},Kt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),M(r,(function(n){n.mount&&n.mount()})),this.emit(mn),C(this.root,"is-initialized"),i.set(3),this.emit(yn),this},o.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},o.go=function(n){return this._C.Controller.go(n),this},o.on=function(n,t){return this.event.on(n,t),this},o.off=function(n){return this.event.off(n),this},o.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(a(arguments,1))),this},o.add=function(n,t){return this._C.Slides.add(n,t),this},o.remove=function(n){return this._C.Slides.remove(n),this},o.is=function(n){return this._o.type===n},o.refresh=function(){return this.emit(Pn),this},o.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Xn(this).on(yn,this.destroy.bind(this,n)):(M(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Mn),t.destroy(),n&&u(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}(),$t=Qt;$t.defaults={},$t.STATES=o})),r.register("8vOOm",(function(t,e){function i(n,t,e){return Array.prototype.slice.call(n,t,e)}function r(n){return n.bind.apply(n,[null].concat(i(arguments,1)))}function o(n){return requestAnimationFrame(n)}function u(n,t){return typeof t===n}n(t.exports,"AutoScroll",(function(){return G}));var a=Array.isArray;function s(n){return a(n)?n:[n]}function c(n,t){s(n).forEach(t)}r(u,"function"),r(u,"string"),r(u,"undefined");var l=Object.keys;function f(n,t,e){if(n){var i=l(n);i=e?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===t(n[o],o))break}}return n}var d=Math.min;var p="move",v="moved",g="updated",h="drag",m="dragged",y="scroll",b="scrolled";function w(n){var t=n?n.event.bus:document.createDocumentFragment(),e=function(){var n=[];function t(n,t,e){c(n,(function(n){n&&c(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),n.length=0}}}();return n&&n.event.on("destroy",e.destroy),function(n){return i(arguments,1).forEach((function(t){f(t,(function(e,i){n[i]=t[i]}))})),n}(e,{bus:t,on:function(n,i){e.bind(t,s(n).join(" "),(function(n){i.apply(i,a(n.detail)?n.detail:[])}))},off:r(e.unbind,t),emit:function(n){e.dispatch(t,n,i(arguments,1))}})}function E(n,t,e,i){var r,u,a=Date.now,s=0,c=!0,l=0;function f(){if(!c){if(s=n?d((a()-r)/n,1):1,e&&e(s),s>=1&&(t(),r=a(),i&&++l>=i))return p();o(f)}}function p(){c=!0}function v(){u&&cancelAnimationFrame(u),s=0,u=0,c=!0}return{start:function(t){!t&&v(),r=a()-(t?s*n:0),c=!1,o(f)},rewind:function(){r=a(),s=0,e&&e(s)},pause:p,cancel:v,set:function(t){n=t},isPaused:function(){return c}}}var _="slide";function S(n,t,e){return Array.prototype.slice.call(n,t,e)}function x(n){return n.bind(null,...S(arguments,1))}function C(n,t){return typeof t===n}function P(n){return!A(n)&&C("object",n)}const k=Array.isArray;x(C,"function"),x(C,"string");const L=x(C,"undefined");function A(n){return null===n}function O(n,t){var e;(e=n,k(e)?e:[e]).forEach(t)}const D=Object.keys;function M(n,t,e){if(n){let i=D(n);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const r=i[e];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}function z(n){return S(arguments,1).forEach((t=>{M(t,((e,i)=>{n[i]=t[i]}))})),n}function N(n,t,e){P(t)?M(t,((t,e)=>{N(n,e,t)})):O(n,(n=>{A(e)||""===e?function(n,t){O(n,(n=>{O(t,(t=>{n&&n.removeAttribute(t)}))}))}(n,t):n.setAttribute(t,String(e))}))}const{min:I,max:T,floor:j,ceil:F,abs:R}=Math;const W={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},X={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function G(n,t,e){const{on:i,off:r,bind:o,unbind:u}=w(n),{translate:a,getPosition:s,toIndex:c,getLimit:l}=t.Move,{setIndex:f,getIndex:d}=t.Controller,{orient:S}=t.Direction,{toggle:x}=t.Elements,{Live:C}=t,{root:k}=n,A=function(n,t){var e;return function(){e||(e=E(t||0,(function(){n(),e=null}),null,1)).start()}}(t.Arrows.update,500);let D,M,j,F,R,G,B={};function H(){n.is("fade")||D||!1===e.autoScroll||(D=E(0,J),function(){B.pauseOnHover&&o(k,"mouseenter mouseleave",(n=>{j="mouseenter"===n.type,Y()}));B.pauseOnFocus&&o(k,"focusin focusout",(n=>{F="focusin"===n.type,Y()}));B.useToggleButton&&o(x,"click",(()=>{M?K():V()}));i(g,U),i([p,h,y],(()=>{R=!0,V(!1)})),i([v,m,b],(()=>{R=!1,Y()}))}(),B.autoStart&&("complete"===document.readyState?K():o(window,"load",K)))}function q(){D&&(D.cancel(),D=null,G=void 0,r([p,h,y,v,b]),u(k,"mouseenter mouseleave focusin focusout"),u(x,"click"))}function U(){const{autoScroll:n}=e;!1!==n?(B=z({},B,P(n)?n:{}),H()):q(),D&&!L(G)&&a(G)}function K(){$()&&(D.start(!0),C.disable(!0),F=j=M=!1,Q())}function V(n=!0){M||(M=n,Q(),$()||(D.pause(),C.disable(!1)))}function Y(){M||(j||F||R?V(!1):K())}function J(){const i=s(),r=function(t){const e=B.speed||1;t+=S(e),n.is(_)&&(t=function(n,t,e){const i=I(t,e),r=T(t,e);return I(T(i,n),r)}(t,l(!1),l(!0)));return t}(i);i!==r?(a(r),function(i){const{length:r}=n,o=(c(i)+r)%r;o!==d()&&(f(o),t.Slides.update(),t.Pagination.update(),"nearby"===e.lazyLoad&&t.LazyLoad.check())}(G=s())):(V(!1),B.rewind&&n.go(B.speed>0?0:t.Controller.getEnd())),A()}function Q(){if(x){const r=M?"startScroll":"pauseScroll";t="is-active",i=!M,(n=x)&&O(t,(t=>{t&&n.classList[i?"add":"remove"](t)})),N(x,"aria-label",e.i18n[r]||X[r])}var n,t,i}function $(){return!D||D.isPaused()}return{setup:function(){const{autoScroll:n}=e;B=z({},W,P(n)?n:{})},mount:H,destroy:q,play:K,pause:V,isPaused:$}}})),r.register("2AEjN",(function(n,t){new Swiper(".js-testimonials-swiper",{loop:!0,speed:1500,autoplay:{delay:3e3,disableOnInteraction:!1},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:10,stretch:100,depth:300,modifier:1,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".js-testimonials-swiper-pagination",clickable:!0}})}));
//# sourceMappingURL=index.02448965.js.map
