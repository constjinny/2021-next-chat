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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomSlice\": function() { return /* binding */ roomSlice; },\n/* harmony export */   \"roomAction\": function() { return /* binding */ roomAction; },\n/* harmony export */   \"roomReducer\": function() { return /* binding */ roomReducer; },\n/* harmony export */   \"roomSelector\": function() { return /* binding */ roomSelector; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialRoomState = {\n  hasRoomData: false,\n  roomInfo: null,\n  chatData: []\n};\nvar roomSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"roomSlice\",\n  initialState: initialRoomState,\n  reducers: {\n    setRoomData: function setRoomData(state, action) {\n      var data = action.payload.data;\n      state.hasRoomData = true;\n      state.roomInfo = data.roomInfo;\n      state.chatData = data.chatData;\n    }\n  }\n});\nvar roomAction = roomSlice.actions;\nvar roomReducer = roomSlice.reducer;\n\nvar selectHasRoomData = function selectHasRoomData(state) {\n  return state.roomReducer.hasRoomData;\n};\n\nvar selectRoomInfo = function selectRoomInfo(state) {\n  return state.roomReducer.roomInfo;\n};\n\nvar selectRoomId = function selectRoomId(state) {\n  var _state$roomReducer$ro;\n\n  return (_state$roomReducer$ro = state.roomReducer.roomInfo) === null || _state$roomReducer$ro === void 0 ? void 0 : _state$roomReducer$ro.roomId;\n};\n\nvar selectChatData = function selectChatData(state) {\n  return state.roomReducer.chatData;\n};\n\nvar roomSelector = {\n  selectHasRoomData: selectHasRoomData,\n  selectRoomInfo: selectRoomInfo,\n  selectRoomId: selectRoomId,\n  selectChatData: selectChatData\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tU2xpY2UudHN4PzhkOGQiXSwibmFtZXMiOlsiaW5pdGlhbFJvb21TdGF0ZSIsImhhc1Jvb21EYXRhIiwicm9vbUluZm8iLCJjaGF0RGF0YSIsInJvb21TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0Um9vbURhdGEiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwicm9vbUFjdGlvbiIsImFjdGlvbnMiLCJyb29tUmVkdWNlciIsInJlZHVjZXIiLCJzZWxlY3RIYXNSb29tRGF0YSIsInNlbGVjdFJvb21JbmZvIiwic2VsZWN0Um9vbUlkIiwicm9vbUlkIiwic2VsZWN0Q2hhdERhdGEiLCJyb29tU2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBS0EsSUFBTUEsZ0JBQWdDLEdBQUc7QUFDdkNDLGFBQVcsRUFBRSxLQUQwQjtBQUV2Q0MsVUFBUSxFQUFFLElBRjZCO0FBR3ZDQyxVQUFRLEVBQUU7QUFINkIsQ0FBekM7QUFNTyxJQUFNQyxTQUFTLEdBQUdDLDZEQUFXLENBQUM7QUFDbkNDLE1BQUksRUFBRSxXQUQ2QjtBQUVuQ0MsY0FBWSxFQUFFUCxnQkFGcUI7QUFHbkNRLFVBQVEsRUFBRTtBQUNSQyxlQURRLHVCQUNJQyxLQURKLEVBQ1dDLE1BRFgsRUFDdUQ7QUFBQSxVQUNyREMsSUFEcUQsR0FDNUNELE1BQU0sQ0FBQ0UsT0FEcUMsQ0FDckRELElBRHFEO0FBRzdERixXQUFLLENBQUNULFdBQU4sR0FBb0IsSUFBcEI7QUFDQVMsV0FBSyxDQUFDUixRQUFOLEdBQWlCVSxJQUFJLENBQUNWLFFBQXRCO0FBQ0FRLFdBQUssQ0FBQ1AsUUFBTixHQUFpQlMsSUFBSSxDQUFDVCxRQUF0QjtBQUNEO0FBUE87QUFIeUIsQ0FBRCxDQUE3QjtBQWNBLElBQU1XLFVBQVUsR0FBR1YsU0FBUyxDQUFDVyxPQUE3QjtBQUNBLElBQU1DLFdBQVcsR0FBR1osU0FBUyxDQUFDYSxPQUE5Qjs7QUFFUCxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNSLEtBQUQ7QUFBQSxTQUFzQkEsS0FBSyxDQUFDTSxXQUFOLENBQWtCZixXQUF4QztBQUFBLENBQTFCOztBQUNBLElBQU1rQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULEtBQUQ7QUFBQSxTQUFzQkEsS0FBSyxDQUFDTSxXQUFOLENBQWtCZCxRQUF4QztBQUFBLENBQXZCOztBQUNBLElBQU1rQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVixLQUFEO0FBQUE7O0FBQUEsa0NBQXNCQSxLQUFLLENBQUNNLFdBQU4sQ0FBa0JkLFFBQXhDLDBEQUFzQixzQkFBNEJtQixNQUFsRDtBQUFBLENBQXJCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ1osS0FBRDtBQUFBLFNBQXNCQSxLQUFLLENBQUNNLFdBQU4sQ0FBa0JiLFFBQXhDO0FBQUEsQ0FBdkI7O0FBRU8sSUFBTW9CLFlBQVksR0FBRztBQUMxQkwsbUJBQWlCLEVBQWpCQSxpQkFEMEI7QUFFMUJDLGdCQUFjLEVBQWRBLGNBRjBCO0FBRzFCQyxjQUFZLEVBQVpBLFlBSDBCO0FBSTFCRSxnQkFBYyxFQUFkQTtBQUowQixDQUFyQiIsImZpbGUiOiIuL3NyYy9mZWF0dXJlL3Jvb20vUm9vbVNsaWNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xuXG5pbXBvcnQgeyBJQ2hhdFJvb21TdGF0ZSwgSUNoYXRSb29tIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IGluaXRpYWxSb29tU3RhdGU6IElDaGF0Um9vbVN0YXRlID0ge1xuICBoYXNSb29tRGF0YTogZmFsc2UsXG4gIHJvb21JbmZvOiBudWxsLFxuICBjaGF0RGF0YTogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgcm9vbVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInJvb21TbGljZVwiLFxuICBpbml0aWFsU3RhdGU6IGluaXRpYWxSb29tU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Um9vbURhdGEoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGRhdGE6IElDaGF0Um9vbSB9Pikge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgc3RhdGUuaGFzUm9vbURhdGEgPSB0cnVlO1xuICAgICAgc3RhdGUucm9vbUluZm8gPSBkYXRhLnJvb21JbmZvO1xuICAgICAgc3RhdGUuY2hhdERhdGEgPSBkYXRhLmNoYXREYXRhO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvb21BY3Rpb24gPSByb29tU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBjb25zdCByb29tUmVkdWNlciA9IHJvb21TbGljZS5yZWR1Y2VyO1xuXG5jb25zdCBzZWxlY3RIYXNSb29tRGF0YSA9IChzdGF0ZTogcm9vdFN0YXRlKSA9PiBzdGF0ZS5yb29tUmVkdWNlci5oYXNSb29tRGF0YTtcbmNvbnN0IHNlbGVjdFJvb21JbmZvID0gKHN0YXRlOiByb290U3RhdGUpID0+IHN0YXRlLnJvb21SZWR1Y2VyLnJvb21JbmZvO1xuY29uc3Qgc2VsZWN0Um9vbUlkID0gKHN0YXRlOiByb290U3RhdGUpID0+IHN0YXRlLnJvb21SZWR1Y2VyLnJvb21JbmZvPy5yb29tSWQ7XG5jb25zdCBzZWxlY3RDaGF0RGF0YSA9IChzdGF0ZTogcm9vdFN0YXRlKSA9PiBzdGF0ZS5yb29tUmVkdWNlci5jaGF0RGF0YTtcblxuZXhwb3J0IGNvbnN0IHJvb21TZWxlY3RvciA9IHtcbiAgc2VsZWN0SGFzUm9vbURhdGEsXG4gIHNlbGVjdFJvb21JbmZvLFxuICBzZWxlY3RSb29tSWQsXG4gIHNlbGVjdENoYXREYXRhLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/feature/room/RoomSlice.tsx\n");

/***/ })

});