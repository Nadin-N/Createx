!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequireaf42;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequireaf42=s),s("kSDJF");var r=s("8MBJY"),o=s("a2hTj");new(function(){"use strict";function t(){e(r)(this,t),this.refs={benefitGroups:document.querySelectorAll(".js-benefits-item"),tabButtons:document.querySelectorAll(".js-tab-button")},this.addListeners()}return e(o)(t,[{key:"addListeners",value:function(){var e=this;this.refs.tabButtons.forEach((function(t){return t.addEventListener("click",e.selectBenefitGroup.bind(e))}))}},{key:"selectBenefitGroup",value:function(e){var t=e.target.closest(".js-tab-button");this.refs.tabButtons.forEach((function(e){t.name!==e.name?e.classList.remove("clicked"):e.classList.add("clicked")})),this.refs.benefitGroups.forEach((function(e){t.name===e.dataset.name?e.classList.remove("is-hidden"):e.classList.add("is-hidden")}))}}]),t}()),s("8qG40")}();
//# sourceMappingURL=index.48aef8b6.js.map
