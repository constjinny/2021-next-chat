/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/data/data.sample.ts":
/*!*********************************!*\
  !*** ./src/data/data.sample.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/user1-avatar.png */ \"./public/images/user1-avatar.png\");\n/* harmony import */ var _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/user2-avatar.png */ \"./public/images/user2-avatar.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar LAST_VISIT = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(48, \"hour\").valueOf();\nvar authUser = {\n  id: \"roket\",\n  nick_name: \"홍로켓\",\n  avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n};\nvar friends = [{\n  id: \"user1\",\n  nick_name: \"최예슬\",\n  avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n}, {\n  id: \"user2\",\n  nick_name: \"김펀치\",\n  avatar_url: \"\"\n}, {\n  id: \"user3\",\n  nick_name: \"이윤호\",\n  avatar_url: \"\"\n}];\nvar chat = [{\n  room_id: \"chatRoom4359309\",\n  room_info: {\n    name: \"최예슬\",\n    img: {\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default,\n      is_friend: true\n    },\n    job: \"웹앱 UX 디자이너\",\n    is_friend: true\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user1\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"안녕하세요. 최예슬님.\\n로켓펀치 담당자 홍로켓입니다.\\n\\n지원해주신 UX디자이너 직무 서류전형에 합격하시어,\\n다음 전형인 Interview가 진행 될 예정이며, Interview 가능 일정 하기 내용 참고하시어 공유부탁드립니다.\\n\\n1. 면접 일시\\n2016.12.00 오후 00시 00분\\n상기일정 불가하실경우 일정 공유 부탁드립니다:)\\n\\n2. 면접 장소\\n대한민국 서울특별시 금천구 가산동 327-30 로켓건물 3층\\n\\n이외 문의사항 있으시면 편히 말씀 부탁드립니다.\\n\\n감사합니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(4, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user1\",\n      nick_name: \"최예슬\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"안녕하세요. 서류지원 합격한 최예슬입니다.\\n우선 좋은 소식 감사드립니다.\\n제안 주신\u001c일정에 면접이 가능하므로 그때 뵙겠습니다.ㄴ\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(1, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(50, \"second\").valueOf()\n}];\nvar dummyData = {\n  authUser: authUser,\n  friends: friends,\n  chat: chat\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dummyData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZGF0YS5zYW1wbGUudHM/YWUxMCJdLCJuYW1lcyI6WyJMQVNUX1ZJU0lUIiwiZGF5anMiLCJzdWJ0cmFjdCIsInZhbHVlT2YiLCJhdXRoVXNlciIsImlkIiwibmlja19uYW1lIiwiYXZhdGFyX3VybCIsImF2YXRhcjEiLCJmcmllbmRzIiwiYXZhdGFyMiIsImNoYXQiLCJyb29tX2lkIiwicm9vbV9pbmZvIiwibmFtZSIsImltZyIsImlzX2ZyaWVuZCIsImpvYiIsInJvb21fbWVtYmVycyIsImxhc3RfdmlzaXRfdGltZSIsImFkZCIsImNoYXRfbGlzdCIsInVzZXIiLCJkYXRhIiwidGltZSIsImxhc3RfY2hhdF90aW1lIiwiZHVtbXlEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQSxJQUFNQSxVQUFVLEdBQUdDLDRDQUFLLEdBQUdDLFFBQVIsQ0FBaUIsRUFBakIsRUFBcUIsTUFBckIsRUFBNkJDLE9BQTdCLEVBQW5CO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLElBQUUsRUFBRSxPQURXO0FBRWZDLFdBQVMsRUFBRSxLQUZJO0FBR2ZDLFlBQVUsRUFBRUMsb0VBQU9BO0FBSEosQ0FBakI7QUFNQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFSixJQUFFLEVBQUUsT0FBTjtBQUFlQyxXQUFTLEVBQUUsS0FBMUI7QUFBaUNDLFlBQVUsRUFBRUcsb0VBQU9BO0FBQXBELENBRGMsRUFFZDtBQUFFTCxJQUFFLEVBQUUsT0FBTjtBQUFlQyxXQUFTLEVBQUUsS0FBMUI7QUFBaUNDLFlBQVUsRUFBRTtBQUE3QyxDQUZjLEVBR2Q7QUFBRUYsSUFBRSxFQUFFLE9BQU47QUFBZUMsV0FBUyxFQUFFLEtBQTFCO0FBQWlDQyxZQUFVLEVBQUU7QUFBN0MsQ0FIYyxDQUFoQjtBQU1BLElBQU1JLElBQUksR0FBRyxDQUNYO0FBQ0VDLFNBQU8sRUFBRSxpQkFEWDtBQUVFQyxXQUFTLEVBQUU7QUFDVEMsUUFBSSxFQUFFLEtBREc7QUFFVEMsT0FBRyxFQUFFO0FBQUVSLGdCQUFVLEVBQUVHLG9FQUFkO0FBQXVCTSxlQUFTLEVBQUU7QUFBbEMsS0FGSTtBQUdUQyxPQUFHLEVBQUUsWUFISTtBQUlURCxhQUFTLEVBQUU7QUFKRixHQUZiO0FBUUVFLGNBQVksRUFBRSxDQUNaO0FBQUViLE1BQUUsRUFBRSxPQUFOO0FBQWVjLG1CQUFlLEVBQUVuQjtBQUFoQyxHQURZLEVBRVo7QUFDRUssTUFBRSxFQUFFLE9BRE47QUFFRWMsbUJBQWUsRUFBRWxCLDRDQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQm9CLEdBQWxCLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLEVBQXNDakIsT0FBdEM7QUFGbkIsR0FGWSxDQVJoQjtBQWVFa0IsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsUUFBSSxFQUFFO0FBQ0pqQixRQUFFLEVBQUUsT0FEQTtBQUVKQyxlQUFTLEVBQUUsS0FGUDtBQUdKQyxnQkFBVSxFQUFFQyxvRUFBT0E7QUFIZixLQURSO0FBTUVlLFFBQUksRUFBRSwwUkFOUjtBQU9FQyxRQUFJLEVBQUV2Qiw0Q0FBSyxDQUFDRCxVQUFELENBQUwsQ0FBa0JFLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLE1BQTlCLEVBQXNDQyxPQUF0QztBQVBSLEdBRFMsRUFVVDtBQUNFbUIsUUFBSSxFQUFFO0FBQ0pqQixRQUFFLEVBQUUsT0FEQTtBQUVKQyxlQUFTLEVBQUUsS0FGUDtBQUdKQyxnQkFBVSxFQUFFRyxvRUFBT0E7QUFIZixLQURSO0FBTUVhLFFBQUksRUFBRSwyRUFOUjtBQU9FQyxRQUFJLEVBQUV2Qiw0Q0FBSyxDQUFDRCxVQUFELENBQUwsQ0FBa0JFLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLE1BQTlCLEVBQXNDQyxPQUF0QztBQVBSLEdBVlMsQ0FmYjtBQW1DRXNCLGdCQUFjLEVBQUV4Qiw0Q0FBSyxHQUFHQyxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLFFBQXJCLEVBQStCQyxPQUEvQjtBQW5DbEIsQ0FEVyxDQUFiO0FBd0NBLElBQU11QixTQUFTLEdBQUc7QUFBRXRCLFVBQVEsRUFBUkEsUUFBRjtBQUFZSyxTQUFPLEVBQVBBLE9BQVo7QUFBcUJFLE1BQUksRUFBSkE7QUFBckIsQ0FBbEI7QUFFQSwrREFBZWUsU0FBZiIsImZpbGUiOiIuL3NyYy9kYXRhL2RhdGEuc2FtcGxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuXG5pbXBvcnQgYXZhdGFyMSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy91c2VyMS1hdmF0YXIucG5nXCI7XG5pbXBvcnQgYXZhdGFyMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy91c2VyMi1hdmF0YXIucG5nXCI7XG5pbXBvcnQgYXZhdGFyMyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy91c2VyMy1hdmF0YXIucG5nXCI7XG5cbmNvbnN0IExBU1RfVklTSVQgPSBkYXlqcygpLnN1YnRyYWN0KDQ4LCBcImhvdXJcIikudmFsdWVPZigpO1xuXG5jb25zdCBhdXRoVXNlciA9IHtcbiAgaWQ6IFwicm9rZXRcIixcbiAgbmlja19uYW1lOiBcIu2ZjeuhnOy8k1wiLFxuICBhdmF0YXJfdXJsOiBhdmF0YXIxLFxufTtcblxuY29uc3QgZnJpZW5kcyA9IFtcbiAgeyBpZDogXCJ1c2VyMVwiLCBuaWNrX25hbWU6IFwi7LWc7JiI7IqsXCIsIGF2YXRhcl91cmw6IGF2YXRhcjIgfSxcbiAgeyBpZDogXCJ1c2VyMlwiLCBuaWNrX25hbWU6IFwi6rmA7Y6A7LmYXCIsIGF2YXRhcl91cmw6IFwiXCIgfSxcbiAgeyBpZDogXCJ1c2VyM1wiLCBuaWNrX25hbWU6IFwi7J207Jyk7Zi4XCIsIGF2YXRhcl91cmw6IFwiXCIgfSxcbl07XG5cbmNvbnN0IGNoYXQgPSBbXG4gIHtcbiAgICByb29tX2lkOiBcImNoYXRSb29tNDM1OTMwOVwiLFxuICAgIHJvb21faW5mbzoge1xuICAgICAgbmFtZTogXCLstZzsmIjsiqxcIixcbiAgICAgIGltZzogeyBhdmF0YXJfdXJsOiBhdmF0YXIyLCBpc19mcmllbmQ6IHRydWUgfSxcbiAgICAgIGpvYjogXCLsm7nslbEgVVgg65SU7J6Q7J2064SIXCIsXG4gICAgICBpc19mcmllbmQ6IHRydWUsXG4gICAgfSxcbiAgICByb29tX21lbWJlcnM6IFtcbiAgICAgIHsgaWQ6IFwicm9rZXRcIiwgbGFzdF92aXNpdF90aW1lOiBMQVNUX1ZJU0lUIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInVzZXIxXCIsXG4gICAgICAgIGxhc3RfdmlzaXRfdGltZTogZGF5anMoTEFTVF9WSVNJVCkuYWRkKDcyNTAsIFwic2Vjb25kXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjaGF0X2xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInJva2V0XCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIu2ZjeuhnOy8k1wiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjEsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi7JWI64WV7ZWY7IS47JqULiDstZzsmIjsiqzri5guXFxu66Gc7LyT7Y6A7LmYIOuLtOuLueyekCDtmY3roZzsvJPsnoXri4jri6QuXFxuXFxu7KeA7JuQ7ZW07KO87IugIFVY65SU7J6Q7J2064SIIOyngeustCDshJzrpZjsoITtmJXsl5Ag7ZWp6rKp7ZWY7Iuc7Ja0LFxcbuuLpOydjCDsoITtmJXsnbggSW50ZXJ2aWV36rCAIOynhO2WiSDrkKAg7JiI7KCV7J2066mwLCBJbnRlcnZpZXcg6rCA64qlIOydvOyglSDtlZjquLAg64K07JqpIOywuOqzoO2VmOyLnOyWtCDqs7XsnKDrtoDtg4Hrk5zrpr3ri4jri6QuXFxuXFxuMS4g66m07KCRIOydvOyLnFxcbjIwMTYuMTIuMDAg7Jik7ZuEIDAw7IucIDAw67aEXFxu7IOB6riw7J287KCVIOu2iOqwgO2VmOyLpOqyveyasCDsnbzsoJUg6rO17JygIOu2gO2DgeuTnOumveuLiOuLpDopXFxuXFxuMi4g66m07KCRIOyepeyGjFxcbuuMgO2VnOuvvOq1rSDshJzsmrjtirnrs4Tsi5wg6riI7LKc6rWsIOqwgOyCsOuPmSAzMjctMzAg66Gc7LyT6rG066y8IDPsuLVcXG5cXG7snbTsmbgg66y47J2Y7IKs7ZWtIOyeiOycvOyLnOuptCDtjrjtnogg66eQ7JSAIOu2gO2DgeuTnOumveuLiOuLpC5cXG5cXG7qsJDsgqztlanri4jri6QuXCIsXG4gICAgICAgIHRpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDQsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjFcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7LWc7JiI7IqsXCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLslYjrhZXtlZjshLjsmpQuIOyEnOulmOyngOybkCDtlanqsqntlZwg7LWc7JiI7Iqs7J6F64uI64ukLlxcbuyasOyEoCDsoovsnYAg7IaM7IudIOqwkOyCrOuTnOumveuLiOuLpC5cXG7soJzslYgg7KO87IugXHUwMDFj7J287KCV7JeQIOuptOygkeydtCDqsIDriqXtlZjrr4DroZwg6re465WMIOu1meqyoOyKteuLiOuLpC7jhLRcIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMSwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsYXN0X2NoYXRfdGltZTogZGF5anMoKS5zdWJ0cmFjdCg1MCwgXCJzZWNvbmRcIikudmFsdWVPZigpLFxuICB9LFxuXTtcblxuY29uc3QgZHVtbXlEYXRhID0geyBhdXRoVXNlciwgZnJpZW5kcywgY2hhdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBkdW1teURhdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/data.sample.ts\n");

/***/ })

});