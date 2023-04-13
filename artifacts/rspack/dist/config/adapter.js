"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRawOptions = void 0;
const assert_1 = __importDefault(require("assert"));
const stats_1 = require("../stats");
const util_1 = require("../util");
const adapter_rule_use_1 = require("./adapter-rule-use");
const getRawOptions = (options, compiler) => {
    var _a, _b;
    (0, assert_1.default)(!(0, util_1.isNil)(options.context) && !(0, util_1.isNil)(options.devtool) && !(0, util_1.isNil)(options.cache), "context, devtool, cache should not be nil after defaults");
    const devtool = options.devtool === false ? "" : options.devtool;
    return {
        entry: getRawEntry(options.entry),
        mode: options.mode,
        target: getRawTarget(options.target),
        context: options.context,
        output: getRawOutput(options.output),
        resolve: getRawResolve(options.resolve),
        module: getRawModule(options.module, {
            compiler,
            devtool,
            context: options.context
        }),
        externals: options.externals
            ? getRawExternals(options.externals)
            : undefined,
        externalsType: options.externalsType === undefined ? "" : options.externalsType,
        externalsPresets: getRawExternalsPresets(options.externalsPresets),
        devtool,
        optimization: getRawOptimization(options.optimization),
        stats: getRawStats(options.stats),
        devServer: {
            hot: (_b = (_a = options.devServer) === null || _a === void 0 ? void 0 : _a.hot) !== null && _b !== void 0 ? _b : false
        },
        snapshot: getRawSnapshotOptions(options.snapshot),
        cache: {
            type: options.cache ? "memory" : "disable",
            // TODO: implement below cache options
            maxGenerations: 0,
            maxAge: 0,
            profile: false,
            buildDependencies: [],
            cacheDirectory: "",
            cacheLocation: "",
            name: "",
            version: ""
        },
        experiments: getRawExperiments(options.experiments),
        node: getRawNode(options.node),
        // TODO: refactor builtins
        builtins: options.builtins
    };
};
exports.getRawOptions = getRawOptions;
function getRawEntry(entry) {
    const raw = {};
    for (const key of Object.keys(entry)) {
        const runtime = entry[key].runtime;
        raw[key] = {
            import: entry[key].import,
            runtime: runtime === false ? undefined : runtime
        };
    }
    return raw;
}
function getRawTarget(target) {
    if (!target) {
        return [];
    }
    if (typeof target === "string") {
        return [target];
    }
    return target;
}
function getRawAlias(alias = {}) {
    const entires = Object.entries(alias).map(([key, value]) => {
        if (Array.isArray(value)) {
            return [key, value];
        }
        else {
            return [key, [value]];
        }
    });
    return Object.fromEntries(entires);
}
function getRawResolveByDependency(byDependency) {
    if (byDependency === undefined)
        return byDependency;
    return Object.fromEntries(Object.entries(byDependency).map(([k, v]) => [k, getRawResolve(v)]));
}
function getRawResolve(resolve) {
    return {
        ...resolve,
        alias: getRawAlias(resolve.alias),
        fallback: getRawAlias(resolve.fallback),
        byDependency: getRawResolveByDependency(resolve.byDependency)
    };
}
function getRawOutput(output) {
    (0, assert_1.default)(!(0, util_1.isNil)(output.path) &&
        !(0, util_1.isNil)(output.publicPath) &&
        !(0, util_1.isNil)(output.assetModuleFilename) &&
        !(0, util_1.isNil)(output.filename) &&
        !(0, util_1.isNil)(output.chunkFilename) &&
        !(0, util_1.isNil)(output.cssFilename) &&
        !(0, util_1.isNil)(output.cssChunkFilename) &&
        !(0, util_1.isNil)(output.uniqueName) &&
        !(0, util_1.isNil)(output.enabledLibraryTypes) &&
        !(0, util_1.isNil)(output.strictModuleErrorHandling) &&
        !(0, util_1.isNil)(output.globalObject) &&
        !(0, util_1.isNil)(output.importFunctionName) &&
        !(0, util_1.isNil)(output.module) &&
        !(0, util_1.isNil)(output.iife) &&
        !(0, util_1.isNil)(output.importFunctionName) &&
        !(0, util_1.isNil)(output.webassemblyModuleFilename), "fields should not be nil after defaults");
    return {
        path: output.path,
        publicPath: output.publicPath,
        assetModuleFilename: output.assetModuleFilename,
        filename: output.filename,
        chunkFilename: output.chunkFilename,
        cssFilename: output.cssFilename,
        cssChunkFilename: output.cssChunkFilename,
        uniqueName: output.uniqueName,
        enabledLibraryTypes: output.enabledLibraryTypes,
        library: output.library && getRawLibrary(output.library),
        strictModuleErrorHandling: output.strictModuleErrorHandling,
        globalObject: output.globalObject,
        importFunctionName: output.importFunctionName,
        iife: output.iife,
        module: output.module,
        webassemblyModuleFilename: output.webassemblyModuleFilename
    };
}
function getRawExternalsPresets(presets) {
    var _a;
    return {
        node: (_a = presets.node) !== null && _a !== void 0 ? _a : false
    };
}
function getRawLibrary(library) {
    const { type, name, export: libraryExport, umdNamedDefine, auxiliaryComment } = library;
    return {
        auxiliaryComment: typeof auxiliaryComment === "string"
            ? {
                commonjs: auxiliaryComment,
                commonjs2: auxiliaryComment,
                amd: auxiliaryComment,
                root: auxiliaryComment
            }
            : auxiliaryComment,
        libraryType: type,
        name: name == null
            ? name
            : typeof name === "object" && !Array.isArray(name)
                ? {
                    amd: name.amd,
                    commonjs: name.commonjs,
                    root: Array.isArray(name.root) || name.root == null
                        ? name.root
                        : [name.root]
                }
                : {
                    amd: Array.isArray(name) ? name[0] : name,
                    commonjs: Array.isArray(name) ? name[0] : name,
                    root: Array.isArray(name) || name == null ? name : [name]
                },
        export: Array.isArray(libraryExport) || libraryExport == null
            ? libraryExport
            : [libraryExport],
        umdNamedDefine
    };
}
function getRawModule(module, options) {
    (0, assert_1.default)(!(0, util_1.isNil)(module.defaultRules), "module.defaultRules should not be nil after defaults");
    // TODO: workaround for module.defaultRules
    const rules = [...module.defaultRules, ...module.rules].map(i => getRawModuleRule(i, options));
    return {
        rules,
        parser: module.parser
    };
}
const getRawModuleRule = (rule, options) => {
    var _a;
    return {
        test: rule.test ? getRawRuleSetCondition(rule.test) : undefined,
        include: rule.include ? getRawRuleSetCondition(rule.include) : undefined,
        exclude: rule.exclude ? getRawRuleSetCondition(rule.exclude) : undefined,
        resource: rule.resource ? getRawRuleSetCondition(rule.resource) : undefined,
        resourceQuery: rule.resourceQuery
            ? getRawRuleSetCondition(rule.resourceQuery)
            : undefined,
        sideEffects: rule.sideEffects,
        use: (0, adapter_rule_use_1.createRawModuleRuleUses)((_a = rule.use) !== null && _a !== void 0 ? _a : [], options),
        type: rule.type,
        parser: rule.parser,
        generator: rule.generator,
        resolve: rule.resolve ? getRawResolve(rule.resolve) : undefined,
        issuer: rule.issuer ? getRawRuleSetCondition(rule.issuer) : undefined,
        oneOf: rule.oneOf
            ? rule.oneOf.map(i => getRawModuleRule(i, options))
            : undefined
    };
};
function getRawRuleSetCondition(condition) {
    if (typeof condition === "string") {
        return {
            type: "string",
            stringMatcher: condition
        };
    }
    if (condition instanceof RegExp) {
        return {
            type: "regexp",
            regexpMatcher: condition.source
        };
    }
    if (typeof condition === "function") {
        return {
            type: "function",
            funcMatcher: condition
        };
    }
    if (Array.isArray(condition)) {
        return {
            type: "array",
            arrayMatcher: condition.map(i => getRawRuleSetCondition(i))
        };
    }
    if (typeof condition === "object" && condition !== null) {
        return {
            type: "logical",
            logicalMatcher: [getRawRuleSetLogicalConditions(condition)]
        };
    }
    throw new Error("unreachable: condition should be one of string, RegExp, Array, Object");
}
function getRawRuleSetLogicalConditions(logical) {
    return {
        and: logical.and
            ? logical.and.map(i => getRawRuleSetCondition(i))
            : undefined,
        or: logical.or ? logical.or.map(i => getRawRuleSetCondition(i)) : undefined,
        not: logical.not ? getRawRuleSetCondition(logical.not) : undefined
    };
}
function getRawExternals(externals) {
    function getRawExternalItem(item) {
        if (typeof item === "string") {
            return { type: "string", stringPayload: item };
        }
        else if (item instanceof RegExp) {
            return { type: "regexp", regexpPayload: item.source };
        }
        return {
            type: "object",
            objectPayload: Object.fromEntries(Object.entries(item).map(([k, v]) => [k, getRawExternalItemValue(v)]))
        };
    }
    function getRawExternalItemValue(value) {
        if (typeof value === "string") {
            return { type: "string", stringPayload: value };
        }
        else if (typeof value === "boolean") {
            return { type: "bool", boolPayload: value };
        }
        throw new Error("unreachable");
    }
    if (Array.isArray(externals)) {
        return externals.map(i => getRawExternalItem(i));
    }
    return [getRawExternalItem(externals)];
}
function getRawOptimization(optimization) {
    (0, assert_1.default)(!(0, util_1.isNil)(optimization.moduleIds) &&
        !(0, util_1.isNil)(optimization.removeAvailableModules) &&
        !(0, util_1.isNil)(optimization.sideEffects), "optimization.moduleIds, optimization.removeAvailableModules, optimization.sideEffects should not be nil after defaults");
    return {
        splitChunks: optimization.splitChunks
            ? getRawSplitChunksOptions(optimization.splitChunks)
            : undefined,
        moduleIds: optimization.moduleIds,
        removeAvailableModules: optimization.removeAvailableModules,
        sideEffects: String(optimization.sideEffects)
    };
}
function getRawSplitChunksOptions(sc) {
    return {
        cacheGroups: sc.cacheGroups
            ? Object.fromEntries(Object.entries(sc.cacheGroups).map(([key, group]) => {
                let normalizedGroup = {
                    test: group.test ? group.test.source : undefined,
                    name: group.name,
                    priority: group.priority,
                    minChunks: group.minChunks,
                    chunks: group.chunks
                };
                return [key, normalizedGroup];
            }))
            : {},
        chunks: sc.chunks,
        maxAsyncRequests: sc.maxAsyncRequests,
        maxInitialRequests: sc.maxInitialRequests,
        minChunks: sc.minChunks,
        minSize: sc.minSize,
        enforceSizeThreshold: sc.enforceSizeThreshold,
        minRemainingSize: sc.minRemainingSize
    };
}
function getRawSnapshotOptions(snapshot) {
    const { resolve, module } = snapshot;
    (0, assert_1.default)(!(0, util_1.isNil)(resolve) && !(0, util_1.isNil)(module));
    const { timestamp: resolveTimestamp, hash: resolveHash } = resolve;
    const { timestamp: moduleTimestamp, hash: moduleHash } = module;
    (0, assert_1.default)(!(0, util_1.isNil)(resolveTimestamp) &&
        !(0, util_1.isNil)(resolveHash) &&
        !(0, util_1.isNil)(moduleTimestamp) &&
        !(0, util_1.isNil)(moduleHash));
    return {
        resolve: {
            timestamp: resolveTimestamp,
            hash: resolveHash
        },
        module: {
            timestamp: moduleTimestamp,
            hash: moduleHash
        }
    };
}
function getRawExperiments(experiments) {
    const { lazyCompilation, incrementalRebuild, asyncWebAssembly } = experiments;
    (0, assert_1.default)(!(0, util_1.isNil)(lazyCompilation) &&
        !(0, util_1.isNil)(incrementalRebuild) &&
        !(0, util_1.isNil)(asyncWebAssembly));
    return {
        lazyCompilation,
        incrementalRebuild,
        asyncWebAssembly
    };
}
function getRawNode(node) {
    (0, assert_1.default)(!(0, util_1.isNil)(node.__dirname) && !(0, util_1.isNil)(node.global) && !(0, util_1.isNil)(node.__filename));
    return {
        dirname: String(node.__dirname),
        filename: String(node.__filename),
        global: String(node.global)
    };
}
function getRawStats(stats) {
    var _a, _b;
    const statsOptions = (0, stats_1.normalizeStatsPreset)(stats);
    return {
        colors: (_a = statsOptions.colors) !== null && _a !== void 0 ? _a : false,
        reasons: (_b = statsOptions.reasons) !== null && _b !== void 0 ? _b : false
    };
}
//# sourceMappingURL=adapter.js.map