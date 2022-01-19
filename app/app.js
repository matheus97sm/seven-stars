/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_animacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/animacoes */ \"./app/js/animacoes.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./app/js/menu.js\");\n/* harmony import */ var _js_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/reviews */ \"./app/js/reviews.js\");\n/* harmony import */ var _js_faq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/faq */ \"./app/js/faq.js\");\n/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modal */ \"./app/js/modal.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modernizr */ \"./app/js/modernizr.js\");\n/* harmony import */ var _js_modernizr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_js_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nObject(_js_animacoes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_js_reviews__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nObject(_js_faq__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/js/animacoes.js":
/*!*****************************!*\
  !*** ./app/js/animacoes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return animacoes; });\nfunction animacoes() {\r\n  const animaItem = document.querySelectorAll(\"[data-animar]\");\r\n\r\n  animaItem.forEach(item => {\r\n    if (item.getBoundingClientRect().top < window.innerHeight)\r\n      return item.classList.add(\"anime\");\r\n\r\n    window.addEventListener(\"scroll\", e => {\r\n      const distTop = window.innerHeight * 0.85;\r\n\r\n      if (item.getBoundingClientRect().top < distTop)\r\n        item.classList.add(\"anime\");\r\n    });\r\n  });\r\n\r\n  const animarComTempo = document.querySelectorAll(\"[data-anima-tempo]\");\r\n\r\n  window.setTimeout(() => {\r\n    animarComTempo.forEach(item => {\r\n      item.classList.add(\"anime\");\r\n    });\r\n  }, 500);\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/animacoes.js?");

/***/ }),

/***/ "./app/js/faq.js":
/*!***********************!*\
  !*** ./app/js/faq.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return faq; });\nfunction faq() {\r\n  const questions = document.querySelectorAll('.faq-question');\r\n\r\n  if (questions.length === 0) return null;\r\n\r\n  questions.forEach(question => {\r\n    question.addEventListener('click', e => {\r\n      e.preventDefault();\r\n\r\n      question.classList.toggle('active');\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/faq.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return openMenu; });\nfunction openMenu() {\r\n  const header = document.querySelector('.header');\r\n  const menuHamb = document.querySelector('[data-menu=\"button\"]');\r\n  const closeButton = document.querySelector('[data-menu=\"close\"]');\r\n  const menu = document.querySelector('[data-menu=\"menu\"]');\r\n\r\n  if (!menuHamb || !menu) return null;\r\n\r\n  menuHamb.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.add('active');\r\n    window.document.body.style.setProperty('overflow-y', 'hidden');\r\n  });\r\n\r\n  closeButton.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    menu.classList.remove('active');\r\n    window.document.body.style.setProperty('overflow-y', 'scroll');\r\n  });\r\n\r\n  window.addEventListener('scroll', e => {\r\n    if (window.pageYOffset > 300)\r\n      header.classList.add('active');\r\n    else\r\n      header.classList.remove('active');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/menu.js?");

/***/ }),

/***/ "./app/js/modal.js":
/*!*************************!*\
  !*** ./app/js/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return modal; });\nfunction modal() {\r\n  const imgArray = document.querySelectorAll(\"[data-modal]\");\r\n  const modal = document.querySelector(\"#modal\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  if (!imgArray) return null;\r\n\r\n  imgArray.forEach(img => {\r\n    img.addEventListener(\"click\", e => {\r\n      e.preventDefault();\r\n\r\n      body.style.setProperty(\"overflow-y\", \"hidden\");\r\n\r\n      modal.classList.add(\"ativo\");\r\n\r\n      const modalWrapper = document.createElement(\"div\");\r\n      s;\r\n      modalWrapper.innerHTML = `\r\n        <img src=\"${img.getAttribute(\"src\")}\" alt=\"${img.getAttribute(\r\n        \"alt\"\r\n      )}\" />\r\n      `;\r\n\r\n      const closeModal = document.createElement(\"button\");\r\n      closeModal.innerText = \"x\";\r\n      closeModal.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n\r\n        body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n        modal.classList.remove(\"ativo\");\r\n        modal.innerHTML = \"\";\r\n      });\r\n\r\n      modalWrapper.appendChild(closeModal);\r\n      modal.appendChild(modalWrapper);\r\n\r\n      modal.addEventListener(\"click\", e => {\r\n        if (e.target === e.currentTarget) {\r\n          body.style.setProperty(\"overflow-y\", \"scroll\");\r\n\r\n          modal.classList.remove(\"ativo\");\r\n          modal.innerHTML = \"\";\r\n        }\r\n      });\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./app/js/modal.js?");

/***/ }),

/***/ "./app/js/modernizr.js":
/*!*****************************!*\
  !*** ./app/js/modernizr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,\"function\")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split(\".\"),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?\"\":\"no-\")+l.join(\"-\"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||\"\";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp(\"(^|\\\\s)\"+A+\"no-js(\\\\s|$)\");n=n.replace(o,\"$1\"+A+\"js$2\")}Modernizr._config.enableClasses&&(n+=\" \"+A+e.join(\" \"+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if(\"object\"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split(\".\"),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),\"undefined\"!=typeof t)return Modernizr;n=\"function\"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?\"\":\"no-\")+o.join(\"-\")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:\"3.6.0\",_config:{classPrefix:\"\",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c=\"svg\"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,\"undefined\")||o(e.call,\"undefined\")?function(e,n){return n in e&&o(e.constructor.prototype[n],\"undefined\")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&\"load\"===n.type?1==t.width:!1,a=\"webp\"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:\"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=\",name:\"webp\"},{uri:\"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\",name:\"webp.alpha\"},{uri:\"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA\",name:\"webp.animation\"},{uri:\"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=\",name:\"webp.lossless\"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&\"load\"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);\n\n//# sourceURL=webpack:///./app/js/modernizr.js?");

/***/ }),

