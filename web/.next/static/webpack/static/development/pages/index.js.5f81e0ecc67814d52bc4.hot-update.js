webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/reactn/build/add-callback.js":
/*!***************************************************!*\
  !*** ./node_modules/reactn/build/add-callback.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _addCallback(globalStateManager, callback) {
    return globalStateManager.addCallback(callback);
}
exports.default = _addCallback;
;


/***/ }),

/***/ "./node_modules/reactn/build/add-reducer.js":
/*!**************************************************!*\
  !*** ./node_modules/reactn/build/add-reducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _addReducer(globalStateManager, name, reducer) {
    return globalStateManager.addReducer(name, reducer);
}
exports.default = _addReducer;
;


/***/ }),

/***/ "./node_modules/reactn/build/add-reducers.js":
/*!***************************************************!*\
  !*** ./node_modules/reactn/build/add-reducers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var add_reducer_1 = __webpack_require__(/*! ./add-reducer */ "./node_modules/reactn/build/add-reducer.js");
function _addReducers(globalStateManager, reducers) {
    var e_1, _a;
    var removeReducers = new Set();
    try {
        for (var _b = __values(Object.entries(reducers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name = _d[0], reducer = _d[1];
            removeReducers.add(add_reducer_1.default(globalStateManager, name, reducer));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        var e_2, _a;
        var success = true;
        try {
            for (var removeReducers_1 = __values(removeReducers), removeReducers_1_1 = removeReducers_1.next(); !removeReducers_1_1.done; removeReducers_1_1 = removeReducers_1.next()) {
                var removeReducer = removeReducers_1_1.value;
                success = success && removeReducer();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (removeReducers_1_1 && !removeReducers_1_1.done && (_a = removeReducers_1.return)) _a.call(removeReducers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return success;
    };
}
exports.default = _addReducers;
;


/***/ }),

/***/ "./node_modules/reactn/build/components.js":
/*!*************************************************!*\
  !*** ./node_modules/reactn/build/components.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var methods_1 = __webpack_require__(/*! ./methods */ "./node_modules/reactn/build/methods.js");
var bind_lifecycle_methods_1 = __webpack_require__(/*! ./utils/bind-lifecycle-methods */ "./node_modules/reactn/build/utils/bind-lifecycle-methods.js");
var isComponentDidMount = false;
var isComponentDidUpdate = false;
var isSetGlobalCallback = false;
var ReactPureComponent = React.PureComponent || React.Component;
var ReactNComponent = (function (_super) {
    __extends(ReactNComponent, _super);
    function ReactNComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        bind_lifecycle_methods_1.default(_this);
        return _this;
    }
    Object.defineProperty(ReactNComponent.prototype, "dispatch", {
        get: function () {
            return methods_1.ReactNDispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactNComponent.prototype, "global", {
        get: function () {
            return methods_1.ReactNGlobal(this);
        },
        enumerable: true,
        configurable: true
    });
    ReactNComponent.prototype.setGlobal = function (newGlobalState, callback) {
        if (callback === void 0) { callback = null; }
        return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount &&
            !isComponentDidUpdate &&
            !isSetGlobalCallback);
    };
    ReactNComponent.prototype._globalCallback = function () {
        return methods_1.ReactNGlobalCallback(this);
    };
    return ReactNComponent;
}(React.Component));
exports.ReactNComponent = ReactNComponent;
;
var ReactNPureComponent = (function (_super) {
    __extends(ReactNPureComponent, _super);
    function ReactNPureComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        bind_lifecycle_methods_1.default(_this);
        return _this;
    }
    Object.defineProperty(ReactNPureComponent.prototype, "dispatch", {
        get: function () {
            return methods_1.ReactNDispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactNPureComponent.prototype, "global", {
        get: function () {
            return methods_1.ReactNGlobal(this);
        },
        enumerable: true,
        configurable: true
    });
    ReactNPureComponent.prototype.setGlobal = function (newGlobalState, callback) {
        if (callback === void 0) { callback = null; }
        return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount &&
            !isComponentDidUpdate &&
            !isSetGlobalCallback);
    };
    ReactNPureComponent.prototype._globalCallback = function () {
        return methods_1.ReactNGlobalCallback(this);
    };
    return ReactNPureComponent;
}(ReactPureComponent));
exports.ReactNPureComponent = ReactNPureComponent;
;


/***/ }),

/***/ "./node_modules/reactn/build/context.js":
/*!**********************************************!*\
  !*** ./node_modules/reactn/build/context.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var default_global_state_manager_1 = __webpack_require__(/*! ./default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
var getContext = function () {
    if (typeof react_1.createContext === 'function') {
        return react_1.createContext(default_global_state_manager_1.default);
    }
    return null;
};
exports.default = getContext();


/***/ }),

