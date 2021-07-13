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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"roomListParser\": function() { return /* binding */ roomListParser; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// NOTI:\n// 기능: API 데이터 재 가공 -> reducer\n// 목적: 데이터 구분, 로직 분리\nvar roomListParser = function roomListParser(authUserId, chatData) {\n  return chatData === null || chatData === void 0 ? void 0 : chatData.map(function (data) {\n    var _room_members$find, _chat_list$filter;\n\n    var room_id = data.room_id,\n        room_name = data.room_name,\n        room_img = data.room_img,\n        room_members = data.room_members,\n        chat_list = data.chat_list,\n        last_chat_time = data.last_chat_time;\n    var authUserLastVisitTime = (_room_members$find = room_members.find(function (member) {\n      return member.id === authUserId;\n    })) === null || _room_members$find === void 0 ? void 0 : _room_members$find.last_visit_time;\n    var unReadChatLength = chat_list === null || chat_list === void 0 ? void 0 : (_chat_list$filter = chat_list.filter(function (item) {\n      if (authUserLastVisitTime) {\n        return item.user.id !== authUserId && authUserLastVisitTime < item.time;\n      }\n\n      return false;\n    })) === null || _chat_list$filter === void 0 ? void 0 : _chat_list$filter.length;\n    var checkLastChat = _utils__WEBPACK_IMPORTED_MODULE_1__.sortUtil.sortedOderValue(chat_list, \"time\", false)[0];\n    var targetTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(last_chat_time);\n    var diffDay = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().diff(targetTime, \"day\") === 0;\n    var viewLastChatTime = diffDay ? _utils__WEBPACK_IMPORTED_MODULE_1__.timeUtil.changeTimeFormatTo12(targetTime) : targetTime.format(\"YYYY년 M월 D일\");\n    return {\n      roomId: room_id,\n      roomName: room_name,\n      roomImg: {\n        url: room_img.avatar_url,\n        isFriend: room_img.is_friend\n      },\n      unReadChatLength: unReadChatLength,\n      lastChatData: \"checkLastChat\",\n      lastChatTime: viewLastChatTime\n    };\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvUm9vbUxpc3QvUm9vbUxpc3RQYXJzZXIudHM/OTY3ZCJdLCJuYW1lcyI6WyJyb29tTGlzdFBhcnNlciIsImF1dGhVc2VySWQiLCJjaGF0RGF0YSIsIm1hcCIsImRhdGEiLCJyb29tX2lkIiwicm9vbV9uYW1lIiwicm9vbV9pbWciLCJyb29tX21lbWJlcnMiLCJjaGF0X2xpc3QiLCJsYXN0X2NoYXRfdGltZSIsImF1dGhVc2VyTGFzdFZpc2l0VGltZSIsImZpbmQiLCJtZW1iZXIiLCJpZCIsImxhc3RfdmlzaXRfdGltZSIsInVuUmVhZENoYXRMZW5ndGgiLCJmaWx0ZXIiLCJpdGVtIiwidXNlciIsInRpbWUiLCJsZW5ndGgiLCJjaGVja0xhc3RDaGF0Iiwic29ydFV0aWwiLCJ0YXJnZXRUaW1lIiwiZGF5anMiLCJkaWZmRGF5IiwiZGlmZiIsInZpZXdMYXN0Q2hhdFRpbWUiLCJ0aW1lVXRpbCIsImZvcm1hdCIsInJvb21JZCIsInJvb21OYW1lIiwicm9vbUltZyIsInVybCIsImF2YXRhcl91cmwiLCJpc0ZyaWVuZCIsImlzX2ZyaWVuZCIsImxhc3RDaGF0RGF0YSIsImxhc3RDaGF0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQXFCQyxRQUFyQixFQUE4QztBQUMxRSxTQUFPQSxRQUFQLGFBQU9BLFFBQVAsdUJBQU9BLFFBQVEsQ0FBRUMsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBb0I7QUFBQTs7QUFBQSxRQUVyQ0MsT0FGcUMsR0FRbkNELElBUm1DLENBRXJDQyxPQUZxQztBQUFBLFFBR3JDQyxTQUhxQyxHQVFuQ0YsSUFSbUMsQ0FHckNFLFNBSHFDO0FBQUEsUUFJckNDLFFBSnFDLEdBUW5DSCxJQVJtQyxDQUlyQ0csUUFKcUM7QUFBQSxRQUtyQ0MsWUFMcUMsR0FRbkNKLElBUm1DLENBS3JDSSxZQUxxQztBQUFBLFFBTXJDQyxTQU5xQyxHQVFuQ0wsSUFSbUMsQ0FNckNLLFNBTnFDO0FBQUEsUUFPckNDLGNBUHFDLEdBUW5DTixJQVJtQyxDQU9yQ00sY0FQcUM7QUFVdkMsUUFBTUMscUJBQXFCLHlCQUFHSCxZQUFZLENBQUNJLElBQWIsQ0FDNUIsVUFBQ0MsTUFBRDtBQUFBLGFBQXdCQSxNQUFNLENBQUNDLEVBQVAsS0FBY2IsVUFBdEM7QUFBQSxLQUQ0QixDQUFILHVEQUFHLG1CQUUzQmMsZUFGSDtBQUlBLFFBQU1DLGdCQUFnQixHQUFHUCxTQUFILGFBQUdBLFNBQUgsNENBQUdBLFNBQVMsQ0FBRVEsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQXdCO0FBQ2pFLFVBQUlQLHFCQUFKLEVBQTJCO0FBQ3pCLGVBQU9PLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxFQUFWLEtBQWlCYixVQUFqQixJQUErQlUscUJBQXFCLEdBQUdPLElBQUksQ0FBQ0UsSUFBbkU7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQUx3QixDQUFILHNEQUFHLGtCQUtyQkMsTUFMSjtBQU9BLFFBQU1DLGFBQWEsR0FBR0MsNERBQUEsQ0FBeUJkLFNBQXpCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELENBQW5ELENBQXRCO0FBRUEsUUFBTWUsVUFBVSxHQUFHQyw0Q0FBSyxDQUFDZixjQUFELENBQXhCO0FBQ0EsUUFBTWdCLE9BQU8sR0FBR0QsNENBQUssR0FBR0UsSUFBUixDQUFhSCxVQUFiLEVBQXlCLEtBQXpCLE1BQW9DLENBQXBEO0FBRUEsUUFBTUksZ0JBQWdCLEdBQUdGLE9BQU8sR0FDNUJHLGlFQUFBLENBQThCTCxVQUE5QixDQUQ0QixHQUU1QkEsVUFBVSxDQUFDTSxNQUFYLENBQWtCLGFBQWxCLENBRko7QUFJQSxXQUFPO0FBQ0xDLFlBQU0sRUFBRTFCLE9BREg7QUFFTDJCLGNBQVEsRUFBRTFCLFNBRkw7QUFHTDJCLGFBQU8sRUFBRTtBQUFFQyxXQUFHLEVBQUUzQixRQUFRLENBQUM0QixVQUFoQjtBQUE0QkMsZ0JBQVEsRUFBRTdCLFFBQVEsQ0FBQzhCO0FBQS9DLE9BSEo7QUFJTHJCLHNCQUFnQixFQUFFQSxnQkFKYjtBQUtMc0Isa0JBQVksRUFBRSxlQUxUO0FBTUxDLGtCQUFZLEVBQUVYO0FBTlQsS0FBUDtBQVFELEdBdENNLENBQVA7QUF1Q0QsQ0F4Q00iLCJmaWxlIjoiLi9zcmMvZmVhdHVyZS9Sb29tTGlzdC9Sb29tTGlzdFBhcnNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IHRpbWVVdGlsLCBzb3J0VXRpbCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgSU1lbWJlckFQSSwgSUNoYXRMaXN0QVBJLCBJQ2hhdEFQSSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBOT1RJOlxuLy8g6riw64qlOiBBUEkg642w7J207YSwIOyerCDqsIDqs7UgLT4gcmVkdWNlclxuLy8g66qp7KCBOiDrjbDsnbTthLAg6rWs67aELCDroZzsp4Eg67aE66asXG5leHBvcnQgY29uc3Qgcm9vbUxpc3RQYXJzZXIgPSAoYXV0aFVzZXJJZDogc3RyaW5nLCBjaGF0RGF0YTogSUNoYXRBUElbXSkgPT4ge1xuICByZXR1cm4gY2hhdERhdGE/Lm1hcCgoZGF0YTogSUNoYXRBUEkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByb29tX2lkLFxuICAgICAgcm9vbV9uYW1lLFxuICAgICAgcm9vbV9pbWcsXG4gICAgICByb29tX21lbWJlcnMsXG4gICAgICBjaGF0X2xpc3QsXG4gICAgICBsYXN0X2NoYXRfdGltZSxcbiAgICB9ID0gZGF0YTtcblxuICAgIGNvbnN0IGF1dGhVc2VyTGFzdFZpc2l0VGltZSA9IHJvb21fbWVtYmVycy5maW5kKFxuICAgICAgKG1lbWJlcjogSU1lbWJlckFQSSkgPT4gbWVtYmVyLmlkID09PSBhdXRoVXNlcklkXG4gICAgKT8ubGFzdF92aXNpdF90aW1lO1xuXG4gICAgY29uc3QgdW5SZWFkQ2hhdExlbmd0aCA9IGNoYXRfbGlzdD8uZmlsdGVyKChpdGVtOiBJQ2hhdExpc3RBUEkpID0+IHtcbiAgICAgIGlmIChhdXRoVXNlckxhc3RWaXNpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udXNlci5pZCAhPT0gYXV0aFVzZXJJZCAmJiBhdXRoVXNlckxhc3RWaXNpdFRpbWUgPCBpdGVtLnRpbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk/Lmxlbmd0aDtcblxuICAgIGNvbnN0IGNoZWNrTGFzdENoYXQgPSBzb3J0VXRpbC5zb3J0ZWRPZGVyVmFsdWUoY2hhdF9saXN0LCBcInRpbWVcIiwgZmFsc2UpWzBdO1xuXG4gICAgY29uc3QgdGFyZ2V0VGltZSA9IGRheWpzKGxhc3RfY2hhdF90aW1lKTtcbiAgICBjb25zdCBkaWZmRGF5ID0gZGF5anMoKS5kaWZmKHRhcmdldFRpbWUsIFwiZGF5XCIpID09PSAwO1xuXG4gICAgY29uc3Qgdmlld0xhc3RDaGF0VGltZSA9IGRpZmZEYXlcbiAgICAgID8gdGltZVV0aWwuY2hhbmdlVGltZUZvcm1hdFRvMTIodGFyZ2V0VGltZSlcbiAgICAgIDogdGFyZ2V0VGltZS5mb3JtYXQoXCJZWVlZ64WEIE3sm5QgROydvFwiKTtcblxuICAgIHJldHVybiB7XG4gICAgICByb29tSWQ6IHJvb21faWQsXG4gICAgICByb29tTmFtZTogcm9vbV9uYW1lLFxuICAgICAgcm9vbUltZzogeyB1cmw6IHJvb21faW1nLmF2YXRhcl91cmwsIGlzRnJpZW5kOiByb29tX2ltZy5pc19mcmllbmQgfSxcbiAgICAgIHVuUmVhZENoYXRMZW5ndGg6IHVuUmVhZENoYXRMZW5ndGgsXG4gICAgICBsYXN0Q2hhdERhdGE6IFwiY2hlY2tMYXN0Q2hhdFwiLFxuICAgICAgbGFzdENoYXRUaW1lOiB2aWV3TGFzdENoYXRUaW1lLFxuICAgIH07XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/feature/RoomList/RoomListParser.ts\n");

/***/ })

});