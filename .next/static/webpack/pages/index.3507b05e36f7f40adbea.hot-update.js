/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/api/api.sample.ts":
/*!*******************************!*\
  !*** ./src/api/api.sample.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commAPI\": function() { return /* binding */ commAPI; },\n/* harmony export */   \"authAPI\": function() { return /* binding */ authAPI; },\n/* harmony export */   \"chatAPI\": function() { return /* binding */ chatAPI; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.sample */ \"./src/data/data.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar keyType;\n\n(function (keyType) {\n  keyType[\"auth\"] = \"AUTH\";\n  keyType[\"chat\"] = \"CHAT\";\n  keyType[\"friend\"] = \"FRIENDS\";\n})(keyType || (keyType = {}));\n\nvar getLoadData = function getLoadData() {\n  sessionStorage.setItem(keyType.auth, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.authUser));\n  sessionStorage.setItem(keyType.chat, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.chat));\n  sessionStorage.setItem(keyType.friend, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.friends));\n};\n\nvar getAuthData = function getAuthData() {\n  var getData = sessionStorage.getItem(keyType.auth);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getFriendData = function getFriendData() {\n  var getData = sessionStorage.getItem(keyType.friend);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar findFriend = function findFriend(id) {\n  var getData = sessionStorage.getItem(keyType.friend);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findId = parsed.find(function (friend) {\n      return friend.id === id;\n    });\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getChatData = function getChatData(searchValue) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n\n    if (searchValue) {\n      var findChat = parsed.filter(function (chatData) {\n        return chatData.chat_list.some(function (chatListData) {\n          return chatListData.data.indexOf(searchValue) > -1;\n        });\n      });\n      return findChat;\n    } else {\n      return parsed;\n    }\n  }\n\n  return null;\n};\n\nvar getRoomData = function getRoomData(roomId) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findRoom = parsed.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n\n    if (findRoom) {\n      return findRoom[0];\n    }\n  }\n\n  return null;\n};\n\nvar updateRoomVisitTime = function updateRoomVisitTime(roomId) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var room_members = roomData.room_members;\n        var updateRoomMembers = room_members.map(function (member) {\n          if (member.id === parsedAuth.id) {\n            return _objectSpread(_objectSpread({}, member), {}, {\n              last_visit_time: timeStamp\n            });\n          } else {\n            return member;\n          }\n        });\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          room_members: updateRoomMembers\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar addRoomNewChat = function addRoomNewChat(roomId, newChat) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var newChatData = {\n      user: parsedAuth,\n      data: newChat,\n      time: timeStamp\n    };\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var updateChatList = [].concat((0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(roomData.chat_list), [newChatData]);\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          chat_list: updateChatList\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar commAPI = {\n  getLoadData: getLoadData\n};\nvar authAPI = {\n  getAuthData: getAuthData\n};\nvar chatAPI = {\n  getChatData: getChatData,\n  getRoomData: getRoomData,\n  updateRoomVisitTime: updateRoomVisitTime,\n  addRoomNewChat: addRoomNewChat\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9hcGkuc2FtcGxlLnRzP2E4MjMiXSwibmFtZXMiOlsia2V5VHlwZSIsImdldExvYWREYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkdW1teURhdGEiLCJjaGF0IiwiZnJpZW5kIiwiZ2V0QXV0aERhdGEiLCJnZXREYXRhIiwiZ2V0SXRlbSIsInBhcnNlZCIsInBhcnNlIiwiZ2V0RnJpZW5kRGF0YSIsImZpbmRGcmllbmQiLCJpZCIsImZpbmRJZCIsImZpbmQiLCJnZXRDaGF0RGF0YSIsInNlYXJjaFZhbHVlIiwiZmluZENoYXQiLCJmaWx0ZXIiLCJjaGF0RGF0YSIsImNoYXRfbGlzdCIsInNvbWUiLCJjaGF0TGlzdERhdGEiLCJkYXRhIiwiaW5kZXhPZiIsImdldFJvb21EYXRhIiwicm9vbUlkIiwiZmluZFJvb20iLCJyb29tRGF0YSIsInJvb21faWQiLCJ1cGRhdGVSb29tVmlzaXRUaW1lIiwiZ2V0QXV0aCIsInRpbWVTdGFtcCIsImRheWpzIiwidmFsdWVPZiIsInBhcnNlZENoYXQiLCJwYXJzZWRBdXRoIiwidXBkYXRlRGF0YSIsIm1hcCIsInJvb21fbWVtYmVycyIsInVwZGF0ZVJvb21NZW1iZXJzIiwibWVtYmVyIiwibGFzdF92aXNpdF90aW1lIiwicmVzdWx0RGF0YSIsImFkZFJvb21OZXdDaGF0IiwibmV3Q2hhdCIsIm5ld0NoYXREYXRhIiwidXNlciIsInRpbWUiLCJ1cGRhdGVDaGF0TGlzdCIsImNvbW1BUEkiLCJhdXRoQVBJIiwiY2hhdEFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFHS0EsTzs7V0FBQUEsTztBQUFBQSxTO0FBQUFBLFM7QUFBQUEsUztHQUFBQSxPLEtBQUFBLE87O0FBTUwsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsZ0JBQWMsQ0FBQ0MsT0FBZixDQUF1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QUFwQjtBQU1BLFFBQU1LLFVBQVUsR0FBR0YsVUFBVSxDQUFDRyxHQUFYLENBQWUsVUFBQ1YsUUFBRCxFQUF3QjtBQUN4RCxVQUFJQSxRQUFRLENBQUNDLE9BQVQsS0FBcUJILE1BQXpCLEVBQWlDO0FBQy9CLFlBQU11QixjQUFjLHlKQUFPckIsUUFBUSxDQUFDUixTQUFoQixJQUEyQjBCLFdBQTNCLEVBQXBCO0FBQ0EsK0NBQVlsQixRQUFaO0FBQXNCUixtQkFBUyxFQUFFNkI7QUFBakM7QUFDRCxPQUhELE1BR087QUFDTCxlQUFPckIsUUFBUDtBQUNEO0FBQ0YsS0FQa0IsQ0FBbkI7QUFTQSxRQUFNZSxVQUFVLEdBQUdOLFVBQVUsQ0FBQ25CLE1BQVgsQ0FDakIsVUFBQ1UsUUFBRDtBQUFBLGFBQXdCQSxRQUFRLENBQUNDLE9BQVQsS0FBcUJILE1BQTdDO0FBQUEsS0FEaUIsQ0FBbkI7QUFJQTdCLGtCQUFjLENBQUNDLE9BQWYsQ0FBdUJILE9BQU8sQ0FBQ1EsSUFBL0IsRUFBcUNILElBQUksQ0FBQ0MsU0FBTCxDQUFlb0MsVUFBZixDQUFyQztBQUNBLFdBQU9NLFVBQVUsQ0FBQyxDQUFELENBQWpCO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FoQ0Q7O0FBa0NBLElBQU1PLE9BQU8sR0FBRztBQUFFdEQsYUFBVyxFQUFYQTtBQUFGLENBQWhCO0FBQ0EsSUFBTXVELE9BQU8sR0FBRztBQUFFOUMsYUFBVyxFQUFYQTtBQUFGLENBQWhCO0FBQ0EsSUFBTStDLE9BQU8sR0FBRztBQUNkckMsYUFBVyxFQUFYQSxXQURjO0FBRWRVLGFBQVcsRUFBWEEsV0FGYztBQUdkSyxxQkFBbUIsRUFBbkJBLG1CQUhjO0FBSWRjLGdCQUFjLEVBQWRBO0FBSmMsQ0FBaEI7QUFPQSIsImZpbGUiOiIuL3NyYy9hcGkvYXBpLnNhbXBsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCBkdW1teURhdGEgZnJvbSBcIi4uL2RhdGEvZGF0YS5zYW1wbGVcIjtcbmltcG9ydCB7IElDaGF0QVBJLCBJQ2hhdExpc3RBUEksIElNZW1iZXJBUEkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZW51bSBrZXlUeXBlIHtcbiAgYXV0aCA9IFwiQVVUSFwiLFxuICBjaGF0ID0gXCJDSEFUXCIsXG4gIGZyaWVuZCA9IFwiRlJJRU5EU1wiLFxufVxuXG5jb25zdCBnZXRMb2FkRGF0YSA9ICgpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlUeXBlLmF1dGgsIEpTT04uc3RyaW5naWZ5KGR1bW15RGF0YS5hdXRoVXNlcikpO1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuY2hhdCwgSlNPTi5zdHJpbmdpZnkoZHVtbXlEYXRhLmNoYXQpKTtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlUeXBlLmZyaWVuZCwgSlNPTi5zdHJpbmdpZnkoZHVtbXlEYXRhLmZyaWVuZHMpKTtcbn07XG5cbmNvbnN0IGdldEF1dGhEYXRhID0gKCkgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmF1dGgpO1xuICBpZiAoZ2V0RGF0YSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0RnJpZW5kRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5mcmllbmQpO1xuICBpZiAoZ2V0RGF0YSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZ2V0RGF0YSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZmluZEZyaWVuZCA9IChpZCkgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmZyaWVuZCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcbiAgICBjb25zdCBmaW5kSWQgPSBwYXJzZWQuZmluZCgoZnJpZW5kOiBhbnkpID0+IGZyaWVuZC5pZCA9PT0gaWQpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldENoYXREYXRhID0gKHNlYXJjaFZhbHVlPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcbiAgICBpZiAoc2VhcmNoVmFsdWUpIHtcbiAgICAgIGNvbnN0IGZpbmRDaGF0ID0gcGFyc2VkLmZpbHRlcigoY2hhdERhdGE6IElDaGF0QVBJKSA9PlxuICAgICAgICBjaGF0RGF0YS5jaGF0X2xpc3Quc29tZShcbiAgICAgICAgICAoY2hhdExpc3REYXRhOiBJQ2hhdExpc3RBUEkpID0+XG4gICAgICAgICAgICBjaGF0TGlzdERhdGEuZGF0YS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBmaW5kQ2hhdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRSb29tRGF0YSA9IChyb29tSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmNoYXQpO1xuICBpZiAoZ2V0RGF0YSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZ2V0RGF0YSk7XG4gICAgY29uc3QgZmluZFJvb20gPSBwYXJzZWQuZmlsdGVyKFxuICAgICAgKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4gcm9vbURhdGEucm9vbV9pZCA9PT0gcm9vbUlkXG4gICAgKTtcblxuICAgIGlmIChmaW5kUm9vbSkge1xuICAgICAgcmV0dXJuIGZpbmRSb29tWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHVwZGF0ZVJvb21WaXNpdFRpbWUgPSAocm9vbUlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0Q2hhdERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGNvbnN0IGdldEF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG4gIGlmIChnZXRDaGF0RGF0YSAmJiBnZXRBdXRoKSB7XG4gICAgY29uc3QgdGltZVN0YW1wID0gZGF5anMoKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgcGFyc2VkQ2hhdCA9IEpTT04ucGFyc2UoZ2V0Q2hhdERhdGEpO1xuICAgIGNvbnN0IHBhcnNlZEF1dGggPSBKU09OLnBhcnNlKGdldEF1dGgpO1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHBhcnNlZENoYXQubWFwKChyb29tRGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICAgIGlmIChyb29tRGF0YS5yb29tX2lkID09PSByb29tSWQpIHtcbiAgICAgICAgY29uc3QgeyByb29tX21lbWJlcnMgfSA9IHJvb21EYXRhO1xuICAgICAgICBjb25zdCB1cGRhdGVSb29tTWVtYmVycyA9IHJvb21fbWVtYmVycy5tYXAoKG1lbWJlcjogSU1lbWJlckFQSSkgPT4ge1xuICAgICAgICAgIGlmIChtZW1iZXIuaWQgPT09IHBhcnNlZEF1dGguaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm1lbWJlciwgbGFzdF92aXNpdF90aW1lOiB0aW1lU3RhbXAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1lbWJlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyAuLi5yb29tRGF0YSwgcm9vbV9tZW1iZXJzOiB1cGRhdGVSb29tTWVtYmVycyB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJvb21EYXRhO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0RGF0YSA9IHVwZGF0ZURhdGEuZmlsdGVyKFxuICAgICAgKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4gcm9vbURhdGEucm9vbV9pZCA9PT0gcm9vbUlkXG4gICAgKTtcblxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5VHlwZS5jaGF0LCBKU09OLnN0cmluZ2lmeSh1cGRhdGVEYXRhKSk7XG4gICAgcmV0dXJuIHJlc3VsdERhdGFbMF07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBhZGRSb29tTmV3Q2hhdCA9IChyb29tSWQ6IHN0cmluZywgbmV3Q2hhdDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdldENoYXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmNoYXQpO1xuICBjb25zdCBnZXRBdXRoID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmF1dGgpO1xuXG4gIGlmIChnZXRDaGF0RGF0YSAmJiBnZXRBdXRoKSB7XG4gICAgY29uc3QgdGltZVN0YW1wID0gZGF5anMoKS52YWx1ZU9mKCk7XG4gICAgY29uc3QgcGFyc2VkQ2hhdCA9IEpTT04ucGFyc2UoZ2V0Q2hhdERhdGEpO1xuICAgIGNvbnN0IHBhcnNlZEF1dGggPSBKU09OLnBhcnNlKGdldEF1dGgpO1xuXG4gICAgY29uc3QgbmV3Q2hhdERhdGEgPSB7XG4gICAgICB1c2VyOiBwYXJzZWRBdXRoLFxuICAgICAgZGF0YTogbmV3Q2hhdCxcbiAgICAgIHRpbWU6IHRpbWVTdGFtcCxcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IHBhcnNlZENoYXQubWFwKChyb29tRGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICAgIGlmIChyb29tRGF0YS5yb29tX2lkID09PSByb29tSWQpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlQ2hhdExpc3QgPSBbLi4ucm9vbURhdGEuY2hhdF9saXN0LCBuZXdDaGF0RGF0YV07XG4gICAgICAgIHJldHVybiB7IC4uLnJvb21EYXRhLCBjaGF0X2xpc3Q6IHVwZGF0ZUNoYXRMaXN0IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcm9vbURhdGE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHREYXRhID0gdXBkYXRlRGF0YS5maWx0ZXIoXG4gICAgICAocm9vbURhdGE6IElDaGF0QVBJKSA9PiByb29tRGF0YS5yb29tX2lkID09PSByb29tSWRcbiAgICApO1xuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlUeXBlLmNoYXQsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZURhdGEpKTtcbiAgICByZXR1cm4gcmVzdWx0RGF0YVswXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGNvbW1BUEkgPSB7IGdldExvYWREYXRhIH07XG5jb25zdCBhdXRoQVBJID0geyBnZXRBdXRoRGF0YSB9O1xuY29uc3QgY2hhdEFQSSA9IHtcbiAgZ2V0Q2hhdERhdGEsXG4gIGdldFJvb21EYXRhLFxuICB1cGRhdGVSb29tVmlzaXRUaW1lLFxuICBhZGRSb29tTmV3Q2hhdCxcbn07XG5cbmV4cG9ydCB7IGNvbW1BUEksIGF1dGhBUEksIGNoYXRBUEkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/api.sample.ts\n");

/***/ })

});