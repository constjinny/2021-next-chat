/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/avatar/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/avatar/Avatar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Avatar\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/components/avatar/Avatar.tsx\";\n\nfunction _templateObject2() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #d9d9d9;\\n  svg {\\n    font-size: 24px;\\n    color: #fff;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  overflow: hidden;\\n  display: block;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n  border: 2px solid \", \";\\n  background-color: #fff;\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nfunction Avatar(_ref) {\n  var hideLine = _ref.hideLine,\n      isFriend = _ref.isFriend,\n      url = _ref.url;\n  var borderColor = hideLine ? \"#e4e4e4\" : isFriend ? \"#00C7B8\" : \"#4261e6\";\n\n  var userIcon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUser\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 20\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvatarStyle, {\n    borderColor: borderColor,\n    children: url ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n      src: url,\n      alt: \"\\uB300\\uD654 \\uC0C1\\uB300 \\uC0AC\\uC9C4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvararEmpyStyle, {\n      children: userIcon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n_c = Avatar;\nAvatar.defaultProps = {\n  hideLine: false,\n  isFriend: false\n};\nvar AvatarStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject(), function (_ref2) {\n  var borderColor = _ref2.borderColor;\n  return borderColor;\n});\n_c2 = AvatarStyle;\nvar AvararEmpyStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject2());\n_c3 = AvararEmpyStyle;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c2, \"AvatarStyle\");\n$RefreshReg$(_c3, \"AvararEmpyStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL0F2YXRhci50c3g/ZWM0ZiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJoaWRlTGluZSIsImlzRnJpZW5kIiwidXJsIiwiYm9yZGVyQ29sb3IiLCJ1c2VySWNvbiIsImZhVXNlciIsImRlZmF1bHRQcm9wcyIsIkF2YXRhclN0eWxlIiwic3R5bGVkIiwiQXZhcmFyRW1weVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU08sU0FBU0EsTUFBVCxPQUF3RTtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLEdBQWtDLFFBQWxDQSxHQUFrQztBQUM3RSxNQUFNQyxXQUFXLEdBQUdILFFBQVEsR0FBRyxTQUFILEdBQWVDLFFBQVEsR0FBRyxTQUFILEdBQWUsU0FBbEU7O0FBQ0EsTUFBTUcsUUFBUSxnQkFBRyw4REFBQywyRUFBRDtBQUFpQixRQUFJLEVBQUVDLHFFQUFNQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWpCOztBQUVBLHNCQUNFLDhEQUFDLFdBQUQ7QUFBYSxlQUFXLEVBQUVGLFdBQTFCO0FBQUEsY0FDR0QsR0FBRyxnQkFDRiw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUEsR0FBWjtBQUFpQixTQUFHLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFLGdCQUdGLDhEQUFDLGVBQUQ7QUFBQSxnQkFBa0JFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtLQWJlTCxNO0FBZWhCQSxNQUFNLENBQUNPLFlBQVAsR0FBc0I7QUFDcEJOLFVBQVEsRUFBRSxLQURVO0FBRXBCQyxVQUFRLEVBQUU7QUFGVSxDQUF0QjtBQUtBLElBQU1NLFdBQVcsR0FBR0Msd0RBQUgsb0JBTUs7QUFBQSxNQUFHTCxXQUFILFNBQUdBLFdBQUg7QUFBQSxTQUFxQkEsV0FBckI7QUFBQSxDQU5MLENBQWpCO01BQU1JLFc7QUFXTixJQUFNRSxlQUFlLEdBQUdELHlEQUFILG9CQUFyQjtNQUFNQyxlIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL0F2YXRhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFVc2VyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vLi4vY29uc3RhbnQvY29sb3IudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdmF0YXJQcm9wcyB7XG4gIGhpZGVMaW5lOiBib29sZWFuO1xuICBpc0ZyaWVuZDogYm9vbGVhbjtcbiAgdXJsPzogeyBzcmM6IHN0cmluZzsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGJsdXJEYXRhVVJMPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdmF0YXIoeyBoaWRlTGluZSwgaXNGcmllbmQsIHVybCB9OiBBdmF0YXJQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gaGlkZUxpbmUgPyBcIiNlNGU0ZTRcIiA6IGlzRnJpZW5kID8gXCIjMDBDN0I4XCIgOiBcIiM0MjYxZTZcIjtcbiAgY29uc3QgdXNlckljb24gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz47XG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyU3R5bGUgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yfT5cbiAgICAgIHt1cmwgPyAoXG4gICAgICAgIDxJbWFnZSBzcmM9e3VybH0gYWx0PVwi64yA7ZmUIOyDgeuMgCDsgqzsp4RcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEF2YXJhckVtcHlTdHlsZT57dXNlckljb259PC9BdmFyYXJFbXB5U3R5bGU+XG4gICAgICApfVxuICAgIDwvQXZhdGFyU3R5bGU+XG4gICk7XG59XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGVMaW5lOiBmYWxzZSxcbiAgaXNGcmllbmQ6IGZhbHNlLFxufTtcblxuY29uc3QgQXZhdGFyU3R5bGUgPSBzdHlsZWQuZGl2PHsgYm9yZGVyQ29sb3I6IHN0cmluZyB9PmBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgJHsoeyBib3JkZXJDb2xvciB9KSA9PiBib3JkZXJDb2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5jb25zdCBBdmFyYXJFbXB5U3R5bGUgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gIHN2ZyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/avatar/Avatar.tsx\n");

/***/ })

});