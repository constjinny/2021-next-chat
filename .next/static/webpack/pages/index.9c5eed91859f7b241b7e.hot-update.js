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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/user1-avatar.png */ \"./public/images/user1-avatar.png\");\n/* harmony import */ var _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/user2-avatar.png */ \"./public/images/user2-avatar.png\");\n/* harmony import */ var _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/user3-avatar.png */ \"./public/images/user3-avatar.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar LAST_VISIT = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(48, \"hour\").valueOf();\nvar authUser = {\n  id: \"roket\",\n  nick_name: \"홍로켓\",\n  avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n};\nvar friends = [{\n  id: \"user1\",\n  nick_name: \"최예슬\",\n  avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n}, {\n  id: \"user2\",\n  nick_name: \"김펀치\",\n  avatar_url: \"\"\n}, {\n  id: \"user3\",\n  nick_name: \"이윤호\",\n  avatar_url: \"\"\n}];\nvar chat = [{\n  room_id: \"chatRoom4359309\",\n  room_info: {\n    name: \"최예슬\",\n    img: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default,\n    job: \"웹앱 UX 디자이너\",\n    is_friend: true\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: LAST_VISIT\n  }, {\n    id: \"user1\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"안녕하세요. 최예슬님.\\n로켓펀치 담당자 홍로켓입니다.\\n\\n지원해주신 UX디자이너 직무 서류전형에 합격하시어,\\n다음 전형인 Interview가 진행 될 예정이며, Interview 가능 일정 하기 내용 참고하시어 공유부탁드립니다.\\n\\n1. 면접 일시\\n2016.12.00 오후 00시 00분\\n상기일정 불가하실경우 일정 공유 부탁드립니다:)\\n\\n2. 면접 장소\\n대한민국 서울특별시 금천구 가산동 327-30 로켓건물 3층\\n\\n이외 문의사항 있으시면 편히 말씀 부탁드립니다.\\n\\n감사합니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(28, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user1\",\n      nick_name: \"최예슬\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"안녕하세요. 서류지원 합격한 최예슬입니다.\\n우선 좋은 소식 감사드립니다.\\n제안 주신\u001c일정에 면접이 가능하므로 그때 뵙겠습니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(1, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(50, \"second\").valueOf()\n}, {\n  room_id: \"chatRoom4233\",\n  room_info: {\n    name: \"Shin Ye-Ji\",\n    img: _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    job: \"웹앱 UX 디자이너\",\n    is_friend: false\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: null\n  }, {\n    id: \"user4\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"user5\",\n      nick_name: \"Shin Ye-Ji\",\n      avatar_url: _public_images_user3_avatar_png__WEBPACK_IMPORTED_MODULE_3__.default\n    },\n    data: \"안녕하세요 서류지원 합격한 신예지입니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(20, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(20, \"hour\").valueOf()\n}, {\n  room_id: \"chatRoom43\",\n  room_info: {\n    name: \"김펀치\",\n    img: \"\",\n    job: \"웹앱 UX 디자이너\",\n    is_friend: false\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(80, \"hour\").valueOf()\n  }, {\n    id: \"user4\",\n    last_visit_time: null\n  }],\n  chat_list: [{\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"안녕하세요. 펀치님.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(81, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"디자이너 최예슬님을 소개 좀 부탁드리고 싶습니다.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(80, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(80, \"hour\").valueOf()\n}, {\n  room_id: \"chatRoom4343545222\",\n  room_info: {\n    name: \"이윤호\",\n    img: \"\",\n    job: \"웹앱 UX 디자이너\",\n    is_friend: true\n  },\n  room_members: [{\n    id: \"roket\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(200, \"hour\").valueOf()\n  }, {\n    id: \"user3\",\n    last_visit_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).add(7250, \"second\").valueOf()\n  }],\n  chat_list: [{\n    user: {\n      id: \"roket\",\n      nick_name: \"홍로켓\",\n      avatar_url: _public_images_user1_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default\n    },\n    data: \"잘 지내?\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(200, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user3\",\n      nick_name: \"이윤호\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"요즘 뭐하고 지내.\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(121, \"hour\").valueOf()\n  }, {\n    user: {\n      id: \"user3\",\n      nick_name: \"이윤호\",\n      avatar_url: _public_images_user2_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default\n    },\n    data: \"나도 이제 곧 포폴 준비해야 하는데 나중에 완성되면 한번 봐줘\",\n    time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(120, \"hour\").valueOf()\n  }],\n  last_chat_time: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(LAST_VISIT).subtract(120, \"hour\").valueOf()\n}];\nvar dummyData = {\n  authUser: authUser,\n  friends: friends,\n  chat: chat\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (dummyData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZGF0YS5zYW1wbGUudHM/YWUxMCJdLCJuYW1lcyI6WyJMQVNUX1ZJU0lUIiwiZGF5anMiLCJzdWJ0cmFjdCIsInZhbHVlT2YiLCJhdXRoVXNlciIsImlkIiwibmlja19uYW1lIiwiYXZhdGFyX3VybCIsImF2YXRhcjEiLCJmcmllbmRzIiwiYXZhdGFyMiIsImNoYXQiLCJyb29tX2lkIiwicm9vbV9pbmZvIiwibmFtZSIsImltZyIsImpvYiIsImlzX2ZyaWVuZCIsInJvb21fbWVtYmVycyIsImxhc3RfdmlzaXRfdGltZSIsImFkZCIsImNoYXRfbGlzdCIsInVzZXIiLCJkYXRhIiwidGltZSIsImxhc3RfY2hhdF90aW1lIiwiYXZhdGFyMyIsImR1bW15RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyw0Q0FBSyxHQUFHQyxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLE1BQXJCLEVBQTZCQyxPQUE3QixFQUFuQjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxJQUFFLEVBQUUsT0FEVztBQUVmQyxXQUFTLEVBQUUsS0FGSTtBQUdmQyxZQUFVLEVBQUVDLG9FQUFPQTtBQUhKLENBQWpCO0FBTUEsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRUosSUFBRSxFQUFFLE9BQU47QUFBZUMsV0FBUyxFQUFFLEtBQTFCO0FBQWlDQyxZQUFVLEVBQUVHLG9FQUFPQTtBQUFwRCxDQURjLEVBRWQ7QUFBRUwsSUFBRSxFQUFFLE9BQU47QUFBZUMsV0FBUyxFQUFFLEtBQTFCO0FBQWlDQyxZQUFVLEVBQUU7QUFBN0MsQ0FGYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxPQUFOO0FBQWVDLFdBQVMsRUFBRSxLQUExQjtBQUFpQ0MsWUFBVSxFQUFFO0FBQTdDLENBSGMsQ0FBaEI7QUFNQSxJQUFNSSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxTQUFPLEVBQUUsaUJBRFg7QUFF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LENBQUwsQ0FBa0JFLFFBQWxCLENBQTJCLEdBQTNCLEVBQWdDLE1BQWhDLEVBQXdDQyxPQUF4QztBQS9DbEIsQ0ExR1csQ0FBYjtBQTZKQSxJQUFNd0IsU0FBUyxHQUFHO0FBQUV2QixVQUFRLEVBQVJBLFFBQUY7QUFBWUssU0FBTyxFQUFQQSxPQUFaO0FBQXFCRSxNQUFJLEVBQUpBO0FBQXJCLENBQWxCO0FBRUEsK0RBQWVnQixTQUFmIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZGF0YS5zYW1wbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmltcG9ydCBhdmF0YXIxIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3VzZXIxLWF2YXRhci5wbmdcIjtcbmltcG9ydCBhdmF0YXIyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3VzZXIyLWF2YXRhci5wbmdcIjtcbmltcG9ydCBhdmF0YXIzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3VzZXIzLWF2YXRhci5wbmdcIjtcblxuY29uc3QgTEFTVF9WSVNJVCA9IGRheWpzKCkuc3VidHJhY3QoNDgsIFwiaG91clwiKS52YWx1ZU9mKCk7XG5cbmNvbnN0IGF1dGhVc2VyID0ge1xuICBpZDogXCJyb2tldFwiLFxuICBuaWNrX25hbWU6IFwi7ZmN66Gc7LyTXCIsXG4gIGF2YXRhcl91cmw6IGF2YXRhcjEsXG59O1xuXG5jb25zdCBmcmllbmRzID0gW1xuICB7IGlkOiBcInVzZXIxXCIsIG5pY2tfbmFtZTogXCLstZzsmIjsiqxcIiwgYXZhdGFyX3VybDogYXZhdGFyMiB9LFxuICB7IGlkOiBcInVzZXIyXCIsIG5pY2tfbmFtZTogXCLquYDtjoDsuZhcIiwgYXZhdGFyX3VybDogXCJcIiB9LFxuICB7IGlkOiBcInVzZXIzXCIsIG5pY2tfbmFtZTogXCLsnbTsnKTtmLhcIiwgYXZhdGFyX3VybDogXCJcIiB9LFxuXTtcblxuY29uc3QgY2hhdCA9IFtcbiAge1xuICAgIHJvb21faWQ6IFwiY2hhdFJvb200MzU5MzA5XCIsXG4gICAgcm9vbV9pbmZvOiB7XG4gICAgICBuYW1lOiBcIuy1nOyYiOyKrFwiLFxuICAgICAgaW1nOiBhdmF0YXIyLFxuICAgICAgam9iOiBcIuybueyVsSBVWCDrlJTsnpDsnbTrhIhcIixcbiAgICAgIGlzX2ZyaWVuZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvb21fbWVtYmVyczogW1xuICAgICAgeyBpZDogXCJyb2tldFwiLCBsYXN0X3Zpc2l0X3RpbWU6IExBU1RfVklTSVQgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidXNlcjFcIixcbiAgICAgICAgbGFzdF92aXNpdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5hZGQoNzI1MCwgXCJzZWNvbmRcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNoYXRfbGlzdDogW1xuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwicm9rZXRcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7ZmN66Gc7LyTXCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLslYjrhZXtlZjshLjsmpQuIOy1nOyYiOyKrOuLmC5cXG7roZzsvJPtjoDsuZgg64u064u57J6QIO2ZjeuhnOy8k+yeheuLiOuLpC5cXG5cXG7sp4Dsm5DtlbTso7zsi6AgVVjrlJTsnpDsnbTrhIgg7KeB66y0IOyEnOulmOyghO2YleyXkCDtlanqsqntlZjsi5zslrQsXFxu64uk7J2MIOyghO2YleyduCBJbnRlcnZpZXfqsIAg7KeE7ZaJIOuQoCDsmIjsoJXsnbTrqbAsIEludGVydmlldyDqsIDriqUg7J287KCVIO2VmOq4sCDrgrTsmqkg7LC46rOg7ZWY7Iuc7Ja0IOqzteycoOu2gO2DgeuTnOumveuLiOuLpC5cXG5cXG4xLiDrqbTsoJEg7J287IucXFxuMjAxNi4xMi4wMCDsmKTtm4QgMDDsi5wgMDDrtoRcXG7sg4HquLDsnbzsoJUg67aI6rCA7ZWY7Iuk6rK97JqwIOydvOyglSDqs7XsnKAg67aA7YOB65Oc66a964uI64ukOilcXG5cXG4yLiDrqbTsoJEg7J6l7IaMXFxu64yA7ZWc66+86rWtIOyEnOyauO2KueuzhOyLnCDquIjsspzqtawg6rCA7IKw64+ZIDMyNy0zMCDroZzsvJPqsbTrrLwgM+y4tVxcblxcbuydtOyZuCDrrLjsnZjsgqztla0g7J6I7Jy87Iuc66m0IO2OuO2eiCDrp5DslIAg67aA7YOB65Oc66a964uI64ukLlxcblxcbuqwkOyCrO2VqeuLiOuLpC5cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMjgsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IFwidXNlcjFcIixcbiAgICAgICAgICBuaWNrX25hbWU6IFwi7LWc7JiI7IqsXCIsXG4gICAgICAgICAgYXZhdGFyX3VybDogYXZhdGFyMixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogXCLslYjrhZXtlZjshLjsmpQuIOyEnOulmOyngOybkCDtlanqsqntlZwg7LWc7JiI7Iqs7J6F64uI64ukLlxcbuyasOyEoCDsoovsnYAg7IaM7IudIOqwkOyCrOuTnOumveuLiOuLpC5cXG7soJzslYgg7KO87IugXHUwMDFj7J287KCV7JeQIOuptOygkeydtCDqsIDriqXtlZjrr4DroZwg6re465WMIOu1meqyoOyKteuLiOuLpC5cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMSwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsYXN0X2NoYXRfdGltZTogZGF5anMoKS5zdWJ0cmFjdCg1MCwgXCJzZWNvbmRcIikudmFsdWVPZigpLFxuICB9LFxuICB7XG4gICAgcm9vbV9pZDogXCJjaGF0Um9vbTQyMzNcIixcbiAgICByb29tX2luZm86IHtcbiAgICAgIG5hbWU6IFwiU2hpbiBZZS1KaVwiLFxuICAgICAgaW1nOiBhdmF0YXIzLFxuICAgICAgam9iOiBcIuybueyVsSBVWCDrlJTsnpDsnbTrhIhcIixcbiAgICAgIGlzX2ZyaWVuZDogZmFsc2UsXG4gICAgfSxcbiAgICByb29tX21lbWJlcnM6IFtcbiAgICAgIHsgaWQ6IFwicm9rZXRcIiwgbGFzdF92aXNpdF90aW1lOiBudWxsIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInVzZXI0XCIsXG4gICAgICAgIGxhc3RfdmlzaXRfdGltZTogZGF5anMoTEFTVF9WSVNJVCkuYWRkKDcyNTAsIFwic2Vjb25kXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjaGF0X2xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInVzZXI1XCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIlNoaW4gWWUtSmlcIixcbiAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIzLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBcIuyViOuFle2VmOyEuOyalCDshJzrpZjsp4Dsm5Ag7ZWp6rKp7ZWcIOyLoOyYiOyngOyeheuLiOuLpC5cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMjAsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGFzdF9jaGF0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDIwLCBcImhvdXJcIikudmFsdWVPZigpLFxuICB9LFxuICB7XG4gICAgcm9vbV9pZDogXCJjaGF0Um9vbTQzXCIsXG4gICAgcm9vbV9pbmZvOiB7XG4gICAgICBuYW1lOiBcIuq5gO2OgOy5mFwiLFxuICAgICAgaW1nOiBcIlwiLFxuICAgICAgam9iOiBcIuybueyVsSBVWCDrlJTsnpDsnbTrhIhcIixcbiAgICAgIGlzX2ZyaWVuZDogZmFsc2UsXG4gICAgfSxcbiAgICByb29tX21lbWJlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwicm9rZXRcIixcbiAgICAgICAgbGFzdF92aXNpdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCg4MCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInVzZXI0XCIsXG4gICAgICAgIGxhc3RfdmlzaXRfdGltZTogbnVsbCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjaGF0X2xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInJva2V0XCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIu2ZjeuhnOy8k1wiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjEsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi7JWI64WV7ZWY7IS47JqULiDtjoDsuZjri5guXCIsXG4gICAgICAgIHRpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDgxLCBcImhvdXJcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInJva2V0XCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIu2ZjeuhnOy8k1wiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjEsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi65SU7J6Q7J2064SIIOy1nOyYiOyKrOuLmOydhCDshozqsJwg7KKAIOu2gO2DgeuTnOumrOqzoCDsi7bsirXri4jri6QuXCIsXG4gICAgICAgIHRpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDgwLCBcImhvdXJcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxhc3RfY2hhdF90aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCg4MCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgfSxcbiAge1xuICAgIHJvb21faWQ6IFwiY2hhdFJvb200MzQzNTQ1MjIyXCIsXG4gICAgcm9vbV9pbmZvOiB7XG4gICAgICBuYW1lOiBcIuydtOycpO2YuFwiLFxuICAgICAgaW1nOiBcIlwiLFxuICAgICAgam9iOiBcIuybueyVsSBVWCDrlJTsnpDsnbTrhIhcIixcbiAgICAgIGlzX2ZyaWVuZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvb21fbWVtYmVyczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJyb2tldFwiLFxuICAgICAgICBsYXN0X3Zpc2l0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDIwMCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInVzZXIzXCIsXG4gICAgICAgIGxhc3RfdmlzaXRfdGltZTogZGF5anMoTEFTVF9WSVNJVCkuYWRkKDcyNTAsIFwic2Vjb25kXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjaGF0X2xpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInJva2V0XCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIu2ZjeuhnOy8k1wiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjEsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi7J6YIOyngOuCtD9cIixcbiAgICAgICAgdGltZTogZGF5anMoTEFTVF9WSVNJVCkuc3VidHJhY3QoMjAwLCBcImhvdXJcIikudmFsdWVPZigpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGlkOiBcInVzZXIzXCIsXG4gICAgICAgICAgbmlja19uYW1lOiBcIuydtOycpO2YuFwiLFxuICAgICAgICAgIGF2YXRhcl91cmw6IGF2YXRhcjIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IFwi7JqU7KaYIOutkO2VmOqzoCDsp4DrgrQuXCIsXG4gICAgICAgIHRpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDEyMSwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICBpZDogXCJ1c2VyM1wiLFxuICAgICAgICAgIG5pY2tfbmFtZTogXCLsnbTsnKTtmLhcIixcbiAgICAgICAgICBhdmF0YXJfdXJsOiBhdmF0YXIyLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBcIuuCmOuPhCDsnbTsoJwg6rOnIO2PrO2PtCDspIDruYTtlbTslbwg7ZWY64qU642wIOuCmOykkeyXkCDsmYTshLHrkJjrqbQg7ZWc67KIIOu0kOykmFwiLFxuICAgICAgICB0aW1lOiBkYXlqcyhMQVNUX1ZJU0lUKS5zdWJ0cmFjdCgxMjAsIFwiaG91clwiKS52YWx1ZU9mKCksXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGFzdF9jaGF0X3RpbWU6IGRheWpzKExBU1RfVklTSVQpLnN1YnRyYWN0KDEyMCwgXCJob3VyXCIpLnZhbHVlT2YoKSxcbiAgfSxcbl07XG5cbmNvbnN0IGR1bW15RGF0YSA9IHsgYXV0aFVzZXIsIGZyaWVuZHMsIGNoYXQgfTtcblxuZXhwb3J0IGRlZmF1bHQgZHVtbXlEYXRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/data.sample.ts\n");

/***/ })

});