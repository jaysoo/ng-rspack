"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Compilation_inner;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compilation = void 0;
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3bb53f36a5b8fc6bc1bd976ed7af161bd80/lib/Compilation.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
const tapable = __importStar(require("tapable"));
const createSource_1 = require("./util/createSource");
const chunk_group_1 = require("./chunk_group");
const fake_1 = require("./util/fake");
const Logger_1 = require("./logging/Logger");
const ErrorHelpers = __importStar(require("./ErrorHelpers"));
const util_1 = require("./util");
const stats_1 = require("./stats");
const hashDigestLength = 8;
const EMPTY_ASSET_INFO = {};
class Compilation {
    constructor(compiler, inner) {
        _Compilation_inner.set(this, void 0);
        this.childrenCounters = {};
        this.name = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        let processAssetsHooks = (0, fake_1.createFakeProcessAssetsHook)(this);
        this.hooks = {
            processAssets: processAssetsHooks,
            // TODO: webpack 6 deprecate, keep it just for compatibility
            /** @deprecated */
            additionalAssets: processAssetsHooks.stageAdditional,
            log: new tapable.SyncBailHook(["origin", "logEntry"]),
            optimizeChunkModules: new tapable.AsyncSeriesBailHook([
                "chunks",
                "modules"
            ]),
            finishModules: new tapable.AsyncSeriesHook(["modules"])
        };
        this.compiler = compiler;
        this.resolverFactory = compiler.resolverFactory;
        this.inputFileSystem = compiler.inputFileSystem;
        this.options = compiler.options;
        this.outputOptions = compiler.options.output;
        this.logging = new Map();
        __classPrivateFieldSet(this, _Compilation_inner, inner, "f");
        this.children = [];
    }
    get hash() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").hash;
    }
    get fullHash() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").hash;
    }
    /**
     * Get a map of all assets.
     *
     * Source: [assets](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L1008-L1009)
     */
    get assets() {
        return new Proxy({}, {
            get: (_, property) => {
                if (typeof property === "string") {
                    return this.__internal__getAssetSource(property);
                }
            },
            set: (target, p, newValue, receiver) => {
                if (typeof p === "string") {
                    this.__internal__setAssetSource(p, newValue);
                    return true;
                }
                return false;
            },
            deleteProperty: (target, p) => {
                if (typeof p === "string") {
                    this.__internal__deleteAssetSource(p);
                    return true;
                }
                return false;
            },
            has: (_, property) => {
                if (typeof property === "string") {
                    return this.__internal__hasAsset(property);
                }
                return false;
            },
            ownKeys: _ => {
                return this.__internal__getAssetFilenames();
            },
            getOwnPropertyDescriptor() {
                // To work with `Object.keys`, you should mark the property as enumerable.
                // See: https://262.ecma-international.org/7.0/#sec-enumerableownnames
                return {
                    enumerable: true,
                    configurable: true
                };
            }
        });
    }
    /**
     * Get a map of all entrypoints.
     */
    get entrypoints() {
        return new Map(Object.entries(__classPrivateFieldGet(this, _Compilation_inner, "f").entrypoints).map(([n, e]) => [
            n,
            new chunk_group_1.ChunkGroup(e)
        ]));
    }
    createStatsOptions(optionsOrPreset, context = {}) {
        optionsOrPreset = (0, stats_1.normalizeStatsPreset)(optionsOrPreset);
        let options = {};
        if (typeof optionsOrPreset === "object" && optionsOrPreset !== null) {
            options = Object.assign({}, optionsOrPreset);
        }
        const all = options.all;
        const optionOrLocalFallback = (v, def) => v !== undefined ? v : all !== undefined ? all : def;
        options.assets = optionOrLocalFallback(options.assets, true);
        options.chunks = optionOrLocalFallback(options.chunks, !context.forToString);
        options.chunkModules = optionOrLocalFallback(options.chunkModules, !context.forToString);
        options.chunkRelations = optionOrLocalFallback(options.chunkRelations, !context.forToString);
        options.modules = optionOrLocalFallback(options.modules, true);
        options.reasons = optionOrLocalFallback(options.reasons, !context.forToString);
        options.entrypoints = optionOrLocalFallback(options.entrypoints, true);
        options.chunkGroups = optionOrLocalFallback(options.entrypoints, !context.forToString);
        options.errors = optionOrLocalFallback(options.errors, true);
        options.errorsCount = optionOrLocalFallback(options.errorsCount, true);
        options.warnings = optionOrLocalFallback(options.warnings, true);
        options.warningsCount = optionOrLocalFallback(options.warningsCount, true);
        options.hash = optionOrLocalFallback(options.hash, true);
        options.publicPath = optionOrLocalFallback(options.publicPath, true);
        options.outputPath = optionOrLocalFallback(options.outputPath, !context.forToString);
        options.timings = optionOrLocalFallback(options.timings, true);
        options.builtAt = optionOrLocalFallback(options.builtAt, !context.forToString);
        return options;
    }
    /**
     * Update an existing asset. Trying to update an asset that doesn't exist will throw an error.
     *
     * See: [Compilation.updateAsset](https://webpack.js.org/api/compilation-object/#updateasset)
     * Source: [updateAsset](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L4320)
     *
     * FIXME: *AssetInfo* may be undefined in update fn for webpack impl, but still not implemented in rspack
     *
     * @param {string} file file name
     * @param {Source | function(Source): Source} newSourceOrFunction new asset source or function converting old to new
     * @param {JsAssetInfo | function(JsAssetInfo): JsAssetInfo} assetInfoUpdateOrFunction new asset info or function converting old to new
     */
    updateAsset(filename, newSourceOrFunction, assetInfoUpdateOrFunction) {
        let compatNewSourceOrFunction;
        if (typeof newSourceOrFunction === "function") {
            compatNewSourceOrFunction = function newSourceFunction(source) {
                return (0, createSource_1.createRawFromSource)(newSourceOrFunction((0, createSource_1.createSourceFromRaw)(source)));
            };
        }
        else {
            compatNewSourceOrFunction = (0, createSource_1.createRawFromSource)(newSourceOrFunction);
        }
        __classPrivateFieldGet(this, _Compilation_inner, "f").updateAsset(filename, compatNewSourceOrFunction, assetInfoUpdateOrFunction);
    }
    /**
     *
     * @param moduleIdentifier moduleIdentifier of the module you want to modify
     * @param source
     * @returns true if the setting is success, false if failed.
     */
    setNoneAstModuleSource(moduleIdentifier, source) {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").setNoneAstModuleSource(moduleIdentifier, source);
    }
    /**
     * Emit an not existing asset. Trying to emit an asset that already exists will throw an error.
     *
     * See: [Compilation.emitAsset](https://webpack.js.org/api/compilation-object/#emitasset)
     * Source: [emitAsset](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L4239)
     *
     * @param {string} file file name
     * @param {Source} source asset source
     * @param {JsAssetInfo} assetInfo extra asset information
     * @returns {void}
     */
    emitAsset(filename, source, assetInfo) {
        const info = Object.assign({
            minimized: false,
            development: false,
            hotModuleReplacement: false,
            related: {}
        }, assetInfo);
        __classPrivateFieldGet(this, _Compilation_inner, "f").emitAsset(filename, (0, createSource_1.createRawFromSource)(source), info);
    }
    deleteAsset(filename) {
        __classPrivateFieldGet(this, _Compilation_inner, "f").deleteAsset(filename);
    }
    /**
     * Get an array of Asset
     *
     * See: [Compilation.getAssets](https://webpack.js.org/api/compilation-object/#getassets)
     * Source: [getAssets](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L4448)
     *
     * @return {Readonly<JsAsset>[]}
     */
    getAssets() {
        const assets = __classPrivateFieldGet(this, _Compilation_inner, "f").getAssets();
        return assets.map(asset => {
            // @ts-expect-error
            const source = (0, createSource_1.createSourceFromRaw)(asset.source);
            return {
                ...asset,
                source
            };
        });
    }
    getAsset(name) {
        const asset = __classPrivateFieldGet(this, _Compilation_inner, "f").getAsset(name);
        if (!asset) {
            return;
        }
        return {
            ...asset,
            // @ts-expect-error
            source: (0, createSource_1.createSourceFromRaw)(asset.source)
        };
    }
    pushDiagnostic(severity, title, message) {
        __classPrivateFieldGet(this, _Compilation_inner, "f").pushDiagnostic(severity, title, message);
    }
    get errors() {
        let inner = __classPrivateFieldGet(this, _Compilation_inner, "f");
        return {
            push: (...errs) => {
                // compatible for javascript array
                for (let i = 0; i < errs.length; i++) {
                    let error = errs[i];
                    __classPrivateFieldGet(this, _Compilation_inner, "f").pushDiagnostic("error", error.name, (0, util_1.concatErrorMsgAndStack)(error));
                }
            },
            [Symbol.iterator]() {
                // TODO: this is obviously a bad design, optimize this after finishing angular prototype
                let errors = inner.getStats().getErrors();
                let index = 0;
                return {
                    next() {
                        if (index >= errors.length) {
                            return { done: true };
                        }
                        return {
                            value: [errors[index++]],
                            done: false
                        };
                    }
                };
            }
        };
    }
    get warnings() {
        let inner = __classPrivateFieldGet(this, _Compilation_inner, "f");
        return {
            // compatible for javascript array
            push: (...warns) => {
                for (let i = 0; i < warns.length; i++) {
                    let warn = warns[i];
                    __classPrivateFieldGet(this, _Compilation_inner, "f").pushDiagnostic("warning", warn.name, (0, util_1.concatErrorMsgAndStack)(warn));
                }
            },
            [Symbol.iterator]() {
                // TODO: this is obviously a bad design, optimize this after finishing angular prototype
                let warnings = inner.getStats().getWarnings();
                let index = 0;
                return {
                    next() {
                        if (index >= warnings.length) {
                            return { done: true };
                        }
                        return {
                            value: [warnings[index++]],
                            done: false
                        };
                    }
                };
            }
        };
    }
    // TODO: full alignment
    getPath(filename, data = {}) {
        if (!data.hash) {
            data = {
                hash: this.hash,
                ...data
            };
        }
        return this.getAssetPath(filename, data);
    }
    // TODO: full alignment
    // @ts-expect-error
    getAssetPath(filename, data) {
        return filename;
    }
    // @ts-expect-error
    getLogger(name) {
        if (!name) {
            throw new TypeError("Compilation.getLogger(name) called without a name");
        }
        let logEntries;
        return new Logger_1.Logger((type, args) => {
            if (typeof name === "function") {
                name = name();
                if (!name) {
                    throw new TypeError("Compilation.getLogger(name) called with a function not returning a name");
                }
            }
            let trace;
            switch (type) {
                case Logger_1.LogType.warn:
                case Logger_1.LogType.error:
                case Logger_1.LogType.trace:
                    trace = ErrorHelpers.cutOffLoaderExecution(new Error("Trace").stack)
                        .split("\n")
                        .slice(3);
                    break;
            }
            const logEntry = {
                time: Date.now(),
                type,
                // @ts-expect-error
                args,
                // @ts-expect-error
                trace
            };
            if (this.hooks.log.call(name, logEntry) === undefined) {
                if (logEntry.type === Logger_1.LogType.profileEnd) {
                    if (typeof console.profileEnd === "function") {
                        console.profileEnd(`[${name}] ${logEntry.args[0]}`);
                    }
                }
                if (logEntries === undefined) {
                    logEntries = this.logging.get(name);
                    if (logEntries === undefined) {
                        logEntries = [];
                        this.logging.set(name, logEntries);
                    }
                }
                logEntries.push(logEntry);
                if (logEntry.type === Logger_1.LogType.profile) {
                    if (typeof console.profile === "function") {
                        console.profile(`[${name}] ${logEntry.args[0]}`);
                    }
                }
            }
        }, childName => {
            if (typeof name === "function") {
                if (typeof childName === "function") {
                    return this.getLogger(() => {
                        if (typeof name === "function") {
                            name = name();
                            if (!name) {
                                throw new TypeError("Compilation.getLogger(name) called with a function not returning a name");
                            }
                        }
                        if (typeof childName === "function") {
                            childName = childName();
                            if (!childName) {
                                throw new TypeError("Logger.getChildLogger(name) called with a function not returning a name");
                            }
                        }
                        return `${name}/${childName}`;
                    });
                }
                else {
                    return this.getLogger(() => {
                        if (typeof name === "function") {
                            name = name();
                            if (!name) {
                                throw new TypeError("Compilation.getLogger(name) called with a function not returning a name");
                            }
                        }
                        return `${name}/${childName}`;
                    });
                }
            }
            else {
                if (typeof childName === "function") {
                    return this.getLogger(() => {
                        if (typeof childName === "function") {
                            childName = childName();
                            if (!childName) {
                                throw new TypeError("Logger.getChildLogger(name) called with a function not returning a name");
                            }
                        }
                        return `${name}/${childName}`;
                    });
                }
                else {
                    return this.getLogger(`${name}/${childName}`);
                }
            }
        });
    }
    get fileDependencies() {
        return (0, fake_1.createFakeCompilationDependencies)(__classPrivateFieldGet(this, _Compilation_inner, "f").getFileDependencies(), d => __classPrivateFieldGet(this, _Compilation_inner, "f").addFileDependencies(d));
    }
    get contextDependencies() {
        return (0, fake_1.createFakeCompilationDependencies)(__classPrivateFieldGet(this, _Compilation_inner, "f").getContextDependencies(), d => __classPrivateFieldGet(this, _Compilation_inner, "f").addContextDependencies(d));
    }
    get missingDependencies() {
        return (0, fake_1.createFakeCompilationDependencies)(__classPrivateFieldGet(this, _Compilation_inner, "f").getMissingDependencies(), d => __classPrivateFieldGet(this, _Compilation_inner, "f").addMissingDependencies(d));
    }
    get buildDependencies() {
        return (0, fake_1.createFakeCompilationDependencies)(__classPrivateFieldGet(this, _Compilation_inner, "f").getBuildDependencies(), d => __classPrivateFieldGet(this, _Compilation_inner, "f").addBuildDependencies(d));
    }
    getModules() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").getModules();
    }
    getChunks() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").getChunks();
    }
    get chunks() {
        return this.getChunks();
    }
    getStats() {
        return new stats_1.Stats(this);
    }
    createChildCompiler(name, outputOptions, plugins) {
        const idx = this.childrenCounters[name] || 0;
        this.childrenCounters[name] = idx + 1;
        return this.compiler.createChildCompiler(this, name, idx, outputOptions, plugins);
    }
    /**
     * Get the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__getAssetSource(filename) {
        const rawSource = __classPrivateFieldGet(this, _Compilation_inner, "f").getAssetSource(filename);
        if (!rawSource) {
            return null;
        }
        return (0, createSource_1.createSourceFromRaw)(rawSource);
    }
    /**
     * Set the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__setAssetSource(filename, source) {
        __classPrivateFieldGet(this, _Compilation_inner, "f").setAssetSource(filename, (0, createSource_1.createRawFromSource)(source));
    }
    /**
     * Delete the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__deleteAssetSource(filename) {
        __classPrivateFieldGet(this, _Compilation_inner, "f").deleteAssetSource(filename);
    }
    /**
     * Get a list of asset filenames.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__getAssetFilenames() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").getAssetFilenames();
    }
    /**
     * Test if an asset exists.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__hasAsset(name) {
        return __classPrivateFieldGet(this, _Compilation_inner, "f").hasAsset(name);
    }
    __internal_getInner() {
        return __classPrivateFieldGet(this, _Compilation_inner, "f");
    }
    seal() { }
    unseal() { }
    __internal_getProcessAssetsHookByStage(stage) {
        switch (stage) {
            case Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL:
                return this.hooks.processAssets.stageAdditional;
            case Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS:
                return this.hooks.processAssets.stagePreProcess;
            case Compilation.PROCESS_ASSETS_STAGE_NONE:
                return this.hooks.processAssets.stageNone;
            case Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE:
                return this.hooks.processAssets.stageOptimizeInline;
            case Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE:
                return this.hooks.processAssets.stageSummarize;
            case Compilation.PROCESS_ASSETS_STAGE_REPORT:
                return this.hooks.processAssets.stageReport;
            default:
                throw new Error("processAssets hook uses custom stage number is not supported.");
        }
    }
}
exports.Compilation = Compilation;
_Compilation_inner = new WeakMap();
Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL = -2000;
Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS = -1000;
Compilation.PROCESS_ASSETS_STAGE_NONE = 0;
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE = 700;
Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE = 1000;
Compilation.PROCESS_ASSETS_STAGE_REPORT = 5000;
//# sourceMappingURL=compilation.js.map