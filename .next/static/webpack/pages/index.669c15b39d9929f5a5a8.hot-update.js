/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/feature/room/RoomPage.tsx":
/*!***************************************!*\
  !*** ./src/feature/room/RoomPage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RoomPage\": function() { return /* binding */ RoomPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _data_data_sample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/data.sample */ \"./src/data/data.sample.ts\");\n/* harmony import */ var _RoomTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RoomTop */ \"./src/feature/room/RoomTop.tsx\");\n/* harmony import */ var _ChatList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatList */ \"./src/feature/room/ChatList.tsx\");\n/* harmony import */ var _RoomSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RoomSlice */ \"./src/feature/room/RoomSlice.tsx\");\n/* harmony import */ var _RoomList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RoomList */ \"./src/feature/RoomList/index.ts\");\n/* harmony import */ var _components_noData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/noData */ \"./src/components/noData/index.ts\");\n/* harmony import */ var _api_api_sample__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/api.sample */ \"./src/api/api.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jinny/Desktop/j/2021-next-chat-app/src/feature/room/RoomPage.tsx\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  height: calc(100% - 101px);\\n  border-left: 1px solid #cccccc;\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  height: 100%;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n // TODO: 제거\n\n\n\n\n\n\n\nfunction RoomPage() {\n  _s();\n\n  var dispatch = react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch();\n  var hasRoomData = react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector(_RoomSlice__WEBPACK_IMPORTED_MODULE_10__.roomSelector.selectRoomInfo);\n  var roomId = react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector(_RoomSlice__WEBPACK_IMPORTED_MODULE_10__.roomSelector.selectRoomId);\n\n  var getRoomListData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var data, pasedData;\n      return _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_api_sample__WEBPACK_IMPORTED_MODULE_13__.chatAPI.getChatData();\n\n            case 2:\n              data = _context.sent;\n\n              if (data) {\n                pasedData = (0,_RoomList__WEBPACK_IMPORTED_MODULE_11__.roomListParser)(_data_data_sample__WEBPACK_IMPORTED_MODULE_7__.default.authUser.id, data);\n                dispatch(_RoomList__WEBPACK_IMPORTED_MODULE_11__.roomListAction.setRoomListData({\n                  data: pasedData\n                }));\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getRoomListData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var updatVisitTime = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var data, pasedData;\n    return _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!roomId) {\n              _context2.next = 5;\n              break;\n            }\n\n            _context2.next = 3;\n            return _api_api_sample__WEBPACK_IMPORTED_MODULE_13__.chatAPI.updateRoomVisitTime(roomId);\n\n          case 3:\n            data = _context2.sent;\n\n            if (data) {\n              pasedData = (0,_RoomList__WEBPACK_IMPORTED_MODULE_11__.roomDataParser)(_data_data_sample__WEBPACK_IMPORTED_MODULE_7__.default.authUser.id, data);\n              getRoomListData();\n              dispatch(_RoomSlice__WEBPACK_IMPORTED_MODULE_10__.roomAction.setRoomData({\n                data: pasedData\n              }));\n            }\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), [dispatch, roomId, getRoomListData]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    updatVisitTime();\n  }, [updatVisitTime]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomWrapStyle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RoomTop__WEBPACK_IMPORTED_MODULE_8__.RoomTop, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomInnerStyle, {\n      children: hasRoomData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChatList__WEBPACK_IMPORTED_MODULE_9__.ChatList, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 24\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_noData__WEBPACK_IMPORTED_MODULE_12__.NoData, {\n        desc: \"\\uC120\\uD0DD\\uD55C \\uB300\\uD654\\uAC00 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 39\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RoomPage, \"/3b80lkk30SGuuGTzOv5y459Hb0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];\n});\n\n_c = RoomPage;\nvar RoomWrapStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject());\n_c2 = RoomWrapStyle;\nvar RoomInnerStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__.default.div(_templateObject2());\n_c3 = RoomInnerStyle;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"RoomPage\");\n$RefreshReg$(_c2, \"RoomWrapStyle\");\n$RefreshReg$(_c3, \"RoomInnerStyle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tUGFnZS50c3g/MzU3NSJdLCJuYW1lcyI6WyJSb29tUGFnZSIsImRpc3BhdGNoIiwiUmVkdXgiLCJoYXNSb29tRGF0YSIsInJvb21TZWxlY3RvciIsInJvb21JZCIsImdldFJvb21MaXN0RGF0YSIsImNoYXRBUEkiLCJkYXRhIiwicGFzZWREYXRhIiwicm9vbUxpc3RQYXJzZXIiLCJkdW1teURhdGEiLCJyb29tTGlzdEFjdGlvbiIsInVwZGF0VmlzaXRUaW1lIiwidXNlQ2FsbGJhY2siLCJyb29tRGF0YVBhcnNlciIsInJvb21BY3Rpb24iLCJ1c2VFZmZlY3QiLCJSb29tV3JhcFN0eWxlIiwic3R5bGVkIiwiUm9vbUlubmVyU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBQ2dEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULEdBQWtDO0FBQUE7O0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQUEsRUFBakI7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFBLENBQWtCRSxvRUFBbEIsQ0FBcEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdILG9EQUFBLENBQWtCRSxrRUFBbEIsQ0FBZjs7QUFFQSxNQUFNRSxlQUFlO0FBQUEscVNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSEMsaUVBQUEsRUFERzs7QUFBQTtBQUNoQkMsa0JBRGdCOztBQUV0QixrQkFBSUEsSUFBSixFQUFVO0FBQ0ZDLHlCQURFLEdBQ1VDLDBEQUFjLENBQUNDLGtFQUFELEVBQXdCSCxJQUF4QixDQUR4QjtBQUdSUCx3QkFBUSxDQUFDVyxzRUFBQSxDQUErQjtBQUFFSixzQkFBSSxFQUFFQztBQUFSLGlCQUEvQixDQUFELENBQVI7QUFDRDs7QUFOcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZkgsZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFTQSxNQUFNTyxjQUFjLEdBQUdDLGtEQUFXLHFTQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUM3QlQsTUFENkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFFWkUseUVBQUEsQ0FBNEJGLE1BQTVCLENBRlk7O0FBQUE7QUFFekJHLGdCQUZ5Qjs7QUFHL0IsZ0JBQUlBLElBQUosRUFBVTtBQUNGQyx1QkFERSxHQUNVTSwwREFBYyxDQUFDSixrRUFBRCxFQUF3QkgsSUFBeEIsQ0FEeEI7QUFHUkYsNkJBQWU7QUFDZkwsc0JBQVEsQ0FDTmUsK0RBQUEsQ0FBdUI7QUFDckJSLG9CQUFJLEVBQUVDO0FBRGUsZUFBdkIsQ0FETSxDQUFSO0FBS0Q7O0FBWjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFjL0IsQ0FBQ1IsUUFBRCxFQUFXSSxNQUFYLEVBQW1CQyxlQUFuQixDQWQrQixDQUFsQztBQWdCQVcsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGtCQUFjO0FBQ2YsR0FGUSxFQUVOLENBQUNBLGNBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsYUFBRDtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLDhEQUFDLGNBQUQ7QUFBQSxnQkFDR1YsV0FBVyxnQkFBRyw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQWtCLDhEQUFDLHVEQUFEO0FBQVEsWUFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0EzQ2VILFE7VUFDR0Usb0QsRUFDR0Esb0QsRUFDTEEsb0Q7OztLQUhERixRO0FBNkNoQixJQUFNa0IsYUFBYSxHQUFHQyx3REFBSCxtQkFBbkI7TUFBTUQsYTtBQUlOLElBQU1FLGNBQWMsR0FBR0Qsd0RBQUgsb0JBQXBCO01BQU1DLGMiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZS9yb29tL1Jvb21QYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVkdXggZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBkdW1teURhdGEgZnJvbSBcIi4uLy4uL2RhdGEvZGF0YS5zYW1wbGVcIjsgLy8gVE9ETzog7KCc6rGwXG5cbmltcG9ydCB7IFJvb21Ub3AgfSBmcm9tIFwiLi9Sb29tVG9wXCI7XG5pbXBvcnQgeyBDaGF0TGlzdCB9IGZyb20gXCIuL0NoYXRMaXN0XCI7XG5pbXBvcnQgeyByb29tU2VsZWN0b3IsIHJvb21BY3Rpb24gfSBmcm9tIFwiLi9Sb29tU2xpY2VcIjtcbmltcG9ydCB7IHJvb21MaXN0UGFyc2VyLCByb29tRGF0YVBhcnNlciwgcm9vbUxpc3RBY3Rpb24gfSBmcm9tIFwiLi4vUm9vbUxpc3RcIjtcbmltcG9ydCB7IE5vRGF0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25vRGF0YVwiO1xuaW1wb3J0IHsgY2hhdEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpLnNhbXBsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vbVBhZ2UoKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWR1eC51c2VEaXNwYXRjaCgpO1xuICBjb25zdCBoYXNSb29tRGF0YSA9IFJlZHV4LnVzZVNlbGVjdG9yKHJvb21TZWxlY3Rvci5zZWxlY3RSb29tSW5mbyk7XG4gIGNvbnN0IHJvb21JZCA9IFJlZHV4LnVzZVNlbGVjdG9yKHJvb21TZWxlY3Rvci5zZWxlY3RSb29tSWQpO1xuXG4gIGNvbnN0IGdldFJvb21MaXN0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2hhdEFQSS5nZXRDaGF0RGF0YSgpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCBwYXNlZERhdGEgPSByb29tTGlzdFBhcnNlcihkdW1teURhdGEuYXV0aFVzZXIuaWQsIGRhdGEpO1xuXG4gICAgICBkaXNwYXRjaChyb29tTGlzdEFjdGlvbi5zZXRSb29tTGlzdERhdGEoeyBkYXRhOiBwYXNlZERhdGEgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdFZpc2l0VGltZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAocm9vbUlkKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2hhdEFQSS51cGRhdGVSb29tVmlzaXRUaW1lKHJvb21JZCk7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBwYXNlZERhdGEgPSByb29tRGF0YVBhcnNlcihkdW1teURhdGEuYXV0aFVzZXIuaWQsIGRhdGEpO1xuXG4gICAgICAgIGdldFJvb21MaXN0RGF0YSgpO1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICByb29tQWN0aW9uLnNldFJvb21EYXRhKHtcbiAgICAgICAgICAgIGRhdGE6IHBhc2VkRGF0YSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCByb29tSWQsIGdldFJvb21MaXN0RGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRWaXNpdFRpbWUoKTtcbiAgfSwgW3VwZGF0VmlzaXRUaW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um9vbVdyYXBTdHlsZT5cbiAgICAgIDxSb29tVG9wIC8+XG5cbiAgICAgIDxSb29tSW5uZXJTdHlsZT5cbiAgICAgICAge2hhc1Jvb21EYXRhID8gPENoYXRMaXN0IC8+IDogPE5vRGF0YSBkZXNjPVwi7ISg7YOd7ZWcIOuMgO2ZlOqwgCDsl4bsirXri4jri6QuXCIgLz59XG4gICAgICA8L1Jvb21Jbm5lclN0eWxlPlxuICAgIDwvUm9vbVdyYXBTdHlsZT5cbiAgKTtcbn1cblxuY29uc3QgUm9vbVdyYXBTdHlsZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IFJvb21Jbm5lclN0eWxlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDFweCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjY2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/feature/room/RoomPage.tsx\n");

/***/ })

});