/***/ "./node_modules/reactn/build/create-provider.js":
/*!******************************************************!*\
  !*** ./node_modules/reactn/build/create-provider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/reactn/build/context.js");
var add_reducer_1 = __webpack_require__(/*! ./add-reducer */ "./node_modules/reactn/build/add-reducer.js");
var add_reducers_1 = __webpack_require__(/*! ./add-reducers */ "./node_modules/reactn/build/add-reducers.js");
var global_state_manager_1 = __webpack_require__(/*! ./global-state-manager */ "./node_modules/reactn/build/global-state-manager.js");
var set_global_1 = __webpack_require__(/*! ./set-global */ "./node_modules/reactn/build/set-global.js");
var use_dispatch_1 = __webpack_require__(/*! ./use-dispatch */ "./node_modules/reactn/build/use-dispatch.js");
var use_global_1 = __webpack_require__(/*! ./use-global */ "./node_modules/reactn/build/use-global.js");
var is_property_reducer_1 = __webpack_require__(/*! ./utils/is-property-reducer */ "./node_modules/reactn/build/utils/is-property-reducer.js");
var react_context_error_1 = __webpack_require__(/*! ./utils/react-context-error */ "./node_modules/reactn/build/utils/react-context-error.js");
var with_global_1 = __webpack_require__(/*! ./with-global */ "./node_modules/reactn/build/with-global.js");
function _createProvider(initialState, initialReducers) {
    if (initialState === void 0) { initialState = Object.create(null); }
    if (initialReducers === void 0) { initialReducers = Object.create(null); }
    if (context_1.default === null) {
        throw react_context_error_1.default;
    }
    var globalStateManager = new global_state_manager_1.default(initialState, initialReducers);
    return (function (_super) {
        __extends(ReactNProvider, _super);
        function ReactNProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReactNProvider.addCallback = function (f) {
            return globalStateManager.addCallback(f);
        };
        ReactNProvider.addReducer = function (name, reducer) {
            return add_reducer_1.default(globalStateManager, name, reducer);
        };
        ReactNProvider.addReducers = function (reducers) {
            return add_reducers_1.default(globalStateManager, reducers);
        };
        Object.defineProperty(ReactNProvider, "dispatch", {
            get: function () {
                return globalStateManager.dispatchers;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ReactNProvider, "dispatcherMap", {
            get: function () {
                return globalStateManager.dispatcherMap;
            },
            enumerable: true,
            configurable: true
        });
        ReactNProvider.getDispatch = function () {
            return globalStateManager.dispatchers;
        };
        ReactNProvider.getGlobal = function () {
            return globalStateManager.state;
        };
        Object.defineProperty(ReactNProvider, "global", {
            get: function () {
                return globalStateManager.state;
            },
            enumerable: true,
            configurable: true
        });
        ReactNProvider.removeCallback = function (callback) {
            return globalStateManager.removeCallback(callback);
        };
        ReactNProvider.reset = function () {
            return globalStateManager.reset();
        };
        ReactNProvider.setGlobal = function (newGlobalState, callback) {
            if (callback === void 0) { callback = null; }
            return set_global_1.default(globalStateManager, newGlobalState, callback);
        };
        ReactNProvider.useDispatch = function (reducer, property) {
            if (typeof reducer === 'function') {
                if (is_property_reducer_1.default(reducer, property)) {
                    return use_dispatch_1.default(globalStateManager, reducer, property);
                }
                return use_dispatch_1.default(globalStateManager, reducer);
            }
            return use_dispatch_1.default(globalStateManager, reducer);
        };
        ReactNProvider.useGlobal = function (property) {
            return use_global_1.default(globalStateManager, property);
        };
        ReactNProvider.withGlobal = function (getter, setter) {
            if (getter === void 0) { getter = function (global) { return global; }; }
            if (setter === void 0) { setter = function () { return null; }; }
            return with_global_1.default(globalStateManager, getter, setter);
        };
        ReactNProvider.prototype.render = function () {
            return (React.createElement(context_1.default.Provider, { value: globalStateManager }, this.props.children));
        };
        return ReactNProvider;
    }(React.Component));
}
exports.default = _createProvider;


/***/ }),

/***/ "./node_modules/reactn/build/decorator.js":
/*!************************************************!*\
  !*** ./node_modules/reactn/build/decorator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = __webpack_require__(/*! ./methods */ "./node_modules/reactn/build/methods.js");
var isComponentDidMount = false;
var isComponentDidUpdate = false;
var isSetGlobalCallback = false;
var componentName = function (DecoratedComponent) {
    return typeof DecoratedComponent === 'string' ?
        DecoratedComponent :
        DecoratedComponent.displayName ||
            DecoratedComponent.name;
};
function ReactN(DecoratedComponent) {
    var DecoratedReactNComponent = (function (_super) {
        __extends(DecoratedReactNComponent, _super);
        function DecoratedReactNComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._globalCallback = _this._globalCallback.bind(_this);
            return _this;
        }
        DecoratedReactNComponent.prototype.componentWillUnmount = function () {
            methods_1.ReactNComponentWillUnmount(this);
            if (_super.prototype.componentWillUnmount) {
                _super.prototype.componentWillUnmount.call(this);
            }
        };
        DecoratedReactNComponent.prototype.componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            methods_1.ReactNComponentWillUpdate(this);
            if (_super.prototype.componentWillUpdate) {
                _super.prototype.componentWillUpdate.apply(this, __spread(args));
            }
        };
        Object.defineProperty(DecoratedReactNComponent.prototype, "dispatch", {
            get: function () {
                return methods_1.ReactNDispatch();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DecoratedReactNComponent.prototype, "global", {
            get: function () {
                return methods_1.ReactNGlobal(this);
            },
            enumerable: true,
            configurable: true
        });
        DecoratedReactNComponent.prototype.setGlobal = function (newGlobalState, callback) {
            if (callback === void 0) { callback = null; }
            return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount &&
                !isComponentDidUpdate &&
                !isSetGlobalCallback);
        };
        DecoratedReactNComponent.prototype._globalCallback = function () {
            return methods_1.ReactNGlobalCallback(this);
        };
        DecoratedReactNComponent.displayName = componentName(DecoratedComponent) + "-ReactN";
        return DecoratedReactNComponent;
    }(DecoratedComponent));
    return DecoratedReactNComponent;
}
exports.default = ReactN;
;


