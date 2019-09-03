webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectRow.js":
/*!**********************************!*\
  !*** ./components/ProjectRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectRowItem */ "./components/ProjectRowItem.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectRow(props) {
  var content = props.content,
      id = props.id,
      total = props.total,
      clickEnabled = props.clickEnabled;

  var enableViewer = function enableViewer(viewerID, slideIndex) {
    // return async function() {
    // 	const res = await client.fetch(`*[_id == "${viewerID}"]`);
    // 	const content = res[0].content;
    // 	console.log(content);
    // 	setGlobal({
    // 		viewerContent: content,
    // 		viewerID,
    // 		slideIndex
    // 	});
    // };
    _client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch("*[_id == \"".concat(viewerID, "\"]")).then(function (query) {
      console.log(query);
      var intro = query.intro,
          references = query.references,
          references_left = query.references_left,
          references_right = query.references_right;
    });
  };

  var rowIndex = 0;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, content.map(function (_ref, i) {
    var _type = _ref._type,
        media = _ref.media,
        media_left = _ref.media_left,
        media_right = _ref.media_right;
    rowIndex++;
    return __jsx("li", {
      key: rowIndex,
      onMouseUp: function onMouseUp() {
        clickEnabled && enableViewer(id, i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, (media_left || media) && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      media: media ? media : media_left,
      rowIndex: rowIndex,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), media_right && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      media: media_right,
      rowIndex: rowIndex + 1,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }));
    media_right && rowIndex++;
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectRow);

/***/ })

})
//# sourceMappingURL=index.js.0a51c4eeec65ec9cc963.hot-update.js.map