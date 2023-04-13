"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUseSimpleSourceMap = exports.isUseSourceMap = exports.createRawModuleRuleUses = void 0;
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const webpack_sources_1 = require("webpack-sources");
const compiler_1 = require("../compiler");
const util_1 = require("../util");
const createHash_1 = require("../util/createHash");
const identifier_1 = require("../util/identifier");
const memoize_1 = require("../util/memoize");
const BUILTIN_LOADER_PREFIX = "builtin:";
function createRawModuleRuleUses(uses, options) {
    const normalizeRuleSetUseItem = (item) => typeof item === "string" ? { loader: item } : item;
    const allUses = Array.isArray(uses)
        ? [...uses].reverse().map(normalizeRuleSetUseItem)
        : [normalizeRuleSetUseItem(uses)];
    return createRawModuleRuleUsesImpl(allUses, options, allUses);
}
exports.createRawModuleRuleUses = createRawModuleRuleUses;
function createRawModuleRuleUsesImpl(uses, options, allUses) {
    if (!uses.length) {
        return [];
    }
    const index = uses.findIndex(use => typeof use.loader === "string" &&
        use.loader.startsWith(BUILTIN_LOADER_PREFIX));
    if (index < 0) {
        // cast to non-null since we know `uses` is not empty
        return [composeJsUse(uses, options, allUses)];
    }
    const before = uses.slice(0, index);
    const after = uses.slice(index + 1);
    return [
        composeJsUse(before, options, allUses),
        createBuiltinUse(uses[index]),
        ...createRawModuleRuleUsesImpl(after, options, allUses)
    ].filter((item) => Boolean(item));
}
function composeJsUse(uses, options, allUses) {
    if (!uses.length) {
        return null;
    }
    async function loader(data) {
        var _a, _b, _c, _d, _e;
        const compiler = options.compiler;
        const resolver = compiler.resolverFactory.get("normal");
        const moduleContext = path_1.default.dirname(data.resourcePath);
        let cacheable = data.cacheable;
        let content = data.content;
        let sourceMap = (_a = data.sourceMap) === null || _a === void 0 ? void 0 : _a.toString("utf-8");
        let additionalData = data.additionalData
            ? JSON.parse(data.additionalData.toString("utf-8"))
            : undefined;
        // Loader is executed from right to left
        for (const use of uses) {
            const loaderIndex = allUses.indexOf(use);
            let loaderResult;
            const p = new Promise((resolve, reject) => {
                var _a;
                let isDone = false;
                // Whether a `callback` or `async` is called
                let isSync = true;
                let isError = false; // internal error
                let reportedError = false;
                const fileDependencies = [];
                const contextDependencies = [];
                const missingDependencies = [];
                const buildDependencies = [];
                function callback(err, content, sourceMap, additionalData) {
                    if (isDone) {
                        if (reportedError)
                            return; // ignore
                        err = new Error("callback(): The callback was already called.");
                    }
                    isSync = false;
                    isDone = true;
                    if (err) {
                        isError = true;
                        reject(err);
                        return;
                    }
                    resolve({
                        cacheable,
                        content,
                        sourceMap,
                        additionalData,
                        fileDependencies,
                        contextDependencies,
                        missingDependencies,
                        buildDependencies
                    });
                }
                const getResolveContext = () => {
                    // FIXME: resolve's fileDependencies will includes lots of dir, '/', etc.
                    return {
                        fileDependencies: {
                            // @ts-expect-error
                            add: d => {
                                // loaderContext.addDependency(d)
                            }
                        },
                        contextDependencies: {
                            // @ts-expect-error
                            add: d => {
                                // loaderContext.addContextDependency(d)
                            }
                        },
                        missingDependencies: {
                            // @ts-expect-error
                            add: d => {
                                // loaderContext.addMissingDependency(d)
                            }
                        }
                    };
                };
                const getAbsolutify = (0, memoize_1.memoize)(() => identifier_1.absolutify.bindCache(compiler.root));
                const getAbsolutifyInContext = (0, memoize_1.memoize)(() => identifier_1.absolutify.bindContextCache(moduleContext, compiler.root));
                const getContextify = (0, memoize_1.memoize)(() => identifier_1.contextify.bindCache(compiler.root));
                const getContextifyInContext = (0, memoize_1.memoize)(() => identifier_1.contextify.bindContextCache(moduleContext, compiler.root));
                const utils = {
                    // @ts-expect-error
                    absolutify: (context, request) => {
                        return context === moduleContext
                            ? getAbsolutifyInContext()(request)
                            : getAbsolutify()(context, request);
                    },
                    // @ts-expect-error
                    contextify: (context, request) => {
                        return context === moduleContext
                            ? getContextifyInContext()(request)
                            : getContextify()(context, request);
                    },
                    // @ts-expect-error
                    createHash: type => {
                        return (0, createHash_1.createHash)(
                        // @ts-expect-error hashFunction should also available in rust side, then we can make the type right
                        type || compiler.compilation.outputOptions.hashFunction);
                    }
                };
                const loaderContext = {
                    version: 2,
                    sourceMap: isUseSourceMap(options.devtool),
                    resourcePath: data.resourcePath,
                    resource: data.resource,
                    // Return an empty string if there is no query or fragment
                    resourceQuery: data.resourceQuery || "",
                    resourceFragment: data.resourceFragment || "",
                    loaderIndex,
                    mode: compiler.options.mode,
                    hot: (_a = compiler.options.devServer) === null || _a === void 0 ? void 0 : _a.hot,
                    getOptions(schema) {
                        let { options } = use;
                        if (options === null || options === undefined) {
                            options = {};
                        }
                        if (schema) {
                            let name = "Loader";
                            let baseDataPath = "options";
                            let match;
                            if (schema.title && (match = /^(.+) (.+)$/.exec(schema.title))) {
                                [, name, baseDataPath] = match;
                            }
                            const { validate } = require("schema-utils");
                            validate(schema, options, {
                                name,
                                baseDataPath
                            });
                        }
                        return options;
                    },
                    get query() {
                        return use.options && typeof use.options === "object"
                            ? use.options
                            : // deprecated usage so ignore the type
                                use.query;
                    },
                    resolve(context, request, callback) {
                        resolver.resolve({}, context, request, getResolveContext(), callback);
                    },
                    // @ts-expect-error
                    getResolve(options) {
                        const child = options ? resolver.withOptions(options) : resolver;
                        return (context, request, callback) => {
                            if (callback) {
                                child.resolve({}, context, request, getResolveContext(), callback);
                            }
                            else {
                                return new Promise((resolve, reject) => {
                                    child.resolve({}, context, request, getResolveContext(), (err, result) => {
                                        if (err)
                                            reject(err);
                                        else
                                            resolve(result);
                                    });
                                });
                            }
                        };
                    },
                    getLogger(name) {
                        return compiler.getInfrastructureLogger(() => [name, data.resource].filter(Boolean).join("|"));
                    },
                    cacheable(value = true) {
                        cacheable = value;
                    },
                    // @ts-expect-error
                    async() {
                        if (isDone) {
                            if (reportedError)
                                return; // ignore
                            reject(new Error("async(): The callback was already called."));
                        }
                        isSync = false;
                        return callback;
                    },
                    callback,
                    rootContext: options.context,
                    context: moduleContext,
                    emitError(error) {
                        const title = "Module Error";
                        const message = error instanceof Error ? (0, util_1.concatErrorMsgAndStack)(error) : error;
                        compiler.compilation.pushDiagnostic("error", title, `${message}\n(from: ${use.loader})`);
                    },
                    emitWarning(warning) {
                        const title = "Module Warning";
                        const message = warning instanceof Error
                            ? (0, util_1.concatErrorMsgAndStack)(warning)
                            : warning;
                        compiler.compilation.pushDiagnostic("warning", title, `${message}\n(from: ${use.loader})`);
                    },
                    emitFile(name, content, sourceMap, assetInfo) {
                        let source;
                        if (sourceMap) {
                            if (typeof sourceMap === "string" &&
                                (loaderContext.sourceMap ||
                                    isUseSimpleSourceMap(options.devtool))) {
                                source = new webpack_sources_1.OriginalSource(content, (0, identifier_1.makePathsRelative)(moduleContext, sourceMap, compiler));
                            }
                            if (this.sourceMap) {
                                source = new webpack_sources_1.SourceMapSource(content, // webpack-sources type declaration is wrong
                                name, (0, identifier_1.makePathsRelative)(moduleContext, sourceMap, compiler) // webpack-sources type declaration is wrong
                                );
                            }
                        }
                        else {
                            source = new webpack_sources_1.RawSource(content); // webpack-sources type declaration is wrong
                        }
                        // @ts-expect-error
                        compiler.compilation.emitAsset(name, source, assetInfo);
                    },
                    fs: compiler.inputFileSystem,
                    utils,
                    addBuildDependency(file) {
                        buildDependencies.push(file);
                    },
                    addDependency(file) {
                        fileDependencies.push(file);
                    },
                    dependency(file) {
                        fileDependencies.push(file);
                    },
                    addContextDependency(context) {
                        contextDependencies.push(context);
                    },
                    addMissingDependency(missing) {
                        missingDependencies.push(missing);
                    },
                    clearDependencies() {
                        fileDependencies.length = 0;
                        contextDependencies.length = 0;
                        missingDependencies.length = 0;
                    },
                    getDependencies() {
                        return fileDependencies.slice();
                    },
                    getContextDependencies() {
                        return contextDependencies.slice();
                    },
                    getMissingDependencies() {
                        return missingDependencies.slice();
                    },
                    _compiler: compiler,
                    _compilation: compiler.compilation
                };
                let compilation = compiler.compilation;
                while (compilation) {
                    compiler_1.NormalModule.getCompilationHooks(compilation).loader.call(loaderContext);
                    compilation = compilation.compiler.parentCompilation;
                }
                let loader;
                try {
                    const loaderPath = require.resolve(use.loader, {
                        paths: [options.context]
                    });
                    const loaderModule = require(loaderPath);
                    loader =
                        typeof loaderModule === "function"
                            ? loaderModule
                            : loaderModule.default;
                }
                catch (err) {
                    reject(err);
                    return;
                }
                let result = undefined;
                try {
                    result = loader.apply(loaderContext, [
                        loader.raw ? Buffer.from(content) : content.toString("utf-8"),
                        sourceMap,
                        additionalData
                    ]);
                    if (isSync) {
                        isDone = true;
                        if (result === undefined) {
                            resolve({
                                content,
                                buildDependencies,
                                sourceMap,
                                additionalData,
                                cacheable,
                                fileDependencies,
                                contextDependencies,
                                missingDependencies
                            });
                            return result;
                        }
                    }
                    if ((0, util_1.isPromiseLike)(result)) {
                        return result.then(function (result) {
                            resolve({
                                content: result,
                                buildDependencies,
                                sourceMap,
                                additionalData,
                                cacheable,
                                fileDependencies,
                                contextDependencies,
                                missingDependencies
                            });
                        }, reject);
                    }
                    // fixme: typings
                    return resolve({
                        content: result,
                        buildDependencies,
                        sourceMap,
                        additionalData,
                        cacheable,
                        fileDependencies,
                        contextDependencies,
                        missingDependencies
                    });
                }
                catch (err) {
                    if (isError) {
                        reject(err);
                        return;
                    }
                    if (isDone) {
                        // loader is already "done", so we cannot use the callback function
                        // for better debugging we print the error on the console
                        // @ts-expect-error
                        if (typeof err === "object" && err.stack)
                            console.error(err.stack);
                        else
                            console.error(err);
                        reject(err);
                        return;
                    }
                    isDone = true;
                    reportedError = true;
                    reject(err);
                }
            });
            if ((loaderResult = await p)) {
                additionalData =
                    (_b = (typeof loaderResult.additionalData === "string"
                        ? JSON.parse(loaderResult.additionalData)
                        : loaderResult.additionalData)) !== null && _b !== void 0 ? _b : additionalData;
                content = (_c = loaderResult.content) !== null && _c !== void 0 ? _c : content;
                sourceMap = (_d = loaderResult.sourceMap) !== null && _d !== void 0 ? _d : sourceMap;
                cacheable = (_e = loaderResult.cacheable) !== null && _e !== void 0 ? _e : cacheable;
                data.fileDependencies.push(...loaderResult.fileDependencies);
                data.contextDependencies.push(...loaderResult.contextDependencies);
                data.missingDependencies.push(...loaderResult.missingDependencies);
                data.buildDependencies.push(...loaderResult.buildDependencies);
            }
        }
        return {
            cacheable: cacheable,
            fileDependencies: data.fileDependencies,
            contextDependencies: data.contextDependencies,
            missingDependencies: data.missingDependencies,
            buildDependencies: data.buildDependencies,
            content: toBuffer(content),
            sourceMap: sourceMap
                ? toBuffer(typeof sourceMap === "string"
                    ? sourceMap
                    : JSON.stringify(sourceMap))
                : undefined,
            additionalData: additionalData
                ? toBuffer(JSON.stringify(additionalData))
                : undefined
        };
    }
    return {
        jsLoader: {
            func: loader,
            name: uses.map(use => use.loader).join("!")
        }
    };
}
function createBuiltinUse(use) {
    var _a;
    (0, assert_1.default)(typeof use.loader === "string" &&
        use.loader.startsWith(BUILTIN_LOADER_PREFIX));
    if (use.loader === `${BUILTIN_LOADER_PREFIX}sass-loader`) {
        ((_a = use.options) !== null && _a !== void 0 ? _a : (use.options = {})).__exePath = require.resolve(`sass-embedded-${process.platform}-${process.arch}/dart-sass-embedded/dart-sass-embedded${process.platform === "win32" ? ".bat" : ""}`);
    }
    return {
        builtinLoader: use.loader,
        options: JSON.stringify(use.options)
    };
}
const toBuffer = (bufLike) => {
    if (Buffer.isBuffer(bufLike)) {
        return bufLike;
    }
    else if (typeof bufLike === "string") {
        return Buffer.from(bufLike);
    }
    throw new Error("Buffer or string expected");
};
function isUseSourceMap(devtool) {
    return (devtool.includes("source-map") &&
        (devtool.includes("module") || !devtool.includes("cheap")));
}
exports.isUseSourceMap = isUseSourceMap;
function isUseSimpleSourceMap(devtool) {
    return devtool.includes("source-map") && !isUseSourceMap(devtool);
}
exports.isUseSimpleSourceMap = isUseSimpleSourceMap;
//# sourceMappingURL=adapter-rule-use.js.map