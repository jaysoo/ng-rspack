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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Compiler_instances, _Compiler__instance, _Compiler_disabledHooks, _Compiler_instance_get, _Compiler_updateDisabledHooks, _Compiler_processAssets, _Compiler_normalModuleFactoryResolveForScheme, _Compiler_optimize_chunk_modules, _Compiler_finish_modules, _Compiler_make, _Compiler_beforeCompile, _Compiler_finishModules, _Compiler_emit, _Compiler_afterEmit, _Compiler_compilation, _Compiler_newCompilation;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = exports.NormalModule = void 0;
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3bb53f36a5b8fc6bc1bd976ed7af161bd80/lib/Compiler.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
const fs_1 = __importDefault(require("fs"));
const tapable = __importStar(require("tapable"));
const tapable_1 = require("tapable");
const watching_1 = __importDefault(require("./watching"));
const binding = __importStar(require("@rspack/binding"));
const Logger_1 = require("./logging/Logger");
const stats_1 = require("./stats");
const compilation_1 = require("./compilation");
const ResolverFactory_1 = __importDefault(require("./ResolverFactory"));
const ConcurrentCompilationError_1 = __importDefault(require("./error/ConcurrentCompilationError"));
const adapter_1 = require("./config/adapter");
const fileSystem_1 = require("./fileSystem");
const identifier_1 = require("./util/identifier");
const normalModuleFactory_1 = require("./normalModuleFactory");
class EntryPlugin {
    apply() { }
}
class HotModuleReplacementPlugin {
    apply() { }
}
class NodeTargetPlugin {
    apply() { }
}
class NodeTemplatePlugin {
    apply() { }
}
class EnableLibraryPlugin {
    apply() { }
}
const compilationHooksMap = new WeakMap();
class NormalModule {
    static getCompilationHooks(compilation) {
        if (!(compilation instanceof compilation_1.Compilation)) {
            throw new TypeError("The 'compilation' argument must be an instance of Compilation");
        }
        let hooks = compilationHooksMap.get(compilation);
        if (hooks === undefined) {
            hooks = {
                // loader: new SyncHook(["loaderContext", "module"]),
                loader: new tapable_1.SyncHook(["loaderContext"])
                // beforeLoaders: new SyncHook(["loaders", "module", "loaderContext"]),
                // beforeParse: new SyncHook(["module"]),
                // beforeSnapshot: new SyncHook(["module"]),
                // TODO webpack 6 deprecate
                // readResourceForScheme: new tapable.HookMap(scheme => {
                // 	const hook = hooks.readResource.for(scheme);
                // 	return createFakeHook(
                // 		/** @type {AsyncSeriesBailHook<[string, NormalModule], string | Buffer>} */ ({
                // 			tap: (options, fn) =>
                // 				hook.tap(options, loaderContext =>
                // 					fn(loaderContext.resource, loaderContext._module)
                // 				),
                // 			tapAsync: (options, fn) =>
                // 				hook.tapAsync(options, (loaderContext, callback) =>
                // 					fn(loaderContext.resource, loaderContext._module, callback)
                // 				),
                // 			tapPromise: (options, fn) =>
                // 				hook.tapPromise(options, loaderContext =>
                // 					fn(loaderContext.resource, loaderContext._module)
                // 				)
                // 		})
                // 	);
                // }),
                // readResource: new tapable.HookMap(
                // 	() => new tapable.AsyncSeriesBailHook(["loaderContext"])
                // )
                // needBuild: new tapable.AsyncSeriesBailHook(["module", "context"])
            };
            compilationHooksMap.set(compilation, hooks);
        }
        return hooks;
    }
    apply() { }
}
exports.NormalModule = NormalModule;
class Compiler {
    constructor(context, options) {
        _Compiler_instances.add(this);
        _Compiler__instance.set(this, void 0);
        _Compiler_disabledHooks.set(this, void 0);
        this.outputFileSystem = fs_1.default;
        this.options = options;
        // to workaround some plugin access webpack, we may change dev-server to avoid this hack in the future
        this.webpack = {
            EntryPlugin,
            HotModuleReplacementPlugin,
            NormalModule,
            get sources() {
                return require("webpack-sources");
            },
            Compilation: compilation_1.Compilation,
            get version() {
                return "5.75.0"; // this is a hack to be compatible with plugin which detect webpack's version
            },
            get rspackVersion() {
                return require("../package.json").version;
            },
            util: {
                get createHash() {
                    return require("./util/createHash").createHash;
                },
                get cleverMerge() {
                    return require("./util/cleverMerge").cachedCleverMerge;
                }
                // get comparators() {
                // 	return require("./util/comparators");
                // },
                // get runtime() {
                // 	return require("./util/runtime");
                // },
                // get serialization() {
                // 	return require("./util/serialization");
                // },
                // get LazySet() {
                // 	return require("./util/LazySet");
                // }
            },
            WebpackError: Error,
            node: {
                NodeTargetPlugin,
                NodeTemplatePlugin
            },
            library: {
                EnableLibraryPlugin
            }
        };
        this.root = this;
        this.running = false;
        this.context = context;
        this.resolverFactory = new ResolverFactory_1.default();
        this.modifiedFiles = undefined;
        this.removedFiles = undefined;
        this.hooks = {
            initialize: new tapable_1.SyncHook([]),
            done: new tapable.AsyncSeriesHook(["stats"]),
            afterDone: new tapable.SyncHook(["stats"]),
            beforeRun: new tapable.AsyncSeriesHook(["compiler"]),
            run: new tapable.AsyncSeriesHook(["compiler"]),
            emit: new tapable.AsyncSeriesHook(["compilation"]),
            afterEmit: new tapable.AsyncSeriesHook(["compilation"]),
            thisCompilation: new tapable.SyncHook([
                "compilation",
                "params"
            ]),
            compilation: new tapable.SyncHook(["compilation"]),
            invalid: new tapable_1.SyncHook(["filename", "changeTime"]),
            compile: new tapable_1.SyncHook(["params"]),
            infrastructureLog: new tapable_1.SyncBailHook(["origin", "type", "args"]),
            failed: new tapable_1.SyncHook(["error"]),
            watchRun: new tapable.AsyncSeriesHook(["compiler"]),
            watchClose: new tapable.SyncHook([]),
            environment: new tapable.SyncHook([]),
            afterEnvironment: new tapable.SyncHook([]),
            afterPlugins: new tapable.SyncHook(["compiler"]),
            afterResolvers: new tapable.SyncHook(["compiler"]),
            make: new tapable.AsyncParallelHook(["compilation"]),
            beforeCompile: new tapable.AsyncSeriesHook(["params"]),
            finishModules: new tapable.AsyncSeriesHook(["modules"])
        };
        this.modifiedFiles = undefined;
        this.removedFiles = undefined;
        __classPrivateFieldSet(this, _Compiler_disabledHooks, [], "f");
    }
    createChildCompiler(compilation, compilerName, compilerIndex, outputOptions, plugins) {
        const childCompiler = new Compiler(this.context, {
            ...this.options,
            output: {
                ...this.options.output,
                ...outputOptions
            }
        });
        childCompiler.name = compilerName;
        childCompiler.outputPath = this.outputPath;
        childCompiler.inputFileSystem = this.inputFileSystem;
        // childCompiler.outputFileSystem = null;
        childCompiler.resolverFactory = this.resolverFactory;
        childCompiler.modifiedFiles = this.modifiedFiles;
        childCompiler.removedFiles = this.removedFiles;
        // childCompiler.fileTimestamps = this.fileTimestamps;
        // childCompiler.contextTimestamps = this.contextTimestamps;
        // childCompiler.fsStartTime = this.fsStartTime;
        // childCompiler.cache = this.cache;
        // childCompiler.compilerPath = `${this.compilerPath}${compilerName}|${compilerIndex}|`;
        // childCompiler._backCompat = this._backCompat;
        const relativeCompilerName = (0, identifier_1.makePathsRelative)(this.context, compilerName, this.root);
        // if (!this.records[relativeCompilerName]) {
        // 	this.records[relativeCompilerName] = [];
        // }
        // if (this.records[relativeCompilerName][compilerIndex]) {
        // 	childCompiler.records = this.records[relativeCompilerName][compilerIndex];
        // } else {
        // 	this.records[relativeCompilerName].push((childCompiler.records = {}));
        // }
        childCompiler.parentCompilation = compilation;
        childCompiler.root = this.root;
        if (Array.isArray(plugins)) {
            for (const plugin of plugins) {
                plugin.apply(childCompiler);
            }
        }
        for (const name in this.hooks) {
            if (![
                "make",
                "compile",
                "emit",
                "afterEmit",
                "invalid",
                "done",
                "thisCompilation"
            ].includes(name)) {
                //@ts-ignore
                if (childCompiler.hooks[name]) {
                    //@ts-ignore
                    childCompiler.hooks[name].taps = this.hooks[name].taps.slice();
                }
            }
        }
        // compilation.hooks.childCompiler.call(
        // 	childCompiler,
        // 	compilerName,
        // 	compilerIndex
        // );
        return childCompiler;
    }
    runAsChild(callback) {
        const startTime = Date.now();
        const finalCallback = (err, entries, compilation) => {
            try {
                callback(err, entries, compilation);
            }
            catch (e) {
                const err = new Error(`compiler.runAsChild callback error: ${e}`);
                // err.details = e.stack;
                this.parentCompilation.errors.push(err);
                // TODO: remove once this works
                console.log(e);
            }
        };
        this.run((err, stats) => {
            if (err)
                return finalCallback(err);
            const compilation = stats.compilation;
            this.parentCompilation.children.push(compilation);
            for (const { name, source, info } of compilation.getAssets()) {
                this.parentCompilation.emitAsset(name, source, info);
            }
            const entries = [];
            for (const ep of compilation.entrypoints.values()) {
                entries.push(...ep.getFiles());
            }
            // compilation.startTime = startTime;
            // compilation.endTime = Date.now();
            return finalCallback(null, entries, compilation);
        });
    }
    getInfrastructureLogger(name) {
        if (!name) {
            throw new TypeError("Compiler.getInfrastructureLogger(name) called without a name");
        }
        return new Logger_1.Logger((type, args) => {
            if (typeof name === "function") {
                name = name();
                if (!name) {
                    throw new TypeError("Compiler.getInfrastructureLogger(name) called with a function not returning a name");
                }
            }
            else {
                if (
                // @ts-expect-error
                this.hooks.infrastructureLog.call(name, type, args) === undefined) {
                    if (this.infrastructureLogger !== undefined) {
                        this.infrastructureLogger(name, type, args);
                    }
                }
            }
        }, (childName) => {
            if (typeof name === "function") {
                if (typeof childName === "function") {
                    // @ts-expect-error
                    return this.getInfrastructureLogger(_ => {
                        if (typeof name === "function") {
                            name = name();
                            if (!name) {
                                throw new TypeError("Compiler.getInfrastructureLogger(name) called with a function not returning a name");
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
                    return this.getInfrastructureLogger(() => {
                        if (typeof name === "function") {
                            name = name();
                            if (!name) {
                                throw new TypeError("Compiler.getInfrastructureLogger(name) called with a function not returning a name");
                            }
                        }
                        return `${name}/${childName}`;
                    });
                }
            }
            else {
                if (typeof childName === "function") {
                    return this.getInfrastructureLogger(() => {
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
                    return this.getInfrastructureLogger(`${name}/${childName}`);
                }
            }
        });
    }
    run(callback) {
        if (this.running) {
            return callback(new ConcurrentCompilationError_1.default());
        }
        const startTime = Date.now();
        this.running = true;
        const doRun = () => {
            // @ts-expect-error
            const finalCallback = (err, stats) => {
                this.running = false;
                if (err) {
                    this.hooks.failed.call(err);
                }
                if (callback) {
                    callback(err, stats);
                }
                this.hooks.afterDone.call(stats);
            };
            this.hooks.beforeRun.callAsync(this, err => {
                if (err) {
                    return finalCallback(err);
                }
                this.hooks.run.callAsync(this, err => {
                    if (err) {
                        return finalCallback(err);
                    }
                    this.build(err => {
                        if (err) {
                            return finalCallback(err);
                        }
                        this.compilation.startTime = startTime;
                        this.compilation.endTime = Date.now();
                        const stats = new stats_1.Stats(this.compilation);
                        this.hooks.done.callAsync(stats, err => {
                            if (err) {
                                return finalCallback(err);
                            }
                            else {
                                return finalCallback(null, stats);
                            }
                        });
                    });
                });
            });
        };
        doRun();
    }
    // Safety: This method is only valid to call if the previous build task is finished, or there will be data races.
    build(cb) {
        const unsafe_build = __classPrivateFieldGet(this, _Compiler_instances, "a", _Compiler_instance_get).unsafe_build;
        const build_cb = unsafe_build.bind(__classPrivateFieldGet(this, _Compiler_instances, "a", _Compiler_instance_get));
        build_cb(err => {
            if (err) {
                cb(err);
            }
            else {
                cb(undefined);
            }
        });
    }
    // Safety: This method is only valid to call if the previous rebuild task is finished, or there will be data races.
    rebuild(modifiedFiles, removedFiles, cb) {
        const unsafe_rebuild = __classPrivateFieldGet(this, _Compiler_instances, "a", _Compiler_instance_get).unsafe_rebuild;
        const rebuild_cb = unsafe_rebuild.bind(__classPrivateFieldGet(this, _Compiler_instances, "a", _Compiler_instance_get));
        rebuild_cb([...(modifiedFiles !== null && modifiedFiles !== void 0 ? modifiedFiles : [])], [...(removedFiles !== null && removedFiles !== void 0 ? removedFiles : [])], err => {
            if (err) {
                cb && cb(err);
            }
            else {
                cb && cb(undefined);
            }
        });
    }
    watch(watchOptions, handler) {
        if (this.running) {
            // @ts-expect-error
            return handler(new ConcurrentCompilationError_1.default());
        }
        this.running = true;
        this.watchMode = true;
        // @ts-expect-error
        this.watching = new watching_1.default(this, watchOptions, handler);
        return this.watching;
    }
    purgeInputFileSystem() {
        if (this.inputFileSystem && this.inputFileSystem.purge) {
            this.inputFileSystem.purge();
        }
    }
    close(callback) {
        // WARNING: Arbitrarily dropping the instance is not safe, as it may still be in use by the background thread.
        // A hint is necessary for the compiler to know when it is safe to drop the instance.
        // For example: register a callback to the background thread, and drop the instance when the callback is called (calling the `close` method queues the signal)
        // See: https://github.com/webpack/webpack/blob/4ba225225b1348c8776ca5b5fe53468519413bc0/lib/Compiler.js#L1218
        if (!this.running) {
            // Manually drop the instance.
            // this.#_instance = undefined;
        }
        if (this.watching) {
            // When there is still an active watching, close this first
            this.watching.close(() => {
                this.close(callback);
            });
            return;
        }
        callback();
    }
    getAsset(name) {
        let source = this.compilation.__internal__getAssetSource(name);
        if (!source) {
            return null;
        }
        return source.buffer();
    }
}
exports.Compiler = Compiler;
_Compiler__instance = new WeakMap(), _Compiler_disabledHooks = new WeakMap(), _Compiler_instances = new WeakSet(), _Compiler_instance_get = function _Compiler_instance_get() {
    var _a;
    __classPrivateFieldSet(this, _Compiler__instance, (_a = __classPrivateFieldGet(this, _Compiler__instance, "f")) !== null && _a !== void 0 ? _a : new binding.Rspack((0, adapter_1.getRawOptions)(this.options, this), {
        beforeCompile: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_beforeCompile).bind(this),
        make: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_make).bind(this),
        emit: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_emit).bind(this),
        afterEmit: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_afterEmit).bind(this),
        processAssetsStageAdditional: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL),
        processAssetsStagePreProcess: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS),
        processAssetsStageNone: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_NONE),
        processAssetsStageOptimizeInline: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE),
        processAssetsStageSummarize: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE),
        processAssetsStageReport: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_processAssets).bind(this, compilation_1.Compilation.PROCESS_ASSETS_STAGE_REPORT),
        // `Compilation` should be created with hook `thisCompilation`, and here is the reason:
        // We know that the hook `thisCompilation` will not be called from a child compiler(it doesn't matter whether the child compiler is created on the Rust or the Node side).
        // See webpack's API: https://webpack.js.org/api/compiler-hooks/#thiscompilation
        // So it is safe to create a new compilation here.
        thisCompilation: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_newCompilation).bind(this),
        // The hook `Compilation` should be called whenever it's a call from the child compiler or normal compiler and
        // still it does not matter where the child compiler is created(Rust or Node) as calling the hook `compilation` is a required task.
        // No matter how it will be implemented, it will be copied to the child compiler.
        compilation: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_compilation).bind(this),
        optimizeChunkModule: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_optimize_chunk_modules).bind(this),
        finishModules: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_finish_modules).bind(this),
        normalModuleFactoryResolveForScheme: __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_normalModuleFactoryResolveForScheme).bind(this)
    }, (0, fileSystem_1.createThreadsafeNodeFSFromRaw)(this.outputFileSystem)), "f");
    return __classPrivateFieldGet(this, _Compiler__instance, "f");
}, _Compiler_updateDisabledHooks = function _Compiler_updateDisabledHooks() {
    const disabledHooks = [];
    const hookMap = {
        make: this.hooks.make,
        beforeCompile: this.hooks.beforeCompile,
        emit: this.hooks.emit,
        afterEmit: this.hooks.afterEmit,
        processAssetsStageAdditional: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL),
        processAssetsStagePreProcess: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS),
        processAssetsStageNone: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_NONE),
        processAssetsStageOptimizeInline: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE),
        processAssetsStageSummarize: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE),
        processAssetsStageReport: this.compilation.__internal_getProcessAssetsHookByStage(compilation_1.Compilation.PROCESS_ASSETS_STAGE_REPORT),
        compilation: this.hooks.compilation,
        optimizeChunkModules: this.compilation.hooks.optimizeChunkModules,
        finishModules: this.compilation.hooks.finishModules
        // normalModuleFactoryResolveForScheme: this.#
    };
    for (const [name, hook] of Object.entries(hookMap)) {
        if (hook.taps.length === 0) {
            disabledHooks.push(name);
        }
    }
    // disabledHooks is in order
    if (__classPrivateFieldGet(this, _Compiler_disabledHooks, "f").join() !== disabledHooks.join()) {
        __classPrivateFieldGet(this, _Compiler_instances, "a", _Compiler_instance_get).unsafe_set_disabled_hooks(disabledHooks);
        __classPrivateFieldSet(this, _Compiler_disabledHooks, disabledHooks, "f");
    }
}, _Compiler_processAssets = async function _Compiler_processAssets(stage) {
    await this.compilation
        .__internal_getProcessAssetsHookByStage(stage)
        .promise(this.compilation.assets);
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_normalModuleFactoryResolveForScheme = async function _Compiler_normalModuleFactoryResolveForScheme(resourceData) {
    var _a;
    await ((_a = this.compilation.normalModuleFactory) === null || _a === void 0 ? void 0 : _a.hooks.resolveForScheme.for(resourceData.scheme).promise(resourceData.resourceData));
    return resourceData.resourceData;
}, _Compiler_optimize_chunk_modules = async function _Compiler_optimize_chunk_modules() {
    await this.compilation.hooks.optimizeChunkModules.promise(this.compilation.getChunks(), this.compilation.getModules());
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_finish_modules = async function _Compiler_finish_modules() {
    await this.compilation.hooks.finishModules.promise(this.compilation.getModules());
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_make = async function _Compiler_make() {
    await this.hooks.make.promise(this.compilation);
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_beforeCompile = async function _Compiler_beforeCompile() {
    await this.hooks.beforeCompile.promise();
    // compilation is not created yet, so this will fail
    // this.#updateDisabledHooks();
}, _Compiler_finishModules = async function _Compiler_finishModules() {
    await this.compilation.hooks.finishModules.promise(this.compilation.getModules());
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_emit = async function _Compiler_emit() {
    await this.hooks.emit.promise(this.compilation);
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_afterEmit = async function _Compiler_afterEmit() {
    await this.hooks.afterEmit.promise(this.compilation);
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_compilation = function _Compiler_compilation(native) {
    // TODO: implement this based on the child compiler impl.
    this.hooks.compilation.call(this.compilation);
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
}, _Compiler_newCompilation = function _Compiler_newCompilation(native) {
    const compilation = new compilation_1.Compilation(this, native);
    compilation.name = this.name;
    this.compilation = compilation;
    // reset normalModuleFactory when create new compilation
    let normalModuleFactory = new normalModuleFactory_1.NormalModuleFactory();
    this.compilation.normalModuleFactory = normalModuleFactory;
    this.hooks.thisCompilation.call(this.compilation, {
        normalModuleFactory: normalModuleFactory
    });
    __classPrivateFieldGet(this, _Compiler_instances, "m", _Compiler_updateDisabledHooks).call(this);
};
//# sourceMappingURL=compiler.js.map