/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/feature/RoomList/RoomListParser.ts":
/*!************************************************!*\
  !*** ./src/feature/RoomList/RoomListParser.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomListParser\": function() { return /* binding */ roomListParser; },\n/* harmony export */   \"roomDataParser\": function() { return /* binding */ roomDataParser; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/weekday */ \"./node_modules/dayjs/plugin/weekday.js\");\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _api_api_sample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/api.sample */ \"./src/api/api.sample.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n // NOTI:\n// 기능: API 데이터 재 가공 -> roomList reducer\n// 목적: 데이터 구분, 로직 분리\n\nvar roomListParser = function roomListParser(authUserId, chatData) {\n  return chatData === null || chatData === void 0 ? void 0 : chatData.map(function (data) {\n    var _room_members$find, _chat_list$filter, _checkLastChat$;\n\n    var room_id = data.room_id,\n        room_info = data.room_info,\n        room_members = data.room_members,\n        chat_list = data.chat_list,\n        last_chat_time = data.last_chat_time;\n    var roomName = room_info.name,\n        roomImg = room_info.img,\n        isFriend = room_info.is_friend;\n    var authUserLastVisitTime = (_room_members$find = room_members.find(function (member) {\n      return member.id === authUserId;\n    })) === null || _room_members$find === void 0 ? void 0 : _room_members$find.last_visit_time;\n    var unReadChatLength = chat_list === null || chat_list === void 0 ? void 0 : (_chat_list$filter = chat_list.filter(function (item) {\n      if (authUserLastVisitTime) {\n        return item.user.id !== authUserId && authUserLastVisitTime < item.time;\n      } else {\n        return item;\n      }\n    })) === null || _chat_list$filter === void 0 ? void 0 : _chat_list$filter.length;\n    var checkLastChat = _utils__WEBPACK_IMPORTED_MODULE_4__.sortUtil.sortedOderValue(chat_list, \"time\", false);\n    var targetTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(last_chat_time);\n    var diffDay = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(targetTime, \"day\") === 0;\n    var viewLastChatTime = diffDay ? _utils__WEBPACK_IMPORTED_MODULE_4__.timeUtil.changeTimeFormatTo12(targetTime) : targetTime.format(\"YYYY년 M월 D일\");\n    return {\n      roomId: room_id,\n      roomName: roomName,\n      roomImg: {\n        url: roomImg,\n        isFriend: isFriend\n      },\n      unReadChatLength: unReadChatLength,\n      lastChatData: ((_checkLastChat$ = checkLastChat[0]) === null || _checkLastChat$ === void 0 ? void 0 : _checkLastChat$.data) || \"\",\n      lastChatTime: viewLastChatTime\n    };\n  });\n};\ndayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default())); // NOTI:\n// 기능: API 데이터 재 가공 -> room reducer\n// 목적: 데이터 구분, 로직 분리\n\nvar roomDataParser = function roomDataParser(authUserId, currentRoomDataAPI) {\n  var room_id = currentRoomDataAPI.room_id,\n      room_info = currentRoomDataAPI.room_info,\n      room_members = currentRoomDataAPI.room_members,\n      chat_list = currentRoomDataAPI.chat_list;\n  var roomName = room_info.name,\n      roomImg = room_info.img,\n      isFriend = room_info.is_friend,\n      roomJob = room_info.job;\n  var filterChatData = chat_list.map(function (chat, index) {\n    var _otherMembers$filter, _chat_list, _chat_list2;\n\n    var user = chat.user,\n        time = chat.time;\n    var id = user.id,\n        nickName = user.nick_name,\n        avatarUrl = user.avatar_url;\n    var otherMembers = room_members.filter(function (member) {\n      return member.id !== user.id;\n    }).map(function (member) {\n      var isFriend = _api_api_sample__WEBPACK_IMPORTED_MODULE_5__.friendAPI.findFriendId(member.id);\n      return _objectSpread(_objectSpread({}, member), {}, {\n        isFriend: isFriend\n      });\n    });\n    var unReadLength = (_otherMembers$filter = otherMembers.filter(function (member) {\n      return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNull)(member.last_visit_time) || member.last_visit_time < time;\n    })) === null || _otherMembers$filter === void 0 ? void 0 : _otherMembers$filter.length;\n    var dateToString = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYY년 M월 D일\");\n    var timeToString = _utils__WEBPACK_IMPORTED_MODULE_4__.timeUtil.changeTimeFormatTo12(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time));\n    var prevChatTime = (_chat_list = chat_list[index - 1]) === null || _chat_list === void 0 ? void 0 : _chat_list.time;\n    var nextChatTime = (_chat_list2 = chat_list[index + 1]) === null || _chat_list2 === void 0 ? void 0 : _chat_list2.time;\n    var checkDateGroup = prevChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDD\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(prevChatTime).format(\"YYYYMMDD\");\n    var checkMinutsGroup = nextChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDDHHmm\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(nextChatTime).format(\"YYYYMMDDHHmm\");\n    return _objectSpread(_objectSpread({}, chat), {}, {\n      user: {\n        id: id,\n        nickName: nickName,\n        avatarUrl: avatarUrl\n      },\n      isAuth: user.id === authUserId,\n      isDateGroup: checkDateGroup || false,\n      isMinuteGroup: checkMinutsGroup || false,\n      time: time,\n      timeToString: timeToString,\n      dateToString: dateToString,\n      unReadLength: unReadLength\n    });\n  });\n  var sortChatData = _utils__WEBPACK_IMPORTED_MODULE_4__.sortUtil.sortedOderValue(filterChatData, \"time\", true);\n  return {\n    roomInfo: {\n      roomId: room_id,\n      roomName: roomName,\n      roomImg: roomImg,\n      isFriend: isFriend,\n      roomJob: roomJob\n    },\n    chatData: sortChatData\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvUm9vbUxpc3QvUm9vbUxpc3RQYXJzZXIudHM/OTY3ZCJdLCJuYW1lcyI6WyJyb29tTGlzdFBhcnNlciIsImF1dGhVc2VySWQiLCJjaGF0RGF0YSIsIm1hcCIsImRhdGEiLCJyb29tX2lkIiwicm9vbV9pbmZvIiwicm9vbV9tZW1iZXJzIiwiY2hhdF9saXN0IiwibGFzdF9jaGF0X3RpbWUiLCJyb29tTmFtZSIsIm5hbWUiLCJyb29tSW1nIiwiaW1nIiwiaXNGcmllbmQiLCJpc19mcmllbmQiLCJhdXRoVXNlckxhc3RWaXNpdFRpbWUiLCJmaW5kIiwibWVtYmVyIiwiaWQiLCJsYXN0X3Zpc2l0X3RpbWUiLCJ1blJlYWRDaGF0TGVuZ3RoIiwiZmlsdGVyIiwiaXRlbSIsInVzZXIiLCJ0aW1lIiwibGVuZ3RoIiwiY2hlY2tMYXN0Q2hhdCIsInNvcnRVdGlsIiwidGFyZ2V0VGltZSIsImRheWpzIiwiZGlmZkRheSIsImRpZmYiLCJ2aWV3TGFzdENoYXRUaW1lIiwidGltZVV0aWwiLCJmb3JtYXQiLCJyb29tSWQiLCJ1cmwiLCJsYXN0Q2hhdERhdGEiLCJsYXN0Q2hhdFRpbWUiLCJ3ZWVrZGF5Iiwicm9vbURhdGFQYXJzZXIiLCJjdXJyZW50Um9vbURhdGFBUEkiLCJyb29tSm9iIiwiam9iIiwiZmlsdGVyQ2hhdERhdGEiLCJjaGF0IiwiaW5kZXgiLCJuaWNrTmFtZSIsIm5pY2tfbmFtZSIsImF2YXRhclVybCIsImF2YXRhcl91cmwiLCJvdGhlck1lbWJlcnMiLCJmcmllbmRBUEkiLCJ1blJlYWRMZW5ndGgiLCJpc051bGwiLCJkYXRlVG9TdHJpbmciLCJ0aW1lVG9TdHJpbmciLCJwcmV2Q2hhdFRpbWUiLCJuZXh0Q2hhdFRpbWUiLCJjaGVja0RhdGVHcm91cCIsImNoZWNrTWludXRzR3JvdXAiLCJpc0F1dGgiLCJpc0RhdGVHcm91cCIsImlzTWludXRlR3JvdXAiLCJzb3J0Q2hhdERhdGEiLCJyb29tSW5mbyJd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WkEsWUFSRjtBQVNFRixrQkFBWSxFQUFaQTtBQVRGO0FBV0QsR0F4Q3NCLENBQXZCO0FBMENBLE1BQU1XLFlBQVksR0FBR3JDLDREQUFBLENBQXlCaUIsY0FBekIsRUFBeUMsTUFBekMsRUFBaUQsSUFBakQsQ0FBckI7QUFFQSxTQUFPO0FBQ0xxQixZQUFRLEVBQUU7QUFDUjlCLFlBQU0sRUFBRS9CLE9BREE7QUFFUkssY0FBUSxFQUFSQSxRQUZRO0FBR1JFLGFBQU8sRUFBUEEsT0FIUTtBQUlSRSxjQUFRLEVBQVJBLFFBSlE7QUFLUjZCLGFBQU8sRUFBUEE7QUFMUSxLQURMO0FBUUx6QyxZQUFRLEVBQUUrRDtBQVJMLEdBQVA7QUFVRCxDQWxFTSIsImZpbGUiOiIuL3NyYy9mZWF0dXJlL1Jvb21MaXN0L1Jvb21MaXN0UGFyc2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHdlZWtkYXkgZnJvbSBcImRheWpzL3BsdWdpbi93ZWVrZGF5XCI7XG5pbXBvcnQgeyBpc051bGwgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB0aW1lVXRpbCwgc29ydFV0aWwgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IElNZW1iZXJBUEksIElDaGF0TGlzdEFQSSwgSUNoYXRBUEkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZyaWVuZEFQSSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpLnNhbXBsZVwiO1xuXG4vLyBOT1RJOlxuLy8g6riw64qlOiBBUEkg642w7J207YSwIOyerCDqsIDqs7UgLT4gcm9vbUxpc3QgcmVkdWNlclxuLy8g66qp7KCBOiDrjbDsnbTthLAg6rWs67aELCDroZzsp4Eg67aE66asXG5leHBvcnQgY29uc3Qgcm9vbUxpc3RQYXJzZXIgPSAoYXV0aFVzZXJJZDogc3RyaW5nLCBjaGF0RGF0YTogSUNoYXRBUElbXSkgPT4ge1xuICByZXR1cm4gY2hhdERhdGE/Lm1hcCgoZGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICBjb25zdCB7IHJvb21faWQsIHJvb21faW5mbywgcm9vbV9tZW1iZXJzLCBjaGF0X2xpc3QsIGxhc3RfY2hhdF90aW1lIH0gPVxuICAgICAgZGF0YTtcbiAgICBjb25zdCB7IG5hbWU6IHJvb21OYW1lLCBpbWc6IHJvb21JbWcsIGlzX2ZyaWVuZDogaXNGcmllbmQgfSA9IHJvb21faW5mbztcblxuICAgIGNvbnN0IGF1dGhVc2VyTGFzdFZpc2l0VGltZSA9IHJvb21fbWVtYmVycy5maW5kKFxuICAgICAgKG1lbWJlcjogSU1lbWJlckFQSSkgPT4gbWVtYmVyLmlkID09PSBhdXRoVXNlcklkXG4gICAgKT8ubGFzdF92aXNpdF90aW1lO1xuXG4gICAgY29uc3QgdW5SZWFkQ2hhdExlbmd0aCA9IGNoYXRfbGlzdD8uZmlsdGVyKChpdGVtOiBJQ2hhdExpc3RBUEkpID0+IHtcbiAgICAgIGlmIChhdXRoVXNlckxhc3RWaXNpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udXNlci5pZCAhPT0gYXV0aFVzZXJJZCAmJiBhdXRoVXNlckxhc3RWaXNpdFRpbWUgPCBpdGVtLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9KT8ubGVuZ3RoO1xuXG4gICAgY29uc3QgY2hlY2tMYXN0Q2hhdCA9IHNvcnRVdGlsLnNvcnRlZE9kZXJWYWx1ZShjaGF0X2xpc3QsIFwidGltZVwiLCBmYWxzZSk7XG5cbiAgICBjb25zdCB0YXJnZXRUaW1lID0gZGF5anMobGFzdF9jaGF0X3RpbWUpO1xuICAgIGNvbnN0IGRpZmZEYXkgPSBkYXlqcygpLmRpZmYodGFyZ2V0VGltZSwgXCJkYXlcIikgPT09IDA7XG5cbiAgICBjb25zdCB2aWV3TGFzdENoYXRUaW1lID0gZGlmZkRheVxuICAgICAgPyB0aW1lVXRpbC5jaGFuZ2VUaW1lRm9ybWF0VG8xMih0YXJnZXRUaW1lKVxuICAgICAgOiB0YXJnZXRUaW1lLmZvcm1hdChcIllZWVnrhYQgTeyblCBE7J28XCIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb21JZDogcm9vbV9pZCxcbiAgICAgIHJvb21OYW1lOiByb29tTmFtZSxcbiAgICAgIHJvb21JbWc6IHsgdXJsOiByb29tSW1nLCBpc0ZyaWVuZDogaXNGcmllbmQgfSxcbiAgICAgIHVuUmVhZENoYXRMZW5ndGg6IHVuUmVhZENoYXRMZW5ndGgsXG4gICAgICBsYXN0Q2hhdERhdGE6IGNoZWNrTGFzdENoYXRbMF0/LmRhdGEgfHwgXCJcIixcbiAgICAgIGxhc3RDaGF0VGltZTogdmlld0xhc3RDaGF0VGltZSxcbiAgICB9O1xuICB9KTtcbn07XG5cbmRheWpzLmV4dGVuZCh3ZWVrZGF5KTtcblxuLy8gTk9USTpcbi8vIOq4sOuKpTogQVBJIOuNsOydtO2EsCDsnqwg6rCA6rO1IC0+IHJvb20gcmVkdWNlclxuLy8g66qp7KCBOiDrjbDsnbTthLAg6rWs67aELCDroZzsp4Eg67aE66asXG5leHBvcnQgY29uc3Qgcm9vbURhdGFQYXJzZXIgPSAoXG4gIGF1dGhVc2VySWQ6IHN0cmluZyxcbiAgY3VycmVudFJvb21EYXRhQVBJOiBJQ2hhdEFQSVxuKSA9PiB7XG4gIGNvbnN0IHsgcm9vbV9pZCwgcm9vbV9pbmZvLCByb29tX21lbWJlcnMsIGNoYXRfbGlzdCB9ID0gY3VycmVudFJvb21EYXRhQVBJO1xuICBjb25zdCB7XG4gICAgbmFtZTogcm9vbU5hbWUsXG4gICAgaW1nOiByb29tSW1nLFxuICAgIGlzX2ZyaWVuZDogaXNGcmllbmQsXG4gICAgam9iOiByb29tSm9iLFxuICB9ID0gcm9vbV9pbmZvO1xuXG4gIGNvbnN0IGZpbHRlckNoYXREYXRhID0gY2hhdF9saXN0Lm1hcCgoY2hhdDogSUNoYXRMaXN0QVBJLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyLCB0aW1lIH0gPSBjaGF0O1xuICAgIGNvbnN0IHsgaWQsIG5pY2tfbmFtZTogbmlja05hbWUsIGF2YXRhcl91cmw6IGF2YXRhclVybCB9ID0gdXNlcjtcblxuICAgIGNvbnN0IG90aGVyTWVtYmVycyA9IHJvb21fbWVtYmVyc1xuICAgICAgLmZpbHRlcigobWVtYmVyOiBJTWVtYmVyQVBJKSA9PiBtZW1iZXIuaWQgIT09IHVzZXIuaWQpXG4gICAgICAubWFwKChtZW1iZXI6IElNZW1iZXJBUEkpID0+IHtcbiAgICAgICAgY29uc3QgaXNGcmllbmQgPSBmcmllbmRBUEkuZmluZEZyaWVuZElkKG1lbWJlci5pZCk7XG4gICAgICAgIHJldHVybiB7IC4uLm1lbWJlciwgaXNGcmllbmQgfTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgdW5SZWFkTGVuZ3RoID0gb3RoZXJNZW1iZXJzLmZpbHRlcihcbiAgICAgIChtZW1iZXI6IElNZW1iZXJBUEkpID0+XG4gICAgICAgIGlzTnVsbChtZW1iZXIubGFzdF92aXNpdF90aW1lKSB8fCBtZW1iZXIubGFzdF92aXNpdF90aW1lIDwgdGltZVxuICAgICk/Lmxlbmd0aDtcblxuICAgIGNvbnN0IGRhdGVUb1N0cmluZyA9IGRheWpzKHRpbWUpLmZvcm1hdChcIllZWVnrhYQgTeyblCBE7J28XCIpO1xuICAgIGNvbnN0IHRpbWVUb1N0cmluZyA9IHRpbWVVdGlsLmNoYW5nZVRpbWVGb3JtYXRUbzEyKGRheWpzKHRpbWUpKTtcbiAgICBjb25zdCBwcmV2Q2hhdFRpbWUgPSBjaGF0X2xpc3RbaW5kZXggLSAxXT8udGltZTtcbiAgICBjb25zdCBuZXh0Q2hhdFRpbWUgPSBjaGF0X2xpc3RbaW5kZXggKyAxXT8udGltZTtcblxuICAgIGNvbnN0IGNoZWNrRGF0ZUdyb3VwID1cbiAgICAgIHByZXZDaGF0VGltZSAmJlxuICAgICAgZGF5anModGltZSkuZm9ybWF0KFwiWVlZWU1NRERcIikgPT09IGRheWpzKHByZXZDaGF0VGltZSkuZm9ybWF0KFwiWVlZWU1NRERcIik7XG4gICAgY29uc3QgY2hlY2tNaW51dHNHcm91cCA9XG4gICAgICBuZXh0Q2hhdFRpbWUgJiZcbiAgICAgIGRheWpzKHRpbWUpLmZvcm1hdChcIllZWVlNTURESEhtbVwiKSA9PT1cbiAgICAgICAgZGF5anMobmV4dENoYXRUaW1lKS5mb3JtYXQoXCJZWVlZTU1EREhIbW1cIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2hhdCxcbiAgICAgIHVzZXI6IHsgaWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwgfSxcbiAgICAgIGlzQXV0aDogdXNlci5pZCA9PT0gYXV0aFVzZXJJZCxcbiAgICAgIGlzRGF0ZUdyb3VwOiBjaGVja0RhdGVHcm91cCB8fCBmYWxzZSxcbiAgICAgIGlzTWludXRlR3JvdXA6IGNoZWNrTWludXRzR3JvdXAgfHwgZmFsc2UsXG4gICAgICB0aW1lLFxuICAgICAgdGltZVRvU3RyaW5nLFxuICAgICAgZGF0ZVRvU3RyaW5nLFxuICAgICAgdW5SZWFkTGVuZ3RoLFxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRDaGF0RGF0YSA9IHNvcnRVdGlsLnNvcnRlZE9kZXJWYWx1ZShmaWx0ZXJDaGF0RGF0YSwgXCJ0aW1lXCIsIHRydWUpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vbUluZm86IHtcbiAgICAgIHJvb21JZDogcm9vbV9pZCxcbiAgICAgIHJvb21OYW1lLFxuICAgICAgcm9vbUltZyxcbiAgICAgIGlzRnJpZW5kLFxuICAgICAgcm9vbUpvYixcbiAgICB9LFxuICAgIGNoYXREYXRhOiBzb3J0Q2hhdERhdGEsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/feature/RoomList/RoomListParser.ts\n");

/***/ })

});