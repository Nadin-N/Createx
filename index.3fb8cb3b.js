!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireaf42;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireaf42=i),i("kSDJF");var o=i("8MBJY"),s=i("a2hTj");new(function(){"use strict";function t(){e(o)(this,t),this.refs={benefitGroups:document.querySelectorAll(".js-benefits-item"),tabButtons:document.querySelectorAll(".js-tab-button")},this.addListeners()}return e(s)(t,[{key:"addListeners",value:function(){var e=this;this.refs.tabButtons.forEach((function(t){return t.addEventListener("click",e.selectBenefitGroup.bind(e))}))}},{key:"selectBenefitGroup",value:function(e){var t=e.target.closest(".js-tab-button");this.refs.tabButtons.forEach((function(e){t.name!==e.name?e.classList.remove("clicked"):e.classList.add("clicked")})),this.refs.benefitGroups.forEach((function(e){t.name===e.dataset.name?e.classList.remove("is-hidden"):e.classList.add("is-hidden")}))}}]),t}());o=i("8MBJY"),s=i("a2hTj");function a(e,t,n){var r,i=n||{},o=i.noTrailing,s=void 0!==o&&o,a=i.noLeading,u=void 0!==a&&a,c=i.debounceMode,d=void 0===c?void 0:c,l=!1,f=0;function v(){r&&clearTimeout(r)}function h(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var a=this,c=Date.now()-f;function h(){f=Date.now(),t.apply(a,i)}function m(){r=void 0}l||(u||!d||r||h(),v(),void 0===d&&c>e?u?(f=Date.now(),s||(r=setTimeout(d?m:h,e))):h():!0!==s&&(r=setTimeout(d?m:h,void 0===d?e-c:e)))}return h.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;v(),l=!n},h}new(function(){"use strict";function t(){e(o)(this,t),this.refs={coursesList:document.querySelector(".courses-preview__box"),coursesCards:document.querySelectorAll(".card-courses__img img")},this.addListener()}return e(s)(t,[{key:"addListener",value:function(){a(1e3,this.isInViewport.bind(this))}},{key:"isInViewport",value:function(){var e=this,t=this.refs.coursesList.getBoundingClientRect(),n=t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth);console.log(n);var r=null;n?r=setInterval((function(){return e.animate()}),1e3):clearInterval(r)}},{key:"getRect",value:function(){var e=this.refs.coursesList.getBoundingClientRect();console.log(e.top)}},{key:"animate",value:function(){var e=this;console.log(Math.floor(Math.random()*this.refs.coursesCards.length));var t=Math.floor(Math.random()*this.refs.coursesCards.length);this.refs.coursesCards[t].classList.add("scale-animated"),setTimeout((function(){e.refs.coursesCards[t].classList.remove("scale-animated")}),1e3)}}]),t}()),i("6gSXd"),i("8rvrQ");o=i("8MBJY"),s=i("a2hTj");var u=i("1t1Wn");new(function(){"use strict";function t(){e(o)(this,t),this.refs={advertForm:document.querySelector(".js-advert-form"),advertFormMailInput:document.querySelector('.js-advert-form-input[name="advertEmail"]')},this.outputAdvertFormObject={},this.addListeners()}return e(s)(t,[{key:"addListeners",value:function(){this.refs.advertForm.addEventListener("submit",this.onSubmit.bind(this))}},{key:"onSubmit",value:function(t){t.preventDefault();var n=new FormData(this.refs.advertForm),r=!0,i=!1,o=void 0;try{for(var s,a=n[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var c=e(u)(s.value,2),d=c[0],l=c[1];this.outputAdvertFormObject[d]=l}}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}console.log(this.outputAdvertFormObject),t.target.reset()}}]),t}()),i("8qG40")}();
//# sourceMappingURL=index.3fb8cb3b.js.map
