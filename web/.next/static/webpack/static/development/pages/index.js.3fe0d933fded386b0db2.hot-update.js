webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectFeed.js":
/*!***********************************!*\
  !*** ./components/ProjectFeed.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProjectRowContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectRowContainer */ "./components/ProjectRowContainer.js");
/* harmony import */ var _ProjectGridContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectGridContainer */ "./components/ProjectGridContainer.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectFeed.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ProjectFeed(props) {
  var posts = props.posts,
      _props$title = props.title,
      title = _props$title === void 0 ? "" : _props$title,
      _props$type = props.type,
      type = _props$type === void 0 ? "" : _props$type;
  return __jsx("article", {
    id: type,
    className: "jsx-3269843171" + " " + ((type !== "film" ? "projects row" : "projects grid") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3269843171",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), __jsx("ul", {
    className: "jsx-3269843171",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, posts.map(function (_ref) {
    var _id = _ref._id,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "" : _ref$title,
        _ref$slug = _ref.slug,
        slug = _ref$slug === void 0 ? "" : _ref$slug,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? [] : _ref$content,
        mediaFeatured = _ref.mediaFeatured;
    var total = 0;
    content.forEach(function (slide) {
      total = total + (slide.hasOwnProperty("media_right") ? 2 : 1);
    });
    return slug && __jsx("li", {
      key: _id,
      id: _id,
      className: "jsx-3269843171" + " " + "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-3269843171",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, title), type !== "film" ? __jsx(_ProjectRowContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: content,
      id: _id,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }) : __jsx(_ProjectGridContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mediaFeatured: mediaFeatured,
      content: content,
      id: _id,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3269843171",
    __self: this
  }, ".projects:not(:last-child),.project:not(:last-child){margin-bottom:var(--marginMedium);}.projects h2{padding:0 var(--marginOuter);text-transform:uppercase;}.row h3{padding:0 var(--marginOuter);}.grid{width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.grid h3{margin-bottom:var(--marginOuter);}.grid ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:calc(var(--marginOuter) / 2);}.grid li{padding:calc(var(--marginOuter) / 2);}.grid li figure{position:relative;display:inline-block;}.grid video{cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;}@media screen and (max-width:639px){.grid li,.grid figure,.grid video{width:100%;}}@media screen and (min-width:640px){.projects h2{width:100%;text-align:center;}.grid li{width:50%;}.grid video{width:calc(20rem * var(--ratio));max-width:calc((100vw - 3 * var(--marginOuter)) / 2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdEZlZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NzQixBQUl3QyxBQUdMLEFBS0EsQUFJbEIsQUFLc0IsQUFJcEIsQUFPd0IsQUFJbkIsQUFLSCxBQWNILEFBTUEsQUFLRCxBQUd1QixVQUZsQyxDQWxEaUIsQUF1Q2pCLEFBTW1CLElBcEJHLEdBTEQsV0E3QkksQUFLMUIsQUFrREMsSUF6Q0QsQUFnRHVELENBakV2RCxHQTRCQSxBQVUwQixFQUwxQixlQTdCQSxRQW1Dc0IsWUFsQlMsU0FtQmIsR0EwQmpCLFVBckRELHdFQTRCd0IscUJBbkJSLEVBb0JBLHVEQW5Cc0Isc0JBb0JWLGVBbkI1QixZQW9CQSIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL1Byb2plY3RGZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUHJvamVjdFJvd0NvbnRhaW5lciBmcm9tIFwiLi9Qcm9qZWN0Um93Q29udGFpbmVyXCI7XG5pbXBvcnQgUHJvamVjdEdyaWRDb250YWluZXIgZnJvbSBcIi4vUHJvamVjdEdyaWRDb250YWluZXJcIjtcblxuZnVuY3Rpb24gUHJvamVjdEZlZWQocHJvcHMpIHtcblx0Y29uc3QgeyBwb3N0cywgdGl0bGUgPSBcIlwiLCB0eXBlID0gXCJcIiB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBpZD17dHlwZX0gY2xhc3NOYW1lPXt0eXBlICE9PSBcImZpbG1cIiA/IFwicHJvamVjdHMgcm93XCIgOiBcInByb2plY3RzIGdyaWRcIn0+XG5cdFx0XHQ8aDI+e3RpdGxlfTwvaDI+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHtwb3N0cy5tYXAoKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBjb250ZW50ID0gW10sIG1lZGlhRmVhdHVyZWQgfSkgPT4ge1xuXHRcdFx0XHRcdGxldCB0b3RhbCA9IDA7XG5cblx0XHRcdFx0XHRjb250ZW50LmZvckVhY2goc2xpZGUgPT4ge1xuXHRcdFx0XHRcdFx0dG90YWwgPSB0b3RhbCArIChzbGlkZS5oYXNPd25Qcm9wZXJ0eShcIm1lZGlhX3JpZ2h0XCIpID8gMiA6IDEpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdHNsdWcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT1cInByb2plY3RcIiBpZD17X2lkfT5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+e3RpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0e3R5cGUgIT09IFwiZmlsbVwiID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2plY3RSb3dDb250YWluZXIgY29udGVudD17Y29udGVudH0gaWQ9e19pZH0gdG90YWw9e3RvdGFsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdEdyaWRDb250YWluZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFGZWF0dXJlZD17bWVkaWFGZWF0dXJlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudD17Y29udGVudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e19pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dG90YWw9e3RvdGFsfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5wcm9qZWN0czpub3QoOmxhc3QtY2hpbGQpLFxuXHRcdFx0XHQucHJvamVjdDpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5wcm9qZWN0cyBoMiB7XG5cdFx0XHRcdFx0cGFkZGluZzogMCB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5yb3cgaDMge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmdyaWQge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmdyaWQgaDMge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5ncmlkIHVsIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5ncmlkIGxpIHtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmdyaWQgbGkgZmlndXJlIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmdyaWQgdmlkZW8ge1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5ncmlkIGxpLFxuXHRcdFx0XHRcdC5ncmlkIGZpZ3VyZSxcblx0XHRcdFx0XHQuZ3JpZCB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5wcm9qZWN0cyBoMiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZ3JpZCBsaSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZ3JpZCB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygyMHJlbSAqIHZhcigtLXJhdGlvKSk7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMyAqIHZhcigtLW1hcmdpbk91dGVyKSkgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2FydGljbGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RGZWVkO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectFeed.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectFeed);

/***/ })

})
//# sourceMappingURL=index.js.3fe0d933fded386b0db2.hot-update.js.map