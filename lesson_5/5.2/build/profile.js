/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/gateway.js":
/*!************************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/gateway.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\n// file path: src/profile/gateway.js\r\n\r\nasync function fetchUser(userId) {\r\n  const response = await fetch(`https://api.github.com/users/${userId}`);\r\n  if (!response.ok) {\r\n    throw new Error(\"Failed to get user data\");\r\n  }\r\n  return await response.json();\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS93ZWJwYWNrL2xlc3Nvbl81LzUuMi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzPzkwNGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVPO0FBQ1AsK0RBQStELE9BQU87QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi8uLi9cdTAwMDAjRF9Xb3JrL0xlYXJuaW5nL0dyb21jb2RlL3dlYnBhY2svbGVzc29uXzUvNS4yL3NyYy9wcm9maWxlL2dhdGV3YXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2dhdGV3YXkuanNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXIodXNlcklkKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHVzZXIgZGF0YVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/gateway.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/index.js":
/*!**********************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/printProfile.js\");\n// file path: src/profile/index.js\r\n\r\n\r\n\r\n\r\n(0,_gateway__WEBPACK_IMPORTED_MODULE_0__.fetchUser)(\"github\").then(({ name, location }) =>\r\n  (0,_printProfile__WEBPACK_IMPORTED_MODULE_1__.default)({\r\n    name,\r\n    location,\r\n  })\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS93ZWJwYWNrL2xlc3Nvbl81LzUuMi9zcmMvcHJvZmlsZS9pbmRleC5qcz82YzExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOztBQUVzQztBQUNJOztBQUUxQyxtREFBUyxrQkFBa0IsaUJBQWlCO0FBQzVDLEVBQUUsc0RBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvd2VicGFjay9sZXNzb25fNS81LjIvc3JjL3Byb2ZpbGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgeyBmZXRjaFVzZXIgfSBmcm9tIFwiLi9nYXRld2F5XCI7XHJcbmltcG9ydCBwcmludFByb2ZpbGUgZnJvbSBcIi4vcHJpbnRQcm9maWxlXCI7XHJcblxyXG5mZXRjaFVzZXIoXCJnaXRodWJcIikudGhlbigoeyBuYW1lLCBsb2NhdGlvbiB9KSA9PlxyXG4gIHByaW50UHJvZmlsZSh7XHJcbiAgICBuYW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgfSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/index.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/printProfile.js":
/*!*****************************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/printProfile.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// file path: src/profile/printProfile.js\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((profileData) => {\r\n  const { name, location } = profileData;\r\n  console.log(`${name} from ${location}`);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS93ZWJwYWNrL2xlc3Nvbl81LzUuMi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanM/MmJiYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsaUVBQWU7QUFDZixTQUFTLGlCQUFpQjtBQUMxQixpQkFBaUIsS0FBSyxRQUFRLFNBQVM7QUFDdkMsQ0FBQyxFQUFDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvd2VicGFjay9sZXNzb25fNS81LjIvc3JjL3Byb2ZpbGUvcHJpbnRQcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9maWxlRGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgbG9jYXRpb24gfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtsb2NhdGlvbn1gKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/printProfile.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../\u0000#D_Work/Learning/Gromcode/webpack/lesson_5/5.2/src/profile/index.js");
/******/ 	
/******/ })()
;