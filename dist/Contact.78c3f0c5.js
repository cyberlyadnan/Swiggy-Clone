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
})({"av7iM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d6bf61d978c3f0c5";
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

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"cgAOG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ee46 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ee46.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _s = $RefreshSig$();
const Contact = ()=>{
    _s();
    const count = null;
    (0, _react.useEffect)(()=>{
        const count = setInterval(()=>{
            console.log("Counting");
        }, 1000);
        return ()=>{
            clearInterval(count);
        };
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
            className: "bg-blue-50 dark:bg-slate-800 px-20",
            id: "contact",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-10",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                    className: "font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "src/components/Contact.js",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400",
                                    children: "Reach out today and let's turn your ideas into reality together!"
                                }, void 0, false, {
                                    fileName: "src/components/Contact.js",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Contact.js",
                            lineNumber: 21,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Contact.js",
                        lineNumber: 20,
                        columnNumber: 21
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex items-stretch justify-center",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "grid md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "h-full pr-6",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            className: "mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400",
                                            children: "Embark on a journey of collaboration and innovation with us. Whether you're dreaming up the next big project or need expert guidance, our team is here to listen, advise, and bring your visions to life."
                                        }, void 0, false, {
                                            fileName: "src/components/Contact.js",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                            className: "mb-6 md:mb-0",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "h-6 w-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 45,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 46,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Contact.js",
                                                                lineNumber: 42,
                                                                columnNumber: 45
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 41,
                                                            columnNumber: 41
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "ml-4 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                                    className: "mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white",
                                                                    children: "Our Address"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 52,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Qazi Street"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 54,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Saharanpur, India"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 55,
                                                                    columnNumber: 45
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 51,
                                                            columnNumber: 41
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Contact.js",
                                                    lineNumber: 40,
                                                    columnNumber: 37
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "h-6 w-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 63,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M15 7a2 2 0 0 1 2 2"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 66,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M15 3a6 6 0 0 1 6 6"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 67,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Contact.js",
                                                                lineNumber: 60,
                                                                columnNumber: 45
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 59,
                                                            columnNumber: 41
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "ml-4 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                                    className: "mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white",
                                                                    children: "Contact"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 71,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Mobile: +91 ############"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 73,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Mail: adnanahmad9334@gmail.com"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 74,
                                                                    columnNumber: 45
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 70,
                                                            columnNumber: 41
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Contact.js",
                                                    lineNumber: 58,
                                                    columnNumber: 37
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "h-6 w-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 82,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                        d: "M12 7v5l3 3"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Contact.js",
                                                                        lineNumber: 83,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Contact.js",
                                                                lineNumber: 79,
                                                                columnNumber: 45
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 78,
                                                            columnNumber: 41
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "ml-4 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                                    className: "mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white",
                                                                    children: "Working hours"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 87,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Monday - Friday: 08:00 - 17:00"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 89,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                    className: "text-gray-600 dark:text-slate-400",
                                                                    children: "Saturday & Sunday: 08:00 - 12:00"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 90,
                                                                    columnNumber: 45
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 86,
                                                            columnNumber: 41
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Contact.js",
                                                    lineNumber: 77,
                                                    columnNumber: 37
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Contact.js",
                                            lineNumber: 39,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Contact.js",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "card h-fit max-w-6xl p-5 md:p-12",
                                    id: "form",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                            className: "mb-4 text-2xl font-bold dark:text-white",
                                            children: "Ready to Get Started?"
                                        }, void 0, false, {
                                            fileName: "src/components/Contact.js",
                                            lineNumber: 96,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                                            id: "contactForm",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "mx-0 mb-1 sm:mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    className: "mx-0 mb-1 sm:mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                                            htmlFor: "name",
                                                                            className: "pb-1 text-xs uppercase tracking-wider"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Contact.js",
                                                                            lineNumber: 101,
                                                                            columnNumber: 49
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                                            type: "text",
                                                                            id: "name",
                                                                            autoComplete: "given-name",
                                                                            placeholder: "Your name",
                                                                            className: "mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0",
                                                                            name: "name"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Contact.js",
                                                                            lineNumber: 101,
                                                                            columnNumber: 129
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 100,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    className: "mx-0 mb-1 sm:mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                                            htmlFor: "email",
                                                                            className: "pb-1 text-xs uppercase tracking-wider"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Contact.js",
                                                                            lineNumber: 104,
                                                                            columnNumber: 49
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                                            type: "email",
                                                                            id: "email",
                                                                            autoComplete: "email",
                                                                            placeholder: "Your email address",
                                                                            className: "mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0",
                                                                            name: "email"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Contact.js",
                                                                            lineNumber: 104,
                                                                            columnNumber: 130
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 103,
                                                                    columnNumber: 45
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 99,
                                                            columnNumber: 41
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "mx-0 mb-1 sm:mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                                    htmlFor: "textarea",
                                                                    className: "pb-1 text-xs uppercase tracking-wider"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 108,
                                                                    columnNumber: 45
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("textarea", {
                                                                    id: "textarea",
                                                                    name: "textarea",
                                                                    cols: "30",
                                                                    rows: "5",
                                                                    placeholder: "Write your message...",
                                                                    className: "mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Contact.js",
                                                                    lineNumber: 108,
                                                                    columnNumber: 129
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Contact.js",
                                                            lineNumber: 107,
                                                            columnNumber: 41
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Contact.js",
                                                    lineNumber: 98,
                                                    columnNumber: 37
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                        type: "submit",
                                                        className: "w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0",
                                                        children: "Send Message"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Contact.js",
                                                        lineNumber: 112,
                                                        columnNumber: 41
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Contact.js",
                                                    lineNumber: 111,
                                                    columnNumber: 37
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Contact.js",
                                            lineNumber: 97,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Contact.js",
                                    lineNumber: 95,
                                    columnNumber: 29
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Contact.js",
                            lineNumber: 34,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Contact.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Contact.js",
                lineNumber: 19,
                columnNumber: 17
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/Contact.js",
            lineNumber: 18,
            columnNumber: 13
        }, undefined)
    }, void 0, false);
};
_s(Contact, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Contact;
exports.default = Contact;
var _c;
$RefreshReg$(_c, "Contact");

  $parcel$ReactRefreshHelpers$ee46.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["av7iM","1xC6H"], null, "parcelRequirefdde")

//# sourceMappingURL=Contact.78c3f0c5.js.map
