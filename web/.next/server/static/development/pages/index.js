module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

const client = sanityClient({
  projectId: 'lvy1f0zr',
  dataset: 'production',
  token: '',
  // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data

});
module.exports = client;

/***/ }),

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Block */ "./components/Block.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/About.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function About(props) {
  const {
    content
  } = props;
  return __jsx("article", {
    id: "info",
    className: "jsx-2664948458" + " " + "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2664948458" + " " + "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blocks: content.about,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2664948458" + " " + "clients",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2664948458",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Clients"), __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blocks: content.clients,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2664948458" + " " + "editorial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2664948458",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Editorial"), __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blocks: content.editorial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2664948458" + " " + "legal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2664948458",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Legal Notice"), __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blocks: content.legal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2664948458",
    __self: this
  }, ".info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:calc(var(--marginOuter) / 2);margin-bottom:var(--marginMedium);}.info h3{text-transform:uppercase;}.info>*{padding:calc(var(--marginOuter) / 2);margin-bottom:var(--marginMedium);}.about{width:100%;}.editorial,.clients{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvQWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JzQixBQUdtQixBQU9ZLEFBSVksQUFLMUIsQUFLRCxVQUNYLENBTEEsY0FUQSxZQUltQyxrQ0FDbkMsR0FaZ0IseURBQ3NCLHFDQUNILGtDQUNuQyIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2NrXCI7XG5cbmZ1bmN0aW9uIEFib3V0KHByb3BzKSB7XG5cdGNvbnN0IHsgY29udGVudCB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBpZD1cImluZm9cIiBjbGFzc05hbWU9XCJpbmZvXCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dFwiPlxuXHRcdFx0XHQ8QmxvY2sgYmxvY2tzPXtjb250ZW50LmFib3V0fSAvPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY2xpZW50c1wiPlxuXHRcdFx0XHQ8aDM+Q2xpZW50czwvaDM+XG5cdFx0XHRcdDxCbG9jayBibG9ja3M9e2NvbnRlbnQuY2xpZW50c30gLz5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImVkaXRvcmlhbFwiPlxuXHRcdFx0XHQ8aDM+RWRpdG9yaWFsPC9oMz5cblx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17Y29udGVudC5lZGl0b3JpYWx9IC8+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJsZWdhbFwiPlxuXHRcdFx0XHQ8aDM+TGVnYWwgTm90aWNlPC9oMz5cblx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17Y29udGVudC5sZWdhbH0gLz5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbmZvIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbk1lZGl1bSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW5mbyBoMyB7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbmZvID4gKiB7XG5cdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFib3V0IHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5lZGl0b3JpYWwsXG5cdFx0XHRcdC5jbGllbnRzIHtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/About.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Block.js":
/*!*****************************!*\
  !*** ./components/Block.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Block.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Block(props) {
  const {
    blocks
  } = props;

  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    blocks: blocks
  }, _client__WEBPACK_IMPORTED_MODULE_3___default.a.config(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
} // About.propTypes = {
//   blocks: PropTypes.arrayOf(PropTypes.object)
// }


/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer(props) {
  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Design by Daily Dialogue", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "Development by Philipp Polder");
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks/useDimensions */ "./utils/hooks/useDimensions.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Header(props) {
  const [headerRef, headerDimensions] = Object(_utils_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__["default"])({
    global: "headerSize"
  }),
        [headerSize] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize"),
        [navOpen, toggleNav] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("navOpen");
  let Link = react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"];
  let Element = react_scroll__WEBPACK_IMPORTED_MODULE_5__["Element"];
  let Events = react_scroll__WEBPACK_IMPORTED_MODULE_5__["Events"];
  Events.scrollEvent.register("begin", function (to, element) {
    console.log("begin", to, element);
    navOpen && toggleNav(false);
  });
  let offsetHeader = headerSize && headerSize.height * -1;
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
    onClick: () => toggleNav(!navOpen),
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
  }, "Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "621272809",
    __self: this
  }, "header{position:fixed;top:0;left:0;width:100%;padding:var(--marginOuter);z-index:99;}header a{display:inline;}nav ul li{cursor:pointer;}@media screen and (max-width:639px){header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav{width:100%;margin-top:var(--marginMedium);font-size:var(--font-size--large);line-height:1.045;}header[data-nav-active=\"true\"]{height:calc(100 * var(--vH));background:white;}header[data-nav-active=\"true\"]>*{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}header[data-nav-active=\"false\"] nav{display:none;}}@media screen and (min-width:640px){header button{display:none;}nav ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav ul li:not(:last-child)::after{content:\", \";margin-right:0.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFc0IsQUFHcUIsQUFTQSxBQUlBLEFBS0QsQUFPRixBQU9rQixBQUtQLEFBSVQsQUFNQSxBQUlBLEFBSUEsV0E3QmtCLEVBZ0JoQyxBQU1BLEFBUXFCLEVBdkRmLEFBU1AsQUFJQSxNQVpRLE9BQ0ksQ0E4Qk8sSUF3QmxCLE1BckQyQixHQXVCUSxJQU9uQyxvQkE3QlcsUUFjb0IsQUFpQy9CLEVBeEJtQixDQXRCcEIsQ0FnQ0MsZ0JBVEEsK0ZBVDBCLG1GQUNWLHlEQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VEaW1lbnNpb25zXCI7XG5cbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcblx0Y29uc3QgW2hlYWRlclJlZiwgaGVhZGVyRGltZW5zaW9uc10gPSB1c2VEaW1lbnNpb25zKHsgZ2xvYmFsOiBcImhlYWRlclNpemVcIiB9KSxcblx0XHRbaGVhZGVyU2l6ZV0gPSB1c2VHbG9iYWwoXCJoZWFkZXJTaXplXCIpLFxuXHRcdFtuYXZPcGVuLCB0b2dnbGVOYXZdID0gdXNlR2xvYmFsKFwibmF2T3BlblwiKTtcblx0bGV0IExpbmsgPSBTY3JvbGwuTGluaztcblx0bGV0IEVsZW1lbnQgPSBTY3JvbGwuRWxlbWVudDtcblx0bGV0IEV2ZW50cyA9IFNjcm9sbC5FdmVudHM7XG5cblx0RXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiYmVnaW5cIiwgZnVuY3Rpb24odG8sIGVsZW1lbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcImJlZ2luXCIsIHRvLCBlbGVtZW50KTtcblx0XHRuYXZPcGVuICYmIHRvZ2dsZU5hdihmYWxzZSk7XG5cdH0pO1xuXG5cdGxldCBvZmZzZXRIZWFkZXIgPSBoZWFkZXJTaXplICYmIGhlYWRlclNpemUuaGVpZ2h0ICogLTE7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIHJlZj17aGVhZGVyUmVmfSBkYXRhLW5hdi1hY3RpdmU9e25hdk9wZW59PlxuXHRcdFx0PGgxPkthdGUgSmFja2xpbmc8L2gxPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoIW5hdk9wZW4pfT57bmF2T3BlbiA/IFwiQ2xvc2VcIiA6IFwiTWVudVwifTwvYnV0dG9uPlxuXHRcdFx0PG5hdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwic3RpbGxsaWZlXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRTdGlsbGxpZmVcblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdHRvPVwiY29tbWVyY2lhbFwiXG5cdFx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0Q29tbWVyY2lhbFxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0dG89XCJmaWxtXCJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRGaWxtXG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHR0bz1cImluZm9cIlxuXHRcdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdEluZm9cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmF2IHVsIGxpIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtLWxhcmdlKTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjA0NTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWFkZXJbZGF0YS1uYXYtYWN0aXZlPVwidHJ1ZVwiXSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdkgpKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJ0cnVlXCJdID4gKiB7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlYWRlcltkYXRhLW5hdi1hY3RpdmU9XCJmYWxzZVwiXSBuYXYge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdGhlYWRlciBidXR0b24ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuYXYgdWwgbGk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCIsIFwiO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Img.js":
/*!***************************!*\
  !*** ./components/Img.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes */ "lazysizes");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/attrchange/ls.attrchange */ "lazysizes/plugins/attrchange/ls.attrchange");
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Img.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Img extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      dimensions: []
    });
  }

  componentDidMount() {
    return _client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(`*[_id == "${this.props.asset._ref}"][0].metadata.dimensions`).then(dimensions => {
      this.setState({
        dimensions: dimensions
      });
    });
  }

  render() {
    const {
      aspectRatio = "",
      height = "",
      width = ""
    } = this.state.dimensions;
    const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_2___default.a);
    const sizes = [120, 240, 360, 480, 600, 840, 1080, 1320, 1560, 1800, 2040, 2280, 2520, 2760, 3000];
    const {
      alt,
      asset,
      fit
    } = this.props;
    const objFit = fit ? fit : "none";
    const sizeURLs = sizes.map(function (size) {
      return `${builder.image(asset).auto("format").width(size).fit("max").url()} ${size}w`;
    });
    const srcSet = sizeURLs.reduce(function (prev, curr, i) {
      return i == 0 ? curr : prev + ", " + curr;
    }, "");
    return __jsx("img", {
      draggable: "false",
      className: "lazyload",
      src: `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'  width%3D'${width}' height%3D'${height}' viewBox%3D'0 0 ${width} ${height}'%2F%3E"`,
      "data-srcset": srcSet,
      sizes: "auto",
      "data-orientation": aspectRatio < 1 ? "portrait" : "landscape",
      style: {
        "--imgRatio": aspectRatio,
        "--objFit": objFit
      },
      alt: alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Img);

/***/ }),

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections */ "./components/sections/index.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Intro.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = _sections__WEBPACK_IMPORTED_MODULE_4__[Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(section._type)];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console

  return null;
}

