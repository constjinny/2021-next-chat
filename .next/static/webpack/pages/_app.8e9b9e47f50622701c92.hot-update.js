/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/input/Input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/Input.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/components/input/Input.tsx\";\n\nfunction _templateObject2() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: block;\\n  width: 100%;\\n  height: 20px;\\n  margin-left: 10px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  width: 100%;\\n  padding: 10px 20px;\\n  border: 1px solid #aaa;\\n  border-radius: 30px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nfunction Input(_ref) {\n  var id = _ref.id,\n      type = _ref.type,\n      value = _ref.value,\n      placeholder = _ref.placeholder,\n      _onChange = _ref.onChange;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LabelStyle, {\n    htmlFor: id,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputStyle, {\n      type: type,\n      value: value,\n      placeholder: placeholder,\n      onChange: function onChange(event) {\n        return _onChange(event.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = Input;\nInput.defaultProps = {\n  type: \"text\",\n  value: \"\",\n  placeholder: \"\"\n};\nvar LabelStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__.default.label(_templateObject());\n_c2 = LabelStyle;\nvar InputStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__.default.input(_templateObject2());\n_c3 = InputStyle;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"LabelStyle\");\n$RefreshReg$(_c3, \"InputStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4PzE2NzMiXSwibmFtZXMiOlsiSW5wdXQiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImRlZmF1bHRQcm9wcyIsIkxhYmVsU3R5bGUiLCJzdHlsZWQiLCJJbnB1dFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVTyxTQUFTQSxLQUFULE9BTXVCO0FBQUEsTUFMNUJDLEVBSzRCLFFBTDVCQSxFQUs0QjtBQUFBLE1BSjVCQyxJQUk0QixRQUo1QkEsSUFJNEI7QUFBQSxNQUg1QkMsS0FHNEIsUUFINUJBLEtBRzRCO0FBQUEsTUFGNUJDLFdBRTRCLFFBRjVCQSxXQUU0QjtBQUFBLE1BRDVCQyxTQUM0QixRQUQ1QkEsUUFDNEI7QUFDNUIsc0JBQ0UsOERBQUMsVUFBRDtBQUFZLFdBQU8sRUFBRUosRUFBckI7QUFBQSwyQkFDRSw4REFBQyxVQUFEO0FBQ0UsVUFBSSxFQUFFQyxJQURSO0FBRUUsV0FBSyxFQUFFQyxLQUZUO0FBR0UsaUJBQVcsRUFBRUMsV0FIZjtBQUlFLGNBQVEsRUFBRSxrQkFBQ0UsS0FBRDtBQUFBLGVBQVdELFNBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFOLENBQWFKLEtBQWQsQ0FBbkI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDtLQWpCZUgsSztBQW1CaEJBLEtBQUssQ0FBQ1EsWUFBTixHQUFxQjtBQUNuQk4sTUFBSSxFQUFFLE1BRGE7QUFFbkJDLE9BQUssRUFBRSxFQUZZO0FBR25CQyxhQUFXLEVBQUU7QUFITSxDQUFyQjtBQU1BLElBQU1LLFVBQVUsR0FBR0MsMERBQUgsbUJBQWhCO01BQU1ELFU7QUFRTixJQUFNRSxVQUFVLEdBQUdELDBEQUFILG9CQUFoQjtNQUFNQyxVIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUlucHV0UHJvcHMge1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5wdXQoe1xuICBpZCxcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIHBsYWNlaG9sZGVyLFxuICBvbkNoYW5nZSxcbn06IElJbnB1dFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8TGFiZWxTdHlsZSBodG1sRm9yPXtpZH0+XG4gICAgICA8SW5wdXRTdHlsZVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgPC9MYWJlbFN0eWxlPlxuICApO1xufVxuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFwidGV4dFwiLFxuICB2YWx1ZTogXCJcIixcbiAgcGxhY2Vob2xkZXI6IFwiXCIsXG59O1xuXG5jb25zdCBMYWJlbFN0eWxlID0gc3R5bGVkLmxhYmVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuYDtcblxuY29uc3QgSW5wdXRTdHlsZSA9IHN0eWxlZC5pbnB1dGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/input/Input.tsx\n");

/***/ })

});