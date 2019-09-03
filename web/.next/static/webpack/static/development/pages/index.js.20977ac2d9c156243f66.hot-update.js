webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectViewerContainer.js":
/*!**********************************************!*\
  !*** ./components/ProjectViewerContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/hooks/useWindowSize */ "./utils/hooks/useWindowSize.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/utils */ "./scripts/utils.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/hooks/useLockBodyScroll */ "./utils/hooks/useLockBodyScroll.js");
/* harmony import */ var _ProjectViewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProjectViewer */ "./components/ProjectViewer.js");


var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










function ProjectViewerContainer(props) {
  var _useState = Object(reactn__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      clickEnabled = _useState2[0],
      toggleClick = _useState2[1];

  var windowSize = Object(_utils_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useGlobal = Object(reactn__WEBPACK_IMPORTED_MODULE_4__["useGlobal"])("viewerOpen"),
      _useGlobal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobal, 1),
      viewerOpen = _useGlobal2[0];

  var _useGlobal3 = Object(reactn__WEBPACK_IMPORTED_MODULE_4__["useGlobal"])("viewerContent"),
      _useGlobal4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobal3, 1),
      viewerContent = _useGlobal4[0];

  if (!viewerContent) return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Loading");

  var resetViewerReducer = function resetViewerReducer(global, dispatch, action) {
    return {
      viewerOpen: false,
      viewerID: null,
      slideIndex: 0
    };
  };

  var resetViewer = Object(reactn__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(resetViewerReducer); //useEffect(() => {}, []);

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useSpring"])(function () {
    return {
      y: 0,
      onFrame: function onFrame(params) {
        var y = params.y;

        if (Math.abs(y) <= 2) {
          toggleClick(true);
        }

        if (Math.abs(y) >= windowSize.height / 4) {
          resetViewer();
        }
      },
      onRest: function onRest() {
        toggleClick(true);
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      y = _useSpring2[0].y,
      set = _useSpring2[1];

  var bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_9__["useGesture"])({
    onDrag: function onDrag(_ref) {
      var down = _ref.down,
          delta = _ref.delta,
          velocity = _ref.velocity;
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["clamp"])(velocity, 1, 8);
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
    onWheel: function onWheel(_ref2) {
      var active = _ref2.active,
          delta = _ref2.delta,
          velocity = _ref2.velocity,
          _ref2$temp = _ref2.temp,
          temp = _ref2$temp === void 0 ? y.getValue() : _ref2$temp;
      velocity = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["clamp"])(velocity, 1, 8);
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
  Object(_utils_hooks_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer__overlay"
  }, bind(), {
    style: {
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("h2", {
    className: "project__viewer__caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Test")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].section, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "project__viewer"
  }, bind(), {
    style: {
      transform: viewerOpen ? y.interpolate(function (y) {
        return "translate3d(0,".concat(y, "px,0)");
      }) : "none",
      opacity: y.interpolate([-windowSize.height / 4, 0, windowSize.height / 4], [0.2, 1, 0.2])
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_ProjectViewer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    content: viewerContent,
    clickEnabled: clickEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2404343687",
    __self: this
  }, ".project__viewer{position:fixed;top:0;left:0;width:100%;height:calc(100 * var(--vH));z-index:9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab;}.project__viewer:active{cursor:-webkit-grabbing !important;cursor:-moz-grabbing !important;cursor:grabbing !important;cursor:-webkit--moz-grabbing !important;cursor:-moz--moz-grabbing !important;cursor:-moz-grabbing !important;cursor:-webkit--webkit-grabbing !important;cursor:-moz--webkit-grabbing !important;cursor:-webkit-grabbing !important;}.project__viewer__overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:8;background:white;}.project__viewer__caption{position:fixed;left:0;bottom:0;width:100%;padding:var(--marginOuter);z-index:12;}.project__viewer ul{position:relative;width:100%;height:100%;}.project__viewer li{position:absolute;top:0;left:0;width:100%;height:100%;}.project__viewer li.hidden{visibility:hidden;z-index:-1;}.project__viewer figure{width:100%;height:100%;position:relative;}.project__viewer figure:not(.pair) img,.project__viewer figure:not(.pair) .player__wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;}[data-orientation=\"portrait\"] video{width:auto;height:100%;}[data-orientation=\"landscape\"] video{width:100%;height:auto;}.project__viewer img,.project__viewer video{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-touch-callout:none;}.project__viewer figure.contain{max-width:100vmin;margin:0 auto;}.project__viewer figure.contain [data-orientation=\"landscape\"]{width:100%;height:auto;padding:var(--headerH) 0;}.project__viewer figure.contain [data-orientation=\"portrait\"]{width:auto;height:100%;padding:var(--headerH) 3rem;}.project__viewer figure.cover [data-orientation=\"landscape\"]{width:auto;height:100%;}.project__viewer figure.cover [data-orientation=\"portrait\"]{width:100%;height:auto;}.project__viewer figure.cover [data-orientation=\"portrait\"],.project__viewer figure.cover [data-orientation=\"landscape\"],.project__viewer figure.cover img,.project__viewer figure.cover video{width:100%;height:100%;}figure.pair{max-width:calc(100vmin - 3rem + var(--marginOuter) / 2);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--headerH) - var(--marginOuter) / 2) calc(var(--marginOuter) / 2);margin:0 auto;}figure.pair img,figure.pair video{width:50%;height:100%;object-fit:contain;padding:calc(var(--marginOuter) / 2);}@media screen and (max-width:639px){.project__viewer__caption{text-align:center;}}@media screen and (min-width:640px){.project__viewer figure.contain [data-orientation=\"landscape\"]{padding:var(--headerH) 3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGlsaXBwcG9sZGVyL0Ryb3Bib3gvUHJvamVrdGUvS2F0ZSBKYWNrbGluZy9Mb2NhbCBSb290L2thdGUtamFja2xpbmcvd2ViL2NvbXBvbmVudHMvUHJvamVjdFZpZXdlckNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RnVCLEFBR3NCLEFBVVksQUFLWixBQVVBLEFBUUcsQUFNQSxBQVFBLEFBS1AsQUFPTyxBQVFQLEFBS0EsQUFNVyxBQVVKLEFBS1AsQUFNQSxBQU1BLEFBS0EsQUFRQSxBQUs2QyxBQVU5QyxBQVFTLEFBTVUsVUFiakIsQ0FqRkEsQUFlQSxBQUtBLEFBcUJBLEFBTUEsQUFNQSxBQUtBLEFBUUEsSUF0SE4sQUFlQSxBQVVDLEdBUUksQUFNTCxBQVFLLEFBWUgsQUE2Qk0sQUFxRGQsR0E1SU8sQUFlQSxDQVVFLEFBb0RnQixBQXdETixDQWpGRCxBQWVuQixBQUtBLEFBcUIwQixBQU1HLEFBTTdCLEFBS0EsQUFRQSxDQS9FUSxFQW9CRSxFQTFERSxBQWVGLEFBa0lULENBakhZLEFBY2IsRUFyQlksQUFjQSxDQWdEWixHQTVCaUMsRUEzQ3hCLEVBZnFCLEVBZ0M5QixBQW1CQSxBQWlGc0MsQ0EzR1YsQUFjZixHQXZCRixFQTREVyxDQWdCdEIsR0FNQSxHQTFEQSxDQXZCa0IsQ0F1R0osWUF2SEgsQUE0RU8sQ0FuRE4sR0FSWixNQWhCa0IsQUFtSWxCLEVBMUdBLGNBcEJpQyxvQ0FrSGYsVUE5REYsYUFtQlEsRUFsQnhCLFFBekRhLGFBNEVHLGlCQTJDUSxVQWxIWSxTQUpwQyx5Q0E0RTRCLDJCQUM1QixZQTJDOEIsNkJBbkg5QixzREFvSGUsY0FDZiIsImZpbGUiOiIvVXNlcnMvcGhpbGlwcHBvbGRlci9Ecm9wYm94L1Byb2pla3RlL0thdGUgSmFja2xpbmcvTG9jYWwgUm9vdC9rYXRlLWphY2tsaW5nL3dlYi9jb21wb25lbnRzL1Byb2plY3RWaWV3ZXJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VEaXNwYXRjaCwgdXNlR2xvYmFsIH0gZnJvbSBcInJlYWN0blwiO1xuaW1wb3J0IHsgdGhyb3dzIH0gZnJvbSBcImFzc2VydFwiO1xuXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCIuLi9zY3JpcHRzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSwgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gXCJyZWFjdC11c2UtZ2VzdHVyZVwiO1xuaW1wb3J0IHsgY2xhbXAsIGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHVzZUxvY2tCb2R5U2Nyb2xsIGZyb20gXCIuLi91dGlscy9ob29rcy91c2VMb2NrQm9keVNjcm9sbFwiO1xuXG5pbXBvcnQgUHJvamVjdFZpZXdlciBmcm9tIFwiLi9Qcm9qZWN0Vmlld2VyXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RWaWV3ZXJDb250YWluZXIocHJvcHMpIHtcblx0Y29uc3QgW2NsaWNrRW5hYmxlZCwgdG9nZ2xlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuXHRjb25zdCBbdmlld2VyT3Blbl0gPSB1c2VHbG9iYWwoXCJ2aWV3ZXJPcGVuXCIpO1xuXHRjb25zdCBbdmlld2VyQ29udGVudF0gPSB1c2VHbG9iYWwoXCJ2aWV3ZXJDb250ZW50XCIpO1xuXG5cdGlmICghdmlld2VyQ29udGVudCkgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT47XG5cblx0Y29uc3QgcmVzZXRWaWV3ZXJSZWR1Y2VyID0gKGdsb2JhbCwgZGlzcGF0Y2gsIGFjdGlvbikgPT4gKHtcblx0XHR2aWV3ZXJPcGVuOiBmYWxzZSxcblx0XHR2aWV3ZXJJRDogbnVsbCxcblx0XHRzbGlkZUluZGV4OiAwXG5cdH0pO1xuXHRjb25zdCByZXNldFZpZXdlciA9IHVzZURpc3BhdGNoKHJlc2V0Vmlld2VyUmVkdWNlcik7XG5cblx0Ly91c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcblxuXHRjb25zdCBbeyB5IH0sIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcblx0XHR5OiAwLFxuXHRcdG9uRnJhbWU6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0bGV0IHsgeSB9ID0gcGFyYW1zO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoeSkgPD0gMikge1xuXHRcdFx0XHR0b2dnbGVDbGljayh0cnVlKTtcblx0XHRcdH1cblx0XHRcdGlmIChNYXRoLmFicyh5KSA+PSB3aW5kb3dTaXplLmhlaWdodCAvIDQpIHtcblx0XHRcdFx0cmVzZXRWaWV3ZXIoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uUmVzdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0b2dnbGVDbGljayh0cnVlKTtcblx0XHR9XG5cdH0pKTtcblxuXHRjb25zdCBiaW5kID0gdXNlR2VzdHVyZSh7XG5cdFx0b25EcmFnOiAoeyBkb3duLCBkZWx0YSwgdmVsb2NpdHkgfSkgPT4ge1xuXHRcdFx0dmVsb2NpdHkgPSBjbGFtcCh2ZWxvY2l0eSwgMSwgOCk7XG5cdFx0XHR0b2dnbGVDbGljayghZG93bik7XG5cdFx0XHRzZXQoe1xuXHRcdFx0XHR5OiBkb3duID8gZGVsdGFbMV0gOiAwLFxuXHRcdFx0XHRjb25maWc6IHsgbWFzczogdmVsb2NpdHksIHRlbnNpb246IDUwMCAqIHZlbG9jaXR5LCBmcmljdGlvbjogNTAgfVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRvbldoZWVsOiAoeyBhY3RpdmUsIGRlbHRhLCB2ZWxvY2l0eSwgdGVtcCA9IHkuZ2V0VmFsdWUoKSB9KSA9PiB7XG5cdFx0XHR2ZWxvY2l0eSA9IGNsYW1wKHZlbG9jaXR5LCAxLCA4KTtcblx0XHRcdHRvZ2dsZUNsaWNrKCFhY3RpdmUpO1xuXHRcdFx0c2V0KHtcblx0XHRcdFx0eTogYWN0aXZlID8gdGVtcCArIGRlbHRhWzFdICogLTEgOiAwLFxuXHRcdFx0XHRjb25maWc6IHsgbWFzczogdmVsb2NpdHksIHRlbnNpb246IDUwMCAqIHZlbG9jaXR5LCBmcmljdGlvbjogNTAgfVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHR1c2VMb2NrQm9keVNjcm9sbCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxhbmltYXRlZC5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwicHJvamVjdF9fdmlld2VyX19vdmVybGF5XCJcblx0XHRcdFx0ey4uLmJpbmQoKX1cblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRvcGFjaXR5OiB5LmludGVycG9sYXRlKFxuXHRcdFx0XHRcdFx0Wy13aW5kb3dTaXplLmhlaWdodCAvIDQsIDAsIHdpbmRvd1NpemUuaGVpZ2h0IC8gNF0sXG5cdFx0XHRcdFx0XHRbMC4yLCAxLCAwLjJdXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwicHJvamVjdF9fdmlld2VyX19jYXB0aW9uXCI+VGVzdDwvaDI+XG5cdFx0XHQ8L2FuaW1hdGVkLmRpdj5cblx0XHRcdDxhbmltYXRlZC5zZWN0aW9uXG5cdFx0XHRcdGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXdlclwiXG5cdFx0XHRcdHsuLi5iaW5kKCl9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB2aWV3ZXJPcGVuID8geS5pbnRlcnBvbGF0ZSh5ID0+IGB0cmFuc2xhdGUzZCgwLCR7eX1weCwwKWApIDogXCJub25lXCIsXG5cdFx0XHRcdFx0b3BhY2l0eTogeS5pbnRlcnBvbGF0ZShcblx0XHRcdFx0XHRcdFstd2luZG93U2l6ZS5oZWlnaHQgLyA0LCAwLCB3aW5kb3dTaXplLmhlaWdodCAvIDRdLFxuXHRcdFx0XHRcdFx0WzAuMiwgMSwgMC4yXVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFByb2plY3RWaWV3ZXIgY29udGVudD17dmlld2VyQ29udGVudH0gY2xpY2tFbmFibGVkPXtjbGlja0VuYWJsZWR9IC8+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGNhbGMoMTAwICogdmFyKC0tdkgpKTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdGN1cnNvcjogZ3JhYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlcjphY3RpdmUge1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiAtbW96LWdyYWJiaW5nICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmcgIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlcl9fb3ZlcmxheSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlcl9fY2FwdGlvbiB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiB2YXIoLS1tYXJnaW5PdXRlcik7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciB1bCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGxpIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGxpLmhpZGRlbiB7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZTpub3QoLnBhaXIpIGltZyxcblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZTpub3QoLnBhaXIpIC5wbGF5ZXJfX3dyYXBwZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRbZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCJdIHZpZGVvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdIHZpZGVvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgaW1nLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgdmlkZW8ge1xuXHRcdFx0XHRcdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRcdFx0XHRcdC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0dXNlci1kcmFnOiBub25lO1xuXHRcdFx0XHRcdFx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvbnRhaW4ge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMDB2bWluO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY29udGFpbiBbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdHBhZGRpbmc6IHZhcigtLWhlYWRlckgpIDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY29udGFpbiBbZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCJdIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taGVhZGVySCkgM3JlbTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBbZGF0YS1vcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiXSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb3ZlciBbZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCJdIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIFtkYXRhLW9yaWVudGF0aW9uPVwicG9ydHJhaXRcIl0sXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgW2RhdGEtb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIl0sXG5cdFx0XHRcdFx0LnByb2plY3RfX3ZpZXdlciBmaWd1cmUuY292ZXIgaW1nLFxuXHRcdFx0XHRcdC5wcm9qZWN0X192aWV3ZXIgZmlndXJlLmNvdmVyIHZpZGVvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZpZ3VyZS5wYWlyIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogY2FsYygxMDB2bWluIC0gM3JlbSArIHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRlckgpIC0gdmFyKC0tbWFyZ2luT3V0ZXIpIC8gMilcblx0XHRcdFx0XHRcdFx0Y2FsYyh2YXIoLS1tYXJnaW5PdXRlcikgLyAyKTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWd1cmUucGFpciBpbWcsXG5cdFx0XHRcdFx0ZmlndXJlLnBhaXIgdmlkZW8ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLW1hcmdpbk91dGVyKSAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cdFx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyX19jYXB0aW9uIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cdFx0XHRcdFx0XHQucHJvamVjdF9fdmlld2VyIGZpZ3VyZS5jb250YWluIFtkYXRhLW9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCJdIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogdmFyKC0taGVhZGVySCkgM3JlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvYW5pbWF0ZWQuc2VjdGlvbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFZpZXdlckNvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/components/ProjectViewerContainer.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectViewerContainer);

/***/ })

})
//# sourceMappingURL=index.js.20977ac2d9c156243f66.hot-update.js.map