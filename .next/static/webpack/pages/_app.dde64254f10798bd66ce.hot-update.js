/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/avatar/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/avatar/Avatar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Avatar\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _constant_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constant/color */ \"./src/constant/color.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/components/avatar/Avatar.tsx\";\n\nfunction _templateObject2() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \", \";\\n  svg {\\n    font-size: 24px;\\n    color: \", \";\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  overflow: hidden;\\n  display: block;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n  border: 2px solid \", \";\\n  background-color: \", \";\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction Avatar(_ref) {\n  var hideLine = _ref.hideLine,\n      isFriend = _ref.isFriend,\n      url = _ref.url;\n  var borderColor = hideLine ? _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.lrightGray : isFriend ? _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.mint : _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.darkPurple;\n\n  var userIcon = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUser\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 20\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvatarStyle, {\n    borderColor: borderColor,\n    children: url ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n      src: url,\n      alt: \"\\uB300\\uD654 \\uC0C1\\uB300 \\uC0AC\\uC9C4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AvararEmpyStyle, {\n      children: userIcon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n_c = Avatar;\nAvatar.defaultProps = {\n  hideLine: false,\n  isFriend: false\n};\nvar AvatarStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject(), function (_ref2) {\n  var borderColor = _ref2.borderColor;\n  return borderColor;\n}, _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.white);\n_c2 = AvatarStyle;\nvar AvararEmpyStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.span(_templateObject2(), _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.lightGray, _constant_color__WEBPACK_IMPORTED_MODULE_6__.default.white);\n_c3 = AvararEmpyStyle;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c2, \"AvatarStyle\");\n$RefreshReg$(_c3, \"AvararEmpyStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXZhdGFyL0F2YXRhci50c3g/ZWM0ZiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJoaWRlTGluZSIsImlzRnJpZW5kIiwidXJsIiwiYm9yZGVyQ29sb3IiLCJjb2xvcnMiLCJ1c2VySWNvbiIsImZhVXNlciIsImRlZmF1bHRQcm9wcyIsIkF2YXRhclN0eWxlIiwic3R5bGVkIiwiQXZhcmFyRW1weVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sU0FBU0EsTUFBVCxPQUF3RTtBQUFBLE1BQXREQyxRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLEdBQWtDLFFBQWxDQSxHQUFrQztBQUM3RSxNQUFNQyxXQUFXLEdBQUdILFFBQVEsR0FDeEJJLCtEQUR3QixHQUV4QkgsUUFBUSxHQUNSRyx5REFEUSxHQUVSQSwrREFKSjs7QUFLQSxNQUFNQyxRQUFRLGdCQUFHLDhEQUFDLDJFQUFEO0FBQWlCLFFBQUksRUFBRUMscUVBQU1BO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBakI7O0FBRUEsc0JBQ0UsOERBQUMsV0FBRDtBQUFhLGVBQVcsRUFBRUgsV0FBMUI7QUFBQSxjQUNHRCxHQUFHLGdCQUNGLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQSxHQUFaO0FBQWlCLFNBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZ0JBR0YsOERBQUMsZUFBRDtBQUFBLGdCQUFrQkc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0tBakJlTixNO0FBbUJoQkEsTUFBTSxDQUFDUSxZQUFQLEdBQXNCO0FBQ3BCUCxVQUFRLEVBQUUsS0FEVTtBQUVwQkMsVUFBUSxFQUFFO0FBRlUsQ0FBdEI7QUFLQSxJQUFNTyxXQUFXLEdBQUdDLHdEQUFILG9CQU1LO0FBQUEsTUFBR04sV0FBSCxTQUFHQSxXQUFIO0FBQUEsU0FBcUJBLFdBQXJCO0FBQUEsQ0FOTCxFQU9LQywwREFQTCxDQUFqQjtNQUFNSSxXO0FBV04sSUFBTUUsZUFBZSxHQUFHRCx5REFBSCxxQkFNQ0wsOERBTkQsRUFTUkEsMERBVFEsQ0FBckI7TUFBTU0sZSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2F2YXRhci9BdmF0YXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXZhdGFyUHJvcHMge1xuICBoaWRlTGluZTogYm9vbGVhbjtcbiAgaXNGcmllbmQ6IGJvb2xlYW47XG4gIHVybD86IHsgc3JjOiBzdHJpbmc7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyBibHVyRGF0YVVSTD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXZhdGFyKHsgaGlkZUxpbmUsIGlzRnJpZW5kLCB1cmwgfTogQXZhdGFyUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBib3JkZXJDb2xvciA9IGhpZGVMaW5lXG4gICAgPyBjb2xvcnMubHJpZ2h0R3JheVxuICAgIDogaXNGcmllbmRcbiAgICA/IGNvbG9ycy5taW50XG4gICAgOiBjb2xvcnMuZGFya1B1cnBsZTtcbiAgY29uc3QgdXNlckljb24gPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz47XG5cbiAgcmV0dXJuIChcbiAgICA8QXZhdGFyU3R5bGUgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yfT5cbiAgICAgIHt1cmwgPyAoXG4gICAgICAgIDxJbWFnZSBzcmM9e3VybH0gYWx0PVwi64yA7ZmUIOyDgeuMgCDsgqzsp4RcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEF2YXJhckVtcHlTdHlsZT57dXNlckljb259PC9BdmFyYXJFbXB5U3R5bGU+XG4gICAgICApfVxuICAgIDwvQXZhdGFyU3R5bGU+XG4gICk7XG59XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGVMaW5lOiBmYWxzZSxcbiAgaXNGcmllbmQ6IGZhbHNlLFxufTtcblxuY29uc3QgQXZhdGFyU3R5bGUgPSBzdHlsZWQuZGl2PHsgYm9yZGVyQ29sb3I6IHN0cmluZyB9PmBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgJHsoeyBib3JkZXJDb2xvciB9KSA9PiBib3JkZXJDb2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG5cbmNvbnN0IEF2YXJhckVtcHlTdHlsZSA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHRHcmF5fTtcbiAgc3ZnIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/avatar/Avatar.tsx\n");

/***/ })

});