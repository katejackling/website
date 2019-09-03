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
      _useDimensions = Object(_utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      _useDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerSize = _useDimensions2[1],
      _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("headerHeight"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobal, 2),
      headerHeight = _useGlobal2[0],
      setHeaderHeight = _useGlobal2[1];

  setHeaderHeight(30); // setGlobal({ headerHeight: headerSize.height });

  var offsetHeader = headerHeight * -1;
  console.log(offsetHeader);
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
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "stilllife",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
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
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "commercial",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
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
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "film",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
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
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "info",
    offset: offsetHeader,
    spy: true,
    smooth: true,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "621272809",
    __self: this
  }, "header{position:fixed;top:0;left:0;width:100%;padding:var(--marginOuter);z-index:99;}header a{display:inline;}nav ul li{cursor:pointer;}@media screen and (max-width:639px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav{width:100%;margin-top:var(--marginMedium);font-size:var(--font-size--large);line-height:1.045;}header[data-nav-active=\"true\"]{height:calc(100 * var(--vH));background:white;}header[data-nav-active=\"true\"]>*{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}header[data-nav-active=\"false\"] nav{display:none;}}@media screen and (min-width:640px){header button{display:none;}nav ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav ul li:not(:last-child)::after{content:\", \";margin-right:0.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFc0IsQUFHcUIsQUFTQSxBQUlBLEFBS0QsQUFPRixBQU9rQixBQUtQLEFBSVQsQUFNQSxBQUlBLEFBSUEsV0E3QmtCLEVBZ0JoQyxBQU1BLEFBUXFCLEVBdkRmLEFBU1AsQUFJQSxNQVpRLE9BQ0ksQ0E4Qk8sSUF3QmxCLE1BckQyQixHQXVCUSxJQU9uQyxvQkE3QlcsUUFjb0IsQUFpQy9CLEVBeEJtQixDQXRCcEIsQ0FnQ0MsZ0JBVEEsK0ZBVDBCLG1GQUNWLHlEQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgdG9nZ2xlTmF2IH0gZnJvbSBcIi4uL3V0aWxzL3JlZHV4L2FjdGlvbnNcIjtcbi8vIGltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC11c2UtZGltZW5zaW9uc1wiO1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcIi4uL3V0aWxzL2hvb2tzL3VzZURpbWVuc2lvbnNcIjtcblxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuXHRjb25zdCB7IHRvZ2dsZU5hdiwgbmF2T3BlbiB9ID0gcHJvcHMsXG5cdFx0W2hlYWRlclJlZiwgaGVhZGVyU2l6ZV0gPSB1c2VEaW1lbnNpb25zKCksXG5cdFx0W2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlckhlaWdodFwiKTtcblxuXHRzZXRIZWFkZXJIZWlnaHQoMzApO1xuXHQvLyBzZXRHbG9iYWwoeyBoZWFkZXJIZWlnaHQ6IGhlYWRlclNpemUuaGVpZ2h0IH0pO1xuXG5cdGxldCBvZmZzZXRIZWFkZXIgPSBoZWFkZXJIZWlnaHQgKiAtMTtcblx0Y29uc29sZS5sb2cob2Zmc2V0SGVhZGVyKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgcmVmPXtoZWFkZXJSZWZ9IGRhdGEtbmF2LWFjdGl2ZT17bmF2T3Blbn0+XG5cdFx0XHQ8aDE+S2F0ZSBKYWNrbGluZzwvaDE+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU5hdighbmF2T3Blbil9PntuYXZPcGVuID8gXCJDbG9zZVwiIDogXCJNZW51XCJ9PC9idXR0b24+XG5cdFx0XHQ8bmF2PlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJzdGlsbGxpZmVcIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFN0aWxsbGlmZVxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJjb21tZXJjaWFsXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRDb21tZXJjaWFsXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cImZpbG1cIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEZpbG1cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwiaW5mb1wiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0SW5mb1xuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHR6LWluZGV4OiA5OTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGhlYWRlciBhIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRuYXYgdWwgbGkge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdFx0aGVhZGVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5hdiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IHZhcigtLW1hcmdpbk1lZGl1bSk7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0tbGFyZ2UpO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMDQ1O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJ0cnVlXCJdIHtcblx0XHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12SCkpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGVhZGVyW2RhdGEtbmF2LWFjdGl2ZT1cInRydWVcIl0gPiAqIHtcblx0XHRcdFx0XHRcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGVhZGVyW2RhdGEtbmF2LWFjdGl2ZT1cImZhbHNlXCJdIG5hdiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0aGVhZGVyIGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5hdiB1bCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5hdiB1bCBsaTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIiwgXCI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcblx0bmF2T3Blbjogc3RhdGUubmF2Lm5hdk9wZW5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyB0b2dnbGVOYXYgfSwgZGlzcGF0Y2gpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdG1hcERpc3BhdGNoVG9Qcm9wc1xuKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js */"));
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
//# sourceMappingURL=index.js.9d536fd480e9a591b6b0.hot-update.js.map