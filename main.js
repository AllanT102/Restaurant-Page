/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles/body.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,kBAAA;AACJ","sourcesContent":["*, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  display: flex;\n  flex-direction: column;\n  gap: 10%;\n  user-select: none;\n  width: 100vw;\n}\n\n.about-section {\n  overflow: hidden;\n  display: flex;\n  height: 25em;\n  width: 75%;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n  margin-top: 2%;\n  transition: transform 0.5s ease-in-out;\n  background: rgba(238, 201, 55, 0.2);\n  box-shadow: rgba(255, 200, 60, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  height: 40em;\n  padding-left: 2%;\n}\n\n.section-icon {\n  height: auto;\n  width: 100%;\n  max-width: 300px;\n  max-height: 300px;\n  flex: 1 1 300px;\n}\n\n.section-text {\n  height: auto;\n}\n\n.left {\n  transform: translateX(-150%);\n}\n\n.right {\n  transform: translateX(150%);\n}\n\n.active-right {\n  transform: translateX(10vw);\n}\n\n.active-left {\n  transform: translateX(15vw);\n}\n\n.about-section-left {\n  display: flex;\n  flex-flow: column;\n  flex: 2 2 auto;\n  overflow: hidden;\n}\n.about-section-left h1 {\n  margin-bottom: 3%;\n}\n\n.arrow {\n  position: absolute;\n  border: solid black;\n  border-width: 0 10px 10px 0;\n  padding: 6px;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.left-arrow {\n  left: 5%;\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n.right-arrow {\n  right: 5%;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.review-section {\n  overflow: hidden;\n  display: flex;\n  height: 25em;\n  width: 75%;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n  margin-top: 2%;\n  transition: transform 0.5s ease-in-out;\n  background: rgba(238, 201, 55, 0.2);\n  box-shadow: rgba(255, 200, 60, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.card-div {\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 5%;\n  overflow: auto;\n  width: 175%;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n.card-div::-webkit-scrollbar {\n  display: none;\n}\n\n.review-card {\n  min-width: 25em;\n  min-height: 20em;\n  margin: 1px 10px;\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 5px;\n  background-color: rgba(232, 189, 13, 0.5);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 0 0, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-text {\n  text-align: center;\n  font-style: italic;\n}\n\n.blank-card {\n  min-width: 25em;\n  min-height: 20em;\n  margin: 1px 10px;\n}\n\n.profile-img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: solid black 2px;\n  background-color: white;\n  margin-top: 15%;\n}\n\n.menu-section {\n  overflow: hidden;\n  display: flex;\n  height: 25em;\n  width: 75%;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n  margin-top: 2%;\n  transition: transform 0.5s ease-in-out;\n  background: rgba(238, 201, 55, 0.2);\n  box-shadow: rgba(255, 200, 60, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  padding-left: 2%;\n  margin-bottom: 5%;\n}\n\n@media screen and (max-width: 900px) {\n  .about-section, .menu-section, .review-section {\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .about-section {\n    flex-direction: column;\n    padding-right: 2%;\n  }\n  .about-section h1 {\n    text-align: center;\n  }\n  .section-icon {\n    min-width: 100px;\n    max-width: 100px;\n    min-height: 100px;\n    max-height: 100px;\n    flex: 2 1 200px;\n  }\n  .menu-section {\n    padding-right: 2%;\n    height: 45em;\n  }\n  .menu-section h1 {\n    text-align: center;\n  }\n  .menu-section img {\n    min-width: 150px;\n    max-width: 150px;\n    min-height: 150px;\n    max-height: 150px;\n    flex: 1 1 150px;\n  }\n  .about-section-left {\n    flex: 0 1 auto;\n  }\n  .menu-section {\n    flex-direction: column;\n    height: 45em;\n  }\n  .active-right, .active-left {\n    margin-left: auto;\n    margin-right: auto;\n    transform: translateX(0);\n  }\n  .review-card {\n    min-width: 10em;\n    min-height: 15em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/homepage.scss"],"names":[],"mappings":"AACA;EAEI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,iBAAA;EACA,YAAA;AADJ;;AAkBA;EAbI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;EACA,cAAA;EACA,sCAAA;EACA,mCAAA;EACA,0FAAA;EAKA,YAAA;EACA,gBAAA;AALJ;;AAQA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;AALJ;;AAQA;EACI,YAAA;AALJ;;AASA;EACI,4BAAA;AANJ;;AASA;EACI,2BAAA;AANJ;;AASA;EACI,2BAAA;AANJ;;AASA;EACI,2BAAA;AANJ;;AASA;EACI,aAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;AANJ;AAOI;EACI,iBAAA;AALR;;AASA;EACI,kBAAA;EACA,mBAAA;EACA,2BAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AANJ;;AASA;EACI,QAAA;EACA,yBAAA;EACA,iCAAA;AANJ;;AASA;EACI,SAAA;EACA,yBAAA;EACA,iCAAA;AANJ;;AASA;EA/EI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;EACA,cAAA;EACA,sCAAA;EACA,mCAAA;EACA,0FAAA;AA0EJ;;AAoBA;EACI,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,OAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;AAjBJ;AAmBI;EACI,aAAA;AAjBR;;AAsBA;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4GAAA;EAEA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AApBJ;;AAuBA;EACI,kBAAA;EACA,kBAAA;AApBJ;;AAuBA;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;AApBJ;;AAuBA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;AApBJ;;AAuBA;EA5JI,gBAAA;EACA,aAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,OAAA;EACA,cAAA;EACA,sCAAA;EACA,mCAAA;EACA,0FAAA;EAoJA,gBAAA;EACA,iBAAA;AAVJ;;AAaA;EACI;IACI,mBAAA;IACA,gBAAA;EAVN;EAaE;IACI,sBAAA;IACA,iBAAA;EAXN;EAYM;IACI,kBAAA;EAVV;EAcE;IACI,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,iBAAA;IACA,eAAA;EAZN;EAeE;IACI,iBAAA;IACA,YAAA;EAbN;EAcM;IACI,kBAAA;EAZV;EAcM;IACI,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,iBAAA;IACA,eAAA;EAZV;EAgBE;IACI,cAAA;EAdN;EAiBE;IACI,sBAAA;IACA,YAAA;EAfN;EAkBE;IACI,iBAAA;IACA,kBAAA;IACA,wBAAA;EAhBN;EAmBE;IACI,eAAA;IACA,gBAAA;EAjBN;AACF","sourcesContent":["\r\n.content {\r\n    // overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10%;\r\n    user-select: none;\r\n    width: 100vw;\r\n}\r\n\r\n@mixin section {\r\n    overflow: hidden;\r\n    display: flex;\r\n    height: 25em;\r\n    width: 75%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5%;\r\n    margin-top: 2%;\r\n    transition: transform 0.5s ease-in-out;\r\n    background: rgba(238, 201, 55, 0.2);\r\n    box-shadow: rgba(255, 200, 60, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\r\n}\r\n\r\n.about-section {\r\n    @include section;\r\n    height: 40em;\r\n    padding-left: 2%;\r\n}\r\n\r\n.section-icon {\r\n    height: auto;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    max-height: 300px;\r\n    flex: 1 1 300px;\r\n}\r\n\r\n.section-text {\r\n    height: auto;\r\n}\r\n\r\n\r\n.left {\r\n    transform: translateX(-150%);\r\n}\r\n\r\n.right {\r\n    transform: translateX(150%);\r\n}\r\n\r\n.active-right {\r\n    transform: translateX(10vw);\r\n}\r\n\r\n.active-left {\r\n    transform: translateX(15vw);\r\n}\r\n\r\n.about-section-left {\r\n    display: flex;\r\n    flex-flow: column;\r\n    flex: 2 2 auto;\r\n    overflow: hidden;\r\n    h1 {\r\n        margin-bottom: 3%;\r\n    }\r\n}\r\n\r\n.arrow {\r\n    position: absolute;\r\n    border: solid black;\r\n    border-width: 0 10px 10px 0;\r\n    padding: 6px;\r\n    cursor: pointer;\r\n    z-index: 100;\r\n}\r\n\r\n.left-arrow {\r\n    left: 5%;\r\n    transform: rotate(135deg);\r\n    -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.right-arrow {\r\n    right: 5%;\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.review-section {\r\n    @include section;\r\n    // &::before {\r\n    //     position: absolute;\r\n    //     content: \"\";\r\n    //     left: 0;\r\n    //     top: 0;\r\n    //     z-index: 99;\r\n    //     height: 100%;\r\n    //     width: 35%;\r\n    //     background-image: linear-gradient(90deg, rgb(233, 209, 113), transparent);\r\n    // }\r\n\r\n    // &::after {\r\n    //     position: absolute;\r\n    //     content: \"\";\r\n    //     right: 0;\r\n    //     bottom: 0;\r\n    //     z-index: 99;\r\n    //     height: 100%;\r\n    //     width: 35%;\r\n    //     // background-image: linear-gradient(-90deg, rgb(233, 209, 113), transparent);\r\n    // }\r\n}\r\n\r\n.card-div {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    gap: 5%;\r\n    overflow: auto;\r\n    width: 175%;\r\n    height: 100%;\r\n    scroll-behavior: smooth;\r\n\r\n    &::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n.review-card {\r\n    min-width: 25em;\r\n    min-height: 20em;\r\n    margin: 1px 10px;\r\n    cursor: pointer;\r\n    overflow:hidden;\r\n    border-radius: 5px;\r\n    background-color:rgba(232, 189, 13, 0.5);\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0 0, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\r\n\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center; \r\n}\r\n\r\n.card-text {\r\n    text-align: center;\r\n    font-style: italic;\r\n}\r\n\r\n.blank-card {\r\n    min-width: 25em;\r\n    min-height: 20em;\r\n    margin: 1px 10px;\r\n}\r\n\r\n.profile-img {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;;\r\n    border: solid black 2px;\r\n    background-color: white;\r\n    margin-top: 15%;\r\n}\r\n\r\n.menu-section {\r\n    @include section;\r\n    padding-left: 2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .about-section, .menu-section, .review-section {\r\n        margin-bottom: 20px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .about-section {\r\n        flex-direction: column;\r\n        padding-right: 2%;\r\n        h1 {\r\n            text-align: center;\r\n        }\r\n    }\r\n    \r\n    .section-icon {\r\n        min-width: 100px;\r\n        max-width: 100px;\r\n        min-height: 100px;\r\n        max-height: 100px;\r\n        flex: 2 1 200px;\r\n    }\r\n\r\n    .menu-section {\r\n        padding-right: 2%;\r\n        height: 45em;\r\n        h1 {\r\n            text-align: center;\r\n        }\r\n        img {\r\n            min-width: 150px;\r\n            max-width: 150px;\r\n            min-height: 150px;\r\n            max-height: 150px;\r\n            flex: 1 1 150px;;\r\n        }\r\n    }\r\n\r\n    .about-section-left {\r\n        flex: 0 1 auto;\r\n    }\r\n\r\n    .menu-section {\r\n        flex-direction: column;\r\n        height: 45em;\r\n    }\r\n\r\n    .active-right, .active-left {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        transform: translateX(0);\r\n    }\r\n    \r\n    .review-card {\r\n        min-width: 10em;\r\n        min-height: 15em;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-content {\n  display: grid;\n  grid-template: repeat(auto-fill, 300px)/repeat(2, 1fr);\n  height: 1400px;\n  width: 80vw;\n  margin: 5% auto;\n  column-gap: 20%;\n  row-gap: 10%;\n  padding: 5%;\n  border-radius: 10%;\n  justify-content: center;\n  background: rgba(238, 201, 55, 0.2);\n}\n\n.item-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10%;\n  background: rgba(180, 150, 31, 0.2);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n}\n.item-div img {\n  width: 60%;\n  height: auto;\n  transform: scale(0.7);\n}\n.item-div p {\n  font-size: 1.8em;\n  margin-bottom: 2%;\n  width: 100%;\n  height: 2em;\n  text-align: center;\n}\n\n@media screen and (max-width: 900px) {\n  .menu-content {\n    grid-template: auto/300px;\n    column-gap: none;\n    row-gap: 2%;\n    padding: 2%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/menu.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sDAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,uBAAA;EACA,mCAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mCAAA;EACA,mDAAA;AACJ;AACI;EACI,UAAA;EACA,YAAA;EACA,qBAAA;AACR;AAEI;EACI,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;AAAR;;AAIA;EACI;IACI,yBAAA;IACA,gBAAA;IACA,WAAA;IACA,WAAA;EADN;AACF","sourcesContent":[".menu-content {\r\n    display: grid;\r\n    grid-template: repeat(auto-fill, 300px) / repeat(2, 1fr);\r\n    height: 1400px;\r\n    width: 80vw;\r\n    margin: 5% auto;\r\n    column-gap: 20%;\r\n    row-gap: 10%;\r\n    padding: 5%;\r\n    border-radius: 10%;\r\n    justify-content: center;\r\n    background: rgba(238, 201, 55, 0.2);\r\n}\r\n\r\n.item-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10%;\r\n    background: rgba(180, 150, 31, 0.2);\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\r\n\r\n    img {\r\n        width: 60%;\r\n        height: auto;\r\n        transform: scale(0.7);\r\n    }\r\n\r\n    p {\r\n        font-size: 1.8em;\r\n        margin-bottom: 2%;\r\n        width: 100%;\r\n        height: 2.0em;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .menu-content {\r\n        grid-template: auto / 300px;\r\n        column-gap: none;\r\n        row-gap: 2%;\r\n        padding: 2%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/navbar.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/navbar.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/styles/fonts/Anton-Regular.ttf */ "./src/styles/fonts/Anton-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: main-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n* {\n  font-family: main-font;\n}\n\n.navbar {\n  position: sticky;\n  min-width: 100vw;\n  min-height: 60px;\n  height: 100px;\n  background-color: #E8BD0D;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background: rgba(232, 189, 13, 0.5);\n}\n\n.tab {\n  position: relative;\n  opacity: 1;\n  min-width: 5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6em;\n  padding: 2px;\n}\n.tab::after, .tab::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 20%;\n  height: 20%;\n  border: 2px solid;\n  transition: all 0.6s ease;\n  border-radius: 2px;\n}\n.tab::after {\n  bottom: 0;\n  right: 0;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-color: #120E43;\n  border-right-color: #120E43;\n}\n.tab::before {\n  top: 0;\n  left: 0;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  border-top-color: #120E43;\n  border-left-color: #120E43;\n}\n.tab:hover:after, .tab:hover:before {\n  width: 100%;\n  height: 100%;\n}\n.tab:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/mainfont.scss","webpack://./src/styles/navbar.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,4CAAA;ACCJ;AAKA;EACI,sBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,yBAdS;EAeT,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,mCAAA;AAHJ;;AAMA;EACI,kBAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;AAHJ;AAKI;EAEI,WAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;AAJR;AAOI;EACI,SAAA;EACA,QAAA;EACA,6BAAA;EACA,8BAAA;EACA,4BA7CC;EA8CD,2BA9CC;AAyCT;AAQI;EACI,MAAA;EACA,OAAA;EACA,gCAAA;EACA,+BAAA;EACA,yBAtDC;EAuDD,0BAvDC;AAiDT;AASI;EAEI,WAAA;EACA,YAAA;AARR;AAWI;EACI,eAAA;AATR","sourcesContent":["@font-face {\r\n    font-family: main-font;\r\n    src: url('/src/styles/fonts/Anton-Regular.ttf');\r\n}","@use 'src/styles/mainfont.scss';\r\n\r\n\r\n$darkyellow: #E8BD0D;\r\n$lightyellow: #EDC126;\r\n$textcolor: black;\r\n$color1: #120E43;\r\n\r\n* {\r\n    font-family: main-font;\r\n}\r\n\r\n.navbar {\r\n    position: sticky;\r\n    min-width: 100vw;\r\n    min-height: 60px;\r\n    height: 100px;\r\n    background-color: $darkyellow;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    background: rgba(232, 189, 13, 0.5);\r\n}\r\n\r\n.tab {\r\n    position: relative;\r\n    opacity: 1;\r\n    min-width: 5vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.6em;\r\n    padding: 2px;\r\n\r\n    &::after,\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        width: 20%;\r\n        height: 20%;\r\n        border: 2px solid;\r\n        transition: all 0.6s ease;\r\n        border-radius: 2px;\r\n    }\r\n\r\n    &::after {\r\n        bottom: 0;\r\n        right: 0;\r\n        border-top-color: transparent;\r\n        border-left-color: transparent;\r\n        border-bottom-color: $color1;\r\n        border-right-color: $color1;\r\n    }\r\n\r\n    &::before {\r\n        top: 0;\r\n        left: 0;\r\n        border-bottom-color: transparent;\r\n        border-right-color: transparent;\r\n        border-top-color: $color1;;\r\n        border-left-color: $color1;\r\n    }\r\n\r\n    &:hover:after,\r\n    &:hover:before {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/body.scss":
/*!******************************!*\
  !*** ./src/styles/body.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./body.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/body.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_body_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/homepage.scss":
/*!**********************************!*\
  !*** ./src/styles/homepage.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./homepage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_images_about_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/about.png */ "./src/images/about.png");
/* harmony import */ var _src_images_profile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/images/profile.png */ "./src/images/profile.png");
/* harmony import */ var _src_images_ramen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/images/ramen.png */ "./src/images/ramen.png");
/* harmony import */ var _src_styles_homepage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/styles/homepage.scss */ "./src/styles/homepage.scss");






let content;

function homepage() {
    content = document.createElement('div');
    content.append(aboutSection(), reviewsSection(), bestMenuSection());
    content.classList.add('content')

    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        i % 2 === 0 ? children[i].classList.add('right') : children[i].classList.add('left');
    }
    return content;
};

function aboutSection() {
    const section = document.createElement('div');
    const left = document.createElement('div');

    const icon = new Image();
    icon.src = _src_images_about_png__WEBPACK_IMPORTED_MODULE_0__;

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const title = document.createElement('h1');
    title.textContent = "FUMETSU RAMEN"

    section.classList.add('about-section')
    icon.classList.add('section-icon')
    text.classList.add('section-text')
    left.classList.add('about-section-left')
    setTimeout(() => {
        section.classList.add('active-right')
    }, 200)

    left.append(title, text);
    section.append(left, icon);
    return section;
}

function reviewsSection() {
    const section = document.createElement('div');
    section.classList.add('review-section');

    const leftArrow = document.createElement('i');
    const rightArrow = document.createElement('i');
    leftArrow.classList.add('left-arrow', 'arrow');
    rightArrow.classList.add('right-arrow', 'arrow');
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div')
    const r1 = '"Great service, food, atmosphere and prices make this a special place."';
    const r2 = '"I love brining my kids here."';
    const r3 = '"Ramen hits hard."';
    const r4 = '"The shoyu ramen is crazy good."';
    const r5 = '"Love the staff, they are always super nice."';
    const r6 = '"Dont know what else to say other than SUPER IDOL DE XIAO LONG."';
    const r7 = '"If you scrolled this far, you deserve a cookie"';
    const r8 = '"I love their variety!"';
    const r9 = '"Wow you, really deserve another cookie."';
    cardDiv.append(blankCard(), reviewCard(r1), reviewCard(r2), reviewCard(r3), reviewCard(r4), reviewCard(r5), reviewCard(r6), reviewCard(r7), reviewCard(r8), reviewCard(r9), blankCard());
    
    section.append(leftArrow, cardDiv, rightArrow);
    
    leftArrow.addEventListener('click', () => {
        if (cardDiv.scrollLeft < 3800) cardDiv.scrollBy(500,0);
        // cardDiv.prepend(cardDiv.lastChild)
    });
    rightArrow.addEventListener('click', () => {
        if (cardDiv.scrollLeft > 300) cardDiv.scrollBy(-500,0);
        // cardDiv.append(cardDiv.firstChild);
    });
    return section;
}

function blankCard() {
    const card = document.createElement('div');
    card.classList.add('blank-card')
    return card;
}


function reviewCard(p) {
    const card = document.createElement('div');
    const text = document.createElement('p');
    const profileImg = new Image();
    profileImg.src = _src_images_profile_png__WEBPACK_IMPORTED_MODULE_1__;
    text.textContent = p;
    card.classList.add('review-card');
    text.classList.add('card-text');
    profileImg.classList.add('profile-img');
    card.append(text, profileImg);
    return card;
}

function bestMenuSection() {
    const section = document.createElement('div');
    const textDiv = document.createElement('div');
    const text = document.createElement('p');
    const img = new Image();
    img.src = _src_images_ramen_png__WEBPACK_IMPORTED_MODULE_2__;
    text.textContent = "Shoyu is the most popular Tokyo ramen and most likely the ramen you will first come across when visiting a ramen shop. Shoyu means soy sauce and has a clear brown appearance with a deep, rich soy sauce aroma. It's made from chicken bones, beef, pork or seafood is sometimes also used in the broth. The taste is usually a salty and light taste as the broth is clear and the noodles used are usually thin curly noodles. Shoyu ramen is known to be one of the oldest known ramen in Japan which most closely resembles the original Chinese version that first came to Japan. It is our award winning dish.";
    const title = document.createElement('h1');
    title.textContent = "Shoyu Ramen #BestSeller"

    section.classList.add('menu-section')
    img.classList.add('section-icon')
    text.classList.add('section-text')
    textDiv.classList.add('about-section-left')
  
    textDiv.append(title, text);
    section.append(textDiv, img);
    return section;
}

function reveal() {
    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        let height = child.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight;

        if (height > windowHeight + 200 || height < 200) child.classList.contains('left') ? child.classList.remove('active-left') : child.classList.remove('active-right');
        else if (height > 0 && height < windowHeight && i % 2 === 0) child.classList.add('active-right');
        else if (height > 0 && height < windowHeight && i % 2 !== 0) child.classList.add('active-left');
    }
}

function initHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.append(homepage());
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
    window.addEventListener('load', () => {
        const cardDiv = document.querySelector('.card-div')
        cardDiv.scrollTo(1000,0)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHome);



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_styles_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/styles/menu.scss */ "./src/styles/menu.scss");
/* harmony import */ var _src_images_omurice_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/images/omurice.png */ "./src/images/omurice.png");
/* harmony import */ var _src_images_ramen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/images/ramen.png */ "./src/images/ramen.png");
/* harmony import */ var _src_images_sushi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/images/sushi.png */ "./src/images/sushi.png");
/* harmony import */ var _src_images_desert_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/images/desert.png */ "./src/images/desert.png");






function menu() {
    const content = document.createElement('div');
    content.classList.add('menu-content');
    content.append(createMenuElement(_src_images_ramen_png__WEBPACK_IMPORTED_MODULE_2__, "Shoyu Ramen"), createMenuElement(_src_images_ramen_png__WEBPACK_IMPORTED_MODULE_2__, "Vegetarian Ramen"), createMenuElement(_src_images_sushi_png__WEBPACK_IMPORTED_MODULE_3__, "Sushi Assortment"), createMenuElement(_src_images_omurice_png__WEBPACK_IMPORTED_MODULE_1__, "Omurice"), createMenuElement(_src_images_desert_png__WEBPACK_IMPORTED_MODULE_4__, "Mango Pudding"), createMenuElement(_src_images_desert_png__WEBPACK_IMPORTED_MODULE_4__, "Passionfruit Pudding"));
    return content;
}

function createMenuElement(img, text) {
    const itemDiv = document.createElement('div');
    const desc = document.createElement('p');
    desc.textContent = text;
    const icon = new Image();
    icon.src = img;
    itemDiv.append(desc, icon);

    itemDiv.classList.add('item-div');
    return itemDiv;
}

function initMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.append(menu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenu);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _src_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/styles/navbar.scss */ "./src/styles/navbar.scss");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/components/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");




function navbar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    navbar.append(createTab("Home"), createTab("Menu"));
    return navbar;
}

