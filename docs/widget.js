(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(':root{--pw-navy: #1B3A5C;--pw-green: #008A26;--pw-green-hover: #007020;--pw-light-blue: #EBF3FB;--pw-border: #D8DDE3;--pw-border-selected: #004A8F;--pw-bg-card: #FFFFFF;--pw-bg-card-hover: #F7F9FB;--pw-gray-text: #8899AA;--pw-disabled-bg: #EAECEF;--pw-disabled-text: #A0A8B2;--pw-radius-card: 14px;--pw-radius-btn: 50px;--pw-radius-input: 12px;--pw-transition: .2s ease}.pico-widget{position:relative;width:100%;height:500px;display:flex;flex-direction:column;font-family:inherit;color:var(--pw-navy);background:var(--pw-bg-card);border-radius:16px;border:2px solid var(--pw-border-selected);box-sizing:border-box;overflow:hidden}.pico-widget *,.pico-widget *:before,.pico-widget *:after{box-sizing:border-box}.pico-hz-embed-hidden{position:absolute;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none}.pico-widget-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 0;flex-shrink:0;min-height:48px}.pico-header-left,.pico-header-right{width:40px;display:flex;align-items:center}.pico-header-right{justify-content:flex-end}.pico-header-center{flex:1;display:flex;justify-content:center}.pico-btn-icon{background:none;border:none;cursor:pointer;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:background var(--pw-transition)}.pico-btn-icon:hover{background:#1b3a5c12}.pico-progress{display:flex;align-items:center;gap:8px}.pico-progress-dot{width:10px;height:10px;border-radius:50%;background:var(--pw-border);transition:background var(--pw-transition)}.pico-progress-dot--done{background:var(--pw-navy)}.pico-progress-pill{width:36px;height:10px;border-radius:5px;background:var(--pw-navy)}.pico-widget-body{flex:1;overflow-y:auto;padding:0 24px 24px;display:flex;flex-direction:column}.pico-step{flex:1;display:flex;flex-direction:column}.pico-step-title{font-size:18px;font-weight:700;text-align:center;margin:16px 0 4px;line-height:1.35;color:var(--pw-navy)}.pico-step-subtitle{text-align:center;color:#4b6076;font-size:13px;font-weight:500;margin:0 0 12px}.pico-step-center{align-items:center;justify-content:center;text-align:center;padding:40px 16px}.pico-options{display:flex;flex-direction:column;gap:12px;margin-bottom:auto}.pico-options--spaced{margin-top:16px}.pico-option-card{display:flex;align-items:center;gap:12px;width:100%;background:var(--pw-bg-card);border:1.5px solid var(--pw-border);border-radius:var(--pw-radius-card);padding:14px 16px;cursor:pointer;transition:all var(--pw-transition);font-size:14px;font-weight:500;color:var(--pw-navy);text-align:left;font-family:inherit}.pico-option-card:hover{background:var(--pw-bg-card-hover);border-color:#b8c4d0}.pico-option-card--selected,.pico-option-card--selected:hover{background:var(--pw-light-blue);border-color:var(--pw-border-selected)}.pico-option-check,.pico-option-icon{flex-shrink:0;display:flex;align-items:center}.pico-option-label{flex:1}.pico-btn-primary{width:100%;padding:12px 20px;border:none;border-radius:var(--pw-radius-btn);font-size:16px;font-weight:600;cursor:pointer;transition:all var(--pw-transition);background:var(--pw-disabled-bg);color:var(--pw-disabled-text);margin-top:16px;flex-shrink:0;font-family:inherit}.pico-btn-primary--active{background:var(--pw-green);color:#fff;cursor:pointer}.pico-btn-primary--active:hover{background:var(--pw-green-hover)}.pico-btn-primary:disabled{cursor:not-allowed}.pico-step-form{gap:0}.pico-step-form .pico-step-title{margin-bottom:10px}.pico-input-wrap{position:relative;margin-bottom:8px}.pico-input{width:100%;padding:12px 48px 12px 16px;border:1.5px solid var(--pw-border);border-radius:var(--pw-radius-input);font-size:14px;font-family:inherit;color:var(--pw-navy);background:#fff;outline:none;transition:border-color var(--pw-transition)}.pico-input::placeholder{color:var(--pw-gray-text)}.pico-input:focus{border-color:var(--pw-navy)}.pico-input-error{border-color:#c0392b!important}.pico-error-text{color:#c0392b;font-size:11px;margin:2px 0 0;font-weight:500;text-align:left;line-height:1.2}.pico-input-icon{position:absolute;right:14px;top:22px;transform:translateY(-50%);display:flex;align-items:center;pointer-events:none;opacity:.65}.pico-field-group{margin-bottom:12px}.pico-field-group--highlight{background:var(--pw-light-blue);border:1.5px solid #C4D8EE;border-radius:var(--pw-radius-input);padding:10px 10px 6px}.pico-field-group--highlight .pico-input-wrap{margin-bottom:6px}.pico-field-group--highlight .pico-input{border:1.5px solid #B8CCE0}.pico-field-hint{font-size:12px;color:var(--pw-gray-text);margin:0;text-align:center;line-height:1.4}.pico-two-col{display:flex;gap:10px}.pico-two-col .pico-input-wrap{flex:1}.pico-info-lines{display:flex;flex-direction:column;gap:4px;margin-bottom:6px}.pico-info-line{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--pw-gray-text)}.pico-info-line svg{flex-shrink:0;width:18px;height:18px;stroke:var(--pw-navy);opacity:.6}.pico-checkbox-label{display:flex;align-items:flex-start;gap:10px;cursor:pointer;margin-bottom:2px;font-size:12px;line-height:1.35;color:var(--pw-navy)}.pico-checkbox-label input[type=checkbox]{position:absolute;opacity:0;width:0;height:0}.pico-checkbox-custom{flex-shrink:0;width:20px;height:20px;border:1.5px solid var(--pw-border);border-radius:4px;background:#fff;display:flex;align-items:center;justify-content:center;transition:all var(--pw-transition);margin-top:1px}.pico-checkbox-label input[type=checkbox]:checked+.pico-checkbox-custom{background:var(--pw-navy);border-color:var(--pw-navy)}.pico-checkbox-label input[type=checkbox]:checked+.pico-checkbox-custom:after{content:"";display:block;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-2px}.pico-checkbox-text{flex:1}.pico-required{color:#c0392b;font-weight:700}@media (max-width: 480px){.pico-widget{height:550px;border-radius:12px}.pico-widget-body{padding:0 16px 16px}.pico-step-title{font-size:17px}.pico-option-card{padding:13px 14px;font-size:14px}.pico-btn-primary{padding:14px 20px;font-size:16px}.pico-two-col{flex-direction:column;gap:0}}.pac-container{border-radius:10px;border:1px solid var(--pw-border);box-shadow:0 4px 16px #1b3a5c1f;font-family:inherit;z-index:99999}.pac-item{padding:8px 14px;font-size:14px;color:var(--pw-navy);cursor:pointer}.pac-item:hover{background:var(--pw-light-blue)}.pac-icon{display:none}.pac-item-query{color:var(--pw-navy);font-weight:600}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function rk(F) {
  return F && F.__esModule && Object.prototype.hasOwnProperty.call(F, "default") ? F.default : F;
}
var p0 = { exports: {} }, Kp = {}, v0 = { exports: {} }, _t = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ak() {
  if (ZR) return _t;
  ZR = 1;
  var F = Symbol.for("react.element"), X = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), ut = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), $e = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), et = Symbol.for("react.suspense"), we = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), be = Symbol.iterator;
  function te(k) {
    return k === null || typeof k != "object" ? null : (k = be && k[be] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, ge = {};
  function Ne(k, Y, Me) {
    this.props = k, this.context = Y, this.refs = ge, this.updater = Me || ie;
  }
  Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(k, Y) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, Y, "setState");
  }, Ne.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function yt() {
  }
  yt.prototype = Ne.prototype;
  function Mt(k, Y, Me) {
    this.props = k, this.context = Y, this.refs = ge, this.updater = Me || ie;
  }
  var Ve = Mt.prototype = new yt();
  Ve.constructor = Mt, Z(Ve, Ne.prototype), Ve.isPureReactComponent = !0;
  var Ee = Array.isArray, ot = Object.prototype.hasOwnProperty, pe = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(k, Y, Me) {
    var Qe, Ke = {}, ht = null, kt = null;
    if (Y != null) for (Qe in Y.ref !== void 0 && (kt = Y.ref), Y.key !== void 0 && (ht = "" + Y.key), Y) ot.call(Y, Qe) && !Be.hasOwnProperty(Qe) && (Ke[Qe] = Y[Qe]);
    var tt = arguments.length - 2;
    if (tt === 1) Ke.children = Me;
    else if (1 < tt) {
      for (var wt = Array(tt), $t = 0; $t < tt; $t++) wt[$t] = arguments[$t + 2];
      Ke.children = wt;
    }
    if (k && k.defaultProps) for (Qe in tt = k.defaultProps, tt) Ke[Qe] === void 0 && (Ke[Qe] = tt[Qe]);
    return { $$typeof: F, type: k, key: ht, ref: kt, props: Ke, _owner: pe.current };
  }
  function ft(k, Y) {
    return { $$typeof: F, type: k.type, key: Y, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Ue(k) {
    return typeof k == "object" && k !== null && k.$$typeof === F;
  }
  function At(k) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Me) {
      return Y[Me];
    });
  }
  var zt = /\/+/g;
  function st(k, Y) {
    return typeof k == "object" && k !== null && k.key != null ? At("" + k.key) : Y.toString(36);
  }
  function Le(k, Y, Me, Qe, Ke) {
    var ht = typeof k;
    (ht === "undefined" || ht === "boolean") && (k = null);
    var kt = !1;
    if (k === null) kt = !0;
    else switch (ht) {
      case "string":
      case "number":
        kt = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case F:
          case X:
            kt = !0;
        }
    }
    if (kt) return kt = k, Ke = Ke(kt), k = Qe === "" ? "." + st(kt, 0) : Qe, Ee(Ke) ? (Me = "", k != null && (Me = k.replace(zt, "$&/") + "/"), Le(Ke, Y, Me, "", function($t) {
      return $t;
    })) : Ke != null && (Ue(Ke) && (Ke = ft(Ke, Me + (!Ke.key || kt && kt.key === Ke.key ? "" : ("" + Ke.key).replace(zt, "$&/") + "/") + k)), Y.push(Ke)), 1;
    if (kt = 0, Qe = Qe === "" ? "." : Qe + ":", Ee(k)) for (var tt = 0; tt < k.length; tt++) {
      ht = k[tt];
      var wt = Qe + st(ht, tt);
      kt += Le(ht, Y, Me, wt, Ke);
    }
    else if (wt = te(k), typeof wt == "function") for (k = wt.call(k), tt = 0; !(ht = k.next()).done; ) ht = ht.value, wt = Qe + st(ht, tt++), kt += Le(ht, Y, Me, wt, Ke);
    else if (ht === "object") throw Y = String(k), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    return kt;
  }
  function jt(k, Y, Me) {
    if (k == null) return k;
    var Qe = [], Ke = 0;
    return Le(k, Qe, "", "", function(ht) {
      return Y.call(Me, ht, Ke++);
    }), Qe;
  }
  function gt(k) {
    if (k._status === -1) {
      var Y = k._result;
      Y = Y(), Y.then(function(Me) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Me);
      }, function(Me) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Me);
      }), k._status === -1 && (k._status = 0, k._result = Y);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var vt = { current: null }, W = { transition: null }, Re = { ReactCurrentDispatcher: vt, ReactCurrentBatchConfig: W, ReactCurrentOwner: pe };
  function ue() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _t.Children = { map: jt, forEach: function(k, Y, Me) {
    jt(k, function() {
      Y.apply(this, arguments);
    }, Me);
  }, count: function(k) {
    var Y = 0;
    return jt(k, function() {
      Y++;
    }), Y;
  }, toArray: function(k) {
    return jt(k, function(Y) {
      return Y;
    }) || [];
  }, only: function(k) {
    if (!Ue(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, _t.Component = Ne, _t.Fragment = O, _t.Profiler = ut, _t.PureComponent = Mt, _t.StrictMode = Ae, _t.Suspense = et, _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, _t.act = ue, _t.cloneElement = function(k, Y, Me) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Qe = Z({}, k.props), Ke = k.key, ht = k.ref, kt = k._owner;
    if (Y != null) {
      if (Y.ref !== void 0 && (ht = Y.ref, kt = pe.current), Y.key !== void 0 && (Ke = "" + Y.key), k.type && k.type.defaultProps) var tt = k.type.defaultProps;
      for (wt in Y) ot.call(Y, wt) && !Be.hasOwnProperty(wt) && (Qe[wt] = Y[wt] === void 0 && tt !== void 0 ? tt[wt] : Y[wt]);
    }
    var wt = arguments.length - 2;
    if (wt === 1) Qe.children = Me;
    else if (1 < wt) {
      tt = Array(wt);
      for (var $t = 0; $t < wt; $t++) tt[$t] = arguments[$t + 2];
      Qe.children = tt;
    }
    return { $$typeof: F, type: k.type, key: Ke, ref: ht, props: Qe, _owner: kt };
  }, _t.createContext = function(k) {
    return k = { $$typeof: $e, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: Je, _context: k }, k.Consumer = k;
  }, _t.createElement = Ie, _t.createFactory = function(k) {
    var Y = Ie.bind(null, k);
    return Y.type = k, Y;
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, _t.isValidElement = Ue, _t.lazy = function(k) {
    return { $$typeof: ae, _payload: { _status: -1, _result: k }, _init: gt };
  }, _t.memo = function(k, Y) {
    return { $$typeof: we, type: k, compare: Y === void 0 ? null : Y };
  }, _t.startTransition = function(k) {
    var Y = W.transition;
    W.transition = {};
    try {
      k();
    } finally {
      W.transition = Y;
    }
  }, _t.unstable_act = ue, _t.useCallback = function(k, Y) {
    return vt.current.useCallback(k, Y);
  }, _t.useContext = function(k) {
    return vt.current.useContext(k);
  }, _t.useDebugValue = function() {
  }, _t.useDeferredValue = function(k) {
    return vt.current.useDeferredValue(k);
  }, _t.useEffect = function(k, Y) {
    return vt.current.useEffect(k, Y);
  }, _t.useId = function() {
    return vt.current.useId();
  }, _t.useImperativeHandle = function(k, Y, Me) {
    return vt.current.useImperativeHandle(k, Y, Me);
  }, _t.useInsertionEffect = function(k, Y) {
    return vt.current.useInsertionEffect(k, Y);
  }, _t.useLayoutEffect = function(k, Y) {
    return vt.current.useLayoutEffect(k, Y);
  }, _t.useMemo = function(k, Y) {
    return vt.current.useMemo(k, Y);
  }, _t.useReducer = function(k, Y, Me) {
    return vt.current.useReducer(k, Y, Me);
  }, _t.useRef = function(k) {
    return vt.current.useRef(k);
  }, _t.useState = function(k) {
    return vt.current.useState(k);
  }, _t.useSyncExternalStore = function(k, Y, Me) {
    return vt.current.useSyncExternalStore(k, Y, Me);
  }, _t.useTransition = function() {
    return vt.current.useTransition();
  }, _t.version = "18.3.1", _t;
}
var Jp = { exports: {} };
Jp.exports;
var JR;
function ik() {
  return JR || (JR = 1, function(F, X) {
    var O = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    O.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ae = "18.3.1", ut = Symbol.for("react.element"), Je = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), we = Symbol.for("react.provider"), ae = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), Ne = Symbol.for("react.offscreen"), yt = Symbol.iterator, Mt = "@@iterator";
      function Ve(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = yt && h[yt] || h[Mt];
        return typeof C == "function" ? C : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ot = {
        transition: null
      }, pe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, ft = null;
      function Ue(h) {
        ft = h;
      }
      Ie.setExtraStackFrame = function(h) {
        ft = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        ft && (h += ft);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var At = !1, zt = !1, st = !1, Le = !1, jt = !1, gt = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: ot,
        ReactCurrentOwner: Be
      };
      gt.ReactDebugCurrentFrame = Ie, gt.ReactCurrentActQueue = pe;
      function vt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          Re("warn", h, z);
        }
      }
      function W(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          Re("error", h, z);
        }
      }
      function Re(h, C, z) {
        {
          var H = gt.ReactDebugCurrentFrame, ee = H.getStackAddendum();
          ee !== "" && (C += "%s", z = z.concat([ee]));
          var Ce = z.map(function(ve) {
            return String(ve);
          });
          Ce.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ce);
        }
      }
      var ue = {};
      function k(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", ee = H + "." + C;
          if (ue[ee])
            return;
          W("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), ue[ee] = !0;
        }
      }
      var Y = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          k(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, H) {
          k(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, H) {
          k(h, "setState");
        }
      }, Me = Object.assign, Qe = {};
      Object.freeze(Qe);
      function Ke(h, C, z) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = z || Y;
      }
      Ke.prototype.isReactComponent = {}, Ke.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ke.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, kt = function(h, C) {
          Object.defineProperty(Ke.prototype, h, {
            get: function() {
              vt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var tt in ht)
          ht.hasOwnProperty(tt) && kt(tt, ht[tt]);
      }
      function wt() {
      }
      wt.prototype = Ke.prototype;
      function $t(h, C, z) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = z || Y;
      }
      var Ln = $t.prototype = new wt();
      Ln.constructor = $t, Me(Ln, Ke.prototype), Ln.isPureReactComponent = !0;
      function qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function Mn(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Bn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function da(h) {
        if (Bn(h))
          return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), zn(h);
      }
      function Ga(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var ee = C.displayName || C.name || "";
        return ee !== "" ? z + "(" + ee + ")" : z;
      }
      function Or(h) {
        return h.displayName || "Context";
      }
      function In(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case $e:
            return "Fragment";
          case Je:
            return "Portal";
          case et:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case ie:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ae:
              var C = h;
              return Or(C) + ".Consumer";
            case we:
              var z = h;
              return Or(z._context) + ".Provider";
            case be:
              return Ga(h, h.render, "ForwardRef");
            case Z:
              var H = h.displayName || null;
              return H !== null ? H : In(h.type) || "Memo";
            case ge: {
              var ee = h, Ce = ee._payload, ve = ee._init;
              try {
                return In(ve(Ce));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, qa, jn;
      jn = {};
      function lr(h) {
        if (Kn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (Kn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ni(h, C) {
        var z = function() {
          Rr || (Rr = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function pa(h, C) {
        var z = function() {
          qa || (qa = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ne(h) {
        if (typeof h.ref == "string" && Be.current && h.__self && Be.current.stateNode !== h.__self) {
          var C = In(Be.current.type);
          jn[C] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), jn[C] = !0);
        }
      }
      var je = function(h, C, z, H, ee, Ce, ve) {
        var Ye = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ut,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: Ce
        };
        return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ye, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ye, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
      };
      function ct(h, C, z) {
        var H, ee = {}, Ce = null, ve = null, Ye = null, pt = null;
        if (C != null) {
          lr(C) && (ve = C.ref, ne(C)), $r(C) && (da(C.key), Ce = "" + C.key), Ye = C.__self === void 0 ? null : C.__self, pt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Kn.call(C, H) && !Xn.hasOwnProperty(H) && (ee[H] = C[H]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          ee.children = z;
        else if (It > 1) {
          for (var Zt = Array(It), Jt = 0; Jt < It; Jt++)
            Zt[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(Zt), ee.children = Zt;
        }
        if (h && h.defaultProps) {
          var it = h.defaultProps;
          for (H in it)
            ee[H] === void 0 && (ee[H] = it[H]);
        }
        if (Ce || ve) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ce && Ni(ee, rn), ve && pa(ee, rn);
        }
        return je(h, Ce, ve, Ye, pt, Be.current, ee);
      }
      function Vt(h, C) {
        var z = je(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function sn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, ee = Me({}, h.props), Ce = h.key, ve = h.ref, Ye = h._self, pt = h._source, It = h._owner;
        if (C != null) {
          lr(C) && (ve = C.ref, It = Be.current), $r(C) && (da(C.key), Ce = "" + C.key);
          var Zt;
          h.type && h.type.defaultProps && (Zt = h.type.defaultProps);
          for (H in C)
            Kn.call(C, H) && !Xn.hasOwnProperty(H) && (C[H] === void 0 && Zt !== void 0 ? ee[H] = Zt[H] : ee[H] = C[H]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          ee.children = z;
        else if (Jt > 1) {
          for (var it = Array(Jt), rn = 0; rn < Jt; rn++)
            it[rn] = arguments[rn + 2];
          ee.children = it;
        }
        return je(h.type, Ce, ve, Ye, pt, It, ee);
      }
      function cn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ut;
      }
      var fn = ".", Zn = ":";
      function un(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(ee) {
          return z[ee];
        });
        return "$" + H;
      }
      var Kt = !1, Pt = /\/+/g;
      function va(h) {
        return h.replace(Pt, "$&/");
      }
      function ka(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (da(h.key), un("" + h.key)) : C.toString(36);
      }
      function Da(h, C, z, H, ee) {
        var Ce = typeof h;
        (Ce === "undefined" || Ce === "boolean") && (h = null);
        var ve = !1;
        if (h === null)
          ve = !0;
        else
          switch (Ce) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ut:
                case Je:
                  ve = !0;
              }
          }
        if (ve) {
          var Ye = h, pt = ee(Ye), It = H === "" ? fn + ka(Ye, 0) : H;
          if (Mn(pt)) {
            var Zt = "";
            It != null && (Zt = va(It) + "/"), Da(pt, C, Zt, "", function(Xf) {
              return Xf;
            });
          } else pt != null && (cn(pt) && (pt.key && (!Ye || Ye.key !== pt.key) && da(pt.key), pt = Vt(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Ye || Ye.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              va("" + pt.key) + "/"
            ) : "") + It
          )), C.push(pt));
          return 1;
        }
        var Jt, it, rn = 0, wn = H === "" ? fn : H + Zn;
        if (Mn(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            Jt = h[Jl], it = wn + ka(Jt, Jl), rn += Da(Jt, C, z, it, ee);
        else {
          var Go = Ve(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && (Kt || vt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var eu = Go.call(Pi), qo, Kf = 0; !(qo = eu.next()).done; )
              Jt = qo.value, it = wn + ka(Jt, Kf++), rn += Da(Jt, C, z, it, ee);
          } else if (Ce === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function Li(h, C, z) {
        if (h == null)
          return h;
        var H = [], ee = 0;
        return Da(h, H, "", "", function(Ce) {
          return C.call(z, Ce, ee++);
        }), H;
      }
      function Wl(h) {
        var C = 0;
        return Li(h, function() {
          C++;
        }), C;
      }
      function $l(h, C, z) {
        Li(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Mi(h) {
        return Li(h, function(C) {
          return C;
        }) || [];
      }
      function Ql(h) {
        if (!cn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: ae,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: we,
          _context: C
        };
        var z = !1, H = !1, ee = !1;
        {
          var Ce = {
            $$typeof: ae,
            _context: C
          };
          Object.defineProperties(Ce, {
            Provider: {
              get: function() {
                return H || (H = !0, W("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, W("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                ee || (vt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), ee = !0);
              }
            }
          }), C.Consumer = Ce;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ha = -1, ur = 0, ma = 1, Qr = 2;
      function ci(h) {
        if (h._status === ha) {
          var C = h._result, z = C();
          if (z.then(function(Ce) {
            if (h._status === ur || h._status === ha) {
              var ve = h;
              ve._status = ma, ve._result = Ce;
            }
          }, function(Ce) {
            if (h._status === ur || h._status === ha) {
              var ve = h;
              ve._status = Qr, ve._result = Ce;
            }
          }), h._status === ha) {
            var H = h;
            H._status = ur, H._result = z;
          }
        }
        if (h._status === ma) {
          var ee = h._result;
          return ee === void 0 && W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ee), "default" in ee || W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ee), ee.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: ha,
          _result: h
        }, z = {
          $$typeof: ge,
          _payload: C,
          _init: ci
        };
        {
          var H, ee;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ce) {
                W("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ce, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(Ce) {
                W("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = Ce, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function zi(h) {
        h != null && h.$$typeof === Z ? W("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? W("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && W("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && W("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: be,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function $(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === $e || h === et || jt || h === S || h === te || h === ie || Le || h === Ne || At || zt || st || typeof h == "object" && h !== null && (h.$$typeof === ge || h.$$typeof === Z || h.$$typeof === we || h.$$typeof === ae || h.$$typeof === be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function oe(h, C) {
        $(h) || W("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(ee) {
              H = ee, !h.name && !h.displayName && (h.displayName = ee);
            }
          });
        }
        return z;
      }
      function ce() {
        var h = Ee.current;
        return h === null && W(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function St(h) {
        var C = ce();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? W("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && W("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Xe(h) {
        var C = ce();
        return C.useState(h);
      }
      function Ct(h, C, z) {
        var H = ce();
        return H.useReducer(h, C, z);
      }
      function dt(h) {
        var C = ce();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = ce();
        return z.useEffect(h, C);
      }
      function on(h, C) {
        var z = ce();
        return z.useInsertionEffect(h, C);
      }
      function dn(h, C) {
        var z = ce();
        return z.useLayoutEffect(h, C);
      }
      function xr(h, C) {
        var z = ce();
        return z.useCallback(h, C);
      }
      function Ka(h, C) {
        var z = ce();
        return z.useMemo(h, C);
      }
      function Bt(h, C, z) {
        var H = ce();
        return H.useImperativeHandle(h, C, z);
      }
      function hn(h, C) {
        {
          var z = ce();
          return z.useDebugValue(h, C);
        }
      }
      function rt() {
        var h = ce();
        return h.useTransition();
      }
      function di(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function ji() {
        var h = ce();
        return h.useId();
      }
      function ic(h, C, z) {
        var H = ce();
        return H.useSyncExternalStore(h, C, z);
      }
      var Ai = 0, ul, Gr, Bo, Nr, Io, lc, uc;
      function Ui() {
      }
      Ui.__reactDisabledLog = !0;
      function ol() {
        {
          if (Ai === 0) {
            ul = console.log, Gr = console.info, Bo = console.warn, Nr = console.error, Io = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ui,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function qr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Me({}, h, {
                value: ul
              }),
              info: Me({}, h, {
                value: Gr
              }),
              warn: Me({}, h, {
                value: Bo
              }),
              error: Me({}, h, {
                value: Nr
              }),
              group: Me({}, h, {
                value: Io
              }),
              groupCollapsed: Me({}, h, {
                value: lc
              }),
              groupEnd: Me({}, h, {
                value: uc
              })
            });
          }
          Ai < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = gt.ReactCurrentDispatcher, sl;
      function Fu(h, C, z) {
        {
          if (sl === void 0)
            try {
              throw Error();
            } catch (ee) {
              var H = ee.stack.trim().match(/\n( *(at )?)/);
              sl = H && H[1] || "";
            }
          return `
` + sl + h;
        }
      }
      var Fi = !1, Gl;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new ql();
      }
      function cl(h, C) {
        if (!h || Fi)
          return "";
        {
          var z = Gl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        Fi = !0;
        var ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ce;
        Ce = pi.current, pi.current = null, ol();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (wn) {
                H = wn;
              }
              Reflect.construct(h, [], ve);
            } else {
              try {
                ve.call();
              } catch (wn) {
                H = wn;
              }
              h.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wn) {
              H = wn;
            }
            h();
          }
        } catch (wn) {
          if (wn && H && typeof wn.stack == "string") {
            for (var Ye = wn.stack.split(`
`), pt = H.stack.split(`
`), It = Ye.length - 1, Zt = pt.length - 1; It >= 1 && Zt >= 0 && Ye[It] !== pt[Zt]; )
              Zt--;
            for (; It >= 1 && Zt >= 0; It--, Zt--)
              if (Ye[It] !== pt[Zt]) {
                if (It !== 1 || Zt !== 1)
                  do
                    if (It--, Zt--, Zt < 0 || Ye[It] !== pt[Zt]) {
                      var Jt = `
` + Ye[It].replace(" at new ", " at ");
                      return h.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, Jt), Jt;
                    }
                  while (It >= 1 && Zt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = Ce, qr(), Error.prepareStackTrace = ee;
        }
        var it = h ? h.displayName || h.name : "", rn = it ? Fu(it) : "";
        return typeof h == "function" && Gl.set(h, rn), rn;
      }
      function Yo(h, C, z) {
        return cl(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Dt(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return cl(h, Wo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case te:
            return Fu("Suspense");
          case ie:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case be:
              return Yo(h.render);
            case Z:
              return Dt(h.type, C, z);
            case ge: {
              var H = h, ee = H._payload, Ce = H._init;
              try {
                return Dt(Ce(ee), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var $o = {}, Hu = gt.ReactDebugCurrentFrame;
      function Ot(h) {
        if (h) {
          var C = h._owner, z = Dt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, z, H, ee) {
        {
          var Ce = Function.call.bind(Kn);
          for (var ve in h)
            if (Ce(h, ve)) {
              var Ye = void 0;
              try {
                if (typeof h[ve] != "function") {
                  var pt = Error((H || "React class") + ": " + z + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Ye = h[ve](C, ve, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                Ye = It;
              }
              Ye && !(Ye instanceof Error) && (Ot(ee), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, ve, typeof Ye), Ot(null)), Ye instanceof Error && !(Ye.message in $o) && ($o[Ye.message] = !0, Ot(ee), W("Failed %s type: %s", z, Ye.message), Ot(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = Dt(h.type, h._source, C ? C.type : null);
          Ue(z);
        } else
          Ue(null);
      }
      var Ge;
      Ge = !1;
      function Kl() {
        if (Be.current) {
          var h = In(Be.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Jn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Kr(h) {
        return h != null ? Jn(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Kl();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function En(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = hi(C);
          if (!Lr[z]) {
            Lr[z] = !0;
            var H = "";
            h && h._owner && h._owner !== Be.current && (H = " It was passed a child from " + In(h._owner.type) + "."), vi(h), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), vi(null);
          }
        }
      }
      function Xt(h, C) {
        if (typeof h == "object") {
          if (Mn(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              cn(H) && En(H, C);
            }
          else if (cn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ee = Ve(h);
            if (typeof ee == "function" && ee !== h.entries)
              for (var Ce = ee.call(h), ve; !(ve = Ce.next()).done; )
                cn(ve.value) && En(ve.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Z))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = In(C);
            oc(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Ge) {
            Ge = !0;
            var ee = In(C);
            W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              vi(h), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), W("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Tr(h, C, z) {
        var H = $(h);
        if (!H) {
          var ee = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Kr(C);
          Ce ? ee += Ce : ee += Kl();
          var ve;
          h === null ? ve = "null" : Mn(h) ? ve = "array" : h !== void 0 && h.$$typeof === ut ? (ve = "<" + (In(h.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof h, W("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, ee);
        }
        var Ye = ct.apply(this, arguments);
        if (Ye == null)
          return Ye;
        if (H)
          for (var pt = 2; pt < arguments.length; pt++)
            Xt(arguments[pt], h);
        return h === $e ? Oa(Ye) : Xa(Ye), Ye;
      }
      var Mr = !1;
      function qf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Mr || (Mr = !0, vt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return vt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Vu(h, C, z) {
        for (var H = sn.apply(this, arguments), ee = 2; ee < arguments.length; ee++)
          Xt(arguments[ee], H.type);
        return Xa(H), H;
      }
      function Xl(h, C) {
        var z = ot.transition;
        ot.transition = {};
        var H = ot.transition;
        ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ot.transition = z, z === null && H._updatedFibers) {
            var ee = H._updatedFibers.size;
            ee > 10 && vt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Pu = !1, Bu = null;
      function Zl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = F && F[C];
            Bu = z.call(F, "timers").setImmediate;
          } catch {
            Bu = function(ee) {
              Pu === !1 && (Pu = !0, typeof MessageChannel > "u" && W("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ce = new MessageChannel();
              Ce.port1.onmessage = ee, Ce.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Na = 0, La = !1;
      function fl(h) {
        {
          var C = Na;
          Na++, pe.current === null && (pe.current = []);
          var z = pe.isBatchingLegacy, H;
          try {
            if (pe.isBatchingLegacy = !0, H = h(), !z && pe.didScheduleLegacyUpdate) {
              var ee = pe.current;
              ee !== null && (pe.didScheduleLegacyUpdate = !1, Vi(ee));
            }
          } catch (it) {
            throw Hi(C), it;
          } finally {
            pe.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ce = H, ve = !1, Ye = {
              then: function(it, rn) {
                ve = !0, Ce.then(function(wn) {
                  Hi(C), Na === 0 ? Iu(wn, it, rn) : it(wn);
                }, function(wn) {
                  Hi(C), rn(wn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (La = !0, W("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ye;
          } else {
            var pt = H;
            if (Hi(C), Na === 0) {
              var It = pe.current;
              It !== null && (Vi(It), pe.current = null);
              var Zt = {
                then: function(it, rn) {
                  pe.current === null ? (pe.current = [], Iu(pt, it, rn)) : it(pt);
                }
              };
              return Zt;
            } else {
              var Jt = {
                then: function(it, rn) {
                  it(pt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Na - 1 && W("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function Iu(h, C, z) {
        {
          var H = pe.current;
          if (H !== null)
            try {
              Vi(H), Zl(function() {
                H.length === 0 ? (pe.current = null, C(h)) : Iu(h, C, z);
              });
            } catch (ee) {
              z(ee);
            }
          else
            C(h);
        }
      }
      var dl = !1;
      function Vi(h) {
        if (!dl) {
          dl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            dl = !1;
          }
        }
      }
      var Yu = Tr, Qo = Vu, Ma = qf, Wu = {
        map: Li,
        forEach: $l,
        count: Wl,
        toArray: Mi,
        only: Ql
      };
      X.Children = Wu, X.Component = Ke, X.Fragment = $e, X.Profiler = et, X.PureComponent = $t, X.StrictMode = S, X.Suspense = te, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gt, X.act = fl, X.cloneElement = Qo, X.createContext = si, X.createElement = Yu, X.createFactory = Ma, X.createRef = qn, X.forwardRef = zi, X.isValidElement = cn, X.lazy = fi, X.memo = oe, X.startTransition = Xl, X.unstable_act = fl, X.useCallback = xr, X.useContext = St, X.useDebugValue = hn, X.useDeferredValue = di, X.useEffect = Tn, X.useId = ji, X.useImperativeHandle = Bt, X.useInsertionEffect = on, X.useLayoutEffect = dn, X.useMemo = Ka, X.useReducer = Ct, X.useRef = dt, X.useState = Xe, X.useSyncExternalStore = ic, X.useTransition = rt, X.version = Ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var lk = {};
lk.NODE_ENV === "production" ? v0.exports = ak() : v0.exports = ik();
var Nn = v0.exports;
const uk = /* @__PURE__ */ rk(Nn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ex;
function ok() {
  if (ex) return Kp;
  ex = 1;
  var F = Nn, X = Symbol.for("react.element"), O = Symbol.for("react.fragment"), Ae = Object.prototype.hasOwnProperty, ut = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(S, et, we) {
    var ae, be = {}, te = null, ie = null;
    we !== void 0 && (te = "" + we), et.key !== void 0 && (te = "" + et.key), et.ref !== void 0 && (ie = et.ref);
    for (ae in et) Ae.call(et, ae) && !Je.hasOwnProperty(ae) && (be[ae] = et[ae]);
    if (S && S.defaultProps) for (ae in et = S.defaultProps, et) be[ae] === void 0 && (be[ae] = et[ae]);
    return { $$typeof: X, type: S, key: te, ref: ie, props: be, _owner: ut.current };
  }
  return Kp.Fragment = O, Kp.jsx = $e, Kp.jsxs = $e, Kp;
}
var Xp = {}, tx;
function sk() {
  if (tx) return Xp;
  tx = 1;
  var F = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    var X = Nn, O = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), ut = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), et = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), ge = Symbol.iterator, Ne = "@@iterator";
    function yt(R) {
      if (R === null || typeof R != "object")
        return null;
      var $ = ge && R[ge] || R[Ne];
      return typeof $ == "function" ? $ : null;
    }
    var Mt = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ve(R) {
      {
        for (var $ = arguments.length, oe = new Array($ > 1 ? $ - 1 : 0), ce = 1; ce < $; ce++)
          oe[ce - 1] = arguments[ce];
        Ee("error", R, oe);
      }
    }
    function Ee(R, $, oe) {
      {
        var ce = Mt.ReactDebugCurrentFrame, St = ce.getStackAddendum();
        St !== "" && ($ += "%s", oe = oe.concat([St]));
        var Xe = oe.map(function(Ct) {
          return String(Ct);
        });
        Xe.unshift("Warning: " + $), Function.prototype.apply.call(console[R], console, Xe);
      }
    }
    var ot = !1, pe = !1, Be = !1, Ie = !1, ft = !1, Ue;
    Ue = Symbol.for("react.module.reference");
    function At(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ut || R === $e || ft || R === Je || R === ae || R === be || Ie || R === Z || ot || pe || Be || typeof R == "object" && R !== null && (R.$$typeof === ie || R.$$typeof === te || R.$$typeof === S || R.$$typeof === et || R.$$typeof === we || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ue || R.getModuleId !== void 0));
    }
    function zt(R, $, oe) {
      var ce = R.displayName;
      if (ce)
        return ce;
      var St = $.displayName || $.name || "";
      return St !== "" ? oe + "(" + St + ")" : oe;
    }
    function st(R) {
      return R.displayName || "Context";
    }
    function Le(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ut:
          return "Fragment";
        case Ae:
          return "Portal";
        case $e:
          return "Profiler";
        case Je:
          return "StrictMode";
        case ae:
          return "Suspense";
        case be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case et:
            var $ = R;
            return st($) + ".Consumer";
          case S:
            var oe = R;
            return st(oe._context) + ".Provider";
          case we:
            return zt(R, R.render, "ForwardRef");
          case te:
            var ce = R.displayName || null;
            return ce !== null ? ce : Le(R.type) || "Memo";
          case ie: {
            var St = R, Xe = St._payload, Ct = St._init;
            try {
              return Le(Ct(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, gt = 0, vt, W, Re, ue, k, Y, Me;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (gt === 0) {
          vt = console.log, W = console.info, Re = console.warn, ue = console.error, k = console.group, Y = console.groupCollapsed, Me = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        gt++;
      }
    }
    function ht() {
      {
        if (gt--, gt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, R, {
              value: vt
            }),
            info: jt({}, R, {
              value: W
            }),
            warn: jt({}, R, {
              value: Re
            }),
            error: jt({}, R, {
              value: ue
            }),
            group: jt({}, R, {
              value: k
            }),
            groupCollapsed: jt({}, R, {
              value: Y
            }),
            groupEnd: jt({}, R, {
              value: Me
            })
          });
        }
        gt < 0 && Ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var kt = Mt.ReactCurrentDispatcher, tt;
    function wt(R, $, oe) {
      {
        if (tt === void 0)
          try {
            throw Error();
          } catch (St) {
            var ce = St.stack.trim().match(/\n( *(at )?)/);
            tt = ce && ce[1] || "";
          }
        return `
` + tt + R;
      }
    }
    var $t = !1, Ln;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      Ln = new qn();
    }
    function ir(R, $) {
      if (!R || $t)
        return "";
      {
        var oe = Ln.get(R);
        if (oe !== void 0)
          return oe;
      }
      var ce;
      $t = !0;
      var St = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = kt.current, kt.current = null, Ke();
      try {
        if ($) {
          var Ct = function() {
            throw Error();
          };
          if (Object.defineProperty(Ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ct, []);
            } catch (hn) {
              ce = hn;
            }
            Reflect.construct(R, [], Ct);
          } else {
            try {
              Ct.call();
            } catch (hn) {
              ce = hn;
            }
            R.call(Ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (hn) {
            ce = hn;
          }
          R();
        }
      } catch (hn) {
        if (hn && ce && typeof hn.stack == "string") {
          for (var dt = hn.stack.split(`
`), Tn = ce.stack.split(`
`), on = dt.length - 1, dn = Tn.length - 1; on >= 1 && dn >= 0 && dt[on] !== Tn[dn]; )
            dn--;
          for (; on >= 1 && dn >= 0; on--, dn--)
            if (dt[on] !== Tn[dn]) {
              if (on !== 1 || dn !== 1)
                do
                  if (on--, dn--, dn < 0 || dt[on] !== Tn[dn]) {
                    var xr = `
` + dt[on].replace(" at new ", " at ");
                    return R.displayName && xr.includes("<anonymous>") && (xr = xr.replace("<anonymous>", R.displayName)), typeof R == "function" && Ln.set(R, xr), xr;
                  }
                while (on >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        $t = !1, kt.current = Xe, ht(), Error.prepareStackTrace = St;
      }
      var Ka = R ? R.displayName || R.name : "", Bt = Ka ? wt(Ka) : "";
      return typeof R == "function" && Ln.set(R, Bt), Bt;
    }
    function Mn(R, $, oe) {
      return ir(R, !1);
    }
    function Cr(R) {
      var $ = R.prototype;
      return !!($ && $.isReactComponent);
    }
    function Bn(R, $, oe) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ir(R, Cr(R));
      if (typeof R == "string")
        return wt(R);
      switch (R) {
        case ae:
          return wt("Suspense");
        case be:
          return wt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case we:
            return Mn(R.render);
          case te:
            return Bn(R.type, $, oe);
          case ie: {
            var ce = R, St = ce._payload, Xe = ce._init;
            try {
              return Bn(Xe(St), $, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, da = {}, Ga = Mt.ReactDebugCurrentFrame;
    function Or(R) {
      if (R) {
        var $ = R._owner, oe = Bn(R.type, R._source, $ ? $.type : null);
        Ga.setExtraStackFrame(oe);
      } else
        Ga.setExtraStackFrame(null);
    }
    function In(R, $, oe, ce, St) {
      {
        var Xe = Function.call.bind(zn);
        for (var Ct in R)
          if (Xe(R, Ct)) {
            var dt = void 0;
            try {
              if (typeof R[Ct] != "function") {
                var Tn = Error((ce || "React class") + ": " + oe + " type `" + Ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              dt = R[Ct]($, Ct, ce, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              dt = on;
            }
            dt && !(dt instanceof Error) && (Or(St), Ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", oe, Ct, typeof dt), Or(null)), dt instanceof Error && !(dt.message in da) && (da[dt.message] = !0, Or(St), Ve("Failed %s type: %s", oe, dt.message), Or(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Xn(R) {
      return Kn(R);
    }
    function Rr(R) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, oe = $ && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return oe;
      }
    }
    function qa(R) {
      try {
        return jn(R), !1;
      } catch {
        return !0;
      }
    }
    function jn(R) {
      return "" + R;
    }
    function lr(R) {
      if (qa(R))
        return Ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), jn(R);
    }
    var $r = Mt.ReactCurrentOwner, Ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pa, ne;
    function je(R) {
      if (zn.call(R, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(R, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ct(R) {
      if (zn.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Vt(R, $) {
      typeof R.ref == "string" && $r.current;
    }
    function sn(R, $) {
      {
        var oe = function() {
          pa || (pa = !0, Ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function cn(R, $) {
      {
        var oe = function() {
          ne || (ne = !0, Ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var fn = function(R, $, oe, ce, St, Xe, Ct) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: R,
        key: $,
        ref: oe,
        props: Ct,
        // Record the component responsible for creating this element.
        _owner: Xe
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: St
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function Zn(R, $, oe, ce, St) {
      {
        var Xe, Ct = {}, dt = null, Tn = null;
        oe !== void 0 && (lr(oe), dt = "" + oe), ct($) && (lr($.key), dt = "" + $.key), je($) && (Tn = $.ref, Vt($, St));
        for (Xe in $)
          zn.call($, Xe) && !Ni.hasOwnProperty(Xe) && (Ct[Xe] = $[Xe]);
        if (R && R.defaultProps) {
          var on = R.defaultProps;
          for (Xe in on)
            Ct[Xe] === void 0 && (Ct[Xe] = on[Xe]);
        }
        if (dt || Tn) {
          var dn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          dt && sn(Ct, dn), Tn && cn(Ct, dn);
        }
        return fn(R, dt, Tn, St, ce, $r.current, Ct);
      }
    }
    var un = Mt.ReactCurrentOwner, Kt = Mt.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var $ = R._owner, oe = Bn(R.type, R._source, $ ? $.type : null);
        Kt.setExtraStackFrame(oe);
      } else
        Kt.setExtraStackFrame(null);
    }
    var va;
    va = !1;
    function ka(R) {
      return typeof R == "object" && R !== null && R.$$typeof === O;
    }
    function Da() {
      {
        if (un.current) {
          var R = Le(un.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Li(R) {
      return "";
    }
    var Wl = {};
    function $l(R) {
      {
        var $ = Da();
        if (!$) {
          var oe = typeof R == "string" ? R : R.displayName || R.name;
          oe && ($ = `

Check the top-level render call using <` + oe + ">.");
        }
        return $;
      }
    }
    function Mi(R, $) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var oe = $l($);
        if (Wl[oe])
          return;
        Wl[oe] = !0;
        var ce = "";
        R && R._owner && R._owner !== un.current && (ce = " It was passed a child from " + Le(R._owner.type) + "."), Pt(R), Ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, ce), Pt(null);
      }
    }
    function Ql(R, $) {
      {
        if (typeof R != "object")
          return;
        if (Xn(R))
          for (var oe = 0; oe < R.length; oe++) {
            var ce = R[oe];
            ka(ce) && Mi(ce, $);
          }
        else if (ka(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var St = yt(R);
          if (typeof St == "function" && St !== R.entries)
            for (var Xe = St.call(R), Ct; !(Ct = Xe.next()).done; )
              ka(Ct.value) && Mi(Ct.value, $);
        }
      }
    }
    function si(R) {
      {
        var $ = R.type;
        if ($ == null || typeof $ == "string")
          return;
        var oe;
        if (typeof $ == "function")
          oe = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === we || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === te))
          oe = $.propTypes;
        else
          return;
        if (oe) {
          var ce = Le($);
          In(oe, R.props, "prop", ce, R);
        } else if ($.PropTypes !== void 0 && !va) {
          va = !0;
          var St = Le($);
          Ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", St || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && Ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(R) {
      {
        for (var $ = Object.keys(R.props), oe = 0; oe < $.length; oe++) {
          var ce = $[oe];
          if (ce !== "children" && ce !== "key") {
            Pt(R), Ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), Ve("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var ur = {};
    function ma(R, $, oe, ce, St, Xe) {
      {
        var Ct = At(R);
        if (!Ct) {
          var dt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Li();
          Tn ? dt += Tn : dt += Da();
          var on;
          R === null ? on = "null" : Xn(R) ? on = "array" : R !== void 0 && R.$$typeof === O ? (on = "<" + (Le(R.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof R, Ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, dt);
        }
        var dn = Zn(R, $, oe, St, Xe);
        if (dn == null)
          return dn;
        if (Ct) {
          var xr = $.children;
          if (xr !== void 0)
            if (ce)
              if (Xn(xr)) {
                for (var Ka = 0; Ka < xr.length; Ka++)
                  Ql(xr[Ka], R);
                Object.freeze && Object.freeze(xr);
              } else
                Ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(xr, R);
        }
        if (zn.call($, "key")) {
          var Bt = Le(R), hn = Object.keys($).filter(function(ji) {
            return ji !== "key";
          }), rt = hn.length > 0 ? "{key: someKey, " + hn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[Bt + rt]) {
            var di = hn.length > 0 ? "{" + hn.join(": ..., ") + ": ...}" : "{}";
            Ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Bt, di, Bt), ur[Bt + rt] = !0;
          }
        }
        return R === ut ? ha(dn) : si(dn), dn;
      }
    }
    function Qr(R, $, oe) {
      return ma(R, $, oe, !0);
    }
    function ci(R, $, oe) {
      return ma(R, $, oe, !1);
    }
    var fi = ci, zi = Qr;
    Xp.Fragment = ut, Xp.jsx = fi, Xp.jsxs = zi;
  }(), Xp;
}
var ck = {};
ck.NODE_ENV === "production" ? p0.exports = ok() : p0.exports = sk();
var T = p0.exports, ev = {}, h0 = { exports: {} }, $a = {}, $m = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nx;
function fk() {
  return nx || (nx = 1, function(F) {
    function X(W, Re) {
      var ue = W.length;
      W.push(Re);
      e: for (; 0 < ue; ) {
        var k = ue - 1 >>> 1, Y = W[k];
        if (0 < ut(Y, Re)) W[k] = Re, W[ue] = Y, ue = k;
        else break e;
      }
    }
    function O(W) {
      return W.length === 0 ? null : W[0];
    }
    function Ae(W) {
      if (W.length === 0) return null;
      var Re = W[0], ue = W.pop();
      if (ue !== Re) {
        W[0] = ue;
        e: for (var k = 0, Y = W.length, Me = Y >>> 1; k < Me; ) {
          var Qe = 2 * (k + 1) - 1, Ke = W[Qe], ht = Qe + 1, kt = W[ht];
          if (0 > ut(Ke, ue)) ht < Y && 0 > ut(kt, Ke) ? (W[k] = kt, W[ht] = ue, k = ht) : (W[k] = Ke, W[Qe] = ue, k = Qe);
          else if (ht < Y && 0 > ut(kt, ue)) W[k] = kt, W[ht] = ue, k = ht;
          else break e;
        }
      }
      return Re;
    }
    function ut(W, Re) {
      var ue = W.sortIndex - Re.sortIndex;
      return ue !== 0 ? ue : W.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Je = performance;
      F.unstable_now = function() {
        return Je.now();
      };
    } else {
      var $e = Date, S = $e.now();
      F.unstable_now = function() {
        return $e.now() - S;
      };
    }
    var et = [], we = [], ae = 1, be = null, te = 3, ie = !1, Z = !1, ge = !1, Ne = typeof setTimeout == "function" ? setTimeout : null, yt = typeof clearTimeout == "function" ? clearTimeout : null, Mt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(W) {
      for (var Re = O(we); Re !== null; ) {
        if (Re.callback === null) Ae(we);
        else if (Re.startTime <= W) Ae(we), Re.sortIndex = Re.expirationTime, X(et, Re);
        else break;
        Re = O(we);
      }
    }
    function Ee(W) {
      if (ge = !1, Ve(W), !Z) if (O(et) !== null) Z = !0, gt(ot);
      else {
        var Re = O(we);
        Re !== null && vt(Ee, Re.startTime - W);
      }
    }
    function ot(W, Re) {
      Z = !1, ge && (ge = !1, yt(Ie), Ie = -1), ie = !0;
      var ue = te;
      try {
        for (Ve(Re), be = O(et); be !== null && (!(be.expirationTime > Re) || W && !At()); ) {
          var k = be.callback;
          if (typeof k == "function") {
            be.callback = null, te = be.priorityLevel;
            var Y = k(be.expirationTime <= Re);
            Re = F.unstable_now(), typeof Y == "function" ? be.callback = Y : be === O(et) && Ae(et), Ve(Re);
          } else Ae(et);
          be = O(et);
        }
        if (be !== null) var Me = !0;
        else {
          var Qe = O(we);
          Qe !== null && vt(Ee, Qe.startTime - Re), Me = !1;
        }
        return Me;
      } finally {
        be = null, te = ue, ie = !1;
      }
    }
    var pe = !1, Be = null, Ie = -1, ft = 5, Ue = -1;
    function At() {
      return !(F.unstable_now() - Ue < ft);
    }
    function zt() {
      if (Be !== null) {
        var W = F.unstable_now();
        Ue = W;
        var Re = !0;
        try {
          Re = Be(!0, W);
        } finally {
          Re ? st() : (pe = !1, Be = null);
        }
      } else pe = !1;
    }
    var st;
    if (typeof Mt == "function") st = function() {
      Mt(zt);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), jt = Le.port2;
      Le.port1.onmessage = zt, st = function() {
        jt.postMessage(null);
      };
    } else st = function() {
      Ne(zt, 0);
    };
    function gt(W) {
      Be = W, pe || (pe = !0, st());
    }
    function vt(W, Re) {
      Ie = Ne(function() {
        W(F.unstable_now());
      }, Re);
    }
    F.unstable_IdlePriority = 5, F.unstable_ImmediatePriority = 1, F.unstable_LowPriority = 4, F.unstable_NormalPriority = 3, F.unstable_Profiling = null, F.unstable_UserBlockingPriority = 2, F.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, F.unstable_continueExecution = function() {
      Z || ie || (Z = !0, gt(ot));
    }, F.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ft = 0 < W ? Math.floor(1e3 / W) : 5;
    }, F.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, F.unstable_getFirstCallbackNode = function() {
      return O(et);
    }, F.unstable_next = function(W) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = te;
      }
      var ue = te;
      te = Re;
      try {
        return W();
      } finally {
        te = ue;
      }
    }, F.unstable_pauseExecution = function() {
    }, F.unstable_requestPaint = function() {
    }, F.unstable_runWithPriority = function(W, Re) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var ue = te;
      te = W;
      try {
        return Re();
      } finally {
        te = ue;
      }
    }, F.unstable_scheduleCallback = function(W, Re, ue) {
      var k = F.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? k + ue : k) : ue = k, W) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = ue + Y, W = { id: ae++, callback: Re, priorityLevel: W, startTime: ue, expirationTime: Y, sortIndex: -1 }, ue > k ? (W.sortIndex = ue, X(we, W), O(et) === null && W === O(we) && (ge ? (yt(Ie), Ie = -1) : ge = !0, vt(Ee, ue - k))) : (W.sortIndex = Y, X(et, W), Z || ie || (Z = !0, gt(ot))), W;
    }, F.unstable_shouldYield = At, F.unstable_wrapCallback = function(W) {
      var Re = te;
      return function() {
        var ue = te;
        te = Re;
        try {
          return W.apply(this, arguments);
        } finally {
          te = ue;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {}, rx;
function dk() {
  return rx || (rx = 1, function(F) {
    var X = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    X.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = !1, Ae = 5;
      function ut(ne, je) {
        var ct = ne.length;
        ne.push(je), S(ne, je, ct);
      }
      function Je(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function $e(ne) {
        if (ne.length === 0)
          return null;
        var je = ne[0], ct = ne.pop();
        return ct !== je && (ne[0] = ct, et(ne, ct, 0)), je;
      }
      function S(ne, je, ct) {
        for (var Vt = ct; Vt > 0; ) {
          var sn = Vt - 1 >>> 1, cn = ne[sn];
          if (we(cn, je) > 0)
            ne[sn] = je, ne[Vt] = cn, Vt = sn;
          else
            return;
        }
      }
      function et(ne, je, ct) {
        for (var Vt = ct, sn = ne.length, cn = sn >>> 1; Vt < cn; ) {
          var fn = (Vt + 1) * 2 - 1, Zn = ne[fn], un = fn + 1, Kt = ne[un];
          if (we(Zn, je) < 0)
            un < sn && we(Kt, Zn) < 0 ? (ne[Vt] = Kt, ne[un] = je, Vt = un) : (ne[Vt] = Zn, ne[fn] = je, Vt = fn);
          else if (un < sn && we(Kt, je) < 0)
            ne[Vt] = Kt, ne[un] = je, Vt = un;
          else
            return;
        }
      }
      function we(ne, je) {
        var ct = ne.sortIndex - je.sortIndex;
        return ct !== 0 ? ct : ne.id - je.id;
      }
      var ae = 1, be = 2, te = 3, ie = 4, Z = 5;
      function ge(ne, je) {
      }
      var Ne = typeof performance == "object" && typeof performance.now == "function";
      if (Ne) {
        var yt = performance;
        F.unstable_now = function() {
          return yt.now();
        };
      } else {
        var Mt = Date, Ve = Mt.now();
        F.unstable_now = function() {
          return Mt.now() - Ve;
        };
      }
      var Ee = 1073741823, ot = -1, pe = 250, Be = 5e3, Ie = 1e4, ft = Ee, Ue = [], At = [], zt = 1, st = null, Le = te, jt = !1, gt = !1, vt = !1, W = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(ne) {
        for (var je = Je(At); je !== null; ) {
          if (je.callback === null)
            $e(At);
          else if (je.startTime <= ne)
            $e(At), je.sortIndex = je.expirationTime, ut(Ue, je);
          else
            return;
          je = Je(At);
        }
      }
      function Y(ne) {
        if (vt = !1, k(ne), !gt)
          if (Je(Ue) !== null)
            gt = !0, jn(Me);
          else {
            var je = Je(At);
            je !== null && lr(Y, je.startTime - ne);
          }
      }
      function Me(ne, je) {
        gt = !1, vt && (vt = !1, $r()), jt = !0;
        var ct = Le;
        try {
          var Vt;
          if (!O) return Qe(ne, je);
        } finally {
          st = null, Le = ct, jt = !1;
        }
      }
      function Qe(ne, je) {
        var ct = je;
        for (k(ct), st = Je(Ue); st !== null && !(st.expirationTime > ct && (!ne || Ga())); ) {
          var Vt = st.callback;
          if (typeof Vt == "function") {
            st.callback = null, Le = st.priorityLevel;
            var sn = st.expirationTime <= ct, cn = Vt(sn);
            ct = F.unstable_now(), typeof cn == "function" ? st.callback = cn : st === Je(Ue) && $e(Ue), k(ct);
          } else
            $e(Ue);
          st = Je(Ue);
        }
        if (st !== null)
          return !0;
        var fn = Je(At);
        return fn !== null && lr(Y, fn.startTime - ct), !1;
      }
      function Ke(ne, je) {
        switch (ne) {
          case ae:
          case be:
          case te:
          case ie:
          case Z:
            break;
          default:
            ne = te;
        }
        var ct = Le;
        Le = ne;
        try {
          return je();
        } finally {
          Le = ct;
        }
      }
      function ht(ne) {
        var je;
        switch (Le) {
          case ae:
          case be:
          case te:
            je = te;
            break;
          default:
            je = Le;
            break;
        }
        var ct = Le;
        Le = je;
        try {
          return ne();
        } finally {
          Le = ct;
        }
      }
      function kt(ne) {
        var je = Le;
        return function() {
          var ct = Le;
          Le = je;
          try {
            return ne.apply(this, arguments);
          } finally {
            Le = ct;
          }
        };
      }
      function tt(ne, je, ct) {
        var Vt = F.unstable_now(), sn;
        if (typeof ct == "object" && ct !== null) {
          var cn = ct.delay;
          typeof cn == "number" && cn > 0 ? sn = Vt + cn : sn = Vt;
        } else
          sn = Vt;
        var fn;
        switch (ne) {
          case ae:
            fn = ot;
            break;
          case be:
            fn = pe;
            break;
          case Z:
            fn = ft;
            break;
          case ie:
            fn = Ie;
            break;
          case te:
          default:
            fn = Be;
            break;
        }
        var Zn = sn + fn, un = {
          id: zt++,
          callback: je,
          priorityLevel: ne,
          startTime: sn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return sn > Vt ? (un.sortIndex = sn, ut(At, un), Je(Ue) === null && un === Je(At) && (vt ? $r() : vt = !0, lr(Y, sn - Vt))) : (un.sortIndex = Zn, ut(Ue, un), !gt && !jt && (gt = !0, jn(Me))), un;
      }
      function wt() {
      }
      function $t() {
        !gt && !jt && (gt = !0, jn(Me));
      }
      function Ln() {
        return Je(Ue);
      }
      function qn(ne) {
        ne.callback = null;
      }
      function ir() {
        return Le;
      }
      var Mn = !1, Cr = null, Bn = -1, zn = Ae, da = -1;
      function Ga() {
        var ne = F.unstable_now() - da;
        return !(ne < zn);
      }
      function Or() {
      }
      function In(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? zn = Math.floor(1e3 / ne) : zn = Ae;
      }
      var Kn = function() {
        if (Cr !== null) {
          var ne = F.unstable_now();
          da = ne;
          var je = !0, ct = !0;
          try {
            ct = Cr(je, ne);
          } finally {
            ct ? Xn() : (Mn = !1, Cr = null);
          }
        } else
          Mn = !1;
      }, Xn;
      if (typeof ue == "function")
        Xn = function() {
          ue(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), qa = Rr.port2;
        Rr.port1.onmessage = Kn, Xn = function() {
          qa.postMessage(null);
        };
      } else
        Xn = function() {
          W(Kn, 0);
        };
      function jn(ne) {
        Cr = ne, Mn || (Mn = !0, Xn());
      }
      function lr(ne, je) {
        Bn = W(function() {
          ne(F.unstable_now());
        }, je);
      }
      function $r() {
        Re(Bn), Bn = -1;
      }
      var Ni = Or, pa = null;
      F.unstable_IdlePriority = Z, F.unstable_ImmediatePriority = ae, F.unstable_LowPriority = ie, F.unstable_NormalPriority = te, F.unstable_Profiling = pa, F.unstable_UserBlockingPriority = be, F.unstable_cancelCallback = qn, F.unstable_continueExecution = $t, F.unstable_forceFrameRate = In, F.unstable_getCurrentPriorityLevel = ir, F.unstable_getFirstCallbackNode = Ln, F.unstable_next = ht, F.unstable_pauseExecution = wt, F.unstable_requestPaint = Ni, F.unstable_runWithPriority = Ke, F.unstable_scheduleCallback = tt, F.unstable_shouldYield = Ga, F.unstable_wrapCallback = kt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var ax;
function sx() {
  if (ax) return $m.exports;
  ax = 1;
  var F = {};
  return F.NODE_ENV === "production" ? $m.exports = fk() : $m.exports = dk(), $m.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ix;
function pk() {
  if (ix) return $a;
  ix = 1;
  var F = Nn, X = sx();
  function O(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ae = /* @__PURE__ */ new Set(), ut = {};
  function Je(n, r) {
    $e(n, r), $e(n + "Capture", r);
  }
  function $e(n, r) {
    for (ut[n] = r, n = 0; n < r.length; n++) Ae.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), et = Object.prototype.hasOwnProperty, we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = {}, be = {};
  function te(n) {
    return et.call(be, n) ? !0 : et.call(ae, n) ? !1 : we.test(n) ? be[n] = !0 : (ae[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Z(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ge(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ne[n] = new ge(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ne[r] = new ge(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ne[n] = new ge(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ne[n] = new ge(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ne[n] = new ge(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ne[n] = new ge(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ne[n] = new ge(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ne[n] = new ge(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ne[n] = new ge(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var yt = /[\-:]([a-z])/g;
  function Mt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      yt,
      Mt
    );
    Ne[r] = new ge(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(yt, Mt);
    Ne[r] = new ge(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(yt, Mt);
    Ne[r] = new ge(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ne[n] = new ge(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ne.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ne[n] = new ge(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ve(n, r, l, o) {
    var c = Ne.hasOwnProperty(r) ? Ne[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ee = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ot = Symbol.for("react.element"), pe = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), At = Symbol.for("react.context"), zt = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ue = Object.assign, k;
  function Y(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Me = !1;
  function Qe(n, r) {
    if (!n || Me) return "";
    Me = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var x = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Me = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Y(n) : "";
  }
  function Ke(n) {
    switch (n.tag) {
      case 5:
        return Y(n.type);
      case 16:
        return Y("Lazy");
      case 13:
        return Y("Suspense");
      case 19:
        return Y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case pe:
        return "Portal";
      case ft:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case st:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case At:
        return (n.displayName || "Context") + ".Consumer";
      case Ue:
        return (n._context.displayName || "Context") + ".Provider";
      case zt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case gt:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function kt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === Ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function tt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $t(n) {
    var r = wt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ln(n) {
    n._valueTracker || (n._valueTracker = $t(n));
  }
  function qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = wt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Mn(n, r) {
    var l = r.checked;
    return ue({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = tt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Ve(n, "checked", r, !1);
  }
  function zn(n, r) {
    Bn(n, r);
    var l = tt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, tt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function da(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ga(n, r, l) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Or = Array.isArray;
  function In(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + tt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(O(91));
    return ue({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(O(92));
        if (Or(l)) {
          if (1 < l.length) throw Error(O(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: tt(l) };
  }
  function Rr(n, r) {
    var l = tt(r.value), o = tt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function jn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? jn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, Ni = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ne = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ne).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ne[r] = ne[n];
    });
  });
  function ct(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ne.hasOwnProperty(n) && ne[n] ? ("" + r).trim() : r + "px";
  }
  function Vt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ct(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var sn = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(O(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(O(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(O(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(O(62));
    }
  }
  function fn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zn = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, Pt = null, va = null;
  function ka(n) {
    if (n = ss(n)) {
      if (typeof Kt != "function") throw Error(O(280));
      var r = n.stateNode;
      r && (r = Wi(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    Pt ? va ? va.push(n) : va = [n] : Pt = n;
  }
  function Li() {
    if (Pt) {
      var n = Pt, r = va;
      if (va = Pt = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function Wl(n, r) {
    return n(r);
  }
  function $l() {
  }
  var Mi = !1;
  function Ql(n, r, l) {
    if (Mi) return n(r, l);
    Mi = !0;
    try {
      return Wl(n, r, l);
    } finally {
      Mi = !1, (Pt !== null || va !== null) && ($l(), Li());
    }
  }
  function si(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Wi(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(O(231, r, typeof l));
    return l;
  }
  var ha = !1;
  if (S) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      ha = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    ha = !1;
  }
  function ma(n, r, l, o, c, d, m, E, x) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function $(n, r, l, o, c, d, m, E, x) {
    Qr = !1, ci = null, ma.apply(R, arguments);
  }
  function oe(n, r, l, o, c, d, m, E, x) {
    if ($.apply(this, arguments), Qr) {
      if (Qr) {
        var A = ci;
        Qr = !1, ci = null;
      } else throw Error(O(198));
      fi || (fi = !0, zi = A);
    }
  }
  function ce(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function St(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
    if (ce(n) !== n) throw Error(O(188));
  }
  function Ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ce(n), r === null) throw Error(O(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Xe(c), n;
          if (d === o) return Xe(c), r;
          d = d.sibling;
        }
        throw Error(O(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(O(189));
        }
      }
      if (l.alternate !== o) throw Error(O(190));
    }
    if (l.tag !== 3) throw Error(O(188));
    return l.stateNode.current === l ? n : r;
  }
  function dt(n) {
    return n = Ct(n), n !== null ? Tn(n) : null;
  }
  function Tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = X.unstable_scheduleCallback, dn = X.unstable_cancelCallback, xr = X.unstable_shouldYield, Ka = X.unstable_requestPaint, Bt = X.unstable_now, hn = X.unstable_getCurrentPriorityLevel, rt = X.unstable_ImmediatePriority, di = X.unstable_UserBlockingPriority, ji = X.unstable_NormalPriority, ic = X.unstable_LowPriority, Ai = X.unstable_IdlePriority, ul = null, Gr = null;
  function Bo(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : uc, Io = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / lc | 0) | 0;
  }
  var Ui = 64, ol = 4194304;
  function qr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qr(E) : (d &= m, d !== 0 && (o = qr(d)));
    } else m = l & ~c, m !== 0 ? o = qr(m) : d !== 0 && (o = qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Nr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Nr(d), E = 1 << m, x = c[m];
      x === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : x <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = Ui;
    return Ui <<= 1, !(Ui & 4194240) && (Ui = 64), n;
  }
  function ql(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function Yo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Nr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function $o(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, Ot, oc, vi, Ge, Kl = !1, Jn = [], Kr = null, Lr = null, hi = null, En = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Xa = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        En.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xt.delete(r.pointerId);
    }
  }
  function Mr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Ot(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kr = Mr(Kr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Mr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Mr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return En.set(d, Mr(En.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Xt.set(d, Mr(Xt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Vu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = ce(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = St(l), r !== null) {
            n.blockedOn = r, Ge(n.priority, function() {
              oc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Zn = o, l.target.dispatchEvent(o), Zn = null;
      } else return r = ss(l), r !== null && Ot(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Pu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    Kl = !1, Kr !== null && Xl(Kr) && (Kr = null), Lr !== null && Xl(Lr) && (Lr = null), hi !== null && Xl(hi) && (hi = null), En.forEach(Pu), Xt.forEach(Pu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Kl || (Kl = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Bu)));
  }
  function Na(n) {
    function r(c) {
      return Zl(c, n);
    }
    if (0 < Jn.length) {
      Zl(Jn[0], n);
      for (var l = 1; l < Jn.length; l++) {
        var o = Jn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Kr !== null && Zl(Kr, n), Lr !== null && Zl(Lr, n), hi !== null && Zl(hi, n), En.forEach(r), Xt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Vu(l), l.blockedOn === null && Xa.shift();
  }
  var La = Ee.ReactCurrentBatchConfig, fl = !0;
  function Hi(n, r, l, o) {
    var c = Dt, d = La.transition;
    La.transition = null;
    try {
      Dt = 1, dl(n, r, l, o);
    } finally {
      Dt = c, La.transition = d;
    }
  }
  function Iu(n, r, l, o) {
    var c = Dt, d = La.transition;
    La.transition = null;
    try {
      Dt = 4, dl(n, r, l, o);
    } finally {
      Dt = c, La.transition = d;
    }
  }
  function dl(n, r, l, o) {
    if (fl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Vi, l), Tr(n, o);
      else if (qf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < Oa.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Vi = null;
  function Yu(n, r, l, o) {
    if (Vi = null, n = un(o), n = iu(n), n !== null) if (r = ce(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = St(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function Qo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hn()) {
          case rt:
            return 1;
          case di:
            return 4;
          case ji:
          case ic:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ma = null, Wu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Wu, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function ee() {
    return !1;
  }
  function Ce(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : ee, this.isPropagationStopped = ee, this;
    }
    return ue(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ye = Ce(ve), pt = ue({}, ve, { view: 0, detail: 0 }), It = Ce(pt), Zt, Jt, it, rn = ue({}, pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== it && (it && n.type === "mousemove" ? (Zt = n.screenX - it.screenX, Jt = n.screenY - it.screenY) : Jt = Zt = 0, it = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jt;
  } }), wn = Ce(rn), Jl = ue({}, rn, { dataTransfer: 0 }), Go = Ce(Jl), Pi = ue({}, pt, { relatedTarget: 0 }), eu = Ce(Pi), qo = ue({}, ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Ce(qo), sc = ue({}, ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = Ce(sc), tv = ue({}, ve, { data: 0 }), cc = Ce(tv), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Za() {
    return Gm;
  }
  var qm = ue({}, pt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = Ce(qm), Jf = ue({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = Ce(Jf), Km = ue({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), dc = Ce(Km), iv = ue({}, ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = Ce(iv), Bi = ue({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = Ce(Bi), Ii = [9, 13, 27, 32], Ko = S && "CompositionEvent" in window, pl = null;
  S && "documentMode" in document && (pl = document.documentMode);
  var Xm = S && "TextEvent" in window && !pl, $u = S && (!Ko || pl && 8 < pl && 11 >= pl), lv = " ", uv = !1;
  function pc(n, r) {
    switch (n) {
      case "keyup":
        return Ii.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Zm(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (uv = !0, lv);
      case "textInput":
        return n = r.data, n === lv && uv ? null : n;
      default:
        return null;
    }
  }
  function sv(n, r) {
    if (Qu) return n === "compositionend" || !Ko && pc(n, r) ? (n = C(), h = Wu = Ma = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return $u && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Da(o), r = ls(r, "onChange"), 0 < r.length && (l = new Ye("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, mi = null;
  function ed(n) {
    yc(n, 0);
  }
  function Xo(n) {
    var r = De(n);
    if (qn(r)) return n;
  }
  function dv(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), nd = typeof vv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    pv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    Gu && (Gu.detachEvent("onpropertychange", mv), mi = Gu = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Xo(mi)) {
      var r = [];
      fv(r, mi, n, un(n)), Ql(ed, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (hv(), Gu = r, mi = l, Gu.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Xo(mi);
  }
  function yv(n, r) {
    if (n === "click") return Xo(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return Xo(r);
  }
  function gv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ja = typeof Object.is == "function" ? Object.is : gv;
  function Zo(n, r) {
    if (Ja(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!et.call(r, c) || !Ja(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ev(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vl() {
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function qu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = vl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && qu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Ev(l, d);
          var m = Ev(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ku = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, rd = null, Jo = null, ad = !1;
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Xu == null || Xu !== ir(o) || (o = Xu, "selectionStart" in o && qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = ls(rd, "onSelect"), 0 < o.length && (r = new Ye("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
  }
  function es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zu = { animationend: es("Animation", "AnimationEnd"), animationiteration: es("Animation", "AnimationIteration"), animationstart: es("Animation", "AnimationStart"), transitionend: es("Transition", "TransitionEnd") }, hc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Zu.animationend.animation, delete Zu.animationiteration.animation, delete Zu.animationstart.animation), "TransitionEvent" in window || delete Zu.transitionend.transition);
  function ts(n) {
    if (hc[n]) return hc[n];
    if (!Zu[n]) return n;
    var r = Zu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return hc[n] = r[l];
    return n;
  }
  var xv = ts("animationend"), Tv = ts("animationiteration"), wv = ts("animationstart"), bv = ts("transitionend"), _v = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    _v.set(n, r), Je(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], ns = ld.toLowerCase(), ry = ld[0].toUpperCase() + ld.slice(1);
    yi(ns, "on" + ry);
  }
  yi(xv, "onAnimationEnd"), yi(Tv, "onAnimationIteration"), yi(wv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(bv, "onTransitionEnd"), $e("onMouseEnter", ["mouseout", "mouseover"]), $e("onMouseLeave", ["mouseout", "mouseover"]), $e("onPointerEnter", ["pointerout", "pointerover"]), $e("onPointerLeave", ["pointerout", "pointerover"]), Je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, oe(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], x = E.instance, A = E.currentTarget;
          if (E = E.listener, x !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = x;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], x = E.instance, A = E.currentTarget, E = E.listener, x !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = x;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function Yt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function hl(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, Ae.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || hl(l, !1, n), hl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, hl("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Qo(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = Iu;
        break;
      default:
        c = dl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ha || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function od(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var x = m.tag;
          if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = iu(E), m === null) return;
          if (x = m.tag, x === 5 || x === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Ql(function() {
      var A = d, G = un(l), q = [];
      e: {
        var Q = _v.get(n);
        if (Q !== void 0) {
          var he = Ye, xe = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = Zf;
              break;
            case "focusin":
              xe = "focus", he = eu;
              break;
            case "focusout":
              xe = "blur", he = eu;
              break;
            case "beforeblur":
            case "afterblur":
              he = eu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = wn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = dc;
              break;
            case xv:
            case Tv:
            case wv:
              he = Kf;
              break;
            case bv:
              he = Xr;
              break;
            case "scroll":
              he = It;
              break;
            case "wheel":
              he = An;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = fc;
          }
          var _e = (r & 4) !== 0, Dn = !_e && n === "scroll", D = _e ? Q !== null ? Q + "Capture" : null : Q;
          _e = [];
          for (var b = A, M; b !== null; ) {
            M = b;
            var J = M.stateNode;
            if (M.tag === 5 && J !== null && (M = J, D !== null && (J = si(b, D), J != null && _e.push(Ju(b, J, M)))), Dn) break;
            b = b.return;
          }
          0 < _e.length && (Q = new he(Q, xe, null, l, G), q.push({ event: Q, listeners: _e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", Q && l !== Zn && (xe = l.relatedTarget || l.fromElement) && (iu(xe) || xe[Yi])) break e;
          if ((he || Q) && (Q = G.window === G ? G : (Q = G.ownerDocument) ? Q.defaultView || Q.parentWindow : window, he ? (xe = l.relatedTarget || l.toElement, he = A, xe = xe ? iu(xe) : null, xe !== null && (Dn = ce(xe), xe !== Dn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (he = null, xe = A), he !== xe)) {
            if (_e = wn, J = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (_e = fc, J = "onPointerLeave", D = "onPointerEnter", b = "pointer"), Dn = he == null ? Q : De(he), M = xe == null ? Q : De(xe), Q = new _e(J, b + "leave", he, l, G), Q.target = Dn, Q.relatedTarget = M, J = null, iu(G) === A && (_e = new _e(D, b + "enter", xe, l, G), _e.target = M, _e.relatedTarget = Dn, J = _e), Dn = J, he && xe) t: {
              for (_e = he, D = xe, b = 0, M = _e; M; M = nu(M)) b++;
              for (M = 0, J = D; J; J = nu(J)) M++;
              for (; 0 < b - M; ) _e = nu(_e), b--;
              for (; 0 < M - b; ) D = nu(D), M--;
              for (; b--; ) {
                if (_e === D || D !== null && _e === D.alternate) break t;
                _e = nu(_e), D = nu(D);
              }
              _e = null;
            }
            else _e = null;
            he !== null && gc(q, Q, he, _e, !1), xe !== null && Dn !== null && gc(q, Dn, xe, _e, !0);
          }
        }
        e: {
          if (Q = A ? De(A) : window, he = Q.nodeName && Q.nodeName.toLowerCase(), he === "select" || he === "input" && Q.type === "file") var fe = dv;
          else if (cv(Q)) if (pv) fe = ny;
          else {
            fe = ty;
            var ze = ey;
          }
          else (he = Q.nodeName) && he.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (fe = yv);
          if (fe && (fe = fe(n, A))) {
            fv(q, fe, l, G);
            break e;
          }
          ze && ze(n, Q, A), n === "focusout" && (ze = Q._wrapperState) && ze.controlled && Q.type === "number" && Ga(Q, "number", Q.value);
        }
        switch (ze = A ? De(A) : window, n) {
          case "focusin":
            (cv(ze) || ze.contentEditable === "true") && (Xu = ze, rd = A, Jo = null);
            break;
          case "focusout":
            Jo = rd = Xu = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Rv(q, l, G);
            break;
          case "selectionchange":
            if (Ku) break;
          case "keydown":
          case "keyup":
            Rv(q, l, G);
        }
        var He;
        if (Ko) e: {
          switch (n) {
            case "compositionstart":
              var qe = "onCompositionStart";
              break e;
            case "compositionend":
              qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              qe = "onCompositionUpdate";
              break e;
          }
          qe = void 0;
        }
        else Qu ? pc(n, l) && (qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (qe = "onCompositionStart");
        qe && ($u && l.locale !== "ko" && (Qu || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && Qu && (He = C()) : (Ma = G, Wu = "value" in Ma ? Ma.value : Ma.textContent, Qu = !0)), ze = ls(A, qe), 0 < ze.length && (qe = new cc(qe, n, null, l, G), q.push({ event: qe, listeners: ze }), He ? qe.data = He : (He = ov(l), He !== null && (qe.data = He)))), (He = Xm ? Zm(n, l) : sv(n, l)) && (A = ls(A, "onBeforeInput"), 0 < A.length && (G = new cc("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: A }), G.data = He));
      }
      yc(q, r);
    });
  }
  function Ju(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && o.unshift(Ju(n, d, c)), d = si(n, r), d != null && o.push(Ju(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, x = E.alternate, A = E.stateNode;
      if (x !== null && x === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (x = si(l, d), x != null && m.unshift(Ju(l, x, E))) : c || (x = si(l, d), x != null && m.push(Ju(l, x, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var iy = /\r\n?/g, kv = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(iy, `
`).replace(kv, "");
  }
  function Sc(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(O(425));
  }
  function Ec() {
  }
  var ru = null, us = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
    return Rc.resolve(null).then(n).catch(eo);
  } : Cc;
  function eo(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function to(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Na(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Na(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function xc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var no = Math.random().toString(36).slice(2), za = "__reactFiber$" + no, os = "__reactProps$" + no, Yi = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = xc(n); n !== null; ) {
          if (l = n[za]) return l;
          n = xc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[za] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function De(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(O(33));
  }
  function Wi(n) {
    return n[os] || null;
  }
  var Cn = [], Rt = -1;
  function Zr(n) {
    return { current: n };
  }
  function Qt(n) {
    0 > Rt || (n.current = Cn[Rt], Cn[Rt] = null, Rt--);
  }
  function an(n, r) {
    Rt++, Cn[Rt] = n.current, n.current = r;
  }
  var mt = {}, mn = Zr(mt), Un = Zr(!1), ja = mt;
  function ya(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Qt(Un), Qt(mn);
  }
  function Tc(n, r, l) {
    if (mn.current !== mt) throw Error(O(168));
    an(mn, r), an(Un, l);
  }
  function Nv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(O(108, kt(n) || "Unknown", c));
    return ue({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, ja = mn.current, an(mn, n), an(Un, Un.current), !0;
  }
  function br(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(O(169));
    l ? (n = Nv(n, r, ja), o.__reactInternalMemoizedMergedChildContext = n, Qt(Un), Qt(mn), an(mn, n)) : Qt(Un), an(Un, l);
  }
  var ti = null, cs = !1, fs = !1;
  function ml(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function fd(n) {
    cs = !0, ml(n);
  }
  function zr() {
    if (!fs && ti !== null) {
      fs = !0;
      var n = 0, r = Dt;
      try {
        var l = ti;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, cs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(rt, zr), c;
      } finally {
        Dt = r, fs = !1;
      }
    }
    return null;
  }
  var yl = [], gl = 0, ao = null, Sl = 0, or = [], Fn = 0, uu = null, jr = 1, Si = "";
  function El(n, r) {
    yl[gl++] = Sl, yl[gl++] = ao, ao = n, Sl = r;
  }
  function Lv(n, r, l) {
    or[Fn++] = jr, or[Fn++] = Si, or[Fn++] = uu, uu = n;
    var o = jr;
    n = Si;
    var c = 32 - Nr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, jr = 1 << 32 - Nr(r) + c | l << c | o, Si = d + n;
    } else jr = 1 << d | l << c | o, Si = n;
  }
  function dd(n) {
    n.return !== null && (El(n, 1), Lv(n, 1, 0));
  }
  function wc(n) {
    for (; n === ao; ) ao = yl[--gl], yl[gl] = null, Sl = yl[--gl], yl[gl] = null;
    for (; n === uu; ) uu = or[--Fn], or[Fn] = null, Si = or[--Fn], or[Fn] = null, jr = or[--Fn], or[Fn] = null;
  }
  var Jr = null, ea = null, pn = !1, ni = null;
  function pd(n, r) {
    var l = Va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Jr = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Jr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: jr, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Jr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (pn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(O(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(O(418));
        n.flags = n.flags & -4097 | 2, pn = !1, Jr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function bn(n) {
    if (n !== Jr) return !1;
    if (!pn) return Mv(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = ea)) {
      if (hd(n)) throw zv(), Error(O(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(O(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Jr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = ea; n; ) n = ei(n.nextSibling);
  }
  function $i() {
    ea = Jr = null, pn = !1;
  }
  function ds(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Ee.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(O(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(O(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(O(284));
      if (!l._owner) throw Error(O(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(O(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function jv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(D, b) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [b], D.flags |= 16) : M.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = Nl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < b ? (D.flags |= 2, b) : M) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, M, J) {
      return b === null || b.tag !== 6 ? (b = wu(M, D.mode, J), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function x(D, b, M, J) {
      var fe = M.type;
      return fe === Be ? G(D, b, M.props.children, J, M.key) : b !== null && (b.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === gt && jv(fe) === b.type) ? (J = c(b, M.props), J.ref = ps(D, b, M), J.return = D, J) : (J = ff(M.type, M.key, M.props, null, D.mode, J), J.ref = ps(D, b, M), J.return = D, J);
    }
    function A(D, b, M, J) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== M.containerInfo || b.stateNode.implementation !== M.implementation ? (b = Qd(M, D.mode, J), b.return = D, b) : (b = c(b, M.children || []), b.return = D, b);
    }
    function G(D, b, M, J, fe) {
      return b === null || b.tag !== 7 ? (b = Ll(M, D.mode, J, fe), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function q(D, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = wu("" + b, D.mode, M), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ot:
            return M = ff(b.type, b.key, b.props, null, D.mode, M), M.ref = ps(D, null, b), M.return = D, M;
          case pe:
            return b = Qd(b, D.mode, M), b.return = D, b;
          case gt:
            var J = b._init;
            return q(D, J(b._payload), M);
        }
        if (Or(b) || Re(b)) return b = Ll(b, D.mode, M, null), b.return = D, b;
        io(D, b);
      }
      return null;
    }
    function Q(D, b, M, J) {
      var fe = b !== null ? b.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return fe !== null ? null : E(D, b, "" + M, J);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ot:
            return M.key === fe ? x(D, b, M, J) : null;
          case pe:
            return M.key === fe ? A(D, b, M, J) : null;
          case gt:
            return fe = M._init, Q(
              D,
              b,
              fe(M._payload),
              J
            );
        }
        if (Or(M) || Re(M)) return fe !== null ? null : G(D, b, M, J, null);
        io(D, M);
      }
      return null;
    }
    function he(D, b, M, J, fe) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return D = D.get(M) || null, E(b, D, "" + J, fe);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case ot:
            return D = D.get(J.key === null ? M : J.key) || null, x(b, D, J, fe);
          case pe:
            return D = D.get(J.key === null ? M : J.key) || null, A(b, D, J, fe);
          case gt:
            var ze = J._init;
            return he(D, b, M, ze(J._payload), fe);
        }
        if (Or(J) || Re(J)) return D = D.get(M) || null, G(b, D, J, fe, null);
        io(b, J);
      }
      return null;
    }
    function xe(D, b, M, J) {
      for (var fe = null, ze = null, He = b, qe = b = 0, Qn = null; He !== null && qe < M.length; qe++) {
        He.index > qe ? (Qn = He, He = null) : Qn = He.sibling;
        var Ut = Q(D, He, M[qe], J);
        if (Ut === null) {
          He === null && (He = Qn);
          break;
        }
        n && He && Ut.alternate === null && r(D, He), b = d(Ut, b, qe), ze === null ? fe = Ut : ze.sibling = Ut, ze = Ut, He = Qn;
      }
      if (qe === M.length) return l(D, He), pn && El(D, qe), fe;
      if (He === null) {
        for (; qe < M.length; qe++) He = q(D, M[qe], J), He !== null && (b = d(He, b, qe), ze === null ? fe = He : ze.sibling = He, ze = He);
        return pn && El(D, qe), fe;
      }
      for (He = o(D, He); qe < M.length; qe++) Qn = he(He, D, qe, M[qe], J), Qn !== null && (n && Qn.alternate !== null && He.delete(Qn.key === null ? qe : Qn.key), b = d(Qn, b, qe), ze === null ? fe = Qn : ze.sibling = Qn, ze = Qn);
      return n && He.forEach(function(zl) {
        return r(D, zl);
      }), pn && El(D, qe), fe;
    }
    function _e(D, b, M, J) {
      var fe = Re(M);
      if (typeof fe != "function") throw Error(O(150));
      if (M = fe.call(M), M == null) throw Error(O(151));
      for (var ze = fe = null, He = b, qe = b = 0, Qn = null, Ut = M.next(); He !== null && !Ut.done; qe++, Ut = M.next()) {
        He.index > qe ? (Qn = He, He = null) : Qn = He.sibling;
        var zl = Q(D, He, Ut.value, J);
        if (zl === null) {
          He === null && (He = Qn);
          break;
        }
        n && He && zl.alternate === null && r(D, He), b = d(zl, b, qe), ze === null ? fe = zl : ze.sibling = zl, ze = zl, He = Qn;
      }
      if (Ut.done) return l(
        D,
        He
      ), pn && El(D, qe), fe;
      if (He === null) {
        for (; !Ut.done; qe++, Ut = M.next()) Ut = q(D, Ut.value, J), Ut !== null && (b = d(Ut, b, qe), ze === null ? fe = Ut : ze.sibling = Ut, ze = Ut);
        return pn && El(D, qe), fe;
      }
      for (He = o(D, He); !Ut.done; qe++, Ut = M.next()) Ut = he(He, D, qe, Ut.value, J), Ut !== null && (n && Ut.alternate !== null && He.delete(Ut.key === null ? qe : Ut.key), b = d(Ut, b, qe), ze === null ? fe = Ut : ze.sibling = Ut, ze = Ut);
      return n && He.forEach(function(Ey) {
        return r(D, Ey);
      }), pn && El(D, qe), fe;
    }
    function Dn(D, b, M, J) {
      if (typeof M == "object" && M !== null && M.type === Be && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ot:
            e: {
              for (var fe = M.key, ze = b; ze !== null; ) {
                if (ze.key === fe) {
                  if (fe = M.type, fe === Be) {
                    if (ze.tag === 7) {
                      l(D, ze.sibling), b = c(ze, M.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (ze.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === gt && jv(fe) === ze.type) {
                    l(D, ze.sibling), b = c(ze, M.props), b.ref = ps(D, ze, M), b.return = D, D = b;
                    break e;
                  }
                  l(D, ze);
                  break;
                } else r(D, ze);
                ze = ze.sibling;
              }
              M.type === Be ? (b = Ll(M.props.children, D.mode, J, M.key), b.return = D, D = b) : (J = ff(M.type, M.key, M.props, null, D.mode, J), J.ref = ps(D, b, M), J.return = D, D = J);
            }
            return m(D);
          case pe:
            e: {
              for (ze = M.key; b !== null; ) {
                if (b.key === ze) if (b.tag === 4 && b.stateNode.containerInfo === M.containerInfo && b.stateNode.implementation === M.implementation) {
                  l(D, b.sibling), b = c(b, M.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = Qd(M, D.mode, J), b.return = D, D = b;
            }
            return m(D);
          case gt:
            return ze = M._init, Dn(D, b, ze(M._payload), J);
        }
        if (Or(M)) return xe(D, b, M, J);
        if (Re(M)) return _e(D, b, M, J);
        io(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, M), b.return = D, D = b) : (l(D, b), b = wu(M, D.mode, J), b.return = D, D = b), m(D)) : l(D, b);
    }
    return Dn;
  }
  var ri = Av(!0), sr = Av(!1), le = Zr(null), ga = null, _r = null, yd = null;
  function gd() {
    yd = _r = ga = null;
  }
  function Sd(n) {
    var r = le.current;
    Qt(le), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ga = n, yd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (nr = !0), n.firstContext = null);
  }
  function Gt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ga === null) throw Error(O(308));
      _r = n, ga.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var su = null;
  function Cd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Uv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Aa = !1;
  function Cl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, xt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function bc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  function Hv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _c(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var x = E, A = x.next;
      x.next = null, m === null ? d = A : m.next = A, m = x;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = A : E.next = A, G.lastBaseUpdate = x));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = A = x = null, E = d;
      do {
        var Q = E.lane, he = E.eventTime;
        if ((o & Q) === Q) {
          G !== null && (G = G.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var xe = n, _e = E;
            switch (Q = r, he = l, _e.tag) {
              case 1:
                if (xe = _e.payload, typeof xe == "function") {
                  q = xe.call(he, q, Q);
                  break e;
                }
                q = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = _e.payload, Q = typeof xe == "function" ? xe.call(he, q, Q) : xe, Q == null) break e;
                q = ue({}, q, Q);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else he = { eventTime: he, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (A = G = he, x = q) : G = G.next = he, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (x = q), c.baseState = x, c.firstBaseUpdate = A, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(O(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Zr(uo), vs = Zr(uo), hs = Zr(uo);
  function cu(n) {
    if (n === uo) throw Error(O(174));
    return n;
  }
  function xd(n, r) {
    switch (an(hs, r), an(vs, n), an(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = lr(r, n);
    }
    Qt(Ci), an(Ci, r);
  }
  function oo() {
    Qt(Ci), Qt(vs), Qt(hs);
  }
  function Td(n) {
    cu(hs.current);
    var r = cu(Ci.current), l = lr(r, n.type);
    r !== l && (an(vs, n), an(Ci, l));
  }
  function wd(n) {
    vs.current === n && (Qt(Ci), Qt(vs));
  }
  var yn = Zr(0);
  function kc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var bd = [];
  function ms() {
    for (var n = 0; n < bd.length; n++) bd[n]._workInProgressVersionPrimary = null;
    bd.length = 0;
  }
  var Oe = Ee.ReactCurrentDispatcher, Et = Ee.ReactCurrentBatchConfig, bt = 0, at = null, en = null, Yn = null, Dc = !1, ys = !1, gs = 0, _d = 0;
  function B() {
    throw Error(O(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ja(n[l], r[l])) return !1;
    return !0;
  }
  function Pe(n, r, l, o, c, d) {
    if (bt = d, at = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Oe.current = n === null || n.memoizedState === null ? Yc : Wc, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(O(301));
        d += 1, Yn = en = null, r.updateQueue = null, Oe.current = xs, n = l(o, c);
      } while (ys);
    }
    if (Oe.current = qt, r = en !== null && en.next !== null, bt = 0, Yn = en = at = null, Dc = !1, r) throw Error(O(300));
    return n;
  }
  function xl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function er() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? at.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function tr() {
    if (en === null) {
      var n = at.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = en.next;
    var r = Yn === null ? at.memoizedState : Yn.next;
    if (r !== null) Yn = r, en = n;
    else {
      if (n === null) throw Error(O(310));
      en = n, n = { memoizedState: en.memoizedState, baseState: en.baseState, baseQueue: en.baseQueue, queue: en.queue, next: null }, Yn === null ? at.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(O(311));
    l.lastRenderedReducer = n;
    var o = en, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, x = null, A = d;
      do {
        var G = A.lane;
        if ((bt & G) === G) x !== null && (x = x.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var q = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          x === null ? (E = x = q, m = o) : x = x.next = q, at.lanes |= G, Su |= G;
        }
        A = A.next;
      } while (A !== null && A !== d);
      x === null ? m = o : x.next = E, Ja(o, r.memoizedState) || (nr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = x, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, at.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tl(n) {
    var r = tr(), l = r.queue;
    if (l === null) throw Error(O(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ja(d, r.memoizedState) || (nr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function Oc(n, r) {
    var l = at, o = tr(), c = r(), d = !Ja(o.memoizedState, c);
    if (d && (o.memoizedState = c, nr = !0), o = o.queue, Ss(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Vn === null) throw Error(O(349));
      bt & 30 || Nc(l, r, c);
    }
    return c;
  }
  function Nc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && jc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      zc(r) && jc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ja(n, l);
    } catch {
      return !0;
    }
  }
  function jc(n) {
    var r = Ei(n, 1);
    r !== null && Ra(r, n, 1, -1);
  }
  function Ac(n) {
    var r = er();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rs.bind(null, at, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return tr().memoizedState;
  }
  function co(n, r, l, o) {
    var c = er();
    at.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = tr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (en !== null) {
      var m = en.memoizedState;
      if (d = m.destroy, o !== null && Hn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    at.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return fo(2048, 8, n, r);
  }
  function Hc(n, r) {
    return fo(4, 2, n, r);
  }
  function Vc(n, r) {
    return fo(4, 4, n, r);
  }
  function Es(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Es.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Pc(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = tr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ic(n, r, l) {
    return bt & 21 ? (Ja(l, r) || (l = Gl(), at.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, nr = !0), n.memoizedState = l);
  }
  function Vv(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Et.transition;
    Et.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, Et.transition = o;
    }
  }
  function po() {
    return tr().memoizedState;
  }
  function Pv(n, r, l) {
    var o = Ca(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) na(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = ln();
      Ra(l, n, o, c), Bv(l, r, o);
    }
  }
  function Rs(n, r, l) {
    var o = Ca(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) na(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ja(E, m)) {
          var x = r.interleaved;
          x === null ? (c.next = c, Cd(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = ln(), Ra(l, n, o, c), Bv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === at || r !== null && r === at;
  }
  function na(n, r) {
    ys = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Bv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var qt = { readContext: Gt, useCallback: B, useContext: B, useEffect: B, useImperativeHandle: B, useInsertionEffect: B, useLayoutEffect: B, useMemo: B, useReducer: B, useRef: B, useState: B, useDebugValue: B, useDeferredValue: B, useTransition: B, useMutableSource: B, useSyncExternalStore: B, useId: B, unstable_isNewReconciler: !1 }, Yc = { readContext: Gt, useCallback: function(n, r) {
    return er().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Es.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = er();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = er();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Pv.bind(null, at, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = er();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Cs, useDeferredValue: function(n) {
    return er().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Vv.bind(null, n[1]), er().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = at, c = er();
    if (pn) {
      if (l === void 0) throw Error(O(407));
      l = l();
    } else {
      if (l = r(), Vn === null) throw Error(O(349));
      bt & 30 || Nc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = er(), r = Vn.identifierPrefix;
    if (pn) {
      var l = Si, o = jr;
      l = (o & ~(1 << 32 - Nr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Wc = {
    readContext: Gt,
    useCallback: Pc,
    useContext: Gt,
    useEffect: Ss,
    useImperativeHandle: pu,
    useInsertionEffect: Hc,
    useLayoutEffect: Vc,
    useMemo: Bc,
    useReducer: fu,
    useRef: Uc,
    useState: function() {
      return fu(ta);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = tr();
      return Ic(r, en.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ta)[0], r = tr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, xs = { readContext: Gt, useCallback: Pc, useContext: Gt, useEffect: Ss, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Vc, useMemo: Bc, useReducer: Tl, useRef: Uc, useState: function() {
    return Tl(ta);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = tr();
    return en === null ? r.memoizedState = n : Ic(r, en.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(ta)[0], r = tr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = ue({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ue({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? ce(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ln(), c = Ca(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ra(r, n, c, o), bc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ln(), c = Ca(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ra(r, n, c, o), bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ln(), o = Ca(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Rl(n, c, o), r !== null && (Ra(r, n, o, l), bc(r, n, o));
  } };
  function Iv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Yv(n, r, l) {
    var o = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gt(d) : (c = Rn(r) ? ja : mn.current, o = r.contextTypes, d = (o = o != null) ? ya(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gt(d) : (d = Rn(r) ? ja : mn.current, c.context = ya(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && $c.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ke(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Gc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(n, r, l) {
    l = Qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      kl || (kl = !0, Ls = o), Od(n, r);
    }, l;
  }
  function Wv(n, r, l) {
    l = Qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $v(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qi(-1, 1), r.tag = 2, Rl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Ee.ReactCurrentOwner, nr = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? sr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Pe(n, r, l, o, d, c), l = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && l && dd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function aa(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (nr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (nr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return Kc(n, r, l, o, c);
  }
  function lt(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, an(yo, Ea), Ea |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, an(yo, Ea), Ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, an(yo, Ea), Ea |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, an(yo, Ea), Ea |= o;
    return _n(n, r, c, l), r.child;
  }
  function ws(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, o, c) {
    var d = Rn(l) ? ja : mn.current;
    return d = ya(r, d), lo(r, c), l = Pe(n, r, l, o, d, c), o = xl(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && o && dd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (Rn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Ua(n, r), Yv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var x = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Gt(A) : (A = Rn(l) ? ja : mn.current, A = ya(r, A));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || x !== A) && Qc(r, m, o, A), Aa = !1;
      var Q = r.memoizedState;
      m.state = Q, _c(r, o, m, c), x = r.memoizedState, E !== o || Q !== x || Un.current || Aa ? (typeof G == "function" && (kd(r, l, G, o), x = r.memoizedState), (E = Aa || Iv(r, l, E, o, Q, x, A)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = x), m.props = o, m.state = x, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ra(r.type, E), m.props = A, q = r.pendingProps, Q = m.context, x = l.contextType, typeof x == "object" && x !== null ? x = Gt(x) : (x = Rn(l) ? ja : mn.current, x = ya(r, x));
      var he = l.getDerivedStateFromProps;
      (G = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || Q !== x) && Qc(r, m, o, x), Aa = !1, Q = r.memoizedState, m.state = Q, _c(r, o, m, c);
      var xe = r.memoizedState;
      E !== q || Q !== xe || Un.current || Aa ? (typeof he == "function" && (kd(r, l, he, o), xe = r.memoizedState), (A = Aa || Iv(r, l, A, o, Q, xe, x) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, xe, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, xe, x)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), m.props = o, m.state = xe, m.context = x, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    ws(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && br(r, l, !1), cr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : _n(n, r, E, d), r.memoizedState = o.state, c && br(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), xd(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return $i(), ds(c), r.flags |= 256, _n(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = yn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), an(yn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = xo(m, o, 0, null), n = Ll(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Zc(l), r.memoizedState = zd, n) : bs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Gv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var x = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = x, r.deletions = null) : (o = Nl(c, x), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ll(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Zc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bs(n, r) {
    return r = xo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ds(o), ri(r, n.child, null, l), n = bs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Gv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Gc(Error(O(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = xo({ mode: "visible", children: o.children }, c, 0, null), d = Ll(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Zc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(O(419)), o = Gc(d, o, void 0), Jc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, nr || E) {
      if (o = Vn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), Ra(o, n, c, -1));
      }
      return Bd(), o = Gc(Error(O(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), Jr = r, pn = !0, ni = null, n !== null && (or[Fn++] = jr, or[Fn++] = Si, or[Fn++] = uu, jr = n.id, Si = n.overflow, uu = r), r = bs(r, o.children), r.flags |= 4096, r);
  }
  function jd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function ef(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ia(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_n(n, r, o.children, l), o = yn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && jd(n, l, r);
        else if (n.tag === 19) jd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (an(yn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && kc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && kc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(O(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), $i();
        break;
      case 5:
        Td(r);
        break;
      case 1:
        Rn(r.type) && lu(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        an(le, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (an(yn, yn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qv(n, r, l) : (an(yn, yn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        an(yn, yn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ia(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), an(yn, yn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, lt(n, r, l);
    }
    return cr(n, r, l);
  }
  var ho, Sa, Wn, qv;
  ho = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Sa = function() {
  }, Wn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Mn(n, c), o = Mn(n, o), d = [];
          break;
        case "select":
          c = ue({}, c, { value: void 0 }), o = ue({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      cn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (ut.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var x = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && x !== E && (x != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in x) x.hasOwnProperty(m) && E[m] !== x[m] && (l || (l = {}), l[m] = x[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = x;
        else A === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, E = E ? E.__html : void 0, x != null && E !== x && (d = d || []).push(A, x)) : A === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(A, "" + x) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (ut.hasOwnProperty(A) ? (x != null && A === "onScroll" && Yt("scroll", n), d || E === x || (d = [])) : (d = d || []).push(A, x));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (wc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kr(r), null;
      case 1:
        return Rn(r.type) && gi(), kr(r), null;
      case 3:
        return o = r.stateNode, oo(), Qt(Un), Qt(mn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (As(ni), ni = null))), Sa(n, r), kr(r), null;
      case 5:
        wd(r);
        var c = cu(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) Wn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(O(166));
            return kr(r), null;
          }
          if (n = cu(Ci.current), bn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Yt(rs[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                Cr(o, d), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                Xn(o, d), Yt("invalid", o);
            }
            cn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ut.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                Ln(o), da(o, d, !0);
                break;
              case "textarea":
                Ln(o), qa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = jn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[os] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = fn(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Yt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = Mn(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ue({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Xn(n, o), c = Kn(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              cn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var x = E[d];
                d === "style" ? Vt(n, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && Ni(n, x)) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && pa(n, x) : typeof x == "number" && pa(n, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ut.hasOwnProperty(d) ? x != null && d === "onScroll" && Yt("scroll", n) : x != null && Ve(n, d, x, m));
              }
              switch (l) {
                case "input":
                  Ln(n), da(n, o, !1);
                  break;
                case "textarea":
                  Ln(n), qa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + tt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? In(n, !!o.multiple, d, !1) : o.defaultValue != null && In(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(O(166));
          if (l = cu(hs.current), cu(Ci.current), bn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return kr(r), null;
      case 13:
        if (Qt(yn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && ea !== null && r.mode & 1 && !(r.flags & 128)) zv(), $i(), r.flags |= 98560, d = !1;
          else if (d = bn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(O(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(O(317));
              d[za] = r;
            } else $i(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), d = !1;
          } else ni !== null && (As(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || yn.current & 1 ? $n === 0 && ($n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return oo(), Sa(n, r), n === null && is(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return Sd(r.type._context), kr(r), null;
      case 17:
        return Rn(r.type) && gi(), kr(r), null;
      case 19:
        if (Qt(yn), d = r.memoizedState, d === null) return kr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return an(yn, yn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Bt() > So && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return kr(r), null;
          } else 2 * Bt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Bt(), r.sibling = null, l = yn.current, an(yn, o ? l & 1 | 2 : l & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return Pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ea & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(O(156, r.tag));
  }
  function Kv(n, r) {
    switch (wc(r), r.tag) {
      case 1:
        return Rn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Qt(Un), Qt(mn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Qt(yn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(O(340));
          $i();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qt(yn), null;
      case 4:
        return oo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, fr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, Se = null;
  function _l(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      xn(n, r, o);
    }
    else l.current = null;
  }
  function Ud(n, r, l) {
    try {
      l();
    } catch (o) {
      xn(n, r, o);
    }
  }
  var Fd = !1;
  function cy(n, r) {
    if (ru = fl, n = vl(), qu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, x = -1, A = 0, G = 0, q = n, Q = null;
          t: for (; ; ) {
            for (var he; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (x = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (he = q.firstChild) !== null; )
              Q = q, q = he;
            for (; ; ) {
              if (q === n) break t;
              if (Q === l && ++A === c && (E = m), Q === d && ++G === o && (x = m), (he = q.nextSibling) !== null) break;
              q = Q, Q = q.parentNode;
            }
            q = he;
          }
          l = E === -1 || x === -1 ? null : { start: E, end: x };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, fl = !1, Se = r; Se !== null; ) if (r = Se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Se = n;
    else for (; Se !== null; ) {
      r = Se;
      try {
        var xe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (xe !== null) {
              var _e = xe.memoizedProps, Dn = xe.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? _e : ra(r.type, _e), Dn);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(O(163));
        }
      } catch (J) {
        xn(r, r.return, J);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Se = n;
        break;
      }
      Se = r.return;
    }
    return xe = Fd, Fd = !1, xe;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ud(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function nf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function rf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Xv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[os], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ks(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  function xi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (xi(n, r, l), n = n.sibling; n !== null; ) xi(n, r, l), n = n.sibling;
  }
  var gn = null, Ar = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) Gi(n, r, l), l = l.sibling;
  }
  function Gi(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(ul, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || _l(l, r);
      case 6:
        var o = gn, c = Ar;
        gn = null, Fa(n, r, l), gn = o, Ar = c, gn !== null && (Ar ? (n = gn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : gn.removeChild(l.stateNode));
        break;
      case 18:
        gn !== null && (Ar ? (n = gn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Na(n)) : to(gn, l.stateNode));
        break;
      case 4:
        o = gn, c = Ar, gn = l.stateNode.containerInfo, Ar = !0, Fa(n, r, l), gn = o, Ar = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ud(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!fr && (_l(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          xn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (o = fr) || l.memoizedState !== null, Fa(n, r, l), fr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new sy()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              gn = E.stateNode, Ar = !1;
              break e;
            case 3:
              gn = E.stateNode.containerInfo, Ar = !0;
              break e;
            case 4:
              gn = E.stateNode.containerInfo, Ar = !0;
              break e;
          }
          E = E.return;
        }
        if (gn === null) throw Error(O(160));
        Gi(d, m, c), gn = null, Ar = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (A) {
        xn(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jv(r, n), r = r.sibling;
  }
  function Jv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), nf(3, n);
          } catch (_e) {
            xn(n, n.return, _e);
          }
          try {
            mo(5, n, n.return);
          } catch (_e) {
            xn(n, n.return, _e);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && _l(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && _l(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (_e) {
            xn(n, n.return, _e);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), fn(E, m);
            var A = fn(E, d);
            for (m = 0; m < x.length; m += 2) {
              var G = x[m], q = x[m + 1];
              G === "style" ? Vt(c, q) : G === "dangerouslySetInnerHTML" ? Ni(c, q) : G === "children" ? pa(c, q) : Ve(c, G, q, A);
            }
            switch (E) {
              case "input":
                zn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? In(c, !!d.multiple, he, !1) : Q !== !!d.multiple && (d.defaultValue != null ? In(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : In(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (_e) {
            xn(n, n.return, _e);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(O(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (_e) {
            xn(n, n.return, _e);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Na(r.containerInfo);
        } catch (_e) {
          xn(n, n.return, _e);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Bt())), o & 4 && Zv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (A = fr) || G, ai(r, n), fr = A) : ai(r, n), ii(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !G && n.mode & 1) for (Se = n, G = n.child; G !== null; ) {
            for (q = Se = G; Se !== null; ) {
              switch (Q = Se, he = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, Q, Q.return);
                  break;
                case 1:
                  _l(Q, Q.return);
                  var xe = Q.stateNode;
                  if (typeof xe.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                    } catch (_e) {
                      xn(o, l, _e);
                    }
                  }
                  break;
                case 5:
                  _l(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    th(q);
                    continue;
                  }
              }
              he !== null ? (he.return = Q, Se = he) : th(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, x = q.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, E.style.display = ct("display", m));
                } catch (_e) {
                  xn(n, n.return, _e);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = A ? "" : q.memoizedProps;
              } catch (_e) {
                xn(n, n.return, _e);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Zv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (af(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(O(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (pa(c, ""), o.flags &= -33);
            var d = ks(n);
            xi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = ks(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(O(161));
        }
      } catch (x) {
        xn(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ds(n, r, l) {
    Se = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Se !== null; ) {
      var c = Se, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, x = E !== null && E.memoizedState !== null || fr;
          E = mu;
          var A = fr;
          if (mu = m, (fr = x) && !A) for (Se = c; Se !== null; ) m = Se, x = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : x !== null ? (x.return = m, Se = x) : Os(c);
          for (; d !== null; ) Se = d, eh(d), d = d.sibling;
          Se = c, mu = E, fr = A;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Se = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var x = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && l.focus();
                    break;
                  case "img":
                    x.src && (l.src = x.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var A = r.alternate;
                if (A !== null) {
                  var G = A.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && Na(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
          fr || r.flags & 512 && rf(r);
        } catch (Q) {
          xn(r, r.return, Q);
        }
      }
      if (r === n) {
        Se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function th(n) {
    for (; Se !== null; ) {
      var r = Se;
      if (r === n) {
        Se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Se = l;
        break;
      }
      Se = r.return;
    }
  }
  function Os(n) {
    for (; Se !== null; ) {
      var r = Se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (x) {
              xn(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                xn(r, c, x);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (x) {
              xn(r, d, x);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (x) {
              xn(r, m, x);
            }
        }
      } catch (x) {
        xn(r, r.return, x);
      }
      if (r === n) {
        Se = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Se = E;
        break;
      }
      Se = r.return;
    }
  }
  var nh = Math.ceil, lf = Ee.ReactCurrentDispatcher, yu = Ee.ReactCurrentOwner, Dr = Ee.ReactCurrentBatchConfig, xt = 0, Vn = null, kn = null, dr = 0, Ea = 0, yo = Zr(0), $n = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, la = null, Vd = 0, So = 1 / 0, qi = null, kl = !1, Ls = null, Ha = null, uf = !1, Dl = null, Ms = 0, Eo = 0, Co = null, Cu = -1, zs = 0;
  function ln() {
    return xt & 6 ? Bt() : Cu !== -1 ? Cu : Cu = Bt();
  }
  function Ca(n) {
    return n.mode & 1 ? xt & 2 && dr !== 0 ? dr & -dr : ou.transition !== null ? (zs === 0 && (zs = Gl()), zs) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Qo(n.type)), n) : 1;
  }
  function Ra(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(O(185));
    cl(n, l, o), (!(xt & 2) || n !== Vn) && (n === Vn && (!(xt & 2) && (Eu |= l), $n === 4 && Ol(n, dr)), rr(n, o), l === 1 && xt === 0 && !(r.mode & 1) && (So = Bt() + 500, cs && zr()));
  }
  function rr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Vn ? dr : 0);
    if (o === 0) l !== null && dn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && dn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : ml(Fs.bind(null, n)), ly(function() {
        !(xt & 6) && zr();
      }), l = null;
      else {
        switch ($o(o)) {
          case 1:
            l = rt;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = ji;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = ji;
        }
        l = oh(l, rh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function rh(n, r) {
    if (Cu = -1, zs = 0, xt & 6) throw Error(O(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Vn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = xt;
      xt |= 2;
      var d = ah();
      (Vn !== n || dr !== r) && (qi = null, So = Bt() + 500, xu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      gd(), lf.current = d, xt = c, kn !== null ? r = 0 : (Vn = null, dr = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = gu, xu(n, 0), Ol(n, o), rr(n, Bt()), l;
      if (r === 6) Ol(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Us(c) && (r = cf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = gu, xu(n, 0), Ol(n, o), rr(n, Bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(O(345));
          case 2:
            Tu(n, la, qi);
            break;
          case 3:
            if (Ol(n, o), (o & 130023424) === o && (r = Vd + 500 - Bt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ln(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(Tu.bind(null, n, la, qi), r);
              break;
            }
            Tu(n, la, qi);
            break;
          case 4:
            if (Ol(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Nr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(Tu.bind(null, n, la, qi), o);
              break;
            }
            Tu(n, la, qi);
            break;
          case 5:
            Tu(n, la, qi);
            break;
          default:
            throw Error(O(329));
        }
      }
    }
    return rr(n, Bt()), n.callbackNode === l ? rh.bind(null, n) : null;
  }
  function js(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (xu(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = la, la = l, r !== null && As(r)), n;
  }
  function As(n) {
    la === null ? la = n : la.push.apply(la, n);
  }
  function Us(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ja(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ol(n, r) {
    for (r &= ~Ns, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (xt & 6) throw Error(O(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return rr(n, Bt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = gu, xu(n, 0), Ol(n, r), rr(n, Bt()), l;
    if (l === 6) throw Error(O(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, la, qi), rr(n, Bt()), null;
  }
  function of(n, r) {
    var l = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = l, xt === 0 && (So = Bt() + 500, cs && zr());
    }
  }
  function Ru(n) {
    Dl !== null && Dl.tag === 0 && !(xt & 6) && Ro();
    var r = xt;
    xt |= 1;
    var l = Dr.transition, o = Dt;
    try {
      if (Dr.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Dr.transition = l, xt = r, !(xt & 6) && zr();
    }
  }
  function Pd() {
    Ea = yo.current, Qt(yo);
  }
  function xu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ov(l)), kn !== null) for (l = kn.return; l !== null; ) {
      var o = l;
      switch (wc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Qt(Un), Qt(mn), ms();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Qt(yn);
          break;
        case 19:
          Qt(yn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Pd();
      }
      l = l.return;
    }
    if (Vn = n, kn = n = Nl(n.current, null), dr = Ea = r, $n = 0, gu = null, Ns = Eu = Su = 0, la = go = null, su !== null) {
      for (r = 0; r < su.length; r++) if (l = su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      su = null;
    }
    return n;
  }
  function sf(n, r) {
    do {
      var l = kn;
      try {
        if (gd(), Oe.current = qt, Dc) {
          for (var o = at.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (bt = 0, Yn = en = at = null, ys = !1, gs = 0, yu.current = null, l === null || l.return === null) {
          $n = 1, gu = r, kn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, x = r;
          if (r = dr, E.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var A = x, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var Q = G.alternate;
              Q ? (G.updateQueue = Q.updateQueue, G.memoizedState = Q.memoizedState, G.lanes = Q.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var he = Ld(m);
            if (he !== null) {
              he.flags &= -257, $v(he, m, E, d, r), he.mode & 1 && Nd(d, A, r), r = he, x = A;
              var xe = r.updateQueue;
              if (xe === null) {
                var _e = /* @__PURE__ */ new Set();
                _e.add(x), r.updateQueue = _e;
              } else xe.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, A, r), Bd();
                break e;
              }
              x = Error(O(426));
            }
          } else if (pn && E.mode & 1) {
            var Dn = Ld(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), $v(Dn, m, E, d, r), ds(bl(x, E));
              break e;
            }
          }
          d = x = bl(x, E), $n !== 4 && ($n = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Ts(d, x, r);
                Hv(d, D);
                break e;
              case 1:
                E = x;
                var b = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Ha === null || !Ha.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Wv(d, E, r);
                  Hv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (fe) {
        r = fe, kn === l && l !== null && (kn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ah() {
    var n = lf.current;
    return lf.current = qt, n === null ? qt : n;
  }
  function Bd() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Vn === null || !(Su & 268435455) && !(Eu & 268435455) || Ol(Vn, dr);
  }
  function cf(n, r) {
    var l = xt;
    xt |= 2;
    var o = ah();
    (Vn !== n || dr !== r) && (qi = null, xu(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (gd(), xt = l, lf.current = o, kn !== null) throw Error(O(261));
    return Vn = null, dr = 0, $n;
  }
  function fy() {
    for (; kn !== null; ) Id(kn);
  }
  function dy() {
    for (; kn !== null && !xr(); ) Id(kn);
  }
  function Id(n) {
    var r = Wd(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : kn = r, yu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Kv(l, r), l !== null) {
          l.flags &= 32767, kn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, kn = null;
          return;
        }
      } else if (l = Ad(l, r, Ea), l !== null) {
        kn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        kn = r;
        return;
      }
      kn = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function Tu(n, r, l) {
    var o = Dt, c = Dr.transition;
    try {
      Dr.transition = null, Dt = 1, py(n, r, l, o);
    } finally {
      Dr.transition = c, Dt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Ro();
    while (Dl !== null);
    if (xt & 6) throw Error(O(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(O(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Yo(n, d), n === Vn && (kn = Vn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(ji, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = Dt;
      Dt = 1;
      var E = xt;
      xt |= 4, yu.current = null, cy(n, l), Jv(l, n), Cv(us), fl = !!ru, us = ru = null, n.current = l, Ds(l), Ka(), xt = E, Dt = m, Dr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Dl = n, Ms = c), d = n.pendingLanes, d === 0 && (Ha = null), Bo(l.stateNode), rr(n, Bt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ls, Ls = null, n;
    return Ms & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, zr(), null;
  }
  function Ro() {
    if (Dl !== null) {
      var n = $o(Ms), r = Dr.transition, l = Dt;
      try {
        if (Dr.transition = null, Dt = 16 > n ? 16 : n, Dl === null) var o = !1;
        else {
          if (n = Dl, Dl = null, Ms = 0, xt & 6) throw Error(O(331));
          var c = xt;
          for (xt |= 4, Se = n.current; Se !== null; ) {
            var d = Se, m = d.child;
            if (Se.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var x = 0; x < E.length; x++) {
                  var A = E[x];
                  for (Se = A; Se !== null; ) {
                    var G = Se;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, Se = q;
                    else for (; Se !== null; ) {
                      G = Se;
                      var Q = G.sibling, he = G.return;
                      if (Xv(G), G === A) {
                        Se = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = he, Se = Q;
                        break;
                      }
                      Se = he;
                    }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var _e = xe.child;
                  if (_e !== null) {
                    xe.child = null;
                    do {
                      var Dn = _e.sibling;
                      _e.sibling = null, _e = Dn;
                    } while (_e !== null);
                  }
                }
                Se = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Se = m;
            else e: for (; Se !== null; ) {
              if (d = Se, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, Se = D;
                break e;
              }
              Se = d.return;
            }
          }
          var b = n.current;
          for (Se = b; Se !== null; ) {
            m = Se;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, Se = M;
            else e: for (m = b; Se !== null; ) {
              if (E = Se, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (fe) {
                xn(E, E.return, fe);
              }
              if (E === m) {
                Se = null;
                break e;
              }
              var J = E.sibling;
              if (J !== null) {
                J.return = E.return, Se = J;
                break e;
              }
              Se = E.return;
            }
          }
          if (xt = c, zr(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(ul, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = bl(l, r), r = Ts(n, r, 1), n = Rl(n, r, 1), r = ln(), n !== null && (cl(n, 1, r), rr(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = bl(l, n), n = Wv(r, n, 1), r = Rl(r, n, 1), n = ln(), r !== null && (cl(r, 1, n), rr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ln(), n.pingedLanes |= n.suspendedLanes & l, Vn === n && (dr & l) === l && ($n === 4 || $n === 3 && (dr & 130023424) === dr && 500 > Bt() - Vd ? xu(n, 0) : Ns |= l), rr(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = ln();
    n = Ei(n, r), n !== null && (cl(n, r, l), rr(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(O(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var Wd;
  Wd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Un.current) nr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return nr = !1, tf(n, r, l);
      nr = !!(n.flags & 131072);
    }
    else nr = !1, pn && r.flags & 1048576 && Lv(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = ya(r, mn.current);
        lo(r, l), c = Pe(null, r, o, n, c, l);
        var d = xl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cl(r), c.updater = $c, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && dd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ra(o, n), c) {
            case 0:
              r = Kc(null, r, o, n, l);
              break e;
            case 1:
              r = oy(null, r, o, n, l);
              break e;
            case 11:
              r = qc(null, r, o, n, l);
              break e;
            case 14:
              r = aa(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(O(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Kc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(O(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bl(Error(O(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bl(Error(O(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (ea = ei(r.stateNode.containerInfo.firstChild), Jr = r, pn = !0, ni = null, l = sr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if ($i(), o === c) {
              r = cr(n, r, l);
              break e;
            }
            _n(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Td(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), ws(n, r), _n(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : _n(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), qc(n, r, o, c, l);
      case 7:
        return _n(n, r, r.pendingProps, l), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, an(le, o._currentValue), o._currentValue = m, d !== null) if (Ja(d.value, m)) {
            if (d.children === c.children && !Un.current) {
              r = cr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var x = E.firstContext; x !== null; ) {
                if (x.context === o) {
                  if (d.tag === 1) {
                    x = Qi(-1, l & -l), x.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var G = A.pending;
                      G === null ? x.next = x : (x.next = G.next, G.next = x), A.pending = x;
                    }
                  }
                  d.lanes |= l, x = d.alternate, x !== null && (x.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                x = x.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(O(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          _n(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Gt(c), o = o(c), r.flags |= 1, _n(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), aa(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Ua(n, r), r.tag = 1, Rn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Yv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ia(n, r, l);
      case 22:
        return lt(n, r, l);
    }
    throw Error(O(156, r.tag));
  };
  function oh(n, r) {
    return on(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === zt) return 11;
      if (n === jt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Be:
        return Ll(l.children, c, d, r);
      case Ie:
        m = 8, c |= 8;
        break;
      case ft:
        return n = Va(12, l, r, c | 2), n.elementType = ft, n.lanes = d, n;
      case st:
        return n = Va(13, l, r, c), n.elementType = st, n.lanes = d, n;
      case Le:
        return n = Va(19, l, r, c), n.elementType = Le, n.lanes = d, n;
      case vt:
        return xo(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ue:
            m = 10;
            break e;
          case At:
            m = 9;
            break e;
          case zt:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case gt:
            m = 16, o = null;
            break e;
        }
        throw Error(O(130, n == null ? n : typeof n, ""));
    }
    return r = Va(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ll(n, r, l, o) {
    return n = Va(7, n, o, r), n.lanes = l, n;
  }
  function xo(n, r, l, o) {
    return n = Va(22, n, o, r), n.elementType = vt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Va(6, n, null, r), n.lanes = l, n;
  }
  function Qd(n, r, l) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, x) {
    return n = new sh(n, r, l, E, x), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: pe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return mt;
    n = n._reactInternals;
    e: {
      if (ce(n) !== n || n.tag !== 1) throw Error(O(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(O(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Rn(l)) return Nv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, x) {
    return n = df(l, o, !0, n, c, d, m, E, x), n.context = fh(null), l = n.current, o = ln(), c = Ca(l), d = Qi(o, c), d.callback = r ?? null, Rl(l, d, c), n.current.lanes = c, cl(n, c, o), rr(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = ln(), m = Ca(c);
    return l = fh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Rl(c, r, m), n !== null && (Ra(n, c, m, d), bc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function dh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    dh(n, r), (n = n.alternate) && dh(n, r);
  }
  function ph() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ml(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Ml.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(O(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Ml.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        pf(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Vu(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = vf(m);
          d.call(A);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Yi] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = vf(x);
        E.call(A);
      };
    }
    var x = df(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = x, n[Yi] = x.current, is(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      pf(r, x, l, o);
    }), x;
  }
  function gf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var x = vf(m);
          E.call(x);
        };
      }
      pf(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return vf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), rr(r, Bt()), !(xt & 6) && (So = Bt() + 500, zr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = ln();
            Ra(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Ot = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = ln();
        Ra(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), l = Ei(n, r);
      if (l !== null) {
        var o = ln();
        Ra(l, n, r, o);
      }
      hf(n, r);
    }
  }, vi = function() {
    return Dt;
  }, Ge = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, Kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Wi(o);
              if (!c) throw Error(O(90));
              qn(o), zn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && In(n, !!l.multiple, r, !1);
    }
  }, Wl = of, $l = Ru;
  var hh = { usingClientEntryPoint: !1, Events: [ss, De, Wi, Da, Li, of] }, Hs = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = dt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber) try {
      ul = Vs.inject(Sy), Gr = Vs;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(O(200));
    return ch(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(O(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Ml(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(O(188)) : (n = Object.keys(n).join(","), Error(O(268, n)));
    return n = dt(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Ru(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(O(200));
    return gf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(O(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(O(200));
    return gf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(O(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = of, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(O(200));
    if (n == null || n._reactInternals === void 0) throw Error(O(38));
    return gf(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Qa = {}, lx;
function vk() {
  if (lx) return Qa;
  lx = 1;
  var F = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var X = Nn, O = sx(), Ae = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ut = !1;
    function Je(e) {
      ut = e;
    }
    function $e(e) {
      if (!ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        et("warn", e, a);
      }
    }
    function S(e) {
      if (!ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        et("error", e, a);
      }
    }
    function et(e, t, a) {
      {
        var i = Ae.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var we = 0, ae = 1, be = 2, te = 3, ie = 4, Z = 5, ge = 6, Ne = 7, yt = 8, Mt = 9, Ve = 10, Ee = 11, ot = 12, pe = 13, Be = 14, Ie = 15, ft = 16, Ue = 17, At = 18, zt = 19, st = 21, Le = 22, jt = 23, gt = 24, vt = 25, W = !0, Re = !1, ue = !1, k = !1, Y = !1, Me = !0, Qe = !0, Ke = !0, ht = !0, kt = /* @__PURE__ */ new Set(), tt = {}, wt = {};
    function $t(e, t) {
      Ln(e, t), Ln(e + "Capture", t);
    }
    function Ln(e, t) {
      tt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tt[e] = t;
      {
        var a = e.toLowerCase();
        wt[a] = e, e === "onDoubleClick" && (wt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        kt.add(t[i]);
    }
    var qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Mn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function zn(e, t) {
      if (Cr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function da(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function Or(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Bn(e);
    }
    function In(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    function Kn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Mn(e)), Bn(e);
    }
    var Xn = 0, Rr = 1, qa = 2, jn = 3, lr = 4, $r = 5, Ni = 6, pa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ne = pa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", je = new RegExp("^[" + pa + "][" + ne + "]*$"), ct = {}, Vt = {};
    function sn(e) {
      return ir.call(Vt, e) ? !0 : ir.call(ct, e) ? !1 : je.test(e) ? (Vt[e] = !0, !0) : (ct[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Zn(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case jn:
            return !t;
          case lr:
            return t === !1;
          case $r:
            return isNaN(t);
          case Ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Kt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === qa || t === jn || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, va = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    va.forEach(function(e) {
      Pt[e] = new Kt(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Pt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        qa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        jn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        Ni,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, Da = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Pt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Pt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, Da);
      Pt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Li = "xlinkHref";
    Pt[Li] = new Kt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Wl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $l = !1;
    function Mi(e) {
      !$l && Wl.test(e) && ($l = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        zn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === jn)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return zn(a, t), u === "" + a ? a : u;
      }
    }
    function ha(e, t, a, i) {
      var u = un(t);
      if (!cn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (sn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (zn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === jn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === jn || _ === lr && a === !0 ? w = "" : (zn(a, y), w = "" + a, u.sanitizeURL && Mi(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ur = Symbol.for("react.element"), ma = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), Ct = Symbol.for("react.scope"), dt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), xr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, Bt = "@@iterator";
    function hn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[Bt];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, di = 0, ji, ic, Ai, ul, Gr, Bo, Nr;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function lc() {
      {
        if (di === 0) {
          ji = console.log, ic = console.info, Ai = console.warn, ul = console.error, Gr = console.group, Bo = console.groupCollapsed, Nr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Io,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function uc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: ji
            }),
            info: rt({}, e, {
              value: ic
            }),
            warn: rt({}, e, {
              value: Ai
            }),
            error: rt({}, e, {
              value: ul
            }),
            group: rt({}, e, {
              value: Gr
            }),
            groupCollapsed: rt({}, e, {
              value: Bo
            }),
            groupEnd: rt({}, e, {
              value: Nr
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ui = Ae.ReactCurrentDispatcher, ol;
    function qr(e, t, a) {
      {
        if (ol === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ol = i && i[1] || "";
          }
        return `
` + ol + e;
      }
    }
    var pi = !1, sl;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      sl = new Fu();
    }
    function Fi(e, t) {
      if (!e || pi)
        return "";
      {
        var a = sl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ui.current, Ui.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && sl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, Ui.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", j = w ? qr(w) : "";
      return typeof e == "function" && sl.set(e, j), j;
    }
    function Gl(e, t, a) {
      return Fi(e, !0);
    }
    function ql(e, t, a) {
      return Fi(e, !1);
    }
    function cl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, cl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case oe:
          return qr("Suspense");
        case ce:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return ql(e.render);
          case St:
            return Yo(e.type, t, a);
          case Xe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return qr(e.type);
        case ft:
          return qr("Lazy");
        case pe:
          return qr("Suspense");
        case zt:
          return qr("SuspenseList");
        case we:
        case be:
        case Ie:
          return ql(e.type);
        case Ee:
          return ql(e.type.render);
        case ae:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function Dt(e) {
      try {
        var t = "", a = e;
        do
          t += Wo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function $o(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function Ot(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case ma:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case oe:
          return "Suspense";
        case ce:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Hu(t) + ".Consumer";
          case zi:
            var a = e;
            return Hu(a._context) + ".Provider";
          case $:
            return $o(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Ot(e.type) || "Memo";
          case Xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ot(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function oc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case gt:
          return "Cache";
        case Mt:
          var i = a;
          return vi(i) + ".Consumer";
        case Ve:
          var u = a;
          return vi(u._context) + ".Provider";
        case At:
          return "DehydratedFragment";
        case Ee:
          return oc(a, a.render, "ForwardRef");
        case Ne:
          return "Fragment";
        case Z:
          return a;
        case ie:
          return "Portal";
        case te:
          return "Root";
        case ge:
          return "Text";
        case ft:
          return Ot(a);
        case yt:
          return a === ci ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case ot:
          return "Profiler";
        case st:
          return "Scope";
        case pe:
          return "Suspense";
        case zt:
          return "SuspenseList";
        case vt:
          return "TracingMarker";
        case ae:
        case we:
        case Ue:
        case be:
        case Be:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = Ae.ReactDebugCurrentFrame, Jn = null, Kr = !1;
    function Lr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function hi() {
      return Jn === null ? "" : Dt(Jn);
    }
    function En() {
      Kl.getCurrentStack = null, Jn = null, Kr = !1;
    }
    function Xt(e) {
      Kl.getCurrentStack = e === null ? null : hi, Jn = e, Kr = !1;
    }
    function Xa() {
      return Jn;
    }
    function Oa(e) {
      Kr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Mr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kn(e), e;
        default:
          return "";
      }
    }
    var qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Vu(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Pu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Na(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
          },
          stopTracking: function() {
            Bu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      Pu(e) || (e._valueTracker = Na(e));
    }
    function fl(e) {
      if (!e)
        return !1;
      var t = Pu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Hi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Iu = !1, dl = !1, Vi = !1, Yu = !1;
    function Qo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ma(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Wu(e, t) {
      Vu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Iu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Iu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Mr(t.value != null ? t.value : i),
        controlled: Qo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Qo(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Vi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vi = !0);
      }
      h(e, t);
      var u = Mr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Tr(u)) : a.value !== Tr(u) && (a.value = Tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ce(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ce(a, t.type, Mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      C(a, t), ee(a, t);
    }
    function ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        zn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Lh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fl(f), C(f, p);
          }
        }
      }
    }
    function Ce(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var ve = !1, Ye = !1, pt = !1;
    function It(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? X.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ye || (Ye = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ve && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ve = !0);
    }
    function Zt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Mr(t.value)));
    }
    var Jt = Array.isArray;
    function it(e) {
      return Jt(e);
    }
    var rn;
    rn = !1;
    function wn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jl = ["value", "defaultValue"];
    function Go(e) {
      {
        Vu("select", e);
        for (var t = 0; t < Jl.length; t++) {
          var a = Jl[t];
          if (e[a] != null) {
            var i = it(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, wn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, wn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Tr(Mr(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function eu(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function nv(e, t) {
      var a = e;
      Vu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (it(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Mr(i)
      };
    }
    function rv(e, t) {
      var a = e, i = Mr(t.value), u = Mr(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Tr(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      rv(e, t);
    }
    var Za = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return qm;
        default:
          return Za;
      }
    }
    function fc(e, t) {
      return e == null || e === Za ? Jf(t) : e === Zf && t === "foreignObject" ? Za : e;
    }
    var Km = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = Km(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, An = 8, Ii = 9, Ko = 11, pl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, $u = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys($u).forEach(function(e) {
      uv.forEach(function(t) {
        $u[lv(t, e)] = $u[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !($u.hasOwnProperty(e) && $u[e]) ? t + "px" : (Or(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, Qu = /^ms-/;
    function Zm(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(Qu, "-ms-");
    }
    var sv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, fv = /-(.)/g, Gu = /;\s*$/, mi = {}, ed = {}, Xo = !1, dv = !1, pv = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pv(e.replace(cv, "ms-"))
        ));
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Gu, "")));
      }, hv = function(e, t) {
        Xo || (Xo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        dv || (dv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Jm.test(e) ? nd(e) : Gu.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var ey = sv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Zm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ey(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ja(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Zo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sv = rt({
      menuitem: !0
    }, Zo), Ev = "__html";
    function vc(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function vl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var qu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Cv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ku = {}, Xu = new RegExp("^(aria)-[" + ne + "]*$"), rd = new RegExp("^(aria)[A-Z][" + ne + "]*$");
    function Jo(e, t) {
      {
        if (ir.call(Ku, t) && Ku[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ku[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ku[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ku[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ku[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jo(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rv(e, t) {
      vl(e, t) || ad(e, t);
    }
    var es = !1;
    function Zu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !es && (es = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var wr = {}, ts = /^on./, xv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + ne + "]*$"), wv = new RegExp("^(aria)[A-Z][" + ne + "]*$");
      hc = function(e, t, a, i) {
        if (ir.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ts.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ts.test(t))
          return xv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Tv.test(t) || wv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = un(t), y = v !== null && v.type === Xn;
        if (qu.hasOwnProperty(u)) {
          var g = qu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : fn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === jn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      vl(e, t) || bv(e, t, a);
    }
    var id = 1, yi = 2, tu = 4, ld = id | yi | tu, ns = null;
    function ry(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function rs() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function ay(e) {
      return e === ns;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var yc = null, Yt = null, hl = null;
    function as(e) {
      var t = bo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Lh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function is(e) {
      yc = e;
    }
    function ud(e) {
      Yt ? hl ? hl.push(e) : hl = [e] : Yt = e;
    }
    function od() {
      return Yt !== null || hl !== null;
    }
    function Ju() {
      if (Yt) {
        var e = Yt, t = hl;
        if (Yt = null, hl = null, as(e), t)
          for (var a = 0; a < t.length; a++)
            as(t[a]);
      }
    }
    var ls = function(e, t) {
      return e(t);
    }, nu = function() {
    }, gc = !1;
    function iy() {
      var e = od();
      e && (nu(), Ju());
    }
    function kv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return ls(e, t, a);
      } finally {
        gc = !1, iy();
      }
    }
    function Dv(e, t, a) {
      ls = e, nu = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Sc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Lh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (qn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        us = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ov = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, j = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Rc.removeEventListener(P, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = j);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          _ = !0, V(), a.apply(i, se), w = !1;
        }
        var ke, Lt = !1, Tt = !1;
        function N(L) {
          if (ke = L.error, Lt = !0, ke === null && L.colno === 0 && L.lineno === 0 && (Tt = !0), L.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), Rc.addEventListener(P, Fe, !1), g.initEvent(P, !1, !1), Rc.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (Lt ? Tt && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", N), !_)
          return V(), Cc.apply(this, arguments);
      };
    }
    var ly = Ov, eo = !1, to = null, ei = !1, xc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function za(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ly.apply(no, arguments);
    }
    function os(e, t, a, i, u, s, f, p, v) {
      if (za.apply(this, arguments), eo) {
        var y = cd();
        ei || (ei = !0, xc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = xc;
        throw ei = !1, xc = null, e;
      }
    }
    function sd() {
      return eo;
    }
    function cd() {
      if (eo) {
        var e = to;
        return eo = !1, to = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ro(e) {
      return e._reactInternals;
    }
    function iu(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var De = (
      /*                      */
      0
    ), Wi = (
      /*                */
      1
    ), Cn = (
      /*                    */
      2
    ), Rt = (
      /*                       */
      4
    ), Zr = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), an = (
      /*                     */
      64
    ), mt = (
      /*                   */
      128
    ), mn = (
      /*            */
      256
    ), Un = (
      /*                          */
      512
    ), ja = (
      /*                     */
      1024
    ), ya = (
      /*                      */
      2048
    ), Rn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), lu = (
      /*                   */
      32768
    ), br = (
      /*                */
      65536
    ), ti = (
      /* */
      131072
    ), cs = (
      /*                       */
      1048576
    ), fs = (
      /*                    */
      2097152
    ), ml = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), zr = (
      /*               */
      16777216
    ), yl = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Rt | ja | 0
    ), ao = Cn | Rt | Zr | Qt | Un | Rn | gi, Sl = Rt | an | Un | gi, or = ya | Zr, Fn = ml | fd | fs, uu = Ae.ReactCurrentOwner;
    function jr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Cn | Rn)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Si(e) {
      if (e.tag === pe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function El(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return jr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === ae) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? jr(u) === u : !1;
    }
    function wc(e) {
      if (jr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jr(e) {
      var t = e.alternate;
      if (!t) {
        var a = jr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return wc(s), e;
            if (v === u)
              return wc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Jr(e);
      return t !== null ? pn(t) : null;
    }
    function pn(e) {
      if (e.tag === Z || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Jr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === Z || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ie) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = O.unstable_scheduleCallback, hd = O.unstable_cancelCallback, md = O.unstable_shouldYield, Mv = O.unstable_requestPaint, bn = O.unstable_now, zv = O.unstable_getCurrentPriorityLevel, $i = O.unstable_ImmediatePriority, ds = O.unstable_UserBlockingPriority, ou = O.unstable_NormalPriority, ps = O.unstable_LowPriority, io = O.unstable_IdlePriority, jv = O.unstable_yieldValue, Av = O.unstable_setDisableYieldValue, ri = null, sr = null, le = null, ga = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Qe && (e = rt({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ri = t.inject(e), sr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (Ke) {
            var i;
            switch (t) {
              case ia:
                i = $i;
                break;
              case Ua:
                i = ds;
                break;
              case cr:
                i = ou;
                break;
              case tf:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            sr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Gt(e) {
      if (typeof jv == "function" && (Av(e), Je(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      le = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Bv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Ei() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function Aa(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function Cl() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Fv(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Qi() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function Rl(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function bc() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function Hv(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function cu() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function xd(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function oo() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function Td(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function wd() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function yn() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function kc(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function bd(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var Oe = (
      /*                         */
      0
    ), Et = (
      /*                 */
      1
    ), bt = (
      /*                    */
      2
    ), at = (
      /*               */
      8
    ), en = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : gs, Dc = Math.log, ys = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / ys | 0) | 0;
    }
    var _d = 31, B = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), Pe = (
      /*                        */
      1
    ), xl = (
      /*    */
      2
    ), er = (
      /*             */
      4
    ), tr = (
      /*            */
      8
    ), ta = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Nc = (
      /*                        */
      256
    ), Lc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), jc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), Uc = (
      /*                       */
      32768
    ), co = (
      /*                       */
      65536
    ), fo = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), Ss = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Vc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Pc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), Ic = (
      /*                             */
      67108864
    ), Vv = pu, po = (
      /*          */
      134217728
    ), Pv = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & Pe)
          return "Sync";
        if (e & xl)
          return "InputContinuousHydration";
        if (e & er)
          return "InputContinuous";
        if (e & tr)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var qt = -1, Yc = so, Wc = pu;
    function xs(e) {
      switch (vu(e)) {
        case Pe:
          return Pe;
        case xl:
          return xl;
        case er:
          return er;
        case tr:
          return tr;
        case ta:
          return ta;
        case fu:
          return fu;
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case jc:
        case Ac:
        case du:
        case Uc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
          return e & Tl;
        case pu:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          return e & Es;
        case po:
          return po;
        case Rs:
          return Rs;
        case wl:
          return wl;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ra(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & Pv;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = xs(p);
        else {
          var v = f & s;
          v !== B && (i = xs(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = xs(y) : s !== B && (i = xs(s));
      }
      if (i === B)
        return B;
      if (t !== B && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === B) {
        var g = vu(i), _ = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ta && (_ & Tl) !== B
        )
          return t;
      }
      (i & er) !== B && (i |= a & ta);
      var w = e.entangledLanes;
      if (w !== B)
        for (var j = e.entanglements, U = i & w; U > 0; ) {
          var V = _n(U), se = 1 << V;
          i |= j[V], U &= ~se;
        }
      return i;
    }
    function kd(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var u = _n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function $c(e, t) {
      switch (e) {
        case Pe:
        case xl:
        case er:
          return t + 250;
        case tr:
        case ta:
        case fu:
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case jc:
        case Ac:
        case du:
        case Uc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
          return t + 5e3;
        case pu:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          return qt;
        case po:
        case Rs:
        case wl:
        case na:
          return qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function Iv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === qt ? ((v & i) === B || (v & u) !== B) && (s[p] = $c(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Yv(e) {
      return xs(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & ~na;
      return t !== B ? t : t & na ? na : B;
    }
    function Dd(e) {
      return (e & Pe) !== B;
    }
    function bl(e) {
      return (e & Pv) !== B;
    }
    function Gc(e) {
      return (e & Es) === e;
    }
    function Od(e) {
      var t = Pe | er | ta;
      return (e & t) === B;
    }
    function uy(e) {
      return (e & Tl) === e;
    }
    function Ts(e, t) {
      var a = xl | er | tr | ta;
      return (t & a) !== B;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function Nd(e) {
      return (e & Tl) !== B;
    }
    function Ld() {
      var e = Yc;
      return Yc <<= 1, (Yc & Tl) === B && (Yc = so), e;
    }
    function $v() {
      var e = Wc;
      return Wc <<= 1, (Wc & Es) === B && (Wc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function nr(e) {
      return vu(e);
    }
    function _n(e) {
      return 31 - Yn(e);
    }
    function qc(e) {
      return _n(e);
    }
    function aa(e, t) {
      return (e & t) !== B;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _n(i), s = 1 << u;
        a[u] = qt, i &= ~s;
      }
    }
    function Zc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p;
        i[p] = B, u[p] = qt, s[p] = qt, f &= ~v;
      }
    }
    function bs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _n(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case er:
          i = xl;
          break;
        case ta:
          i = tr;
          break;
        case so:
        case Oc:
        case Nc:
        case Lc:
        case Mc:
        case zc:
        case jc:
        case Ac:
        case du:
        case Uc:
        case co:
        case fo:
        case Fc:
        case Ss:
        case Hc:
        case Vc:
        case pu:
        case Cs:
        case Pc:
        case Bc:
        case Ic:
          i = fu;
          break;
        case wl:
          i = Rs;
          break;
        default:
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
    }
    function Gv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function jd(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var ia = Pe, Ua = er, cr = ta, tf = wl, ho = Hn;
    function Sa() {
      return ho;
    }
    function Wn(e) {
      ho = e;
    }
    function qv(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function _s(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function kr(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Kv(e) {
      var t = vu(e);
      return Ad(ia, t) ? Ad(Ua, t) ? bl(t) ? cr : tf : Ua : ia;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function sy(e) {
      fr = e;
    }
    function Se(e) {
      fr(e);
    }
    var _l;
    function Ud(e) {
      _l = e;
    }
    var Fd;
    function cy(e) {
      Fd = e;
    }
    var mo;
    function nf(e) {
      mo = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var af = !1, ks = [], Ri = null, xi = null, gn = null, Ar = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Gi = [], Zv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Zv.indexOf(e) > -1;
    }
    function Jv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ii(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          xi = null;
          break;
        case "mouseover":
        case "mouseout":
          gn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ar.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Fa.delete(i);
          break;
        }
      }
    }
    function Ds(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Jv(t, a, i, u, s);
        if (t !== null) {
          var p = bo(t);
          p !== null && _l(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function eh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Ds(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return xi = Ds(xi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return gn = Ds(gn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ar.set(y, Ds(Ar.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Fa.set(_, Ds(Fa.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Is(e.target);
      if (t !== null) {
        var a = jr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === pe) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = El(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function th(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Gi.length && Ad(t, Gi[i].priority); i++)
        ;
      Gi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Os(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), rs();
        } else {
          var f = bo(i);
          return f !== null && _l(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function nh(e, t, a) {
      Os(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ri !== null && Os(Ri) && (Ri = null), xi !== null && Os(xi) && (xi = null), gn !== null && Os(gn) && (gn = null), Ar.forEach(nh), Fa.forEach(nh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, lf)));
    }
    function Dr(e) {
      if (ks.length > 0) {
        yu(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), xi !== null && yu(xi, e), gn !== null && yu(gn, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ar.forEach(i), Fa.forEach(i);
      for (var u = 0; u < Gi.length; u++) {
        var s = Gi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Gi.length > 0; ) {
        var f = Gi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Gi.shift();
      }
    }
    var xt = Ae.ReactCurrentBatchConfig, Vn = !0;
    function kn(e) {
      Vn = !!e;
    }
    function dr() {
      return Vn;
    }
    function Ea(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ia:
          u = yo;
          break;
        case Ua:
          u = $n;
          break;
        case cr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = Sa(), s = xt.transition;
      xt.transition = null;
      try {
        Wn(ia), gu(e, t, a, i);
      } finally {
        Wn(u), xt.transition = s;
      }
    }
    function $n(e, t, a, i) {
      var u = Sa(), s = xt.transition;
      xt.transition = null;
      try {
        Wn(Ua), gu(e, t, a, i);
      } finally {
        Wn(u), xt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Vn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = bo(u);
          s !== null && Se(s);
          var f = Ns(e, t, a, i);
          if (f === null && _y(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Eu = null;
    function Ns(e, t, a, i) {
      Eu = null;
      var u = mc(i), s = Is(u);
      if (s !== null) {
        var f = jr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === pe) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (mu(y))
              return El(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Eu = s, null;
    }
    function go(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ia;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ua;
        case "message": {
          var t = zv();
          switch (t) {
            case $i:
              return ia;
            case ds:
              return Ua;
            case ou:
            case ps:
              return cr;
            case io:
              return tf;
            default:
              return cr;
          }
        }
        default:
          return cr;
      }
    }
    function la(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Vd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function So(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var kl = null, Ls = null, Ha = null;
    function uf(e) {
      return kl = e, Ls = Eo(), !0;
    }
    function Dl() {
      kl = null, Ls = null, Ha = null;
    }
    function Ms() {
      if (Ha)
        return Ha;
      var e, t = Ls, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = u.slice(e, p), Ha;
    }
    function Eo() {
      return "value" in kl ? kl.value : kl.textContent;
    }
    function Co(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function ln(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ra = ln(Ca), rr = rt({}, Ca, {
      view: 0,
      detail: 0
    }), rh = ln(rr), js, As, Us;
    function Ol(e) {
      e !== Us && (Us && e.type === "mousemove" ? (js = e.screenX - Us.screenX, As = e.screenY - Us.screenY) : (js = 0, As = 0), Us = e);
    }
    var Fs = rt({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ol(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), of = ln(Fs), Ru = rt({}, Fs, {
      dataTransfer: 0
    }), Pd = ln(Ru), xu = rt({}, rr, {
      relatedTarget: 0
    }), sf = ln(xu), ah = rt({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = ln(ah), cf = rt({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = ln(cf), dy = rt({}, Ca, {
      data: 0
    }), Id = ln(dy), ih = Id, Tu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, py = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ro(e) {
      if (e.key) {
        var t = Tu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Co(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? py[e.keyCode] || "Unidentified" : "";
    }
    var lh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function xn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = lh[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return xn;
    }
    var uh = rt({}, rr, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Co(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = ln(uh), hy = rt({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Wd = ln(hy), oh = rt({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), my = ln(oh), Va = rt({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $d = ln(Va), yy = rt({}, Fs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = ln(yy), ff = [9, 13, 27, 32], Ll = 229, xo = qn && "CompositionEvent" in window, wu = null;
    qn && "documentMode" in document && (wu = document.documentMode);
    var Qd = qn && "TextEvent" in window && !wu, sh = qn && (!xo || wu && wu > 8 && wu <= 11), df = 32, ch = String.fromCharCode(df);
    function fh() {
      $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $t("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $t("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dh(e, t) {
      return e === "keydown" && t.keyCode === Ll;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ll;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ph(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qd(e) {
      return e.locale === "ko";
    }
    var Ml = !1;
    function mf(e, t, a, i, u) {
      var s, f;
      if (xo ? s = vf(t) : Ml ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !qd(i) && (!Ml && s === "onCompositionStart" ? Ml = uf(u) : s === "onCompositionEnd" && Ml && (f = Ms()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new Id(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ph(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Kd(e, t) {
      switch (e) {
        case "compositionend":
          return ph(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, ch);
        case "textInput":
          var i = t.data;
          return i === ch && Gd ? null : i;
        default:
          return null;
      }
    }
    function yf(e, t) {
      if (Ml) {
        if (e === "compositionend" || !xo && hf(e, t)) {
          var a = Ms();
          return Dl(), Ml = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sh && !qd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, i, u) {
      var s;
      if (Qd ? s = Kd(t, i) : s = yf(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ih("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      mf(e, t, a, i, u), vh(e, t, a, i, u);
    }
    var gf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function hh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Hs(e) {
      if (!qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sy() {
      $t("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Vs(e, t, a, i) {
      ud(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Ra("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Vs(t, r, e, mc(e)), kv(c, t);
    }
    function c(e) {
      D0(e, 0);
    }
    function d(e) {
      var t = Tf(e);
      if (fl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    qn && (E = Hs("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", G);
    }
    function A() {
      n && (n.detachEvent("onpropertychange", G), n = null, r = null);
    }
    function G(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (A(), x(t, a)) : e === "focusout" && A();
    }
    function Q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function he(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function xe(e, t) {
      if (e === "click")
        return d(t);
    }
    function _e(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Dn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ce(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window, v, y;
      if (l(p) ? v = m : hh(p) ? E ? v = _e : (v = Q, y = q) : he(p) && (v = xe), v) {
        var g = v(t, a);
        if (g) {
          Vs(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Dn(p);
    }
    function b() {
      Ln("onMouseEnter", ["mouseout", "mouseover"]), Ln("onMouseLeave", ["mouseout", "mouseover"]), Ln("onPointerEnter", ["pointerout", "pointerover"]), Ln("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function M(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ay(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Is(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, j;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, j = U ? Is(U) : null, j !== null) {
            var V = jr(j);
            (j !== V || j.tag !== Z && j.tag !== ge) && (j = null);
          }
        } else
          w = null, j = a;
        if (w !== j) {
          var se = of, Fe = "onMouseLeave", ke = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = Wd, Fe = "onPointerLeave", ke = "onPointerEnter", Lt = "pointer");
          var Tt = w == null ? g : Tf(w), N = j == null ? g : Tf(j), P = new se(Fe, Lt + "leave", w, i, u);
          P.target = Tt, P.relatedTarget = N;
          var L = null, K = Is(u);
          if (K === a) {
            var ye = new se(ke, Lt + "enter", j, i, u);
            ye.target = N, ye.relatedTarget = Tt, L = ye;
          }
          jx(e, P, L, w, j);
        }
      }
    }
    function J(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : J;
    function ze(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function He(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function qe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qn(e, t) {
      for (var a = He(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = He(qe(a));
      }
    }
    function Ut(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zl(e, u, s, f, p);
    }
    function zl(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Ey(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Qn(e, f), g = Qn(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function y0(e) {
      return e && e.nodeType === Bi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : y0(e) ? !1 : y0(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yx(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function gx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (gx(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Sx() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? Cx(e) : null
      };
    }
    function Ex(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && yx(a)) {
        i !== null && Cy(a) && Rx(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Cx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ut(e), t || {
        start: 0,
        end: 0
      };
    }
    function Rx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ey(e, t);
    }
    var xx = qn && "documentMode" in document && document.documentMode <= 11;
    function Tx() {
      $t("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Ry = null, Xd = null, xy = !1;
    function wx(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function bx(e) {
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = bx(a);
      if (!(xy || Sf == null || Sf !== Hi(i))) {
        var u = wx(Sf);
        if (!Xd || !ze(Xd, u)) {
          Xd = u;
          var s = Sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function _x(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (hh(p) || p.contentEditable === "true") && (Sf = p, Ry = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Ry = null, Xd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, E0(e, i, u);
          break;
        case "selectionchange":
          if (xx)
            break;
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, Ty = {}, C0 = {};
    qn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function yh(e) {
      if (Ty[e])
        return Ty[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return Ty[e] = t[a];
      return e;
    }
    var R0 = yh("animationend"), x0 = yh("animationiteration"), T0 = yh("animationstart"), w0 = yh("transitionend"), b0 = /* @__PURE__ */ new Map(), _0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function To(e, t) {
      b0.set(e, t), $t(t, [e]);
    }
    function kx() {
      for (var e = 0; e < _0.length; e++) {
        var t = _0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        To(a, "on" + i);
      }
      To(R0, "onAnimationEnd"), To(x0, "onAnimationIteration"), To(T0, "onAnimationStart"), To("dblclick", "onDoubleClick"), To("focusin", "onFocus"), To("focusout", "onBlur"), To(w0, "onTransitionEnd");
    }
    function Dx(e, t, a, i, u, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var v = Ra, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = my;
            break;
          case R0:
          case x0:
          case T0:
            v = Bd;
            break;
          case w0:
            v = $d;
            break;
          case "scroll":
            v = rh;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wd;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = Mx(a, p, i.type, g, _);
          if (w.length > 0) {
            var j = new v(p, y, null, i, u);
            e.push({
              event: j,
              listeners: w
            });
          }
        }
      }
    }
    kx(), b(), Sy(), Tx(), fh();
    function Ox(e, t, a, i, u, s, f) {
      Dx(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (M(e, t, a, i, u), D(e, t, a, i, u), _x(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, os(i, t, void 0, e), e.currentTarget = null;
    }
    function Nx(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          k0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, j = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          k0(e, j, w), i = _;
        }
    }
    function D0(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        Nx(s, f, a);
      }
      Yi();
    }
    function Lx(e, t, a, i, u) {
      var s = mc(a), f = [];
      Ox(f, e, i, a, s, t), D0(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = o1(t), u = Ax(e);
      i.has(u) || (O0(t, e, yi, a), i.add(u));
    }
    function by(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), O0(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[gh]) {
        e[gh] = !0, kt.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, by("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Ea(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? qi(e, t, s, f) : la(e, t, s);
    }
    function N0(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === ie) {
              var y = p.stateNode.containerInfo;
              if (N0(y, f))
                break;
              if (v === ie)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === te || _ === ie) {
                    var w = g.stateNode.containerInfo;
                    if (N0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var j = Is(y);
                if (j === null)
                  return;
                var U = j.tag;
                if (U === Z || U === ge) {
                  p = s = j;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      kv(function() {
        return Lx(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Mx(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, j = _.tag;
        if (j === Z && w !== null && (g = w, p !== null)) {
          var U = ru(y, p);
          U != null && v.push(ep(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = ru(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function zx(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === Z && g !== null) {
          var w = g;
          if (u) {
            var j = ru(p, s);
            j != null && f.unshift(ep(p, j, w));
          } else if (!u) {
            var U = ru(p, s);
            U != null && f.push(ep(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function jx(e, t, a, i, u) {
      var s = i && u ? zx(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function Ax(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, tp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", M0 = "autoFocus", Ps = "children", Bs = "style", Ch = "__html", ky, Rh, np, z0, xh, j0, A0;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      Rv(e, t), Zu(e, t), _v(e, t, {
        registrationNameDependencies: tt,
        possibleRegistrationNames: wt
      });
    }, j0 = qn && !document.documentMode, np = function(e, t, a) {
      if (!Pa) {
        var i = Th(a), u = Th(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, xh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === Za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Ux = /\r\n?/g, Fx = /\u0000|\uFFFD/g;
    function Th(e) {
      In(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Ux, `
`).replace(Fx, "");
    }
    function wh(e, t, a, i) {
      var u = Th(t), s = Th(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && W))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function Hx() {
    }
    function bh(e) {
      e.onclick = Hx;
    }
    function Vx(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), yv(t, f);
          else if (s === tp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pl(t, f);
            } else typeof f == "number" && pl(t, "" + f);
          else s === Eh || s === wo || s === M0 || (tt.hasOwnProperty(s) ? f != null && (typeof f != "function" && xh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function Px(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === tp ? iv(e, f) : s === Ps ? pl(e, f) : ha(e, s, f, i);
      }
    }
    function Bx(e, t, a, i) {
      var u, s = U0(a), f, p = i;
      if (p === Za && (p = Jf(e)), p === Za) {
        if (u = vl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Za && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function Ix(e, t) {
      return U0(t).createTextNode(e);
    }
    function Yx(e, t, a, i) {
      var u = vl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Sn(Zd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Wu(e, a), s = Ma(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = eu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), Vx(t, e, i, s, u), t) {
        case "input":
          La(e), z(e, a, !1);
          break;
        case "textarea":
          La(e), av(e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function Wx(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ma(e, a), p = Ma(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === Eh || v === wo || v === M0 || (tt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], j = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === j || w == null && j == null))
          if (v === Bs)
            if (w && Object.freeze(w), j) {
              for (y in j)
                j.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && j[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var U = w ? w[Ch] : void 0, V = j ? j[Ch] : void 0;
            U != null && V !== U && (s = s || []).push(v, U);
          } else v === Ps ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === wo || (tt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && xh(v, w), v === "onScroll" && Sn("scroll", e)), !s && j !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Ja(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function $x(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = vl(a, i), f = vl(a, u);
      switch (Px(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function Qx(e) {
      {
        var t = e.toLowerCase();
        return qu.hasOwnProperty(t) && qu[t] || null;
      }
    }
    function Gx(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = vl(t, a), Rh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Sn(Zd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Wu(e, a), Sn("invalid", e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          nv(e, a), Sn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var j = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var V = a[U];
          if (U === Ps)
            typeof V == "string" ? e.textContent !== V && (a[wo] !== !0 && wh(e.textContent, V, s, f), j = [Ps, V]) : typeof V == "number" && e.textContent !== "" + V && (a[wo] !== !0 && wh(e.textContent, V, s, f), j = [Ps, "" + V]);
          else if (tt.hasOwnProperty(U))
            V != null && (typeof V != "function" && xh(U, V), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var se = void 0, Fe = un(U);
            if (a[wo] !== !0) {
              if (!(U === Eh || U === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var ke = e.innerHTML, Lt = V ? V[Ch] : void 0;
                  if (Lt != null) {
                    var Tt = A0(e, Lt);
                    Tt !== ke && np(U, ke, Tt);
                  }
                } else if (U === Bs) {
                  if (v.delete(U), j0) {
                    var N = ty(V);
                    se = e.getAttribute("style"), N !== se && np(U, se, N);
                  }
                } else if (p && !Y)
                  v.delete(U.toLowerCase()), se = si(e, U, V), V !== se && np(U, se, V);
                else if (!cn(U, Fe, p) && !Zn(U, V, Fe, p)) {
                  var P = !1;
                  if (Fe !== null)
                    v.delete(Fe.attributeName), se = Ql(e, U, V, Fe);
                  else {
                    var L = i;
                    if (L === Za && (L = Jf(t)), L === Za)
                      v.delete(U.toLowerCase());
                    else {
                      var K = Qx(U);
                      K !== null && K !== U && (P = !0, v.delete(K)), v.delete(U);
                    }
                    se = si(e, U, V);
                  }
                  var ye = Y;
                  !ye && V !== se && !P && np(U, se, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && z0(v), t) {
        case "input":
          La(e), z(e, a, !0);
          break;
        case "textarea":
          La(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return j;
    }
    function qx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Kx(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var Xx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Zx = F0.concat(["button"]), Jx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], H0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = rt({}, e || H0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Zx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Xx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var eT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Jx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, tT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, V0 = {};
      rp = function(e, t, a) {
        a = a || H0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = eT(e, u) ? null : i, f = s ? null : tT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!V0[y]) {
            V0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", kh = "$", Dh = "/$", ip = "$?", lp = "$!", nT = "style", My = null, zy = null;
    function rT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case Ko: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function aT(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Bk(e) {
      return e;
    }
    function iT(e) {
      My = dr(), zy = Sx();
      var t = null;
      return kn(!1), t;
    }
    function lT(e) {
      Ex(zy), kn(My), My = null, zy = null;
    }
    function uT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = Bx(e, t, a, s);
      return sp(u, y), By(y, t), y;
    }
    function oT(e, t) {
      e.appendChild(t);
    }
    function sT(e, t, a, i, u) {
      switch (Yx(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function cT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return Wx(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fT(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = Ix(e, t);
      return sp(i, s), s;
    }
    function dT() {
      var e = window.event;
      return e === void 0 ? cr : go(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, pT = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, P0 = typeof Promise == "function" ? Promise : void 0, vT = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(hT);
    } : Ay;
    function hT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function yT(e, t, a, i, u, s) {
      $x(e, t, a, i, u), By(e, u);
    }
    function B0(e) {
      pl(e, "");
    }
    function gT(e, t, a) {
      e.nodeValue = a;
    }
    function ST(e, t) {
      e.appendChild(t);
    }
    function ET(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function CT(e, t, a) {
      e.insertBefore(t, a);
    }
    function RT(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function xT(e, t) {
      e.removeChild(t);
    }
    function TT(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), Dr(t);
              return;
            } else
              i--;
          else (s === kh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      Dr(t);
    }
    function wT(e, t) {
      e.nodeType === An ? Fy(e.parentNode, t) : e.nodeType === Xr && Fy(e, t), Dr(e);
    }
    function bT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _T(e) {
      e.nodeValue = "";
    }
    function kT(e, t) {
      e = e;
      var a = t[nT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function DT(e, t) {
      e.nodeValue = t;
    }
    function OT(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function NT(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function LT(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function MT(e) {
      return e.nodeType !== An ? null : e;
    }
    function I0(e) {
      return e.data === ip;
    }
    function Hy(e) {
      return e.data === lp;
    }
    function zT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function jT(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === kh || a === lp || a === ip)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Oh(e.nextSibling);
    }
    function AT(e) {
      return Oh(e.firstChild);
    }
    function UT(e) {
      return Oh(e.firstChild);
    }
    function FT(e) {
      return Oh(e.nextSibling);
    }
    function HT(e, t, a, i, u, s, f) {
      sp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Et) !== Oe;
      return Gx(e, t, a, p, i, y, f);
    }
    function VT(e, t, a, i) {
      return sp(a, e), a.mode & Et, qx(e, t);
    }
    function PT(e, t) {
      sp(t, e);
    }
    function BT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === kh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === kh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function IT(e) {
      Dr(e);
    }
    function YT(e) {
      Dr(e);
    }
    function WT(e) {
      return e !== "head" && e !== "body";
    }
    function $T(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function QT(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function GT(e, t) {
      t.nodeType === Xr ? Dy(e, t) : t.nodeType === An || Oy(e, t);
    }
    function qT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? Dy(a, t) : t.nodeType === An || Oy(a, t));
      }
    }
    function KT(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Xr ? Dy(a, i) : i.nodeType === An || Oy(a, i));
    }
    function XT(e, t, a) {
      Ny(e, t);
    }
    function ZT(e, t) {
      Ly(e, t);
    }
    function JT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ny(i, t);
      }
    }
    function e1(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function t1(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Ny(a, i);
    }
    function n1(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function r1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function a1(e) {
      Jd(e);
    }
    var Rf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Rf, Vy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Py = "__reactEvents$" + Rf, i1 = "__reactListeners$" + Rf, l1 = "__reactHandles$" + Rf;
    function u1(e) {
      delete e[xf], delete e[Vy], delete e[Py], delete e[i1], delete e[l1];
    }
    function sp(e, t) {
      t[xf] = e;
    }
    function Nh(e, t) {
      t[op] = e;
    }
    function W0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Is(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[xf];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function bo(e) {
      var t = e[xf] || e[op];
      return t && (t.tag === Z || t.tag === ge || t.tag === pe || t.tag === te) ? t : null;
    }
    function Tf(e) {
      if (e.tag === Z || e.tag === ge)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function o1(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Q0 = Ae.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Yo(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Mh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Mh(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, Mh(u), S("Failed %s type: %s", a, p.message), Mh(null));
          }
      }
    }
    var Iy = [], zh;
    zh = [];
    var bu = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (bu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[bu] && S("Unexpected Fiber popped."), e.current = Iy[bu], Iy[bu] = null, zh[bu] = null, bu--;
    }
    function oa(e, t, a) {
      bu++, Iy[bu] = e.current, zh[bu] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var li = {};
    Object.freeze(li);
    var _u = _o(li), jl = _o(!1), Wy = li;
    function wf(e, t, a) {
      return a && Al(t) ? Wy : _u.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function bf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function jh() {
      return jl.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      ua(jl, e), ua(_u, e);
    }
    function $y(e) {
      ua(jl, e), ua(_u, e);
    }
    function q0(e, t, a) {
      {
        if (_u.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(_u, t, e), oa(jl, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Uh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Wy = _u.current, oa(_u, a, e), oa(jl, jl.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(jl, e), ua(_u, e), oa(_u, u, e), oa(jl, a, e);
        } else
          ua(jl, e), oa(jl, a, e);
      }
    }
    function s1(e) {
      {
        if (!Lv(e) || e.tag !== ae)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ae: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ko = 0, Fh = 1, ku = null, Qy = !1, Gy = !1;
    function Z0(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function c1(e) {
      Qy = !0, Z0(e);
    }
    function J0() {
      Qy && Do();
    }
    function Do() {
      if (!Gy && ku !== null) {
        Gy = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = ku;
          for (Wn(ia); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Qy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vd($i, Do), s;
        } finally {
          Wn(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Hh = null, Vh = 0, Ti = [], wi = 0, Ys = null, Du = 1, Ou = "";
    function f1(e) {
      return $s(), (e.flags & cs) !== De;
    }
    function d1(e) {
      return $s(), Vh;
    }
    function p1() {
      var e = Ou, t = Du, a = t & ~v1(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      $s(), _f[kf++] = Vh, _f[kf++] = Hh, Hh = e, Vh = t;
    }
    function eE(e, t, a) {
      $s(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Ys, Ys = e;
      var i = Du, u = Ou, s = Ph(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ph(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, j = s - y, U = Ph(t) + j, V = p << j, se = V | w, Fe = _ + u;
        Du = 1 << U | se, Ou = Fe;
      } else {
        var ke = p << s, Lt = ke | f, Tt = u;
        Du = 1 << v | Lt, Ou = Tt;
      }
    }
    function qy(e) {
      $s();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), eE(e, a, i);
      }
    }
    function Ph(e) {
      return 32 - Yn(e);
    }
    function v1(e) {
      return 1 << Ph(e) - 1;
    }
    function Ky(e) {
      for (; e === Hh; )
        Hh = _f[--kf], _f[kf] = null, Vh = _f[--kf], _f[kf] = null;
      for (; e === Ys; )
        Ys = Ti[--wi], Ti[wi] = null, Ou = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null;
    }
    function h1() {
      return $s(), Ys !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function m1(e, t) {
      $s(), Ti[wi++] = Du, Ti[wi++] = Ou, Ti[wi++] = Ys, Du = t.id, Ou = t.overflow, Ys = e;
    }
    function $s() {
      Fr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, bi = null, Xi = !1, Qs = !1, Oo = null;
    function y1() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      Qs = !0;
    }
    function g1() {
      return Qs;
    }
    function S1(e) {
      var t = e.stateNode.containerInfo;
      return bi = UT(t), Ur = e, Xi = !0, Oo = null, Qs = !1, !0;
    }
    function E1(e, t, a) {
      return bi = FT(t), Ur = e, Xi = !0, Oo = null, Qs = !1, a !== null && m1(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case te: {
          GT(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Et) !== Oe;
          KT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case pe: {
          var i = e.memoizedState;
          i.dehydrated !== null && qT(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = T_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Zr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, XT(a, i);
                break;
              case ge:
                var u = t.pendingProps;
                ZT(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Et) !== Oe;
                t1(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case ge: {
                var _ = t.pendingProps, w = (e.mode & Et) !== Oe;
                n1(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case pe: {
            var j = e.memoizedState, U = j.dehydrated;
            if (U !== null) switch (t.tag) {
              case Z:
                var V = t.type;
                t.pendingProps, JT(U, V);
                break;
              case ge:
                var se = t.pendingProps;
                e1(U, se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function aE(e, t) {
      t.flags = t.flags & ~Rn | Cn, Xy(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = NT(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, bi = AT(i), !0) : !1;
        }
        case ge: {
          var u = e.pendingProps, s = LT(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, bi = null, !0) : !1;
        }
        case pe: {
          var f = MT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: h1(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = w_(f);
            return v.return = e, e.child = v, Ur = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & Et) !== Oe && (e.flags & mt) === De;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Xi) {
        var t = bi;
        if (!t) {
          Zy(e) && (Xy(Ur, e), Jy()), aE(Ur, e), Xi = !1, Ur = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          Zy(e) && (Xy(Ur, e), Jy()), t = up(a);
          var i = Ur;
          if (!t || !iE(e, t)) {
            aE(Ur, e), Xi = !1, Ur = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function C1(e, t, a) {
      var i = e.stateNode, u = !Qs, s = HT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function R1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = VT(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Et) !== Oe;
              $T(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Et) !== Oe;
              QT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function x1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      PT(a, e);
    }
    function T1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return BT(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== te && t.tag !== pe; )
        t = t.return;
      Ur = t;
    }
    function Bh(e) {
      if (e !== Ur)
        return !1;
      if (!Xi)
        return lE(e), Xi = !0, !1;
      if (e.tag !== te && (e.tag !== Z || WT(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (Zy(e))
            uE(e), Jy();
          else
            for (; t; )
              rE(e, t), t = up(t);
      }
      return lE(e), e.tag === pe ? bi = T1(e) : bi = Ur ? up(e.stateNode) : null, !0;
    }
    function w1() {
      return Xi && bi !== null;
    }
    function uE(e) {
      for (var t = bi; t; )
        nE(e, t), t = up(t);
    }
    function Df() {
      Ur = null, bi = null, Xi = !1, Qs = !1;
    }
    function oE() {
      Oo !== null && (tR(Oo), Oo = null);
    }
    function Fr() {
      return Xi;
    }
    function tg(e) {
      Oo === null ? Oo = [e] : Oo.push(e);
    }
    var b1 = Ae.ReactCurrentBatchConfig, _1 = null;
    function k1() {
      return b1.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var D1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & at && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & at && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & at && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & at && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ge(w) || "Component"), qs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ge(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ge(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ge(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ge(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ge(w) || "Component"), qs.add(w.type);
        }), mp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          $e(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          $e(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Gs(u);
          $e(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = D1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ih.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), sE.add(s.type);
            });
            var u = Gs(i);
            try {
              Xt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              En();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, cE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, cE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function O1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & at || Me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ae) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !O1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ae)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ga(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ge(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dE(e) {
      function t(N, P) {
        if (e) {
          var L = N.deletions;
          L === null ? (N.deletions = [P], N.flags |= Zr) : L.push(P);
        }
      }
      function a(N, P) {
        if (!e)
          return null;
        for (var L = P; L !== null; )
          t(N, L), L = L.sibling;
        return null;
      }
      function i(N, P) {
        for (var L = /* @__PURE__ */ new Map(), K = P; K !== null; )
          K.key !== null ? L.set(K.key, K) : L.set(K.index, K), K = K.sibling;
        return L;
      }
      function u(N, P) {
        var L = ac(N, P);
        return L.index = 0, L.sibling = null, L;
      }
      function s(N, P, L) {
        if (N.index = L, !e)
          return N.flags |= cs, P;
        var K = N.alternate;
        if (K !== null) {
          var ye = K.index;
          return ye < P ? (N.flags |= Cn, P) : ye;
        } else
          return N.flags |= Cn, P;
      }
      function f(N) {
        return e && N.alternate === null && (N.flags |= Cn), N;
      }
      function p(N, P, L, K) {
        if (P === null || P.tag !== ge) {
          var ye = t0(L, N.mode, K);
          return ye.return = N, ye;
        } else {
          var de = u(P, L);
          return de.return = N, de;
        }
      }
      function v(N, P, L, K) {
        var ye = L.type;
        if (ye === Qr)
          return g(N, P, L.props.children, K, L.key);
        if (P !== null && (P.elementType === ye || // Keep this check inline so it only runs on the false path:
        yR(P, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Xe && fE(ye) === P.type)) {
          var de = u(P, L.props);
          return de.ref = yp(N, P, L), de.return = N, de._debugSource = L._source, de._debugOwner = L._owner, de;
        }
        var We = e0(L, N.mode, K);
        return We.ref = yp(N, P, L), We.return = N, We;
      }
      function y(N, P, L, K) {
        if (P === null || P.tag !== ie || P.stateNode.containerInfo !== L.containerInfo || P.stateNode.implementation !== L.implementation) {
          var ye = n0(L, N.mode, K);
          return ye.return = N, ye;
        } else {
          var de = u(P, L.children || []);
          return de.return = N, de;
        }
      }
      function g(N, P, L, K, ye) {
        if (P === null || P.tag !== Ne) {
          var de = Po(L, N.mode, K, ye);
          return de.return = N, de;
        } else {
          var We = u(P, L);
          return We.return = N, We;
        }
      }
      function _(N, P, L) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var K = t0("" + P, N.mode, L);
          return K.return = N, K;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ur: {
              var ye = e0(P, N.mode, L);
              return ye.ref = yp(N, null, P), ye.return = N, ye;
            }
            case ma: {
              var de = n0(P, N.mode, L);
              return de.return = N, de;
            }
            case Xe: {
              var We = P._payload, nt = P._init;
              return _(N, nt(We), L);
            }
          }
          if (it(P) || hn(P)) {
            var nn = Po(P, N.mode, L, null);
            return nn.return = N, nn;
          }
          Yh(N, P);
        }
        return typeof P == "function" && Wh(N), null;
      }
      function w(N, P, L, K) {
        var ye = P !== null ? P.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return ye !== null ? null : p(N, P, "" + L, K);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case ur:
              return L.key === ye ? v(N, P, L, K) : null;
            case ma:
              return L.key === ye ? y(N, P, L, K) : null;
            case Xe: {
              var de = L._payload, We = L._init;
              return w(N, P, We(de), K);
            }
          }
          if (it(L) || hn(L))
            return ye !== null ? null : g(N, P, L, K, null);
          Yh(N, L);
        }
        return typeof L == "function" && Wh(N), null;
      }
      function j(N, P, L, K, ye) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var de = N.get(L) || null;
          return p(P, de, "" + K, ye);
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case ur: {
              var We = N.get(K.key === null ? L : K.key) || null;
              return v(P, We, K, ye);
            }
            case ma: {
              var nt = N.get(K.key === null ? L : K.key) || null;
              return y(P, nt, K, ye);
            }
            case Xe:
              var nn = K._payload, Ft = K._init;
              return j(N, P, L, Ft(nn), ye);
          }
          if (it(K) || hn(K)) {
            var Gn = N.get(L) || null;
            return g(P, Gn, K, ye, null);
          }
          Yh(P, K);
        }
        return typeof K == "function" && Wh(P), null;
      }
      function U(N, P, L) {
        {
          if (typeof N != "object" || N === null)
            return P;
          switch (N.$$typeof) {
            case ur:
            case ma:
              cE(N, L);
              var K = N.key;
              if (typeof K != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(K);
                break;
              }
              if (!P.has(K)) {
                P.add(K);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", K);
              break;
            case Xe:
              var ye = N._payload, de = N._init;
              U(de(ye), P, L);
              break;
          }
        }
        return P;
      }
      function V(N, P, L, K) {
        for (var ye = null, de = 0; de < L.length; de++) {
          var We = L[de];
          ye = U(We, ye, N);
        }
        for (var nt = null, nn = null, Ft = P, Gn = 0, Ht = 0, Pn = null; Ft !== null && Ht < L.length; Ht++) {
          Ft.index > Ht ? (Pn = Ft, Ft = null) : Pn = Ft.sibling;
          var ca = w(N, Ft, L[Ht], K);
          if (ca === null) {
            Ft === null && (Ft = Pn);
            break;
          }
          e && Ft && ca.alternate === null && t(N, Ft), Gn = s(ca, Gn, Ht), nn === null ? nt = ca : nn.sibling = ca, nn = ca, Ft = Pn;
        }
        if (Ht === L.length) {
          if (a(N, Ft), Fr()) {
            var Wr = Ht;
            Ws(N, Wr);
          }
          return nt;
        }
        if (Ft === null) {
          for (; Ht < L.length; Ht++) {
            var oi = _(N, L[Ht], K);
            oi !== null && (Gn = s(oi, Gn, Ht), nn === null ? nt = oi : nn.sibling = oi, nn = oi);
          }
          if (Fr()) {
            var ba = Ht;
            Ws(N, ba);
          }
          return nt;
        }
        for (var _a = i(N, Ft); Ht < L.length; Ht++) {
          var fa = j(_a, N, Ht, L[Ht], K);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Ht : fa.key), Gn = s(fa, Gn, Ht), nn === null ? nt = fa : nn.sibling = fa, nn = fa);
        }
        if (e && _a.forEach(function(Gf) {
          return t(N, Gf);
        }), Fr()) {
          var Uu = Ht;
          Ws(N, Uu);
        }
        return nt;
      }
      function se(N, P, L, K) {
        var ye = hn(L);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), L.entries === ye && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var de = ye.call(L);
          if (de)
            for (var We = null, nt = de.next(); !nt.done; nt = de.next()) {
              var nn = nt.value;
              We = U(nn, We, N);
            }
        }
        var Ft = ye.call(L);
        if (Ft == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ht = null, Pn = P, ca = 0, Wr = 0, oi = null, ba = Ft.next(); Pn !== null && !ba.done; Wr++, ba = Ft.next()) {
          Pn.index > Wr ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var _a = w(N, Pn, ba.value, K);
          if (_a === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && _a.alternate === null && t(N, Pn), ca = s(_a, ca, Wr), Ht === null ? Gn = _a : Ht.sibling = _a, Ht = _a, Pn = oi;
        }
        if (ba.done) {
          if (a(N, Pn), Fr()) {
            var fa = Wr;
            Ws(N, fa);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !ba.done; Wr++, ba = Ft.next()) {
            var Uu = _(N, ba.value, K);
            Uu !== null && (ca = s(Uu, ca, Wr), Ht === null ? Gn = Uu : Ht.sibling = Uu, Ht = Uu);
          }
          if (Fr()) {
            var Gf = Wr;
            Ws(N, Gf);
          }
          return Gn;
        }
        for (var qp = i(N, Pn); !ba.done; Wr++, ba = Ft.next()) {
          var Yl = j(qp, N, Wr, ba.value, K);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Wr : Yl.key), ca = s(Yl, ca, Wr), Ht === null ? Gn = Yl : Ht.sibling = Yl, Ht = Yl);
        }
        if (e && qp.forEach(function(nk) {
          return t(N, nk);
        }), Fr()) {
          var tk = Wr;
          Ws(N, tk);
        }
        return Gn;
      }
      function Fe(N, P, L, K) {
        if (P !== null && P.tag === ge) {
          a(N, P.sibling);
          var ye = u(P, L);
          return ye.return = N, ye;
        }
        a(N, P);
        var de = t0(L, N.mode, K);
        return de.return = N, de;
      }
      function ke(N, P, L, K) {
        for (var ye = L.key, de = P; de !== null; ) {
          if (de.key === ye) {
            var We = L.type;
            if (We === Qr) {
              if (de.tag === Ne) {
                a(N, de.sibling);
                var nt = u(de, L.props.children);
                return nt.return = N, nt._debugSource = L._source, nt._debugOwner = L._owner, nt;
              }
            } else if (de.elementType === We || // Keep this check inline so it only runs on the false path:
            yR(de, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Xe && fE(We) === de.type) {
              a(N, de.sibling);
              var nn = u(de, L.props);
              return nn.ref = yp(N, de, L), nn.return = N, nn._debugSource = L._source, nn._debugOwner = L._owner, nn;
            }
            a(N, de);
            break;
          } else
            t(N, de);
          de = de.sibling;
        }
        if (L.type === Qr) {
          var Ft = Po(L.props.children, N.mode, K, L.key);
          return Ft.return = N, Ft;
        } else {
          var Gn = e0(L, N.mode, K);
          return Gn.ref = yp(N, P, L), Gn.return = N, Gn;
        }
      }
      function Lt(N, P, L, K) {
        for (var ye = L.key, de = P; de !== null; ) {
          if (de.key === ye)
            if (de.tag === ie && de.stateNode.containerInfo === L.containerInfo && de.stateNode.implementation === L.implementation) {
              a(N, de.sibling);
              var We = u(de, L.children || []);
              return We.return = N, We;
            } else {
              a(N, de);
              break;
            }
          else
            t(N, de);
          de = de.sibling;
        }
        var nt = n0(L, N.mode, K);
        return nt.return = N, nt;
      }
      function Tt(N, P, L, K) {
        var ye = typeof L == "object" && L !== null && L.type === Qr && L.key === null;
        if (ye && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case ur:
              return f(ke(N, P, L, K));
            case ma:
              return f(Lt(N, P, L, K));
            case Xe:
              var de = L._payload, We = L._init;
              return Tt(N, P, We(de), K);
          }
          if (it(L))
            return V(N, P, L, K);
          if (hn(L))
            return se(N, P, L, K);
          Yh(N, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Fe(N, P, "" + L, K)) : (typeof L == "function" && Wh(N), a(N, P));
      }
      return Tt;
    }
    var Of = dE(!0), pE = dE(!1);
    function N1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function L1(e, t) {
      for (var a = e.child; a !== null; )
        S_(a, t), a = a.sibling;
    }
    var ug = _o(null), og;
    og = {};
    var $h = null, Nf = null, sg = null, Qh = !1;
    function Gh() {
      $h = null, Nf = null, sg = null, Qh = !1;
    }
    function vE() {
      Qh = !0;
    }
    function hE() {
      Qh = !1;
    }
    function mE(e, t, a) {
      oa(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ua(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = lt(u.childLanes, t)) : (i.childLanes = lt(i.childLanes, t), u !== null && (u.childLanes = lt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function M1(e, t, a) {
      z1(e, t, a);
    }
    function z1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ae) {
                var p = nr(a), v = Nu(qt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = lt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = lt(w.lanes, a)), fg(i.return, a, e), s.lanes = lt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ve)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === At) {
          var j = i.return;
          if (j === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          j.lanes = lt(j.lanes, a);
          var U = j.alternate;
          U !== null && (U.lanes = lt(U.lanes, a)), fg(j, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Lf(e, t) {
      $h = e, Nf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function ar(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, $h.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Ks = null;
    function dg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function j1() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function yE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function A1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function U1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Ba(e, t) {
      return qh(e, t);
    }
    var F1 = qh;
    function qh(e, t) {
      e.lanes = lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = lt(a.lanes, t)), a === null && (e.flags & (Cn | Rn)) !== De && pR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = lt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = lt(a.childLanes, t) : (u.flags & (Cn | Rn)) !== De && pR(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gE = 0, SE = 1, Kh = 2, pg = 3, Xh = !1, vg, Zh;
    vg = !1, Zh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: B
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function EE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: gE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), Ab()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, F1(e, a);
      } else
        return U1(e, u, t, a);
    }
    function Jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var f = lt(s, a);
          u.lanes = f, bs(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function H1(e, t, a, i, u, s) {
      switch (a.tag) {
        case SE: {
          var f = a.payload;
          if (typeof f == "function") {
            vE();
            var p = f.call(s, i, u);
            {
              if (e.mode & at) {
                Gt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Gt(!1);
                }
              }
              hE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~br | mt;
        case gE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            vE(), y = v.call(s, i, u);
            {
              if (e.mode & at) {
                Gt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Gt(!1);
                }
              }
              hE();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Zh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var j = u.baseState, U = B, V = null, se = null, Fe = null, ke = s;
        do {
          var Lt = ke.lane, Tt = ke.eventTime;
          if (hu(i, Lt)) {
            if (Fe !== null) {
              var P = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              Fe = Fe.next = P;
            }
            j = H1(e, u, ke, j, t, a);
            var L = ke.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Hn) {
              e.flags |= an;
              var K = u.effects;
              K === null ? u.effects = [ke] : K.push(ke);
            }
          } else {
            var N = {
              eventTime: Tt,
              lane: Lt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            Fe === null ? (se = Fe = N, V = j) : Fe = Fe.next = N, U = lt(U, Lt);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, de = ye.next;
            ye.next = null, ke = de, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Fe === null && (V = j), u.baseState = V, u.firstBaseUpdate = se, u.lastBaseUpdate = Fe;
        var We = u.shared.interleaved;
        if (We !== null) {
          var nt = We;
          do
            U = lt(U, nt.lane), nt = nt.next;
          while (nt !== We);
        } else s === null && (u.shared.lanes = B);
        Yp(U), e.lanes = U, e.memoizedState = j;
      }
      Zh = null;
    }
    function V1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CE() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function RE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, V1(f, a));
        }
    }
    var gp = {}, Lo = _o(gp), Sp = _o(gp), nm = _o(gp);
    function rm(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xE() {
      var e = rm(nm.current);
      return e;
    }
    function yg(e, t) {
      oa(nm, t, e), oa(Sp, e, e), oa(Lo, gp, e);
      var a = rT(t);
      ua(Lo, e), oa(Lo, a, e);
    }
    function Mf(e) {
      ua(Lo, e), ua(Sp, e), ua(nm, e);
    }
    function gg() {
      var e = rm(Lo.current);
      return e;
    }
    function TE(e) {
      rm(nm.current);
      var t = rm(Lo.current), a = aT(t, e.type);
      t !== a && (oa(Sp, e, e), oa(Lo, a, e));
    }
    function Sg(e) {
      Sp.current === e && (ua(Lo, e), ua(Sp, e));
    }
    var P1 = 0, wE = 1, bE = 1, Ep = 2, Ji = _o(P1);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function B1(e, t) {
      return e | t;
    }
    function Mo(e, t) {
      oa(Ji, t, e);
    }
    function jf(e) {
      ua(Ji, e);
    }
    function I1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === pe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || I0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === zt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & mt) !== De;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), Rg = [];
    function xg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Y1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = Ae.ReactCurrentDispatcher, Cp = Ae.ReactCurrentBatchConfig, Tg, Af;
    Tg = /* @__PURE__ */ new Set();
    var Xs = B, tn = null, hr = null, mr = null, im = !1, Rp = !1, xp = 0, W1 = 0, $1 = 25, I = null, _i = null, zo = -1, wg = !1;
    function Wt() {
      {
        var e = I;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function re() {
      {
        var e = I;
        _i !== null && (zo++, _i[zo] !== e && Q1(e));
      }
    }
    function Uf(e) {
      e != null && !it(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function Q1(e) {
      {
        var t = Ge(tn);
        if (!Tg.has(t) && (Tg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= zo; u++) {
            for (var s = _i[u], f = u === zo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, tn = t, _i = e !== null ? e._debugHookTypes : null, zo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? me.current = GE : _i !== null ? me.current = QE : me.current = $E;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, xp = 0, p >= $1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, hr = null, mr = null, t.updateQueue = null, zo = -1, me.current = qE, f = a(i, u);
        } while (Rp);
      }
      me.current = gm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Xs = B, tn = null, hr = null, mr = null, I = null, _i = null, zo = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Et) !== Oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function _E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & en) !== Oe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function kE() {
      if (me.current = gm, im) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Xs = B, tn = null, hr = null, mr = null, _i = null, zo = -1, I = null, PE = !1, Rp = !1, xp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? tn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ki() {
      var e;
      if (hr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = tn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? tn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function DE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kg(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = X1.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, j = null, U = null, V = g;
        do {
          var se = V.lane;
          if (hu(Xs, se)) {
            if (U !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              U = U.next = ke;
            }
            if (V.hasEagerState)
              _ = V.eagerState;
            else {
              var Lt = V.action;
              _ = e(_, Lt);
            }
          } else {
            var Fe = {
              lane: se,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            U === null ? (j = U = Fe, w = _) : U = U.next = Fe, tn.lanes = lt(tn.lanes, se), Yp(se);
          }
          V = V.next;
        } while (V !== null && V !== g);
        U === null ? w = _ : U.next = j, fe(_, i.memoizedState) || Lp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var N = Tt;
        do {
          var P = N.lane;
          tn.lanes = lt(tn.lanes, P), Yp(P), N = N.next;
        } while (N !== Tt);
      } else f === null && (u.lanes = B);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Og(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        fe(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ik(e, t, a) {
    }
    function Yk(e, t, a) {
    }
    function Ng(e, t, a) {
      var i = tn, u = Fl(), s, f = Fr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          fe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Um();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(v, Xs) || OE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(LE.bind(null, i, y, e), [e]), i.flags |= ya, Tp(pr | Hr, NE.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = tn, u = ki(), s = t();
      if (!Af) {
        var f = t();
        fe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !fe(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (bp(LE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ya, Tp(pr | Hr, NE.bind(null, i, y, s, t), void 0, null);
        var g = Um();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ts(g, Xs) || OE(i, t, s);
      }
      return s;
    }
    function OE(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = tn.updateQueue;
      if (u === null)
        u = DE(), tn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && zE(e);
    }
    function LE(e, t, a) {
      var i = function() {
        ME(t) && zE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = Ba(e, Pe);
      t !== null && Er(t, e, Pe, qt);
    }
    function um(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Z1.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return Dg(_g);
    }
    function Mg(e) {
      return Og(_g);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = DE(), tn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = ki();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      tn.flags |= e, u.memoizedState = Tp(pr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, u.memoizedState = Tp(pr | t, a, f, s);
    }
    function cm(e, t) {
      return (tn.mode & en) !== Oe ? wp(yl | ya | fd, Hr, e, t) : wp(ya | fd, Hr, e, t);
    }
    function bp(e, t) {
      return sm(ya, Hr, e, t);
    }
    function jg(e, t) {
      return wp(Rt, Ul, e, t);
    }
    function fm(e, t) {
      return sm(Rt, Ul, e, t);
    }
    function Ag(e, t) {
      var a = Rt;
      return a |= ml, (tn.mode & en) !== Oe && (a |= zr), wp(a, vr, e, t);
    }
    function dm(e, t) {
      return sm(Rt, vr, e, t);
    }
    function jE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ug(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Rt;
      return u |= ml, (tn.mode & en) !== Oe && (u |= zr), wp(u, vr, jE.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(Rt, vr, jE.bind(null, t, e), i);
    }
    function G1(e, t) {
    }
    var vm = G1;
    function Fg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function AE(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return FE(t, i, e);
    }
    function UE(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return FE(t, a, e);
    }
    function FE(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!fe(a, t)) {
          var u = Ld();
          tn.lanes = lt(tn.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function q1(e, t, a) {
      var i = Sa();
      Wn(_s(i, Ua)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Wn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && $e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = um(!1), t = e[0], a = e[1], i = q1.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function HE() {
      var e = Lg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function VE() {
      var e = Mg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function K1() {
      return PE;
    }
    function Bg() {
      var e = Fl(), t = Um(), a = t.identifierPrefix, i;
      if (Fr()) {
        var u = p1();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = W1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function X1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        IE(t, u);
      else {
        var s = yE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          Er(s, e, i, f), YE(s, t, i);
        }
      }
      WE(e, i);
    }
    function Z1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, fe(y, v)) {
                A1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = yE(e, t, u, i);
        if (g !== null) {
          var _ = wa();
          Er(g, e, i, _), YE(g, t, i);
        }
      }
      WE(e, i);
    }
    function BE(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function IE(e, t) {
      Rp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = lt(i, a);
        t.lanes = u, bs(e, u);
      }
    }
    function WE(e, t, a) {
      ms(e, t);
    }
    var gm = {
      readContext: ar,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: Re
    }, $E = null, QE = null, GE = null, qE = null, Hl = null, el = null, Sm = null;
    {
      var Ig = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ze = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Wt(), Uf(t), Fg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Wt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Wt(), Uf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Wt(), Uf(a), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Wt(), Uf(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Wt(), Uf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Wt(), Uf(t);
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Wt();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Wt(), zg(e);
        },
        useState: function(e) {
          I = "useState", Wt();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Wt(), Vg(e);
        },
        useTransition: function() {
          return I = "useTransition", Wt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Wt(), Ng(e, t, a);
        },
        useId: function() {
          return I = "useId", Wt(), Bg();
        },
        unstable_isNewReconciler: Re
      }, QE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", re(), Fg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", re(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", re(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", re(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", re(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", re(), Ag(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", re();
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", re();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", re(), zg(e);
        },
        useState: function(e) {
          I = "useState", re();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", re(), Vg(e);
        },
        useTransition: function() {
          return I = "useTransition", re(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", re(), Ng(e, t, a);
        },
        useId: function() {
          return I = "useId", re(), Bg();
        },
        unstable_isNewReconciler: Re
      }, GE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", re(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", re();
          var a = me.current;
          me.current = el;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", re();
          var i = me.current;
          me.current = el;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", re(), om();
        },
        useState: function(e) {
          I = "useState", re();
          var t = me.current;
          me.current = el;
          try {
            return Lg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", re(), AE(e);
        },
        useTransition: function() {
          return I = "useTransition", re(), HE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return I = "useId", re(), ym();
        },
        unstable_isNewReconciler: Re
      }, qE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", re(), hm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", re(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", re(), dm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", re();
          var a = me.current;
          me.current = Sm;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", re();
          var i = me.current;
          me.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", re(), om();
        },
        useState: function(e) {
          I = "useState", re();
          var t = me.current;
          me.current = Sm;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", re(), vm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", re(), UE(e);
        },
        useTransition: function() {
          return I = "useTransition", re(), VE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", re(), lm(e, t);
        },
        useId: function() {
          return I = "useId", re(), ym();
        },
        unstable_isNewReconciler: Re
      }, Hl = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), Wt(), Fg(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), Wt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), Wt(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), Wt(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), Wt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), Wt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), Wt();
          var a = me.current;
          me.current = Hl;
          try {
            return Hg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), Wt();
          var i = me.current;
          me.current = Hl;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), Wt(), zg(e);
        },
        useState: function(e) {
          I = "useState", Ze(), Wt();
          var t = me.current;
          me.current = Hl;
          try {
            return um(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), Wt(), Vg(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), Wt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), Wt(), Ng(e, t, a);
        },
        useId: function() {
          return I = "useId", Ze(), Wt(), Bg();
        },
        unstable_isNewReconciler: Re
      }, el = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), re(), hm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), re(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), re();
          var a = me.current;
          me.current = el;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), re();
          var i = me.current;
          me.current = el;
          try {
            return Dg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), re(), om();
        },
        useState: function(e) {
          I = "useState", Ze(), re();
          var t = me.current;
          me.current = el;
          try {
            return Lg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), re(), vm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), re(), AE(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), re(), HE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), re(), lm(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), re(), ym();
        },
        unstable_isNewReconciler: Re
      }, Sm = {
        readContext: function(e) {
          return Ig(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), re(), hm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), re(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), re(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), re(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), re(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), re(), dm(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), re();
          var a = me.current;
          me.current = el;
          try {
            return mm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), re();
          var i = me.current;
          me.current = el;
          try {
            return Og(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), re(), om();
        },
        useState: function(e) {
          I = "useState", Ze(), re();
          var t = me.current;
          me.current = el;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), re(), vm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), re(), UE(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), re(), VE();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), re(), lm(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), re(), ym();
        },
        unstable_isNewReconciler: Re
      };
    }
    var jo = O.unstable_now, KE = 0, Em = -1, _p = -1, Cm = -1, Yg = !1, Rm = !1;
    function XE() {
      return Yg;
    }
    function J1() {
      Rm = !0;
    }
    function ew() {
      Yg = !1, Rm = !1;
    }
    function tw() {
      Yg = Rm, Rm = !1;
    }
    function ZE() {
      return KE;
    }
    function JE() {
      KE = jo();
    }
    function Wg(e) {
      _p = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function eC(e) {
      _p = -1;
    }
    function xm(e, t) {
      if (_p >= 0) {
        var a = jo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Vl(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (Cm >= 0) {
        var t = jo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Pl() {
      Em = jo();
    }
    function Qg() {
      Cm = jo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Kg, Xg, Zg, Jg, eS, tC, Tm, tS, nS, rS, kp;
    {
      Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var nC = /* @__PURE__ */ new Set();
      Tm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          nC.has(a) || (nC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, tC = function(e, t) {
        if (t === void 0) {
          var a = Ot(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & at) {
          Gt(!0);
          try {
            s = a(i, u);
          } finally {
            Gt(!1);
          }
        }
        tC(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Nu(u, s);
        f.payload = t, a != null && (Tm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Ho(i), f = Nu(u, s);
        f.tag = SE, f.payload = t, a != null && (Tm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), Jh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = wa(), u = Ho(a), s = Nu(i, u);
        s.tag = Kh, t != null && (Tm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Er(f, a, u, i), Jh(f, a, u)), bd(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & at) {
            Gt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Gt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ot(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(a, i) || !ze(u, s) : !0;
    }
    function nw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ot(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Oe && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Oe && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ot(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ot(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || it(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = iS, e.stateNode = t, ss(t, e), t._reactInternalInstance = qg;
    }
    function iC(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ot(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? bf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & at) {
        Gt(!0);
        try {
          g = new t(a, s);
        } finally {
          Gt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      aC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = Ot(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var j = null, U = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? j = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (j = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), j !== null || U !== null || V !== null) {
            var se = Ot(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(se) || (Jg.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Fe, j !== null ? `
  ` + j : "", U !== null ? `
  ` + U : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && G0(e, u, s), g;
    }
    function rw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      nw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ar(s);
      else {
        var f = wf(e, t, !0);
        u.context = bf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ot(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & at && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (rw(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Rt;
        y |= ml, (e.mode & en) !== Oe && (y |= zr), e.flags |= y;
      }
    }
    function aw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = wf(e, t, !0);
        v = bf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && lC(e, u, a, v), CE();
      var w = e.memoizedState, j = u.state = w;
      if (em(e, a, u, i), j = e.memoizedState, s === a && w === j && !jh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = Rt;
          U |= ml, (e.mode & en) !== Oe && (U |= zr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), j = e.memoizedState);
      var V = tm() || rC(e, t, s, a, w, j, v);
      if (V) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = Rt;
          se |= ml, (e.mode & en) !== Oe && (se |= zr), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Fe = Rt;
          Fe |= ml, (e.mode & en) !== Oe && (Fe |= zr), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = j;
      }
      return u.props = a, u.state = j, u.context = v, V;
    }
    function iw(e, t, a, i, u) {
      var s = t.stateNode;
      EE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = ar(g);
      else {
        var w = wf(t, a, !0);
        _ = bf(t, w);
      }
      var j = a.getDerivedStateFromProps, U = typeof j == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && lC(t, s, i, _), CE();
      var V = t.memoizedState, se = s.state = V;
      if (em(t, i, s, u), se = t.memoizedState, f === v && V === se && !jh() && !tm() && !ue)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ja), !1;
      typeof j == "function" && (aS(t, a, j, i), se = t.memoizedState);
      var Fe = tm() || rC(t, a, p, i, V, se, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ue;
      return Fe ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ja)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ja), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = _, Fe;
    }
    function Zs(e, t) {
      return {
        value: e,
        source: t,
        stack: Dt(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function lw(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = lw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ae)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ge(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var uw = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = Nu(qt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Jb(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Nu(qt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gR(e), oS(e, t), typeof u != "function" && Xb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (aa(e.lanes, Pe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new uw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = e_.bind(null, e, t, a);
        _r && Wp(e, a), t.then(s, s);
      }
    }
    function ow(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function sw(e, t) {
      var a = e.tag;
      if ((e.mode & Et) === Oe && (a === we || a === Ee || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === pe && I1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & Et) === Oe) {
        if (e === t)
          e.flags |= br;
        else {
          if (e.flags |= mt, a.flags |= ti, a.flags &= -52805, a.tag === ae) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ue;
            else {
              var f = Nu(qt, Pe);
              f.tag = Kh, No(a, f, Pe);
            }
          }
          a.lanes = lt(a.lanes, Pe);
        }
        return e;
      }
      return e.flags |= br, e.lanes = u, e;
    }
    function cw(e, t, a, i, u) {
      if (a.flags |= lu, _r && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        sw(a), Fr() && a.mode & Et && tE();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~mn, cC(f, t, a, e, u), f.mode & Et && oC(e, s, u), ow(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            oC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Fr() && a.mode & Et) {
        tE();
        var v = sC(t);
        if (v !== null) {
          (v.flags & br) === De && (v.flags |= mn), cC(v, t, a, e, u), tg(Zs(i, a));
          return;
        }
      }
      i = Zs(i, a), Ib(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= br;
            var _ = nr(u);
            y.lanes = lt(y.lanes, _);
            var w = uC(y, g, _);
            mg(y, w);
            return;
          }
          case ae:
            var j = i, U = y.type, V = y.stateNode;
            if ((y.flags & mt) === De && (typeof U.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !sR(V))) {
              y.flags |= br;
              var se = nr(u);
              y.lanes = lt(y.lanes, se);
              var Fe = sS(y, j, se);
              mg(y, Fe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function fw() {
      return null;
    }
    var Dp = Ae.ReactCurrentOwner, nl = !1, cS, Op, fS, dS, pS, Js, vS, wm, Np;
    cS = {}, Op = {}, fS = {}, dS = {}, pS = {}, Js = !1, vS = {}, wm = {}, Np = {};
    function xa(e, t, a, i) {
      e === null ? t.child = pE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function dw(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Lf(t, u), Aa(t);
      {
        if (Dp.current = t, Oa(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & at) {
          Gt(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Cl(), e !== null && !nl ? (_E(e, t, u), Lu(e, t, u)) : (Fr() && y && qy(t), t.flags |= Wi, xa(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (y_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = Ie, t.type = f, yS(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            Ot(s)
          ), a.defaultProps !== void 0) {
            var v = Ot(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Ki(
          _,
          i,
          // Resolved props
          "prop",
          Ot(g)
        );
      }
      var w = e.child, j = xS(e, u);
      if (!j) {
        var U = w.memoizedProps, V = a.compare;
        if (V = V !== null ? V : ze, V(U, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Wi;
      var se = ac(w, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ot(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ze(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & ti) !== De && (nl = !0);
          else return t.lanes = e.lanes, Lu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Et) === Oe) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (aa(a, na)) {
          var _ = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = lt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var j;
        s !== null ? (j = lt(s.baseLanes, a), t.memoizedState = null) : j = a, Fm(t, j);
      }
      return xa(e, t, u, a), t.child;
    }
    function pw(e, t, a) {
      var i = t.pendingProps;
      return xa(e, t, i, a), t.child;
    }
    function vw(e, t, a) {
      var i = t.pendingProps.children;
      return xa(e, t, i, a), t.child;
    }
    function hw(e, t, a) {
      {
        t.flags |= Rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return xa(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Un, t.flags |= fs);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = bf(t, p);
      }
      var v, y;
      Lf(t, u), Aa(t);
      {
        if (Dp.current = t, Oa(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & at) {
          Gt(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            Gt(!1);
          }
        }
        Oa(!1);
      }
      return Cl(), e !== null && !nl ? (_E(e, t, u), Lu(e, t, u)) : (Fr() && y && qy(t), t.flags |= Wi, xa(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (L_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= br;
            var y = new Error("Simulated error coming from DevTools"), g = nr(u);
            t.lanes = lt(t.lanes, g);
            var _ = sS(t, Zs(y, t), g);
            mg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Ki(
            w,
            i,
            // Resolved props
            "prop",
            Ot(a)
          );
        }
      }
      var j;
      Al(a) ? (j = !0, Uh(t)) : j = !1, Lf(t, u);
      var U = t.stateNode, V;
      U === null ? (_m(e, t), iC(t, a, i), lS(t, a, i, u), V = !0) : e === null ? V = aw(t, a, i, u) : V = iw(e, t, a, i, u);
      var se = mS(e, t, a, V, j, u);
      {
        var Fe = t.stateNode;
        V && Fe.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), Js = !0);
      }
      return se;
    }
    function mS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & mt) !== De;
      if (!i && !f)
        return u && X0(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        Aa(t);
        {
          if (Oa(!0), v = p.render(), t.mode & at) {
            Gt(!0);
            try {
              p.render();
            } finally {
              Gt(!1);
            }
          }
          Oa(!1);
        }
        Cl();
      }
      return t.flags |= Wi, e !== null && f ? dw(e, t, v, s) : xa(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && q0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function mw(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      EE(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & mn) {
          var g = Zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, _);
        } else {
          S1(t);
          var w = pE(t, null, p, a);
          t.child = w;
          for (var j = w; j; )
            j.flags = j.flags & ~Cn | Rn, j = j.sibling;
        }
      } else {
        if (Df(), p === s)
          return Lu(e, t, a);
        xa(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return Df(), tg(u), t.flags |= mn, xa(e, t, a, i), t.child;
    }
    function yw(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Qt), hC(e, t), xa(e, t, f, a), t.child;
    }
    function gw(e, t) {
      return e === null && eg(t), null;
    }
    function Sw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = g_(v), g = tl(v, u), _;
      switch (y) {
        case we:
          return yS(t, v), t.type = v = Qf(v), _ = hS(null, t, v, g, i), _;
        case ae:
          return t.type = v = QS(v), _ = mC(null, t, v, g, i), _;
        case Ee:
          return t.type = v = GS(v), _ = fC(null, t, v, g, i), _;
        case Be: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Ki(
              w,
              g,
              // Resolved for outer only
              "prop",
              Ot(v)
            );
          }
          return _ = dC(
            null,
            t,
            v,
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var j = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Xe && (j = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + j));
    }
    function Ew(e, t, a, i, u) {
      _m(e, t), t.tag = ae;
      var s;
      return Al(a) ? (s = !0, Uh(t)) : s = !1, Lf(t, u), iC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function Cw(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = bf(t, f);
      }
      Lf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Ot(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & at && Zi.recordLegacyContextWarning(t, null), Oa(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Oa(!1);
      }
      if (Cl(), t.flags |= Wi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Ot(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = Ot(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = ae, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Al(a) ? (w = !0, Uh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), aC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = we, t.mode & at) {
          Gt(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            Gt(!1);
          }
        }
        return Fr() && v && qy(t), xa(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ot(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ot(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ot(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: fw(),
        transitions: null
      };
    }
    function Rw(e, t) {
      var a = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function xw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Ep);
    }
    function Tw(e, t) {
      return ws(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      M_(t) && (t.flags |= mt);
      var u = Ji.current, s = !1, f = (t.flags & mt) !== De;
      if (f || xw(u, e) ? (s = !0, t.flags &= ~mt) : (e === null || e.memoizedState !== null) && (u = B1(u, bE)), u = zf(u), Mo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Dw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = ww(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, _;
        } else
          return ES(t, y);
      } else {
        var j = e.memoizedState;
        if (j !== null) {
          var U = j.dehydrated;
          if (U !== null)
            return Ow(e, t, f, i, U, j, a);
        }
        if (s) {
          var V = i.fallback, se = i.children, Fe = _w(e, t, se, V, a), ke = t.child, Lt = e.child.memoizedState;
          return ke.memoizedState = Lt === null ? SS(a) : Rw(Lt, a), ke.childLanes = Tw(e, a), t.memoizedState = gS, Fe;
        } else {
          var Tt = i.children, N = bw(e, t, Tt, a);
          return t.memoizedState = null, N;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function ww(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Et) === Oe && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Po(a, u, i, null)) : (p = CS(f, u), v = Po(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return ER(e, t, B, null);
    }
    function EC(e, t) {
      return ac(e, t);
    }
    function bw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Et) === Oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Zr) : p.push(s);
      }
      return t.child = f, f;
    }
    function _w(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Et) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = EC(f, v), y.subtreeFlags = f.subtreeFlags & Fn;
      var _;
      return p !== null ? _ = ac(p, i) : (_ = Po(i, s, u, null), _.flags |= Cn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function bm(e, t, a, i) {
      i !== null && tg(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= Cn, t.memoizedState = null, f;
    }
    function kw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Po(i, s, u, null);
      return v.flags |= Cn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Et) !== Oe && Of(t, e.child, null, u), v;
    }
    function Dw(e, t, a) {
      return (e.mode & Et) === Oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Pe) : Hy(t) ? e.lanes = tr : e.lanes = na, null;
    }
    function Ow(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & mn) {
          t.flags &= ~mn;
          var N = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, N);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var P = i.children, L = i.fallback, K = kw(e, t, P, L, f), ye = t.child;
          return ye.memoizedState = SS(f), t.memoizedState = gS, K;
        }
      else {
        if (y1(), (t.mode & Et) === Oe)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = zT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(_, p, y);
          return bm(e, t, f, w);
        }
        var j = aa(f, e.childLanes);
        if (nl || j) {
          var U = Um();
          if (U !== null) {
            var V = Jc(U, f);
            if (V !== Hn && V !== s.retryLane) {
              s.retryLane = V;
              var se = qt;
              Ba(e, V), Er(U, e, V, se);
            }
          }
          BS();
          var Fe = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Fe);
        } else if (I0(u)) {
          t.flags |= mt, t.child = e.child;
          var ke = t_.bind(null, e);
          return jT(u, ke), null;
        } else {
          E1(t, u, s.treeContext);
          var Lt = i.children, Tt = ES(t, Lt);
          return Tt.flags |= Rn, Tt;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), fg(e.return, t, a);
    }
    function Nw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === pe) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === zt)
          CC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Lw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Mw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function zw(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RC(e, t) {
      {
        var a = it(e), i = !a && typeof hn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function jw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (it(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RC(e[a], a))
              return;
        } else {
          var i = hn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Mw(u), zw(s, u), jw(f, u), xa(e, t, f, a);
      var p = Ji.current, v = Eg(p, Ep);
      if (v)
        p = Cg(p, Ep), t.flags |= mt;
      else {
        var y = e !== null && (e.flags & mt) !== De;
        y && Nw(t, t.child, a), p = zf(p);
      }
      if (Mo(t, p), (t.mode & Et) === Oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lw(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, j = t.child;
            for (t.child = null; j !== null; ) {
              var U = j.alternate;
              if (U !== null && am(U) === null) {
                t.child = j;
                break;
              }
              var V = j.sibling;
              j.sibling = w, w = j, j = V;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Aw(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : xa(e, t, i, a), t.child;
    }
    var TC = !1;
    function Uw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (mE(t, u, p), f !== null) {
        var y = f.value;
        if (fe(y, p)) {
          if (f.children === s.children && !jh())
            return Lu(e, t, a);
        } else
          M1(t, u, a);
      }
      var g = s.children;
      return xa(e, t, g, a), t.child;
    }
    var wC = !1;
    function Fw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = ar(i);
      Aa(t);
      var p;
      return Dp.current = t, Oa(!0), p = s(f), Oa(!1), Cl(), t.flags |= Wi, xa(e, t, p, a), t.child;
    }
    function Lp() {
      nl = !0;
    }
    function _m(e, t) {
      (t.mode & Et) === Oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Cn);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), Yp(t.lanes), aa(a, t.childLanes) ? (N1(e, t), t.child) : null;
    }
    function Hw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Zr) : s.push(e), a.flags |= Cn, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Vw(e, t, a) {
      switch (t.tag) {
        case te:
          yC(t), t.stateNode, Df();
          break;
        case Z:
          TE(t);
          break;
        case ae: {
          var i = t.type;
          Al(i) && Uh(t);
          break;
        }
        case ie:
          yg(t, t.stateNode.containerInfo);
          break;
        case Ve: {
          var u = t.memoizedProps.value, s = t.type._context;
          mE(t, s, u);
          break;
        }
        case ot:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case pe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Mo(t, zf(Ji.current)), t.flags |= mt, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return SC(e, t, a);
            Mo(t, zf(Ji.current));
            var _ = Lu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Mo(t, zf(Ji.current));
          break;
        }
        case zt: {
          var w = (e.flags & mt) !== De, j = aa(a, t.childLanes);
          if (w) {
            if (j)
              return xC(e, t, a);
            t.flags |= mt;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Mo(t, Ji.current), j)
            break;
          return null;
        }
        case Le:
        case jt:
          return t.lanes = B, vC(e, t, a);
      }
      return Lu(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Hw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || jh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = xS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === De)
            return nl = !1, Vw(e, t, a);
          (e.flags & ti) !== De ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Fr() && f1(t)) {
        var f = t.index, p = d1();
        eE(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case be:
          return Cw(e, t, t.type, a);
        case ft: {
          var v = t.elementType;
          return Sw(e, t, v, a);
        }
        case we: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : tl(y, g);
          return hS(e, t, y, _, a);
        }
        case ae: {
          var w = t.type, j = t.pendingProps, U = t.elementType === w ? j : tl(w, j);
          return mC(e, t, w, U, a);
        }
        case te:
          return mw(e, t, a);
        case Z:
          return yw(e, t, a);
        case ge:
          return gw(e, t);
        case pe:
          return SC(e, t, a);
        case ie:
          return Aw(e, t, a);
        case Ee: {
          var V = t.type, se = t.pendingProps, Fe = t.elementType === V ? se : tl(V, se);
          return fC(e, t, V, Fe, a);
        }
        case Ne:
          return pw(e, t, a);
        case yt:
          return vw(e, t, a);
        case ot:
          return hw(e, t, a);
        case Ve:
          return Uw(e, t, a);
        case Mt:
          return Fw(e, t, a);
        case Be: {
          var ke = t.type, Lt = t.pendingProps, Tt = tl(ke, Lt);
          if (t.type !== t.elementType) {
            var N = ke.propTypes;
            N && Ki(
              N,
              Tt,
              // Resolved for outer only
              "prop",
              Ot(ke)
            );
          }
          return Tt = tl(ke.type, Tt), dC(e, t, ke, Tt, a);
        }
        case Ie:
          return pC(e, t, t.type, t.pendingProps, a);
        case Ue: {
          var P = t.type, L = t.pendingProps, K = t.elementType === P ? L : tl(P, L);
          return Ew(e, t, P, K, a);
        }
        case zt:
          return xC(e, t, a);
        case st:
          break;
        case Le:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= Rt;
    }
    function _C(e) {
      e.flags |= Un, e.flags |= fs;
    }
    var kC, TS, DC, OC;
    kC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === ge)
          oT(e, u.stateNode);
        else if (u.tag !== ie) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = cT(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function Mp(e, t) {
      if (!Fr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = De;
      if (t) {
        if ((e.mode & bt) !== Oe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = lt(a, lt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Fn, i |= y.flags & Fn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = lt(a, lt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & bt) !== Oe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = lt(a, lt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = lt(a, lt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Pw(e, t, a) {
      if (w1() && (t.mode & Et) !== Oe && (t.flags & mt) === De)
        return uE(t), Df(), t.flags |= mn | lu | br, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (x1(t), Vr(t), (t.mode & bt) !== Oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & mt) === De && (t.memoizedState = null), t.flags |= Rt, Vr(t), (t.mode & bt) !== Oe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oE(), !0;
    }
    function NC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case be:
        case ft:
        case Ie:
        case we:
        case Ee:
        case Ne:
        case yt:
        case ot:
        case Mt:
        case Be:
          return Vr(t), null;
        case ae: {
          var u = t.type;
          return Al(u) && Ah(t), Vr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Mf(t), $y(t), xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & mn) !== De) && (t.flags |= ja, oE());
            }
          }
          return TS(e, t), Vr(t), null;
        }
        case Z: {
          Sg(t);
          var v = xE(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && _C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var g = gg(), _ = Bh(t);
            if (_)
              C1(t, v, g) && Vf(t);
            else {
              var w = uT(y, i, v, g, t);
              kC(w, t, !1, !1), t.stateNode = w, sT(w, y, i, v) && Vf(t);
            }
            t.ref !== null && _C(t);
          }
          return Vr(t), null;
        }
        case ge: {
          var j = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            OC(e, t, U, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = xE(), se = gg(), Fe = Bh(t);
            Fe ? R1(t) && Vf(t) : t.stateNode = fT(j, V, se, t);
          }
          return Vr(t), null;
        }
        case pe: {
          jf(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = Pw(e, t, ke);
            if (!Lt)
              return t.flags & br ? t : null;
          }
          if ((t.flags & mt) !== De)
            return t.lanes = a, (t.mode & bt) !== Oe && Gg(t), t;
          var Tt = ke !== null, N = e !== null && e.memoizedState !== null;
          if (Tt !== N && Tt) {
            var P = t.child;
            if (P.flags |= gi, (t.mode & Et) !== Oe) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Eg(Ji.current, bE) ? Bb() : BS();
            }
          }
          var K = t.updateQueue;
          if (K !== null && (t.flags |= Rt), Vr(t), (t.mode & bt) !== Oe && Tt) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case ie:
          return Mf(t), TS(e, t), e === null && a1(t.stateNode.containerInfo), Vr(t), null;
        case Ve:
          var de = t.type._context;
          return cg(de, t), Vr(t), null;
        case Ue: {
          var We = t.type;
          return Al(We) && Ah(t), Vr(t), null;
        }
        case zt: {
          jf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return Vr(t), null;
          var nn = (t.flags & mt) !== De, Ft = nt.rendering;
          if (Ft === null)
            if (nn)
              Mp(nt, !1);
            else {
              var Gn = Yb() && (e === null || (e.flags & mt) === De);
              if (!Gn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Pn = am(Ht);
                  if (Pn !== null) {
                    nn = !0, t.flags |= mt, Mp(nt, !1);
                    var ca = Pn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= Rt), t.subtreeFlags = De, L1(t, a), Mo(t, Cg(Ji.current, Ep)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              nt.tail !== null && bn() > ZC() && (t.flags |= mt, nn = !0, Mp(nt, !1), t.lanes = Vv);
            }
          else {
            if (!nn) {
              var Wr = am(Ft);
              if (Wr !== null) {
                t.flags |= mt, nn = !0;
                var oi = Wr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Rt), Mp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !Ft.alternate && !Fr())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - nt.renderingStartTime > ZC() && a !== na && (t.flags |= mt, nn = !0, Mp(nt, !1), t.lanes = Vv);
            }
            if (nt.isBackwards)
              Ft.sibling = t.child, t.child = Ft;
            else {
              var ba = nt.last;
              ba !== null ? ba.sibling = Ft : t.child = Ft, nt.last = Ft;
            }
          }
          if (nt.tail !== null) {
            var _a = nt.tail;
            nt.rendering = _a, nt.tail = _a.sibling, nt.renderingStartTime = bn(), _a.sibling = null;
            var fa = Ji.current;
            return nn ? fa = Cg(fa, Ep) : fa = zf(fa), Mo(t, fa), _a;
          }
          return Vr(t), null;
        }
        case st:
          break;
        case Le:
        case jt: {
          PS(t);
          var Uu = t.memoizedState, Gf = Uu !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !k && (t.flags |= gi);
          }
          return !Gf || (t.mode & Et) === Oe ? Vr(t) : aa(Il, na) && (Vr(t), t.subtreeFlags & (Cn | Rt) && (t.flags |= gi)), null;
        }
        case gt:
          return null;
        case vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bw(e, t, a) {
      switch (Ky(t), t.tag) {
        case ae: {
          var i = t.type;
          Al(i) && Ah(t);
          var u = t.flags;
          return u & br ? (t.flags = u & ~br | mt, (t.mode & bt) !== Oe && Gg(t), t) : null;
        }
        case te: {
          t.stateNode, Mf(t), $y(t), xg();
          var s = t.flags;
          return (s & br) !== De && (s & mt) === De ? (t.flags = s & ~br | mt, t) : null;
        }
        case Z:
          return Sg(t), null;
        case pe: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & br ? (t.flags = p & ~br | mt, (t.mode & bt) !== Oe && Gg(t), t) : null;
        }
        case zt:
          return jf(t), null;
        case ie:
          return Mf(t), null;
        case Ve:
          var v = t.type._context;
          return cg(v, t), null;
        case Le:
        case jt:
          return PS(t), null;
        case gt:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Ky(t), t.tag) {
        case ae: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case te: {
          t.stateNode, Mf(t), $y(t), xg();
          break;
        }
        case Z: {
          Sg(t);
          break;
        }
        case ie:
          Mf(t);
          break;
        case pe:
          jf(t);
          break;
        case zt:
          jf(t);
          break;
        case Ve:
          var u = t.type._context;
          cg(u, t);
          break;
        case Le:
        case jt:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var km = !1, Pr = !1, Iw = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Pf = null, Bf = null;
    function Yw(e) {
      za(null, function() {
        throw e;
      }), cd();
    }
    var Ww = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Pl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Ao(vr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Ww(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function $w(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function jC(e, t) {
      try {
        UC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ke && ht && e.mode & bt)
              try {
                Pl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var AC = !1;
    function Qw(e, t) {
      iT(e.containerInfo), Te = t, Gw();
      var a = AC;
      return AC = !1, a;
    }
    function Gw() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & gl) !== De && t !== null ? (t.return = e, Te = t) : qw();
      }
    }
    function qw() {
      for (; Te !== null; ) {
        var e = Te;
        Xt(e);
        try {
          Kw(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        En();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Kw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ja) !== De) {
        switch (Xt(e), e.tag) {
          case we:
          case Ee:
          case Ie:
            break;
          case ae: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              OT(v.containerInfo);
            }
            break;
          }
          case Z:
          case ge:
          case ie:
          case Ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        En();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== Ia ? Rl(t) : (e & vr) !== Ia && Rd(t), (e & Ul) !== Ia && $p(!0), Dm(t, a, p), (e & Ul) !== Ia && $p(!1), (e & Hr) !== Ia ? bc() : (e & vr) !== Ia && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ao(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== Ia ? Fv(t) : (e & vr) !== Ia && Hv(t);
            var f = s.create;
            (e & Ul) !== Ia && $p(!0), s.destroy = f(), (e & Ul) !== Ia && $p(!1), (e & Hr) !== Ia ? Qi() : (e & vr) !== Ia && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== De ? v = "useLayoutEffect" : (s.tag & Ul) !== De ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Xw(e, t) {
      if ((t.flags & Rt) !== De)
        switch (t.tag) {
          case ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZE(), p = t.alternate === null ? "mount" : "update";
            XE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ot:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Zw(e, t, a, i) {
      if ((a.flags & Sl) !== De)
        switch (a.tag) {
          case we:
          case Ee:
          case Ie: {
            if (!Pr)
              if (a.mode & bt)
                try {
                  Pl(), Ao(vr | pr, a);
                } finally {
                  Vl(a);
                }
              else
                Ao(vr | pr, a);
            break;
          }
          case ae: {
            var u = a.stateNode;
            if (a.flags & Rt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & bt)
                  try {
                    Pl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & bt)
                  try {
                    Pl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), RE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case ae:
                    y = a.child.stateNode;
                    break;
                }
              RE(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & Rt) {
              var _ = a.type, w = a.memoizedProps;
              mT(g, _, w);
            }
            break;
          }
          case ge:
            break;
          case ie:
            break;
          case ot: {
            {
              var j = a.memoizedProps, U = j.onCommit, V = j.onRender, se = a.stateNode.effectDuration, Fe = ZE(), ke = t === null ? "mount" : "update";
              XE() && (ke = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof U == "function" && U(a.memoizedProps.id, ke, se, Fe), qb(a);
                var Lt = a.return;
                e: for (; Lt !== null; ) {
                  switch (Lt.tag) {
                    case te:
                      var Tt = Lt.stateNode;
                      Tt.effectDuration += se;
                      break e;
                    case ot:
                      var N = Lt.stateNode;
                      N.effectDuration += se;
                      break e;
                  }
                  Lt = Lt.return;
                }
              }
            }
            break;
          }
          case pe: {
            lb(e, a);
            break;
          }
          case zt:
          case Ue:
          case st:
          case Le:
          case jt:
          case vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Un && UC(a);
    }
    function Jw(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          if (e.mode & bt)
            try {
              Pl(), zC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $w(e, e.return, t), jC(e, e.return);
          break;
        }
        case Z: {
          jC(e, e.return);
          break;
        }
      }
    }
    function eb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? bT(u) : kT(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === ge) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _T(s) : DT(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === jt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function UC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & bt)
            try {
              Pl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function tb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && u1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function nb(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === Z || e.tag === te || e.tag === ie;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || HC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== ge && t.tag !== At; ) {
          if (t.flags & Cn || t.child === null || t.tag === ie)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Cn))
          return t.stateNode;
      }
    }
    function rb(e) {
      var t = nb(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Qt && (B0(a), t.flags &= ~Qt);
          var i = VC(e);
          _S(e, i, a);
          break;
        }
        case te:
        case ie: {
          var u = t.stateNode.containerInfo, s = VC(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === Z || i === ge;
      if (u) {
        var s = e.stateNode;
        t ? RT(a, s, t) : ET(a, s);
      } else if (i !== ie) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === Z || i === ge;
      if (u) {
        var s = e.stateNode;
        t ? CT(a, s, t) : ST(a, s);
      } else if (i !== ie) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, al = !1;
    function ab(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              Br = i.stateNode, al = !1;
              break e;
            }
            case te: {
              Br = i.stateNode.containerInfo, al = !0;
              break e;
            }
            case ie: {
              Br = i.stateNode.containerInfo, al = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Br = null, al = !1;
      }
      tb(a);
    }
    function Uo(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (lo(a), a.tag) {
        case Z:
          Pr || If(a, t);
        case ge: {
          {
            var i = Br, u = al;
            Br = null, Uo(e, t, a), Br = i, al = u, Br !== null && (al ? TT(Br, a.stateNode) : xT(Br, a.stateNode));
          }
          return;
        }
        case At: {
          Br !== null && (al ? wT(Br, a.stateNode) : Fy(Br, a.stateNode));
          return;
        }
        case ie: {
          {
            var s = Br, f = al;
            Br = a.stateNode.containerInfo, al = !0, Uo(e, t, a), Br = s, al = f;
          }
          return;
        }
        case we:
        case Ee:
        case Be:
        case Ie: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, j = _.tag;
                  w !== void 0 && ((j & Ul) !== Ia ? Dm(a, t, w) : (j & vr) !== Ia && (Rd(a), a.mode & bt ? (Pl(), Dm(a, t, w), Vl(a)) : Dm(a, t, w), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Uo(e, t, a);
          return;
        }
        case ae: {
          if (!Pr) {
            If(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Uo(e, t, a);
          return;
        }
        case st: {
          Uo(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & Et
          ) {
            var V = Pr;
            Pr = V || a.memoizedState !== null, Uo(e, t, a), Pr = V;
          } else
            Uo(e, t, a);
          break;
        }
        default: {
          Uo(e, t, a);
          return;
        }
      }
    }
    function ib(e) {
      e.memoizedState;
    }
    function lb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && YT(s);
          }
        }
      }
    }
    function BC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Iw()), t.forEach(function(i) {
          var u = n_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Pf !== null && Bf !== null)
                Wp(Bf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ub(e, t, a) {
      Pf = a, Bf = e, Xt(t), IC(t, e), Xt(t), Pf = null, Bf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            ab(e, t, s);
          } catch (v) {
            vn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Xt(p), IC(p, e), p = p.sibling;
      Xt(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case we:
        case Ee:
        case Be:
        case Ie: {
          if (il(t, e), Bl(e), u & Rt) {
            try {
              rl(Ul | pr, e, e.return), Ao(Ul | pr, e);
            } catch (We) {
              vn(e, e.return, We);
            }
            if (e.mode & bt) {
              try {
                Pl(), rl(vr | pr, e, e.return);
              } catch (We) {
                vn(e, e.return, We);
              }
              Vl(e);
            } else
              try {
                rl(vr | pr, e, e.return);
              } catch (We) {
                vn(e, e.return, We);
              }
          }
          return;
        }
        case ae: {
          il(t, e), Bl(e), u & Un && i !== null && If(i, i.return);
          return;
        }
        case Z: {
          il(t, e), Bl(e), u & Un && i !== null && If(i, i.return);
          {
            if (e.flags & Qt) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (We) {
                vn(e, e.return, We);
              }
            }
            if (u & Rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    yT(f, g, y, v, p, e);
                  } catch (We) {
                    vn(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case ge: {
          if (il(t, e), Bl(e), u & Rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, j = i !== null ? i.memoizedProps : w;
            try {
              gT(_, j, w);
            } catch (We) {
              vn(e, e.return, We);
            }
          }
          return;
        }
        case te: {
          if (il(t, e), Bl(e), u & Rt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                IT(t.containerInfo);
              } catch (We) {
                vn(e, e.return, We);
              }
          }
          return;
        }
        case ie: {
          il(t, e), Bl(e);
          return;
        }
        case pe: {
          il(t, e), Bl(e);
          var V = e.child;
          if (V.flags & gi) {
            var se = V.stateNode, Fe = V.memoizedState, ke = Fe !== null;
            if (se.isHidden = ke, ke) {
              var Lt = V.alternate !== null && V.alternate.memoizedState !== null;
              Lt || Pb();
            }
          }
          if (u & Rt) {
            try {
              ib(e);
            } catch (We) {
              vn(e, e.return, We);
            }
            BC(e);
          }
          return;
        }
        case Le: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Et
          ) {
            var N = Pr;
            Pr = N || Tt, il(t, e), Pr = N;
          } else
            il(t, e);
          if (Bl(e), u & gi) {
            var P = e.stateNode, L = e.memoizedState, K = L !== null, ye = e;
            if (P.isHidden = K, K && !Tt && (ye.mode & Et) !== Oe) {
              Te = ye;
              for (var de = ye.child; de !== null; )
                Te = de, sb(de), de = de.sibling;
            }
            eb(ye, K);
          }
          return;
        }
        case zt: {
          il(t, e), Bl(e), u & Rt && BC(e);
          return;
        }
        case st:
          return;
        default: {
          il(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & Cn) {
        try {
          rb(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~Cn;
      }
      t & Rn && (e.flags &= ~Rn);
    }
    function ob(e, t, a) {
      Pf = a, Bf = t, Te = e, YC(e, t, a), Pf = null, Bf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & Et) !== Oe; Te !== null; ) {
        var u = Te, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || km;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = km, w = Pr;
            km = p, Pr = g, Pr && !w && (Te = u, cb(u));
            for (var j = s; j !== null; )
              Te = j, YC(
                j,
                // New root; bubble back up to here and stop.
                t,
                a
              ), j = j.sibling;
            Te = u, km = _, Pr = w, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sl) !== De && s !== null ? (s.return = u, Te = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & Sl) !== De) {
          var u = i.alternate;
          Xt(i);
          try {
            Zw(t, u, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          En();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function sb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case we:
          case Ee:
          case Be:
          case Ie: {
            if (t.mode & bt)
              try {
                Pl(), rl(vr, t, t.return);
              } finally {
                Vl(t);
              }
            else
              rl(vr, t, t.return);
            break;
          }
          case ae: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case Z: {
            If(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              WC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : WC(e);
      }
    }
    function WC(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function cb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Te !== null; ) {
        var t = Te;
        Xt(t);
        try {
          Jw(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (En(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function fb(e, t, a, i) {
      Te = t, db(t, e, a, i);
    }
    function db(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te, s = u.child;
        (u.subtreeFlags & or) !== De && s !== null ? (s.return = u, Te = s) : pb(e, t, a, i);
      }
    }
    function pb(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & ya) !== De) {
          Xt(u);
          try {
            vb(t, u, a, i);
          } catch (f) {
            vn(u, u.return, f);
          }
          En();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Te = s;
          return;
        }
        Te = u.return;
      }
    }
    function vb(e, t, a, i) {
      switch (t.tag) {
        case we:
        case Ee:
        case Ie: {
          if (t.mode & bt) {
            Qg();
            try {
              Ao(Hr | pr, t);
            } finally {
              $g(t);
            }
          } else
            Ao(Hr | pr, t);
          break;
        }
      }
    }
    function hb(e) {
      Te = e, mb();
    }
    function mb() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Zr) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Te = u, Sb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Te = e;
          }
        }
        (e.subtreeFlags & or) !== De && t !== null ? (t.return = e, Te = t) : yb();
      }
    }
    function yb() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & ya) !== De && (Xt(e), gb(e), En());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function gb(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          e.mode & bt ? (Qg(), rl(Hr | pr, e, e.return), $g(e)) : rl(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function Sb(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        Xt(a), Cb(a, t), En();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : Eb(e);
      }
    }
    function Eb(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function Cb(e, t) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          e.mode & bt ? (Qg(), rl(Hr, e, t), $g(e)) : rl(Hr, e, t);
          break;
        }
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          try {
            Ao(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function xb(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          try {
            Ao(Hr | pr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie: {
          try {
            rl(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case ae: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function wb(e) {
      switch (e.tag) {
        case we:
        case Ee:
        case Ie:
          try {
            rl(Hr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var bb = [];
    function _b() {
      bb.forEach(function(e) {
        return e();
      });
    }
    var kb = Ae.ReactCurrentActQueue;
    function Db(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && kb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Ob = Math.ceil, DS = Ae.ReactCurrentDispatcher, OS = Ae.ReactCurrentOwner, Ir = Ae.ReactCurrentBatchConfig, ll = Ae.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, jp = 1, ec = 2, Om = 3, Ap = 4, qC = 5, NS = 6, Nt = yr, Ta = null, On = null, gr = B, Il = B, LS = _o(B), Sr = Mu, Up = null, Nm = B, Fp = B, Lm = B, Hp = null, Ya = null, MS = 0, KC = 500, XC = 1 / 0, Nb = 500, zu = null;
    function Vp() {
      XC = bn() + Nb;
    }
    function ZC() {
      return XC;
    }
    var Mm = !1, zS = null, Yf = null, tc = !1, Fo = null, Pp = B, jS = [], AS = null, Lb = 50, Bp = 0, US = null, FS = !1, zm = !1, Mb = 50, Wf = 0, jm = null, Ip = qt, Am = B, JC = !1;
    function Um() {
      return Ta;
    }
    function wa() {
      return (Nt & (Yr | Di)) !== yr ? bn() : (Ip !== qt || (Ip = bn()), Ip);
    }
    function Ho(e) {
      var t = e.mode;
      if ((t & Et) === Oe)
        return Pe;
      if ((Nt & Yr) !== yr && gr !== B)
        return nr(gr);
      var a = k1() !== _1;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === Hn && (Am = Ld()), Am;
      }
      var u = Sa();
      if (u !== Hn)
        return u;
      var s = dT();
      return s;
    }
    function zb(e) {
      var t = e.mode;
      return (t & Et) === Oe ? Pe : $v();
    }
    function Er(e, t, a, i) {
      a_(), JC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), vo(e, a, i), (Nt & Yr) !== B && e === Ta ? u_(t) : (_r && Gv(e, t, a), o_(t), e === Ta && ((Nt & Yr) === yr && (Fp = lt(Fp, a)), Sr === Ap && Vo(e, gr)), Wa(e, i), a === Pe && Nt === yr && (t.mode & Et) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (Vp(), J0()));
    }
    function jb(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Wa(e, a);
    }
    function Ab(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Nt & Yr) !== yr
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      Iv(e, t);
      var i = ra(e, e === Ta ? gr : B);
      if (i === B) {
        a !== null && hR(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== WS)) {
        a == null && s !== Pe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hR(a);
      var f;
      if (u === Pe)
        e.tag === ko ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), c1(nR.bind(null, e))) : Z0(nR.bind(null, e)), ll.current !== null ? ll.current.push(Do) : vT(function() {
          (Nt & (Yr | Di)) === yr && Do();
        }), f = null;
      else {
        var p;
        switch (Kv(i)) {
          case ia:
            p = $i;
            break;
          case Ua:
            p = ds;
            break;
          case cr:
            p = ou;
            break;
          case tf:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = $S(p, eR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function eR(e, t) {
      if (ew(), Ip = qt, Am = B, (Nt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ra(e, e === Ta ? gr : B);
      if (u === B)
        return null;
      var s = !Ts(e, u) && !Wv(e, u) && !t, f = s ? $b(e, u) : Hm(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Qc(e);
          p !== B && (u = p, f = HS(e, p));
        }
        if (f === jp) {
          var v = Up;
          throw nc(e, B), Vo(e, u), Wa(e, bn()), v;
        }
        if (f === NS)
          Vo(e, u);
        else {
          var y = !Ts(e, u), g = e.current.alternate;
          if (y && !Fb(g)) {
            if (f = Hm(e, u), f === ec) {
              var _ = Qc(e);
              _ !== B && (u = _, f = HS(e, _));
            }
            if (f === jp) {
              var w = Up;
              throw nc(e, B), Vo(e, u), Wa(e, bn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ub(e, f, u);
        }
      }
      return Wa(e, bn()), e.callbackNode === a ? eR.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= mn, r1(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== ec) {
        var s = Ya;
        Ya = a, s !== null && tR(s);
      }
      return u;
    }
    function tR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Ub(e, t, a) {
      switch (t) {
        case Mu:
        case jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, zu);
          break;
        }
        case Om: {
          if (Vo(e, a), Gc(a) && // do not delay if we're inside an act() scope
          !mR()) {
            var i = MS + KC - bn();
            if (i > 10) {
              var u = ra(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                wa(), Zc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case Ap: {
          if (Vo(e, a), uy(a))
            break;
          if (!mR()) {
            var f = kd(e, a), p = f, v = bn() - p, y = r_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case qC: {
          rc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Fb(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Tc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vo(e, t) {
      t = ws(t, Lm), t = ws(t, Fp), zd(e, t);
    }
    function nR(e) {
      if (tw(), (Nt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      Au();
      var t = ra(e, B);
      if (!aa(t, Pe))
        return Wa(e, bn()), null;
      var a = Hm(e, t);
      if (e.tag !== ko && a === ec) {
        var i = Qc(e);
        i !== B && (t = i, a = HS(e, i));
      }
      if (a === jp) {
        var u = Up;
        throw nc(e, B), Vo(e, t), Wa(e, bn()), u;
      }
      if (a === NS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, zu), Wa(e, bn()), null;
    }
    function Hb(e, t) {
      t !== B && (bs(e, lt(t, Pe)), Wa(e, bn()), (Nt & (Yr | Di)) === yr && (Vp(), Do()));
    }
    function VS(e, t) {
      var a = Nt;
      Nt |= GC;
      try {
        return e(t);
      } finally {
        Nt = a, Nt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (Vp(), J0());
      }
    }
    function Vb(e, t, a, i, u) {
      var s = Sa(), f = Ir.transition;
      try {
        return Ir.transition = null, Wn(ia), e(t, a, i, u);
      } finally {
        Wn(s), Ir.transition = f, Nt === yr && Vp();
      }
    }
    function ju(e) {
      Fo !== null && Fo.tag === ko && (Nt & (Yr | Di)) === yr && Au();
      var t = Nt;
      Nt |= GC;
      var a = Ir.transition, i = Sa();
      try {
        return Ir.transition = null, Wn(ia), e ? e() : void 0;
      } finally {
        Wn(i), Ir.transition = a, Nt = t, (Nt & (Yr | Di)) === yr && Do();
      }
    }
    function rR() {
      return (Nt & (Yr | Di)) !== yr;
    }
    function Fm(e, t) {
      oa(LS, Il, e), Il = lt(Il, t);
    }
    function PS(e) {
      Il = LS.current, ua(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, pT(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return On = s, gr = Il = t, Sr = Mu, Up = null, Nm = B, Fp = B, Lm = B, Hp = null, Ya = null, j1(), Zi.discardPendingWarnings(), s;
    }
    function aR(e, t) {
      do {
        var a = On;
        try {
          if (Gh(), kE(), En(), OS.current = null, a === null || a.return === null) {
            Sr = jp, Up = t, On = null;
            return;
          }
          if (Ke && a.mode & bt && xm(a, !0), Qe)
            if (Cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, gr);
            } else
              Ci(a, t, gr);
          cw(e, a.return, a, t, gr), oR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function iR() {
      var e = DS.current;
      return DS.current = gm, e === null ? gm : e;
    }
    function lR(e) {
      DS.current = e;
    }
    function Pb() {
      MS = bn();
    }
    function Yp(e) {
      Nm = lt(e, Nm);
    }
    function Bb() {
      Sr === Mu && (Sr = Om);
    }
    function BS() {
      (Sr === Mu || Sr === Om || Sr === ec) && (Sr = Ap), Ta !== null && (bl(Nm) || bl(Fp)) && Vo(Ta, gr);
    }
    function Ib(e) {
      Sr !== Ap && (Sr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Yb() {
      return Sr === Mu;
    }
    function Hm(e, t) {
      var a = Nt;
      Nt |= Yr;
      var i = iR();
      if (Ta !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, gr), u.clear()), jd(e, t);
        }
        zu = ef(), nc(e, t);
      }
      Td(t);
      do
        try {
          Wb();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      if (Gh(), Nt = a, lR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return yn(), Ta = null, gr = B, Sr;
    }
    function Wb() {
      for (; On !== null; )
        uR(On);
    }
    function $b(e, t) {
      var a = Nt;
      Nt |= Yr;
      var i = iR();
      if (Ta !== e || gr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, gr), u.clear()), jd(e, t);
        }
        zu = ef(), Vp(), nc(e, t);
      }
      Td(t);
      do
        try {
          Qb();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      return Gh(), lR(i), Nt = a, On !== null ? (wd(), Mu) : (yn(), Ta = null, gr = B, Sr);
    }
    function Qb() {
      for (; On !== null && !md(); )
        uR(On);
    }
    function uR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & bt) !== Oe ? (Wg(e), a = IS(t, e, Il), xm(e, !0)) : a = IS(t, e, Il), En(), e.memoizedProps = e.pendingProps, a === null ? oR(e) : On = a, OS.current = null;
    }
    function oR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === De) {
          Xt(t);
          var u = void 0;
          if ((t.mode & bt) === Oe ? u = NC(a, t, Il) : (Wg(t), u = NC(a, t, Il), xm(t, !1)), En(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Bw(a, t);
          if (s !== null) {
            s.flags &= Nv, On = s;
            return;
          }
          if ((t.mode & bt) !== Oe) {
            xm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = De, i.deletions = null;
          else {
            Sr = NS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      Sr === Mu && (Sr = qC);
    }
    function rc(e, t, a) {
      var i = Sa(), u = Ir.transition;
      try {
        Ir.transition = null, Wn(ia), Gb(e, t, a, i);
      } finally {
        Ir.transition = u, Wn(i);
      }
      return null;
    }
    function Gb(e, t, a, i) {
      do
        Au();
      while (Fo !== null);
      if (i_(), (Nt & (Yr | Di)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = lt(u.lanes, u.childLanes);
      Qv(e, f), e === Ta && (Ta = null, On = null, gr = B), ((u.subtreeFlags & or) !== De || (u.flags & or) !== De) && (tc || (tc = !0, AS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (gl | ao | Sl | or)) !== De, v = (u.flags & (gl | ao | Sl | or)) !== De;
      if (p || v) {
        var y = Ir.transition;
        Ir.transition = null;
        var g = Sa();
        Wn(ia);
        var _ = Nt;
        Nt |= Di, OS.current = null, Qw(e, u), JE(), ub(e, u, s), lT(e.containerInfo), e.current = u, hs(s), ob(u, e, s), cu(), Mv(), Nt = _, Wn(g), Ir.transition = y;
      } else
        e.current = u, JE();
      var w = tc;
      if (tc ? (tc = !1, Fo = e, Pp = s) : (Wf = 0, jm = null), f = e.pendingLanes, f === B && (Yf = null), w || dR(e.current, !1), Sd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), _b(), Wa(e, bn()), t !== null)
        for (var j = e.onRecoverableError, U = 0; U < t.length; U++) {
          var V = t[U], se = V.stack, Fe = V.digest;
          j(V.value, {
            componentStack: se,
            digest: Fe
          });
        }
      if (Mm) {
        Mm = !1;
        var ke = zS;
        throw zS = null, ke;
      }
      return aa(Pp, Pe) && e.tag !== ko && Au(), f = e.pendingLanes, aa(f, Pe) ? (J1(), e === US ? Bp++ : (Bp = 0, US = e)) : Bp = 0, Do(), Ei(), null;
    }
    function Au() {
      if (Fo !== null) {
        var e = Kv(Pp), t = kr(cr, e), a = Ir.transition, i = Sa();
        try {
          return Ir.transition = null, Wn(t), Kb();
        } finally {
          Wn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function qb(e) {
      jS.push(e), tc || (tc = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function Kb() {
      if (Fo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Fo, a = Pp;
      if (Fo = null, Pp = B, (Nt & (Yr | Di)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, xd(a);
      var i = Nt;
      Nt |= Di, hb(t.current), fb(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xw(t, f);
        }
      }
      oo(), dR(t.current, !0), Nt = i, Do(), zm ? t === jm ? Wf++ : (Wf = 0, jm = t) : Wf = 0, FS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sR(e) {
      return Yf !== null && Yf.has(e);
    }
    function Xb(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Zb(e) {
      Mm || (Mm = !0, zS = e);
    }
    var Jb = Zb;
    function cR(e, t, a) {
      var i = Zs(a, t), u = uC(e, i, Pe), s = No(e, u, Pe), f = wa();
      s !== null && (vo(s, Pe, f), Wa(s, f));
    }
    function vn(e, t, a) {
      if (Yw(a), $p(!1), e.tag === te) {
        cR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          cR(i, e, a);
          return;
        } else if (i.tag === ae) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sR(s)) {
            var f = Zs(a, e), p = sS(i, f, Pe), v = No(i, p, Pe), y = wa();
            v !== null && (vo(v, Pe, y), Wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function e_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Zc(e, a), s_(e), Ta === e && hu(gr, a) && (Sr === Ap || Sr === Om && Gc(gr) && bn() - MS < KC ? nc(e, B) : Lm = lt(Lm, a)), Wa(e, u);
    }
    function fR(e, t) {
      t === Hn && (t = zb(e));
      var a = wa(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Wa(i, a));
    }
    function t_(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), fR(e, a);
    }
    function n_(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case pe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case zt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fR(e, a);
    }
    function r_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Ob(e / 1960) * 1960;
    }
    function a_() {
      if (Bp > Lb)
        throw Bp = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wf > Mb && (Wf = 0, jm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function i_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function dR(e, t) {
      Xt(e), Vm(e, zr, Tb), t && Vm(e, yl, wb), Vm(e, zr, Rb), t && Vm(e, yl, xb), En();
    }
    function Vm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Pm = null;
    function pR(e) {
      {
        if ((Nt & Yr) !== yr || !(e.mode & Et))
          return;
        var t = e.tag;
        if (t !== be && t !== te && t !== ae && t !== we && t !== Ee && t !== Be && t !== Ie)
          return;
        var a = Ge(e) || "ReactComponent";
        if (Pm !== null) {
          if (Pm.has(a))
            return;
          Pm.add(a);
        } else
          Pm = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Xt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : En();
        }
      }
    }
    var IS;
    {
      var l_ = null;
      IS = function(e, t, a) {
        var i = CR(l_, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (g1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), kE(), LC(e, t), CR(t, i), t.mode & bt && Wg(t), za(null, bC, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vR = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function u_(e) {
      if (Kr && !K1())
        switch (e.tag) {
          case we:
          case Ee:
          case Ie: {
            var t = On && Ge(On) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ge(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ae: {
            vR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gv(e, i, t);
        });
      }
    }
    var WS = {};
    function $S(e, t) {
      {
        var a = ll.current;
        return a !== null ? (a.push(t), WS) : vd(e, t);
      }
    }
    function hR(e) {
      if (e !== WS)
        return hd(e);
    }
    function mR() {
      return ll.current !== null;
    }
    function o_(e) {
      {
        if (e.mode & Et) {
          if (!QC())
            return;
        } else if (!Db() || Nt !== yr || e.tag !== we && e.tag !== Ee && e.tag !== Ie)
          return;
        if (ll.current === null) {
          var t = Jn;
          try {
            Xt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? Xt(e) : En();
          }
        }
      }
    }
    function s_(e) {
      e.tag !== ko && QC() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      JC = e;
    }
    var Oi = null, $f = null, c_ = function(e) {
      Oi = e;
    };
    function Qf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Qf(e);
    }
    function GS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: $,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function yR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ae: {
            typeof i == "function" && (u = !0);
            break;
          }
          case we: {
            (typeof i == "function" || s === Xe) && (u = !0);
            break;
          }
          case Ee: {
            (s === $ || s === Xe) && (u = !0);
            break;
          }
          case Be:
          case Ie: {
            (s === St || s === Xe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function gR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var f_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), ju(function() {
          qS(e.current, i, a);
        });
      }
    }, d_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), ju(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case we:
          case Ie:
          case ae:
            v = p;
            break;
          case Ee:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ae ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ba(e, Pe);
          w !== null && Er(w, e, Pe, qt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var p_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case we:
          case Ie:
          case ae:
            p = f;
            break;
          case Ee:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? v_(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function v_(e, t) {
      {
        var a = h_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function h_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var SR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function m_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new m_(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function y_(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function g_(e) {
      if (typeof e == "function")
        return ZS(e) ? ae : we;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $)
          return Ee;
        if (t === St)
          return Be;
      }
      return be;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case we:
        case Ie:
          a.type = Qf(e.type);
          break;
        case ae:
          a.type = QS(e.type);
          break;
        case Ee:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function S_(e, t) {
      e.flags &= Fn | Cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = B, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function E_(e, t, a) {
      var i;
      return e === Fh ? (i = Et, t === !0 && (i |= at, i |= en)) : i = Oe, _r && (i |= bt), ui(te, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = ae, p = QS(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = Z;
      else
        e: switch (e) {
          case Qr:
            return Po(a.children, u, s, t);
          case ci:
            f = yt, u |= at, (u & Et) !== Oe && (u |= en);
            break;
          case fi:
            return C_(a, u, s, t);
          case oe:
            return R_(a, u, s, t);
          case ce:
            return x_(a, u, s, t);
          case Tn:
            return ER(a, u, s, t);
          case on:
          case Ct:
          case dn:
          case xr:
          case dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = Ve;
                  break e;
                case R:
                  f = Mt;
                  break e;
                case $:
                  f = Ee, p = GS(p);
                  break e;
                case St:
                  f = Be;
                  break e;
                case Xe:
                  f = ft, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ge(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Po(e, t, a, i) {
      var u = ui(Ne, e, i, t);
      return u.lanes = a, u;
    }
    function C_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(ot, e, i, t | bt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function R_(e, t, a, i) {
      var u = ui(pe, e, i, t);
      return u.elementType = oe, u.lanes = a, u;
    }
    function x_(e, t, a, i) {
      var u = ui(zt, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function ER(e, t, a, i) {
      var u = ui(Le, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ui(ge, e, null, t);
      return i.lanes = a, i;
    }
    function T_() {
      var e = ui(Z, null, null, Oe);
      return e.elementType = "DELETED", e;
    }
    function w_(e) {
      var t = ui(At, null, null, Oe);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ie, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function CR(e, t) {
      return e === null && (e = ui(be, null, null, Oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function b_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Xc(B), this.expirationTimes = Xc(qt), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Xc(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ko:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = new b_(e, t, a, p, v), _ = E_(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return hg(_), g;
    }
    var r0 = "18.3.1";
    function __(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return da(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ma,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function xR(e) {
      if (!e)
        return li;
      var t = ro(e), a = s1(t);
      if (t.tag === ae) {
        var i = t.type;
        if (Al(i))
          return K0(t, i, a);
      }
      return a;
    }
    function k_(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ea(a);
        if (u === null)
          return null;
        if (u.mode & at) {
          var s = Ge(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = Jn;
            try {
              Xt(u), a.mode & at ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : En();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return RR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = RR(a, i, g, e, u, s, f, p, v);
      _.context = xR(null);
      var w = _.current, j = wa(), U = Ho(w), V = Nu(j, U);
      return V.callback = t ?? null, No(w, V, U), jb(_, U, j), _;
    }
    function Qp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Ho(u);
      kc(f);
      var p = xR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && Jn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(Jn) || "Unknown"));
      var v = Nu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Er(y, u, f, s), Jh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function D_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Yv(t);
            Hb(t, a);
          }
          break;
        }
        case pe: {
          ju(function() {
            var u = Ba(e, Pe);
            if (u !== null) {
              var s = wa();
              Er(u, e, Pe, s);
            }
          });
          var i = Pe;
          l0(e, i);
          break;
        }
      }
    }
    function bR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function l0(e, t) {
      bR(e, t);
      var a = e.alternate;
      a && bR(a, t);
    }
    function O_(e) {
      if (e.tag === pe) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function N_(e) {
      if (e.tag === pe) {
        var t = Ho(e), a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          Er(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function _R(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var kR = function(e) {
      return null;
    };
    function L_(e) {
      return kR(e);
    }
    var DR = function(e) {
      return !1;
    };
    function M_(e) {
      return DR(e);
    }
    var OR = null, NR = null, LR = null, MR = null, zR = null, jR = null, AR = null, UR = null, FR = null;
    {
      var HR = function(e, t, a) {
        var i = t[a], u = it(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (it(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = HR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return HR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = it(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], it(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, BR = function(e, t, a) {
        if (t.length !== a.length) {
          $e("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              $e("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = it(e) ? e.slice() : rt({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      OR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, Pe);
          f !== null && Er(f, e, Pe, qt);
        }
      }, NR = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Ba(e, Pe);
          s !== null && Er(s, e, Pe, qt);
        }
      }, LR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, Pe);
          f !== null && Er(f, e, Pe, qt);
        }
      }, MR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Pe);
        i !== null && Er(i, e, Pe, qt);
      }, zR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Pe);
        a !== null && Er(a, e, Pe, qt);
      }, jR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Pe);
        i !== null && Er(i, e, Pe, qt);
      }, AR = function(e) {
        var t = Ba(e, Pe);
        t !== null && Er(t, e, Pe, qt);
      }, UR = function(e) {
        kR = e;
      }, FR = function(e) {
        DR = e;
      };
    }
    function z_(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function j_(e) {
      return null;
    }
    function A_() {
      return Jn;
    }
    function U_(e) {
      var t = e.findFiberByHostInstance, a = Ae.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: OR,
        overrideHookStateDeletePath: NR,
        overrideHookStateRenamePath: LR,
        overrideProps: MR,
        overridePropsDeletePath: zR,
        overridePropsRenamePath: jR,
        setErrorHandler: UR,
        setSuspenseHandler: FR,
        scheduleUpdate: AR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: z_,
        findFiberByHostInstance: t || j_,
        // React Refresh
        findHostInstancesForRefresh: p_,
        scheduleRefresh: f_,
        scheduleRoot: d_,
        setRefreshHandler: c_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: A_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var WR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Im.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = _R(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, Im.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ju(function() {
          Qp(null, e, null, null);
        }), W0(t);
      }
    };
    function F_(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = WR;
      t != null && (t.hydrate ? $e("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Nh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return Jd(p), new o0(f);
    }
    function Im(e) {
      this._internalRoot = e;
    }
    function H_(e) {
      e && th(e);
    }
    Im.prototype.unstable_scheduleHydration = H_;
    function V_(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Nh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Y1(y, _);
        }
      return new Im(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Ii || e.nodeType === Ko));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === Ii || e.nodeType === Ko || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var P_ = Ae.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function B_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = wR(
          t,
          i,
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = f, Nh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return Jd(p), ju(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = TR(
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = g, Nh(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return Jd(_), ju(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function I_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Wm(e, t, a, i, u) {
      QR(a), I_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = B_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return Bm(f);
    }
    var qR = !1;
    function Y_(e) {
      {
        qR || (qR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = P_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ot(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : k_(e, "findDOMNode");
    }
    function W_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Wm(null, e, t, !0, a);
    }
    function $_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Wm(null, e, t, !1, a);
    }
    function Q_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Wm(e, t, a, !1, i);
    }
    var KR = !1;
    function G_(e) {
      if (KR || (KR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !bo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ju(function() {
          Wm(null, null, e, !1, function() {
            e._reactRootContainer = null, W0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && bo(u)), f = e.nodeType === Xr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(D_), Ud(O_), cy(N_), nf(Sa), Xv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is(Kx), Dv(VS, Vb, ju);
    function q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return __(e, t, null, a);
    }
    function K_(e, t, a, i) {
      return Q_(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bo, Tf, Lh, ud, Ju, VS]
    };
    function X_(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), F_(e, t);
    }
    function Z_(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), V_(e, t, a);
    }
    function J_(e) {
      return rR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ju(e);
    }
    var ek = U_({
      findFiberByHostInstance: Is,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!ek && qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Qa.createPortal = q_, Qa.createRoot = X_, Qa.findDOMNode = Y_, Qa.flushSync = J_, Qa.hydrate = W_, Qa.hydrateRoot = Z_, Qa.render = $_, Qa.unmountComponentAtNode = G_, Qa.unstable_batchedUpdates = VS, Qa.unstable_renderSubtreeIntoContainer = K_, Qa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var cx = {};
function fx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (cx.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fx);
    } catch (F) {
      console.error(F);
    }
  }
}
cx.NODE_ENV === "production" ? (fx(), h0.exports = pk()) : h0.exports = vk();
var hk = h0.exports, mk = {}, Zp = hk;
if (mk.NODE_ENV === "production")
  ev.createRoot = Zp.createRoot, ev.hydrateRoot = Zp.hydrateRoot;
else {
  var Qm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ev.createRoot = function(F, X) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Zp.createRoot(F, X);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  }, ev.hydrateRoot = function(F, X, O) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Zp.hydrateRoot(F, X, O);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  };
}
const yk = () => /* @__PURE__ */ T.jsx(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ T.jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" })
  }
), gk = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M9 22V12h6v10" })
    ]
  }
), Sk = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("polyline", { points: "3 17 9 11 13 15 21 7" }),
      /* @__PURE__ */ T.jsx("polyline", { points: "14 7 21 7 21 14" })
    ]
  }
), Ek = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M9 12l2 2 4-4" })
    ]
  }
), Ck = () => /* @__PURE__ */ T.jsx(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ T.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94L14.7 6.3z" })
  }
), Rk = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ T.jsx("path", { d: "M9 12l2 2 4-4" })
    ]
  }
), xk = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ T.jsx("path", { d: "M15 9l-6 6M9 9l6 6" })
    ]
  }
), Tk = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }),
      /* @__PURE__ */ T.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
      /* @__PURE__ */ T.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
    ]
  }
), wk = () => /* @__PURE__ */ T.jsx(
  "svg",
  {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ T.jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
  }
), dx = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "10", r: "3" }),
      /* @__PURE__ */ T.jsx("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" })
    ]
  }
), m0 = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
      /* @__PURE__ */ T.jsx("path", { d: "M22 7l-10 6L2 7" })
    ]
  }
), px = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ T.jsx("line", { x1: "4.93", y1: "4.93", x2: "19.07", y2: "19.07" })
    ]
  }
), vx = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
      /* @__PURE__ */ T.jsx("path", { d: "M9 12l2 2 4-4" })
    ]
  }
), ux = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "7", r: "4" })
    ]
  }
), bk = () => /* @__PURE__ */ T.jsx(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#004A8F",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ T.jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" })
  }
), _k = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "64",
    height: "64",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#008A26",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ T.jsx("path", { d: "M9 12l2 2 4-4" })
    ]
  }
), hx = () => /* @__PURE__ */ T.jsxs(
  "svg",
  {
    width: "64",
    height: "64",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#D4782F",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ T.jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
      /* @__PURE__ */ T.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
      /* @__PURE__ */ T.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), kk = () => /* @__PURE__ */ T.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "11", stroke: "#C0C8D0", strokeWidth: "1.5" }) }), Dk = () => /* @__PURE__ */ T.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ T.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#004A8F" }),
  /* @__PURE__ */ T.jsx(
    "path",
    {
      d: "M8 12.5l2.5 2.5 5-5",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] });
function Ok({ currentStep: F }) {
  const O = { 1: 0, 2: 1, 3: 2, "4a": 3, "4b": 3 }[F] ?? 0, Ae = O >= 3 ? 4 : 3;
  return /* @__PURE__ */ T.jsx("div", { className: "pico-progress", children: Array.from({ length: Ae }).map((ut, Je) => /* @__PURE__ */ T.jsx(
    "span",
    {
      className: Je === O ? "pico-progress-pill" : Je < O ? "pico-progress-dot pico-progress-dot--done" : "pico-progress-dot"
    },
    Je
  )) });
}
const Nk = [
  { id: "renovate", label: "mein Haus modernisieren.", Icon: gk },
  { id: "costs", label: "dauerhaft Heizkosten senken.", Icon: Sk },
  {
    id: "independent",
    label: "unabhängiger von Öl & Gas werden.",
    Icon: Ek
  },
  {
    id: "replace",
    label: "eine alte oder defekte Heizung ersetzen.",
    Icon: Ck
  }
];
function Lk({ interests: F, toggleInterest: X, onNext: O }) {
  const Ae = F.length > 0;
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", children: "Warum interessieren Sie sich für eine Wärmepumpe?" }),
    /* @__PURE__ */ T.jsx("p", { className: "pico-step-subtitle", children: "Ich möchte …" }),
    /* @__PURE__ */ T.jsx("div", { className: "pico-options", children: Nk.map(({ id: ut, label: Je, Icon: $e }) => {
      const S = F.includes(ut);
      return /* @__PURE__ */ T.jsxs(
        "button",
        {
          type: "button",
          className: `pico-option-card ${S ? "pico-option-card--selected" : ""}`,
          onClick: () => X(ut),
          "aria-pressed": S,
          children: [
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-check", children: S ? /* @__PURE__ */ T.jsx(Dk, {}) : /* @__PURE__ */ T.jsx(kk, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-icon", children: /* @__PURE__ */ T.jsx($e, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-label", children: Je })
          ]
        },
        ut
      );
    }) }),
    /* @__PURE__ */ T.jsx(
      "button",
      {
        className: `pico-btn-primary ${Ae ? "pico-btn-primary--active" : ""}`,
        disabled: !Ae,
        onClick: O,
        children: "Weiter"
      }
    )
  ] });
}
function Mk({ onSelect: F }) {
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", children: "Sind Sie Eigentümer der Immobilie?" }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-options pico-options--spaced", children: [
      /* @__PURE__ */ T.jsxs(
        "button",
        {
          type: "button",
          className: "pico-option-card",
          onClick: () => F(!0),
          children: [
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-icon", children: /* @__PURE__ */ T.jsx(Rk, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-label", children: "Ja" })
          ]
        }
      ),
      /* @__PURE__ */ T.jsxs(
        "button",
        {
          type: "button",
          className: "pico-option-card",
          onClick: () => F(!1),
          children: [
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-icon", children: /* @__PURE__ */ T.jsx(xk, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-label", children: "Nein" })
          ]
        }
      )
    ] })
  ] });
}
function zk({ onSelect: F }) {
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", children: "Wie möchten Sie fortfahren?" }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-options pico-options--spaced", children: [
      /* @__PURE__ */ T.jsxs(
        "button",
        {
          type: "button",
          className: "pico-option-card",
          onClick: () => F("online"),
          children: [
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-icon", children: /* @__PURE__ */ T.jsx(Tk, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-label", children: "Online-Check starten & Preisschätzung erhalten" })
          ]
        }
      ),
      /* @__PURE__ */ T.jsxs(
        "button",
        {
          type: "button",
          className: "pico-option-card",
          onClick: () => F("callback"),
          children: [
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-icon", children: /* @__PURE__ */ T.jsx(wk, {}) }),
            /* @__PURE__ */ T.jsx("span", { className: "pico-option-label", children: "Rückruf anfordern für ein persönliches Gespräch" })
          ]
        }
      )
    ] })
  ] });
}
function jk({ formData: F, setFormData: X, onSubmit: O }) {
  const Ae = Nn.useRef(null), ut = Nn.useRef(null), [Je, $e] = Nn.useState(!1);
  Nn.useEffect(() => {
    let Ne;
    const yt = () => {
      if (window.google && window.google.maps && window.google.maps.places && Ae.current && !ut.current) {
        const Mt = new window.google.maps.places.Autocomplete(
          Ae.current,
          {
            types: ["address"],
            componentRestrictions: { country: "de" }
          }
        );
        Mt.addListener("place_changed", () => {
          const Ve = Mt.getPlace();
          if (!Ve.address_components) return;
          const Ee = (ot) => {
            const pe = Ve.address_components.find(
              (Be) => Be.types.includes(ot)
            );
            return pe ? pe.long_name : "";
          };
          X((ot) => ({
            ...ot,
            address: Ve.formatted_address || "",
            street: Ee("route"),
            housenumber: Ee("street_number"),
            zipcode: Ee("postal_code"),
            city: Ee("locality") || Ee("administrative_area_level_1")
          })), $e(!0);
        }), ut.current = Mt, clearInterval(Ne);
      }
    };
    return Ne = setInterval(yt, 300), yt(), () => clearInterval(Ne);
  }, [X]);
  const [S, et] = Nn.useState({}), we = !F.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F.email), ae = !we, be = !Je, te = !F.privacyChecked, ie = Je && F.privacyChecked && we, Z = (Ne) => {
    et((yt) => ({ ...yt, [Ne]: !0 }));
  }, ge = () => {
    if (!ie) {
      et({
        address: !0,
        email: !0,
        privacyChecked: !0
      });
      return;
    }
    O();
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step pico-step-form", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", children: "Ihre Adresse" }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-field-group pico-field-group--highlight", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
        /* @__PURE__ */ T.jsx(
          "input",
          {
            ref: Ae,
            type: "text",
            className: `pico-input ${be && S.address ? "pico-input-error" : ""}`,
            placeholder: "Ihre Adresse*",
            value: F.address,
            onBlur: () => Z("address"),
            onChange: (Ne) => {
              $e(!1), X((yt) => ({
                ...yt,
                address: Ne.target.value
              }));
            }
          }
        ),
        /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(dx, {}) }),
        be && S.address && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte wählen Sie eine Adresse aus." })
      ] }),
      /* @__PURE__ */ T.jsx("p", { className: "pico-field-hint", children: "Wir benötigen Ihre Adresse ausschließlich für Ihren persönlichen Wärmepumpen-Check." })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "email",
          className: `pico-input ${ae && S.email ? "pico-input-error" : ""}`,
          placeholder: "Ihre E-Mail-Adresse (optional)",
          value: F.email,
          onBlur: () => Z("email"),
          onChange: (Ne) => X((yt) => ({ ...yt, email: Ne.target.value }))
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(m0, {}) }),
      ae && S.email && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte geben Sie eine gültige E-Mail-Adresse an." })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-info-lines", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "pico-info-line", children: [
        /* @__PURE__ */ T.jsx(m0, {}),
        " ",
        /* @__PURE__ */ T.jsx("span", { children: "Ihre E-Mail-Adresse für eventuelle Rückfragen." })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "pico-info-line", children: [
        /* @__PURE__ */ T.jsx(px, {}),
        " ",
        /* @__PURE__ */ T.jsx("span", { children: "Sie erhalten keine ungefragte Werbung." })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "pico-info-line", children: [
        /* @__PURE__ */ T.jsx(vx, {}),
        " ",
        /* @__PURE__ */ T.jsx("span", { children: "Ihre Daten werden gemäß DSGVO sicher gespeichert." })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("label", { className: "pico-checkbox-label", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          checked: F.privacyChecked,
          onChange: (Ne) => X((yt) => ({
            ...yt,
            privacyChecked: Ne.target.checked
          })),
          onBlur: () => Z("privacyChecked")
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-checkbox-custom" }),
      /* @__PURE__ */ T.jsxs("span", { className: "pico-checkbox-text", children: [
        "Ich habe die",
        " ",
        /* @__PURE__ */ T.jsx(
          "a",
          {
            href: "https://www.juergenhohnen.de/datenschutz/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Datenschutzerklärung"
          }
        ),
        " ",
        "gelesen und stimme der Verarbeitung meiner Daten zu.",
        /* @__PURE__ */ T.jsx("span", { className: "pico-required", children: "*" })
      ] })
    ] }),
    te && S.privacyChecked && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
    /* @__PURE__ */ T.jsx(
      "button",
      {
        className: `pico-btn-primary ${ie ? "pico-btn-primary--active" : ""}`,
        onClick: ge,
        children: "Check starten"
      }
    )
  ] });
}
function Ak({ formData: F, setFormData: X, onSuccess: O, onBuildingNotFound: Ae, onOutsideArea: ut }) {
  const [Je, $e] = Nn.useState(!1), S = Nn.useRef(null), et = Nn.useRef(null), [we, ae] = Nn.useState(!1);
  Nn.useEffect(() => {
    let ft;
    const Ue = () => {
      if (window.google && window.google.maps && window.google.maps.places && S.current && !et.current) {
        const At = new window.google.maps.places.Autocomplete(
          S.current,
          {
            types: ["address"],
            componentRestrictions: { country: "de" }
          }
        );
        At.addListener("place_changed", () => {
          const zt = At.getPlace();
          if (!zt.address_components) return;
          const st = (Le) => {
            const jt = zt.address_components.find(
              (gt) => gt.types.includes(Le)
            );
            return jt ? jt.long_name : "";
          };
          X((Le) => ({
            ...Le,
            address: zt.formatted_address || "",
            street: st("route"),
            housenumber: st("street_number"),
            zipcode: st("postal_code"),
            city: st("locality") || st("administrative_area_level_1")
          })), ae(!0);
        }), et.current = At, clearInterval(ft);
      }
    };
    return ft = setInterval(Ue, 300), Ue(), () => clearInterval(ft);
  }, [X]);
  const [be, te] = Nn.useState({}), ie = F.phone.replace(/\s/g, ""), Z = /^\+?[0-9]{6,15}$/.test(ie), ge = !Z, Ne = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F.email), yt = !Ne, Mt = !F.firstName, Ve = !F.lastName, Ee = !we, ot = !F.privacyChecked, pe = !Mt && !Ve && !Ee && Ne && Z && !ot, Be = (ft) => {
    te((Ue) => ({ ...Ue, [ft]: !0 }));
  }, Ie = async () => {
    if (!pe) {
      te({
        firstName: !0,
        lastName: !0,
        address: !0,
        email: !0,
        phone: !0,
        privacyChecked: !0
      });
      return;
    }
    if (Je) return;
    $e(!0);
    const ft = {
      FlowID: "6d87188b-26d4-4029-8ac0-475678d8c200",
      Firstname: F.firstName || "",
      Lastname: F.lastName || "",
      Email: F.email || "",
      Phonenumber: F.phone || "",
      HouseDetails: {
        Country: "DE",
        Zipcode: F.zipcode || "",
        Housenumber: F.housenumber || "",
        HouseNumberAddition: "",
        Street: F.street || "",
        City: F.city || ""
      }
    };
    try {
      const Ue = await fetch(
        "https://pico.homezero.nl/rest/pico/v1/assignments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "36FMhB7kRc0rupVTEROKMzIdJNK2efuA"
          },
          body: JSON.stringify(ft)
        }
      );
      let At = {};
      try {
        At = await Ue.json();
      } catch {
        console.warn(
          "Pico API: Response is not valid JSON"
        );
      }
      At.error === "Could not find a building with this address" ? Ae() : At.error === "address not inside the operating area" ? ut() : Ue.ok ? O() : (console.warn(`Pico API returned status ${Ue.status}`), Ae());
    } catch (Ue) {
      console.error("Pico API network/fetch error:", Ue), Ae();
    } finally {
      $e(!1);
    }
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step pico-step-form", children: [
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", children: "Ihre Kontaktdaten" }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-two-col", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
        /* @__PURE__ */ T.jsx(
          "input",
          {
            type: "text",
            className: `pico-input ${Mt && be.firstName ? "pico-input-error" : ""}`,
            placeholder: "Vorname*",
            value: F.firstName,
            onBlur: () => Be("firstName"),
            onChange: (ft) => X((Ue) => ({
              ...Ue,
              firstName: ft.target.value
            }))
          }
        ),
        /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(ux, {}) }),
        Mt && be.firstName && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte Vorname angeben." })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
        /* @__PURE__ */ T.jsx(
          "input",
          {
            type: "text",
            className: `pico-input ${Ve && be.lastName ? "pico-input-error" : ""}`,
            placeholder: "Nachname*",
            value: F.lastName,
            onBlur: () => Be("lastName"),
            onChange: (ft) => X((Ue) => ({
              ...Ue,
              lastName: ft.target.value
            }))
          }
        ),
        /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(ux, {}) }),
        Ve && be.lastName && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte Nachname angeben." })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          ref: S,
          type: "text",
          className: `pico-input ${Ee && be.address ? "pico-input-error" : ""}`,
          placeholder: "Ihre Adresse*",
          value: F.address,
          onBlur: () => Be("address"),
          onChange: (ft) => {
            ae(!1), X((Ue) => ({ ...Ue, address: ft.target.value }));
          }
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(dx, {}) }),
      Ee && be.address && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte wählen Sie eine Adresse aus." })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "email",
          className: `pico-input ${yt && be.email ? "pico-input-error" : ""}`,
          placeholder: "Ihre E-Mail-Adresse*",
          value: F.email,
          onBlur: () => Be("email"),
          onChange: (ft) => X((Ue) => ({ ...Ue, email: ft.target.value }))
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(m0, {}) }),
      yt && be.email && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte geben Sie eine gültige E-Mail-Adresse an." })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-input-wrap", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "tel",
          className: `pico-input ${ge && be.phone ? "pico-input-error" : ""}`,
          placeholder: "Ihre Telefonnummer*",
          value: F.phone,
          onBlur: () => Be("phone"),
          onChange: (ft) => X((Ue) => ({ ...Ue, phone: ft.target.value }))
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-input-icon", children: /* @__PURE__ */ T.jsx(bk, {}) }),
      ge && be.phone && /* @__PURE__ */ T.jsx("p", { className: "pico-error-text", children: "Bitte geben Sie eine gültige Telefonnummer an." })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-info-lines", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "pico-info-line", children: [
        /* @__PURE__ */ T.jsx(px, {}),
        " ",
        /* @__PURE__ */ T.jsx("span", { children: "Sie erhalten keine ungefragte Werbung." })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "pico-info-line", children: [
        /* @__PURE__ */ T.jsx(vx, {}),
        " ",
        /* @__PURE__ */ T.jsx("span", { children: "Ihre Daten werden gemäß DSGVO sicher gespeichert." })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("label", { className: "pico-checkbox-label", children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          checked: F.privacyChecked,
          onChange: (ft) => X((Ue) => ({
            ...Ue,
            privacyChecked: ft.target.checked
          })),
          onBlur: () => Be("privacyChecked")
        }
      ),
      /* @__PURE__ */ T.jsx("span", { className: "pico-checkbox-custom" }),
      /* @__PURE__ */ T.jsxs("span", { className: "pico-checkbox-text", children: [
        "Ich habe die",
        " ",
        /* @__PURE__ */ T.jsx(
          "a",
          {
            href: "https://www.juergenhohnen.de/datenschutz/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Datenschutzerklärung"
          }
        ),
        " ",
        "gelesen und stimme der Verarbeitung meiner Daten zu.",
        /* @__PURE__ */ T.jsx("span", { className: "pico-required", children: "*" })
      ] })
    ] }),
    ot && be.privacyChecked && /* @__PURE__ */ T.jsx(
      "p",
      {
        className: "pico-error-text",
        style: { marginTop: "-2px", marginBottom: "8px" },
        children: "Bitte stimmen Sie der Datenschutzerklärung zu."
      }
    ),
    /* @__PURE__ */ T.jsx(
      "button",
      {
        className: `pico-btn-primary ${pe ? "pico-btn-primary--active" : ""}`,
        disabled: Je,
        onClick: Ie,
        children: Je ? "Wird gesendet…" : "Rückruf anfordern"
      }
    )
  ] });
}
function Uk() {
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step pico-step-center", children: [
    /* @__PURE__ */ T.jsx(_k, {}),
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", style: { marginTop: 16 }, children: "Vielen Dank!" }),
    /* @__PURE__ */ T.jsx("p", { className: "pico-step-subtitle", children: "Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen." })
  ] });
}
function Fk({ onBack: F }) {
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step pico-step-center", children: [
    /* @__PURE__ */ T.jsx(hx, {}),
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", style: { marginTop: 16 }, children: "Adresse nicht gefunden" }),
    /* @__PURE__ */ T.jsx("p", { className: "pico-step-subtitle", style: { whiteSpace: "pre-wrap" }, children: `Leider können wir Ihre Adresse nicht finden.

Falls Sie einen Hausnummernzusatz haben, überprüfen Sie bitte, ob er korrekt eingegeben wurde.` }),
    /* @__PURE__ */ T.jsx("button", { className: "pico-btn-primary", onClick: F, style: { marginTop: 24 }, children: "Zurück" })
  ] });
}
function Hk() {
  return /* @__PURE__ */ T.jsxs("div", { className: "pico-step pico-step-center", children: [
    /* @__PURE__ */ T.jsx(hx, {}),
    /* @__PURE__ */ T.jsx("h2", { className: "pico-step-title", style: { marginTop: 16 }, children: "Schade! In Ihrer Region sind wir noch nicht aktiv." }),
    /* @__PURE__ */ T.jsx("p", { className: "pico-step-subtitle", style: { whiteSpace: "pre-wrap" }, children: "Wir arbeiten daran, unser Einsatzgebiet zu erweitern. Schauen Sie doch bald mal wieder auf unserer Website vorbei, um zu sehen, ob wir auch zu Ihnen kommen." }),
    /* @__PURE__ */ T.jsx("a", { href: "https://go.homezero.nl/jh", className: "pico-btn-primary", style: { marginTop: 24, display: "inline-block", textDecoration: "none" }, children: "Zurück zur Homepage" })
  ] });
}
const Vk = {
  interests: [],
  isOwner: null,
  path: null,
  address: "",
  street: "",
  housenumber: "",
  zipcode: "",
  city: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  privacyChecked: !1
};
function Pk() {
  const [F, X] = Nn.useState("1"), [O, Ae] = Nn.useState(Vk), [ut, Je] = Nn.useState(!1), $e = Nn.useRef(null);
  Nn.useEffect(() => {
    const ie = document.createElement("script");
    return ie.src = "https://homezerotech.github.io/Widget/Production/embed.js", ie.defer = !0, document.head.appendChild(ie), () => {
      try {
        document.head.removeChild(ie);
      } catch {
      }
    };
  }, []), Nn.useEffect(() => {
    $e.current && !$e.current.querySelector("hz-embed") && ($e.current.innerHTML = `
        <hz-embed
          src="https://configurator.homezero.nl/link/start?id=3826d61f-6790-4fca-ab8d-e0891ae4d9d9"
          data-address-format="international"
          data-language="de"
          data-open-new-tab="true"
          data-show-phone="false"
          data-phone-required="false"
          data-show-email="true"
          data-email-required="false"
          data-button-text="Start Scan"
          data-button-radius="7px"
          data-color="#008A26"
          data-google-search="true"
          data-country="de"
        ></hz-embed>`);
  }, []);
  const S = Nn.useCallback((ie) => {
    Ae((Z) => ({
      ...Z,
      interests: Z.interests.includes(ie) ? Z.interests.filter((ge) => ge !== ie) : [...Z.interests, ie]
    }));
  }, []), et = () => {
    const Z = { 2: "1", 3: "2", "4a": "3", "4b": "3" }[F];
    Z && ((F === "4a" || F === "4b") && Ae((ge) => ({
      ...ge,
      address: "",
      street: "",
      housenumber: "",
      zipcode: "",
      city: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      privacyChecked: !1
    })), X(Z));
  }, we = ["2", "3", "4a", "4b"].includes(F), ae = !1, be = !["5a", "5b", "5c"].includes(F), te = () => {
    var Ne;
    try {
      const yt = (Ne = $e.current) == null ? void 0 : Ne.querySelector("hz-embed");
      if (yt) {
        const Ve = yt.shadowRoot || yt, Ee = Ve.querySelector(
          'input[type="text"], input[type="search"], input'
        ), ot = Ve.querySelector("button");
        Ee && (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set.call(Ee, O.address), Ee.dispatchEvent(new Event("input", { bubbles: !0 })), Ee.dispatchEvent(new Event("change", { bubbles: !0 })));
        const pe = Ve.querySelectorAll(
          'input[type="email"], input[placeholder*="mail"]'
        );
        pe.length > 0 && O.email && (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set.call(pe[0], O.email), pe[0].dispatchEvent(
          new Event("input", { bubbles: !0 })
        )), setTimeout(() => {
          ot && ot.click();
        }, 500);
      }
    } catch (yt) {
      console.warn(
        "hz-embed interaction failed, opening URL directly:",
        yt
      );
    }
    const ie = new URLSearchParams();
    O.street && ie.set("street", O.street), O.housenumber && ie.set("housenumber", O.housenumber), O.zipcode && ie.set("zipcode", O.zipcode), O.city && ie.set("city", O.city), O.email && ie.set("email", O.email), ie.set("country", "de");
    const ge = `https://configurator.homezero.nl/link/start?id=3826d61f-6790-4fca-ab8d-e0891ae4d9d9&${ie.toString()}`;
    window.open(ge, "_blank");
  };
  return ut ? null : /* @__PURE__ */ T.jsxs("div", { className: "pico-widget", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "pico-widget-header", children: [
      /* @__PURE__ */ T.jsx("div", { className: "pico-header-left", children: we && /* @__PURE__ */ T.jsx(
        "button",
        {
          className: "pico-btn-icon",
          onClick: et,
          "aria-label": "Zurück",
          children: /* @__PURE__ */ T.jsx(yk, {})
        }
      ) }),
      /* @__PURE__ */ T.jsx("div", { className: "pico-header-center", children: be && /* @__PURE__ */ T.jsx(Ok, { currentStep: F }) }),
      /* @__PURE__ */ T.jsx("div", { className: "pico-header-right", children: ae })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "pico-widget-body", children: [
      F === "1" && /* @__PURE__ */ T.jsx(
        Lk,
        {
          interests: O.interests,
          toggleInterest: S,
          onNext: () => X("2")
        }
      ),
      F === "2" && /* @__PURE__ */ T.jsx(
        Mk,
        {
          onSelect: (ie) => {
            Ae((Z) => ({ ...Z, isOwner: ie })), X("3");
          }
        }
      ),
      F === "3" && /* @__PURE__ */ T.jsx(
        zk,
        {
          onSelect: (ie) => {
            Ae((Z) => ({ ...Z, path: ie })), X(ie === "online" ? "4a" : "4b");
          }
        }
      ),
      F === "4a" && /* @__PURE__ */ T.jsx(
        jk,
        {
          formData: O,
          setFormData: Ae,
          onSubmit: te
        }
      ),
      F === "4b" && /* @__PURE__ */ T.jsx(
        Ak,
        {
          formData: O,
          setFormData: Ae,
          onSuccess: () => X("5a"),
          onBuildingNotFound: () => X("5b"),
          onOutsideArea: () => X("5c")
        }
      ),
      F === "5a" && /* @__PURE__ */ T.jsx(Uk, {}),
      F === "5b" && /* @__PURE__ */ T.jsx(Fk, { onBack: () => X("4b") }),
      F === "5c" && /* @__PURE__ */ T.jsx(Hk, {})
    ] }),
    /* @__PURE__ */ T.jsx(
      "div",
      {
        ref: $e,
        className: "pico-hz-embed-hidden",
        "aria-hidden": "true"
      }
    )
  ] });
}
const mx = "pico-widget-container", ox = document.getElementById(mx);
ox ? ev.createRoot(ox).render(
  /* @__PURE__ */ T.jsx(uk.StrictMode, { children: /* @__PURE__ */ T.jsx(Pk, {}) })
) : console.warn(`Pico Widget: Container element #${mx} not found. Widget will not render.`);
