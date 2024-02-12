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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import \"../css/style.css\"\nconst { encryptString } = __webpack_require__(/*! ./encryption */ \"./src/js/encryption.js\");\n\n// DOM variables\nconst dom = {\n  copyrightEl: document.getElementById(\"copyright\"),\n  versionEl: document.getElementById(\"version\"),\n  formEl: document.getElementById(\"cipher-form\"),\n  input: {\n    numEl: document.getElementById(\"num-input\"),\n    rangeEl: document.getElementById(\"num-range\"),\n    originalTextEl: document.getElementById(\"original-text\"),\n    encryptedTextEl: document.getElementById(\"encrypted-text\"),\n  },\n  btn: {\n    copy: document.getElementById(\"copy-btn\"),\n    encrypt: document.getElementById(\"encrypt-btn\"),\n    clear: document.getElementById(\"clear-btn\"),\n  },\n  staticLegendEl: document.getElementById(\"static-legend\"),\n  encryptedLegendEl: document.getElementById(\"encrypted-legend\"),\n};\n\n// Start up displays cipher information & listen for user interactions\nfunction init() {\n  const { formEl, input, btn, ...html } = dom;\n  const events = {\n    engaged: [\"mousedown\", \"touchstart\", \"focus\", \"keydown\"],\n    disengaged: [\"mouseup\", \"touchend\", \"blur\"],\n  };\n\n  credits(html);\n  displayLegend();\n\n  input.numEl.addEventListener(\"input\", syncedValues);\n  input.rangeEl.addEventListener(\"input\", syncedValues);\n  formEl.addEventListener(\"submit\", (e) => formSubmitHandler(e));\n  btn.clear.addEventListener(\"click\", (e) => clearOriginalText(e));\n  btn.copy.addEventListener(\"click\", copyEncryptedText);\n\n  // Encrypted legend lights & dims when user interacts with input fields\n  legendEventListeners(input.numEl, events.engaged, true);\n  legendEventListeners(input.rangeEl, events.engaged, true);\n  legendEventListeners(input.originalTextEl, [\"focus\"], true);\n  legendEventListeners(input.encryptedTextEl, [\"focus\"], true);\n\n  legendEventListeners(input.numEl, events.disengaged, false);\n  legendEventListeners(input.rangeEl, [...events.disengaged, \"keyup\"], false);\n  legendEventListeners(input.originalTextEl, [\"blur\"], false);\n  legendEventListeners(input.encryptedTextEl, [\"blur\"], false);\n}\n\n// Displays app details in the console & browser\nfunction credits({ copyrightEl, versionEl }) {\n  const date = new Date().getFullYear();\n  const info = {\n    github: `https://github.com/escowin/`,\n    app: \"caesar-cipher\",\n    v: \"2.0.1\",\n    copyright: `\\u00a9 ${date} Edwin M. Escobar`,\n    link: () => info.github + info.app,\n  };\n\n  console.log(`${info.app} v${info.v}\\n${info.copyright}\\n${info.link()}`);\n  copyrightEl.innerText = date;\n}\n\n// Syncs range & num input values\nfunction syncedValues(e) {\n  const value = e.target.value;\n  dom.input.rangeEl.value = dom.input.numEl.value = value;\n  displayLegend();\n}\n\n// Displays two alphabetic legend to communicate substitution encryption process\nfunction displayLegend() {\n  // Clears existing content\n  dom.staticLegendEl.innerHTML = \"\";\n  dom.encryptedLegendEl.innerHTML = \"\";\n\n  // Dynamically generates A-Z list elements\n  for (let i = 65; i <= 90; i++) {\n    // Static legend\n    let charOriginal = String.fromCharCode(i);\n    let liOriginal = document.createElement(\"li\");\n    liOriginal.textContent = charOriginal;\n    dom.staticLegendEl.appendChild(liOriginal);\n\n    // Encrypted legend synced range/num input value\n    let num = parseInt(dom.input.numEl.value);\n    let charShifted = String.fromCharCode(((i - 65 + num) % 26) + 65);\n    let liShifted = document.createElement(\"li\");\n    liShifted.textContent = charShifted;\n    dom.encryptedLegendEl.appendChild(liShifted);\n  }\n}\n\n// User interaction with input elements affect appearance of encrypted legend\nfunction legendEventListeners(inputEl, events, handler) {\n  events.forEach((event) =>\n    inputEl.addEventListener(event, () => {\n      // Determines whether to light up or dim the encrypted legend\n      handler\n        ? (dom.encryptedLegendEl.style.backgroundColor = \"var(--light)\")\n        : (dom.encryptedLegendEl.style.backgroundColor = \"var(--bg-unfocus)\");\n    })\n  );\n}\n\n// Captures user form-input\nfunction formSubmitHandler(e) {\n  e.preventDefault();\n\n  // Converts `numEl` value type to accurately perform math\n  const num = parseInt(dom.input.numEl.value);\n  const text = dom.input.originalTextEl.value;\n  const result = encryptString(num, text);\n\n  displayEncryptedText(result);\n}\n\n// Clears the original text element of any existing text\nfunction clearOriginalText(e) {\n  e.preventDefault();\n  dom.input.originalTextEl.value = \"\";\n  dom.input.encryptedTextEl.innerText = \"\";\n}\n\n// Displays generated encrypted text in browser\nfunction displayEncryptedText(string) {\n  const { btn, input } = dom;\n  // Communicates that the newly encrypted string has yet to be copied\n  if (btn.copy.innerText === \"copied\") btn.copy.innerText = \"copy\";\n  input.encryptedTextEl.textContent = string;\n}\n\n// Copies encrypted text string to clipboard\nfunction copyEncryptedText() {\n  const string = dom.input.encryptedTextEl.textContent;\n\n  navigator.clipboard\n    .writeText(string)\n    .then(() => (dom.btn.copy.innerText = \"copied\"))\n    .catch((err) => console.error(err));\n}\n\ninit();\n\n\n//# sourceURL=webpack://caesar-cipher/./src/js/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;