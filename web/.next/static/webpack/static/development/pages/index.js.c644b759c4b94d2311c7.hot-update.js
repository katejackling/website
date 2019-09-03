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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _utils_redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/redux/actions */ "./utils/redux/actions.js");
/* harmony import */ var _utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks/useDimensions */ "./utils/hooks/useDimensions.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import useDimensions from "react-use-dimensions";





function Header(props) {
  var toggleNav = props.toggleNav,
      navOpen = props.navOpen,
      _useDimensions = Object(_utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_7__["default"])({
    global: "headerHeight"
  }),
      _useDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerSize = _useDimensions2[1]; // setGlobal({ headerHeight: headerSize.height });


  var offsetHeader = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["getGlobal"])().headerHeight * -1;
  console.log(offsetHeader);
  return __jsx("header", {
    ref: headerRef,
    "data-nav-active": navOpen,
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Kate Jackling"), __jsx("button", {
    onClick: function onClick() {
      return toggleNav(!navOpen);
    },
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, navOpen ? "Close" : "Menu"), __jsx("nav", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "stilllife",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Stilllife")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "commercial",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Commercial")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "film",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Film")), __jsx("li", {
    className: "jsx-621272809",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "info",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "621272809",
    __self: this
  }, "header{position:fixed;top:0;left:0;width:100%;padding:var(--marginOuter);z-index:99;}header a{display:inline;}nav ul li{cursor:pointer;}@media screen and (max-width:639px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav{width:100%;margin-top:var(--marginMedium);font-size:var(--font-size--large);line-height:1.045;}header[data-nav-active=\"true\"]{height:calc(100 * var(--vH));background:white;}header[data-nav-active=\"true\"]>*{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}header[data-nav-active=\"false\"] nav{display:none;}}@media screen and (min-width:640px){header button{display:none;}nav ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav ul li:not(:last-child)::after{content:\", \";margin-right:0.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFc0IsQUFHcUIsQUFTQSxBQUlBLEFBS0QsQUFPRixBQU9rQixBQUtQLEFBSVQsQUFNQSxBQUlBLEFBSUEsV0E3QmtCLEVBZ0JoQyxBQU1BLEFBUXFCLEVBdkRmLEFBU1AsQUFJQSxNQVpRLE9BQ0ksQ0E4Qk8sSUF3QmxCLE1BckQyQixHQXVCUSxJQU9uQyxvQkE3QlcsUUFjb0IsQUFpQy9CLEVBeEJtQixDQXRCcEIsQ0FnQ0MsZ0JBVEEsK0ZBVDBCLG1GQUNWLHlEQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIGdldEdsb2JhbCwgc2V0R2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyB0b2dnbGVOYXYgfSBmcm9tIFwiLi4vdXRpbHMvcmVkdXgvYWN0aW9uc1wiO1xuLy8gaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlRGltZW5zaW9uc1wiO1xuXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG5cdGNvbnN0IHsgdG9nZ2xlTmF2LCBuYXZPcGVuIH0gPSBwcm9wcyxcblx0XHRbaGVhZGVyUmVmLCBoZWFkZXJTaXplXSA9IHVzZURpbWVuc2lvbnMoeyBnbG9iYWw6IFwiaGVhZGVySGVpZ2h0XCIgfSk7XG5cblx0Ly8gc2V0R2xvYmFsKHsgaGVhZGVySGVpZ2h0OiBoZWFkZXJTaXplLmhlaWdodCB9KTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gZ2V0R2xvYmFsKCkuaGVhZGVySGVpZ2h0ICogLTE7XG5cdGNvbnNvbGUubG9nKG9mZnNldEhlYWRlcik7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIHJlZj17aGVhZGVyUmVmfSBkYXRhLW5hdi1hY3RpdmU9e25hdk9wZW59PlxuXHRcdFx0PGgxPkthdGUgSmFja2xpbmc8L2gxPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoIW5hdk9wZW4pfT57bmF2T3BlbiA/IFwiQ2xvc2VcIiA6IFwiTWVudVwifTwvYnV0dG9uPlxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwic3RpbGxsaWZlXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRTdGlsbGxpZmVcblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwiY29tbWVyY2lhbFwiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0Q29tbWVyY2lhbFxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJmaWxtXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRGaWxtXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cImluZm9cIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEluZm9cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IHVsIGxpIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWxhcmdlKTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjA0NTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWFkZXJbZGF0YS1uYXYtYWN0aXZlPVwidHJ1ZVwiXSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdkgpKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJ0cnVlXCJdID4gKiB7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJmYWxzZVwiXSBuYXYge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdGhlYWRlciBidXR0b24ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwgbGk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCIsIFwiO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG5cdG5hdk9wZW46IHN0YXRlLm5hdi5uYXZPcGVuXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gYmluZEFjdGlvbkNyZWF0b3JzKHsgdG9nZ2xlTmF2IH0sIGRpc3BhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHRtYXBEaXNwYXRjaFRvUHJvcHNcbikoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js */"));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.nav.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
    toggleNav: _utils_redux_actions__WEBPACK_IMPORTED_MODULE_6__["toggleNav"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.c644b759c4b94d2311c7.hot-update.js.map