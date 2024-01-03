/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _composables_greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../composables/greeting */ \"./src/composables/greeting.js\");\n // 引入 greeting.js 中的 greet 函式\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"); // 引入 axios 庫\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data() {\n    return {\n      message: 'Hello from Home!',\n      // message 變數的初始值\n      txt: 'Home' // txt 變數的初始值\n    };\n  },\n  methods: {\n    sendData() {\n      // 獲取使用者輸入的文字\n      const userInput = document.getElementById('userInput').value;\n\n      // 使用 greet 函式並傳入使用者輸入的文字\n      const message = (0,_composables_greeting__WEBPACK_IMPORTED_MODULE_0__.greet_home)(userInput);\n\n      // 使用 Axios 發送 POST 請求到後端\n      axios.post('/api/data', {\n        text: message\n      }).then(response => {\n        this.txt = response.data.text; // 更新 txt 為後端返回的文字\n      }).catch(error => {\n        console.error('錯誤：', error); // 處理錯誤情況\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-fae5bece\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"text\",\n  id: \"userInput\",\n  placeholder: \"請輸入文字\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_2 = {\n  id: \"txt\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Vue 模板部分 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 顯示 message 變數的內容 \"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 文字輸入框 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    id: \"showText\",\n    onClick: _cache[0] || (_cache[0] = $event => $options.sendData())\n  }, \"顯示文字\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 按鈕用於顯示文字 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.txt), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 顯示 txt 變數的內容 \")], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./src/composables/greeting.js":
/*!*************************************!*\
  !*** ./src/composables/greeting.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greet_about: () => (/* binding */ greet_about),\n/* harmony export */   greet_home: () => (/* binding */ greet_home)\n/* harmony export */ });\n// src/greeting.js\n\nconst greet_about = name => {\n  // 定義一個名為 greet 的函式，接收一個名稱參數\n  console.log(`About Hello, ${name}!`); // 在控制台輸出問候語\n  return `About Hello, ${name}!`;\n};\nconst greet_home = name => {\n  // 定義一個名為 greet 的函式，接收一個名稱參數\n  console.log(`Home Hello, ${name}!`); // 在控制台輸出問候語\n  return `Home Hello, ${name}!`;\n};\n\n//# sourceURL=webpack:///./src/composables/greeting.js?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece&scoped=true */ \"./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/views/Home.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css */ \"./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css\");\n/* harmony import */ var D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Home_vue_vue_type_template_id_fae5bece_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-fae5bece\"],['__file',\"src/views/Home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************/
/***/ (() => {

eval("\r\n/* 可以放置您的樣式 */\r\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=js":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Home.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true":
/*!**********************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Home.vue?vue&type=template&id=fae5bece&scoped=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true\");\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css":
/*!************************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport default from dynamic */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ })

}]);