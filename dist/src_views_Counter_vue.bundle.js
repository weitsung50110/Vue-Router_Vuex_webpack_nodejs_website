"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_views_Counter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _composables_useCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../composables/useCounter */ \"./src/composables/useCounter.js\");\n // 引入 useCounter Composable\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup() {\n    // 使用 useCounter Composable 創建一個名為 counter 的對象\n    const counter = (0,_composables_useCounter__WEBPACK_IMPORTED_MODULE_0__.useCounter)(); // 此 counter 對象包含了計數器的狀態和方法\n\n    // 在 setup() 中返回 counter 對象，使其可以在模板中使用\n    return {\n      counter // 返回的對象可以在模板中進行解構或直接使用\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Counter.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=template&id=1f6b4eb2":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=template&id=1f6b4eb2 ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"display-4\"\n};\nconst _hoisted_2 = {\n  class: \"btn-group\",\n  role: \"group\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 模板部分 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_1, \"Count: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.counter.count), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 顯示計數器的當前值 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $setup.counter.increment && $setup.counter.increment(...args)),\n    class: \"btn btn-primary\"\n  }, \"Increment\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 點擊此按鈕觸發增加計數器值的函式 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $setup.counter.decrement && $setup.counter.decrement(...args)),\n    class: \"btn btn-primary\"\n  }, \"Decrement\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 點擊此按鈕觸發減少計數器值的函式 \")])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack:///./src/views/Counter.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./src/composables/useCounter.js":
/*!***************************************!*\
  !*** ./src/composables/useCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCounter: () => (/* binding */ useCounter)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n/*當您第一次調用 useCounter() 時，如果您沒有提供 initialValue 的值，它將使用預設值 0 作為初始值。\r\n但這僅限於第一次調用，之後再次調用 useCounter() 就不會再改變 initialValue 的值 */\n// 定義一個名為 useCounter 的 Composable 函式\nfunction useCounter(initialValue = 0) {\n  // 使用 ref 創建一個響應式的 count 變數，初始值為傳入的 initialValue\n  const count = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue); //當count.value有值後，就不會再從initialValue拿值了\n\n  // 定義一個名為 increment 的函式，用於增加 count 變數的值\n  function increment() {\n    count.value++; // 透過 count.value 來操作響應式變數 count\n  }\n\n  // 定義一個名為 decrement 的函式，用於減少 count 變數的值\n  function decrement() {\n    count.value--; // 透過 count.value 來操作響應式變數 count\n  }\n\n  // 返回一個包含 count 變數以及增加和減少 count 的方法的對象\n  return {\n    count,\n    // 返回的對象包含響應式變數 count\n    increment,\n    // 返回的對象包含增加 count 的方法 increment\n    decrement // 返回的對象包含減少 count 的方法 decrement\n  };\n}\n\n/*一旦使用 ref 創建的響應式變數 count 獲得了初始值（例如通過 const count = ref(initialValue);），\r\n那麼 .value 的值將會保持在最新賦予的值。此時 initialValue 不再被直接使用，除非您明確地更新 .value 屬性為新的值。\r\n\r\n當對 count.value 進行修改時，這個更改將會在 Vue 的響應式系統中被追踪，當這個值發生變化時，\r\n相關的視圖也會自動更新。這意味著 initialValue 在這個過程中不再被使用，\r\n因為響應式變數 count 的值已經在運行時被動態地修改了。 */\n\n//# sourceURL=webpack:///./src/composables/useCounter.js?");

/***/ }),

/***/ "./src/views/Counter.vue":
/*!*******************************!*\
  !*** ./src/views/Counter.vue ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Counter_vue_vue_type_template_id_1f6b4eb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter.vue?vue&type=template&id=1f6b4eb2 */ \"./src/views/Counter.vue?vue&type=template&id=1f6b4eb2\");\n/* harmony import */ var _Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter.vue?vue&type=script&lang=js */ \"./src/views/Counter.vue?vue&type=script&lang=js\");\n/* harmony import */ var D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Counter_vue_vue_type_template_id_1f6b4eb2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/Counter.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Counter.vue?");

/***/ }),

/***/ "./src/views/Counter.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/views/Counter.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Counter.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/Counter.vue?");

/***/ }),

/***/ "./src/views/Counter.vue?vue&type=template&id=1f6b4eb2":
/*!*************************************************************!*\
  !*** ./src/views/Counter.vue?vue&type=template&id=1f6b4eb2 ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Counter_vue_vue_type_template_id_1f6b4eb2__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Counter_vue_vue_type_template_id_1f6b4eb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Counter.vue?vue&type=template&id=1f6b4eb2 */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Counter.vue?vue&type=template&id=1f6b4eb2\");\n\n\n//# sourceURL=webpack:///./src/views/Counter.vue?");

/***/ })

}]);