function Intro(props) {
  const {
    content,
    references
  } = props;

  if (!content) {
    console.error("Missing section");
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Missing content");
  }

  return __jsx("article", {
    id: "intro",
    className: "jsx-1798990367",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, content.map((section, i) => {
    const IntroSection = resolveSections(section);

    if (!IntroSection) {
      return __jsx("div", {
        className: "jsx-1798990367",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Missing section ", section._type);
    }

    const ref = section._type === "introPair" ? [references.references_left[i], references.references_right[i]] : references.references[i];
    return __jsx(IntroSection, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      reference: ref,
      key: section._key + i,
      className: "jsx-1798990367" + " " + (section.className != null && section.className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1798990367",
    __self: this
  }, "#intro{margin-bottom:var(--marginMedium);}.intro__section,.intro__section figure{position:relative;width:100%;}.intro__section:not(.intro__section--text) figcaption{position:absolute;top:0;left:100%;white-space:nowrap;-webkit-transform:rotate(-90deg) translate(-100%,-100%);-ms-transform:rotate(-90deg) translate(-100%,-100%);transform:rotate(-90deg) translate(-100%,-100%);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;padding:0.5rem 0;}@media screen and (max-width:639px){.intro__section:not(.intro__section--text) figcaption{display:none;}}@media screen and (min-width:640px){#intro,.intro__section:not(:last-child){margin-bottom:15rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NzQixBQUd3QyxBQUtoQixBQUlBLEFBV0osQUFPTyxhQU5yQixLQWZXLEFBSUwsRUFrQk4sSUFqQlUsS0FKWCxLQU5BLEFBV29CLG1CQUM4Qiw0SkFDdkIsMEZBQ1QsaUJBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvSW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIEludHJvU2VjdGlvbnMgZnJvbSBcIi4vc2VjdGlvbnNcIjtcblxuZnVuY3Rpb24gcmVzb2x2ZVNlY3Rpb25zKHNlY3Rpb24pIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uYW1lc3BhY2Vcblx0Y29uc3QgU2VjdGlvbiA9IEludHJvU2VjdGlvbnNbY2FwaXRhbGl6ZShzZWN0aW9uLl90eXBlKV07XG5cblx0aWYgKFNlY3Rpb24pIHtcblx0XHRyZXR1cm4gU2VjdGlvbjtcblx0fVxuXG5cdGNvbnNvbGUuZXJyb3IoXCJDYW50IGZpbmQgc2VjdGlvblwiLCBzZWN0aW9uKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBJbnRybyhwcm9wcykge1xuXHRjb25zdCB7IGNvbnRlbnQsIHJlZmVyZW5jZXMgfSA9IHByb3BzO1xuXG5cdGlmICghY29udGVudCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIHNlY3Rpb25cIik7XG5cdFx0cmV0dXJuIDxkaXY+TWlzc2luZyBjb250ZW50PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBpZD1cImludHJvXCI+XG5cdFx0XHR7Y29udGVudC5tYXAoKHNlY3Rpb24sIGkpID0+IHtcblx0XHRcdFx0Y29uc3QgSW50cm9TZWN0aW9uID0gcmVzb2x2ZVNlY3Rpb25zKHNlY3Rpb24pO1xuXHRcdFx0XHRpZiAoIUludHJvU2VjdGlvbikge1xuXHRcdFx0XHRcdHJldHVybiA8ZGl2Pk1pc3Npbmcgc2VjdGlvbiB7c2VjdGlvbi5fdHlwZX08L2Rpdj47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVmID1cblx0XHRcdFx0XHRzZWN0aW9uLl90eXBlID09PSBcImludHJvUGFpclwiXG5cdFx0XHRcdFx0XHQ/IFtyZWZlcmVuY2VzLnJlZmVyZW5jZXNfbGVmdFtpXSwgcmVmZXJlbmNlcy5yZWZlcmVuY2VzX3JpZ2h0W2ldXVxuXHRcdFx0XHRcdFx0OiByZWZlcmVuY2VzLnJlZmVyZW5jZXNbaV07XG5cdFx0XHRcdHJldHVybiA8SW50cm9TZWN0aW9uIHsuLi5zZWN0aW9ufSByZWZlcmVuY2U9e3JlZn0ga2V5PXtzZWN0aW9uLl9rZXkgKyBpfSAvPjtcblx0XHRcdH0pfVxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0I2ludHJvIHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24gZmlndXJlIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmludHJvX19zZWN0aW9uOm5vdCguaW50cm9fX3NlY3Rpb24tLXRleHQpIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0bGVmdDogMTAwJTtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSk7XG5cdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG5cdFx0XHRcdFx0cGFkZGluZzogMC41cmVtIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbjpub3QoLmludHJvX19zZWN0aW9uLS10ZXh0KSBmaWdjYXB0aW9uIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQjaW50cm8sXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybztcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Intro.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./components/IntroContainer.js":
/*!**************************************!*\
  !*** ./components/IntroContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Intro */ "./components/Intro.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/IntroContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class IntroContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  //state = { content: [] };
  componentDidMount() {
    return _client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(`*[_id == "home"]{intro}[0]{intro, "references": intro[].reference->, "references_left": intro[].reference_left->, "references_right": intro[].reference_right->}`).then(query => {
      const {
        intro,
        references,
        references_left,
        references_right
      } = query;
      this.setState({
        content: intro,
        references: {
          references,
          references_left,
          references_right
        }
      });
    });
  }

  render() {
    if (!this.state) {
      return null;
    }

    return __jsx(_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: this.state.content,
      references: this.state.references,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IntroContainer);

/***/ }),

/***/ "./components/Media.js":
/*!*****************************!*\
  !*** ./components/Media.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Img */ "./components/Img.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video */ "./components/Video.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Media.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Media(props) {
  const {
    media,
    asset = "",
    type = "",
    fit = null,
    gif = false
  } = props;

  if (type === "image") {
    return __jsx(_Img__WEBPACK_IMPORTED_MODULE_1__["default"], {
      asset: asset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  } else {
    return __jsx(_Video__WEBPACK_IMPORTED_MODULE_2__["default"], {
      asset: asset,
      gif: gif,
      controls: media && media.video.videoControls,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./components/ProjectFeed.js":
/*!***********************************!*\
  !*** ./components/ProjectFeed.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
  const {
    posts,
    title = "",
    type = ""
  } = props;
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
  }, posts.map(({
    _id,
    title = "",
    slug = "",
    content = [],
    mediaFeatured
  }) => {
    let total = 0;
    content.forEach(slide => {
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

/***/ }),

/***/ "./components/ProjectFeedContainer.js":
/*!********************************************!*\
  !*** ./components/ProjectFeedContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProjectFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectFeed */ "./components/ProjectFeed.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectFeedContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class ProjectFeedContainer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      posts: []
    });
  }

  componentDidMount() {
    const type = this.props.type;
    return _client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(`*[_type=="home"][0]{${type}[]->}`).then(posts => {
      this.setState({
        posts: posts[type]
      });
    });
  }

  render() {
    if (!this.state) {
      return null;
    }

    return __jsx(_components_ProjectFeed__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(this.props.type),
      type: this.props.type,
      posts: this.state.posts,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectFeedContainer);

/***/ }),

/***/ "./components/ProjectGridContainer.js":
/*!********************************************!*\
  !*** ./components/ProjectGridContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./components/Media.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectGridContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectGridContainer(props) {
  const {
    mediaFeatured,
    id
  } = props;

  const enableViewer = (viewerID, slideIndex) => {
    _client__WEBPACK_IMPORTED_MODULE_3___default.a.fetch(`*[_id == "${viewerID}"]`).then(res => {
      const content = res[0].content;
      console.log(viewerID, slideIndex, content);
      Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
        viewerOpen: true,
        viewerContent: content,
        viewerID,
        slideIndex
      });
    });
  };

  return __jsx("figure", {
    onClick: () => {
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

/***/ }),

/***/ "./components/ProjectRow.js":
/*!**********************************!*\
  !*** ./components/ProjectRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectRowItem */ "./components/ProjectRowItem.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectRow(props) {
  const {
    content,
    id,
    total,
    clickEnabled
  } = props;

  const enableViewer = (viewerID, slideIndex) => {
    _client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(`*[_id == "${viewerID}"]`).then(res => {
      const content = res[0].content;
      console.log(viewerID, slideIndex, content);
      Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
        viewerOpen: true,
        viewerContent: content,
        viewerID,
        slideIndex
      });
    });
  };

  let rowIndex = 0;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, content.map(({
    _type,
    media,
    media_left,
    media_right
  }, i) => {
    rowIndex++;
    return __jsx("li", {
      key: rowIndex,
      onMouseUp: () => {
        clickEnabled && enableViewer(id, i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, (media_left || media) && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      media: media ? media : media_left,
      rowIndex: rowIndex,
      total: total,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), media_right && __jsx(_components_ProjectRowItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ }),

/***/ "./components/ProjectRowContainer.js":
/*!*******************************************!*\
  !*** ./components/ProjectRowContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hooks_useMeasure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks/useMeasure */ "./utils/hooks/useMeasure.js");
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-use-gesture */ "react-use-gesture");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Media */ "./components/Media.js");
/* harmony import */ var _components_ProjectRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProjectRow */ "./components/ProjectRow.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRowContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











function ProjectRowContainer(props) {
  const [sliderRef, sliderSize] = Object(_utils_hooks_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [contentRef, contentSize] = Object(_utils_hooks_useMeasure__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    0: clickEnabled,
    1: toggleClick
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let sliderBoundaries = {
    left: sliderSize.width - contentSize.width,
    right: 0
  };
  let sliderEnabled = contentSize.width > sliderSize.width ? true : false;
  const [{
    x
  }, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useSpring"])(() => ({
    x: 0,
    config: {
      mass: 2,
      tension: 1000,
      friction: 100
    },
    onRest: function () {
      toggleClick(true);
    }
  }));
  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_7__["useGesture"])({
    onDrag: ({
      down,
      delta,
      velocity,
      distance,
      direction,
      time,
      temp = [x.getValue()]
    }) => {
      const {
        right,
        left
      } = sliderBoundaries; // console.log(down, delta, velocity, distance, direction, time);

      set({
        x: down ? Object(lodash__WEBPACK_IMPORTED_MODULE_8__["clamp"])(temp[0] + delta[0], left - sliderSize.width * 0.1, right + sliderSize.width * 0.1) : Object(lodash__WEBPACK_IMPORTED_MODULE_8__["clamp"])(temp[0] + delta[0] * (velocity < 1 ? 1 : velocity * 2), left, right)
      });
      toggleClick(!down);
      return temp;
    }
  });
  const {
    content,
    id,
    total
  } = props;
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderRef, {
    className: "jsx-3950148684 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3811681516", [sliderEnabled ? "cursor: grab !important;" : "", sliderEnabled ? "cursor: grabbing !important; cursor: -moz-grabbing !important; cursor: -webkit-grabbing !important;" : ""]]]) + " " + (sliderRef.className != null && sliderRef.className || "slider"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "slider__wrapper"
  }, bind(), contentRef, {
    style: {
      transform: sliderEnabled ? Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["interpolate"])([x], x => `translate3d(${x}px,0,0)`) : "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_components_ProjectRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    content: content,
    id: id,
    total: total,
    clickEnabled: clickEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3950148684",
    __self: this
  }, ".slider{width:100%;overflow-x:hidden;overflow-y:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.slider__wrapper{display:inline-block;min-width:100%;}.slider ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:calc(var(--marginOuter) / 2);}.slider li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:calc(var(--marginOuter) / 2);}.slider li figure{position:relative;}.slider li figure:nth-child(2){margin-left:var(--marginOuter);}.slider img,.slider video{cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;height:10rem !important;width:auto !important;}@media screen and (max-width:639px){}@media screen and (min-width:640px){.slider li figure{padding:0 calc((var(--marginOuter) / 2 + 1rem + 1rem) * 1.5) 0 0;}.slider ul{counter-reset:section;}.slider li{counter-increment:section;}.slider li figure figcaption{width:calc((var(--marginOuter) / 2 + 1rem + 1rem) * 1.5);position:absolute;top:0;right:0;white-space:nowrap;padding:0 0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFJvd0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RHNCLEFBR2lCLEFBT1UsQUFLUixBQU1BLEFBTUssQUFJYSxBQUtoQixBQWlCbUQsQUFPM0MsQUFJSSxBQUkrQixXQWhFeEMsSUFpQ0ksR0FUdkIsR0FqQmdCLENBa0RmLElBSUEsR0E1RGtCLEVBMkJuQixLQXBCQSxDQTBCMEIsVUFoQ1IsVUErREUsS0E5QkUsR0FrQnJCLFNBekM4QixBQU1iLENBZ0RWLE1BQ0UsRUEvQlEsTUFnQ0csbUJBQ0YsaUJBQ2xCLE9BbkVELEtBZ0JzQywrQkFrQmQsTUFqQnhCLGVBUHNDLEVBeUJ0QixtQ0F4QmhCLDBDQXlCNEIsMkJBQ0gsd0JBQ0Ysc0JBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFJvd0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VNZWFzdXJlIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VNZWFzdXJlXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCB7IHVzZUdlc3R1cmUgfSBmcm9tIFwicmVhY3QtdXNlLWdlc3R1cmVcIjtcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCI7XG5pbXBvcnQgUHJvamVjdFJvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Um93XCI7XG5cbmZ1bmN0aW9uIFByb2plY3RSb3dDb250YWluZXIocHJvcHMpIHtcblx0Y29uc3QgW3NsaWRlclJlZiwgc2xpZGVyU2l6ZV0gPSB1c2VNZWFzdXJlKCk7XG5cdGNvbnN0IFtjb250ZW50UmVmLCBjb250ZW50U2l6ZV0gPSB1c2VNZWFzdXJlKCk7XG5cdGNvbnN0IFtjbGlja0VuYWJsZWQsIHRvZ2dsZUNsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRsZXQgc2xpZGVyQm91bmRhcmllcyA9IHsgbGVmdDogc2xpZGVyU2l6ZS53aWR0aCAtIGNvbnRlbnRTaXplLndpZHRoLCByaWdodDogMCB9O1xuXHRsZXQgc2xpZGVyRW5hYmxlZCA9IGNvbnRlbnRTaXplLndpZHRoID4gc2xpZGVyU2l6ZS53aWR0aCA/IHRydWUgOiBmYWxzZTtcblxuXHRjb25zdCBbeyB4IH0sIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcblx0XHR4OiAwLFxuXHRcdGNvbmZpZzogeyBtYXNzOiAyLCB0ZW5zaW9uOiAxMDAwLCBmcmljdGlvbjogMTAwIH0sXG5cdFx0b25SZXN0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRvZ2dsZUNsaWNrKHRydWUpO1xuXHRcdH1cblx0fSkpO1xuXHRjb25zdCBiaW5kID0gdXNlR2VzdHVyZSh7XG5cdFx0b25EcmFnOiAoeyBkb3duLCBkZWx0YSwgdmVsb2NpdHksIGRpc3RhbmNlLCBkaXJlY3Rpb24sIHRpbWUsIHRlbXAgPSBbeC5nZXRWYWx1ZSgpXSB9KSA9PiB7XG5cdFx0XHRjb25zdCB7IHJpZ2h0LCBsZWZ0IH0gPSBzbGlkZXJCb3VuZGFyaWVzO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZG93biwgZGVsdGEsIHZlbG9jaXR5LCBkaXN0YW5jZSwgZGlyZWN0aW9uLCB0aW1lKTtcblx0XHRcdHNldCh7XG5cdFx0XHRcdHg6IGRvd25cblx0XHRcdFx0XHQ/IGNsYW1wKFxuXHRcdFx0XHRcdFx0XHR0ZW1wWzBdICsgZGVsdGFbMF0sXG5cdFx0XHRcdFx0XHRcdGxlZnQgLSBzbGlkZXJTaXplLndpZHRoICogMC4xLFxuXHRcdFx0XHRcdFx0XHRyaWdodCArIHNsaWRlclNpemUud2lkdGggKiAwLjFcblx0XHRcdFx0XHQgIClcblx0XHRcdFx0XHQ6IGNsYW1wKHRlbXBbMF0gKyBkZWx0YVswXSAqICh2ZWxvY2l0eSA8IDEgPyAxIDogdmVsb2NpdHkgKiAyKSwgbGVmdCwgcmlnaHQpXG5cdFx0XHR9KTtcblx0XHRcdHRvZ2dsZUNsaWNrKCFkb3duKTtcblx0XHRcdHJldHVybiB0ZW1wO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgeyBjb250ZW50LCBpZCwgdG90YWwgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIiB7Li4uc2xpZGVyUmVmfT5cblx0XHRcdDxhbmltYXRlZC5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGVyX193cmFwcGVyXCJcblx0XHRcdFx0ey4uLmJpbmQoKX1cblx0XHRcdFx0ey4uLmNvbnRlbnRSZWZ9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzbGlkZXJFbmFibGVkXG5cdFx0XHRcdFx0XHQ/IGludGVycG9sYXRlKFt4XSwgeCA9PiBgdHJhbnNsYXRlM2QoJHt4fXB4LDAsMClgKVxuXHRcdFx0XHRcdFx0OiBcIm5vbmVcIlxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8UHJvamVjdFJvdyBjb250ZW50PXtjb250ZW50fSBpZD17aWR9IHRvdGFsPXt0b3RhbH0gY2xpY2tFbmFibGVkPXtjbGlja0VuYWJsZWR9IC8+XG5cdFx0XHQ8L2FuaW1hdGVkLmRpdj5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5zbGlkZXIge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHRcdFx0XHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpZGVyX193cmFwcGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWRlciB1bCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zbGlkZXIgbGkge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zbGlkZXIgbGkgZmlndXJlIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpZGVyIGxpIGZpZ3VyZTpudGgtY2hpbGQoMikge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpZGVyIGltZyxcblx0XHRcdFx0LnNsaWRlciB2aWRlbyB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0dXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwcmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0d2lkdGg6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5zbGlkZXIgbGkgZmlndXJlIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYygodmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAqIDEuNSkgMCAwO1xuXHRcdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdFx0LyogYmFja2dyb3VuZDogcmVkOyAqL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zbGlkZXIgdWwge1xuXHRcdFx0XHRcdFx0Y291bnRlci1yZXNldDogc2VjdGlvbjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc2xpZGVyIGxpIHtcblx0XHRcdFx0XHRcdGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zbGlkZXIgbGkgZmlndXJlIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoKHZhcigtLW1hcmdpbk91dGVyKSAvIDIgKyAxcmVtICsgMXJlbSkgKiAxLjUpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwLjVyZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5zbGlkZXIge1xuXHRcdFx0XHRcdCR7c2xpZGVyRW5hYmxlZCA/IFwiY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XCIgOiBcIlwifVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWRlcjphY3RpdmUge1xuXHRcdFx0XHRcdCR7c2xpZGVyRW5hYmxlZFxuXHRcdFx0XHRcdFx0PyBcImN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDsgY3Vyc29yOiAtbW96LWdyYWJiaW5nICFpbXBvcnRhbnQ7IGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZyAhaW1wb3J0YW50O1wiXG5cdFx0XHRcdFx0XHQ6IFwiXCJ9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJvd0NvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRowContainer.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3811681516",
    dynamic: [sliderEnabled ? "cursor: grab !important;" : "", sliderEnabled ? "cursor: grabbing !important; cursor: -moz-grabbing !important; cursor: -webkit-grabbing !important;" : ""],
    __self: this
  }, `.slider.__jsx-style-dynamic-selector{${sliderEnabled ? "cursor: grab !important;" : ""};}.slider.__jsx-style-dynamic-selector:active{${sliderEnabled ? "cursor: grabbing !important; cursor: -moz-grabbing !important; cursor: -webkit-grabbing !important;" : ""};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFJvd0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSWUsQUFJSSxBQUlBLDZCQUpDLEFBSUEiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9Qcm9qZWN0Um93Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZU1lYXN1cmUgZnJvbSBcIi4uL3V0aWxzL2hvb2tzL3VzZU1lYXN1cmVcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VXaW5kb3dTaXplXCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gXCJyZWFjdC11c2UtZ2VzdHVyZVwiO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIjtcbmltcG9ydCBQcm9qZWN0Um93IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RSb3dcIjtcblxuZnVuY3Rpb24gUHJvamVjdFJvd0NvbnRhaW5lcihwcm9wcykge1xuXHRjb25zdCBbc2xpZGVyUmVmLCBzbGlkZXJTaXplXSA9IHVzZU1lYXN1cmUoKTtcblx0Y29uc3QgW2NvbnRlbnRSZWYsIGNvbnRlbnRTaXplXSA9IHVzZU1lYXN1cmUoKTtcblx0Y29uc3QgW2NsaWNrRW5hYmxlZCwgdG9nZ2xlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGxldCBzbGlkZXJCb3VuZGFyaWVzID0geyBsZWZ0OiBzbGlkZXJTaXplLndpZHRoIC0gY29udGVudFNpemUud2lkdGgsIHJpZ2h0OiAwIH07XG5cdGxldCBzbGlkZXJFbmFibGVkID0gY29udGVudFNpemUud2lkdGggPiBzbGlkZXJTaXplLndpZHRoID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdGNvbnN0IFt7IHggfSwgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoe1xuXHRcdHg6IDAsXG5cdFx0Y29uZmlnOiB7IG1hc3M6IDIsIHRlbnNpb246IDEwMDAsIGZyaWN0aW9uOiAxMDAgfSxcblx0XHRvblJlc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0fVxuXHR9KSk7XG5cdGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKHtcblx0XHRvbkRyYWc6ICh7IGRvd24sIGRlbHRhLCB2ZWxvY2l0eSwgZGlzdGFuY2UsIGRpcmVjdGlvbiwgdGltZSwgdGVtcCA9IFt4LmdldFZhbHVlKCldIH0pID0+IHtcblx0XHRcdGNvbnN0IHsgcmlnaHQsIGxlZnQgfSA9IHNsaWRlckJvdW5kYXJpZXM7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkb3duLCBkZWx0YSwgdmVsb2NpdHksIGRpc3RhbmNlLCBkaXJlY3Rpb24sIHRpbWUpO1xuXHRcdFx0c2V0KHtcblx0XHRcdFx0eDogZG93blxuXHRcdFx0XHRcdD8gY2xhbXAoXG5cdFx0XHRcdFx0XHRcdHRlbXBbMF0gKyBkZWx0YVswXSxcblx0XHRcdFx0XHRcdFx0bGVmdCAtIHNsaWRlclNpemUud2lkdGggKiAwLjEsXG5cdFx0XHRcdFx0XHRcdHJpZ2h0ICsgc2xpZGVyU2l6ZS53aWR0aCAqIDAuMVxuXHRcdFx0XHRcdCAgKVxuXHRcdFx0XHRcdDogY2xhbXAodGVtcFswXSArIGRlbHRhWzBdICogKHZlbG9jaXR5IDwgMSA/IDEgOiB2ZWxvY2l0eSAqIDIpLCBsZWZ0LCByaWdodClcblx0XHRcdH0pO1xuXHRcdFx0dG9nZ2xlQ2xpY2soIWRvd24pO1xuXHRcdFx0cmV0dXJuIHRlbXA7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCB7IGNvbnRlbnQsIGlkLCB0b3RhbCB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIHsuLi5zbGlkZXJSZWZ9PlxuXHRcdFx0PGFuaW1hdGVkLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJzbGlkZXJfX3dyYXBwZXJcIlxuXHRcdFx0XHR7Li4uYmluZCgpfVxuXHRcdFx0XHR7Li4uY29udGVudFJlZn1cblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNsaWRlckVuYWJsZWRcblx0XHRcdFx0XHRcdD8gaW50ZXJwb2xhdGUoW3hdLCB4ID0+IGB0cmFuc2xhdGUzZCgke3h9cHgsMCwwKWApXG5cdFx0XHRcdFx0XHQ6IFwibm9uZVwiXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxQcm9qZWN0Um93IGNvbnRlbnQ9e2NvbnRlbnR9IGlkPXtpZH0gdG90YWw9e3RvdGFsfSBjbGlja0VuYWJsZWQ9e2NsaWNrRW5hYmxlZH0gLz5cblx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LnNsaWRlciB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdFx0XHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zbGlkZXJfX3dyYXBwZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpZGVyIHVsIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWRlciBsaSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnNsaWRlciBsaSBmaWd1cmUge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zbGlkZXIgbGkgZmlndXJlOm50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zbGlkZXIgaW1nLFxuXHRcdFx0XHQuc2xpZGVyIHZpZGVvIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHR1c2VyLWRyYWc6IG5vbmU7XG5cdFx0XHRcdFx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuXHRcdFx0XHRcdGhlaWdodDogMTByZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LnNsaWRlciBsaSBmaWd1cmUge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKCh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pICogMS41KSAwIDA7XG5cdFx0XHRcdFx0XHQge1xuXHRcdFx0XHRcdFx0XHQvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNsaWRlciB1bCB7XG5cdFx0XHRcdFx0XHRjb3VudGVyLXJlc2V0OiBzZWN0aW9uO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zbGlkZXIgbGkge1xuXHRcdFx0XHRcdFx0Y291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNsaWRlciBsaSBmaWd1cmUgZmlnY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygodmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAqIDEuNSk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAuNXJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LnNsaWRlciB7XG5cdFx0XHRcdFx0JHtzbGlkZXJFbmFibGVkID8gXCJjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcIiA6IFwiXCJ9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2xpZGVyOmFjdGl2ZSB7XG5cdFx0XHRcdFx0JHtzbGlkZXJFbmFibGVkXG5cdFx0XHRcdFx0XHQ/IFwiY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50OyBjdXJzb3I6IC1tb3otZ3JhYmJpbmcgIWltcG9ydGFudDsgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nICFpbXBvcnRhbnQ7XCJcblx0XHRcdFx0XHRcdDogXCJcIn1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Um93Q29udGFpbmVyO1xuIl19 */
/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRowContainer.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectRowContainer);

/***/ }),

/***/ "./components/ProjectRowItem.js":
/*!**************************************!*\
  !*** ./components/ProjectRowItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./components/Media.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectRowItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProjectRowItem(props) {
  const {
    media,
    rowIndex,
    total
  } = props;
  return __jsx("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, rowIndex, "/", total), __jsx(_Media__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: media && media.type,
    asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
    gif: media && media.type === "video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectRowItem);

/***/ }),

/***/ "./components/ProjectViewer.js":
/*!*************************************!*\
  !*** ./components/ProjectViewer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer */ "./components/viewer/index.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ProjectViewer(props) {
  const {
    content,
    clickEnabled
  } = props,
        [slideIndex, setSlide] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("slideIndex");

  let resolveSections = section => {
    // eslint-disable-next-line import/namespace
    const Section = _viewer__WEBPACK_IMPORTED_MODULE_5__[Object(_scripts_utils__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(section._type)];

    if (Section) {
      return Section;
    }

    console.error("Cant find section", section); // eslint-disable-line no-console

    return null;
  };

  console.log(slideIndex);
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, content.map((section, i) => {
    const ViewerSection = resolveSections(section);

    if (!ViewerSection) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Missing section ", section._type);
    }

    return __jsx("li", {
      key: section._key,
      className: slideIndex === i ? "visible" : "hidden",
      onMouseUp: () => {
        console.log(i);

        if (clickEnabled) {
          setSlide(slideIndex === content.length - 1 ? 0 : i + 1);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(ViewerSection, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectViewer);

/***/ }),

/***/ "./components/ProjectViewerContainer.js":
/*!**********************************************!*\
  !*** ./components/ProjectViewerContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-use-gesture */ "react-use-gesture");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks/useLockBodyScroll */ "./utils/hooks/useLockBodyScroll.js");
/* harmony import */ var _ProjectViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectViewer */ "./components/ProjectViewer.js");

var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










function ProjectViewerContainer(props) {
  const [clickEnabled, toggleClick] = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const windowSize = Object(_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [viewerOpen] = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("viewerOpen");
  const [viewerContent] = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])("viewerContent");
  if (!viewerContent) return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Loading");

  const resetViewerReducer = (global, dispatch, action) => ({
    viewerOpen: false,
    viewerID: null,
    slideIndex: 0
  });

  const resetViewer = Object(reactn__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(resetViewerReducer);
  const [{
    y
  }, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useSpring"])(() => ({
    y: 0,
    onFrame: function (params) {
      let {
        y
      } = params;

      if (Math.abs(y) <= 2) {
        toggleClick(true);
      }

      if (Math.abs(y) >= windowSize.height / 4) {
        resetViewer();
      }
    },
    onRest: function () {
      toggleClick(true);
    }
  }));
  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_8__["useGesture"])({
    onDrag: ({
      down,
      delta,
      velocity
    }) => {
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["clamp"])(velocity, 1, 8);
      toggleClick(!down);
      set({
        y: down ? delta[1] : 0,
        config: {
          mass: velocity,
          tension: 500 * velocity,
          friction: 50
        }
      });
    },
    onWheel: ({
      active,
      delta,
      velocity,
      temp = y.getValue()
    }) => {
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["clamp"])(velocity, 1, 8);
      toggleClick(!active);
      set({
        y: active ? temp + delta[1] * -1 : 0,
        config: {
          mass: velocity,
          tension: 500 * velocity,
          friction: 50
        }
      });
    }
  });
  Object(_utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer__overlay"
  }, bind(), {
    style: {
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("h2", {
    className: "project__viewer__caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Test")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].section, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer"
  }, bind(), {
    style: {
      transform: viewerOpen ? y.interpolate(y => `translate3d(0,${y}px,0)`) : "none",
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_ProjectViewer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    content: viewerContent,
    clickEnabled: clickEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2404343687",
    __self: this
  }, ".project__viewer{position:fixed;top:0;left:0;width:100%;height:calc(100 * var(--vH));z-index:9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.project__viewer:active{cursor:-webkit-grabbing !important;cursor:-moz-grabbing !important;cursor:grabbing !important;cursor:-webkit--moz-grabbing !important;cursor:-moz--moz-grabbing !important;cursor:-moz-grabbing !important;cursor:-webkit--webkit-grabbing !important;cursor:-moz--webkit-grabbing !important;cursor:-webkit-grabbing !important;}.project__viewer__overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:8;background:white;}.project__viewer__caption{position:fixed;left:0;bottom:0;width:100%;padding:var(--marginOuter);z-index:12;}.project__viewer ul{position:relative;width:100%;height:100%;}.project__viewer li{position:absolute;top:0;left:0;width:100%;height:100%;}.project__viewer li.hidden{visibility:hidden;z-index:-1;}.project__viewer figure{width:100%;height:100%;position:relative;}.project__viewer figure:not(.pair) img,.project__viewer figure:not(.pair) .player__wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;}[data-orientation=\"portrait\"] video{width:auto;height:100%;}[data-orientation=\"landscape\"] video{width:100%;height:auto;}.project__viewer img,.project__viewer video{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;}.project__viewer figure.contain{max-width:100vmin;margin:0 auto;}.project__viewer figure.contain [data-orientation=\"landscape\"]{width:100%;height:auto;padding:var(--headerH) 0;}.project__viewer figure.contain [data-orientation=\"portrait\"]{width:auto;height:100%;padding:var(--headerH) 3rem;}.project__viewer figure.cover [data-orientation=\"landscape\"]{width:auto;height:100%;}.project__viewer figure.cover [data-orientation=\"portrait\"]{width:100%;height:auto;}.project__viewer figure.cover [data-orientation=\"portrait\"],.project__viewer figure.cover [data-orientation=\"landscape\"],.project__viewer figure.cover img,.project__viewer figure.cover video{width:100%;height:100%;}figure.pair{max-width:calc(100vmin - 3rem + var(--marginOuter) / 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--headerH) - var(--marginOuter) / 2) calc(var(--marginOuter) / 2);margin:0 auto;}figure.pair img,figure.pair video{width:50%;height:100%;object-fit:contain;padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){.project__viewer__caption{text-align:center;}}@media screen and (min-width:640px){.project__viewer figure.contain [data-orientation=\"landscape\"]{padding:var(--headerH) 3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFZpZXdlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRnVCLEFBR3NCLEFBVVksQUFLWixBQVVBLEFBUUcsQUFNQSxBQVFBLEFBS1AsQUFPTyxBQVFQLEFBS0EsQUFNVyxBQVVKLEFBS1AsQUFNQSxBQU1BLEFBS0EsQUFRQSxBQUs2QyxBQVU5QyxBQVFTLEFBTVUsVUFiakIsQ0FqRkEsQUFlQSxBQUtBLEFBcUJBLEFBTUEsQUFNQSxBQUtBLEFBUUEsSUF0SE4sQUFlQSxBQVVDLEdBUUksQUFNTCxBQVFLLEFBWUgsQUE2Qk0sQUFxRGQsR0E1SU8sQUFlQSxDQVVFLEFBb0RnQixBQXdETixDQWpGRCxBQWVuQixBQUtBLEFBcUIwQixBQU1HLEFBTTdCLEFBS0EsQUFRQSxDQS9FUSxFQW9CRSxFQTFERSxBQWVGLEFBa0lULENBakhZLEFBY2IsRUFyQlksQUFjQSxDQWdEWixHQTVCaUMsRUEzQ3hCLEVBZnFCLEVBZ0M5QixBQW1CQSxBQWlGc0MsQ0EzR1YsQUFjZixHQXZCRixFQTREVyxDQWdCdEIsR0FNQSxHQTFEQSxDQXZCa0IsQ0F1R0osWUF2SEgsQUE0RU8sQ0FuRE4sR0FSWixNQWhCa0IsQUFtSWxCLEVBMUdBLGNBcEJpQyxvQ0FrSGYsVUE5REYsYUFtQlEsRUFsQnhCLFFBekRhLGFBNEVHLGlCQTJDUSxVQWxIWSxTQUpwQyx5Q0E0RTRCLDJCQUM1QixZQTJDOEIsNkJBbkg5QixzREFvSGUsY0FDZiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL1Byb2plY3RWaWV3ZXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VEaXNwYXRjaCwgdXNlR2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSBcImFzc2VydFwiO1xuXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gXCJyZWFjdC11c2UtZ2VzdHVyZVwiO1xuaW1wb3J0IHsgY2xhbXAsIGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHVzZUxvY2tCb2R5U2Nyb2xsIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VMb2NrQm9keVNjcm9sbFwiO1xuXG5pbXBvcnQgUHJvamVjdFZpZXdlciBmcm9tIFwiLi9Qcm9qZWN0Vmlld2VyXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RWaWV3ZXJDb250YWluZXIocHJvcHMpIHtcblx0Y29uc3QgW2NsaWNrRW5hYmxlZCwgdG9nZ2xlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXHRjb25zdCBbdmlld2VyT3Blbl0gPSB1c2VHbG9iYWwoXCJ2aWV3ZXJPcGVuXCIpO1xuXHRjb25zdCBbdmlld2VyQ29udGVudF0gPSB1c2VHbG9iYWwoXCJ2aWV3ZXJDb250ZW50XCIpO1xuXG5cdGlmICghdmlld2VyQ29udGVudCkgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT47XG5cblx0Y29uc3QgcmVzZXRWaWV3ZXJSZWR1Y2VyID0gKGdsb2JhbCwgZGlzcGF0Y2gsIGFjdGlvbikgPT4gKHtcblx0XHR2aWV3ZXJPcGVuOiBmYWxzZSxcblx0XHR2aWV3ZXJJRDogbnVsbCxcblx0XHRzbGlkZUluZGV4OiAwXG5cdH0pO1xuXHRjb25zdCByZXNldFZpZXdlciA9IHVzZURpc3BhdGNoKHJlc2V0Vmlld2VyUmVkdWNlcik7XG5cblx0Y29uc3QgW3sgeSB9LCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7XG5cdFx0eTogMCxcblx0XHRvbkZyYW1lOiBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdGxldCB7IHkgfSA9IHBhcmFtcztcblxuXHRcdFx0aWYgKE1hdGguYWJzKHkpIDw9IDIpIHtcblx0XHRcdFx0dG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTWF0aC5hYnMoeSkgPj0gd2luZG93U2l6ZS5oZWlnaHQgLyA0KSB7XG5cdFx0XHRcdHJlc2V0Vmlld2VyKCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvblJlc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dG9nZ2xlQ2xpY2sodHJ1ZSk7XG5cdFx0fVxuXHR9KSk7XG5cblx0Y29uc3QgYmluZCA9IHVzZUdlc3R1cmUoe1xuXHRcdG9uRHJhZzogKHsgZG93biwgZGVsdGEsIHZlbG9jaXR5IH0pID0+IHtcblx0XHRcdHZlbG9jaXR5ID0gY2xhbXAodmVsb2NpdHksIDEsIDgpO1xuXHRcdFx0dG9nZ2xlQ2xpY2soIWRvd24pO1xuXHRcdFx0c2V0KHtcblx0XHRcdFx0eTogZG93biA/IGRlbHRhWzFdIDogMCxcblx0XHRcdFx0Y29uZmlnOiB7IG1hc3M6IHZlbG9jaXR5LCB0ZW5zaW9uOiA1MDAgKiB2ZWxvY2l0eSwgZnJpY3Rpb246IDUwIH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0b25XaGVlbDogKHsgYWN0aXZlLCBkZWx0YSwgdmVsb2NpdHksIHRlbXAgPSB5LmdldFZhbHVlKCkgfSkgPT4ge1xuXHRcdFx0dmVsb2NpdHkgPSBjbGFtcCh2ZWxvY2l0eSwgMSwgOCk7XG5cdFx0XHR0b2dnbGVDbGljayghYWN0aXZlKTtcblx0XHRcdHNldCh7XG5cdFx0XHRcdHk6IGFjdGl2ZSA/IHRlbXAgKyBkZWx0YVsxXSAqIC0xIDogMCxcblx0XHRcdFx0Y29uZmlnOiB7IG1hc3M6IHZlbG9jaXR5LCB0ZW5zaW9uOiA1MDAgKiB2ZWxvY2l0eSwgZnJpY3Rpb246IDUwIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0dXNlTG9ja0JvZHlTY3JvbGwoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YW5pbWF0ZWQuZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXdlcl9fb3ZlcmxheVwiXG5cdFx0XHRcdHsuLi5iaW5kKCl9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0b3BhY2l0eTogeS5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFstd2luZG93U2l6ZS5oZWlnaHQgLyA0LCAwLCB3aW5kb3dTaXplLmhlaWdodCAvIDRdLFxuXHRcdFx0XHRcdFx0WzAuMiwgMSwgMC4yXVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXdlcl9fY2FwdGlvblwiPlRlc3Q8L2gyPlxuXHRcdFx0PC9hbmltYXRlZC5kaXY+XG5cdFx0XHQ8YW5pbWF0ZWQuc2VjdGlvblxuXHRcdFx0XHRjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3ZXJcIlxuXHRcdFx0XHR7Li4uYmluZCgpfVxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdmlld2VyT3BlbiA/IHkuaW50ZXJwb2xhdGUoeSA9PiBgdHJhbnNsYXRlM2QoMCwke3l9cHgsMClgKSA6IFwibm9uZVwiLFxuXHRcdFx0XHRcdG9wYWNpdHk6IHkuaW50ZXJwb2xhdGUoXG5cdFx0XHRcdFx0XHRbLXdpbmRvd1NpemUuaGVpZ2h0IC8gNCwgMCwgd2luZG93U2l6ZS5oZWlnaHQgLyA0XSxcblx0XHRcdFx0XHRcdFswLjIsIDEsIDAuMl1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxQcm9qZWN0Vmlld2VyIGNvbnRlbnQ9e3ZpZXdlckNvbnRlbnR9IGNsaWNrRW5hYmxlZD17Y2xpY2tFbmFibGVkfSAvPlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCAqIHZhcigtLXZIKSk7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5O1xuXHRcdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IGdyYWI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXI6YWN0aXZlIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGN1cnNvcjogLW1vei1ncmFiYmluZyAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXJfX292ZXJsYXkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogODtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXJfX2NhcHRpb24ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgdWwge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBsaSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBsaS5oaWRkZW4ge1xuXHRcdFx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmU6bm90KC5wYWlyKSBpbWcsXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmU6bm90KC5wYWlyKSAucGxheWVyX193cmFwcGVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0W2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGltZyxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIHZpZGVvIHtcblx0XHRcdFx0XHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdFx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcblx0XHRcdFx0XHRcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb250YWluIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwdm1pbjtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4gW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1oZWFkZXJIKSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4gW2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWhlYWRlckgpIDNyZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBbZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCJdLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIGltZyxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciB2aWRlbyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmaWd1cmUucGFpciB7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwdm1pbiAtIDNyZW0gKyB2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1oZWFkZXJIKSAtIHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlndXJlLnBhaXIgaW1nLFxuXHRcdFx0XHRcdGZpZ3VyZS5wYWlyIHZpZGVvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlcl9fY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY29udGFpbiBbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWhlYWRlckgpIDNyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2FuaW1hdGVkLnNlY3Rpb24+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RWaWV3ZXJDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectViewerContainer);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectFeedContainer */ "./components/ProjectFeedContainer.js");
/* harmony import */ var _components_ProjectViewerContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectViewerContainer */ "./components/ProjectViewerContainer.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Projects(props) {
  const [viewerOpen] = Object(reactn__WEBPACK_IMPORTED_MODULE_1__["useGlobal"])("viewerOpen");
  console.log(viewerOpen);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "stilllife",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "commercial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_ProjectFeedContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "film",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), viewerOpen && __jsx(_components_ProjectViewerContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Video.js":
/*!*****************************!*\
  !*** ./components/Video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_ui_play_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/ui/play.svg */ "./static/ui/play.svg");
/* harmony import */ var _static_ui_play_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_ui_play_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_ui_pause_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/ui/pause.svg */ "./static/ui/pause.svg");
/* harmony import */ var _static_ui_pause_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_ui_pause_svg__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Video.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


 // Using extension .svgz to avoid svgr loader in webpack




class Video extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      video: "",
      playing: !this.props.controls,
      controls: this.props.controls
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handlePlayPause", () => {
      this.setState({
        playing: !this.state.playing
      });
    });
  }

  //videoRef = React.createRef();
  componentDidMount() {
    _client__WEBPACK_IMPORTED_MODULE_4___default.a.fetch(`*[_id == "${this.props.asset._ref}"][0]`).then(video => this.setState({
      video
    }));
  }

  render() {
    const {
      video,
      playing,
      controls
    } = this.state;
    if (!video) return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Loading...");
    const {
      playbackId,
      data
    } = video;

    const width = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.aspect_ratio.split(":")[0]),
          height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.aspect_ratio.split(":")[1]),
          aspectRatio = width / height;

    if (this.props.gif) {
      return __jsx("img", {
        className: "lazyload",
        src: `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'  width%3D'${width}' height%3D'${height}' viewBox%3D'0 0 ${width} ${height}'%2F%3E"`,
        "data-src": `https://image.mux.com/${playbackId}/animated.gif?end=2.5`,
        sizes: "auto",
        "data-orientation": aspectRatio < 1 ? "portrait" : "landscape",
        style: {
          "--imgRatio": aspectRatio
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onClick: this.handlePlayPause,
      "data-playing": playing,
      "data-orientation": aspectRatio < 1 ? "portrait" : "landscape",
      width: "",
      height: "",
      playsinline: !controls,
      playing: playing,
      loop: true,
      muted: controls,
      className: "player__wrapper",
      config: {
        file: {
          forceHLS: true,
          attributes: {
            style: {}
          }
        }
      },
      style: {
        "--ratio": aspectRatio
      },
      url: `https://stream.mux.com/${playbackId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), controls && __jsx("button", {
      onClick: this.handlePlayPause,
      className: "jsx-1653068194" + " " + "btn__toggle--play",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(react_inlinesvg__WEBPACK_IMPORTED_MODULE_6___default.a, {
      src: playing ? _static_ui_pause_svg__WEBPACK_IMPORTED_MODULE_8___default.a : _static_ui_play_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1653068194",
      __self: this
    }, ".btn__toggle--play{position:absolute;top:calc(50% - 1.5rem);left:50%;width:auto;height:3rem;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:-webkit-transform 0.1s,opacity 0.6s;-webkit-transition:transform 0.1s,opacity 0.6s;transition:transform 0.1s,opacity 0.6s;z-index:88;opacity:0.8;}[data-playing=\"true\"]:not(:hover)+.btn__toggle--play:not(:hover){opacity:0;}.btn__toggle--play:hover{-webkit-transform:scale(1.1) translateX(-50%);-ms-transform:scale(1.1) translateX(-50%);transform:scale(1.1) translateX(-50%);opacity:1;}.btn__toggle--play>svg{width:auto;height:100%;display:block;}svg:not(:root ){width:auto;height:100%;}@media screen and (max-width:639px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkV1QixBQUd5QixBQVlSLEFBSTRCLEFBSzNCLEFBTUEsVUFkWixDQVNhLEFBTUEsT0EzQlcsS0FzQlQsQUFNZixjQUxBLElBdEJVLFNBQ0UsV0FDQyxZQUNlLHFEQVlqQixVQUNYLDhCQVp5Qyw2SUFDN0IsV0FDQyxZQUNiIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvVmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XG5pbXBvcnQgU1ZHIGZyb20gXCJyZWFjdC1pbmxpbmVzdmdcIjtcblxuLy8gVXNpbmcgZXh0ZW5zaW9uIC5zdmd6IHRvIGF2b2lkIHN2Z3IgbG9hZGVyIGluIHdlYnBhY2tcbmltcG9ydCBpY29uUGxheSBmcm9tIFwiLi4vc3RhdGljL3VpL3BsYXkuc3ZnXCI7XG5pbXBvcnQgaWNvblBhdXNlIGZyb20gXCIuLi9zdGF0aWMvdWkvcGF1c2Uuc3ZnXCI7XG5cbmNsYXNzIFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmlkZW86IFwiXCIsXG5cdFx0cGxheWluZzogIXRoaXMucHJvcHMuY29udHJvbHMsXG5cdFx0Y29udHJvbHM6IHRoaXMucHJvcHMuY29udHJvbHNcblx0fTtcblxuXHQvL3ZpZGVvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y2xpZW50XG5cdFx0XHQuZmV0Y2goYCpbX2lkID09IFwiJHt0aGlzLnByb3BzLmFzc2V0Ll9yZWZ9XCJdWzBdYClcblx0XHRcdC50aGVuKHZpZGVvID0+IHRoaXMuc2V0U3RhdGUoeyB2aWRlbyB9KSk7XG5cdH1cblxuXHRoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHBsYXlpbmc6ICF0aGlzLnN0YXRlLnBsYXlpbmcgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdmlkZW8sIHBsYXlpbmcsIGNvbnRyb2xzIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmICghdmlkZW8pIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cblx0XHRjb25zdCB7IHBsYXliYWNrSWQsIGRhdGEgfSA9IHZpZGVvO1xuXHRcdGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoZGF0YS5hc3BlY3RfcmF0aW8uc3BsaXQoXCI6XCIpWzBdKSxcblx0XHRcdGhlaWdodCA9IHBhcnNlSW50KGRhdGEuYXNwZWN0X3JhdGlvLnNwbGl0KFwiOlwiKVsxXSksXG5cdFx0XHRhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuZ2lmKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGF6eWxvYWRcIlxuXHRcdFx0XHRcdHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnICB3aWR0aCUzRCcke3dpZHRofScgaGVpZ2h0JTNEJyR7aGVpZ2h0fScgdmlld0JveCUzRCcwIDAgJHt3aWR0aH0gJHtoZWlnaHR9JyUyRiUzRVwiYH1cblx0XHRcdFx0XHRkYXRhLXNyYz17YGh0dHBzOi8vaW1hZ2UubXV4LmNvbS8ke3BsYXliYWNrSWR9L2FuaW1hdGVkLmdpZj9lbmQ9Mi41YH1cblx0XHRcdFx0XHRzaXplcz1cImF1dG9cIlxuXHRcdFx0XHRcdGRhdGEtb3JpZW50YXRpb249e2FzcGVjdFJhdGlvIDwgMSA/IFwicG9ydHJhaXRcIiA6IFwibGFuZHNjYXBlXCJ9XG5cdFx0XHRcdFx0c3R5bGU9e3sgXCItLWltZ1JhdGlvXCI6IGFzcGVjdFJhdGlvIH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PFJlYWN0UGxheWVyXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVQbGF5UGF1c2V9XG5cdFx0XHRcdFx0ZGF0YS1wbGF5aW5nPXtwbGF5aW5nfVxuXHRcdFx0XHRcdGRhdGEtb3JpZW50YXRpb249e2FzcGVjdFJhdGlvIDwgMSA/IFwicG9ydHJhaXRcIiA6IFwibGFuZHNjYXBlXCJ9XG5cdFx0XHRcdFx0d2lkdGg9XCJcIlxuXHRcdFx0XHRcdGhlaWdodD1cIlwiXG5cdFx0XHRcdFx0cGxheXNpbmxpbmU9eyFjb250cm9sc31cblx0XHRcdFx0XHRwbGF5aW5nPXtwbGF5aW5nfVxuXHRcdFx0XHRcdGxvb3Bcblx0XHRcdFx0XHRtdXRlZD17Y29udHJvbHN9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGxheWVyX193cmFwcGVyXCJcblx0XHRcdFx0XHRjb25maWc9e3tcblx0XHRcdFx0XHRcdGZpbGU6IHtcblx0XHRcdFx0XHRcdFx0Zm9yY2VITFM6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRzdHlsZToge31cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0c3R5bGU9e3sgXCItLXJhdGlvXCI6IGFzcGVjdFJhdGlvIH19XG5cdFx0XHRcdFx0dXJsPXtgaHR0cHM6Ly9zdHJlYW0ubXV4LmNvbS8ke3BsYXliYWNrSWR9YH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e2NvbnRyb2xzICYmIChcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bl9fdG9nZ2xlLS1wbGF5XCIgb25DbGljaz17dGhpcy5oYW5kbGVQbGF5UGF1c2V9PlxuXHRcdFx0XHRcdFx0PFNWRyBzcmM9e3BsYXlpbmcgPyBpY29uUGF1c2UgOiBpY29uUGxheX0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0XHQuYnRuX190b2dnbGUtLXBsYXkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiBjYWxjKDUwJSAtIDEuNXJlbSk7XG5cdFx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogM3JlbTtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBvcGFjaXR5IDAuNnM7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA4ODtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuODtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRbZGF0YS1wbGF5aW5nPVwidHJ1ZVwiXTpub3QoOmhvdmVyKSArIC5idG5fX3RvZ2dsZS0tcGxheTpub3QoOmhvdmVyKSB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5idG5fX3RvZ2dsZS0tcGxheTpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJ0bl9fdG9nZ2xlLS1wbGF5ID4gc3ZnIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3ZnOm5vdCAoOnJvb3QgKSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/Video.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./components/sections/Intro100.js":
/*!*****************************************!*\
  !*** ./components/sections/Intro100.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Intro100(props) {
  const {
    media = "",
    reference = ""
  } = props;
  const asset = media.condition ? media.video.mux.asset : media.image.asset,
        type = media.condition ? "video" : "image",
        [headerSize, setHeaderHeight] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize");
  let offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-4008603855" + " " + "intro__section intro__section--100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference && reference._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-4008603855",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, reference && reference.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4008603855",
    __self: this
  }, ".intro__section.intro__section--100 figcaption{color:white;mix-blend-mode:difference;padding:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJzQixBQUdrQixZQUNjLDBCQUNYLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm8xMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwicmVhY3RuXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm8xMDAocHJvcHMpIHtcblx0Y29uc3QgeyBtZWRpYSA9IFwiXCIsIHJlZmVyZW5jZSA9IFwiXCIgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGFzc2V0ID0gbWVkaWEuY29uZGl0aW9uID8gbWVkaWEudmlkZW8ubXV4LmFzc2V0IDogbWVkaWEuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZSA9IG1lZGlhLmNvbmRpdGlvbiA/IFwidmlkZW9cIiA6IFwiaW1hZ2VcIixcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS0xMDBcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXR9IHR5cGU9e3R5cGV9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tMTAwIGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjVyZW07XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvMTAwO1xuIl19 */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro100.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro100);

/***/ }),

/***/ "./components/sections/Intro50.js":
/*!****************************************!*\
  !*** ./components/sections/Intro50.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Intro50(props) {
  const {
    media = "",
    reference = "",
    layout = "",
    text
  } = props;
  const asset = media.condition ? media.video.mux.asset : media.image.asset,
        type = media.condition ? "video" : "image",
        [headerSize, setHeaderHeight] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize");
  let offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]) + " " + "intro__section intro__section--50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("figcaption", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3246843332", [text ? '"' + text + '"' : "none"]], ["3354514693", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3246843332",
    dynamic: [text ? '"' + text + '"' : "none"],
    __self: this
  }, `.intro__section--50{background:white;}.intro__section--50::after{content:${text ? '"' + text + '"' : "none"};position:absolute;top:50%;left:50%;width:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:calc(48px + (180 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (155 - 52) * (100vw - 360px) / (1920 - 360));padding:var(--marginOuter);text-align:center;mix-blend-mode:difference;color:white;z-index:7;}@media screen and (max-width:639px){.intro__section--50{padding:var(--marginMedium);min-height:calc(100 * var(--vH));display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@media screen and (min-width:640px){.intro__section.intro__section--50{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--50 figure{width:50%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);}.intro__section--50::after{padding:var(--marginMedium);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3NCLEFBR3VCLEFBSW9CLEFBaUJSLEFBU2YsQUFNSCxBQUtrQixVQUhDLE9BckMvQixXQXFCbUMsQUFvQmxDLFNBckNrQixrQkFDVixNQWlCTSxFQWhCTCxTQUNFLEVBdUJLLFNBdEJnQixXQThCaEMscUNBUHdDLElBUmhCLG1DQVN4QixrQkF2Qm1FLDhDQWUvQyxxQkFkaUQscUVBQzFDLEdBYzNCLHdCQWJrQixrQkFDUSwwQkFDZCxZQUNGLFVBQ1giLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRybzUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvNTAocHJvcHMpIHtcblx0Y29uc3QgeyBtZWRpYSA9IFwiXCIsIHJlZmVyZW5jZSA9IFwiXCIsIGxheW91dCA9IFwiXCIsIHRleHQgfSA9IHByb3BzO1xuXHRjb25zdCBhc3NldCA9IG1lZGlhLmNvbmRpdGlvbiA/IG1lZGlhLnZpZGVvLm11eC5hc3NldCA6IG1lZGlhLmltYWdlLmFzc2V0LFxuXHRcdHR5cGUgPSBtZWRpYS5jb25kaXRpb24gPyBcInZpZGVvXCIgOiBcImltYWdlXCIsXG5cdFx0W2hlYWRlclNpemUsIHNldEhlYWRlckhlaWdodF0gPSB1c2VHbG9iYWwoXCJoZWFkZXJTaXplXCIpO1xuXG5cdGxldCBvZmZzZXRIZWFkZXIgPSBoZWFkZXJTaXplICYmIGhlYWRlclNpemUuaGVpZ2h0ICogLTE7XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyb19fc2VjdGlvbiBpbnRyb19fc2VjdGlvbi0tNTBcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UuX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXR9IHR5cGU9e3R5cGV9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlICYmIHJlZmVyZW5jZS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tNTA6OmFmdGVyIHtcblx0XHRcdFx0XHRjb250ZW50OiAke3RleHQgPyAnXCInICsgdGV4dCArICdcIicgOiBcIm5vbmVcIn07XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRcdFx0XHRmb250LXNpemU6IGNhbGMoNDhweCArICgxODAgLSA0OCkgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBjYWxjKDUycHggKyAoMTU1IC0gNTIpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR6LWluZGV4OiA3O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk1lZGl1bSk7XG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMCAqIHZhcigtLXZIKSk7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tNTAge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTUwIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIgKyAxcmVtICsgMXJlbSkgMFxuXHRcdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwOjphZnRlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tNTAge1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiAke2xheW91dCA9PT0gXCJsZWZ0XCIgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybzUwO1xuIl19 */
/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3354514693",
    dynamic: [layout === "left" ? "flex-start" : "flex-end"],
    __self: this
  }, `@media screen and (min-width:640px){.intro__section--50.__jsx-style-dynamic-selector{-webkit-box-pack:${layout === "left" ? "flex-start" : "flex-end"};-webkit-justify-content:${layout === "left" ? "flex-start" : "flex-end"};-ms-flex-pack:${layout === "left" ? "flex-start" : "flex-end"};justify-content:${layout === "left" ? "flex-start" : "flex-end"};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmUsQUFJb0QsMkxBQzlDIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm81MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzUwKHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiLCB0ZXh0IH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTUwXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwOjphZnRlciB7XG5cdFx0XHRcdFx0Y29udGVudDogJHt0ZXh0ID8gJ1wiJyArIHRleHQgKyAnXCInIDogXCJub25lXCJ9O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiBjYWxjKDQ4cHggKyAoMTgwIC0gNDgpICogKDEwMHZ3IC0gMzYwcHgpIC8gKDE5MjAgLSAzNjApKTtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogY2FsYyg1MnB4ICsgKDE1NSAtIDUyKSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luT3V0ZXIpO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ei1pbmRleDogNztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogY2FsYygxMDAgKiB2YXIoLS12SCkpO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS01MCBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS01MDo6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0tbWFyZ2luTWVkaXVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTUwIHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm81MDtcbiJdfQ== */
/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro50.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro50);

/***/ }),

/***/ "./components/sections/Intro75.js":
/*!****************************************!*\
  !*** ./components/sections/Intro75.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Intro75(props) {
  const {
    media = "",
    reference = "",
    layout = ""
  } = props;
  const asset = media.condition ? media.video.mux.asset : media.image.asset,
        type = media.condition ? "video" : "image",
        [headerSize, setHeaderHeight] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize");
  let offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]) + " " + "intro__section intro__section--75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-3422645003 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3167211398", [layout === "left" ? "flex-start" : "flex-end"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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
  }, reference && reference.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3422645003",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--75{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--75 figure{width:75%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3NCLEFBSW9CLEFBS0gsVUFFbUIsZ0VBTlUsb0JBT3hDLG1CQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzc1KHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiIH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTc1XCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc1JTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEludHJvNzU7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3167211398",
    dynamic: [layout === "left" ? "flex-start" : "flex-end"],
    __self: this
  }, `@media screen and (min-width:640px){.intro__section--75.__jsx-style-dynamic-selector{-webkit-box-pack:${layout === "left" ? "flex-start" : "flex-end"};-webkit-justify-content:${layout === "left" ? "flex-start" : "flex-end"};-ms-flex-pack:${layout === "left" ? "flex-start" : "flex-end"};justify-content:${layout === "left" ? "flex-start" : "flex-end"};}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGUsQUFJb0QsMkxBQzlDIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm83NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5mdW5jdGlvbiBJbnRybzc1KHByb3BzKSB7XG5cdGNvbnN0IHsgbWVkaWEgPSBcIlwiLCByZWZlcmVuY2UgPSBcIlwiLCBsYXlvdXQgPSBcIlwiIH0gPSBwcm9wcztcblx0Y29uc3QgYXNzZXQgPSBtZWRpYS5jb25kaXRpb24gPyBtZWRpYS52aWRlby5tdXguYXNzZXQgOiBtZWRpYS5pbWFnZS5hc3NldCxcblx0XHR0eXBlID0gbWVkaWEuY29uZGl0aW9uID8gXCJ2aWRlb1wiIDogXCJpbWFnZVwiLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLTc1XCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0fSB0eXBlPXt0eXBlfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlICYmIHJlZmVyZW5jZS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZSAmJiByZWZlcmVuY2UudGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS03NSBmaWd1cmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDc1JTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyICsgMXJlbSArIDFyZW0pIDBcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLTc1IHtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogJHtsYXlvdXQgPT09IFwibGVmdFwiID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEludHJvNzU7XG4iXX0= */
/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/Intro75.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Intro75);

/***/ }),

/***/ "./components/sections/IntroPair.js":
/*!******************************************!*\
  !*** ./components/sections/IntroPair.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function IntroPair(props) {
  const {
    layout,
    reference,
    media_left,
    media_right
  } = props,
        prio = layout === "Large & Small" ? 2 : 1,
        asset_left = media_left.type === "video" ? media_left.video.mux.asset : media_left.image.asset,
        type_left = media_left.type,
        asset_right = media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
        type_right = media_right.type,
        [headerSize, setHeaderHeight] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize");
  let offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]) + " " + "intro__section intro__section--pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset_left,
    type: type_left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference[0] && reference[0]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, reference[0] && reference[0].title))), __jsx("figure", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_3__["default"], {
    asset: asset_right,
    type: type_right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("figcaption", {
    className: "jsx-2124198383 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3903898118", [prio, prio]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: reference[1] && reference[1]._id,
    spy: true,
    smooth: true,
    duration: 500,
    offset: offsetHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, reference[1] && reference[1].title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2124198383",
    __self: this
  }, "@media screen and (min-width:640px){.intro__section.intro__section--pair{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 calc(var(--marginOuter) / 2);}.intro__section.intro__section--pair figure{width:50%;padding:0 calc(var(--marginOuter) / 2 + 1rem + 1rem) 0 calc(var(--marginOuter) / 2);-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFc0IsQUFJb0IsQUFPSCxVQUVtQixnRUFSQyxvQkFTUiw4RUFDdkIsaUJBVGtCLCtEQUNzQix1Q0FDeEMiLCJmaWxlIjoiL1VzZXJzL3BoaWxpcHBwb2xkZXIvRHJvcGJveC9Qcm9qZWt0ZS9LYXRlIEphY2tsaW5nL0xvY2FsIFJvb3Qva2F0ZS1qYWNrbGluZy93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9JbnRyb1BhaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwicmVhY3RuXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gSW50cm9QYWlyKHByb3BzKSB7XG5cdGNvbnN0IHsgbGF5b3V0LCByZWZlcmVuY2UsIG1lZGlhX2xlZnQsIG1lZGlhX3JpZ2h0IH0gPSBwcm9wcyxcblx0XHRwcmlvID0gbGF5b3V0ID09PSBcIkxhcmdlICYgU21hbGxcIiA/IDIgOiAxLFxuXHRcdGFzc2V0X2xlZnQgPVxuXHRcdFx0bWVkaWFfbGVmdC50eXBlID09PSBcInZpZGVvXCIgPyBtZWRpYV9sZWZ0LnZpZGVvLm11eC5hc3NldCA6IG1lZGlhX2xlZnQuaW1hZ2UuYXNzZXQsXG5cdFx0dHlwZV9sZWZ0ID0gbWVkaWFfbGVmdC50eXBlLFxuXHRcdGFzc2V0X3JpZ2h0ID1cblx0XHRcdG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIiA/IG1lZGlhX3JpZ2h0LnZpZGVvLm11eC5hc3NldCA6IG1lZGlhX3JpZ2h0LmltYWdlLmFzc2V0LFxuXHRcdHR5cGVfcmlnaHQgPSBtZWRpYV9yaWdodC50eXBlLFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXBhaXJcIj5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXRfbGVmdH0gdHlwZT17dHlwZV9sZWZ0fSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHR0bz17cmVmZXJlbmNlWzBdICYmIHJlZmVyZW5jZVswXS5faWR9XG5cdFx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0udGl0bGV9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblxuXHRcdFx0PGZpZ3VyZT5cblx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHR0bz17cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS5faWR9XG5cdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRkdXJhdGlvbj17NTAwfVxuXHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lZGlhIGFzc2V0PXthc3NldF9yaWdodH0gdHlwZT17dHlwZV9yaWdodH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2VbMV0gJiYgcmVmZXJlbmNlWzFdLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMiArIDFyZW0gKyAxcmVtKSAwXG5cdFx0XHRcdFx0XHRcdGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLW1hcmdpbk91dGVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciBmaWd1cmU6bnRoLWNoaWxkKCR7cHJpb30pIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1BhaXI7XG4iXX0= */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3903898118",
    dynamic: [prio, prio],
    __self: this
  }, `@media screen and (max-width:639px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(${prio}){padding:var(--marginOuter);}}@media screen and (min-width:640px){.intro__section.intro__section--pair.__jsx-style-dynamic-selector figure.__jsx-style-dynamic-selector:nth-child(${prio}){width:25%;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GZSxBQUlrQyxBQU1qQixVQUNYLGlCQU5BIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9QYWlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmZ1bmN0aW9uIEludHJvUGFpcihwcm9wcykge1xuXHRjb25zdCB7IGxheW91dCwgcmVmZXJlbmNlLCBtZWRpYV9sZWZ0LCBtZWRpYV9yaWdodCB9ID0gcHJvcHMsXG5cdFx0cHJpbyA9IGxheW91dCA9PT0gXCJMYXJnZSAmIFNtYWxsXCIgPyAyIDogMSxcblx0XHRhc3NldF9sZWZ0ID1cblx0XHRcdG1lZGlhX2xlZnQudHlwZSA9PT0gXCJ2aWRlb1wiID8gbWVkaWFfbGVmdC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9sZWZ0LmltYWdlLmFzc2V0LFxuXHRcdHR5cGVfbGVmdCA9IG1lZGlhX2xlZnQudHlwZSxcblx0XHRhc3NldF9yaWdodCA9XG5cdFx0XHRtZWRpYV9yaWdodC50eXBlID09PSBcInZpZGVvXCIgPyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXQgOiBtZWRpYV9yaWdodC5pbWFnZS5hc3NldCxcblx0XHR0eXBlX3JpZ2h0ID0gbWVkaWFfcmlnaHQudHlwZSxcblx0XHRbaGVhZGVyU2l6ZSwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZUdsb2JhbChcImhlYWRlclNpemVcIik7XG5cblx0bGV0IG9mZnNldEhlYWRlciA9IGhlYWRlclNpemUgJiYgaGVhZGVyU2l6ZS5oZWlnaHQgKiAtMTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvX19zZWN0aW9uIGludHJvX19zZWN0aW9uLS1wYWlyXCI+XG5cdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdHRvPXtyZWZlcmVuY2VbMF0gJiYgcmVmZXJlbmNlWzBdLl9pZH1cblx0XHRcdFx0XHRzcHk9e3RydWV9XG5cdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0b2Zmc2V0PXtvZmZzZXRIZWFkZXJ9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVkaWEgYXNzZXQ9e2Fzc2V0X2xlZnR9IHR5cGU9e3R5cGVfbGVmdH0gLz5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0dG89e3JlZmVyZW5jZVswXSAmJiByZWZlcmVuY2VbMF0uX2lkfVxuXHRcdFx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRcdFx0c21vb3RoPXt0cnVlfVxuXHRcdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtyZWZlcmVuY2VbMF0gJiYgcmVmZXJlbmNlWzBdLnRpdGxlfVxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9maWdjYXB0aW9uPlxuXHRcdFx0PC9maWd1cmU+XG5cblx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0dG89e3JlZmVyZW5jZVsxXSAmJiByZWZlcmVuY2VbMV0uX2lkfVxuXHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdFx0ZHVyYXRpb249ezUwMH1cblx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZWRpYSBhc3NldD17YXNzZXRfcmlnaHR9IHR5cGU9e3R5cGVfcmlnaHR9IC8+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PGZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdHRvPXtyZWZlcmVuY2VbMV0gJiYgcmVmZXJlbmNlWzFdLl9pZH1cblx0XHRcdFx0XHRcdHNweT17dHJ1ZX1cblx0XHRcdFx0XHRcdHNtb290aD17dHJ1ZX1cblx0XHRcdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdFx0XHRvZmZzZXQ9e29mZnNldEhlYWRlcn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cmVmZXJlbmNlWzFdICYmIHJlZmVyZW5jZVsxXS50aXRsZX1cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZmlnY2FwdGlvbj5cblx0XHRcdDwvZmlndXJlPlxuXG5cdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi5pbnRyb19fc2VjdGlvbi0tcGFpciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLmludHJvX19zZWN0aW9uLS1wYWlyIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIgKyAxcmVtICsgMXJlbSkgMFxuXHRcdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24uaW50cm9fX3NlY3Rpb24tLXBhaXIgZmlndXJlOm50aC1jaGlsZCgke3ByaW99KSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjUlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm9QYWlyO1xuIl19 */
/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroPair.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroPair);

/***/ }),

/***/ "./components/sections/IntroText.js":
/*!******************************************!*\
  !*** ./components/sections/IntroText.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function IntroText(props) {
  const {
    reference = "",
    text
  } = props,
        content = reference.content,
        [headerSize, setHeaderHeight] = Object(reactn__WEBPACK_IMPORTED_MODULE_2__["useGlobal"])("headerSize");
  let offsetHeader = headerSize && headerSize.height * -1;
  return __jsx("section", {
    className: "jsx-3493474837" + " " + "intro__section intro__section--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
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
  }, __jsx("figure", {
    className: "jsx-3493474837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("figcaption", {
    className: "jsx-3493474837",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), content.map(({
    _type,
    media,
    media_left,
    media_right
  }, i) => {
    media = media ? media : media_left;
    return [media && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      type: media && media.type,
      asset: media && media.type === "video" ? media.video.mux.asset : media.image.asset,
      gif: media && media.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), media_right && __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i + "_right",
      type: media_right && media_right.type,
      asset: media_right && media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
      gif: media_right && media_right.type === "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })];
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3493474837",
    __self: this
  }, ".intro__section--text{padding:0 calc(var(--marginOuter) / 2);}.intro__section--text:not(:first-child){padding-top:var(--marginMedium);}.intro__section--text figure{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.intro__section--text figcaption{width:100%;font-size:calc(48px + (120 - 48) * (100vw - 360px) / (1920 - 360));line-height:calc(52px + (115 - 52) * (100vw - 360px) / (1920 - 360));padding:0 calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2) calc(var(--marginOuter) / 2);}.intro__section--text img,.intro__section--text video{width:auto;height:calc( (104px + (160 - 104) * (100vw - 360px) / (640 - 360)) + var(--marginOuter) );padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){.intro__section--text{min-height:calc(100 * var(--vH));}}@media screen and (min-width:640px){.intro__section--text img,.intro__section--text video{height:calc(10rem + var(--marginOuter));}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvSW50cm9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREc0IsQUFHNkMsQUFJUCxBQUluQixBQU1GLEFBU0EsQUFZdUIsQUFNTyxXQTFCMEIsQUFXbEUscUJBckJGLENBK0JDLE1BbkNELENBeUNDLGtDQWpDZSxJQU9zRCx1QkFjaEMsOEJBcEJWLE9BcUI1QixTQWI4Qix5RkFQOUIsUUFRQSIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0ludHJvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCJyZWFjdG5cIjtcblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lZGlhXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvY2tcIjtcblxuZnVuY3Rpb24gSW50cm9UZXh0KHByb3BzKSB7XG5cdGNvbnN0IHsgcmVmZXJlbmNlID0gXCJcIiwgdGV4dCB9ID0gcHJvcHMsXG5cdFx0Y29udGVudCA9IHJlZmVyZW5jZS5jb250ZW50LFxuXHRcdFtoZWFkZXJTaXplLCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlR2xvYmFsKFwiaGVhZGVyU2l6ZVwiKTtcblxuXHRsZXQgb2Zmc2V0SGVhZGVyID0gaGVhZGVyU2l6ZSAmJiBoZWFkZXJTaXplLmhlaWdodCAqIC0xO1xuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9fX3NlY3Rpb24gaW50cm9fX3NlY3Rpb24tLXRleHRcIj5cblx0XHRcdDxMaW5rXG5cdFx0XHRcdHRvPXtyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl9pZH1cblx0XHRcdFx0c3B5PXt0cnVlfVxuXHRcdFx0XHRzbW9vdGg9e3RydWV9XG5cdFx0XHRcdGR1cmF0aW9uPXs1MDB9XG5cdFx0XHRcdG9mZnNldD17b2Zmc2V0SGVhZGVyfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZmlndXJlPlxuXHRcdFx0XHRcdDxmaWdjYXB0aW9uPlxuXHRcdFx0XHRcdFx0PEJsb2NrIGJsb2Nrcz17dGV4dH0gLz5cblx0XHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHRcdFx0e2NvbnRlbnQubWFwKCh7IF90eXBlLCBtZWRpYSwgbWVkaWFfbGVmdCwgbWVkaWFfcmlnaHQgfSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVkaWEgPSBtZWRpYSA/IG1lZGlhIDogbWVkaWFfbGVmdDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdFx0bWVkaWEgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWEgJiYgbWVkaWEudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFzc2V0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWEgJiYgbWVkaWEudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYS52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG1lZGlhLmltYWdlLmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhICYmIG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRtZWRpYV9yaWdodCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2kgKyBcIl9yaWdodFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdGFzc2V0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWVkaWFfcmlnaHQgJiYgbWVkaWFfcmlnaHQudHlwZSA9PT0gXCJ2aWRlb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBtZWRpYV9yaWdodC52aWRlby5tdXguYXNzZXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG1lZGlhX3JpZ2h0LmltYWdlLmFzc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRnaWY9e21lZGlhX3JpZ2h0ICYmIG1lZGlhX3JpZ2h0LnR5cGUgPT09IFwidmlkZW9cIn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2ZpZ3VyZT5cblx0XHRcdDwvTGluaz5cblxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQ6bm90KDpmaXJzdC1jaGlsZCkge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiB2YXIoLS1tYXJnaW5NZWRpdW0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ3VyZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogY2FsYyg0OHB4ICsgKDEyMCAtIDQ4KSAqICgxMDB2dyAtIDM2MHB4KSAvICgxOTIwIC0gMzYwKSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGNhbGMoNTJweCArICgxMTUgLSA1MikgKiAoMTAwdncgLSAzNjBweCkgLyAoMTkyMCAtIDM2MCkpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKSBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpXG5cdFx0XHRcdFx0XHRjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGltZyxcblx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IHZpZGVvIHtcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoXG5cdFx0XHRcdFx0XHQoMTA0cHggKyAoMTYwIC0gMTA0KSAqICgxMDB2dyAtIDM2MHB4KSAvICg2NDAgLSAzNjApKSArIHZhcigtLW1hcmdpbk91dGVyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0IHtcblx0XHRcdFx0XHRcdC8qIGhlaWdodDogY2FsYygxMHJlbSArIHZhcigtLW1hcmdpbk91dGVyKSk7ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZGRpbmc6IGNhbGModmFyKC0tbWFyZ2luT3V0ZXIpIC8gMik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuXHRcdFx0XHRcdC5pbnRyb19fc2VjdGlvbi0tdGV4dCB7XG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMCAqIHZhcigtLXZIKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0LmludHJvX19zZWN0aW9uLS10ZXh0IGltZyxcblx0XHRcdFx0XHQuaW50cm9fX3NlY3Rpb24tLXRleHQgdmlkZW8ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBjYWxjKDEwcmVtICsgdmFyKC0tbWFyZ2luT3V0ZXIpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvVGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/sections/IntroText.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IntroText);

/***/ }),

/***/ "./components/sections/index.js":
/*!**************************************!*\
  !*** ./components/sections/index.js ***!
  \**************************************/
/*! exports provided: Intro100, Intro75, Intro50, IntroPair, IntroText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intro100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intro100 */ "./components/sections/Intro100.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro100", function() { return _Intro100__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Intro75__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro75 */ "./components/sections/Intro75.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro75", function() { return _Intro75__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Intro50__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Intro50 */ "./components/sections/Intro50.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro50", function() { return _Intro50__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _IntroPair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IntroPair */ "./components/sections/IntroPair.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroPair", function() { return _IntroPair__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _IntroText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntroText */ "./components/sections/IntroText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroText", function() { return _IntroText__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/viewer/ViewerContain.js":
/*!********************************************!*\
  !*** ./components/viewer/ViewerContain.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/viewer/ViewerContain.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ViewerContain(props) {
  const {
    media = "",
    _type = ""
  } = props,
        asset = media.type === "video" ? media.video.mux.asset : media.image.asset,
        type = media.type,
        fit = _type.replace("viewer", "").toLowerCase();

  console.log(media);
  return __jsx("figure", {
    className: "jsx-1096148002" + " " + (fit || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    media: media,
    asset: asset,
    type: type,
    fit: fit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1096148002",
    __self: this
  }, "figure.contain img,figure.contain video{object-fit:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvdmlld2VyL1ZpZXdlckNvbnRhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWUsQUFHeUIsbUJBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvdmlld2VyL1ZpZXdlckNvbnRhaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVkaWFcIjtcblxuZnVuY3Rpb24gVmlld2VyQ29udGFpbihwcm9wcykge1xuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgX3R5cGUgPSBcIlwiIH0gPSBwcm9wcyxcblx0XHRhc3NldCA9IG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIiA/IG1lZGlhLnZpZGVvLm11eC5hc3NldCA6IG1lZGlhLmltYWdlLmFzc2V0LFxuXHRcdHR5cGUgPSBtZWRpYS50eXBlLFxuXHRcdGZpdCA9IF90eXBlLnJlcGxhY2UoXCJ2aWV3ZXJcIiwgXCJcIikudG9Mb3dlckNhc2UoKTtcblxuXHRjb25zb2xlLmxvZyhtZWRpYSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZmlndXJlIGNsYXNzTmFtZT17Zml0fT5cblx0XHRcdDxNZWRpYSBtZWRpYT17bWVkaWF9IGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gZml0PXtmaXR9IC8+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdDpnbG9iYWwoZmlndXJlLmNvbnRhaW4gaW1nLCBmaWd1cmUuY29udGFpbiB2aWRlbykge1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2ZpZ3VyZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyQ29udGFpbjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/viewer/ViewerContain.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewerContain);

/***/ }),

/***/ "./components/viewer/ViewerCover.js":
/*!******************************************!*\
  !*** ./components/viewer/ViewerCover.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/viewer/ViewerCover.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ViewerCover(props) {
  const {
    media = "",
    _type = ""
  } = props,
        asset = media.type === "video" ? media.video.mux.asset : media.image.asset,
        type = media.type,
        fit = _type.replace("viewer", "").toLowerCase();

  return __jsx("figure", {
    className: "jsx-546156505" + " " + (fit || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_2__["default"], {
    media: media,
    asset: asset,
    type: type,
    fit: fit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "546156505",
    __self: this
  }, "figure.cover img,figure.cover video{object-fit:cover;}@media screen and (min-width:640px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvdmlld2VyL1ZpZXdlckNvdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVlLEFBR3VCLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL3ZpZXdlci9WaWV3ZXJDb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZWRpYVwiO1xuXG5mdW5jdGlvbiBWaWV3ZXJDb3Zlcihwcm9wcykge1xuXHRjb25zdCB7IG1lZGlhID0gXCJcIiwgX3R5cGUgPSBcIlwiIH0gPSBwcm9wcyxcblx0XHRhc3NldCA9IG1lZGlhLnR5cGUgPT09IFwidmlkZW9cIiA/IG1lZGlhLnZpZGVvLm11eC5hc3NldCA6IG1lZGlhLmltYWdlLmFzc2V0LFxuXHRcdHR5cGUgPSBtZWRpYS50eXBlLFxuXHRcdGZpdCA9IF90eXBlLnJlcGxhY2UoXCJ2aWV3ZXJcIiwgXCJcIikudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIChcblx0XHQ8ZmlndXJlIGNsYXNzTmFtZT17Zml0fT5cblx0XHRcdDxNZWRpYSBtZWRpYT17bWVkaWF9IGFzc2V0PXthc3NldH0gdHlwZT17dHlwZX0gZml0PXtmaXR9IC8+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdDpnbG9iYWwoZmlndXJlLmNvdmVyIGltZywgZmlndXJlLmNvdmVyIHZpZGVvKSB7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZmlndXJlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJDb3ZlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/viewer/ViewerCover.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewerCover);

/***/ }),

/***/ "./components/viewer/ViewerPair.js":
/*!*****************************************!*\
  !*** ./components/viewer/ViewerPair.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Media */ "./components/Media.js");
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/viewer/ViewerPair.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ViewerPair(props) {
  console.log(props);
  const {
    media_left,
    media_right
  } = props,
        asset_left = media_left.type === "video" ? media_left.video.mux.asset : media_left.image.asset,
        type_left = media_left.type,
        asset_right = media_right.type === "video" ? media_right.video.mux.asset : media_right.image.asset,
        type_right = media_right.type;
  return __jsx("figure", {
    className: "pair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_1__["default"], {
    media: media_left,
    asset: asset_left,
    type: type_left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_Media__WEBPACK_IMPORTED_MODULE_1__["default"], {
    media: media_right,
    asset: asset_right,
    type: type_right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewerPair);

/***/ }),

/***/ "./components/viewer/index.js":
/*!************************************!*\
  !*** ./components/viewer/index.js ***!
  \************************************/
/*! exports provided: ViewerContain, ViewerCover, ViewerPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewerContain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewerContain */ "./components/viewer/ViewerContain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerContain", function() { return _ViewerContain__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ViewerCover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewerCover */ "./components/viewer/ViewerCover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerCover", function() { return _ViewerCover__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ViewerPair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewerPair */ "./components/viewer/ViewerPair.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewerPair", function() { return _ViewerPair__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_IntroContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/IntroContainer */ "./components/IntroContainer.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var reactn_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactn-devtools */ "reactn-devtools");
/* harmony import */ var reactn_devtools__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactn_devtools__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/pages/index.js";
var __jsx = reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










reactn_devtools__WEBPACK_IMPORTED_MODULE_9___default()();

Object(reactn__WEBPACK_IMPORTED_MODULE_0__["setGlobal"])({
  navOpen: false,
  viewerOpen: false,
  viewerContent: null,
  viewerID: null,
  slideIndex: 0,
  headerHeight: 0
});

class Index extends reactn__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      about
    } = this.props;
    return __jsx(reactn__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "My page title"), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      key: "viewport",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("main", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_components_IntroContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
      content: about,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })));
  }

  componentDidMount() {
    __webpack_require__(/*! ../scripts/document.js */ "./scripts/document.js");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

Index.getInitialProps = async () => ({
  about: await _client__WEBPACK_IMPORTED_MODULE_1___default.a.fetch(`*[_id == "about"][0]`)
});

/***/ }),

/***/ "./scripts/document.js":
/*!*****************************!*\
  !*** ./scripts/document.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./scripts/main.js");


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Detection */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

window.addEventListener("touchstart", function onFirstTouch() {
  document.documentElement.classList.add("is--touch");
  window.removeEventListener("touchstart", onFirstTouch, false);
}, false);

if (navigator.userAgent.indexOf("Edge") >= 0) {
  document.documentElement.classList.add("is--edge");
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Normalize viewport height */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


function setVH() {
  let VH = window.innerHeight * 0.01;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["setCustomProperty"])("--vH", `${VH}px`);
}

setVH();
window.addEventListener("resize", setVH);

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Set Header Height */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function setHeaderH() {
  let HH = document.querySelectorAll("header")[0].clientHeight;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["setCustomProperty"])("--headerH", `${HH}px`);
}

setHeaderH();
window.addEventListener("resize", setHeaderH);

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/*! exports provided: debounce, addListenerMulti, convertRemToPixels, setCustomProperty, capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListenerMulti", function() { return addListenerMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRemToPixels", function() { return convertRemToPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomProperty", function() { return setCustomProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Debounce */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
        args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Add one or more listeners to an element */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function addListenerMulti(el, s, fn) {
  s.split(" ").forEach(e => el.addEventListener(e, fn, false));
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Define REM */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function convertRemToPixels(rem) {
  return rem * _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(getComputedStyle(document.documentElement).fontSize);
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Set Custom Properties */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function setCustomProperty(name, value) {
  document.documentElement.style.setProperty(name, value);
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Set Custom Properties */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./static/ui/pause.svg":
/*!*****************************!*\
  !*** ./static/ui/pause.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTY4IDIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0uNSAwaDU3djIxOEguNXpNMTEwLjUwNSAwaDU3djIxOGgtNTd6Ii8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./static/ui/play.svg":
/*!****************************!*\
  !*** ./static/ui/play.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTkxIDIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkwLjgwMyAxMDkuNjk5bC05NC45OTkgNTQuODQ5TC44MDUgMjE5LjM5N1YuMDAzbDk0Ljk5OSA1NC44NDh6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"clear": "main__clear",
	"sticky": "main__sticky",
	"bypostauthor": "main__bypostauthor",
	"wp-caption": "main__wp-caption",
	"wp-caption-text": "main__wp-caption-text",
	"gallery-caption": "main__gallery-caption",
	"alignright": "main__alignright",
	"alignleft": "main__alignleft",
	"aligncenter": "main__aligncenter",
	"screen-reader-text": "main__screen-reader-text",
	"contain": "main__contain",
	"cover": "main__cover"
};

/***/ }),

/***/ "./utils/hooks/useDimensions.js":
/*!**************************************!*\
  !*** ./utils/hooks/useDimensions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
 // import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from "./types";

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
}

function useDimensions(global) {
  const [dimensions, setDimensions] = Object(reactn__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [node, setNode] = Object(reactn__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const ref = Object(reactn__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(node => {
    setNode(node);
  }, []);
  Object(reactn__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)));
        let globalObj = {
          [global.global]: getDimensionObject(node)
        };
        console.log(getDimensionObject(node), global.global, globalObj);
        Object(reactn__WEBPACK_IMPORTED_MODULE_0__["setGlobal"])(globalObj);
      };

      measure();
      window.addEventListener("resize", measure); // window.addEventListener("scroll", measure);

      return () => {
        window.removeEventListener("resize", measure); // window.removeEventListener("scroll", measure);
      };
    }
  }, [node]);
  return [ref, dimensions, node];
}

/* harmony default export */ __webpack_exports__["default"] = (useDimensions);

/***/ }),

/***/ "./utils/hooks/useLockBodyScroll.js":
/*!******************************************!*\
  !*** ./utils/hooks/useLockBodyScroll.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLockBodyScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLockBodyScroll() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Get original value of body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = "hidden"; // Re-enable scrolling when component unmounts

    return () => document.body.style.overflow = originalStyle;
  }, []); // Empty array ensures effect is only run on mount and unmount
}

/***/ }),

/***/ "./utils/hooks/useMeasure.js":
/*!***********************************!*\
  !*** ./utils/hooks/useMeasure.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMeasure; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "resize-observer-polyfill");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__);


function useMeasure() {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: bounds,
    1: set
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const {
    0: ro
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a(([entry]) => set(entry.contentRect)));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => (ro.observe(ref.current), ro.disconnect), []);
  return [{
    ref
  }, bounds];
}

/***/ }),

/***/ "./utils/hooks/useWindowSize.js":
/*!**************************************!*\
  !*** ./utils/hooks/useWindowSize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const isClient = false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "lazysizes":
/*!****************************!*\
  !*** external "lazysizes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lazysizes");

/***/ }),

/***/ "lazysizes/plugins/attrchange/ls.attrchange":
/*!*************************************************************!*\
  !*** external "lazysizes/plugins/attrchange/ls.attrchange" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lazysizes/plugins/attrchange/ls.attrchange");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-use-gesture":
/*!************************************!*\
  !*** external "react-use-gesture" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),

/***/ "reactn":
/*!*************************!*\
  !*** external "reactn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactn");

/***/ }),

/***/ "reactn-devtools":
/*!**********************************!*\
  !*** external "reactn-devtools" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactn-devtools");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map