/***/ }),

/***/ "./node_modules/reactn/build/default-global-state-manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/reactn/build/default-global-state-manager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_state_manager_1 = __webpack_require__(/*! ./global-state-manager */ "./node_modules/reactn/build/global-state-manager.js");
exports.default = new global_state_manager_1.default();


/***/ }),

/***/ "./node_modules/reactn/build/get-dispatch.js":
/*!***************************************************!*\
  !*** ./node_modules/reactn/build/get-dispatch.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _getDispatch(globalStateManager) {
    return globalStateManager.dispatchers;
}
exports.default = _getDispatch;
;


/***/ }),

/***/ "./node_modules/reactn/build/get-global.js":
/*!*************************************************!*\
  !*** ./node_modules/reactn/build/get-global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _getGlobal(globalStateManager) {
    return globalStateManager.state;
}
exports.default = _getGlobal;
;


/***/ }),

/***/ "./node_modules/reactn/build/global-state-manager.js":
/*!***********************************************************!*\
  !*** ./node_modules/reactn/build/global-state-manager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_get_listener_1 = __webpack_require__(/*! ./utils/object-get-listener */ "./node_modules/reactn/build/utils/object-get-listener.js");
var copyObject = function (obj) {
    return Object.assign(Object.create(null), obj);
};
exports.INVALID_NEW_GLOBAL_STATE = new Error('ReactN global state must be a function, null, object, or Promise.');
var GlobalStateManager = (function () {
    function GlobalStateManager(initialState, initialReducers) {
        if (initialState === void 0) { initialState = Object.create(null); }
        if (initialReducers === void 0) { initialReducers = Object.create(null); }
        this._callbacks = new Set();
        this._dispatchers = Object.create(null);
        this._middlewares = new Set();
        this._propertyListeners = new Map();
        this._queue = new Map();
        this._initialReducers = copyObject(initialReducers);
        this._initialState = copyObject(initialState);
        this._state = copyObject(initialState);
        this.addReducers(initialReducers);
    }
    GlobalStateManager.prototype.addCallback = function (callback) {
        var _this = this;
        this._callbacks.add(callback);
        return function () {
            return _this.removeCallback(callback);
        };
    };
    GlobalStateManager.prototype.addMiddleware = function (createMiddleware) {
        var _this = this;
        var middleware = createMiddleware(this.state, this.dispatchers);
        this._middlewares.add(middleware);
        return function () {
            return _this.removeMiddleware(middleware);
        };
    };
    GlobalStateManager.prototype.addPropertyListener = function (property, propertyListener) {
        if (this.propertyListeners.has(property)) {
            this.propertyListeners.get(property).add(propertyListener);
        }
        else {
            this.propertyListeners.set(property, new Set([propertyListener]));
        }
    };
    GlobalStateManager.prototype.addReducer = function (name, reducer) {
        var _this = this;
        this._dispatchers[name] = this.createDispatcher(reducer, name);
        return function () {
            return _this.removeDispatcher(name);
        };
    };
    GlobalStateManager.prototype.addReducers = function (reducers) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.entries(reducers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), name = _d[0], reducer = _d[1];
                this.addReducer(name, reducer);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    GlobalStateManager.prototype.clearQueue = function () {
        return this.queue.clear();
    };
    GlobalStateManager.prototype.createDispatcher = function (reducer, name) {
        var _this = this;
        if (name === void 0) { name = reducer.name; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.set(reducer.apply(void 0, __spread([_this.state, _this.dispatcherMap], args)), name, args)
                .then(function () { return _this.state; });
        };
    };
    Object.defineProperty(GlobalStateManager.prototype, "dispatcherMap", {
        get: function () {
            var _this = this;
            var dispatch = function (newGlobalState) {
                return _this.set(newGlobalState).then(function () { return _this.state; });
            };
            return Object.assign(dispatch, this.dispatchers);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalStateManager.prototype, "dispatchers", {
        get: function () {
            return copyObject(this._dispatchers);
        },
        enumerable: true,
        configurable: true
    });
    GlobalStateManager.prototype.enqueue = function (property, value) {
        this._queue.set(property, value);
    };
    GlobalStateManager.prototype.flush = function (reducerName, reducerArgs) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        var propertyListeners = new Set();
        var stateChange = Object.create(null);
        this.queue.forEach(function (value, key) {
            stateChange[key] = value;
        });
        try {
            for (var _e = __values(this.queue.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var _g = __read(_f.value, 2), property = _g[0], value = _g[1];
                this._state[property] = value;
                if (this.propertyListeners.has(property)) {
                    try {
                        for (var _h = (e_3 = void 0, __values(this.propertyListeners.get(property))), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var propertyListener = _j.value;
                            propertyListeners.add(propertyListener);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.clearQueue();
        try {
            for (var propertyListeners_1 = __values(propertyListeners), propertyListeners_1_1 = propertyListeners_1.next(); !propertyListeners_1_1.done; propertyListeners_1_1 = propertyListeners_1.next()) {
                var propertyListener = propertyListeners_1_1.value;
                propertyListener();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (propertyListeners_1_1 && !propertyListeners_1_1.done && (_c = propertyListeners_1.return)) _c.call(propertyListeners_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var _k = __values(this._callbacks), _l = _k.next(); !_l.done; _l = _k.next()) {
                var callback = _l.value;
                this.set(callback(this.state, this.dispatchers, stateChange, reducerName, reducerArgs));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_l && !_l.done && (_d = _k.return)) _d.call(_k);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return stateChange;
    };
    GlobalStateManager.prototype.getDispatcher = function (name) {
        if (this.hasDispatcher(name)) {
            return this._dispatchers[name];
        }
        throw new Error("Cannot return unknown ReactN reducer `" + name + "`.");
    };
    GlobalStateManager.prototype.hasCallback = function (callback) {
        return this._callbacks.has(callback);
    };
    GlobalStateManager.prototype.hasMiddleware = function (middleware) {
        return this._middlewares.has(middleware);
    };
    GlobalStateManager.prototype.hasPropertyListener = function (pl) {
        var e_6, _a, e_7, _b;
        try {
            for (var _c = __values(this.propertyListeners.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var propertyListeners = _d.value;
                try {
                    for (var propertyListeners_2 = (e_7 = void 0, __values(propertyListeners)), propertyListeners_2_1 = propertyListeners_2.next(); !propertyListeners_2_1.done; propertyListeners_2_1 = propertyListeners_2.next()) {
                        var propertyListener = propertyListeners_2_1.value;
                        if (propertyListener === pl) {
                            return true;
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (propertyListeners_2_1 && !propertyListeners_2_1.done && (_b = propertyListeners_2.return)) _b.call(propertyListeners_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return false;
    };
    GlobalStateManager.prototype.hasDispatcher = function (name) {
        return Object.prototype.hasOwnProperty.call(this._dispatchers, name);
    };
    Object.defineProperty(GlobalStateManager.prototype, "queue", {
        get: function () {
            return this._queue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalStateManager.prototype, "propertyListeners", {
        get: function () {
            return this._propertyListeners;
        },
        enumerable: true,
        configurable: true
    });
    GlobalStateManager.prototype.removeCallback = function (callback) {
        return this._callbacks.delete(callback);
    };
    GlobalStateManager.prototype.removeDispatcher = function (name) {
        if (this.hasDispatcher(name)) {
            delete this._dispatchers[name];
            return true;
        }
        return false;
    };
    GlobalStateManager.prototype.removeMiddleware = function (middleware) {
        return this._middlewares.delete(middleware);
    };
    GlobalStateManager.prototype.removePropertyListener = function (propertyListener) {
        var e_8, _a;
        var removed = false;
        try {
            for (var _b = __values(this.propertyListeners.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propertyListeners = _c.value;
                if (propertyListeners.delete(propertyListener)) {
                    removed = true;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return removed;
    };
    GlobalStateManager.prototype.reset = function () {
        this._callbacks.clear();
        this._dispatchers = Object.create(null);
        this._middlewares.clear();
        this._propertyListeners.clear();
        this._queue.clear();
        this.addReducers(this._initialReducers);
        this._state = copyObject(this._initialState);
    };
    GlobalStateManager.prototype.set = function (newGlobalState, reducerName, reducerArgs) {
        if (newGlobalState === null ||
            typeof newGlobalState === 'undefined') {
            return Promise.resolve(Object.create(null));
        }
        if (newGlobalState instanceof Promise) {
            return this.setPromise(newGlobalState, reducerName, reducerArgs);
        }
        if (typeof newGlobalState === 'function') {
            return this.setFunction(newGlobalState, reducerName, reducerArgs);
        }
        if (typeof newGlobalState === 'object') {
            return this.setObject(newGlobalState, reducerName, reducerArgs);
        }
        throw exports.INVALID_NEW_GLOBAL_STATE;
    };
    GlobalStateManager.prototype.setFunction = function (f, reducerName, reducerArgs) {
        return this.set(f(this.state, reducerName, reducerArgs), reducerName, reducerArgs);
    };
    GlobalStateManager.prototype.setObject = function (obj, reducerName, reducerArgs) {
        var e_9, _a;
        var properties = Object.keys(obj);
        try {
            for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var property = properties_1_1.value;
                var value = obj[property];
                this.enqueue(property, value);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        var stateChange = this.flush(reducerName, reducerArgs);
        return Promise.resolve(stateChange);
    };
    GlobalStateManager.prototype.setPromise = function (promise, reducerName, reducerArgs) {
        var _this = this;
        return promise
            .then(function (result) {
            return _this.set(result, reducerName, reducerArgs);
        });
    };
    GlobalStateManager.prototype.spyState = function (propertyListener) {
        var _this = this;
        return object_get_listener_1.default(this._state, function (property) {
            _this.addPropertyListener(property, propertyListener);
        });
    };
    Object.defineProperty(GlobalStateManager.prototype, "state", {
        get: function () {
            return copyObject(this._state);
        },
        enumerable: true,
        configurable: true
    });
    return GlobalStateManager;
}());
exports.default = GlobalStateManager;
;


/***/ }),

/***/ "./node_modules/reactn/build/index.js":
/*!********************************************!*\
  !*** ./node_modules/reactn/build/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var components_1 = __webpack_require__(/*! ./components */ "./node_modules/reactn/build/components.js");
var add_callback_1 = __webpack_require__(/*! ./add-callback */ "./node_modules/reactn/build/add-callback.js");
var add_reducer_1 = __webpack_require__(/*! ./add-reducer */ "./node_modules/reactn/build/add-reducer.js");
var add_reducers_1 = __webpack_require__(/*! ./add-reducers */ "./node_modules/reactn/build/add-reducers.js");
var create_provider_1 = __webpack_require__(/*! ./create-provider */ "./node_modules/reactn/build/create-provider.js");
var decorator_1 = __webpack_require__(/*! ./decorator */ "./node_modules/reactn/build/decorator.js");
var default_global_state_manager_1 = __webpack_require__(/*! ./default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
var get_dispatch_1 = __webpack_require__(/*! ./get-dispatch */ "./node_modules/reactn/build/get-dispatch.js");
var get_global_1 = __webpack_require__(/*! ./get-global */ "./node_modules/reactn/build/get-global.js");
var remove_callback_1 = __webpack_require__(/*! ./remove-callback */ "./node_modules/reactn/build/remove-callback.js");
var reset_global_1 = __webpack_require__(/*! ./reset-global */ "./node_modules/reactn/build/reset-global.js");
var set_global_1 = __webpack_require__(/*! ./set-global */ "./node_modules/reactn/build/set-global.js");
var use_dispatch_1 = __webpack_require__(/*! ./use-dispatch */ "./node_modules/reactn/build/use-dispatch.js");
var use_global_1 = __webpack_require__(/*! ./use-global */ "./node_modules/reactn/build/use-global.js");
var with_global_1 = __webpack_require__(/*! ./with-global */ "./node_modules/reactn/build/with-global.js");
var with_init_1 = __webpack_require__(/*! ./with-init */ "./node_modules/reactn/build/with-init.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
module.exports = Object.assign(decorator_1.default, React, {
    addCallback: add_callback_1.default.bind(null, default_global_state_manager_1.default),
    addReducer: add_reducer_1.default.bind(null, default_global_state_manager_1.default),
    addReducers: add_reducers_1.default.bind(null, default_global_state_manager_1.default),
    Component: components_1.ReactNComponent,
    createProvider: create_provider_1.default,
    default: decorator_1.default,
    getDispatch: get_dispatch_1.default.bind(null, default_global_state_manager_1.default),
    getGlobal: get_global_1.default.bind(null, default_global_state_manager_1.default),
    PureComponent: components_1.ReactNPureComponent,
    removeCallback: remove_callback_1.default.bind(null, default_global_state_manager_1.default),
    resetGlobal: reset_global_1.default.bind(null, default_global_state_manager_1.default),
    setGlobal: set_global_1.default.bind(null, default_global_state_manager_1.default),
    useDispatch: use_dispatch_1.default.bind(null, null),
    useGlobal: use_global_1.default.bind(null, null),
    withGlobal: with_global_1.default.bind(null, null),
    withInit: with_init_1.default,
});


/***/ }),

/***/ "./node_modules/reactn/build/methods.js":
/*!**********************************************!*\
  !*** ./node_modules/reactn/build/methods.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var set_global_1 = __webpack_require__(/*! ./set-global */ "./node_modules/reactn/build/set-global.js");
var get_global_state_manager_1 = __webpack_require__(/*! ./utils/get-global-state-manager */ "./node_modules/reactn/build/utils/get-global-state-manager.js");
function ReactNComponentWillUnmount(that) {
    get_global_state_manager_1.default().removePropertyListener(that._globalCallback);
}
exports.ReactNComponentWillUnmount = ReactNComponentWillUnmount;
function ReactNComponentWillUpdate(that) {
    get_global_state_manager_1.default().removePropertyListener(that._globalCallback);
}
exports.ReactNComponentWillUpdate = ReactNComponentWillUpdate;
function ReactNDispatch() {
    return get_global_state_manager_1.default().dispatchers;
}
exports.ReactNDispatch = ReactNDispatch;
function ReactNGlobalCallback(that) {
    that.updater.enqueueForceUpdate(that, null, 'forceUpdate');
}
exports.ReactNGlobalCallback = ReactNGlobalCallback;
function ReactNGlobal(that, globalStateManager) {
    if (globalStateManager === void 0) { globalStateManager = get_global_state_manager_1.default(); }
    return globalStateManager.spyState(that._globalCallback);
}
exports.ReactNGlobal = ReactNGlobal;
function ReactNSetGlobal(newGlobalState, callback, _sync, globalStateManager) {
    if (globalStateManager === void 0) { globalStateManager = get_global_state_manager_1.default(); }
    return set_global_1.default(globalStateManager, newGlobalState, callback);
}
exports.ReactNSetGlobal = ReactNSetGlobal;


/***/ }),

/***/ "./node_modules/reactn/build/remove-callback.js":
/*!******************************************************!*\
  !*** ./node_modules/reactn/build/remove-callback.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _removeCallback(globalStateManager, callback) {
    return globalStateManager.removeCallback(callback);
}
exports.default = _removeCallback;
;


/***/ }),

/***/ "./node_modules/reactn/build/reset-global.js":
/*!***************************************************!*\
  !*** ./node_modules/reactn/build/reset-global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _resetGlobal(globalStateManager) {
    return globalStateManager.reset();
}
exports.default = _resetGlobal;
;


/***/ }),

/***/ "./node_modules/reactn/build/set-global.js":
/*!*************************************************!*\
  !*** ./node_modules/reactn/build/set-global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function _setGlobal(globalStateManager, newGlobalState, callback) {
    if (callback === void 0) { callback = null; }
    if (callback === null) {
        return globalStateManager.set(newGlobalState)
            .then(function () {
            return globalStateManager.state;
        });
    }
    return globalStateManager.set(newGlobalState)
        .then(function (stateChange) {
        return _setGlobal(globalStateManager, callback(globalStateManager.state, globalStateManager.dispatcherMap, stateChange));
    })
        .then(function () {
        return globalStateManager.state;
    });
}
exports.default = _setGlobal;
;


/***/ }),

/***/ "./node_modules/reactn/build/use-dispatch.js":
/*!***************************************************!*\
  !*** ./node_modules/reactn/build/use-dispatch.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var use_force_update_1 = __webpack_require__(/*! use-force-update */ "./node_modules/use-force-update/use-force-update.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/reactn/build/context.js");
var default_global_state_manager_1 = __webpack_require__(/*! ./default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
var is_property_reducer_1 = __webpack_require__(/*! ./utils/is-property-reducer */ "./node_modules/reactn/build/utils/is-property-reducer.js");
var react_hooks_error_1 = __webpack_require__(/*! ./utils/react-hooks-error */ "./node_modules/reactn/build/utils/react-hooks-error.js");
function _useDispatch(overrideGlobalStateManager, reducer, property) {
    if (!react_1.useContext) {
        throw react_hooks_error_1.default;
    }
    var forceUpdate = use_force_update_1.default();
    var globalStateManager = overrideGlobalStateManager ||
        react_1.useContext(context_1.default) ||
        default_global_state_manager_1.default;
    if (typeof reducer === 'undefined') {
        return globalStateManager.dispatcherMap;
    }
    if (typeof reducer === 'function') {
        if (is_property_reducer_1.default(reducer, property)) {
            var newReducer = function (global, _dispatch) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var newGlobalState = Object.create(null);
                newGlobalState[property] = reducer.apply(void 0, __spread([global[property]], args));
                return newGlobalState;
            };
            var propertyDispatcher_1 = (globalStateManager.createDispatcher(newReducer, reducer.name));
            Object.defineProperty(propertyDispatcher_1, 0, {
                configurable: true,
                enumerable: true,
                get: function () {
                    globalStateManager.addPropertyListener(property, forceUpdate);
                    return globalStateManager.state[property];
                },
            });
            propertyDispatcher_1[1] = propertyDispatcher_1;
            var propertyDispatcherSlice = function (start, end) {
                var values = [propertyDispatcher_1[0], propertyDispatcher_1[1]];
                return values.slice.apply(values, [start, end]);
            };
            propertyDispatcher_1.slice = propertyDispatcherSlice;
            var propertyDispatcherIterator = function () {
                var _a;
                var index = 0;
                var propertyDispatcherIteratorNext = function () {
                    if (index < 2) {
                        return {
                            done: false,
                            value: propertyDispatcher_1[index++],
                        };
                    }
                    index = 0;
                    return {
                        done: true,
                        value: undefined,
                    };
                };
                return _a = {},
                    _a[Symbol.iterator] = propertyDispatcher_1[Symbol.iterator],
                    _a.next = propertyDispatcherIteratorNext,
                    _a;
            };
            propertyDispatcher_1[Symbol.iterator] = propertyDispatcherIterator;
            return propertyDispatcher_1;
        }
        return globalStateManager.createDispatcher(reducer);
    }
    return globalStateManager.getDispatcher(reducer);
}
exports.default = _useDispatch;
;


/***/ }),

/***/ "./node_modules/reactn/build/use-global.js":
/*!*************************************************!*\
  !*** ./node_modules/reactn/build/use-global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var use_force_update_1 = __webpack_require__(/*! use-force-update */ "./node_modules/use-force-update/use-force-update.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/reactn/build/context.js");
var default_global_state_manager_1 = __webpack_require__(/*! ./default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
var set_global_1 = __webpack_require__(/*! ./set-global */ "./node_modules/reactn/build/set-global.js");
var react_hooks_error_1 = __webpack_require__(/*! ./utils/react-hooks-error */ "./node_modules/reactn/build/utils/react-hooks-error.js");
function _useGlobal(overrideGlobalStateManager, property) {
    if (!react_1.useContext) {
        throw react_hooks_error_1.default;
    }
    var globalStateManager = overrideGlobalStateManager ||
        react_1.useContext(context_1.default) ||
        default_global_state_manager_1.default;
    var forceUpdate = use_force_update_1.default();
    var removeForceUpdateListener = function () {
        globalStateManager.removePropertyListener(forceUpdate);
    };
    if (typeof property === 'undefined') {
        react_1.useEffect(function () { return removeForceUpdateListener; });
        var globalStateSetter = react_1.useCallback(function (newGlobalState, callback) {
            if (callback === void 0) { callback = null; }
            return set_global_1.default(globalStateManager, newGlobalState, callback);
        }, []);
        return [
            globalStateManager.spyState(forceUpdate),
            globalStateSetter,
        ];
    }
    react_1.useEffect(function () {
        globalStateManager.addPropertyListener(property, forceUpdate);
        return removeForceUpdateListener;
    });
    var globalPropertySetter = react_1.useCallback(function (value, callback) {
        if (callback === void 0) { callback = null; }
        var newGlobalState = Object.create(null);
        newGlobalState[property] = value;
        return set_global_1.default(globalStateManager, newGlobalState, callback);
    }, []);
    return [
        globalStateManager.state[property],
        globalPropertySetter,
    ];
}
exports.default = _useGlobal;
;


/***/ }),

/***/ "./node_modules/reactn/build/utils/bind-lifecycle-methods.js":
/*!*******************************************************************!*\
  !*** ./node_modules/reactn/build/utils/bind-lifecycle-methods.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = __webpack_require__(/*! ../methods */ "./node_modules/reactn/build/methods.js");
var component_will_unmount_1 = __webpack_require__(/*! ./component-will-unmount */ "./node_modules/reactn/build/utils/component-will-unmount.js");
var component_will_update_1 = __webpack_require__(/*! ./component-will-update */ "./node_modules/reactn/build/utils/component-will-update.js");
function bindLifecycleMethods(that) {
    if (!component_will_unmount_1.componentWillUnmountPrototype(that)) {
        that.componentWillUnmount = function () {
            methods_1.ReactNComponentWillUnmount(that);
        };
    }
    if (!component_will_update_1.componentWillUpdatePrototype(that)) {
        that.componentWillUpdate = function () {
            methods_1.ReactNComponentWillUpdate(that);
        };
    }
}
exports.default = bindLifecycleMethods;
;


/***/ }),

