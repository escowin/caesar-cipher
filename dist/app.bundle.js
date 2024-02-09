/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Design philosophy : Rule of thirds styled big to small, selectors alphabetically listed. */\n\n/* I. Palette */\n:root {\n    --bg: rgb(27, 27, 38);\n    --bg-unfocus: rgb(150, 119, 102);\n    --dark: rgb(53, 27, 13);\n    --light: rgb(250, 242, 217);\n    --red: rgb(247, 83, 83);\n    --btn: rgb(36, 87, 138);\n    --tr-3: 1s color, 1s background-color, 1s box-shadow;\n    --spread: .05rem .05rem .5rem;\n    --corners: .5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* II. Base */\n\nbody {\n    background-color: var(--bg);\n    color: var(--dark);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    white-space: pre-line;\n    height: 100vh;\n}\n\n/* III. Semantic divisions */\nfooter,\nheader,\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n/* IV. Nested division specificity */\n/* Header */\nh1 {\n    font-variant: small-caps;\n    padding: .5rem;\n\n    & #version {\n        font-size: smaller;\n    }\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    & .char-list {\n        list-style: none;\n        display: grid;\n        grid-template-columns: repeat(26, 1fr);\n        background-color: var(--bg-unfocus);\n        box-shadow: inset var(--spread) var(--dark);\n        text-align: center;\n        text-shadow: var(--spread) var(--dark);\n\n        & li {\n            outline: 1px solid var(--bg);\n            padding: .25rem 0;\n        }\n\n    }\n\n    & #static-legend {\n        color: var(--light);\n        text-shadow: var(--spread) var(--dark);\n    }\n\n    & #encrypted-legend {\n        color: var(--red);\n        transition: 1s background-color;\n    }\n\n    & #cipher-form {\n        display: grid;\n        grid-template-columns: 1fr auto auto auto;\n        gap: .5rem;\n        padding: 0 1rem;\n        align-items: flex-end;\n        margin-top: .5rem;\n\n        & label {\n            gap: .25rem;\n        }\n    }\n}\n\n/* Main */\nmain {\n    flex-grow: 2;\n    gap: 1rem;\n    padding: 0 1.5rem;\n\n    & label {\n        gap: .7rem;\n        width: 100%;\n    }\n\n    & label[for=\"encrypted-text\"] {\n        flex-grow: 1;\n\n        & #original-text {\n            height: 10rem;\n        }\n\n        & #encrypted-text {\n            height: 100%;\n        }\n    }\n\n    & #copy-btn {\n        align-self: flex-end;\n\n    }\n}\n\n/* V. Interactive */\n/* Links */\na {\n    color: var(--red);\n    font-weight: lighter;\n    border-radius: var(--corners);\n    padding: .5rem 1rem;\n    margin: 1rem 0;\n    background-color: none;\n    transition: var(--tr-3), 1s text-shadow, 1s outline;\n    text-shadow: var(--spread) var(--dark);\n    box-shadow: none;\n\n    &:focus,\n    &:hover {\n        color: var(--light);\n    }\n\n    &:focus {\n        outline: 2px solid var(--light);\n        background-color: var(--red);\n        box-shadow: var(--spread) var(--light);\n    }\n\n    &:hover {\n        background-color: var(--btn);\n        box-shadow: var(--spread) var(--light);\n    }\n\n}\n\n/* Logic entry points */\nbutton,\n.input {\n    border-radius: var(--corners);\n    outline: none;\n    border: none;\n    transition: var(--spread), 1s outline;\n}\n\n/* Buttons */\nbutton {\n    padding: .3rem .75rem;\n    font-variant: small-caps;\n    background-color: var(--btn);\n    box-shadow: var(--spread) var(--dark);\n\n    &:active,\n    &:focus,\n    &:hover {\n        color: var(--light);\n    }\n\n    &:focus,\n    &:hover {\n        background-color: var(--red);\n        box-shadow: var(--spread) var(--light);\n    }\n\n    &:focus {\n        outline: 2px solid var(--light);\n    }\n}\n\n/* Labels */\n.label {\n    color: var(--red);\n    text-shadow: var(--spread) var(--dark);\n    transition: 1s color;\n    font-weight: lighter;\n\n    &:hover {\n        color: var(--light);\n    }\n}\n\nlabel {\n    display: flex;\n    flex-direction: column;\n    font-variant: small-caps;\n}\n\n/* Input fields */\n.input {\n    transition: var(--tr-3), 1s text-shadow, 1s outline;\n\n    &:focus,\n    &:hover {\n        background-color: var(--light);\n    }\n\n    &:focus {\n        outline: 2px solid var(--dark);\n    }\n}\n\ninput {\n    color: var(--red);\n    background-color: var(--dark);\n    box-shadow: var(--spread) var(--dark);\n}\n\ninput[type=\"number\"] {\n    padding: .25rem;\n    width: 3rem;\n    background-color: var(--bg-unfocus);\n    box-shadow: inset var(--spread) var(--dark);\n    text-align: center;\n    text-shadow: var(--tr-3) var(--dark);\n    font-size: 1.25rem;\n\n    &:focus {\n        color: var(--red);\n    }\n}\n\ninput[type=\"range\"] {\n    appearance: none;\n    background-color: var(--bg-unfocus);\n    margin: .25rem 0;\n    box-shadow: inset var(--spread) var(--dark);\n\n    &:active {\n        background-color: var(--light);\n    }\n\n    &::-webkit-slider-thumb {\n        --size: .75rem;\n        -webkit-appearance: none;\n        appearance: none;\n        width: var(--size);\n        height: var(--size);\n        border-radius: var(--corners);\n        background: var(--red);\n        box-shadow: var(--spread) var(--dark);\n        outline: none;\n        padding: .5rem;\n        transition: 1s background-color;\n    }\n\n    &::-webkit-slider-thumb:active {\n        background-color: var(--dark);\n    }\n}\n\ntextarea {\n    color: var(--bg-unfocus);\n    background-color: var(--bg-unfocus);\n    box-shadow: inset var(--spread) var(--dark);\n    text-shadow: 0 0 .05rem 5rem var(--dark);\n    font-size: 2rem;\n    min-height: 10rem;\n    resize: none;\n    padding: .5rem;\n    white-space: pre-line;\n\n    &:focus,\n    &:hover {\n        color: var(--dark);\n        text-shadow: var(--spread) var(--dark);\n    }\n\n    &::-webkit-scrollbar {\n        background-color: transparent;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--bg);\n        border-radius: var(--corners);\n    }\n\n}\n\n\n@media screen and (min-width: 768px) {\n    body {\n        gap: 2rem;\n    }\n\n    /* header sibiling elements */\n    #cipher-form {\n        grid-template-rows: 1fr max-content;\n        height: 100%;\n        gap: 1.5rem .5rem;\n\n        & label[for=\"original-text\"] {\n            height: inherit;\n\n            & #original-text {\n                flex-grow: 1;\n            }\n        }\n    }\n\n    main {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr max-content;\n        gap: 1rem 3rem;\n\n        & label {\n            height: 100%;\n\n            & textarea {\n                flex-grow: 1;\n            }\n        }\n\n        & #copy-btn {\n            grid-column: 2 / -1;\n            justify-self: flex-end;\n        }\n    }\n\n    footer {\n        grid-column: 1 / -1;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://caesar-cipher/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://caesar-cipher/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://caesar-cipher/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/encryption.js":
/*!******************************!*\
  !*** ./src/js/encryption.js ***!
  \******************************/
/***/ ((module) => {

eval("// Encrypts string by shifting each alphabetic character ASCII value to the right by `num` value\nfunction encryptString(num, string) {\n  let result = \"\";\n  for (let i = 0; i < string.length; i++) {\n    let charCode = string.charCodeAt(i);\n    let encryptedCode = charCode + num;\n\n    // Encrypts character sets separately, adjusting for wrap-arounds as needed\n    switch (true) {\n      // Uppercase\n      case charCode >= 65 && charCode <= 90:\n        encryptedCode = encryptedCode > 90 ? encryptedCode - 26 : encryptedCode;\n        break;\n      // Lowercase\n      case charCode >= 97 && charCode <= 122:\n        encryptedCode =\n          encryptedCode > 122 ? encryptedCode - 26 : encryptedCode;\n        break;\n      // Numerals and Symbols A\n      case charCode >= 32 && charCode <= 64:\n        encryptedCode = encryptedCode > 64 ? encryptedCode - 33 : encryptedCode;\n        break;\n      // Symbols B\n      case charCode >= 91 && charCode <= 96:\n        encryptedCode = encryptedCode > 96 ? encryptedCode - 6 : encryptedCode;\n        break;\n      // Symbols C\n      case charCode >= 123 && charCode <= 126:\n        encryptedCode = encryptedCode > 126 ? encryptedCode - 4 : encryptedCode;\n        break;\n      default:\n        encryptedCode = charCode;\n    }\n\n    result += String.fromCharCode(encryptedCode);\n  }\n\n  return result;\n}\n\nmodule.exports = { encryptString };\n\n\n//# sourceURL=webpack://caesar-cipher/./src/js/encryption.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\nconst { encryptString } = __webpack_require__(/*! ./encryption */ \"./src/js/encryption.js\");\n\n// DOM variables\nconst dom = {\n  copyrightEl: document.getElementById(\"copyright\"),\n  versionEl: document.getElementById(\"version\"),\n  formEl: document.getElementById(\"cipher-form\"),\n  input: {\n    numEl: document.getElementById(\"num-input\"),\n    rangeEl: document.getElementById(\"num-range\"),\n    originalTextEl: document.getElementById(\"original-text\"),\n    encryptedTextEl: document.getElementById(\"encrypted-text\"),\n  },\n  btn: {\n    copy: document.getElementById(\"copy-btn\"),\n    encrypt: document.getElementById(\"encrypt-btn\"),\n    clear: document.getElementById(\"clear-btn\"),\n  },\n  staticLegendEl: document.getElementById(\"static-legend\"),\n  encryptedLegendEl: document.getElementById(\"encrypted-legend\"),\n};\n\n// Start up displays cipher information & listen for user interactions\nfunction init() {\n  const { formEl, input, btn, ...html } = dom;\n  const events = {\n    engaged: [\"mousedown\", \"touchstart\", \"focus\", \"keydown\"],\n    disengaged: [\"mouseup\", \"touchend\", \"blur\"],\n  };\n\n  credits(html);\n  displayLegend();\n\n  input.numEl.addEventListener(\"input\", syncedValues);\n  input.rangeEl.addEventListener(\"input\", syncedValues);\n  formEl.addEventListener(\"submit\", (e) => formSubmitHandler(e));\n  btn.clear.addEventListener(\"click\", (e) => clearOriginalText(e));\n  btn.copy.addEventListener(\"click\", copyEncryptedText);\n\n  // Encrypted legend lights & dims when user interacts with input fields\n  legendEventListeners(input.numEl, events.engaged, true);\n  legendEventListeners(input.rangeEl, events.engaged, true);\n  legendEventListeners(input.originalTextEl, [\"focus\"], true);\n  legendEventListeners(input.encryptedTextEl, [\"focus\"], true);\n\n  legendEventListeners(input.numEl, events.disengaged, false);\n  legendEventListeners(input.rangeEl, [...events.disengaged, \"keyup\"], false);\n  legendEventListeners(input.originalTextEl, [\"blur\"], false);\n  legendEventListeners(input.encryptedTextEl, [\"blur\"], false);\n}\n\n// Displays app details in the console & browser\nfunction credits({ copyrightEl, versionEl }) {\n  const date = new Date().getFullYear();\n  const info = {\n    github: `https://github.com/escowin/`,\n    app: \"caesar-cipher\",\n    v: \"2.0.1\",\n    copyright: `\\u00a9 ${date} Edwin M. Escobar`,\n    link: () => info.github + info.app,\n  };\n\n  console.log(`${info.app} v${info.v}\\n${info.copyright}\\n${info.link()}`);\n  copyrightEl.innerText = date;\n  versionEl.innerText = `v${info.v}`;\n}\n\n// Syncs range & num input values\nfunction syncedValues(e) {\n  const value = e.target.value;\n  dom.input.rangeEl.value = dom.input.numEl.value = value;\n  displayLegend();\n}\n\n// Displays two alphabetic legend to communicate substitution encryption process\nfunction displayLegend() {\n  // Clears existing content\n  dom.staticLegendEl.innerHTML = \"\";\n  dom.encryptedLegendEl.innerHTML = \"\";\n\n  // Dynamically generates A-Z list elements\n  for (let i = 65; i <= 90; i++) {\n    // Static legend\n    let charOriginal = String.fromCharCode(i);\n    let liOriginal = document.createElement(\"li\");\n    liOriginal.textContent = charOriginal;\n    dom.staticLegendEl.appendChild(liOriginal);\n\n    // Encrypted legend synced range/num input value\n    let num = parseInt(dom.input.numEl.value);\n    let charShifted = String.fromCharCode(((i - 65 + num) % 26) + 65);\n    let liShifted = document.createElement(\"li\");\n    liShifted.textContent = charShifted;\n    dom.encryptedLegendEl.appendChild(liShifted);\n  }\n}\n\n// User interaction with input elements affect appearance of encrypted legend\nfunction legendEventListeners(inputEl, events, handler) {\n  events.forEach((event) =>\n    inputEl.addEventListener(event, () => {\n      // Determines whether to light up or dim the encrypted legend\n      handler\n        ? (dom.encryptedLegendEl.style.backgroundColor = \"var(--light)\")\n        : (dom.encryptedLegendEl.style.backgroundColor = \"var(--bg-unfocus)\");\n    })\n  );\n}\n\n// Captures user form-input\nfunction formSubmitHandler(e) {\n  e.preventDefault();\n\n  // Converts `numEl` value type to accurately perform math\n  const num = parseInt(dom.input.numEl.value);\n  const text = dom.input.originalTextEl.value;\n  const result = encryptString(num, text);\n\n  displayEncryptedText(result);\n}\n\n// Clears the original text element of any existing text\nfunction clearOriginalText(e) {\n  e.preventDefault();\n  dom.input.originalTextEl.value = \"\";\n  dom.input.encryptedTextEl.innerText = \"\";\n}\n\n// Displays generated encrypted text in browser\nfunction displayEncryptedText(string) {\n  const { btn, input } = dom;\n  // Communicates that the newly encrypted string has yet to be copied\n  if (btn.copy.innerText === \"copied\") btn.copy.innerText = \"copy\";\n  input.encryptedTextEl.textContent = string;\n}\n\n// Copies encrypted text string to clipboard\nfunction copyEncryptedText() {\n  const string = dom.input.encryptedTextEl.textContent;\n\n  navigator.clipboard\n    .writeText(string)\n    .then(() => (dom.btn.copy.innerText = \"copied\"))\n    .catch((err) => console.error(err));\n}\n\ninit();\n\n\n//# sourceURL=webpack://caesar-cipher/./src/js/script.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;