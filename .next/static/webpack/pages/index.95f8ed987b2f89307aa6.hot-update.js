/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/feature/room/RoomSlice.tsx":
/*!****************************************!*\
  !*** ./src/feature/room/RoomSlice.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomSlice\": function() { return /* binding */ roomSlice; },\n/* harmony export */   \"roomAction\": function() { return /* binding */ roomAction; },\n/* harmony export */   \"roomReducer\": function() { return /* binding */ roomReducer; },\n/* harmony export */   \"roomSelector\": function() { return /* binding */ roomSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialRoomState = {\n  isLoaded: false,\n  roomInfo: null,\n  chatData: []\n};\nvar roomSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"roomSlice\",\n  initialState: initialRoomState,\n  reducers: {\n    getChatDataId: function getChatDataId(state, action) {\n      var _data$filter;\n\n      var roomId = action.payload.roomId;\n      var unReadRoom = (_data$filter = data.filter(function (room) {\n        return room.unReadChatLength > 0;\n      })) === null || _data$filter === void 0 ? void 0 : _data$filter.length; // state.hasRoom = data.length > 0;\n      // state.unReadRoom = unReadRoom || 0;\n      // state.roomList = data;\n      // state.onSearch = onSearch;\n    }\n  }\n});\nvar roomAction = roomSlice.actions;\nvar roomReducer = roomSlice.reducer;\n\nvar selectIsLoad = function selectIsLoad(state) {\n  return state.roomReducer.isLoaded;\n};\n\nvar roomSelector = {\n  selectIsLoad: selectIsLoad\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4PzhkOGQiXSwibmFtZXMiOlsiaW5pdGlhbFJvb21TdGF0ZSIsImlzTG9hZGVkIiwicm9vbUluZm8iLCJjaGF0RGF0YSIsInJvb21TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiZ2V0Q2hhdERhdGFJZCIsInN0YXRlIiwiYWN0aW9uIiwicm9vbUlkIiwicGF5bG9hZCIsInVuUmVhZFJvb20iLCJkYXRhIiwiZmlsdGVyIiwicm9vbSIsInVuUmVhZENoYXRMZW5ndGgiLCJsZW5ndGgiLCJyb29tQWN0aW9uIiwiYWN0aW9ucyIsInJvb21SZWR1Y2VyIiwicmVkdWNlciIsInNlbGVjdElzTG9hZCIsInJvb21TZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxnQkFBcUIsR0FBRztBQUM1QkMsVUFBUSxFQUFFLEtBRGtCO0FBRTVCQyxVQUFRLEVBQUUsSUFGa0I7QUFHNUJDLFVBQVEsRUFBRTtBQUhrQixDQUE5QjtBQU1PLElBQU1DLFNBQVMsR0FBR0MsNkRBQVcsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFLFdBRDZCO0FBRW5DQyxjQUFZLEVBQUVQLGdCQUZxQjtBQUduQ1EsVUFBUSxFQUFFO0FBQ1JDLGlCQURRLHlCQUNNQyxLQUROLEVBQ2FDLE1BRGIsRUFDd0Q7QUFBQTs7QUFBQSxVQUN0REMsTUFEc0QsR0FDM0NELE1BQU0sQ0FBQ0UsT0FEb0MsQ0FDdERELE1BRHNEO0FBRzlELFVBQU1FLFVBQVUsbUJBQUdDLElBQUksQ0FBQ0MsTUFBTCxDQUNqQixVQUFDQyxJQUFEO0FBQUEsZUFBcUJBLElBQUksQ0FBQ0MsZ0JBQUwsR0FBd0IsQ0FBN0M7QUFBQSxPQURpQixDQUFILGlEQUFHLGFBRWhCQyxNQUZILENBSDhELENBTzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFaTztBQUh5QixDQUFELENBQTdCO0FBbUJBLElBQU1DLFVBQVUsR0FBR2hCLFNBQVMsQ0FBQ2lCLE9BQTdCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHbEIsU0FBUyxDQUFDbUIsT0FBOUI7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsS0FBRDtBQUFBLFNBQXNCQSxLQUFLLENBQUNZLFdBQU4sQ0FBa0JyQixRQUF4QztBQUFBLENBQXJCOztBQUVPLElBQU13QixZQUFZLEdBQUc7QUFDMUJELGNBQVksRUFBWkE7QUFEMEIsQ0FBckIiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZS9yb29tL1Jvb21TbGljZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyByb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcblxuY29uc3QgaW5pdGlhbFJvb21TdGF0ZTogYW55ID0ge1xuICBpc0xvYWRlZDogZmFsc2UsXG4gIHJvb21JbmZvOiBudWxsLFxuICBjaGF0RGF0YTogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vbVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInJvb21TbGljZVwiLFxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxSb29tU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgZ2V0Q2hhdERhdGFJZChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcm9vbUlkOiBzdHJpbmcgfT4pIHtcbiAgICAgIGNvbnN0IHsgcm9vbUlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3QgdW5SZWFkUm9vbSA9IGRhdGEuZmlsdGVyKFxuICAgICAgICAocm9vbTogSVJvb21MaXN0KSA9PiByb29tLnVuUmVhZENoYXRMZW5ndGggPiAwXG4gICAgICApPy5sZW5ndGg7XG5cbiAgICAgIC8vIHN0YXRlLmhhc1Jvb20gPSBkYXRhLmxlbmd0aCA+IDA7XG4gICAgICAvLyBzdGF0ZS51blJlYWRSb29tID0gdW5SZWFkUm9vbSB8fCAwO1xuICAgICAgLy8gc3RhdGUucm9vbUxpc3QgPSBkYXRhO1xuICAgICAgLy8gc3RhdGUub25TZWFyY2ggPSBvblNlYXJjaDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCByb29tQWN0aW9uID0gcm9vbVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgY29uc3Qgcm9vbVJlZHVjZXIgPSByb29tU2xpY2UucmVkdWNlcjtcblxuY29uc3Qgc2VsZWN0SXNMb2FkID0gKHN0YXRlOiByb290U3RhdGUpID0+IHN0YXRlLnJvb21SZWR1Y2VyLmlzTG9hZGVkO1xuXG5leHBvcnQgY29uc3Qgcm9vbVNlbGVjdG9yID0ge1xuICBzZWxlY3RJc0xvYWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/feature/room/RoomSlice.tsx\n");

/***/ })

});