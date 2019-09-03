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
  var _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      text = props.text,
      content = reference.content;
  var offsetHeader = getGlobal().headerHeight * -1;
  console.log(offsetHeader);
  return __jsx("section", {
    className: "jsx-3861008619" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("figcaption", {
    className: "jsx-3861008619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    media = media ? media : media_left;
    return [media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })];
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3861008619",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text figure{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.intro__section--text figcaption{width:100%;font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}.intro__section--text img,.intro__section--text video{width:auto;height:calc(10rem + var(--marginOuter));padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ec0IsQUFHNkMsQUFJMUIsQUFNRixBQVNBLFdBUndELEFBUzNCLDRCQW5CekMsWUFvQnNDLHVCQWhCdEIsSUFPc0QsVUFVdEUsMkNBaEI0QixnQkFRRSx5RkFQOUIsUUFRQSIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0ludHJvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IEJsb2NrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2NrXCI7XG5cbmZ1bmN0aW9uIEludHJvVGV4dChwcm9wcykge1xuXHRjb25zdCB7IHJlZmVyZW5jZSA9IFwiXCIsIHRleHQgfSA9IHByb3BzLFxuXHRcdGNvbnRlbnQgPSByZWZlcmVuY2UuY29udGVudDtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gZ2V0R2xvYmFsKCkuaGVhZGVySGVpZ2h0ICogLTE7XG5cdGNvbnNvbGUubG9nKG9mZnNldEhlYWRlcik7XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb19fc2VjdGlvbiBpbnRyb19fc2VjdGlvbi0tdGV4dFwiPlxuXHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0XHQ8QmxvY2sgYmxvY2tzPXt0ZXh0fSAvPlxuXHRcdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdFx0XHR7Y29udGVudC5tYXAoKHsgX3R5cGUsIG1lZGlhLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRtZWRpYSA9IG1lZGlhID8gbWVkaWEgOiBtZWRpYV9sZWZ0O1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0XHRtZWRpYSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXttZWRpYSAmJiBtZWRpYS50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYSAmJiBtZWRpYS50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG1lZGlhLnZpZGVvLm11eC5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWEuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGdpZj17bWVkaWEgJiYgbWVkaWEudHlwZSA9PT0gXCJ2aWRlb1wifVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdG1lZGlhX3JpZ2h0ICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aSArIFwiX3JpZ2h0XCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXttZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXNzZXQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiBtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IG1lZGlhX3JpZ2h0LnZpZGVvLm11eC5hc3NldFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogbWVkaWFfcmlnaHQuaW1hZ2UuYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGdpZj17bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wifVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0PC9MaW5rPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCBmaWd1cmUge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRmb250LXNpemU6IGNhbGMoNDhweCArICgxMjAgLSA0OCkgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBjYWxjKDUycHggKyAoMTE1IC0gNTIpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMikgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKVxuXHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCBpbWcsXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCB2aWRlbyB7XG5cdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwcmVtICsgdmFyKC0tbWFyZ2luT3V0ZXIpKTtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1RleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ })

})
//# sourceMappingURL=index.js.5bcfab1893d5ab4e76c3.hot-update.js.map