/***/ "./node_modules/reactn/build/utils/component-will-unmount.js":
/*!*******************************************************************!*\
  !*** ./node_modules/reactn/build/utils/component-will-unmount.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = __webpack_require__(/*! ../methods */ "./node_modules/reactn/build/methods.js");
exports.componentWillUnmountPrototype = function (that) {
    var proto = Object.getPrototypeOf(that);
    if (Object.prototype.hasOwnProperty.call(proto, 'componentWillUnmount')) {
        that.componentWillUnmount = function () {
            methods_1.ReactNComponentWillUnmount(that);
            proto.componentWillUnmount.bind(that)();
        };
        return true;
    }
    return false;
};


/***/ }),

/***/ "./node_modules/reactn/build/utils/component-will-update.js":
/*!******************************************************************!*\
  !*** ./node_modules/reactn/build/utils/component-will-update.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = __webpack_require__(/*! ../methods */ "./node_modules/reactn/build/methods.js");
exports.componentWillUpdatePrototype = function (that) {
    var proto = Object.getPrototypeOf(that);
    if (Object.prototype.hasOwnProperty.call(proto, 'componentWillUpdate')) {
        that.componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            methods_1.ReactNComponentWillUpdate(that);
            proto.componentWillUpdate.bind(that).apply(void 0, __spread(args));
        };
        return true;
    }
    return false;
};


