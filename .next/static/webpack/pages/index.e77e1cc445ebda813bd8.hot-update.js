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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomSlice\": function() { return /* binding */ roomSlice; },\n/* harmony export */   \"roomAction\": function() { return /* binding */ roomAction; },\n/* harmony export */   \"roomReducer\": function() { return /* binding */ roomReducer; },\n/* harmony export */   \"roomSelector\": function() { return /* binding */ roomSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialRoomState = {\n  isLoaded: false,\n  roomInfo: null,\n  chatData: []\n};\nvar roomSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"roomSlice\",\n  initialState: initialRoomState,\n  reducers: {}\n});\nvar roomAction = roomSlice.actions;\nvar roomReducer = roomSlice.reducer;\n\nvar selectIsLoad = function selectIsLoad(state) {\n  return state.roomReducer.isLoaded;\n};\n\nvar roomSelector = {\n  selectIsLoad: selectIsLoad\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4PzhkOGQiXSwibmFtZXMiOlsiaW5pdGlhbFJvb21TdGF0ZSIsImlzTG9hZGVkIiwicm9vbUluZm8iLCJjaGF0RGF0YSIsInJvb21TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwicm9vbUFjdGlvbiIsImFjdGlvbnMiLCJyb29tUmVkdWNlciIsInJlZHVjZXIiLCJzZWxlY3RJc0xvYWQiLCJzdGF0ZSIsInJvb21TZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxnQkFBcUIsR0FBRztBQUM1QkMsVUFBUSxFQUFFLEtBRGtCO0FBRTVCQyxVQUFRLEVBQUUsSUFGa0I7QUFHNUJDLFVBQVEsRUFBRTtBQUhrQixDQUE5QjtBQU1PLElBQU1DLFNBQVMsR0FBR0MsNkRBQVcsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFLFdBRDZCO0FBRW5DQyxjQUFZLEVBQUVQLGdCQUZxQjtBQUduQ1EsVUFBUSxFQUFFO0FBSHlCLENBQUQsQ0FBN0I7QUFNQSxJQUFNQyxVQUFVLEdBQUdMLFNBQVMsQ0FBQ00sT0FBN0I7QUFDQSxJQUFNQyxXQUFXLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBOUI7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQXNCQSxLQUFLLENBQUNILFdBQU4sQ0FBa0JWLFFBQXhDO0FBQUEsQ0FBckI7O0FBRU8sSUFBTWMsWUFBWSxHQUFHO0FBQzFCRixjQUFZLEVBQVpBO0FBRDBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XG5cbmNvbnN0IGluaXRpYWxSb29tU3RhdGU6IGFueSA9IHtcbiAgaXNMb2FkZWQ6IGZhbHNlLFxuICByb29tSW5mbzogbnVsbCxcbiAgY2hhdERhdGE6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHJvb21TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJyb29tU2xpY2VcIixcbiAgaW5pdGlhbFN0YXRlOiBpbml0aWFsUm9vbVN0YXRlLFxuICByZWR1Y2Vyczoge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvb21BY3Rpb24gPSByb29tU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCByb29tUmVkdWNlciA9IHJvb21TbGljZS5yZWR1Y2VyO1xuXG5jb25zdCBzZWxlY3RJc0xvYWQgPSAoc3RhdGU6IHJvb3RTdGF0ZSkgPT4gc3RhdGUucm9vbVJlZHVjZXIuaXNMb2FkZWQ7XG5cbmV4cG9ydCBjb25zdCByb29tU2VsZWN0b3IgPSB7XG4gIHNlbGVjdElzTG9hZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/feature/room/RoomSlice.tsx\n");

/***/ })

});