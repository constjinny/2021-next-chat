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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commAPI\": function() { return /* binding */ commAPI; },\n/* harmony export */   \"authAPI\": function() { return /* binding */ authAPI; },\n/* harmony export */   \"chatAPI\": function() { return /* binding */ chatAPI; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data_sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.sample */ \"./src/data/data.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar keyType;\n\n(function (keyType) {\n  keyType[\"auth\"] = \"AUTH\";\n  keyType[\"chat\"] = \"CHAT\";\n  keyType[\"friend\"] = \"FRIENDS\";\n})(keyType || (keyType = {}));\n\nvar getLoadData = function getLoadData() {\n  sessionStorage.setItem(keyType.auth, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.authUser));\n  sessionStorage.setItem(keyType.chat, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.chat));\n  sessionStorage.setItem(keyType.friend, JSON.stringify(_data_data_sample__WEBPACK_IMPORTED_MODULE_3__.default.friends));\n};\n\nvar getAuthData = function getAuthData() {\n  var getData = sessionStorage.getItem(keyType.auth);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    return parsed;\n  }\n\n  return null;\n};\n\nvar getChatData = function getChatData(searchValue) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n\n    if (searchValue) {\n      var findChat = parsed.filter(function (chatData) {\n        return chatData.chat_list.some(function (chatListData) {\n          return chatListData.data.indexOf(searchValue) > -1;\n        });\n      });\n      return findChat;\n    } else {\n      return parsed;\n    }\n  }\n\n  return null;\n};\n\nvar getRoomData = function getRoomData(roomId) {\n  var getData = sessionStorage.getItem(keyType.chat);\n\n  if (getData) {\n    var parsed = JSON.parse(getData);\n    var findRoom = parsed.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n\n    if (findRoom) {\n      return findRoom[0];\n    }\n  }\n\n  return null;\n};\n\nvar updateRoomVisitTime = function updateRoomVisitTime(roomId) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    console.log(\"parsedAuth\", parsedAuth);\n    var updateChatData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var room_members = roomData.room_members;\n        var updateRoomMembers = room_members.map(function (member) {\n          if (member.id === \"authUserId\") {\n            return _objectSpread(_objectSpread({}, member), {}, {\n              last_visit_time: timeStamp\n            });\n          } else {\n            return member;\n          }\n        });\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          room_members: updateRoomMembers\n        });\n      } else {\n        return roomData;\n      }\n    });\n  }\n\n  return null;\n};\n\nvar addRoomNewChat = function addRoomNewChat(roomId, newChat) {\n  var getChatData = sessionStorage.getItem(keyType.chat);\n  var getAuth = sessionStorage.getItem(keyType.auth);\n\n  if (getChatData && getAuth) {\n    var timeStamp = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();\n    var parsedChat = JSON.parse(getChatData);\n    var parsedAuth = JSON.parse(getAuth);\n    var newChatData = {\n      user: parsedAuth,\n      data: newChat,\n      time: timeStamp\n    };\n    var updateData = parsedChat.map(function (roomData) {\n      if (roomData.room_id === roomId) {\n        var updateChatList = [].concat((0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(roomData.chat_list), [newChatData]);\n        return _objectSpread(_objectSpread({}, roomData), {}, {\n          chat_list: updateChatList\n        });\n      } else {\n        return roomData;\n      }\n    });\n    var resultData = updateData.filter(function (roomData) {\n      return roomData.room_id === roomId;\n    });\n    sessionStorage.setItem(keyType.chat, JSON.stringify(updateData));\n    return resultData[0];\n  }\n\n  return null;\n};\n\nvar commAPI = {\n  getLoadData: getLoadData\n};\nvar authAPI = {\n  getAuthData: getAuthData\n};\nvar chatAPI = {\n  getChatData: getChatData,\n  getRoomData: getRoomData,\n  updateRoomVisitTime: updateRoomVisitTime,\n  addRoomNewChat: addRoomNewChat\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9hcGkuc2FtcGxlLnRzP2E4MjMiXSwibmFtZXMiOlsia2V5VHlwZSIsImdldExvYWREYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYXV0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkdW1teURhdGEiLCJjaGF0IiwiZnJpZW5kIiwiZ2V0QXV0aERhdGEiLCJnZXREYXRhIiwiZ2V0SXRlbSIsInBhcnNlZCIsInBhcnNlIiwiZ2V0Q2hhdERhdGEiLCJzZWFyY2hWYWx1ZSIsImZpbmRDaGF0IiwiZmlsdGVyIiwiY2hhdERhdGEiLCJjaGF0X2xpc3QiLCJzb21lIiwiY2hhdExpc3REYXRhIiwiZGF0YSIsImluZGV4T2YiLCJnZXRSb29tRGF0YSIsInJvb21JZCIsImZpbmRSb29tIiwicm9vbURhdGEiLCJyb29tX2lkIiwidXBkYXRlUm9vbVZpc2l0VGltZSIsImdldEF1dGgiLCJ0aW1lU3RhbXAiLCJkYXlqcyIsInZhbHVlT2YiLCJwYXJzZWRDaGF0IiwicGFyc2VkQXV0aCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVDaGF0RGF0YSIsIm1hcCIsInJvb21fbWVtYmVycyIsInVwZGF0ZVJvb21NZW1iZXJzIiwibWVtYmVyIiwiaWQiLCJsYXN0X3Zpc2l0X3RpbWUiLCJhZGRSb29tTmV3Q2hhdCIsIm5ld0NoYXQiLCJuZXdDaGF0RGF0YSIsInVzZXIiLCJ0aW1lIiwidXBkYXRlRGF0YSIsInVwZGF0ZUNoYXRMaXN0IiwicmVzdWx0RGF0YSIsImNvbW1BUEkiLCJhdXRoQVBJIiwiY2hhdEFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFHS0EsTzs7V0FBQUEsTztBQUFBQSxTO0FBQUFBLFM7QUFBQUEsUztHQUFBQSxPLEtBQUFBLE87O0FBTUwsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsZ0JBQWMsQ0FBQ0MsT0FBZixDQUF1QkgsT0FBTyxDQUFD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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IGR1bW15RGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhLnNhbXBsZVwiO1xuaW1wb3J0IHsgSUNoYXRBUEksIElDaGF0TGlzdEFQSSwgSU1lbWJlckFQSSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5lbnVtIGtleVR5cGUge1xuICBhdXRoID0gXCJBVVRIXCIsXG4gIGNoYXQgPSBcIkNIQVRcIixcbiAgZnJpZW5kID0gXCJGUklFTkRTXCIsXG59XG5cbmNvbnN0IGdldExvYWREYXRhID0gKCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuYXV0aCwgSlNPTi5zdHJpbmdpZnkoZHVtbXlEYXRhLmF1dGhVc2VyKSk7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5VHlwZS5jaGF0LCBKU09OLnN0cmluZ2lmeShkdW1teURhdGEuY2hhdCkpO1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuZnJpZW5kLCBKU09OLnN0cmluZ2lmeShkdW1teURhdGEuZnJpZW5kcykpO1xufTtcblxuY29uc3QgZ2V0QXV0aERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGdldERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG4gIGlmIChnZXREYXRhKSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShnZXREYXRhKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBnZXRDaGF0RGF0YSA9IChzZWFyY2hWYWx1ZT86IHN0cmluZykgPT4ge1xuICBjb25zdCBnZXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmNoYXQpO1xuICBpZiAoZ2V0RGF0YSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoZ2V0RGF0YSk7XG4gICAgaWYgKHNlYXJjaFZhbHVlKSB7XG4gICAgICBjb25zdCBmaW5kQ2hhdCA9IHBhcnNlZC5maWx0ZXIoKGNoYXREYXRhOiBJQ2hhdEFQSSkgPT5cbiAgICAgICAgY2hhdERhdGEuY2hhdF9saXN0LnNvbWUoXG4gICAgICAgICAgKGNoYXRMaXN0RGF0YTogSUNoYXRMaXN0QVBJKSA9PlxuICAgICAgICAgICAgY2hhdExpc3REYXRhLmRhdGEuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPiAtMVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZmluZENoYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0Um9vbURhdGEgPSAocm9vbUlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5VHlwZS5jaGF0KTtcbiAgaWYgKGdldERhdGEpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGdldERhdGEpO1xuICAgIGNvbnN0IGZpbmRSb29tID0gcGFyc2VkLmZpbHRlcihcbiAgICAgIChyb29tRGF0YTogSUNoYXRBUEkpID0+IHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZFxuICAgICk7XG5cbiAgICBpZiAoZmluZFJvb20pIHtcbiAgICAgIHJldHVybiBmaW5kUm9vbVswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCB1cGRhdGVSb29tVmlzaXRUaW1lID0gKHJvb21JZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdldENoYXREYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmNoYXQpO1xuICBjb25zdCBnZXRBdXRoID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlUeXBlLmF1dGgpO1xuICBpZiAoZ2V0Q2hhdERhdGEgJiYgZ2V0QXV0aCkge1xuICAgIGNvbnN0IHRpbWVTdGFtcCA9IGRheWpzKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHBhcnNlZENoYXQgPSBKU09OLnBhcnNlKGdldENoYXREYXRhKTtcbiAgICBjb25zdCBwYXJzZWRBdXRoID0gSlNPTi5wYXJzZShnZXRBdXRoKTtcbiAgICBjb25zb2xlLmxvZyhcInBhcnNlZEF1dGhcIiwgcGFyc2VkQXV0aCk7XG5cbiAgICBjb25zdCB1cGRhdGVDaGF0RGF0YSA9IHBhcnNlZENoYXQubWFwKChyb29tRGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICAgIGlmIChyb29tRGF0YS5yb29tX2lkID09PSByb29tSWQpIHtcbiAgICAgICAgY29uc3QgeyByb29tX21lbWJlcnMgfSA9IHJvb21EYXRhO1xuICAgICAgICBjb25zdCB1cGRhdGVSb29tTWVtYmVycyA9IHJvb21fbWVtYmVycy5tYXAoKG1lbWJlcjogSU1lbWJlckFQSSkgPT4ge1xuICAgICAgICAgIGlmIChtZW1iZXIuaWQgPT09IFwiYXV0aFVzZXJJZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5tZW1iZXIsIGxhc3RfdmlzaXRfdGltZTogdGltZVN0YW1wIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm9vbURhdGEsIHJvb21fbWVtYmVyczogdXBkYXRlUm9vbU1lbWJlcnMgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByb29tRGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGFkZFJvb21OZXdDaGF0ID0gKHJvb21JZDogc3RyaW5nLCBuZXdDaGF0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2V0Q2hhdERhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuY2hhdCk7XG4gIGNvbnN0IGdldEF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleVR5cGUuYXV0aCk7XG5cbiAgaWYgKGdldENoYXREYXRhICYmIGdldEF1dGgpIHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBkYXlqcygpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBwYXJzZWRDaGF0ID0gSlNPTi5wYXJzZShnZXRDaGF0RGF0YSk7XG4gICAgY29uc3QgcGFyc2VkQXV0aCA9IEpTT04ucGFyc2UoZ2V0QXV0aCk7XG5cbiAgICBjb25zdCBuZXdDaGF0RGF0YSA9IHtcbiAgICAgIHVzZXI6IHBhcnNlZEF1dGgsXG4gICAgICBkYXRhOiBuZXdDaGF0LFxuICAgICAgdGltZTogdGltZVN0YW1wLFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gcGFyc2VkQ2hhdC5tYXAoKHJvb21EYXRhOiBJQ2hhdEFQSSkgPT4ge1xuICAgICAgaWYgKHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZCkge1xuICAgICAgICBjb25zdCB1cGRhdGVDaGF0TGlzdCA9IFsuLi5yb29tRGF0YS5jaGF0X2xpc3QsIG5ld0NoYXREYXRhXTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm9vbURhdGEsIGNoYXRfbGlzdDogdXBkYXRlQ2hhdExpc3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByb29tRGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdERhdGEgPSB1cGRhdGVEYXRhLmZpbHRlcihcbiAgICAgIChyb29tRGF0YTogSUNoYXRBUEkpID0+IHJvb21EYXRhLnJvb21faWQgPT09IHJvb21JZFxuICAgICk7XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleVR5cGUuY2hhdCwgSlNPTi5zdHJpbmdpZnkodXBkYXRlRGF0YSkpO1xuICAgIHJldHVybiByZXN1bHREYXRhWzBdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgY29tbUFQSSA9IHsgZ2V0TG9hZERhdGEgfTtcbmNvbnN0IGF1dGhBUEkgPSB7IGdldEF1dGhEYXRhIH07XG5jb25zdCBjaGF0QVBJID0ge1xuICBnZXRDaGF0RGF0YSxcbiAgZ2V0Um9vbURhdGEsXG4gIHVwZGF0ZVJvb21WaXNpdFRpbWUsXG4gIGFkZFJvb21OZXdDaGF0LFxufTtcblxuZXhwb3J0IHsgY29tbUFQSSwgYXV0aEFQSSwgY2hhdEFQSSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/api.sample.ts\n");

/***/ })

});