/***/ }),

/***/ "./node_modules/reactn/build/utils/get-global-state-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/reactn/build/utils/get-global-state-manager.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/reactn/build/context.js");
var default_global_state_manager_1 = __webpack_require__(/*! ../default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
function getGlobalStateManager() {
    return (context_1.default &&
        (context_1.default._currentValue2 ||
            context_1.default._currentValue)) ||
        default_global_state_manager_1.default;
}
exports.default = getGlobalStateManager;


/***/ }),

/***/ "./node_modules/reactn/build/utils/is-property-reducer.js":
/*!****************************************************************!*\
  !*** ./node_modules/reactn/build/utils/is-property-reducer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPropertyReducer(_reducer, property) {
    return typeof property !== 'undefined';
}
exports.default = isPropertyReducer;
;


/***/ }),

/***/ "./node_modules/reactn/build/utils/object-get-listener.js":
/*!****************************************************************!*\
  !*** ./node_modules/reactn/build/utils/object-get-listener.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function objectGetListener(obj, listener) {
    return Object.keys(obj).reduce(function (accumulator, key) {
        Object.defineProperty(accumulator, key, {
            configurable: false,
            enumerable: true,
            get: function () {
                listener(key);
                return obj[key];
            }
        });
        return accumulator;
    }, Object.create(null));
}
exports.default = objectGetListener;
;


/***/ }),

