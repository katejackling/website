webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectGridContainer.js":
/*!********************************************!*\
  !*** ./components/ProjectGridContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./components/Media.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectGridContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectGridContainer(props) {
  var mediaFeatured = props.mediaFeatured,
      id = props.id;

  var enableViewer = function enableViewer(viewerID, slideIndex) {
    _client__WEBPACK_IMPORTED_MODULE_3___default.a.fetch("*[_id == \"".concat(viewerID, "\"]")).then(function (res) {
      var content = res[0].content;
      console.log(viewerID, slideIndex, content);
      Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
        viewerOpen: true,
        viewerContent: content,
        viewerID: viewerID,
        slideIndex: slideIndex
      });
    });
  };

  return __jsx("figure", {
    onClick: function onClick() {
      enableViewer(id, 0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "video",
    asset: mediaFeatured.asset,
    gif: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectGridContainer);

/***/ })

})
//# sourceMappingURL=index.js.fd6580b0f68379f90e69.hot-update.js.map