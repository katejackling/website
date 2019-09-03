webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var _utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks/useDimensions */ "./utils/hooks/useDimensions.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Header(props) {
  var _useDimensions = Object(_utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_4__["default"])({
    global: "headerSize"
  }),
      _useDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerDimensions = _useDimensions2[1],
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("headerSize"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 1),
      headerSize = _useGlobal2[0],
      _useGlobal3 = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("navOpen"),
      _useGlobal4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal3, 2),
      navOpen = _useGlobal4[0],
      toggleNav = _useGlobal4[1];

  var Link = react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"];
  var Element = react_scroll__WEBPACK_IMPORTED_MODULE_6__["Element"];
  var Events = react_scroll__WEBPACK_IMPORTED_MODULE_6__["Events"];
  Events.scrollEvent.register("begin", function (to, element) {
    console.log("begin", to, element);
    navOpen && toggleNav(false);
  });
  var offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("header", {
    ref: headerRef,
    "data-nav-active": navOpen,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Kate Jackling"), __jsx("button", {
    onClick: function onClick() {
      return toggleNav(!navOpen);
    },
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, navOpen ? "Close" : "Menu"), __jsx("nav", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Link, {
    to: "stilllife",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Stilllife")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Link, {
    to: "commercial",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Commercial")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Link, {
    to: "film",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Film")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(Link, {
    to: "info",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "621272809",
    __self: this
  }, "header{position:fixed;top:0;left:0;width:100%;padding:var(--marginOuter);z-index:99;}header a{display:inline;}nav ul li{cursor:pointer;}@media screen and (max-width:639px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav{width:100%;margin-top:var(--marginMedium);font-size:var(--font-size--large);line-height:1.045;}header[data-nav-active=\"true\"]{height:calc(100 * var(--vH));background:white;}header[data-nav-active=\"true\"]>*{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}header[data-nav-active=\"false\"] nav{display:none;}}@media screen and (min-width:640px){header button{display:none;}nav ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav ul li:not(:last-child)::after{content:\", \";margin-right:0.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFc0IsQUFHcUIsQUFTQSxBQUlBLEFBS0QsQUFPRixBQU9rQixBQUtQLEFBSVQsQUFNQSxBQUlBLEFBSUEsV0E3QmtCLEVBZ0JoQyxBQU1BLEFBUXFCLEVBdkRmLEFBU1AsQUFJQSxNQVpRLE9BQ0ksQ0E4Qk8sSUF3QmxCLE1BckQyQixHQXVCUSxJQU9uQyxvQkE3QlcsUUFjb0IsQUFpQy9CLEVBeEJtQixDQXRCcEIsQ0FnQ0MsZ0JBVEEsK0ZBVDBCLG1GQUNWLHlEQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VEaW1lbnNpb25zXCI7XG5cbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcblx0Y29uc3QgW2hlYWRlclJlZiwgaGVhZGVyRGltZW5zaW9uc10gPSB1c2VEaW1lbnNpb25zKHsgZ2xvYmFsOiBcImhlYWRlclNpemVcIiB9KSxcblx0XHRbaGVhZGVyU2l6ZV0gPSB1c2VHbG9iYWwoXCJoZWFkZXJTaXplXCIpLFxuXHRcdFtuYXZPcGVuLCB0b2dnbGVOYXZdID0gdXNlR2xvYmFsKFwibmF2T3BlblwiKTtcblx0bGV0IExpbmsgPSBTY3JvbGwuTGluaztcblx0bGV0IEVsZW1lbnQgPSBTY3JvbGwuRWxlbWVudDtcblx0bGV0IEV2ZW50cyA9IFNjcm9sbC5FdmVudHM7XG5cblx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiYmVnaW5cIiwgZnVuY3Rpb24odG8sIGVsZW1lbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcImJlZ2luXCIsIHRvLCBlbGVtZW50KTtcblx0XHRuYXZPcGVuICYmIHRvZ2dsZU5hdihmYWxzZSk7XG5cdH0pO1xuXG5cdGxldCBvZmZzZXRIZWFkZXIgPSBoZWFkZXJTaXplICYmIGhlYWRlclNpemUuaGVpZ2h0ICogLTE7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIHJlZj17aGVhZGVyUmVmfSBkYXRhLW5hdi1hY3RpdmU9e25hdk9wZW59PlxuXHRcdFx0PGgxPkthdGUgSmFja2xpbmc8L2gxPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoIW5hdk9wZW4pfT57bmF2T3BlbiA/IFwiQ2xvc2VcIiA6IFwiTWVudVwifTwvYnV0dG9uPlxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwic3RpbGxsaWZlXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRTdGlsbGxpZmVcblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwiY29tbWVyY2lhbFwiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0Q29tbWVyY2lhbFxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJmaWxtXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRGaWxtXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cImluZm9cIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEluZm9cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IHVsIGxpIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWxhcmdlKTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjA0NTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWFkZXJbZGF0YS1uYXYtYWN0aXZlPVwidHJ1ZVwiXSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdkgpKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJ0cnVlXCJdID4gKiB7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJmYWxzZVwiXSBuYXYge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdGhlYWRlciBidXR0b24ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwgbGk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCIsIFwiO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.c19a89cd275d9d301ded.hot-update.js.map