function createTab(tabname) {
    const tab = document.createElement('div');
    tab.textContent = tabname;
    tab.classList.add('tab')
    if (tabname === "Home") tab.addEventListener('click', _homepage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    else tab.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return tab;
}

/***/ }),

/***/ "./src/components/website.js":
/*!***********************************!*\
  !*** ./src/components/website.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/components/homepage.js");
/* harmony import */ var _src_styles_body_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/styles/body.scss */ "./src/styles/body.scss");




function initializeWebsite() {
    document.body.append((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])(), createMain());
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/images/about.png":
/*!******************************!*\
  !*** ./src/images/about.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e20705476431e21a9ab.png";

/***/ }),

/***/ "./src/images/desert.png":
/*!*******************************!*\
  !*** ./src/images/desert.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ec0062090d9c892b5ac.png";

/***/ }),

/***/ "./src/images/omurice.png":
/*!********************************!*\
  !*** ./src/images/omurice.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcac4b6712e32ef20a86.png";

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81e2be43b1e592ff4025.png";

/***/ }),

/***/ "./src/images/ramen.png":
/*!******************************!*\
  !*** ./src/images/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "541a738684bfebe20813.png";

/***/ }),

/***/ "./src/images/sushi.png":
/*!******************************!*\
  !*** ./src/images/sushi.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "959c6ce3be2c50596427.png";

/***/ }),

