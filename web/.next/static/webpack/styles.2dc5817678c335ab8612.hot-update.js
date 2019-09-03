webpackHotUpdate("styles",{

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"clear":"main__clear","sticky":"main__sticky","bypostauthor":"main__bypostauthor","wp-caption":"main__wp-caption","wp-caption-text":"main__wp-caption-text","gallery-caption":"main__gallery-caption","alignright":"main__alignright","alignleft":"main__alignleft","aligncenter":"main__aligncenter","screen-reader-text":"main__screen-reader-text","contain":"main__contain","cover":"main__cover"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1567453668052");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2dc5817678c335ab8612.hot-update.js.map