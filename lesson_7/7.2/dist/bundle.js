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

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/index.js":
/*!**************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/todoList.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/todoList.js\");\n/* harmony import */ var _list_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/renderTasks.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/renderTasks.js\");\n/* harmony import */ var _list_tasksGateway_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/tasksGateway.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/tasksGateway.js\");\n/* harmony import */ var _list_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/storage.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_list_tasksGateway_js__WEBPACK_IMPORTED_MODULE_2__.getTasksList)().then((taskList) => {\r\n    (0,_list_storage_js__WEBPACK_IMPORTED_MODULE_3__.setItem)(\"taskList\", taskList);\r\n    (0,_list_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();\r\n  });\r\n  (0,_list_todoList_js__WEBPACK_IMPORTED_MODULE_0__.initTodoListHandlers)();\r\n});\r\n\r\nconst onStorageChange = (e) => {\r\n  if (e.key === \"tasksList\") {\r\n    (0,_list_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();\r\n  }\r\n};\r\nwindow.addEventListener(\"storage\", onStorageChange);\r\n\r\n// 1. Get data from server\r\n// 2. Save data to front-end storage\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvaW5kZXguanM/ZmJiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtBQUNOO0FBQ0U7QUFDVjs7QUFFNUM7QUFDQSxFQUFFLG1FQUFZO0FBQ2QsSUFBSSx5REFBTztBQUNYLElBQUksaUVBQVc7QUFDZixHQUFHO0FBQ0gsRUFBRSx1RUFBb0I7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxpRUFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvV2VicGFjay9sZXNzb25fNy83LjIvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFRvZG9MaXN0SGFuZGxlcnMgfSBmcm9tIFwiLi9saXN0L3RvZG9MaXN0LmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vbGlzdC9yZW5kZXJUYXNrcy5qc1wiO1xyXG5pbXBvcnQgeyBnZXRUYXNrc0xpc3QgfSBmcm9tIFwiLi9saXN0L3Rhc2tzR2F0ZXdheS5qc1wiO1xyXG5pbXBvcnQgeyBzZXRJdGVtIH0gZnJvbSBcIi4vbGlzdC9zdG9yYWdlLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgZ2V0VGFza3NMaXN0KCkudGhlbigodGFza0xpc3QpID0+IHtcclxuICAgIHNldEl0ZW0oXCJ0YXNrTGlzdFwiLCB0YXNrTGlzdCk7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG4gIH0pO1xyXG4gIGluaXRUb2RvTGlzdEhhbmRsZXJzKCk7XHJcbn0pO1xyXG5cclxuY29uc3Qgb25TdG9yYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwidGFza3NMaXN0XCIpIHtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgfVxyXG59O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgb25TdG9yYWdlQ2hhbmdlKTtcclxuXHJcbi8vIDEuIEdldCBkYXRhIGZyb20gc2VydmVyXHJcbi8vIDIuIFNhdmUgZGF0YSB0byBmcm9udC1lbmQgc3RvcmFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/index.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/createTask.js":
/*!************************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/createTask.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onCreateTask\": () => (/* binding */ onCreateTask)\n/* harmony export */ });\n/* harmony import */ var _tasksGateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksGateway.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/tasksGateway.js\");\n/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/renderTasks.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js\");\n\r\n\r\n\r\n\r\nconst onCreateTask = () => {\r\n  const taskTitleInputElem = document.querySelector('.task-input');\r\n\r\n  const text = taskTitleInputElem.value;\r\n\r\n  if (!text) {\r\n    return;\r\n  }\r\n  taskTitleInputElem.value = '';\r\n\r\n  const newTask = {\r\n    text,\r\n    done: false,\r\n    createDate: new Date().toISOString(),\r\n    // id: Math.random().toString(), // server generates id\r\n  };\r\n\r\n  (0,_tasksGateway_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTask)\r\n    .then(() => (0,_tasksGateway_js__WEBPACK_IMPORTED_MODULE_0__.getTasksList)())\r\n    .then(newTasksList => {\r\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.setItem)('tasksList', newTasksList);\r\n      (0,_renderTasks_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();\r\n    });\r\n\r\n\r\n};\r\n\r\n// 1. Prepare data\r\n// 2. Write data to db\r\n// 3. Read new data from servre\r\n// 4. Save new data to front - end storage\r\n// 5. Update UI based on new data\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC9jcmVhdGVUYXNrLmpzPzM5OTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUNkO0FBQ1I7O0FBRWhDO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNERBQVU7QUFDWixnQkFBZ0IsOERBQVk7QUFDNUI7QUFDQSxNQUFNLG9EQUFPO0FBQ2IsTUFBTSw0REFBVztBQUNqQixLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvV2VicGFjay9sZXNzb25fNy83LjIvc3JjL2xpc3QvY3JlYXRlVGFzay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhc2ssIGdldFRhc2tzTGlzdCB9IGZyb20gXCIuL3Rhc2tzR2F0ZXdheS5qc1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gXCIuL3JlbmRlclRhc2tzLmpzXCI7XHJcbmltcG9ydCB7IHNldEl0ZW0gfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb25DcmVhdGVUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSB0YXNrVGl0bGVJbnB1dEVsZW0udmFsdWU7XHJcblxyXG4gIGlmICghdGV4dCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0YXNrVGl0bGVJbnB1dEVsZW0udmFsdWUgPSAnJztcclxuXHJcbiAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgIHRleHQsXHJcbiAgICBkb25lOiBmYWxzZSxcclxuICAgIGNyZWF0ZURhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgIC8vIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksIC8vIHNlcnZlciBnZW5lcmF0ZXMgaWRcclxuICB9O1xyXG5cclxuICBjcmVhdGVUYXNrKG5ld1Rhc2spXHJcbiAgICAudGhlbigoKSA9PiBnZXRUYXNrc0xpc3QoKSlcclxuICAgIC50aGVuKG5ld1Rhc2tzTGlzdCA9PiB7XHJcbiAgICAgIHNldEl0ZW0oJ3Rhc2tzTGlzdCcsIG5ld1Rhc2tzTGlzdCk7XHJcbiAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59O1xyXG5cclxuLy8gMS4gUHJlcGFyZSBkYXRhXHJcbi8vIDIuIFdyaXRlIGRhdGEgdG8gZGJcclxuLy8gMy4gUmVhZCBuZXcgZGF0YSBmcm9tIHNlcnZyZVxyXG4vLyA0LiBTYXZlIG5ldyBkYXRhIHRvIGZyb250IC0gZW5kIHN0b3JhZ2VcclxuLy8gNS4gVXBkYXRlIFVJIGJhc2VkIG9uIG5ldyBkYXRhXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/createTask.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/renderTasks.js":
/*!*************************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/renderTasks.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js\");\n\r\n\r\nconst listElem = document.querySelector('.list');\r\n\r\nconst compareTasks = (a, b) => {\r\n  if (a.done - b.done !== 0) {\r\n    return a.done - b.done;\r\n  }\r\n\r\n  if (a.done) {\r\n    return new Date(b.finishDate) - new Date(a.finishDate);\r\n  }\r\n\r\n  return new Date(b.createDate) - new Date(a.createDate);\r\n};\r\n\r\nconst createCheckbox = ({ done, id }) => {\r\n  const checkboxElem = document.createElement('input');\r\n  checkboxElem.setAttribute('data-id', id);\r\n  checkboxElem.setAttribute('type', 'checkbox');\r\n  checkboxElem.checked = done;\r\n  checkboxElem.classList.add('list__item-checkbox');\r\n\r\n  return checkboxElem;\r\n};\r\n\r\nconst createListItem = ({ text, done, id }) => {\r\n  const listItemElem = document.createElement('li');\r\n  listItemElem.classList.add('list__item');\r\n\r\n  const checkboxElem = createCheckbox({ done, id });\r\n  if (done) {\r\n    listItemElem.classList.add('list__item_done');\r\n  }\r\n\r\n  const textElem = document.createElement('span');\r\n  textElem.classList.add('list__item-text');\r\n  textElem.textContent = text;\r\n\r\n  const deleteBtnElem = document.createElement('button');\r\n  deleteBtnElem.classList.add('list__item-delete-btn');\r\n  deleteBtnElem.dataset.id = id;\r\n\r\n  listItemElem.append(checkboxElem, textElem, deleteBtnElem);\r\n\r\n  return listItemElem;\r\n};\r\n\r\nconst renderTasks = () => {\r\n  const tasksList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getItem)('tasksList') || [];\r\n\r\n  listElem.innerHTML = '';\r\n  const tasksElems = tasksList.sort(compareTasks).map(createListItem);\r\n\r\n  listElem.append(...tasksElems);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC9yZW5kZXJUYXNrcy5qcz80YTk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDOztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBOztBQUVBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0Isb0RBQU87O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi8uLi9cdTAwMDAjRF9Xb3JrL0xlYXJuaW5nL0dyb21jb2RlL1dlYnBhY2svbGVzc29uXzcvNy4yL3NyYy9saXN0L3JlbmRlclRhc2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SXRlbSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuXHJcbmNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbmNvbnN0IGNvbXBhcmVUYXNrcyA9IChhLCBiKSA9PiB7XHJcbiAgaWYgKGEuZG9uZSAtIGIuZG9uZSAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGEuZG9uZSAtIGIuZG9uZTtcclxuICB9XHJcblxyXG4gIGlmIChhLmRvbmUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShiLmZpbmlzaERhdGUpIC0gbmV3IERhdGUoYS5maW5pc2hEYXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgRGF0ZShiLmNyZWF0ZURhdGUpIC0gbmV3IERhdGUoYS5jcmVhdGVEYXRlKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKHsgZG9uZSwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tib3hFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICBjaGVja2JveEVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgY2hlY2tib3hFbGVtLmNoZWNrZWQgPSBkb25lO1xyXG4gIGNoZWNrYm94RWxlbS5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtLWNoZWNrYm94Jyk7XHJcblxyXG4gIHJldHVybiBjaGVja2JveEVsZW07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMaXN0SXRlbSA9ICh7IHRleHQsIGRvbmUsIGlkIH0pID0+IHtcclxuICBjb25zdCBsaXN0SXRlbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpc3RJdGVtRWxlbS5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtJyk7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94RWxlbSA9IGNyZWF0ZUNoZWNrYm94KHsgZG9uZSwgaWQgfSk7XHJcbiAgaWYgKGRvbmUpIHtcclxuICAgIGxpc3RJdGVtRWxlbS5jbGFzc0xpc3QuYWRkKCdsaXN0X19pdGVtX2RvbmUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRleHRFbGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3RfX2l0ZW0tdGV4dCcpO1xyXG4gIHRleHRFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnRuRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ0bkVsZW0uY2xhc3NMaXN0LmFkZCgnbGlzdF9faXRlbS1kZWxldGUtYnRuJyk7XHJcbiAgZGVsZXRlQnRuRWxlbS5kYXRhc2V0LmlkID0gaWQ7XHJcblxyXG4gIGxpc3RJdGVtRWxlbS5hcHBlbmQoY2hlY2tib3hFbGVtLCB0ZXh0RWxlbSwgZGVsZXRlQnRuRWxlbSk7XHJcblxyXG4gIHJldHVybiBsaXN0SXRlbUVsZW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFza3NMaXN0ID0gZ2V0SXRlbSgndGFza3NMaXN0JykgfHwgW107XHJcblxyXG4gIGxpc3RFbGVtLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IHRhc2tzRWxlbXMgPSB0YXNrc0xpc3Quc29ydChjb21wYXJlVGFza3MpLm1hcChjcmVhdGVMaXN0SXRlbSk7XHJcblxyXG4gIGxpc3RFbGVtLmFwcGVuZCguLi50YXNrc0VsZW1zKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/renderTasks.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js":
/*!*********************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setItem\": () => (/* binding */ setItem),\n/* harmony export */   \"getItem\": () => (/* binding */ getItem)\n/* harmony export */ });\n// const storage = {};\r\n// [\r\n//   { text: 'Buy', done: false, id: 1 },\r\n//   { text: 'Pick up Tom from airport', done: true, id: 2 },\r\n//   { text: 'Visit party', done: false, id: 3 },\r\n//   { text: 'Visit doctor', done: false, id: 4 },\r\n//   { text: 'Buy meat', done: true, id: 5 },\r\n// ];\r\n\r\nconst setItem = (key, value) => {\r\n  localStorage.setItem(key, JSON.stringify(value));\r\n  // Object.assign(storage, { [key]: value });\r\n};\r\n\r\nconst getItem = key => JSON.parse(localStorage.getItem(key));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC9zdG9yYWdlLmpzPzliZGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTSxrQ0FBa0M7QUFDeEMsTUFBTSxzREFBc0Q7QUFDNUQsTUFBTSwwQ0FBMEM7QUFDaEQsTUFBTSwyQ0FBMkM7QUFDakQsTUFBTSxzQ0FBc0M7QUFDNUM7O0FBRU87QUFDUDtBQUNBLDZCQUE2QixlQUFlO0FBQzVDOztBQUVPIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvV2VicGFjay9sZXNzb25fNy83LjIvc3JjL2xpc3Qvc3RvcmFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHN0b3JhZ2UgPSB7fTtcclxuLy8gW1xyXG4vLyAgIHsgdGV4dDogJ0J1eScsIGRvbmU6IGZhbHNlLCBpZDogMSB9LFxyXG4vLyAgIHsgdGV4dDogJ1BpY2sgdXAgVG9tIGZyb20gYWlycG9ydCcsIGRvbmU6IHRydWUsIGlkOiAyIH0sXHJcbi8vICAgeyB0ZXh0OiAnVmlzaXQgcGFydHknLCBkb25lOiBmYWxzZSwgaWQ6IDMgfSxcclxuLy8gICB7IHRleHQ6ICdWaXNpdCBkb2N0b3InLCBkb25lOiBmYWxzZSwgaWQ6IDQgfSxcclxuLy8gICB7IHRleHQ6ICdCdXkgbWVhdCcsIGRvbmU6IHRydWUsIGlkOiA1IH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SXRlbSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIC8vIE9iamVjdC5hc3NpZ24oc3RvcmFnZSwgeyBba2V5XTogdmFsdWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbSA9IGtleSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/storage.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/tasksGateway.js":
/*!**************************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/tasksGateway.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTasksList\": () => (/* binding */ getTasksList),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n// const baseUrl = 'https://crudcrud.com/api/3f3c9c9d2918435cbe597a451e870d47/tasks';\r\n// const baseUrl = 'https://6051234753460900176713fa.mockapi.io';\r\nconst baseUrl = 'https://6051365453460900176715c6.mockapi.io/tasks';\r\n\r\n// const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));\r\n\r\nconst getTasksList = () => {\r\n  return fetch(baseUrl).then(response => response.json());\r\n};\r\n// .then(tasks => mapTasks(tasks));\r\n\r\nconst createTask = taskData => {\r\n  return fetch(baseUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=utf-8',\r\n    },\r\n    body: JSON.stringify(taskData),\r\n  });\r\n};\r\n\r\nconst updateTask = (taskId, updatedtaskData) => {\r\n  return fetch(`${baseUrl}/${taskId}`, {\r\n    method: 'PUT',\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=utf-8',\r\n    },\r\n    body: JSON.stringify(updatedtaskData),\r\n  });\r\n};\r\n\r\nconst deleteTask = taskId => {\r\n  return fetch(`${baseUrl}/${taskId}`, {\r\n    method: 'DELETE',\r\n  });\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC90YXNrc0dhdGV3YXkuanM/YTA4OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxlQUFlLE9BQU8sbUJBQW1COztBQUUzRTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxrQkFBa0IsUUFBUSxHQUFHLE9BQU87QUFDcEM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxrQkFBa0IsUUFBUSxHQUFHLE9BQU87QUFDcEM7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC90YXNrc0dhdGV3YXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS8zZjNjOWM5ZDI5MTg0MzVjYmU1OTdhNDUxZTg3MGQ0Ny90YXNrcyc7XHJcbi8vIGNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly82MDUxMjM0NzUzNDYwOTAwMTc2NzEzZmEubW9ja2FwaS5pbyc7XHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly82MDUxMzY1NDUzNDYwOTAwMTc2NzE1YzYubW9ja2FwaS5pby90YXNrcyc7XHJcblxyXG4vLyBjb25zdCBtYXBUYXNrcyA9IHRhc2tzID0+IHRhc2tzLm1hcCgoeyBfaWQsIC4uLnJlc3QgfSkgPT4gKHsgLi4ucmVzdCwgaWQ6IF9pZCB9KSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFza3NMaXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChiYXNlVXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn07XHJcbi8vIC50aGVuKHRhc2tzID0+IG1hcFRhc2tzKHRhc2tzKSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9IHRhc2tEYXRhID0+IHtcclxuICByZXR1cm4gZmV0Y2goYmFzZVVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrRGF0YSksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrSWQsIHVwZGF0ZWR0YXNrRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtiYXNlVXJsfS8ke3Rhc2tJZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZHRhc2tEYXRhKSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gdGFza0lkID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0vJHt0YXNrSWR9YCwge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/tasksGateway.js\n");