/***/ "./app/js/reviews.js":
/*!***************************!*\
  !*** ./app/js/reviews.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reviews; });\nfunction reviews() {\r\n  const reviewWrapper = document.querySelector('.reviews-wrapper');\r\n  const reviewCarousel = document.querySelector('.reviews-carousel');\r\n  const reviewsArray = document.querySelectorAll('.review');\r\n  const starsWrapper = document.querySelectorAll('.review-stars');\r\n  const buttonLeft = document.querySelector('.reviews-left');\r\n  const buttonRight = document.querySelector('.reviews-right');\r\n  const carouselInfo = {\r\n    reviewWrapperWidthSize: !!reviewWrapper && reviewWrapper.getBoundingClientRect().width,\r\n    actualReview: 0,\r\n    mouseHover: false\r\n  };\r\n\r\n  if (reviewsArray.length === 0 || !buttonLeft || !buttonRight) return null;\r\n\r\n  reviewsArray[0].classList.add('active');\r\n\r\n  reviewsArray.forEach((review, index) => {\r\n    const stars = review.getAttribute('data-stars');\r\n    const negativeStars = 5 - stars;\r\n\r\n    for (let i = 0; i < stars; i++) {\r\n      const filledStar = document.createElement('img');\r\n      filledStar.setAttribute('src', `${template_URL}/img/src/star.svg`);\r\n\r\n      starsWrapper[index].appendChild(filledStar);\r\n    }\r\n\r\n    for (let i = 0; i < negativeStars; i++) {\r\n      const outlineStar = document.createElement('img');\r\n      outlineStar.setAttribute('src', `${template_URL}/img/src/star_outline.svg`);\r\n\r\n      starsWrapper[index].appendChild(outlineStar);\r\n    }\r\n    \r\n    review.style.setProperty('width', `${carouselInfo.reviewWrapperWidthSize}px`);\r\n  });\r\n\r\n  reviewCarousel.style.setProperty(\r\n    'width', \r\n    `${(carouselInfo.reviewWrapperWidthSize * reviewsArray.length) + (32 * (reviewsArray.length - 1))}px`\r\n  );\r\n  reviewWrapper.style.setProperty('height', `${reviewsArray[0].getBoundingClientRect().height}px`);\r\n\r\n  buttonLeft.addEventListener('click', e => {\r\n    const { actualReview, reviewWrapperWidthSize } = carouselInfo;\r\n\r\n    carouselInfo.actualReview = actualReview === 0 ? reviewsArray.length - 1 : actualReview - 1;\r\n\r\n    reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);\r\n    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);\r\n  });\r\n\r\n  buttonRight.addEventListener('click', e => {\r\n    const { actualReview, reviewWrapperWidthSize } = carouselInfo;\r\n\r\n    carouselInfo.actualReview = actualReview === reviewsArray.length - 1 ? 0 : actualReview + 1;\r\n\r\n    reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);\r\n    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);\r\n  });\r\n\r\n  reviewWrapper.addEventListener('mouseenter', () => {\r\n    carouselInfo.mouseHover = true;\r\n  });\r\n\r\n  reviewWrapper.addEventListener('mouseleave', () => {\r\n    carouselInfo.mouseHover = false;\r\n  });\r\n\r\n  const carouselAutomatic = window.setInterval(() => {\r\n    const { actualReview, reviewWrapperWidthSize, mouseHover } = carouselInfo;\r\n\r\n    if (!mouseHover) {\r\n      carouselInfo.actualReview = actualReview === reviewsArray.length - 1 ? 0 : actualReview + 1;\r\n\r\n      reviewCarousel.style.setProperty('transform', `translate3d(-${(reviewWrapperWidthSize + 32) * carouselInfo.actualReview}px, 0, 0)`);\r\n      reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);\r\n    }\r\n  }, 5000);\r\n\r\n  window.addEventListener('resize', () => {\r\n    carouselInfo.reviewWrapperWidthSize = reviewWrapper.getBoundingClientRect().width;\r\n\r\n    reviewsArray.forEach(review => {\r\n      review.style.setProperty('width', `${carouselInfo.reviewWrapperWidthSize}px`);\r\n    });\r\n\r\n    reviewCarousel.style.setProperty(\r\n      'width', \r\n      `${(carouselInfo.reviewWrapperWidthSize * reviewsArray.length) + (32 * (reviewsArray.length - 1))}px`\r\n    );\r\n    reviewWrapper.style.setProperty('height', `${reviewsArray[carouselInfo.actualReview].getBoundingClientRect().height}px`);\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/reviews.js?");

/***/ }),

/***/ "./app/style.scss":
/*!************************!*\
  !*** ./app/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/style.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_./app/index.js?");

/***/ })

/******/ });