/***/ "./node_modules/reactn/build/utils/react-context-error.js":
/*!****************************************************************!*\
  !*** ./node_modules/reactn/build/utils/react-context-error.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Error('The installed version of React does not support Context. ' +
    'Upgrade to React v16.3.0 or later.');


/***/ }),

/***/ "./node_modules/reactn/build/utils/react-hooks-error.js":
/*!**************************************************************!*\
  !*** ./node_modules/reactn/build/utils/react-hooks-error.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Error('The installed version of React does not support Hooks. ' +
    'Upgrade to React v16.8.0 or later.');


/***/ }),

/***/ "./node_modules/reactn/build/with-global.js":
/*!**************************************************!*\
  !*** ./node_modules/reactn/build/with-global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var components_1 = __webpack_require__(/*! ./components */ "./node_modules/reactn/build/components.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/reactn/build/context.js");
var global_state_manager_1 = __webpack_require__(/*! ./global-state-manager */ "./node_modules/reactn/build/global-state-manager.js");
var methods_1 = __webpack_require__(/*! ./methods */ "./node_modules/reactn/build/methods.js");
var get_global_state_manager_1 = __webpack_require__(/*! ./utils/get-global-state-manager */ "./node_modules/reactn/build/utils/get-global-state-manager.js");
var componentName = function (Component) {
    return typeof Component === 'string' ?
        Component :
        Component.displayName ||
            Component.name;
};
var isComponentDidMount = false;
var isComponentDidUpdate = false;
var isSetGlobalCallback = false;
function _withGlobal(globalStateManager, getter, setter) {
    if (globalStateManager === void 0) { globalStateManager = null; }
    if (getter === void 0) { getter = function (global) { return global; }; }
    if (setter === void 0) { setter = function () { return null; }; }
    return function ReactNWithGlobal(Component) {
        var _a;
        return _a = (function (_super) {
                __extends(ReactNWithGlobalHoc, _super);
                function ReactNWithGlobalHoc() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.setGlobal = function (newGlobalState, callback) {
                        if (callback === void 0) { callback = null; }
                        return methods_1.ReactNSetGlobal(newGlobalState, callback, !isComponentDidMount &&
                            !isComponentDidUpdate &&
                            !isSetGlobalCallback, _this.globalStateManager);
                    };
                    return _this;
                }
                Object.defineProperty(ReactNWithGlobalHoc.prototype, "dispatch", {
                    get: function () {
                        return this.globalStateManager.dispatchers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReactNWithGlobalHoc.prototype, "global", {
                    get: function () {
                        return methods_1.ReactNGlobal(this, this.globalStateManager);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReactNWithGlobalHoc.prototype, "globalStateManager", {
                    get: function () {
                        if (globalStateManager) {
                            return globalStateManager;
                        }
                        if (this.context instanceof global_state_manager_1.default) {
                            return this.context;
                        }
                        return get_global_state_manager_1.default();
                    },
                    enumerable: true,
                    configurable: true
                });
                ReactNWithGlobalHoc.prototype.render = function () {
                    var lowerOrderProps = __assign({}, this.props, getter(this.global, this.dispatch, this.props), setter(this.setGlobal, this.dispatch, this.props));
                    return React.createElement(Component, __assign({}, lowerOrderProps));
                };
                return ReactNWithGlobalHoc;
            }(components_1.ReactNComponent)),
            _a.contextType = context_1.default,
            _a.displayName = componentName(Component) + "-ReactN",
            _a;
    };
}
exports.default = _withGlobal;
;


/***/ }),

/***/ "./node_modules/reactn/build/with-init.js":
/*!************************************************!*\
  !*** ./node_modules/reactn/build/with-init.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var add_reducers_1 = __webpack_require__(/*! ./add-reducers */ "./node_modules/reactn/build/add-reducers.js");
