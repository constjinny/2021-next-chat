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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomSlice\": function() { return /* binding */ roomSlice; },\n/* harmony export */   \"roomAction\": function() { return /* binding */ roomAction; },\n/* harmony export */   \"roomReducer\": function() { return /* binding */ roomReducer; },\n/* harmony export */   \"roomSelector\": function() { return /* binding */ roomSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialRoomState = {\n  roomInfo: null,\n  chatData: []\n};\nvar roomSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"roomSlice\",\n  initialState: initialRoomState,\n  reducers: {// setChatDataId(state, action: PayloadAction<{ roomId: string }>) {\n    //   const { roomId } = action.payload;\n    //   const unReadRoom = data.filter(\n    //     (room: IRoomList) => room.unReadChatLength > 0\n    //   )?.length;\n    //   state.hasRoom = data.length > 0;\n    //   state.unReadRoom = unReadRoom || 0;\n    //   state.roomList = data;\n    //   state.onSearch = onSearch;\n    // },\n  }\n});\nvar roomAction = roomSlice.actions;\nvar roomReducer = roomSlice.reducer;\n\nvar selectIsLoad = function selectIsLoad(state) {\n  return state.roomReducer.isLoaded;\n};\n\nvar roomSelector = {\n  selectIsLoad: selectIsLoad\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4PzhkOGQiXSwibmFtZXMiOlsiaW5pdGlhbFJvb21TdGF0ZSIsInJvb21JbmZvIiwiY2hhdERhdGEiLCJyb29tU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsInJvb21BY3Rpb24iLCJhY3Rpb25zIiwicm9vbVJlZHVjZXIiLCJyZWR1Y2VyIiwic2VsZWN0SXNMb2FkIiwic3RhdGUiLCJpc0xvYWRlZCIsInJvb21TZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFJQSxJQUFNQSxnQkFBZ0MsR0FBRztBQUN2Q0MsVUFBUSxFQUFFLElBRDZCO0FBRXZDQyxVQUFRLEVBQUU7QUFGNkIsQ0FBekM7QUFLTyxJQUFNQyxTQUFTLEdBQUdDLDZEQUFXLENBQUM7QUFDbkNDLE1BQUksRUFBRSxXQUQ2QjtBQUVuQ0MsY0FBWSxFQUFFTixnQkFGcUI7QUFHbkNPLFVBQVEsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7QUFIeUIsQ0FBRCxDQUE3QjtBQWlCQSxJQUFNQyxVQUFVLEdBQUdMLFNBQVMsQ0FBQ00sT0FBN0I7QUFDQSxJQUFNQyxXQUFXLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBOUI7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQXNCQSxLQUFLLENBQUNILFdBQU4sQ0FBa0JJLFFBQXhDO0FBQUEsQ0FBckI7O0FBRU8sSUFBTUMsWUFBWSxHQUFHO0FBQzFCSCxjQUFZLEVBQVpBO0FBRDBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgcm9vdFN0YXRlIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XG5pbXBvcnQgeyBJQ2hhdFJvb21TdGF0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsUm9vbVN0YXRlOiBJQ2hhdFJvb21TdGF0ZSA9IHtcbiAgcm9vbUluZm86IG51bGwsXG4gIGNoYXREYXRhOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCByb29tU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicm9vbVNsaWNlXCIsXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbFJvb21TdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvLyBzZXRDaGF0RGF0YUlkKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyByb29tSWQ6IHN0cmluZyB9Pikge1xuICAgIC8vICAgY29uc3QgeyByb29tSWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIC8vICAgY29uc3QgdW5SZWFkUm9vbSA9IGRhdGEuZmlsdGVyKFxuICAgIC8vICAgICAocm9vbTogSVJvb21MaXN0KSA9PiByb29tLnVuUmVhZENoYXRMZW5ndGggPiAwXG4gICAgLy8gICApPy5sZW5ndGg7XG4gICAgLy8gICBzdGF0ZS5oYXNSb29tID0gZGF0YS5sZW5ndGggPiAwO1xuICAgIC8vICAgc3RhdGUudW5SZWFkUm9vbSA9IHVuUmVhZFJvb20gfHwgMDtcbiAgICAvLyAgIHN0YXRlLnJvb21MaXN0ID0gZGF0YTtcbiAgICAvLyAgIHN0YXRlLm9uU2VhcmNoID0gb25TZWFyY2g7XG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgcm9vbUFjdGlvbiA9IHJvb21TbGljZS5hY3Rpb25zO1xuZXhwb3J0IGNvbnN0IHJvb21SZWR1Y2VyID0gcm9vbVNsaWNlLnJlZHVjZXI7XG5cbmNvbnN0IHNlbGVjdElzTG9hZCA9IChzdGF0ZTogcm9vdFN0YXRlKSA9PiBzdGF0ZS5yb29tUmVkdWNlci5pc0xvYWRlZDtcblxuZXhwb3J0IGNvbnN0IHJvb21TZWxlY3RvciA9IHtcbiAgc2VsZWN0SXNMb2FkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/feature/room/RoomSlice.tsx\n");

/***/ })

});