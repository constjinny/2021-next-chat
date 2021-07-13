/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/feature/room/RoomParser.ts":
/*!****************************************!*\
  !*** ./src/feature/room/RoomParser.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chatRoomDataParser\": function() { return /* binding */ chatRoomDataParser; }\n/* harmony export */ });\n/* harmony import */ var _Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/weekday */ \"./node_modules/dayjs/plugin/weekday.js\");\n/* harmony import */ var dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jinny_Desktop_j_2021_next_chat_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_weekday__WEBPACK_IMPORTED_MODULE_2___default())); // NOTI: API 데이터를 내부용으로 재가공 -> 데이터 구분 + 사용할 값만 reducer에 저장한다.\n\nvar chatRoomDataParser = function chatRoomDataParser(authUserId, currentRoomDataAPI) {\n  var chat_list = currentRoomDataAPI.chat_list,\n      room_id = currentRoomDataAPI.room_id,\n      room_members = currentRoomDataAPI.room_members,\n      room_name = currentRoomDataAPI.room_name;\n  var filterChatData = chat_list.map(function (chat, index) {\n    var _otherMembers$filter, _chat_list, _chat_list2;\n\n    var user = chat.user,\n        time = chat.time;\n    var id = user.id,\n        nickName = user.nick_name;\n    var otherMembers = room_members.filter(function (member) {\n      return member.id !== user.id;\n    });\n    var unReadLength = (_otherMembers$filter = otherMembers.filter(function (member) {\n      return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isNull)(member.last_visit_time) || member.last_visit_time < time;\n    })) === null || _otherMembers$filter === void 0 ? void 0 : _otherMembers$filter.length;\n    var dateToString = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYY년 M월 D일\");\n    var timeToString = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"HH:mm\");\n    var prevChatTime = (_chat_list = chat_list[index - 1]) === null || _chat_list === void 0 ? void 0 : _chat_list.time;\n    var nextChatTime = (_chat_list2 = chat_list[index + 1]) === null || _chat_list2 === void 0 ? void 0 : _chat_list2.time;\n    var checkDateGroup = prevChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDD\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(prevChatTime).format(\"YYYYMMDD\");\n    var checkMinutsGroup = nextChatTime && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format(\"YYYYMMDDHHmm\") === dayjs__WEBPACK_IMPORTED_MODULE_1___default()(nextChatTime).format(\"YYYYMMDDHHmm\");\n    return _objectSpread(_objectSpread({}, chat), {}, {\n      user: {\n        id: id,\n        nickName: nickName\n      },\n      isAuth: user.id === authUserId,\n      isDateGroup: checkDateGroup || false,\n      isMinuteGroup: checkMinutsGroup || false,\n      time: time,\n      timeToString: timeToString,\n      dateToString: dateToString,\n      unReadLength: unReadLength\n    });\n  });\n  var sortChatData = SortUtil.sortedOderValue(filterChatData, \"time\", true);\n  return {\n    roomInfo: {\n      roomId: room_id,\n      roomName: room_name\n    },\n    chatData: sortChatData\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcm9vbS9Sb29tUGFyc2VyLnRzPzM5MGEiXSwibmFtZXMiOlsiZGF5anMiLCJ3ZWVrZGF5IiwiY2hhdFJvb21EYXRhUGFyc2VyIiwiYXV0aFVzZXJJZCIsImN1cnJlbnRSb29tRGF0YUFQSSIsImNoYXRfbGlzdCIsInJvb21faWQiLCJyb29tX21lbWJlcnMiLCJyb29tX25hbWUiLCJmaWx0ZXJDaGF0RGF0YSIsIm1hcCIsImNoYXQiLCJpbmRleCIsInVzZXIiLCJ0aW1lIiwiaWQiLCJuaWNrTmFtZSIsIm5pY2tfbmFtZSIsIm90aGVyTWVtYmVycyIsImZpbHRlciIsIm1lbWJlciIsInVuUmVhZExlbmd0aCIsImlzTnVsbCIsImxhc3RfdmlzaXRfdGltZSIsImxlbmd0aCIsImRhdGVUb1N0cmluZyIsImZvcm1hdCIsInRpbWVUb1N0cmluZyIsInByZXZDaGF0VGltZSIsIm5leHRDaGF0VGltZSIsImNoZWNrRGF0ZUdyb3VwIiwiY2hlY2tNaW51dHNHcm91cCIsImlzQXV0aCIsImlzRGF0ZUdyb3VwIiwiaXNNaW51dGVHcm91cCIsInNvcnRDaGF0RGF0YSIsIlNvcnRVdGlsIiwic29ydGVkT2RlclZhbHVlIiwicm9vbUluZm8iLCJyb29tSWQiLCJyb29tTmFtZSIsImNoYXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQUEsbURBQUEsQ0FBYUMsNkRBQWIsRSxDQUVBOztBQUNPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FDaENDLFVBRGdDLEVBRWhDQyxrQkFGZ0MsRUFHN0I7QUFBQSxNQUNLQyxTQURMLEdBQ3FERCxrQkFEckQsQ0FDS0MsU0FETDtBQUFBLE1BQ2dCQyxPQURoQixHQUNxREYsa0JBRHJELENBQ2dCRSxPQURoQjtBQUFBLE1BQ3lCQyxZQUR6QixHQUNxREgsa0JBRHJELENBQ3lCRyxZQUR6QjtBQUFBLE1BQ3VDQyxTQUR2QyxHQUNxREosa0JBRHJELENBQ3VDSSxTQUR2QztBQUdILE1BQU1DLGNBQWMsR0FBR0osU0FBUyxDQUFDSyxHQUFWLENBQ3JCLFVBQUNDLElBQUQsRUFBMEJDLEtBQTFCLEVBQTRDO0FBQUE7O0FBQUEsUUFDbENDLElBRGtDLEdBQ25CRixJQURtQixDQUNsQ0UsSUFEa0M7QUFBQSxRQUM1QkMsSUFENEIsR0FDbkJILElBRG1CLENBQzVCRyxJQUQ0QjtBQUFBLFFBRWxDQyxFQUZrQyxHQUVORixJQUZNLENBRWxDRSxFQUZrQztBQUFBLFFBRW5CQyxRQUZtQixHQUVOSCxJQUZNLENBRTlCSSxTQUY4QjtBQUkxQyxRQUFNQyxZQUFZLEdBQUdYLFlBQVksQ0FBQ1ksTUFBYixDQUNuQixVQUFDQyxNQUFEO0FBQUEsYUFBNkJBLE1BQU0sQ0FBQ0wsRUFBUCxLQUFjRixJQUFJLENBQUNFLEVBQWhEO0FBQUEsS0FEbUIsQ0FBckI7QUFJQSxRQUFNTSxZQUFZLDJCQUFHSCxZQUFZLENBQUNDLE1BQWIsQ0FDbkIsVUFBQ0MsTUFBRDtBQUFBLGFBQ0VFLDhDQUFNLENBQUNGLE1BQU0sQ0FBQ0csZUFBUixDQUFOLElBQWtDSCxNQUFNLENBQUNHLGVBQVAsR0FBeUJULElBRDdEO0FBQUEsS0FEbUIsQ0FBSCx5REFBRyxxQkFHbEJVLE1BSEg7QUFLQSxRQUFNQyxZQUFZLEdBQUd6Qiw0Q0FBSyxDQUFDYyxJQUFELENBQUwsQ0FBWVksTUFBWixDQUFtQixhQUFuQixDQUFyQjtBQUNBLFFBQU1DLFlBQVksR0FBRzNCLDRDQUFLLENBQUNjLElBQUQsQ0FBTCxDQUFZWSxNQUFaLENBQW1CLE9BQW5CLENBQXJCO0FBQ0EsUUFBTUUsWUFBWSxpQkFBR3ZCLFNBQVMsQ0FBQ08sS0FBSyxHQUFHLENBQVQsQ0FBWiwrQ0FBRyxXQUFzQkUsSUFBM0M7QUFDQSxRQUFNZSxZQUFZLGtCQUFHeEIsU0FBUyxDQUFDTyxLQUFLLEdBQUcsQ0FBVCxDQUFaLGdEQUFHLFlBQXNCRSxJQUEzQztBQUVBLFFBQU1nQixjQUFjLEdBQ2xCRixZQUFZLElBQ1o1Qiw0Q0FBSyxDQUFDYyxJQUFELENBQUwsQ0FBWVksTUFBWixDQUFtQixVQUFuQixNQUNFMUIsNENBQUssQ0FBQzRCLFlBQUQsQ0FBTCxDQUFvQkYsTUFBcEIsQ0FBMkIsVUFBM0IsQ0FISjtBQUlBLFFBQU1LLGdCQUFnQixHQUNwQkYsWUFBWSxJQUNaN0IsNENBQUssQ0FBQ2MsSUFBRCxDQUFMLENBQVlZLE1BQVosQ0FBbUIsY0FBbkIsTUFDRTFCLDRDQUFLLENBQUM2QixZQUFELENBQUwsQ0FBb0JILE1BQXBCLENBQTJCLGNBQTNCLENBSEo7QUFLQSwyQ0FDS2YsSUFETDtBQUVFRSxVQUFJLEVBQUU7QUFBRUUsVUFBRSxFQUFGQSxFQUFGO0FBQU1DLGdCQUFRLEVBQVJBO0FBQU4sT0FGUjtBQUdFZ0IsWUFBTSxFQUFFbkIsSUFBSSxDQUFDRSxFQUFMLEtBQVlaLFVBSHRCO0FBSUU4QixpQkFBVyxFQUFFSCxjQUFjLElBQUksS0FKakM7QUFLRUksbUJBQWEsRUFBRUgsZ0JBQWdCLElBQUksS0FMckM7QUFNRWpCLFVBQUksRUFBSkEsSUFORjtBQU9FYSxrQkFBWSxFQUFaQSxZQVBGO0FBUUVGLGtCQUFZLEVBQVpBLFlBUkY7QUFTRUosa0JBQVksRUFBWkE7QUFURjtBQVdELEdBdkNvQixDQUF2QjtBQTBDQSxNQUFNYyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QjVCLGNBQXpCLEVBQXlDLE1BQXpDLEVBQWlELElBQWpELENBQXJCO0FBRUEsU0FBTztBQUNMNkIsWUFBUSxFQUFFO0FBQ1JDLFlBQU0sRUFBRWpDLE9BREE7QUFFUmtDLGNBQVEsRUFBRWhDO0FBRkYsS0FETDtBQUtMaUMsWUFBUSxFQUFFTjtBQUxMLEdBQVA7QUFPRCxDQXpETSIsImZpbGUiOiIuL3NyYy9mZWF0dXJlL3Jvb20vUm9vbVBhcnNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB3ZWVrZGF5IGZyb20gXCJkYXlqcy9wbHVnaW4vd2Vla2RheVwiO1xuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgeyB0aW1lVXRpbCwgc29ydFV0aWwgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IElBUElDaGF0UHJvcHMsIElBUElNZW1iZXJQcm9wcywgSUFQSUNoYXRMaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZGF5anMuZXh0ZW5kKHdlZWtkYXkpO1xuXG4vLyBOT1RJOiBBUEkg642w7J207YSw66W8IOuCtOu2gOyaqeycvOuhnCDsnqzqsIDqs7UgLT4g642w7J207YSwIOq1rOu2hCArIOyCrOyaqe2VoCDqsJLrp4wgcmVkdWNlcuyXkCDsoIDsnqXtlZzri6QuXG5leHBvcnQgY29uc3QgY2hhdFJvb21EYXRhUGFyc2VyID0gKFxuICBhdXRoVXNlcklkOiBzdHJpbmcsXG4gIGN1cnJlbnRSb29tRGF0YUFQSTogSUFQSUNoYXRQcm9wc1xuKSA9PiB7XG4gIGNvbnN0IHsgY2hhdF9saXN0LCByb29tX2lkLCByb29tX21lbWJlcnMsIHJvb21fbmFtZSB9ID0gY3VycmVudFJvb21EYXRhQVBJO1xuXG4gIGNvbnN0IGZpbHRlckNoYXREYXRhID0gY2hhdF9saXN0Lm1hcChcbiAgICAoY2hhdDogSUFQSUNoYXRMaXN0UHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgdXNlciwgdGltZSB9ID0gY2hhdDtcbiAgICAgIGNvbnN0IHsgaWQsIG5pY2tfbmFtZTogbmlja05hbWUgfSA9IHVzZXI7XG5cbiAgICAgIGNvbnN0IG90aGVyTWVtYmVycyA9IHJvb21fbWVtYmVycy5maWx0ZXIoXG4gICAgICAgIChtZW1iZXI6IElBUElNZW1iZXJQcm9wcykgPT4gbWVtYmVyLmlkICE9PSB1c2VyLmlkXG4gICAgICApO1xuXG4gICAgICBjb25zdCB1blJlYWRMZW5ndGggPSBvdGhlck1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAobWVtYmVyOiBJQVBJTWVtYmVyUHJvcHMpID0+XG4gICAgICAgICAgaXNOdWxsKG1lbWJlci5sYXN0X3Zpc2l0X3RpbWUpIHx8IG1lbWJlci5sYXN0X3Zpc2l0X3RpbWUgPCB0aW1lXG4gICAgICApPy5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGRhdGVUb1N0cmluZyA9IGRheWpzKHRpbWUpLmZvcm1hdChcIllZWVnrhYQgTeyblCBE7J28XCIpO1xuICAgICAgY29uc3QgdGltZVRvU3RyaW5nID0gZGF5anModGltZSkuZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgICBjb25zdCBwcmV2Q2hhdFRpbWUgPSBjaGF0X2xpc3RbaW5kZXggLSAxXT8udGltZTtcbiAgICAgIGNvbnN0IG5leHRDaGF0VGltZSA9IGNoYXRfbGlzdFtpbmRleCArIDFdPy50aW1lO1xuXG4gICAgICBjb25zdCBjaGVja0RhdGVHcm91cCA9XG4gICAgICAgIHByZXZDaGF0VGltZSAmJlxuICAgICAgICBkYXlqcyh0aW1lKS5mb3JtYXQoXCJZWVlZTU1ERFwiKSA9PT1cbiAgICAgICAgICBkYXlqcyhwcmV2Q2hhdFRpbWUpLmZvcm1hdChcIllZWVlNTUREXCIpO1xuICAgICAgY29uc3QgY2hlY2tNaW51dHNHcm91cCA9XG4gICAgICAgIG5leHRDaGF0VGltZSAmJlxuICAgICAgICBkYXlqcyh0aW1lKS5mb3JtYXQoXCJZWVlZTU1EREhIbW1cIikgPT09XG4gICAgICAgICAgZGF5anMobmV4dENoYXRUaW1lKS5mb3JtYXQoXCJZWVlZTU1EREhIbW1cIik7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNoYXQsXG4gICAgICAgIHVzZXI6IHsgaWQsIG5pY2tOYW1lIH0sXG4gICAgICAgIGlzQXV0aDogdXNlci5pZCA9PT0gYXV0aFVzZXJJZCxcbiAgICAgICAgaXNEYXRlR3JvdXA6IGNoZWNrRGF0ZUdyb3VwIHx8IGZhbHNlLFxuICAgICAgICBpc01pbnV0ZUdyb3VwOiBjaGVja01pbnV0c0dyb3VwIHx8IGZhbHNlLFxuICAgICAgICB0aW1lLFxuICAgICAgICB0aW1lVG9TdHJpbmcsXG4gICAgICAgIGRhdGVUb1N0cmluZyxcbiAgICAgICAgdW5SZWFkTGVuZ3RoLFxuICAgICAgfTtcbiAgICB9XG4gICk7XG5cbiAgY29uc3Qgc29ydENoYXREYXRhID0gU29ydFV0aWwuc29ydGVkT2RlclZhbHVlKGZpbHRlckNoYXREYXRhLCBcInRpbWVcIiwgdHJ1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICByb29tSW5mbzoge1xuICAgICAgcm9vbUlkOiByb29tX2lkLFxuICAgICAgcm9vbU5hbWU6IHJvb21fbmFtZSxcbiAgICB9LFxuICAgIGNoYXREYXRhOiBzb3J0Q2hhdERhdGEsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/feature/room/RoomParser.ts\n");

/***/ })

});