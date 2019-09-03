webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Intro75.js":
/*!****************************************!*\
  !*** ./components/sections/Intro75.js ***!
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
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Intro75(props) {
  var _props$media = props.media,
      media = _props$media === void 0 ? "" : _props$media,
      _props$reference = props.reference,
      reference = _props$reference === void 0 ? "" : _props$reference,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? "" : _props$layout;

  var asset = media.condition ? media.video.mux.asset : media.image.asset,
      type = media.condition ? "video" : "image",
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerSize = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]) + " " + "intro__section intro__section--75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3422645003",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--75{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--75 figure{width:75%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3NCLEFBSW9CLEFBS0gsVUFFbUIsZ0VBTlUsb0JBT3hDLG1CQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzc1KHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiIH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTc1XCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc1JTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEludHJvNzU7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3167211398",
    dynamic: [layout === "left" ? "flex-start" : "flex-end"],
    __self: this
  }, "@media screen and (min-width:640px){.intro__section--75.__jsx-style-dynamic-selector{-webkit-box-pack:".concat(layout === "left" ? "flex-start" : "flex-end", ";-webkit-justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";-ms-flex-pack:").concat(layout === "left" ? "flex-start" : "flex-end", ";justify-content:").concat(layout === "left" ? "flex-start" : "flex-end", ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGUsQUFJb0QsMkxBQzlDIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzc1KHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiIH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTc1XCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc1JTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEludHJvNzU7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro75);

/***/ })

})
//# sourceMappingURL=index.js.75796a8e558d34f53571.hot-update.js.map