var components_1 = __webpack_require__(/*! ./components */ "./node_modules/reactn/build/components.js");
var default_global_state_manager_1 = __webpack_require__(/*! ./default-global-state-manager */ "./node_modules/reactn/build/default-global-state-manager.js");
function _withInit(initialGlobal, initialReducers) {
    if (initialGlobal === void 0) { initialGlobal = null; }
    if (initialReducers === void 0) { initialReducers = null; }
    return function ReactNWithInit(Component, FallbackComponent) {
        if (FallbackComponent === void 0) { FallbackComponent = null; }
        return (function (_super) {
            __extends(ReactNWithInitHoc, _super);
            function ReactNWithInitHoc() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    global: !Boolean(initialGlobal),
                    reducers: !Boolean(initialReducers),
                };
                return _this;
            }
            ReactNWithInitHoc.prototype.componentDidMount = function () {
                var _this = this;
                if (initialGlobal) {
                    this.setGlobal(initialGlobal, function () {
                        _this.setState({ global: true });
                    });
                }
                if (initialReducers) {
                    add_reducers_1.default(default_global_state_manager_1.default, initialReducers);
                    this.setState({ reducers: true });
                }
            };
            ReactNWithInitHoc.prototype.render = function () {
                if (!this.state.global ||
                    !this.state.reducers) {
                    if (FallbackComponent) {
                        return React.createElement(FallbackComponent, __assign({}, this.props));
                    }
                    return null;
                }
                return React.createElement(Component, __assign({}, this.props));
            };
            return ReactNWithInitHoc;
        }(components_1.ReactNComponent));
    };
}
exports.default = _withInit;


