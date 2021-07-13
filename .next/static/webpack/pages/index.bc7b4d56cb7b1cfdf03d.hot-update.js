/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/feature/RoomList/RoomListParser.ts":
/*!************************************************!*\
  !*** ./src/feature/RoomList/RoomListParser.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomListParser\": function() { return /* binding */ roomListParser; },\n/* harmony export */   \"roomDataParser\": function() { return /* binding */ roomDataParser; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/weekday */ \"./node_modules/dayjs/plugin/weekday.js\");\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n// NOTI:\n// 기능: API 데이터 재 가공 -> roomList reducer\n// 목적: 데이터 구분, 로직 분리\nvar roomListParser = function roomListParser(authUserId, chatData) {\n  return chatData === null || chatData === void 0 ? void 0 : chatData.map(function (data) {\n    var _room_members$find, _chat_list$filter, _checkLastChat$;\n\n    var room_id = data.room_id,\n        room_info = data.room_info,\n        room_members = data.room_members,\n        chat_list = data.chat_list,\n        last_chat_time = data.last_chat_time;\n    var roomName = room_info.name,\n        roomImg = room_info.img,\n        isFriend = room_info.is_friend;\n    var authUserLastVisitTime = (_room_members$find = room_members.find(function (member) {\n      return member.id === authUserId;\n    })) === null || _room_members$find === void 0 ? void 0 : _room_members$find.last_visit_time;\n    console.log(\"authUserLastVisitTime\", authUserLastVisitTime);\n    var unReadChatLength = chat_list === null || chat_list === void 0 ? void 0 : (_chat_list$filter = chat_list.filter(function (item) {\n      if (authUserLastVisitTime) {\n        return item.user.id !== authUserId && authUserLastVisitTime < item.time;\n      } else {\n        return item;\n      }\n    })) === null || _chat_list$filter === void 0 ? void 0 : _chat_list$filter.length;\n    var checkLastChat = _utils__WEBPACK_IMPORTED_MODULE_4__.sortUtil.sortedOderValue(chat_list, \"time\", false);\n    var targetTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(last_chat_time);\n    var diffDay = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(targetTime, \"day\") === 0;\n    var viewLastChatTime = diffDay ? _utils__WEBPACK_IMPORTED_MODULE_4__.timeUtil.changeTimeFormatTo12(targetTime) : targetTime.format(\"YYYY년 M월 D일\");\n    return {\n      roomId: room_id,\n      roomName: roomName,\n      roomImg: {\n        url: roomImg,\n        isFriend: isFriend\n      },\n      unReadChatLength: unReadChatLength,\n      lastChatData: ((_checkLastChat$ = checkLastChat[0]) === null || _checkLastChat$ === void 0 ? void 0 : _checkLastChat$.data) || \"\",\n      lastChatTime: viewLastChatTime\n    };\n  });\n};\ndayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default())); // NOTI:\n// 기능: API 데이터 재 가공 -> room reducer\n// 목적: 데이터 구분, 로직 분리\n\nvar roomDataParser = function roomDataParser(authUserId, currentRoomDataAPI) {\n  var room_id = currentRoomDataAPI.room_id,\n      room_info = currentRoomDataAPI.room_info,\n      room_members = currentRoomDataAPI.room_members,\n      chat_list = currentRoomDataAPI.chat_list;\n  var roomName = room_info.name,\n      roomImg = room_info.img,\n      isFriend = room_info.is_friend,\n      roomJob = room_info.job;\n  var filterChatData = chat_list.map(function (chat, index) {\n    var _otherMembers$filter, _chat_list, _chat_list2;\n\n    var user = chat.user,\n        time = chat.time;\n    var id = user.id,\n        nickName = user.nick_name,\n        avatarUrl = user.avatar_url;\n    var otherMembers = room_members.filter(function (member) {\n      return member.id !== user.id;\n    });\n    var unReadLength = (_otherMembers$filter = otherMembers.filter(function (member) {\n      return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNull)(member.last_visit_time) || member.last_visit_time < time;\n    })) === null || _otherMembers$filter === void 0 ? void 0 : _otherMembers$filter.length;\n    var dateToString = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYY년 M월 D일\");\n    var timeToString = _utils__WEBPACK_IMPORTED_MODULE_4__.timeUtil.changeTimeFormatTo12(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time));\n    var prevChatTime = (_chat_list = chat_list[index - 1]) === null || _chat_list === void 0 ? void 0 : _chat_list.time;\n    var nextChatTime = (_chat_list2 = chat_list[index + 1]) === null || _chat_list2 === void 0 ? void 0 : _chat_list2.time;\n    var checkDateGroup = prevChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDD\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(prevChatTime).format(\"YYYYMMDD\");\n    var checkMinutsGroup = nextChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDDHHmm\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(nextChatTime).format(\"YYYYMMDDHHmm\");\n    return _objectSpread(_objectSpread({}, chat), {}, {\n      user: {\n        id: id,\n        nickName: nickName,\n        avatarUrl: avatarUrl\n      },\n      isAuth: user.id === authUserId,\n      isDateGroup: checkDateGroup || false,\n      isMinuteGroup: checkMinutsGroup || false,\n      time: time,\n      timeToString: timeToString,\n      dateToString: dateToString,\n      unReadLength: unReadLength\n    });\n  });\n  var sortChatData = _utils__WEBPACK_IMPORTED_MODULE_4__.sortUtil.sortedOderValue(filterChatData, \"time\", true);\n  return {\n    roomInfo: {\n      roomId: room_id,\n      roomName: roomName,\n      roomImg: roomImg,\n      isFriend: isFriend,\n      roomJob: roomJob\n    },\n    chatData: sortChatData\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvUm9vbUxpc3QvUm9vbUxpc3RQYXJzZXIudHM/OTY3ZCJdLCJuYW1lcyI6WyJyb29tTGlzdFBhcnNlciIsImF1dGhVc2VySWQiLCJjaGF0RGF0YSIsIm1hcCIsImRhdGEiLCJyb29tX2lkIiwicm9vbV9pbmZvIiwicm9vbV9tZW1iZXJzIiwiY2hhdF9saXN0IiwibGFzdF9jaGF0X3RpbWUiLCJyb29tTmFtZSIsIm5hbWUiLCJyb29tSW1nIiwiaW1nIiwiaXNGcmllbmQiLCJpc19mcmllbmQiLCJhdXRoVXNlckxhc3RWaXNpdFRpbWUiLCJmaW5kIiwibWVtYmVyIiwiaWQiLCJsYXN0X3Zpc2l0X3RpbWUiLCJjb25zb2xlIiwibG9nIiwidW5SZWFkQ2hhdExlbmd0aCIsImZpbHRlciIsIml0ZW0iLCJ1c2VyIiwidGltZSIsImxlbmd0aCIsImNoZWNrTGFzdENoYXQiLCJzb3J0VXRpbCIsInRhcmdldFRpbWUiLCJkYXlqcyIsImRpZmZEYXkiLCJkaWZmIiwidmlld0xhc3RDaGF0VGltZSIsInRpbWVVdGlsIiwiZm9ybWF0Iiwicm9vbUlkIiwidXJsIiwibGFzdENoYXREYXRhIiwibGFzdENoYXRUaW1lIiwid2Vla2RheSIsInJvb21EYXRhUGFyc2VyIiwiY3VycmVudFJvb21EYXRhQVBJIiwicm9vbUpvYiIsImpvYiIsImZpbHRlckNoYXREYXRhIiwiY2hhdCIsImluZGV4Iiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJhdmF0YXJVcmwiLCJhdmF0YXJfdXJsIiwib3RoZXJNZW1iZXJzIiwidW5SZWFkTGVuZ3RoIiwiaXNOdWxsIiwiZGF0ZVRvU3RyaW5nIiwidGltZVRvU3RyaW5nIiwicHJldkNoYXRUaW1lIiwibmV4dENoYXRUaW1lIiwiY2hlY2tEYXRlR3JvdXAiLCJjaGVja01pbnV0c0dyb3VwIiwiaXNBdXRoIiwiaXNEYXRlR3JvdXAiLCJpc01pbnV0ZUdyb3VwIiwic29ydENoYXREYXRhIiwicm9vbUlu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TUFBekMsRUFBaUQsSUFBakQsQ0FBckI7QUFFQSxTQUFPO0FBQ0xvQixZQUFRLEVBQUU7QUFDUjdCLFlBQU0sRUFBRWpDLE9BREE7QUFFUkssY0FBUSxFQUFSQSxRQUZRO0FBR1JFLGFBQU8sRUFBUEEsT0FIUTtBQUlSRSxjQUFRLEVBQVJBLFFBSlE7QUFLUitCLGFBQU8sRUFBUEE7QUFMUSxLQURMO0FBUUwzQyxZQUFRLEVBQUVnRTtBQVJMLEdBQVA7QUFVRCxDQS9ETSIsImZpbGUiOiIuL3NyYy9mZWF0dXJlL1Jvb21MaXN0L1Jvb21MaXN0UGFyc2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHdlZWtkYXkgZnJvbSBcImRheWpzL3BsdWdpbi93ZWVrZGF5XCI7XG5pbXBvcnQgeyBpc051bGwgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB0aW1lVXRpbCwgc29ydFV0aWwgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IElNZW1iZXJBUEksIElDaGF0TGlzdEFQSSwgSUNoYXRBUEkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gTk9USTpcbi8vIOq4sOuKpTogQVBJIOuNsOydtO2EsCDsnqwg6rCA6rO1IC0+IHJvb21MaXN0IHJlZHVjZXJcbi8vIOuqqeyggTog642w7J207YSwIOq1rOu2hCwg66Gc7KeBIOu2hOumrFxuZXhwb3J0IGNvbnN0IHJvb21MaXN0UGFyc2VyID0gKGF1dGhVc2VySWQ6IHN0cmluZywgY2hhdERhdGE6IElDaGF0QVBJW10pID0+IHtcbiAgcmV0dXJuIGNoYXREYXRhPy5tYXAoKGRhdGE6IElDaGF0QVBJKSA9PiB7XG4gICAgY29uc3QgeyByb29tX2lkLCByb29tX2luZm8sIHJvb21fbWVtYmVycywgY2hhdF9saXN0LCBsYXN0X2NoYXRfdGltZSB9ID1cbiAgICAgIGRhdGE7XG4gICAgY29uc3QgeyBuYW1lOiByb29tTmFtZSwgaW1nOiByb29tSW1nLCBpc19mcmllbmQ6IGlzRnJpZW5kIH0gPSByb29tX2luZm87XG5cbiAgICBjb25zdCBhdXRoVXNlckxhc3RWaXNpdFRpbWUgPSByb29tX21lbWJlcnMuZmluZChcbiAgICAgIChtZW1iZXI6IElNZW1iZXJBUEkpID0+IG1lbWJlci5pZCA9PT0gYXV0aFVzZXJJZFxuICAgICk/Lmxhc3RfdmlzaXRfdGltZTtcblxuICAgIGNvbnNvbGUubG9nKFwiYXV0aFVzZXJMYXN0VmlzaXRUaW1lXCIsIGF1dGhVc2VyTGFzdFZpc2l0VGltZSk7XG5cbiAgICBjb25zdCB1blJlYWRDaGF0TGVuZ3RoID0gY2hhdF9saXN0Py5maWx0ZXIoKGl0ZW06IElDaGF0TGlzdEFQSSkgPT4ge1xuICAgICAgaWYgKGF1dGhVc2VyTGFzdFZpc2l0VGltZSkge1xuICAgICAgICByZXR1cm4gaXRlbS51c2VyLmlkICE9PSBhdXRoVXNlcklkICYmIGF1dGhVc2VyTGFzdFZpc2l0VGltZSA8IGl0ZW0udGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0pPy5sZW5ndGg7XG5cbiAgICBjb25zdCBjaGVja0xhc3RDaGF0ID0gc29ydFV0aWwuc29ydGVkT2RlclZhbHVlKGNoYXRfbGlzdCwgXCJ0aW1lXCIsIGZhbHNlKTtcblxuICAgIGNvbnN0IHRhcmdldFRpbWUgPSBkYXlqcyhsYXN0X2NoYXRfdGltZSk7XG4gICAgY29uc3QgZGlmZkRheSA9IGRheWpzKCkuZGlmZih0YXJnZXRUaW1lLCBcImRheVwiKSA9PT0gMDtcblxuICAgIGNvbnN0IHZpZXdMYXN0Q2hhdFRpbWUgPSBkaWZmRGF5XG4gICAgICA/IHRpbWVVdGlsLmNoYW5nZVRpbWVGb3JtYXRUbzEyKHRhcmdldFRpbWUpXG4gICAgICA6IHRhcmdldFRpbWUuZm9ybWF0KFwiWVlZWeuFhCBN7JuUIETsnbxcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm9vbUlkOiByb29tX2lkLFxuICAgICAgcm9vbU5hbWU6IHJvb21OYW1lLFxuICAgICAgcm9vbUltZzogeyB1cmw6IHJvb21JbWcsIGlzRnJpZW5kOiBpc0ZyaWVuZCB9LFxuICAgICAgdW5SZWFkQ2hhdExlbmd0aDogdW5SZWFkQ2hhdExlbmd0aCxcbiAgICAgIGxhc3RDaGF0RGF0YTogY2hlY2tMYXN0Q2hhdFswXT8uZGF0YSB8fCBcIlwiLFxuICAgICAgbGFzdENoYXRUaW1lOiB2aWV3TGFzdENoYXRUaW1lLFxuICAgIH07XG4gIH0pO1xufTtcblxuZGF5anMuZXh0ZW5kKHdlZWtkYXkpO1xuXG4vLyBOT1RJOlxuLy8g6riw64qlOiBBUEkg642w7J207YSwIOyerCDqsIDqs7UgLT4gcm9vbSByZWR1Y2VyXG4vLyDrqqnsoIE6IOuNsOydtO2EsCDqtazrtoQsIOuhnOyngSDrtoTrpqxcbmV4cG9ydCBjb25zdCByb29tRGF0YVBhcnNlciA9IChcbiAgYXV0aFVzZXJJZDogc3RyaW5nLFxuICBjdXJyZW50Um9vbURhdGFBUEk6IElDaGF0QVBJXG4pID0+IHtcbiAgY29uc3QgeyByb29tX2lkLCByb29tX2luZm8sIHJvb21fbWVtYmVycywgY2hhdF9saXN0IH0gPSBjdXJyZW50Um9vbURhdGFBUEk7XG4gIGNvbnN0IHtcbiAgICBuYW1lOiByb29tTmFtZSxcbiAgICBpbWc6IHJvb21JbWcsXG4gICAgaXNfZnJpZW5kOiBpc0ZyaWVuZCxcbiAgICBqb2I6IHJvb21Kb2IsXG4gIH0gPSByb29tX2luZm87XG5cbiAgY29uc3QgZmlsdGVyQ2hhdERhdGEgPSBjaGF0X2xpc3QubWFwKChjaGF0OiBJQ2hhdExpc3RBUEksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHVzZXIsIHRpbWUgfSA9IGNoYXQ7XG4gICAgY29uc3QgeyBpZCwgbmlja19uYW1lOiBuaWNrTmFtZSwgYXZhdGFyX3VybDogYXZhdGFyVXJsIH0gPSB1c2VyO1xuXG4gICAgY29uc3Qgb3RoZXJNZW1iZXJzID0gcm9vbV9tZW1iZXJzLmZpbHRlcihcbiAgICAgIChtZW1iZXI6IElNZW1iZXJBUEkpID0+IG1lbWJlci5pZCAhPT0gdXNlci5pZFxuICAgICk7XG5cbiAgICBjb25zdCB1blJlYWRMZW5ndGggPSBvdGhlck1lbWJlcnMuZmlsdGVyKFxuICAgICAgKG1lbWJlcjogSU1lbWJlckFQSSkgPT5cbiAgICAgICAgaXNOdWxsKG1lbWJlci5sYXN0X3Zpc2l0X3RpbWUpIHx8IG1lbWJlci5sYXN0X3Zpc2l0X3RpbWUgPCB0aW1lXG4gICAgKT8ubGVuZ3RoO1xuXG4gICAgY29uc3QgZGF0ZVRvU3RyaW5nID0gZGF5anModGltZSkuZm9ybWF0KFwiWVlZWeuFhCBN7JuUIETsnbxcIik7XG4gICAgY29uc3QgdGltZVRvU3RyaW5nID0gdGltZVV0aWwuY2hhbmdlVGltZUZvcm1hdFRvMTIoZGF5anModGltZSkpO1xuICAgIGNvbnN0IHByZXZDaGF0VGltZSA9IGNoYXRfbGlzdFtpbmRleCAtIDFdPy50aW1lO1xuICAgIGNvbnN0IG5leHRDaGF0VGltZSA9IGNoYXRfbGlzdFtpbmRleCArIDFdPy50aW1lO1xuXG4gICAgY29uc3QgY2hlY2tEYXRlR3JvdXAgPVxuICAgICAgcHJldkNoYXRUaW1lICYmXG4gICAgICBkYXlqcyh0aW1lKS5mb3JtYXQoXCJZWVlZTU1ERFwiKSA9PT0gZGF5anMocHJldkNoYXRUaW1lKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcbiAgICBjb25zdCBjaGVja01pbnV0c0dyb3VwID1cbiAgICAgIG5leHRDaGF0VGltZSAmJlxuICAgICAgZGF5anModGltZSkuZm9ybWF0KFwiWVlZWU1NRERISG1tXCIpID09PVxuICAgICAgICBkYXlqcyhuZXh0Q2hhdFRpbWUpLmZvcm1hdChcIllZWVlNTURESEhtbVwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5jaGF0LFxuICAgICAgdXNlcjogeyBpZCwgbmlja05hbWUsIGF2YXRhclVybCB9LFxuICAgICAgaXNBdXRoOiB1c2VyLmlkID09PSBhdXRoVXNlcklkLFxuICAgICAgaXNEYXRlR3JvdXA6IGNoZWNrRGF0ZUdyb3VwIHx8IGZhbHNlLFxuICAgICAgaXNNaW51dGVHcm91cDogY2hlY2tNaW51dHNHcm91cCB8fCBmYWxzZSxcbiAgICAgIHRpbWUsXG4gICAgICB0aW1lVG9TdHJpbmcsXG4gICAgICBkYXRlVG9TdHJpbmcsXG4gICAgICB1blJlYWRMZW5ndGgsXG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydENoYXREYXRhID0gc29ydFV0aWwuc29ydGVkT2RlclZhbHVlKGZpbHRlckNoYXREYXRhLCBcInRpbWVcIiwgdHJ1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICByb29tSW5mbzoge1xuICAgICAgcm9vbUlkOiByb29tX2lkLFxuICAgICAgcm9vbU5hbWUsXG4gICAgICByb29tSW1nLFxuICAgICAgaXNGcmllbmQsXG4gICAgICByb29tSm9iLFxuICAgIH0sXG4gICAgY2hhdERhdGE6IHNvcnRDaGF0RGF0YSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/feature/RoomList/RoomListParser.ts\n");

/***/ })

});