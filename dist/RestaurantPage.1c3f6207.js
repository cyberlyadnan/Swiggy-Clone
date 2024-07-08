// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4fX9e":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "2d59fd121c3f6207";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"4FOVO":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ec41 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ec41.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _restaurantShimmer = require("./RestaurantShimmer");
var _useRestaurantData = require("../../Hooks/useRestaurantData");
var _useRestaurantDataDefault = parcelHelpers.interopDefault(_useRestaurantData);
var _catergories = require("./Catergories");
var _catergoriesDefault = parcelHelpers.interopDefault(_catergories);
var _s = $RefreshSig$();
const RestaurantPage = ()=>{
    _s();
    // const [isOpen, setisOpen] = useState(true)
    const [openIndex, setopenIndex] = (0, _react.useState)(0);
    const { restaurantInfo, restaurantDeatils } = (0, _useRestaurantDataDefault.default)();
    (0, _react.useEffect)(()=>{
        window.scrollTo(0, 0);
    }, []);
    if (restaurantInfo.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: " bg-gray-100 min-h-screen flex items-center justify-center py-6",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantShimmer.RestaurantShimmer), {}, void 0, false, {
            fileName: "src/components/RestaurantPage.js",
            lineNumber: 18,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/RestaurantPage.js",
        lineNumber: 17,
        columnNumber: 7
    }, undefined);
    const { name, avgRating, locality, city, costForTwo, totalRatingsString, cuisines, cloudinaryImageId, aggregatedDiscountInfo } = restaurantDeatils;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: " bg-gray-100 min-h-screen flex items-center justify-center py-6",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "restaurant-image",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "w-full h-64 object-cover",
                                src: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`,
                                alt: name
                            }, void 0, false, {
                                fileName: "src/components/RestaurantPage.js",
                                lineNumber: 39,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/RestaurantPage.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "restaurant-details p-6",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                    className: "text-3xl font-bold mb-2 text-gray-800",
                                    children: name
                                }, void 0, false, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-gray-700 mb-1",
                                    children: [
                                        locality,
                                        ", ",
                                        city
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-gray-600 mb-2",
                                    children: [
                                        "Cuisines: ",
                                        cuisines ? cuisines.join(", ") : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "flex items-center mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "text-yellow-500 font-semibold text-lg",
                                            children: [
                                                "Rating: ",
                                                avgRating
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/RestaurantPage.js",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "text-gray-500 ml-2",
                                            children: [
                                                "(",
                                                totalRatingsString,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/RestaurantPage.js",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "text-gray-600 mb-4",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "font-medium",
                                        children: [
                                            "Cost for Two: \u20B9",
                                            costForTwo / 100
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/RestaurantPage.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, undefined),
                                aggregatedDiscountInfo && aggregatedDiscountInfo.visible && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "discount-info bg-green-50 text-green-800 p-4 rounded-lg mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                            className: "font-semibold",
                                            children: aggregatedDiscountInfo.header
                                        }, void 0, false, {
                                            fileName: "src/components/RestaurantPage.js",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                            className: "list-disc pl-5 mt-2 text-green-700",
                                            children: aggregatedDiscountInfo.shortDescriptionList.map((desc, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                    children: desc.meta
                                                }, index, false, {
                                                    fileName: "src/components/RestaurantPage.js",
                                                    lineNumber: 72,
                                                    columnNumber: 23
                                                }, undefined))
                                        }, void 0, false, {
                                            fileName: "src/components/RestaurantPage.js",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/RestaurantPage.js",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/RestaurantPage.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/RestaurantPage.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/RestaurantPage.js",
                lineNumber: 36,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "bg-gray-100",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto pb-6",
                    children: restaurantInfo.map((singlecategory, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _catergoriesDefault.default), {
                            setisOpen: ()=>setopenIndex(openIndex === index ? null : index),
                            isOpen: index === openIndex,
                            restaurantInfo: singlecategory
                        }, singlecategory.card.card.title, false, {
                            fileName: "src/components/RestaurantPage.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/RestaurantPage.js",
                    lineNumber: 82,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/RestaurantPage.js",
                lineNumber: 81,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(RestaurantPage, "JZojGXSqa7gUbMCdVyEYQlLgJ5U=", false, function() {
    return [
        (0, _useRestaurantDataDefault.default)
    ];
});
_c = RestaurantPage;
exports.default = RestaurantPage;
var _c;
$RefreshReg$(_c, "RestaurantPage");

  $parcel$ReactRefreshHelpers$ec41.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./RestaurantShimmer":"52tTi","../../Hooks/useRestaurantData":"4MDmh","./Catergories":"aVtiH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4MDmh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a3fb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a3fb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactRouterDom = require("react-router-dom");
var _react = require("react");
var _constants = require("../Utils/constants");
var _s = $RefreshSig$();
const useRestaurantData = ()=>{
    _s();
    const [restaurantInfo, setrestaurantInfo] = (0, _react.useState)([]);
    const [restaurantDeatils, setrestaurantDeatils] = (0, _react.useState)([]);
    const { resid } = (0, _reactRouterDom.useParams)();
    const GetData = async ()=>{
        console.log("Get data is running befor fetch");
        const data = await fetch((0, _constants.RestaurantAPI) + resid);
        console.log("Get data is running");
        dataJson = await data.json();
        console.log(dataJson);
        setrestaurantDeatils(dataJson.data.cards[2].card.card.info);
        // setrestaurantInfo(dataJson.data)
        setrestaurantInfo(dataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((category)=>category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    };
    (0, _react.useEffect)(()=>{
        GetData();
    // window.scrollTo(0, 0)
    }, []);
    return {
        restaurantInfo,
        restaurantDeatils
    };
};
_s(useRestaurantData, "MZAl7OW1ZhC8BMllyP6R3IS22lg=", false, function() {
    return [
        (0, _reactRouterDom.useParams)
    ];
});
exports.default = useRestaurantData;

  $parcel$ReactRefreshHelpers$a3fb.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react-router-dom":"9xmpe","react":"21dqq","../Utils/constants":"l0eOX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"aVtiH":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$849d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$849d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dish = require("./Dish");
var _dishDefault = parcelHelpers.interopDefault(_dish);
const Categories = ({ restaurantInfo, isOpen, setisOpen })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between items-center py-2 cursor-pointer px-6 border-b-2",
                onClick: setisOpen,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-xl font-semibold",
                        children: [
                            restaurantInfo.card.card.title,
                            " (",
                            restaurantInfo.card.card.itemCards.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Catergories.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: `transform transition-transform ${isOpen ? "rotate-180" : ""}`,
                        children: "\u25BC"
                    }, void 0, false, {
                        fileName: "src/components/Catergories.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Catergories.js",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            isOpen && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "py-2 cursor-pointer px-6 border-b-2 rounded-lg",
                children: restaurantInfo.card.card.itemCards.map((dishInfo, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dishDefault.default), {
                        dishInfo: dishInfo,
                        showRemove: false,
                        index: index
                    }, dishInfo.card.info.id, false, {
                        fileName: "src/components/Catergories.js",
                        lineNumber: 26,
                        columnNumber: 13
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Catergories.js",
                lineNumber: 24,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Catergories.js",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
_c = Categories;
exports.default = Categories;
var _c;
$RefreshReg$(_c, "Categories");

  $parcel$ReactRefreshHelpers$849d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./Dish":"g8tJK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"g8tJK":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$fa9e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$fa9e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRedux = require("react-redux");
var _cartSlice = require("../../Utils/cartSlice");
var _s = $RefreshSig$();
const Dish = ({ dishInfo, showRemove, index })=>{
    _s();
    const { name, description, imageId, price, defaultPrice } = dishInfo.card.info;
    const dispatch = (0, _reactRedux.useDispatch)();
    const handleClickAdd = ()=>{
        dispatch((0, _cartSlice.addItem)(dishInfo)); // Dispatch addItem action with dishInfo as payload
    };
    const handleClickRemove = ()=>{
        dispatch((0, _cartSlice.removeItem)(index)); // Dispatch removeItem action with index as payload
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "space-y-6",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "rounded-lg border-2 hover:shadow-lg cursor-pointer border-gray-100 hover:bg-gray-800 bg-white p-4 shadow-sm dark:border-gray-700 md:p-4 shadow-md hover:shadow-xl dark:bg-gray-900",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "shrink-0 md:order-1",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: "h-20 w-20 dark:hidden",
                                        src: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`,
                                        alt: name
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        className: "hidden h-24 w-24 dark:block rounded-lg",
                                        src: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`,
                                        alt: name
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Dish.js",
                                lineNumber: 24,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "flex items-center justify-between md:order-3 md:justify-end",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "flex items-center",
                                        children: showRemove ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            type: "button",
                                            onClick: handleClickRemove,
                                            className: "inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                    className: "me-1.5 h-5 w-5",
                                                    "aria-hidden": "true",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M6 18 17.94 6M18 18 6.06 6"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Dish.js",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Dish.js",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, undefined),
                                                "Remove"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Dish.js",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            type: "button",
                                            onClick: handleClickAdd,
                                            className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                className: "h-2.5 w-2.5 text-gray-900 dark:text-white",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 18 18",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 1v16M1 9h16"
                                                }, void 0, false, {
                                                    fileName: "src/components/Dish.js",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Dish.js",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Dish.js",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "text-end md:order-4 md:w-32",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            className: "text-base font-bold text-gray-900 dark:text-white",
                                            children: [
                                                "\u20B9",
                                                price ? price / 100 : defaultPrice / 100
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Dish.js",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Dish.js",
                                lineNumber: 37,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-white font-bold text-xl",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "text-base font-xs text-gray-900 hover:text-yellow-400 dark:text-white",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "src/components/Dish.js",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Dish.js",
                                lineNumber: 122,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Dish.js",
                        lineNumber: 23,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Dish.js",
                    lineNumber: 22,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Dish.js",
                lineNumber: 21,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/Dish.js",
            lineNumber: 20,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Dish.js",
        lineNumber: 19,
        columnNumber: 5
    }, undefined);
};
_s(Dish, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
_c = Dish;
exports.default = Dish;
var _c;
$RefreshReg$(_c, "Dish");

  $parcel$ReactRefreshHelpers$fa9e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-redux":"62sf7","../../Utils/cartSlice":"2aZji","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["4fX9e","1xC6H"], null, "parcelRequirefdde")

//# sourceMappingURL=RestaurantPage.1c3f6207.js.map
