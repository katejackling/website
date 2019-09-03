webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectRow.js":
/*!**********************************!*\
  !*** ./components/ProjectRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectRowItem */ "./components/ProjectRowItem.js");


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function ProjectRow(props) {
  var content = props.content,
      id = props.id,
      total = props.total,
      clickEnabled = props.clickEnabled;

  var enableViewer = function enableViewer(viewerID, slideIndex) {
    return (
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, content;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _client__WEBPACK_IMPORTED_MODULE_4___default.a.fetch("*[_id == \"".concat(viewerID, "\"]"));

              case 2:
                res = _context.sent;
                content = res[0].content;
                console.log(content);
                Object(reactn__WEBPACK_IMPORTED_MODULE_3__["setGlobal"])({
                  viewerContent: content,
                  viewerID: viewerID,
                  slideIndex: slideIndex
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    );
  };

  var rowIndex = 0;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, content.map(function (_ref2, i) {
    var _type = _ref2._type,
        media = _ref2.media,
        media_left = _ref2.media_left,
        media_right = _ref2.media_right;
    rowIndex++;
    return __jsx("li", {
      key: rowIndex,
      onMouseUp: function onMouseUp() {
        clickEnabled && enableViewer(id, i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, (media_left || media) && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      media: media ? media : media_left,
      rowIndex: rowIndex,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), media_right && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      media: media_right,
      rowIndex: rowIndex + 1,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
    media_right && rowIndex++;
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectRow);

/***/ })

})
//# sourceMappingURL=index.js.e7b65962c502c9014657.hot-update.js.map