/***/ }),

/***/ "./node_modules/use-force-update/use-force-update.js":
/*!***********************************************************!*\
  !*** ./node_modules/use-force-update/use-force-update.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useForceUpdate() {
    var _a = __read(react_1.useState(Object.create(null)), 2), dispatch = _a[1];
    var memoizedDispatch = react_1.useCallback(function () {
        dispatch(Object.create(null));
    }, [dispatch]);
    return memoizedDispatch;
}
exports.default = useForceUpdate;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/build/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rootReducer */ "./rootReducer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_IntroContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/IntroContainer */ "./components/IntroContainer.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_22__);







var _jsxFileName = "/Users/philipppolder/Dropbox/Projekte/Kate Jackling/Local Root/kate-jackling/web/pages/index.js";
var __jsx = reactn__WEBPACK_IMPORTED_MODULE_23___default.a.createElement;
















var middleware = [redux_logger__WEBPACK_IMPORTED_MODULE_14___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_15__["default"]];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_12__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_13__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_12__["applyMiddleware"].apply(void 0, middleware)));
Object(reactn__WEBPACK_IMPORTED_MODULE_23__["setGlobal"])({
  navOpen: false,
  viewerOpen: false,
  viewerContent: null,
  viewerID: null,
  slideIndex: 0
});

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var about = this.props.about;
      return __jsx(reactn__WEBPACK_IMPORTED_MODULE_23___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "My page title"), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_IntroContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_20__["default"], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      __webpack_require__(/*! ../scripts/document.js */ "./scripts/document.js");
    }
  }]);

  return Index;
}(reactn__WEBPACK_IMPORTED_MODULE_23___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_8___default.a.fetch("*[_id == \"about\"][0]");

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            about: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/***/ })

})
//# sourceMappingURL=index.js.5f81e0ecc67814d52bc4.hot-update.js.map