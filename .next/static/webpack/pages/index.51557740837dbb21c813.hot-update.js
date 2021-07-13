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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commAPI\": function() { return /* binding */ commAPI; },\n/* harmony export */   \"authAPI\": function() { return /* binding */ authAPI; },\n/* harmony export */   \"friendAPI\": function() { return /* binding */ friendAPI; },\n/* harmony export */   \"chatAPI\": function() { return /* binding */ chatAPI; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.sample */ \"./src/data/data.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar keyType;\n\n(function (keyType) {\n  keyType[\"auth\"] = \"AUTH\";\n  keyType[\"chat\"] = \"CHAT\";\n  keyType[\"friend\"] = \"FRIENDS\";\n})(keyType || (keyType = {}));\n\nvar getLoadData = function getLoadData() {\n  sessionStorage.setItem(keyType.auth, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.authUser));\n  sessionStorage.setItem(keyType.chat, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.chat));\n  sessionStorage.setItem(keyType.friend, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.friends));\n};\n\nvar getAuthData = function getAuthData() {\n  var getData = sessionStorage.getItem(keyType.auth);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getFriendData = function getFriendData() {\n  var getData = sessionStorage.getItem(keyType.friend);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar findFriendId = function findFriendId(id) {\n  var getData = sessionStorage.getItem(keyType.friend);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findId = parsed.find(function (friend) {\n      return friend.id === id;\n    });\n    console.log(\"findId\", findId);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getChatData = function getChatData(searchValue) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n\n    if (searchValue) {\n      var findChat = parsed.filter(function (chatData) {\n        return chatData.chat_list.some(function (chatListData) {\n          return chatListData.data.indexOf(searchValue) > -1;\n        });\n      });\n      return findChat;\n    } else {\n      return parsed;\n    }\n  }\n\n  return null;\n};\n\nvar getRoomData = function getRoomData(roomId) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findRoom = parsed.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n\n    if (findRoom) {\n      return findRoom[0];\n    }\n  }\n\n  return null;\n};\n\nvar updateRoomVisitTime = function updateRoomVisitTime(roomId) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var room_members = roomData.room_members;\n        var updateRoomMembers = room_members.map(function (member) {\n          if (member.id === parsedAuth.id) {\n            return _objectSpread(_objectSpread({}, member), {}, {\n              last_visit_time: timeStamp\n            });\n          } else {\n            return member;\n          }\n        });\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          room_members: updateRoomMembers\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar addRoomNewChat = function addRoomNewChat(roomId, newChat) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var newChatData = {\n      user: parsedAuth,\n      data: newChat,\n      time: timeStamp\n    };\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var updateChatList = [].concat((0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(roomData.chat_list), [newChatData]);\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          chat_list: updateChatList\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar commAPI = {\n  getLoadData: getLoadData\n};\nvar authAPI = {\n  getAuthData: getAuthData\n};\nvar friendAPI = {\n  getFriendData: getFriendData,\n  findFriendId: findFriendId\n};\nvar chatAPI = {\n  getChatData: getChatData,\n  getRoomData: getRoomData,\n  updateRoomVisitTime: updateRoomVisitTime,\n  addRoomNewChat: addRoomNewChat\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9hcGkuc2FtcGxlLnRzP2E4MjMiXSwibmFtZXMiOlsia2V5VHlwZSIsImdldExvYWREYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkdW1teURhdGEiLCJjaGF0IiwiZnJpZW5kIiwiZ2V0QXV0aERhdGEiLCJnZXREYXRhIiwiZ2V0SXRlbSIsInBhcnNlZCIsInBhcnNlIiwiZ2V0RnJpZW5kRGF0YSIsImZpbmRGcmllbmRJZCIsImlkIiwiZmluZElkIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGF0RGF0YSIsInNlYXJjaFZhbHVlIiwiZmluZENoYXQiLCJmaWx0ZXIiLCJjaGF0RGF0YSIsImNoYXRfbGlzdCIsInNvbWUiLCJjaGF0TGlzdERhdGEiLCJkYXRhIiwiaW5kZXhPZiIsImdldFJvb21EYXRhIiwicm9vbUlkIiwiZmluZFJvb20iLCJyb29tRGF0YSIsInJvb21faWQiLCJ1cGRhdGVSb29tVmlzaXRUaW1lIiwiZ2V0QXV0aCIsInRpbWVTdGFtcCIsImRheWpzIiwidmFsdWVPZiIsInBhcnNlZENoYXQiLCJwYXJzZWRBdXRoIiwidXBkYXRlRGF0YSIsIm1hcCIsInJvb21fbWVtYmVycyIsInVwZGF0ZVJvb21NZW1iZXJzIiwibWVtYmVyIiwibGFzdF92aXNpdF90aW1lIiwicmVzdWx0RGF0YSIsImFkZFJvb21OZXdDaGF0IiwibmV3Q2hhdCIsIm5ld0NoYXREYXRhIiwidXNlciIsInRpbWUiLCJ1cGRhdGVDaGF0TGlzdCIsImNvbW1BUEkiLCJhdXRoQVBJIiwiZnJpZW5kQVBJIiwiY2hhdEFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBR0tBLE87O1dBQUFBLE87QUFBQUEsUztBQUFBQSxTO0FBQUFBLFM7R0FBQUEsTyxLQUFBQSxPOztBQU1MLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdB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RUFBZEE7QUFKYyxDQUFoQjtBQU9BIiwiZmlsZSI6Ii4vc3JjL2FwaS9hcGkuc2FtcGxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IGR1bW15RGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhLnNhbXBsZVwiO1xuaW1wb3J0IHsgSUNoYXRBUEksIElDaGF0TGlzdEFQSSwgSU1lbWJlckFQSSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5lbnVtIGtleVR5cGUge1xuICBhdXRoID0gXCJBVVRIXCIsXG4gIGNoYXQgPSBcIkNIQVRcIixcbiAgZnJpZW5kID0gXCJGUklFTkRTXCIsXG59XG5cbmNvbnN0IGdldExvYWREYXRhID0gKCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuYXV0aCwgSlNPTi5zdHJpbmdpZnkoZHVtbXlEYXRhLmF1dGhVc2VyKSk7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5VHlwZS5jaGF0LCBKU09OLnN0cmluZ2lmeShkdW1teURhdGEuY2hhdCkpO1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuZnJpZW5kLCBKU09OLnN0cmluZ2lmeShkdW1teURhdGEuZnJpZW5kcykpO1xufTtcblxuY29uc3QgZ2V0QXV0aERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRGcmllbmREYXRhID0gKCkgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmZyaWVuZCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBmaW5kRnJpZW5kSWQgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmZyaWVuZCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcbiAgICBjb25zdCBmaW5kSWQgPSBwYXJzZWQuZmluZCgoZnJpZW5kOiBhbnkpID0+IGZyaWVuZC5pZCA9PT0gaWQpO1xuICAgIGNvbnNvbGUubG9nKFwiZmluZElkXCIsIGZpbmRJZCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0Q2hhdERhdGEgPSAoc2VhcmNoVmFsdWU/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5jaGF0KTtcbiAgaWYgKGdldERhdGEpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGdldERhdGEpO1xuICAgIGlmIChzZWFyY2hWYWx1ZSkge1xuICAgICAgY29uc3QgZmluZENoYXQgPSBwYXJzZWQuZmlsdGVyKChjaGF0RGF0YTogSUNoYXRBUEkpID0+XG4gICAgICAgIGNoYXREYXRhLmNoYXRfbGlzdC5zb21lKFxuICAgICAgICAgIChjaGF0TGlzdERhdGE6IElDaGF0TGlzdEFQSSkgPT5cbiAgICAgICAgICAgIGNoYXRMaXN0RGF0YS5kYXRhLmluZGV4T2Yoc2VhcmNoVmFsdWUpID4gLTFcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGZpbmRDaGF0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldFJvb21EYXRhID0gKHJvb21JZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcbiAgICBjb25zdCBmaW5kUm9vbSA9IHBhcnNlZC5maWx0ZXIoXG4gICAgICAocm9vbURhdGE6IElDaGF0QVBJKSA9PiByb29tRGF0YS5yb29tX2lkID09PSByb29tSWRcbiAgICApO1xuXG4gICAgaWYgKGZpbmRSb29tKSB7XG4gICAgICByZXR1cm4gZmluZFJvb21bMF07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgdXBkYXRlUm9vbVZpc2l0VGltZSA9IChyb29tSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBnZXRDaGF0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5jaGF0KTtcbiAgY29uc3QgZ2V0QXV0aCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5hdXRoKTtcbiAgaWYgKGdldENoYXREYXRhICYmIGdldEF1dGgpIHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBkYXlqcygpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBwYXJzZWRDaGF0ID0gSlNPTi5wYXJzZShnZXRDaGF0RGF0YSk7XG4gICAgY29uc3QgcGFyc2VkQXV0aCA9IEpTT04ucGFyc2UoZ2V0QXV0aCk7XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gcGFyc2VkQ2hhdC5tYXAoKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4ge1xuICAgICAgaWYgKHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZCkge1xuICAgICAgICBjb25zdCB7IHJvb21fbWVtYmVycyB9ID0gcm9vbURhdGE7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVJvb21NZW1iZXJzID0gcm9vbV9tZW1iZXJzLm1hcCgobWVtYmVyOiBJTWVtYmVyQVBJKSA9PiB7XG4gICAgICAgICAgaWYgKG1lbWJlci5pZCA9PT0gcGFyc2VkQXV0aC5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVtYmVyLCBsYXN0X3Zpc2l0X3RpbWU6IHRpbWVTdGFtcCB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtYmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IC4uLnJvb21EYXRhLCByb29tX21lbWJlcnM6IHVwZGF0ZVJvb21NZW1iZXJzIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcm9vbURhdGE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHREYXRhID0gdXBkYXRlRGF0YS5maWx0ZXIoXG4gICAgICAocm9vbURhdGE6IElDaGF0QVBJKSA9PiByb29tRGF0YS5yb29tX2lkID09PSByb29tSWRcbiAgICApO1xuXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlUeXBlLmNoYXQsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZURhdGEpKTtcbiAgICByZXR1cm4gcmVzdWx0RGF0YVswXTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGFkZFJvb21OZXdDaGF0ID0gKHJvb21JZDogc3RyaW5nLCBuZXdDaGF0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0Q2hhdERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGNvbnN0IGdldEF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG5cbiAgaWYgKGdldENoYXREYXRhICYmIGdldEF1dGgpIHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBkYXlqcygpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBwYXJzZWRDaGF0ID0gSlNPTi5wYXJzZShnZXRDaGF0RGF0YSk7XG4gICAgY29uc3QgcGFyc2VkQXV0aCA9IEpTT04ucGFyc2UoZ2V0QXV0aCk7XG5cbiAgICBjb25zdCBuZXdDaGF0RGF0YSA9IHtcbiAgICAgIHVzZXI6IHBhcnNlZEF1dGgsXG4gICAgICBkYXRhOiBuZXdDaGF0LFxuICAgICAgdGltZTogdGltZVN0YW1wLFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gcGFyc2VkQ2hhdC5tYXAoKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4ge1xuICAgICAgaWYgKHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZCkge1xuICAgICAgICBjb25zdCB1cGRhdGVDaGF0TGlzdCA9IFsuLi5yb29tRGF0YS5jaGF0X2xpc3QsIG5ld0NoYXREYXRhXTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm9vbURhdGEsIGNoYXRfbGlzdDogdXBkYXRlQ2hhdExpc3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByb29tRGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdERhdGEgPSB1cGRhdGVEYXRhLmZpbHRlcihcbiAgICAgIChyb29tRGF0YTogSUNoYXRBUEkpID0+IHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZFxuICAgICk7XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuY2hhdCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSkpO1xuICAgIHJldHVybiByZXN1bHREYXRhWzBdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgY29tbUFQSSA9IHsgZ2V0TG9hZERhdGEgfTtcbmNvbnN0IGF1dGhBUEkgPSB7IGdldEF1dGhEYXRhIH07XG5jb25zdCBmcmllbmRBUEkgPSB7IGdldEZyaWVuZERhdGEsIGZpbmRGcmllbmRJZCB9O1xuY29uc3QgY2hhdEFQSSA9IHtcbiAgZ2V0Q2hhdERhdGEsXG4gIGdldFJvb21EYXRhLFxuICB1cGRhdGVSb29tVmlzaXRUaW1lLFxuICBhZGRSb29tTmV3Q2hhdCxcbn07XG5cbmV4cG9ydCB7IGNvbW1BUEksIGF1dGhBUEksIGZyaWVuZEFQSSwgY2hhdEFQSSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/api.sample.ts\n");

/***/ })

});