/***/ "./src/styles/fonts/Anton-Regular.ttf":
/*!********************************************!*\
  !*** ./src/styles/fonts/Anton-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "170b842f9a8cd6150a0d.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/components/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNuQjhCO0FBQ0k7QUFDSjtBQUM5QjtBQUNBO0FBQ0EseUJBQXlCLG1EQUFNO0FBQy9CLElBQUkscURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzFDO0FBQ0Esb0RBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL2JvZHkuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL2hvbWVwYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9uYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9ib2R5LnNjc3M/ZGI5MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL2hvbWVwYWdlLnNjc3M/YzQ1MCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL21lbnUuc2Nzcz8zOGY0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvbmF2YmFyLnNjc3M/ZDFlZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYm9keS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyNWVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIwMSwgNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjAwLCA2MCwgMC41KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxuICBoZWlnaHQ6IDQwZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbn1cXG5cXG4uc2VjdGlvbi1pY29uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgZmxleDogMSAxIDMwMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi10ZXh0IHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcXG59XFxuXFxuLmFjdGl2ZS1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2dyk7XFxufVxcblxcbi5hY3RpdmUtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTV2dyk7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZmxleDogMiAyIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYWJvdXQtc2VjdGlvbi1sZWZ0IGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmxlZnQtYXJyb3cge1xcbiAgbGVmdDogNSU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG5cXG4ucmlnaHQtYXJyb3cge1xcbiAgcmlnaHQ6IDUlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLnJldmlldy1zZWN0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyNWVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIwMSwgNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjAwLCA2MCwgMC41KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxufVxcblxcbi5jYXJkLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxNzUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbi5jYXJkLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJldmlldy1jYXJkIHtcXG4gIG1pbi13aWR0aDogMjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDIwZW07XFxuICBtYXJnaW46IDFweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMyLCAxODksIDEzLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMCAwLCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmJsYW5rLWNhcmQge1xcbiAgbWluLXdpZHRoOiAyNWVtO1xcbiAgbWluLWhlaWdodDogMjBlbTtcXG4gIG1hcmdpbjogMXB4IDEwcHg7XFxufVxcblxcbi5wcm9maWxlLWltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDE1JTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjVlbTtcXG4gIHdpZHRoOiA3NSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUlO1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMDEsIDU1LCAwLjIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDIwMCwgNjAsIDAuNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmFib3V0LXNlY3Rpb24sIC5tZW51LXNlY3Rpb24sIC5yZXZpZXctc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuICAuYWJvdXQtc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xcbiAgfVxcbiAgLmFib3V0LXNlY3Rpb24gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuc2VjdGlvbi1pY29uIHtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBmbGV4OiAyIDEgMjAwcHg7XFxuICB9XFxuICAubWVudS1zZWN0aW9uIHtcXG4gICAgcGFkZGluZy1yaWdodDogMiU7XFxuICAgIGhlaWdodDogNDVlbTtcXG4gIH1cXG4gIC5tZW51LXNlY3Rpb24gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubWVudS1zZWN0aW9uIGltZyB7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgZmxleDogMSAxIDE1MHB4O1xcbiAgfVxcbiAgLmFib3V0LXNlY3Rpb24tbGVmdCB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgfVxcbiAgLm1lbnUtc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNDVlbTtcXG4gIH1cXG4gIC5hY3RpdmUtcmlnaHQsIC5hY3RpdmUtbGVmdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG4gIC5yZXZpZXctY2FyZCB7XFxuICAgIG1pbi13aWR0aDogMTBlbTtcXG4gICAgbWluLWhlaWdodDogMTVlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lcGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURKOztBQWtCQTtFQWJJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBGQUFBO0VBS0EsWUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBU0E7RUFDSSw0QkFBQTtBQU5KOztBQVNBO0VBQ0ksMkJBQUE7QUFOSjs7QUFTQTtFQUNJLDJCQUFBO0FBTko7O0FBU0E7RUFDSSwyQkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTko7QUFPSTtFQUNJLGlCQUFBO0FBTFI7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBTko7O0FBU0E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQU5KOztBQVNBO0VBL0VJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBGQUFBO0FBMEVKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBakJKO0FBbUJJO0VBQ0ksYUFBQTtBQWpCUjs7QUFzQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw0R0FBQTtFQUVBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFwQko7O0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFwQko7O0FBdUJBO0VBNUpJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBGQUFBO0VBb0pBLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFhQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQVZOO0VBYUU7SUFDSSxzQkFBQTtJQUNBLGlCQUFBO0VBWE47RUFZTTtJQUNJLGtCQUFBO0VBVlY7RUFjRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQVpOO0VBZUU7SUFDSSxpQkFBQTtJQUNBLFlBQUE7RUFiTjtFQWNNO0lBQ0ksa0JBQUE7RUFaVjtFQWNNO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBWlY7RUFnQkU7SUFDSSxjQUFBO0VBZE47RUFpQkU7SUFDSSxzQkFBQTtJQUNBLFlBQUE7RUFmTjtFQWtCRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSx3QkFBQTtFQWhCTjtFQW1CRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQWpCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMCU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBzZWN0aW9uIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAyNWVtO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1JTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjAxLCA1NSwgMC4yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDIwMCwgNjAsIDAuNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc2VjdGlvbiB7XFxyXFxuICAgIEBpbmNsdWRlIHNlY3Rpb247XFxyXFxuICAgIGhlaWdodDogNDBlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taWNvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBmbGV4OiAxIDEgMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLXRleHQge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5sZWZ0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLXJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxlZnQge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTV2dyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zZWN0aW9uLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgZmxleDogMiAyIGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5hcnJvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAwO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1hcnJvdyB7XFxyXFxuICAgIGxlZnQ6IDUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1hcnJvdyB7XFxyXFxuICAgIHJpZ2h0OiA1JTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LXNlY3Rpb24ge1xcclxcbiAgICBAaW5jbHVkZSBzZWN0aW9uO1xcclxcbiAgICAvLyAmOjpiZWZvcmUge1xcclxcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvLyAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIC8vICAgICBsZWZ0OiAwO1xcclxcbiAgICAvLyAgICAgdG9wOiAwO1xcclxcbiAgICAvLyAgICAgei1pbmRleDogOTk7XFxyXFxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vICAgICB3aWR0aDogMzUlO1xcclxcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjMzLCAyMDksIDExMyksIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcbiAgICAvLyAmOjphZnRlciB7XFxyXFxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgLy8gICAgIHJpZ2h0OiAwO1xcclxcbiAgICAvLyAgICAgYm90dG9tOiAwO1xcclxcbiAgICAvLyAgICAgei1pbmRleDogOTk7XFxyXFxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vICAgICB3aWR0aDogMzUlO1xcclxcbiAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiKDIzMywgMjA5LCAxMTMpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIC8vIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDUlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgd2lkdGg6IDE3NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJldmlldy1jYXJkIHtcXHJcXG4gICAgbWluLXdpZHRoOiAyNWVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMGVtO1xcclxcbiAgICBtYXJnaW46IDFweCAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjMyLCAxODksIDEzLCAwLjUpO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwIDAsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmJsYW5rLWNhcmQge1xcclxcbiAgICBtaW4td2lkdGg6IDI1ZW07XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwZW07XFxyXFxuICAgIG1hcmdpbjogMXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOztcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXNlY3Rpb24ge1xcclxcbiAgICBAaW5jbHVkZSBzZWN0aW9uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgLmFib3V0LXNlY3Rpb24sIC5tZW51LXNlY3Rpb24sIC5yZXZpZXctc2VjdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtc2VjdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2VjdGlvbi1pY29uIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIGZsZXg6IDIgMSAyMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1zZWN0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NWVtO1xcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxNTBweDs7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LXNlY3Rpb24tbGVmdCB7XFxyXFxuICAgICAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1zZWN0aW9uIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFjdGl2ZS1yaWdodCwgLmFjdGl2ZS1sZWZ0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucmV2aWV3LWNhcmQge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxMGVtO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMTVlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCkvcmVwZWF0KDIsIDFmcik7XFxuICBoZWlnaHQ6IDE0MDBweDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgY29sdW1uLWdhcDogMjAlO1xcbiAgcm93LWdhcDogMTAlO1xcbiAgcGFkZGluZzogNSU7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMDEsIDU1LCAwLjIpO1xcbn1cXG5cXG4uaXRlbS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTUwLCAzMSwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDI1cHggNTBweCAtMTJweDtcXG59XFxuLml0ZW0tZGl2IGltZyB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbn1cXG4uaXRlbS1kaXYgcCB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1lbnUtY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8vMzAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IG5vbmU7XFxuICAgIHJvdy1nYXA6IDIlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tZW51LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbURBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUlBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUFETjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCkgLyByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgaGVpZ2h0OiAxNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIwJTtcXHJcXG4gICAgcm93LWdhcDogMTAlO1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIwMSwgNTUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxNTAsIDMxLCAwLjIpO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAyNXB4IDUwcHggLTEycHg7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIuMGVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgIC5tZW51LWNvbnRlbnQge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDMwMHB4O1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogbm9uZTtcXHJcXG4gICAgICAgIHJvdy1nYXA6IDIlO1xcclxcbiAgICAgICAgcGFkZGluZzogMiU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3N0eWxlcy9mb250cy9BbnRvbi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuKiB7XFxuICBmb250LWZhbWlseTogbWFpbi1mb250O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThCRDBEO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxODksIDEzLCAwLjUpO1xcbn1cXG5cXG4udGFiIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBtaW4td2lkdGg6IDV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG4udGFiOjphZnRlciwgLnRhYjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi50YWI6OmFmdGVyIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTIwRTQzO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMTIwRTQzO1xcbn1cXG4udGFiOjpiZWZvcmUge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxMjBFNDM7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzEyMEU0MztcXG59XFxuLnRhYjpob3ZlcjphZnRlciwgLnRhYjpob3ZlcjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi50YWI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW5mb250LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2YmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0FDQ0o7QUFLQTtFQUNJLHNCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBZFM7RUFlVCxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBRUksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFPSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQTdDQztFQThDRCwyQkE5Q0M7QUF5Q1Q7QUFRSTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQXREQztFQXVERCwwQkF2REM7QUFpRFQ7QUFTSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBUlI7QUFXSTtFQUNJLGVBQUE7QUFUUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcXHJcXG4gICAgc3JjOiB1cmwoJy9zcmMvc3R5bGVzL2ZvbnRzL0FudG9uLVJlZ3VsYXIudHRmJyk7XFxyXFxufVwiLFwiQHVzZSAnc3JjL3N0eWxlcy9tYWluZm9udC5zY3NzJztcXHJcXG5cXHJcXG5cXHJcXG4kZGFya3llbGxvdzogI0U4QkQwRDtcXHJcXG4kbGlnaHR5ZWxsb3c6ICNFREMxMjY7XFxyXFxuJHRleHRjb2xvcjogYmxhY2s7XFxyXFxuJGNvbG9yMTogIzEyMEU0MztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJreWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDE4OSwgMTMsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIG1pbi13aWR0aDogNXZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcblxcclxcbiAgICAmOjphZnRlcixcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvcjE7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvcjE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAkY29sb3IxOztcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkY29sb3IxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXI6YWZ0ZXIsXFxyXFxuICAgICY6aG92ZXI6YmVmb3JlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhYm91dEljb24gZnJvbSAnL3NyYy9pbWFnZXMvYWJvdXQucG5nJztcclxuaW1wb3J0IHByb2ZpbGUgZnJvbSAnL3NyYy9pbWFnZXMvcHJvZmlsZS5wbmcnO1xyXG5pbXBvcnQgcmFtZW4gZnJvbSAnL3NyYy9pbWFnZXMvcmFtZW4ucG5nJztcclxuXHJcbmltcG9ydCAnL3NyYy9zdHlsZXMvaG9tZXBhZ2Uuc2Nzcyc7XHJcblxyXG5sZXQgY29udGVudDtcclxuXHJcbmZ1bmN0aW9uIGhvbWVwYWdlKCkge1xyXG4gICAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5hcHBlbmQoYWJvdXRTZWN0aW9uKCksIHJldmlld3NTZWN0aW9uKCksIGJlc3RNZW51U2VjdGlvbigpKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBjb250ZW50LmNoaWxkcmVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGkgJSAyID09PSAwID8gY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgncmlnaHQnKSA6IGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGljb24uc3JjID0gYWJvdXRJY29uO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uXCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkZVTUVUU1UgUkFNRU5cIlxyXG5cclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtc2VjdGlvbicpXHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taWNvbicpXHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGV4dCcpXHJcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXNlY3Rpb24tbGVmdCcpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1yaWdodCcpXHJcbiAgICB9LCAyMDApXHJcblxyXG4gICAgbGVmdC5hcHBlbmQodGl0bGUsIHRleHQpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmQobGVmdCwgaWNvbik7XHJcbiAgICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2aWV3c1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Jldmlldy1zZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QuYWRkKCdsZWZ0LWFycm93JywgJ2Fycm93Jyk7XHJcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFycm93JywgJ2Fycm93Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZC1kaXYnKVxyXG4gICAgY29uc3QgcjEgPSAnXCJHcmVhdCBzZXJ2aWNlLCBmb29kLCBhdG1vc3BoZXJlIGFuZCBwcmljZXMgbWFrZSB0aGlzIGEgc3BlY2lhbCBwbGFjZS5cIic7XHJcbiAgICBjb25zdCByMiA9ICdcIkkgbG92ZSBicmluaW5nIG15IGtpZHMgaGVyZS5cIic7XHJcbiAgICBjb25zdCByMyA9ICdcIlJhbWVuIGhpdHMgaGFyZC5cIic7XHJcbiAgICBjb25zdCByNCA9ICdcIlRoZSBzaG95dSByYW1lbiBpcyBjcmF6eSBnb29kLlwiJztcclxuICAgIGNvbnN0IHI1ID0gJ1wiTG92ZSB0aGUgc3RhZmYsIHRoZXkgYXJlIGFsd2F5cyBzdXBlciBuaWNlLlwiJztcclxuICAgIGNvbnN0IHI2ID0gJ1wiRG9udCBrbm93IHdoYXQgZWxzZSB0byBzYXkgb3RoZXIgdGhhbiBTVVBFUiBJRE9MIERFIFhJQU8gTE9ORy5cIic7XHJcbiAgICBjb25zdCByNyA9ICdcIklmIHlvdSBzY3JvbGxlZCB0aGlzIGZhciwgeW91IGRlc2VydmUgYSBjb29raWVcIic7XHJcbiAgICBjb25zdCByOCA9ICdcIkkgbG92ZSB0aGVpciB2YXJpZXR5IVwiJztcclxuICAgIGNvbnN0IHI5ID0gJ1wiV293IHlvdSwgcmVhbGx5IGRlc2VydmUgYW5vdGhlciBjb29raWUuXCInO1xyXG4gICAgY2FyZERpdi5hcHBlbmQoYmxhbmtDYXJkKCksIHJldmlld0NhcmQocjEpLCByZXZpZXdDYXJkKHIyKSwgcmV2aWV3Q2FyZChyMyksIHJldmlld0NhcmQocjQpLCByZXZpZXdDYXJkKHI1KSwgcmV2aWV3Q2FyZChyNiksIHJldmlld0NhcmQocjcpLCByZXZpZXdDYXJkKHI4KSwgcmV2aWV3Q2FyZChyOSksIGJsYW5rQ2FyZCgpKTtcclxuICAgIFxyXG4gICAgc2VjdGlvbi5hcHBlbmQobGVmdEFycm93LCBjYXJkRGl2LCByaWdodEFycm93KTtcclxuICAgIFxyXG4gICAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXJkRGl2LnNjcm9sbExlZnQgPCAzODAwKSBjYXJkRGl2LnNjcm9sbEJ5KDUwMCwwKTtcclxuICAgICAgICAvLyBjYXJkRGl2LnByZXBlbmQoY2FyZERpdi5sYXN0Q2hpbGQpXHJcbiAgICB9KTtcclxuICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmREaXYuc2Nyb2xsTGVmdCA+IDMwMCkgY2FyZERpdi5zY3JvbGxCeSgtNTAwLDApO1xyXG4gICAgICAgIC8vIGNhcmREaXYuYXBwZW5kKGNhcmREaXYuZmlyc3RDaGlsZCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZWN0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBibGFua0NhcmQoKSB7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2JsYW5rLWNhcmQnKVxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXZpZXdDYXJkKHApIHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBwcm9maWxlSW1nLnNyYyA9IHByb2ZpbGU7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gcDtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncmV2aWV3LWNhcmQnKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0Jyk7XHJcbiAgICBwcm9maWxlSW1nLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtaW1nJyk7XHJcbiAgICBjYXJkLmFwcGVuZCh0ZXh0LCBwcm9maWxlSW1nKTtcclxuICAgIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZXN0TWVudVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gcmFtZW47XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJTaG95dSBpcyB0aGUgbW9zdCBwb3B1bGFyIFRva3lvIHJhbWVuIGFuZCBtb3N0IGxpa2VseSB0aGUgcmFtZW4geW91IHdpbGwgZmlyc3QgY29tZSBhY3Jvc3Mgd2hlbiB2aXNpdGluZyBhIHJhbWVuIHNob3AuIFNob3l1IG1lYW5zIHNveSBzYXVjZSBhbmQgaGFzIGEgY2xlYXIgYnJvd24gYXBwZWFyYW5jZSB3aXRoIGEgZGVlcCwgcmljaCBzb3kgc2F1Y2UgYXJvbWEuIEl0J3MgbWFkZSBmcm9tIGNoaWNrZW4gYm9uZXMsIGJlZWYsIHBvcmsgb3Igc2VhZm9vZCBpcyBzb21ldGltZXMgYWxzbyB1c2VkIGluIHRoZSBicm90aC4gVGhlIHRhc3RlIGlzIHVzdWFsbHkgYSBzYWx0eSBhbmQgbGlnaHQgdGFzdGUgYXMgdGhlIGJyb3RoIGlzIGNsZWFyIGFuZCB0aGUgbm9vZGxlcyB1c2VkIGFyZSB1c3VhbGx5IHRoaW4gY3VybHkgbm9vZGxlcy4gU2hveXUgcmFtZW4gaXMga25vd24gdG8gYmUgb25lIG9mIHRoZSBvbGRlc3Qga25vd24gcmFtZW4gaW4gSmFwYW4gd2hpY2ggbW9zdCBjbG9zZWx5IHJlc2VtYmxlcyB0aGUgb3JpZ2luYWwgQ2hpbmVzZSB2ZXJzaW9uIHRoYXQgZmlyc3QgY2FtZSB0byBKYXBhbi4gSXQgaXMgb3VyIGF3YXJkIHdpbm5pbmcgZGlzaC5cIjtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJTaG95dSBSYW1lbiAjQmVzdFNlbGxlclwiXHJcblxyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKVxyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taWNvbicpXHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGV4dCcpXHJcbiAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXNlY3Rpb24tbGVmdCcpXHJcbiAgXHJcbiAgICB0ZXh0RGl2LmFwcGVuZCh0aXRsZSwgdGV4dCk7XHJcbiAgICBzZWN0aW9uLmFwcGVuZCh0ZXh0RGl2LCBpbWcpO1xyXG4gICAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldmVhbCgpIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGVudC5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0ID4gd2luZG93SGVpZ2h0ICsgMjAwIHx8IGhlaWdodCA8IDIwMCkgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0JykgPyBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGVmdCcpIDogY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXJpZ2h0Jyk7XHJcbiAgICAgICAgZWxzZSBpZiAoaGVpZ2h0ID4gMCAmJiBoZWlnaHQgPCB3aW5kb3dIZWlnaHQgJiYgaSAlIDIgPT09IDApIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1yaWdodCcpO1xyXG4gICAgICAgIGVsc2UgaWYgKGhlaWdodCA+IDAgJiYgaGVpZ2h0IDwgd2luZG93SGVpZ2h0ICYmIGkgJSAyICE9PSAwKSBjaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGVmdCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SG9tZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgbWFpbi5hcHBlbmQoaG9tZXBhZ2UoKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmV2ZWFsKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmV2ZWFsKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1kaXYnKVxyXG4gICAgICAgIGNhcmREaXYuc2Nyb2xsVG8oMTAwMCwwKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEhvbWU7XHJcblxyXG4iLCJpbXBvcnQgJy9zcmMvc3R5bGVzL21lbnUuc2Nzcyc7XHJcbmltcG9ydCBvbXVyaWNlIGZyb20gJy9zcmMvaW1hZ2VzL29tdXJpY2UucG5nJztcclxuaW1wb3J0IHJhbWVuIGZyb20gJy9zcmMvaW1hZ2VzL3JhbWVuLnBuZyc7XHJcbmltcG9ydCBzdXNoaSBmcm9tICcvc3JjL2ltYWdlcy9zdXNoaS5wbmcnO1xyXG5pbXBvcnQgZGVzZXJ0IGZyb20gJy9zcmMvaW1hZ2VzL2Rlc2VydC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVNZW51RWxlbWVudChyYW1lbiwgXCJTaG95dSBSYW1lblwiKSwgY3JlYXRlTWVudUVsZW1lbnQocmFtZW4sIFwiVmVnZXRhcmlhbiBSYW1lblwiKSwgY3JlYXRlTWVudUVsZW1lbnQoc3VzaGksIFwiU3VzaGkgQXNzb3J0bWVudFwiKSwgY3JlYXRlTWVudUVsZW1lbnQob211cmljZSwgXCJPbXVyaWNlXCIpLCBjcmVhdGVNZW51RWxlbWVudChkZXNlcnQsIFwiTWFuZ28gUHVkZGluZ1wiKSwgY3JlYXRlTWVudUVsZW1lbnQoZGVzZXJ0LCBcIlBhc3Npb25mcnVpdCBQdWRkaW5nXCIpKTtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51RWxlbWVudChpbWcsIHRleHQpIHtcclxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGljb24uc3JjID0gaW1nO1xyXG4gICAgaXRlbURpdi5hcHBlbmQoZGVzYywgaWNvbik7XHJcblxyXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xyXG4gICAgcmV0dXJuIGl0ZW1EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNZW51KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBtYWluLmFwcGVuZChtZW51KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0TWVudSIsImltcG9ydCAnL3NyYy9zdHlsZXMvbmF2YmFyLnNjc3MnO1xyXG5pbXBvcnQgaW5pdEhvbWUgZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBpbml0TWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcbiAgICBcclxuICAgIG5hdmJhci5hcHBlbmQoY3JlYXRlVGFiKFwiSG9tZVwiKSwgY3JlYXRlVGFiKFwiTWVudVwiKSk7XHJcbiAgICByZXR1cm4gbmF2YmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWIodGFibmFtZSkge1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YWIudGV4dENvbnRlbnQgPSB0YWJuYW1lO1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpXHJcbiAgICBpZiAodGFibmFtZSA9PT0gXCJIb21lXCIpIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRIb21lKTtcclxuICAgIGVsc2UgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdE1lbnUpO1xyXG4gICAgcmV0dXJuIHRhYjtcclxufSIsImltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCBpbml0SG9tZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5pbXBvcnQgJy9zcmMvc3R5bGVzL2JvZHkuc2NzcydcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobmF2YmFyKCksIGNyZWF0ZU1haW4oKSk7XHJcbiAgICBpbml0SG9tZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xyXG4gICAgcmV0dXJuIG1haW47XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==