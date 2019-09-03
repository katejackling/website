webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/IntroText.js":
/*!******************************************!*\
  !*** ./components/sections/IntroText.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function IntroText(props) {
  console.log(props);
  var _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      text = props.text,
      content = reference.content;
  console.log(content);
  return __jsx("section", {
    className: "jsx-4001153962" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-4001153962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    media = media ? media : media_left;
    console.log(i, media);
    return media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    });
  }), __jsx("figcaption", {
    className: "jsx-4001153962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4001153962",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figcaption{font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEc0IsQUFHNkMsQUFHNEIsdUNBRnBFLDRCQUdzRSxxRUFFeEMsaUdBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvY2tcIjtcblxuZnVuY3Rpb24gSW50cm9UZXh0KHByb3BzKSB7XG5cdGNvbnNvbGUubG9nKHByb3BzKTtcblxuXHRjb25zdCB7IHJlZmVyZW5jZSA9IFwiXCIsIHRleHQgfSA9IHByb3BzLFxuXHRcdGNvbnRlbnQgPSByZWZlcmVuY2UuY29udGVudDtcblxuXHRjb25zb2xlLmxvZyhjb250ZW50KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS10ZXh0XCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHR7Y29udGVudC5tYXAoKHsgX3R5cGUsIG1lZGlhLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9LCBpKSA9PiB7XG5cdFx0XHRcdFx0bWVkaWEgPSBtZWRpYSA/IG1lZGlhIDogbWVkaWFfbGVmdDtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhpLCBtZWRpYSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0bWVkaWEgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWEgJiYgbWVkaWEudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRhc3NldD17XG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYSAmJiBtZWRpYS50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYS52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBtZWRpYS5pbWFnZS5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhICYmIG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aSArIFwiX3JpZ2h0XCJ9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRhc3NldD17XG5cdFx0XHRcdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBtZWRpYV9yaWdodC5pbWFnZS5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHR7LyogPExpbmsgdG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0XHQ8QmxvY2sgYmxvY2tzPXt0ZXh0fSAvPlxuXHRcdFx0XHRcdDwvTGluaz4gKi99XG5cdFx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17dGV4dH0gLz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IGNhbGMoNDhweCArICgxMjAgLSA0OCkgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBjYWxjKDUycHggKyAoMTE1IC0gNTIpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMikgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKVxuXHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9UZXh0O1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.b2a3a7469dc38143bd3e.hot-update.js.map