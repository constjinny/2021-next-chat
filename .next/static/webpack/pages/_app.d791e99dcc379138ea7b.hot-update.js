/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/data/data.sample.ts":
/*!*********************************!*\
  !*** ./src/data/data.sample.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/user1-avatar.png */ \"./public/images/user1-avatar.png\");\n/* harmony import */ var _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/user2-avatar.png */ \"./public/images/user2-avatar.png\");\n/* harmony import */ var _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/user3-avatar.png */ \"./public/images/user3-avatar.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar LAST_VISIT = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(48, \"hour\").valueOf();\nvar authUser = {\n  id: \"roket\",\n  nick_name: \"홍로켓\",\n  avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n};\nvar friends = [{\n  id: \"user1\",\n  nick_name: \"최예슬\",\n  avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n}, {\n  id: \"user2\",\n  nick_name: \"김펀치\",\n  avatar_url: \"\"\n}, {\n  id: \"user3\",\n  nick_name: \"이윤호\",\n  avatar_url: \"\"\n}];\nvar chat = [{\n  room_id: \"chatRoom4359309\",\n  room_info: {\n    name: \"최예슬\",\n    img: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default,\n    job: \"웹앱 UX 디자이너\",\n    is_friend: true\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user1\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"안녕하세요. 최예슬님.\\n로켓펀치 담당자 홍로켓입니다.\\n\\n지원해주신 UX디자이너 직무 서류전형에 합격하시어,\\n다음 전형인 Interview가 진행 될 예정이며, Interview 가능 일정 하기 내용 참고하시어 공유부탁드립니다.\\n\\n1. 면접 일시\\n2016.12.00 오후 00시 00분\\n상기일정 불가하실경우 일정 공유 부탁드립니다:)\\n\\n2. 면접 장소\\n대한민국 서울특별시 금천구 가산동 327-30 로켓건물 3층\\n\\n이외 문의사항 있으시면 편히 말씀 부탁드립니다.\\n\\n감사합니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(28, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user1\",\n      nick_name: \"최예슬\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"안녕하세요. 서류지원 합격한 최예슬입니다.\\n우선 좋은 소식 감사드립니다.\\n제안 주신\u001c일정에 면접이 가능하므로 그때 뵙겠습니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(1, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(50, \"second\").valueOf()\n}, {\n  room_id: \"chatRoom4233\",\n  room_info: {\n    name: \"Shin Ye-Ji\",\n    img: _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    job: \"웹앱 UX 디자이너\",\n    is_friend: false\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user4\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"user5\",\n      nick_name: \"Shin Ye-Ji\",\n      avatar_url: _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__.default\n    },\n    data: \"안녕하세요 서류지원 합격한 신예지입니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(20, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(20, \"hour\").valueOf()\n}, {\n  room_id: \"chatRoom43\",\n  room_info: {\n    name: \"김펀치\",\n    img: \"\",\n    job: \"웹앱 UX 디자이너\",\n    is_friend: false\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user4\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"user1\",\n      nick_name: \"최예슬\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"안녕하세요. 로켓님.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(81, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user1\",\n      nick_name: \"최예슬\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"디자이너 최예슬님을 소개 좀 부탁드리고 싶습니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(80, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(80, \"hour\").valueOf()\n}, {\n  room_id: \"chatRoom4343545222\",\n  room_info: {\n    name: \"이윤호\",\n    img: \"\",\n    job: \"웹앱 UX 디자이너\",\n    is_friend: true\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user3\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"user3\",\n      nick_name: \"이윤호\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"요즘 뭐하고 지내.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(121, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user3\",\n      nick_name: \"이윤호\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"나도 이제 곧 포폴 준비해야 하는데 나중에 완성되면 한번 봐줘\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(120, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(120, \"hour\").valueOf()\n}];\nvar dummyData = {\n  authUser: authUser,\n  friends: friends,\n  chat: chat\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dummyData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZGF0YS5zYW1wbGUudHM/YWUxMCJdLCJuYW1lcyI6WyJMQVNUX1ZJU0lUIiwiZGF5anMiLCJzdWJ0cmFjdCIsInZhbHVlT2YiLCJhdXRoVXNlciIsImlkIiwibmlja19uYW1lIiwiYXZhdGFyX3VybCIsImF2YXRhcjEiLCJmcmllbmRzIiwiYXZhdGFyMiIsImNoYXQiLCJyb29tX2lkIiwicm9vbV9pbmZvIiwibmFtZSIsImltZyIsImpvYiIsImlzX2ZyaWVuZCIsInJvb21fbWVtYmVycyIsImxhc3RfdmlzaXRfdGltZSIsImFkZCIsImNoYXRfbGlzdCIsInVzZXIiLCJkYXRhIiwidGltZSIsImxhc3RfY2hhdF90aW1lIiwiYXZhdGFyMyIsImR1bW15RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyw0Q0FBSyxHQUFHQyxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLE1BQXJCLEVBQTZCQyxPQUE3QixFQUFuQjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFFLEVBQUUsT0FEVztBQUVmQyxXQUFTLEVBQUUsS0FGSTtBQUdmQyxZQUFVLEVBQUVDLG9FQUFPQTtBQUhKLENBQWpCO0FBTUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRUosSUFBRSxFQUFFLE9BQU47QUFBZUMsV0FBUyxFQUFFLEtBQTFCO0FBQWlDQyxZQUFVLEVBQUVHLG9FQUFPQTtBQUFwRCxDQURjLEVBRWQ7QUFBRUwsSUFBRSxFQUFFLE9BQU47QUFBZUMsV0FBUyxFQUFFLEtBQTFCO0FBQWlDQyxZQUFVLEVBQUU7QUFBN0MsQ0FGYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxPQUFOO0FBQWVDLFdBQVMsRUFBRSxLQUExQjtBQUFpQ0MsWUFBVSxFQUFFO0FBQTdDLENBSGMsQ0FBaEI7QUFNQSxJQUFNSSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxTQUFPLEVBQUUsaUJBRFg7QUFF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RWMsbUJBQWUsRUFBRWxCLDRDQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQm9CLEdBQWxCLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLEVBQXNDakIsT0FBdEM7QUFGbkIsR0FGWSxDQVJoQjtBQWVFa0IsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsUUFBSSxFQUFFO0FBQ0pqQixRQUFFLEVBQUUsT0FEQTtBQUVKQyxlQUFTLEVBQUUsS0FGUDtBQUdKQyxnQkFBVSxFQUFFRyxvRUFBT0E7QUFIZixLQURSO0FBTUVhLFFBQUksRUFBRSxZQU5SO0FBT0VDLFFBQUksRUFBRXZCLDRDQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQkUsUUFBbEIsQ0FBMkIsR0FBM0IsRUFBZ0MsTUFBaEMsRUFBd0NDLE9BQXhDO0FBUFIsR0FEUyxFQVVUO0FBQ0VtQixRQUFJLEVBQUU7QUFDSmpCLFFBQUUsRUFBRSxPQURBO0FBRUpDLGVBQVMsRUFBRSxLQUZQO0FBR0pDLGdCQUFVLEVBQUVHLG9FQUFPQTtBQUhmLEtBRFI7QUFNRWEsUUFBSSxFQUFFLG9DQU5SO0FBT0VDLFFBQUksRUFBRXZCLDRDQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQkUsUUFBbEIsQ0FBMkIsR0FBM0IsRUFBZ0MsTUFBaEMsRUFBd0NDLE9BQXhDO0FBUFIsR0FWUyxDQWZiO0FBbUNFc0IsZ0JBQWMsRUFBRXhCLDRDQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQkUsUUFBbEIsQ0FBMkIsR0FBM0IsRUFBZ0MsTUFBaEMsRUFBd0NDLE9BQXhDO0FBbkNsQixDQXZHVyxDQUFiO0FBOElBLElBQU13QixTQUFTLEdBQUc7QUFBRXZCLFVBQVEsRUFBUkEsUUFBRjtBQUFZSyxTQUFPLEVBQVBBLE9BQVo7QUFBcUJFLE1BQUksRUFBSkE7QUFBckIsQ0FBbEI7QUFFQSwrREFBZWdCLFNBQWYiLCJmaWxlIjoiLi9zcmMvZGF0YS9kYXRhLnNhbXBsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcblxuaW1wb3J0IGF2YXRhcjEgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdXNlcjEtYXZhdGFyLnBuZ1wiO1xuaW1wb3J0IGF2YXRhcjIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdXNlcjItYXZhdGFyLnBuZ1wiO1xuaW1wb3J0IGF2YXRhcjMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvdXNlcjMtYXZhdGFyLnBuZ1wiO1xuXG5jb25zdCBMQVNUX1ZJU0lUID0gZGF5anMoKS5zdWJ0cmFjdCg0OCwgXCJob3VyXCIpLnZhbHVlT2YoKTtcblxuY29uc3QgYXV0aFVzZXIgPSB7XG4gIGlkOiBcInJva2V0XCIsXG4gIG5pY2tfbmFtZTogXCLtmY3roZzsvJNcIixcbiAgYXZhdGFyX3VybDogYXZhdGFyMSxcbn07XG5cbmNvbnN0IGZyaWVuZHMgPSBbXG4gIHsgaWQ6IFwidXNlcjFcIiwgbmlja19uYW1lOiBcIuy1nOyYiOyKrFwiLCBhdmF0YXJfdXJsOiBhdmF0YXIyIH0sXG4gIHsgaWQ6IFwidXNlcjJcIiwgbmlja19uYW1lOiBcIuq5gO2OgOy5mFwiLCBhdmF0YXJfdXJsOiBcIlwiIH0sXG4gIHsgaWQ6IFwidXNlcjNcIiwgbmlja19uYW1lOiBcIuydtOycpO2YuFwiLCBhdmF0YXJfdXJsOiBcIlwiIH0sXG5dO1xuXG5jb25zdCBjaGF0ID0gW1xuICB7XG4gICAgcm9vbV9pZDogXCJjaGF0Um9vbTQzNTkzMDlcIixcbiAgICByb29tX2luZm86IHtcbiAgICAgIG5hbWU6IFwi7LWc7JiI7IqsXCIsXG4gICAgICBpbWc6IGF2YXRhcjIsXG4gICAgICBqb2I6IFwi7Ju57JWxIFVYIOuUlOyekOydtOuEiFwiLFxuICAgICAgaXNfZnJpZW5kOiB0cnVlLFxuICAgIH0sXG4gICAgcm9vbV9tZW1iZXJzOiBbXG4gICAgICB7IGlkOiBcInJva2V0XCIsIGxhc3RfdmlzaXRfdGltZTogTEFTVF9WSVNJVCB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJ1c2VyMVwiLFxuICAgICAgICBsYXN0X3Zpc2l0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLmFkZCg3MjUwLCBcInNlY29uZFwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgIF0sXG4gICAgY2hhdF9saXN0OiBbXG4gICAgICB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBpZDogXCJyb2tldFwiLFxuICAgICAgICAgIG5pY2tfbmFtZTogXCLtmY3roZzsvJNcIixcbiAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIxLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBcIuyViOuFle2VmOyEuOyalC4g7LWc7JiI7Iqs64uYLlxcbuuhnOy8k+2OgOy5mCDri7Tri7nsnpAg7ZmN66Gc7LyT7J6F64uI64ukLlxcblxcbuyngOybkO2VtOyjvOyLoCBVWOuUlOyekOydtOuEiCDsp4HrrLQg7ISc66WY7KCE7ZiV7JeQIO2Vqeqyqe2VmOyLnOyWtCxcXG7ri6TsnYwg7KCE7ZiV7J24IEludGVydmlld+qwgCDsp4Ttlokg65CgIOyYiOygleydtOupsCwgSW50ZXJ2aWV3IOqwgOuKpSDsnbzsoJUg7ZWY6riwIOuCtOyaqSDssLjqs6DtlZjsi5zslrQg6rO17Jyg67aA7YOB65Oc66a964uI64ukLlxcblxcbjEuIOuptOygkSDsnbzsi5xcXG4yMDE2LjEyLjAwIOyYpO2bhCAwMOyLnCAwMOu2hFxcbuyDgeq4sOydvOyglSDrtojqsIDtlZjsi6Tqsr3smrAg7J287KCVIOqzteycoCDrtoDtg4Hrk5zrpr3ri4jri6Q6KVxcblxcbjIuIOuptOygkSDsnqXshoxcXG7rjIDtlZzrr7zqta0g7ISc7Jq47Yq567OE7IucIOq4iOyynOq1rCDqsIDsgrDrj5kgMzI3LTMwIOuhnOy8k+qxtOusvCAz7Li1XFxuXFxu7J207Jm4IOusuOydmOyCrO2VrSDsnojsnLzsi5zrqbQg7Y647Z6IIOunkOyUgCDrtoDtg4Hrk5zrpr3ri4jri6QuXFxuXFxu6rCQ7IKs7ZWp64uI64ukLlwiLFxuICAgICAgICB0aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgyOCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBpZDogXCJ1c2VyMVwiLFxuICAgICAgICAgIG5pY2tfbmFtZTogXCLstZzsmIjsiqxcIixcbiAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIyLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBcIuyViOuFle2VmOyEuOyalC4g7ISc66WY7KeA7JuQIO2Vqeqyqe2VnCDstZzsmIjsiqzsnoXri4jri6QuXFxu7Jqw7ISgIOyii+ydgCDshozsi50g6rCQ7IKs65Oc66a964uI64ukLlxcbuygnOyViCDso7zsi6BcdTAwMWPsnbzsoJXsl5Ag66m07KCR7J20IOqwgOuKpe2VmOuvgOuhnCDqt7jrlYwg67WZ6rKg7Iq164uI64ukLlwiLFxuICAgICAgICB0aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgxLCBcImhvdXJcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxhc3RfY2hhdF90aW1lOiBkYXlqcygpLnN1YnRyYWN0KDUwLCBcInNlY29uZFwiKS52YWx1ZU9mKCksXG4gIH0sXG4gIHtcbiAgICByb29tX2lkOiBcImNoYXRSb29tNDIzM1wiLFxuICAgIHJvb21faW5mbzoge1xuICAgICAgbmFtZTogXCJTaGluIFllLUppXCIsXG4gICAgICBpbWc6IGF2YXRhcjMsXG4gICAgICBqb2I6IFwi7Ju57JWxIFVYIOuUlOyekOydtOuEiFwiLFxuICAgICAgaXNfZnJpZW5kOiBmYWxzZSxcbiAgICB9LFxuICAgIHJvb21fbWVtYmVyczogW1xuICAgICAgeyBpZDogXCJyb2tldFwiLCBsYXN0X3Zpc2l0X3RpbWU6IExBU1RfVklTSVQgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidXNlcjRcIixcbiAgICAgICAgbGFzdF92aXNpdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5hZGQoNzI1MCwgXCJzZWNvbmRcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNoYXRfbGlzdDogW1xuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjVcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwiU2hpbiBZZS1KaVwiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjMsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi7JWI64WV7ZWY7IS47JqUIOyEnOulmOyngOybkCDtlanqsqntlZwg7Iug7JiI7KeA7J6F64uI64ukLlwiLFxuICAgICAgICB0aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgyMCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsYXN0X2NoYXRfdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMjAsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gIH0sXG4gIHtcbiAgICByb29tX2lkOiBcImNoYXRSb29tNDNcIixcbiAgICByb29tX2luZm86IHtcbiAgICAgIG5hbWU6IFwi6rmA7Y6A7LmYXCIsXG4gICAgICBpbWc6IFwiXCIsXG4gICAgICBqb2I6IFwi7Ju57JWxIFVYIOuUlOyekOydtOuEiFwiLFxuICAgICAgaXNfZnJpZW5kOiBmYWxzZSxcbiAgICB9LFxuICAgIHJvb21fbWVtYmVyczogW1xuICAgICAgeyBpZDogXCJyb2tldFwiLCBsYXN0X3Zpc2l0X3RpbWU6IExBU1RfVklTSVQgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidXNlcjRcIixcbiAgICAgICAgbGFzdF92aXNpdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5hZGQoNzI1MCwgXCJzZWNvbmRcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNoYXRfbGlzdDogW1xuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjFcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7LWc7JiI7IqsXCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLslYjrhZXtlZjshLjsmpQuIOuhnOy8k+uLmC5cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoODEsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjFcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7LWc7JiI7IqsXCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLrlJTsnpDsnbTrhIgg7LWc7JiI7Iqs64uY7J2EIOyGjOqwnCDsooAg67aA7YOB65Oc66as6rOgIOyLtuyKteuLiOuLpC5cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoODAsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGFzdF9jaGF0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDgwLCBcImhvdXJcIikudmFsdWVPZigpLFxuICB9LFxuICB7XG4gICAgcm9vbV9pZDogXCJjaGF0Um9vbTQzNDM1NDUyMjJcIixcbiAgICByb29tX2luZm86IHtcbiAgICAgIG5hbWU6IFwi7J207Jyk7Zi4XCIsXG4gICAgICBpbWc6IFwiXCIsXG4gICAgICBqb2I6IFwi7Ju57JWxIFVYIOuUlOyekOydtOuEiFwiLFxuICAgICAgaXNfZnJpZW5kOiB0cnVlLFxuICAgIH0sXG4gICAgcm9vbV9tZW1iZXJzOiBbXG4gICAgICB7IGlkOiBcInJva2V0XCIsIGxhc3RfdmlzaXRfdGltZTogTEFTVF9WSVNJVCB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJ1c2VyM1wiLFxuICAgICAgICBsYXN0X3Zpc2l0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLmFkZCg3MjUwLCBcInNlY29uZFwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgIF0sXG4gICAgY2hhdF9saXN0OiBbXG4gICAgICB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBpZDogXCJ1c2VyM1wiLFxuICAgICAgICAgIG5pY2tfbmFtZTogXCLsnbTsnKTtmLhcIixcbiAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIyLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBcIuyalOymmCDrrZDtlZjqs6Ag7KeA64K0LlwiLFxuICAgICAgICB0aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgxMjEsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjNcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7J207Jyk7Zi4XCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLrgpjrj4Qg7J207KCcIOqzpyDtj6ztj7Qg7KSA67mE7ZW07JW8IO2VmOuKlOuNsCDrgpjspJHsl5Ag7JmE7ISx65CY66m0IO2VnOuyiCDrtJDspJhcIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMTIwLCBcImhvdXJcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxhc3RfY2hhdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgxMjAsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gIH0sXG5dO1xuXG5jb25zdCBkdW1teURhdGEgPSB7IGF1dGhVc2VyLCBmcmllbmRzLCBjaGF0IH07XG5cbmV4cG9ydCBkZWZhdWx0IGR1bW15RGF0YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/data.sample.ts\n");

/***/ })

});