/***/ }),

/***/ "../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/todoList.js":
/*!**********************************************************************************************!*\
  !*** ../../../../../../ #D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/todoList.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTodoListHandlers\": () => (/* binding */ initTodoListHandlers)\n/* harmony export */ });\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ \"../../../../../../\\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/createTask.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './updateTask.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst initTodoListHandlers = () => {\r\n  const createBtnElem = document.querySelector('.create-task-btn');\r\n  createBtnElem.addEventListener('click', _createTask_js__WEBPACK_IMPORTED_MODULE_0__.onCreateTask);\r\n\r\n  const toggleListElem = document.querySelector('.list');\r\n  // toggleListElem.addEventListener('click', onToggleTask);\r\n  toggleListElem.addEventListener('click', Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './updateTask.js.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly83LjIvLi4vLi4vLi4vLi4vLi4vLi4vXHUwMDAwI0RfV29yay9MZWFybmluZy9Hcm9tY29kZS9XZWJwYWNrL2xlc3Nvbl83LzcuMi9zcmMvbGlzdC90b2RvTGlzdC5qcz9jMzMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNNOztBQUU5QztBQUNQO0FBQ0EsMENBQTBDLHdEQUFZOztBQUV0RDtBQUNBO0FBQ0EsMkNBQTJDLGlKQUFlO0FBQzFEIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uLy4uL1x1MDAwMCNEX1dvcmsvTGVhcm5pbmcvR3JvbWNvZGUvV2VicGFjay9sZXNzb25fNy83LjIvc3JjL2xpc3QvdG9kb0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrLmpzXCI7XHJcbmltcG9ydCB7IG9uTGlzdEl0ZW1DbGljayB9IGZyb20gXCIuL3VwZGF0ZVRhc2suanMuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0VG9kb0xpc3RIYW5kbGVycyA9ICgpID0+IHtcclxuICBjb25zdCBjcmVhdGVCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrLWJ0bicpO1xyXG4gIGNyZWF0ZUJ0bkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNyZWF0ZVRhc2spO1xyXG5cclxuICBjb25zdCB0b2dnbGVMaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgLy8gdG9nZ2xlTGlzdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRvZ2dsZVRhc2spO1xyXG4gIHRvZ2dsZUxpc3RFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25MaXN0SXRlbUNsaWNrKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/list/todoList.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../\u0000#D_Work/Learning/Gromcode/Webpack/lesson_7/7.2/src/index.js");
/******/ 	
/******/ })()
;