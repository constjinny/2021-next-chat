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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Avatar\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _constant_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constant/color */ \"./src/constant/color.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/components/avatar/Avatar.tsx\";\n\nfunction _templateObject2() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \", \";\\n  svg {\\n    font-size: 24px;\\n    color: \", \";\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  overflow: hidden;\\n  display: block;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n  border: 2px solid \", \";\\n  background-color: \", \";\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction Avatar(_ref) {\n  var hideLine = _ref.hideLine,\n      isFriend = _ref.isFriend,\n      url = _ref.url;\n  var borderColor = hideLine ? _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.lightPurple : isFriend ? _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.mint : _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.darkPurple;\n\n  var userIcon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 20\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvatarStyle, {\n    borderColor: borderColor,\n    children: url ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n      src: url,\n      alt: \"\\uB300\\uD654 \\uC0C1\\uB300 \\uC0AC\\uC9C4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvararEmpyStyle, {\n      children: userIcon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n_c = Avatar;\nAvatar.defaultProps = {\n  hideLine: false,\n  isFriend: false\n};\nvar AvatarStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject(), function (_ref2) {\n  var borderColor = _ref2.borderColor;\n  return borderColor;\n}, _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.white);\n_c2 = AvatarStyle;\nvar AvararEmpyStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject2(), _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.lightGray, _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.white);\n_c3 = AvararEmpyStyle;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c2, \"AvatarStyle\");\n$RefreshReg$(_c3, \"AvararEmpyStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL0F2YXRhci50c3g/ZWM0ZiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJoaWRlTGluZSIsImlzRnJpZW5kIiwidXJsIiwiYm9yZGVyQ29sb3IiLCJjb2xvcnMiLCJ1c2VySWNvbiIsImZhVXNlciIsImRlZmF1bHRQcm9wcyIsIkF2YXRhclN0eWxlIiwic3R5bGVkIiwiQXZhcmFyRW1weVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sU0FBU0EsTUFBVCxPQUF3RTtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLEdBQWtDLFFBQWxDQSxHQUFrQztBQUM3RSxNQUFNQyxXQUFXLEdBQUdILFFBQVEsR0FDeEJJLGdFQUR3QixHQUV4QkgsUUFBUSxHQUNSRyx5REFEUSxHQUVSQSwrREFKSjs7QUFLQSxNQUFNQyxRQUFRLGdCQUFHLDhEQUFDLDJFQUFEO0FBQWlCLFFBQUksRUFBRUMscUVBQU1BO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBakI7O0FBRUEsc0JBQ0UsOERBQUMsV0FBRDtBQUFhLGVBQVcsRUFBRUgsV0FBMUI7QUFBQSxjQUNHRCxHQUFHLGdCQUNGLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQSxHQUFaO0FBQWlCLFNBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZ0JBR0YsOERBQUMsZUFBRDtBQUFBLGdCQUFrQkc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0tBakJlTixNO0FBbUJoQkEsTUFBTSxDQUFDUSxZQUFQLEdBQXNCO0FBQ3BCUCxVQUFRLEVBQUUsS0FEVTtBQUVwQkMsVUFBUSxFQUFFO0FBRlUsQ0FBdEI7QUFLQSxJQUFNTyxXQUFXLEdBQUdDLHdEQUFILG9CQU1LO0FBQUEsTUFBR04sV0FBSCxTQUFHQSxXQUFIO0FBQUEsU0FBcUJBLFdBQXJCO0FBQUEsQ0FOTCxFQU9LQywwREFQTCxDQUFqQjtNQUFNSSxXO0FBV04sSUFBTUUsZUFBZSxHQUFHRCx5REFBSCxxQkFNQ0wsOERBTkQsRUFTUkEsMERBVFEsQ0FBckI7TUFBTU0sZSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2F2YXRhci9BdmF0YXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xuICBoaWRlTGluZTogYm9vbGVhbjtcbiAgaXNGcmllbmQ6IGJvb2xlYW47XG4gIHVybD86IHsgc3JjOiBzdHJpbmc7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyBibHVyRGF0YVVSTD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgaGlkZUxpbmUsIGlzRnJpZW5kLCB1cmwgfTogQXZhdGFyUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBib3JkZXJDb2xvciA9IGhpZGVMaW5lXG4gICAgPyBjb2xvcnMubGlnaHRQdXJwbGVcbiAgICA6IGlzRnJpZW5kXG4gICAgPyBjb2xvcnMubWludFxuICAgIDogY29sb3JzLmRhcmtQdXJwbGU7XG4gIGNvbnN0IHVzZXJJY29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+O1xuXG4gIHJldHVybiAoXG4gICAgPEF2YXRhclN0eWxlIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn0+XG4gICAgICB7dXJsID8gKFxuICAgICAgICA8SW1hZ2Ugc3JjPXt1cmx9IGFsdD1cIuuMgO2ZlCDsg4HrjIAg7IKs7KeEXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBdmFyYXJFbXB5U3R5bGU+e3VzZXJJY29ufTwvQXZhcmFyRW1weVN0eWxlPlxuICAgICAgKX1cbiAgICA8L0F2YXRhclN0eWxlPlxuICApO1xufVxuXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICBoaWRlTGluZTogZmFsc2UsXG4gIGlzRnJpZW5kOiBmYWxzZSxcbn07XG5cbmNvbnN0IEF2YXRhclN0eWxlID0gc3R5bGVkLmRpdjx7IGJvcmRlckNvbG9yOiBzdHJpbmcgfT5gXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICR7KHsgYm9yZGVyQ29sb3IgfSkgPT4gYm9yZGVyQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5jb25zdCBBdmFyYXJFbXB5U3R5bGUgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmxpZ2h0R3JheX07XG4gIHN2ZyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/avatar/Avatar.tsx\n");

/***/ })

});