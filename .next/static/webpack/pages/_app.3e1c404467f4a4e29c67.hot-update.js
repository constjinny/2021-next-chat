/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/tag/Tag.tsx":
/*!************************************!*\
  !*** ./src/components/tag/Tag.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _constant_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/color */ \"./src/constant/color.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/components/tag/Tag.tsx\";\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: inline-block;\\n  \", \";\\n  padding: 2px 10px;\\n  font-size: 12px;\\n  border-radius: 15px;\\n  background-color: \", \";\\n  color: #fff;\\n  vertical-align: top;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nfunction Tag(_ref) {\n  var isFriend = _ref.isFriend,\n      margin = _ref.margin;\n  var tagColor = isFriend ? _constant_color__WEBPACK_IMPORTED_MODULE_4__.default.mint : _constant_color__WEBPACK_IMPORTED_MODULE_4__.default.darkPurple;\n  var tagText = isFriend ? \"친구\" : \"기업\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TagStyle, {\n    tagColor: tagColor,\n    marginValue: margin,\n    children: tagText\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n_c = Tag;\nTag.defaultProps = {\n  isFriend: false\n};\nvar TagStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__.default.span(_templateObject(), function (_ref2) {\n  var marginValue = _ref2.marginValue;\n  return marginValue && \"margin: \".concat(marginValue);\n}, function (_ref3) {\n  var tagColor = _ref3.tagColor;\n  return tagColor;\n});\n_c2 = TagStyle;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Tag\");\n$RefreshReg$(_c2, \"TagStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFnL1RhZy50c3g/OWQ4NCJdLCJuYW1lcyI6WyJUYWciLCJpc0ZyaWVuZCIsIm1hcmdpbiIsInRhZ0NvbG9yIiwiY29sb3JzIiwidGFnVGV4dCIsImRlZmF1bHRQcm9wcyIsIlRhZ1N0eWxlIiwic3R5bGVkIiwibWFyZ2luVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT08sU0FBU0EsR0FBVCxPQUEyRDtBQUFBLE1BQTVDQyxRQUE0QyxRQUE1Q0EsUUFBNEM7QUFBQSxNQUFsQ0MsTUFBa0MsUUFBbENBLE1BQWtDO0FBQ2hFLE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxHQUFHRyx5REFBSCxHQUFpQkEsK0RBQTFDO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSixRQUFRLEdBQUcsSUFBSCxHQUFVLElBQWxDO0FBRUEsc0JBQ0UsOERBQUMsUUFBRDtBQUFVLFlBQVEsRUFBRUUsUUFBcEI7QUFBOEIsZUFBVyxFQUFFRCxNQUEzQztBQUFBLGNBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FUZUwsRztBQVdoQkEsR0FBRyxDQUFDTSxZQUFKLEdBQW1CO0FBQ2pCTCxVQUFRLEVBQUU7QUFETyxDQUFuQjtBQUlBLElBQU1NLFFBQVEsR0FBR0MseURBQUgsb0JBS1Y7QUFBQSxNQUFHQyxXQUFILFNBQUdBLFdBQUg7QUFBQSxTQUFxQkEsV0FBVyxzQkFBZUEsV0FBZixDQUFoQztBQUFBLENBTFUsRUFTUTtBQUFBLE1BQUdOLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFsQjtBQUFBLENBVFIsQ0FBZDtNQUFNSSxRIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdGFnL1RhZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnUHJvcHMge1xuICBtYXJnaW4/OiBzdHJpbmc7XG4gIGlzRnJpZW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFnKHsgaXNGcmllbmQsIG1hcmdpbiB9OiBUYWdQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHRhZ0NvbG9yID0gaXNGcmllbmQgPyBjb2xvcnMubWludCA6IGNvbG9ycy5kYXJrUHVycGxlO1xuICBjb25zdCB0YWdUZXh0ID0gaXNGcmllbmQgPyBcIuy5nOq1rFwiIDogXCLquLDsl4VcIjtcblxuICByZXR1cm4gKFxuICAgIDxUYWdTdHlsZSB0YWdDb2xvcj17dGFnQ29sb3J9IG1hcmdpblZhbHVlPXttYXJnaW59PlxuICAgICAge3RhZ1RleHR9XG4gICAgPC9UYWdTdHlsZT5cbiAgKTtcbn1cblxuVGFnLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNGcmllbmQ6IGZhbHNlLFxufTtcblxuY29uc3QgVGFnU3R5bGUgPSBzdHlsZWQuc3Bhbjx7XG4gIHRhZ0NvbG9yOiBzdHJpbmc7XG4gIG1hcmdpblZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59PmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAkeyh7IG1hcmdpblZhbHVlIH0pID0+IG1hcmdpblZhbHVlICYmIGBtYXJnaW46ICR7bWFyZ2luVmFsdWV9YH07XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGFnQ29sb3IgfSkgPT4gdGFnQ29sb3J9O1xuICBjb2xvcjogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tag/Tag.tsx\n");

/***/ })

});