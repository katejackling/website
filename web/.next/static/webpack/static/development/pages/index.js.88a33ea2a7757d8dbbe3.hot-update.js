webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectFeedContainer */ "./components/ProjectFeedContainer.js");
/* harmony import */ var _components_ProjectViewerContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectViewerContainer */ "./components/ProjectViewerContainer.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Projects(props) {
  var viewerOpen = props.viewerOpen,
      viewerContent = props.viewerContent;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "stilllife",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "commercial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "film",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), viewerOpen && __jsx(_components_ProjectViewerContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    viewerOpen: state.viewer.viewerOpen,
    viewerContent: state.viewer.viewerContent,
    viewerID: state.viewer.viewerID,
    slideIndex: state.viewer.slideIndex
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Projects));

/***/ })

})
//# sourceMappingURL=index.js.88a33ea2a7757d8dbbe3.hot-update.js.map