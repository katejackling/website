webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Intro50.js":
/*!****************************************!*\
  !*** ./components/sections/Intro50.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Intro50(props) {
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? "" : _props$layout,
      text = props.text;

  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image",
      _useGlobal = useGlobal("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]) + " " + "intro__section intro__section--50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("figure", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("figcaption", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3246843332",
    dynamic: [text ? '"' + text + '"' : "none"],
    __self: this
  }, ".intro__section--50{background:white;}.intro__section--50::after{content:".concat(text ? '"' + text + '"' : "none", ";position:absolute;top:50%;left:50%;width:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:calc(48px + (180 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (155 - 52) * (100vw - 360px) / (1920 - 360));padding:var(--marginOuter);text-align:center;mix-blend-mode:difference;color:white;z-index:7;}@media screen and (max-width:639px){.intro__section--50{padding:var(--marginMedium);min-height:calc(100 * var(--vH));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@media screen and (min-width:640px){.intro__section.intro__section--50{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--50 figure{width:50%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);}.intro__section--50::after{padding:var(--marginMedium);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QnNCLEFBR3VCLEFBSW9CLEFBaUJSLEFBU2YsQUFNSCxBQUtrQixVQUhDLE9BckMvQixXQXFCbUMsQUFvQmxDLFNBckNrQixrQkFDVixNQWlCTSxFQWhCTCxTQUNFLEVBdUJLLFNBdEJnQixXQThCaEMscUNBUHdDLElBUmhCLG1DQVN4QixrQkF2Qm1FLDhDQWUvQyxxQkFkaUQscUVBQzFDLEdBYzNCLHdCQWJrQixrQkFDUSwwQkFDZCxZQUNGLFVBQ1giLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRybzUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzUwKHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiLCB0ZXh0IH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTUwXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rIHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH0gc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwOjphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJHt0ZXh0ID8gJ1wiJyArIHRleHQgKyAnXCInIDogXCJub25lXCJ9O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDQ4cHggKyAoMTgwIC0gNDgpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogY2FsYyg1MnB4ICsgKDE1NSAtIDUyKSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ei1pbmRleDogNztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12SCkpO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS01MCBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MDo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luTWVkaXVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm81MDtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3354514693",
    dynamic: [layout === "left" ? "flex-start" : "flex-end"],
    __self: this
  }, "@media screen and (min-width:640px){.intro__section--50.__jsx-style-dynamic-selector{-webkit-box-pack:".concat(layout === "left" ? "flex-start" : "flex-end", ";-webkit-justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";-ms-flex-pack:").concat(layout === "left" ? "flex-start" : "flex-end", ";justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWUsQUFJb0QsMkxBQzlDIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm81MChwcm9wcykge1xuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgcmVmZXJlbmNlID0gXCJcIiwgbGF5b3V0ID0gXCJcIiwgdGV4dCB9ID0gcHJvcHM7XG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIixcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS01MFwiPlxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmsgdG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfSBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGluayB0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9IHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tNTAge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MDo6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICR7dGV4dCA/ICdcIicgKyB0ZXh0ICsgJ1wiJyA6IFwibm9uZVwifTtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogY2FsYyg0OHB4ICsgKDE4MCAtIDQ4KSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGNhbGMoNTJweCArICgxNTUgLSA1MikgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHotaW5kZXg6IDc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tNTAge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luTWVkaXVtKTtcblx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdkgpKTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tNTAgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tNTA6OmFmdGVyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk1lZGl1bSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ICR7bGF5b3V0ID09PSBcImxlZnRcIiA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvNTA7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro50);

/***/ })

})
//# sourceMappingURL=index.js.1e64330d0dcde03b6770.hot-update.js.map