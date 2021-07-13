/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/api/api.sample.ts":
/*!*******************************!*\
  !*** ./src/api/api.sample.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commAPI\": function() { return /* binding */ commAPI; },\n/* harmony export */   \"authAPI\": function() { return /* binding */ authAPI; },\n/* harmony export */   \"chatAPI\": function() { return /* binding */ chatAPI; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.sample */ \"./src/data/data.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar keyType;\n\n(function (keyType) {\n  keyType[\"auth\"] = \"AUTH\";\n  keyType[\"chat\"] = \"CHAT\";\n  keyType[\"friend\"] = \"FRIENDS\";\n})(keyType || (keyType = {}));\n\nvar getLoadData = function getLoadData() {\n  sessionStorage.setItem(keyType.auth, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.authUser));\n  sessionStorage.setItem(keyType.chat, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.chat));\n  sessionStorage.setItem(keyType.friend, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.friends));\n};\n\nvar getAuthData = function getAuthData() {\n  var getData = sessionStorage.getItem(keyType.auth);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getChatData = function getChatData(searchValue) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n\n    if (searchValue) {\n      var findChat = parsed.filter(function (chatData) {\n        return chatData.chat_list.some(function (chatListData) {\n          return chatListData.data.indexOf(searchValue) > -1;\n        });\n      });\n      return findChat;\n    } else {\n      return parsed;\n    }\n  }\n\n  return null;\n};\n\nvar getRoomData = function getRoomData(roomId) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findRoom = parsed.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n\n    if (findRoom) {\n      return findRoom[0];\n    }\n  }\n\n  return null;\n};\n\nvar updateRoomVisitTime = function updateRoomVisitTime(roomId) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var updateChatData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var room_members = roomData.room_members;\n        var updateRoomMembers = room_members.map(function (member) {\n          if (member.id === authUserId) {\n            return _objectSpread(_objectSpread({}, member), {}, {\n              last_visit_time: timeStamp\n            });\n          } else {\n            return member;\n          }\n        });\n        return _objectSpread(_objectSpread({}, room), {}, {\n          room_members: updateRoomMembers\n        });\n      } else {\n        return room;\n      }\n    });\n  }\n\n  return null;\n};\n\nvar addRoomNewChat = function addRoomNewChat(roomId, newChat) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var newChatData = {\n      user: parsedAuth,\n      data: newChat,\n      time: timeStamp\n    };\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var updateChatList = [].concat((0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(roomData.chat_list), [newChatData]);\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          chat_list: updateChatList\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar commAPI = {\n  getLoadData: getLoadData\n};\nvar authAPI = {\n  getAuthData: getAuthData\n};\nvar chatAPI = {\n  getChatData: getChatData,\n  getRoomData: getRoomData,\n  updateRoomVisitTime: updateRoomVisitTime,\n  addRoomNewChat: addRoomNewChat\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9hcGkuc2FtcGxlLnRzP2E4MjMiXSwibmFtZXMiOlsia2V5VHlwZSIsImdldExvYWREYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkdW1teURhdGEiLCJjaGF0IiwiZnJpZW5kIiwiZ2V0QXV0aERhdGEiLCJnZXREYXRhIiwiZ2V0SXRlbSIsInBhcnNlZCIsInBhcnNlIiwiZ2V0Q2hhdERhdGEiLCJzZWFyY2hWYWx1ZSIsImZpbmRDaGF0IiwiZmlsdGVyIiwiY2hhdERhdGEiLCJjaGF0X2xpc3QiLCJzb21lIiwiY2hhdExpc3REYXRhIiwiZGF0YSIsImluZGV4T2YiLCJnZXRSb29tRGF0YSIsInJvb21JZCIsImZpbmRSb29tIiwicm9vbURhdGEiLCJyb29tX2lkIiwidXBkYXRlUm9vbVZpc2l0VGltZSIsInRpbWVTdGFtcCIsImRheWpzIiwidmFsdWVPZiIsInBhcnNlZENoYXQiLCJwYXJzZWRBdXRoIiwiZ2V0QXV0aCIsInVwZGF0ZUNoYXREYXRhIiwibWFwIiwicm9vbV9tZW1iZXJzIiwidXBkYXRlUm9vbU1lbWJlcnMiLCJtZW1iZXIiLCJpZCIsImF1dGhVc2VySWQiLCJsYXN0X3Zpc2l0X3RpbWUiLCJyb29tIiwiYWRkUm9vbU5ld0NoYXQiLCJuZXdDaGF0IiwibmV3Q2hhdERhdGEiLCJ1c2VyIiwidGltZSIsInVwZGF0ZURhdGEiLCJ1cGRhdGVDaGF0TGlzdCIsInJlc3VsdERhdGEiLCJjb21tQVBJIiwiYXV0aEFQSSIsImNoYXRBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBR0tBLE87O1dBQUFBLE87QUFBQUEsUztBQUFBQSxTO0FBQUFBLFM7R0FBQUEsTyxLQUFBQSxPOztBQU1MLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLGdCQUFjLENBQUNDLE9BQWYsQ0FBdUJILE9BQU8s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QUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDVixRQUFELEVBQXdCO0FBQ3hELFVBQUlBLFFBQVEsQ0FBQ0MsT0FBVCxLQUFxQkgsTUFBekIsRUFBaUM7QUFDL0IsWUFBTTBCLGNBQWMseUpBQU94QixRQUFRLENBQUNSLFNBQWhCLElBQTJCNEIsV0FBM0IsRUFBcEI7QUFDQSwrQ0FBWXBCLFFBQVo7QUFBc0JSLG1CQUFTLEVBQUVnQztBQUFqQztBQUNELE9BSEQsTUFHTztBQUNMLGVBQU94QixRQUFQO0FBQ0Q7QUFDRixLQVBrQixDQUFuQjtBQVNBLFFBQU15QixVQUFVLEdBQUdGLFVBQVUsQ0FBQ2pDLE1BQVgsQ0FDakIsVUFBQ1UsUUFBRDtBQUFBLGFBQXdCQSxRQUFRLENBQUNDLE9BQVQsS0FBcUJILE1BQTdDO0FBQUEsS0FEaUIsQ0FBbkI7QUFJQXhCLGtCQUFjLENBQUNDLE9BQWYsQ0FBdUJILE9BQU8sQ0FBQ1EsSUFBL0IsRUFBcUNILElBQUksQ0FBQ0MsU0FBTCxDQUFlNkMsVUFBZixDQUFyQztBQUNBLFdBQU9FLFVBQVUsQ0FBQyxDQUFELENBQWpCO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FoQ0Q7O0FBa0NBLElBQU1DLE9BQU8sR0FBRztBQUFFckQsYUFBVyxFQUFYQTtBQUFGLENBQWhCO0FBQ0EsSUFBTXNELE9BQU8sR0FBRztBQUFFN0MsYUFBVyxFQUFYQTtBQUFGLENBQWhCO0FBQ0EsSUFBTThDLE9BQU8sR0FBRztBQUNkekMsYUFBVyxFQUFYQSxXQURjO0FBRWRVLGFBQVcsRUFBWEEsV0FGYztBQUdkSyxxQkFBbUIsRUFBbkJBLG1CQUhjO0FBSWRnQixnQkFBYyxFQUFkQTtBQUpjLENBQWhCO0FBT0EiLCJmaWxlIjoiLi9zcmMvYXBpL2FwaS5zYW1wbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgZHVtbXlEYXRhIGZyb20gXCIuLi9kYXRhL2RhdGEuc2FtcGxlXCI7XG5pbXBvcnQgeyBJQ2hhdEFQSSwgSUNoYXRMaXN0QVBJIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmVudW0ga2V5VHlwZSB7XG4gIGF1dGggPSBcIkFVVEhcIixcbiAgY2hhdCA9IFwiQ0hBVFwiLFxuICBmcmllbmQgPSBcIkZSSUVORFNcIixcbn1cblxuY29uc3QgZ2V0TG9hZERhdGEgPSAoKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5VHlwZS5hdXRoLCBKU09OLnN0cmluZ2lmeShkdW1teURhdGEuYXV0aFVzZXIpKTtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlUeXBlLmNoYXQsIEpTT04uc3RyaW5naWZ5KGR1bW15RGF0YS5jaGF0KSk7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5VHlwZS5mcmllbmQsIEpTT04uc3RyaW5naWZ5KGR1bW15RGF0YS5mcmllbmRzKSk7XG59O1xuXG5jb25zdCBnZXRBdXRoRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5hdXRoKTtcbiAgaWYgKGdldERhdGEpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGdldERhdGEpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldENoYXREYXRhID0gKHNlYXJjaFZhbHVlPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcbiAgICBpZiAoc2VhcmNoVmFsdWUpIHtcbiAgICAgIGNvbnN0IGZpbmRDaGF0ID0gcGFyc2VkLmZpbHRlcigoY2hhdERhdGE6IElDaGF0QVBJKSA9PlxuICAgICAgICBjaGF0RGF0YS5jaGF0X2xpc3Quc29tZShcbiAgICAgICAgICAoY2hhdExpc3REYXRhOiBJQ2hhdExpc3RBUEkpID0+XG4gICAgICAgICAgICBjaGF0TGlzdERhdGEuZGF0YS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBmaW5kQ2hhdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRSb29tRGF0YSA9IChyb29tSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmNoYXQpO1xuICBpZiAoZ2V0RGF0YSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZ2V0RGF0YSk7XG4gICAgY29uc3QgZmluZFJvb20gPSBwYXJzZWQuZmlsdGVyKFxuICAgICAgKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4gcm9vbURhdGEucm9vbV9pZCA9PT0gcm9vbUlkXG4gICAgKTtcblxuICAgIGlmIChmaW5kUm9vbSkge1xuICAgICAgcmV0dXJuIGZpbmRSb29tWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHVwZGF0ZVJvb21WaXNpdFRpbWUgPSAocm9vbUlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5jaGF0KTtcbiAgaWYgKGdldERhdGEpIHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBkYXlqcygpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBwYXJzZWRDaGF0ID0gSlNPTi5wYXJzZShnZXRDaGF0RGF0YSk7XG4gICAgY29uc3QgcGFyc2VkQXV0aCA9IEpTT04ucGFyc2UoZ2V0QXV0aCk7XG5cbiAgICBjb25zdCB1cGRhdGVDaGF0RGF0YSA9IHBhcnNlZENoYXQubWFwKChyb29tRGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICAgIGlmIChyb29tRGF0YS5yb29tX2lkID09PSByb29tSWQpIHtcbiAgICAgICAgY29uc3QgeyByb29tX21lbWJlcnMgfSA9IHJvb21EYXRhO1xuICAgICAgICBjb25zdCB1cGRhdGVSb29tTWVtYmVycyA9IHJvb21fbWVtYmVycy5tYXAoXG4gICAgICAgICAgKG1lbWJlcjogSUFQSU1lbWJlclByb3BzKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVtYmVyLmlkID09PSBhdXRoVXNlcklkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLm1lbWJlciwgbGFzdF92aXNpdF90aW1lOiB0aW1lU3RhbXAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtZW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5yb29tLCByb29tX21lbWJlcnM6IHVwZGF0ZVJvb21NZW1iZXJzIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcm9vbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGFkZFJvb21OZXdDaGF0ID0gKHJvb21JZDogc3RyaW5nLCBuZXdDaGF0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0Q2hhdERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGNvbnN0IGdldEF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG5cbiAgaWYgKGdldENoYXREYXRhICYmIGdldEF1dGgpIHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBkYXlqcygpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBwYXJzZWRDaGF0ID0gSlNPTi5wYXJzZShnZXRDaGF0RGF0YSk7XG4gICAgY29uc3QgcGFyc2VkQXV0aCA9IEpTT04ucGFyc2UoZ2V0QXV0aCk7XG5cbiAgICBjb25zdCBuZXdDaGF0RGF0YSA9IHtcbiAgICAgIHVzZXI6IHBhcnNlZEF1dGgsXG4gICAgICBkYXRhOiBuZXdDaGF0LFxuICAgICAgdGltZTogdGltZVN0YW1wLFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gcGFyc2VkQ2hhdC5tYXAoKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4ge1xuICAgICAgaWYgKHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZCkge1xuICAgICAgICBjb25zdCB1cGRhdGVDaGF0TGlzdCA9IFsuLi5yb29tRGF0YS5jaGF0X2xpc3QsIG5ld0NoYXREYXRhXTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm9vbURhdGEsIGNoYXRfbGlzdDogdXBkYXRlQ2hhdExpc3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByb29tRGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdERhdGEgPSB1cGRhdGVEYXRhLmZpbHRlcihcbiAgICAgIChyb29tRGF0YTogSUNoYXRBUEkpID0+IHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZFxuICAgICk7XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuY2hhdCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSkpO1xuICAgIHJldHVybiByZXN1bHREYXRhWzBdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgY29tbUFQSSA9IHsgZ2V0TG9hZERhdGEgfTtcbmNvbnN0IGF1dGhBUEkgPSB7IGdldEF1dGhEYXRhIH07XG5jb25zdCBjaGF0QVBJID0ge1xuICBnZXRDaGF0RGF0YSxcbiAgZ2V0Um9vbURhdGEsXG4gIHVwZGF0ZVJvb21WaXNpdFRpbWUsXG4gIGFkZFJvb21OZXdDaGF0LFxufTtcblxuZXhwb3J0IHsgY29tbUFQSSwgYXV0aEFQSSwgY2hhdEFQSSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/api.sample.ts\n");

/***/ })

});