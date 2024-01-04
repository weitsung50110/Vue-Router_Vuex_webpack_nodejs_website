"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_views_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _composables_greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../composables/greeting */ \"./src/composables/greeting.js\");\n // 引入 greeting.js 中的 greet 函式\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"); // 引入 axios 庫\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data() {\n    return {\n      message: 'Hello from about!',\n      // message 變數的初始值\n      txt: 'about' // txt 變數的初始值\n    };\n  },\n  methods: {\n    sendData() {\n      // 獲取使用者輸入的文字\n      const userInput = document.getElementById('userInput').value;\n\n      // 使用 greet 函式並傳入使用者輸入的文字\n      const message = (0,_composables_greeting__WEBPACK_IMPORTED_MODULE_0__.greet_about)(userInput);\n\n      // 使用 Axios 發送 POST 請求到後端\n      axios.post('/api/data', {\n        text: message\n      }).then(response => {\n        this.txt = response.data.text; // 更新 txt 為後端返回的文字\n      }).catch(error => {\n        console.error('錯誤：', error); // 處理錯誤情況\n      });\n    },\n    intro_go() {\n      this.message = (0,_composables_greeting__WEBPACK_IMPORTED_MODULE_0__.intro_about)();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/About.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-039c5b43\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"col\"\n};\nconst _hoisted_2 = {\n  class: \"alert alert-info mt-3\"\n};\nconst _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"text\",\n  id: \"userInput\",\n  placeholder: \"請輸入文字\",\n  class: \"form-control my-3\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_4 = {\n  class: \"mt-3\",\n  id: \"txt\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Vue 模板部分 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 使用栅格系统的 row 和 col-md-6 类创建居中的列 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 创建一个信息提示框样式的元素，用于显示 message 变量的内容 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 创建一个输入框，使用 form-control 类进行样式设置 \"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    id: \"showText\",\n    onClick: _cache[0] || (_cache[0] = $event => $options.sendData()),\n    class: \"btn btn-primary\"\n  }, \"showText\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    id: \"showText\",\n    onClick: _cache[1] || (_cache[1] = $event => $options.intro_go()),\n    class: \"btn btn-primary\"\n  }, \"Introduction\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" 用于显示 txt 变量的内容，添加了一些上边距 \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.txt), 1 /* TEXT */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);\n}\n\n//# sourceURL=webpack:///./src/views/About.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./src/composables/greeting.js":
/*!*************************************!*\
  !*** ./src/composables/greeting.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greet_about: () => (/* binding */ greet_about),\n/* harmony export */   greet_home: () => (/* binding */ greet_home),\n/* harmony export */   intro_about: () => (/* binding */ intro_about)\n/* harmony export */ });\n// src/greeting.js\n\nconst greet_about = name => {\n  // 定義一個名為 greet 的函式，接收一個名稱參數\n  console.log(`About Hello, ${name}!`); // 在控制台輸出問候語\n  return `About Hello, ${name}!`;\n};\nconst greet_home = name => {\n  // 定義一個名為 greet 的函式，接收一個名稱參數\n  console.log(`Home Hello, ${name}!`); // 在控制台輸出問候語\n  return `Home Hello, ${name}!`;\n};\nconst intro_about = () => {\n  console.log(`intro_about click!`); // 在控制台輸出問候語\n  return `崴崴的Vue3數學網站是一個以Vue.js 3為基礎建立的數學相關網站，\n    旨在提供使用者一個互動式且豐富的數學學習平台。該網站結合了Vue.js 3框架的特色，\n    使得使用者可以輕鬆地瀏覽各種數學相關內容並進行互動學習。`;\n};\n\n//# sourceURL=webpack:///./src/composables/greeting.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/views/About.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B6%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/About.vue":
/*!*****************************!*\
  !*** ./src/views/About.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _About_vue_vue_type_template_id_039c5b43_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=039c5b43&scoped=true */ \"./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true\");\n/* harmony import */ var _About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js */ \"./src/views/About.vue?vue&type=script&lang=js\");\n/* harmony import */ var _About_vue_vue_type_style_index_0_id_039c5b43_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css */ \"./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css\");\n/* harmony import */ var D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,D_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_About_vue_vue_type_template_id_039c5b43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-039c5b43\"],['__file',\"src/views/About.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ }),

/***/ "./src/views/About.vue?vue&type=script&lang=js":
/*!*****************************************************!*\
  !*** ./src/views/About.vue?vue&type=script&lang=js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./About.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ }),

/***/ "./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true":
/*!***********************************************************************!*\
  !*** ./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_About_vue_vue_type_template_id_039c5b43_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_About_vue_vue_type_template_id_039c5b43_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./About.vue?vue&type=template&id=039c5b43&scoped=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=template&id=039c5b43&scoped=true\");\n\n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ }),

/***/ "./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css":
/*!*************************************************************************************!*\
  !*** ./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_About_vue_vue_type_style_index_0_id_039c5b43_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/About.vue?vue&type=style&index=0&id=039c5b43&scoped=true&lang=css\");\n\n\n//# sourceURL=webpack:///./src/views/About.vue?");

/***/ })

}]);