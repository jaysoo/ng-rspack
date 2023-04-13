"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/config/normalization.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNormalizedRspackOptions = void 0;
const getNormalizedRspackOptions = (config) => {
    return {
        name: config.name,
        dependencies: config.dependencies,
        context: config.context,
        mode: config.mode,
        entry: config.entry === undefined
            ? { main: {} }
            : getNormalizedEntryStatic(config.entry),
        output: nestedConfig(config.output, output => {
            const { library } = output;
            const libraryAsName = library;
            const libraryBase = typeof library === "object" &&
                library &&
                !Array.isArray(library) &&
                "type" in library
                ? library
                : libraryAsName || output.libraryTarget
                    ? {
                        name: libraryAsName
                    }
                    : undefined;
            return {
                path: output.path,
                publicPath: output.publicPath,
                filename: output.filename,
                chunkFilename: output.chunkFilename,
                cssFilename: output.cssFilename,
                cssChunkFilename: output.cssChunkFilename,
                assetModuleFilename: output.assetModuleFilename,
                webassemblyModuleFilename: output.webassemblyModuleFilename,
                uniqueName: output.uniqueName,
                enabledLibraryTypes: output.enabledLibraryTypes
                    ? [...output.enabledLibraryTypes]
                    : ["..."],
                globalObject: output.globalObject,
                importFunctionName: output.importFunctionName,
                iife: output.iife,
                module: output.module,
                library: libraryBase && {
                    type: output.libraryTarget !== undefined
                        ? output.libraryTarget
                        : libraryBase.type,
                    auxiliaryComment: output.auxiliaryComment !== undefined
                        ? output.auxiliaryComment
                        : libraryBase.auxiliaryComment,
                    export: output.libraryExport !== undefined
                        ? output.libraryExport
                        : libraryBase.export,
                    name: libraryBase.name,
                    umdNamedDefine: output.umdNamedDefine !== undefined
                        ? output.umdNamedDefine
                        : libraryBase.umdNamedDefine
                }
            };
        }),
        resolve: nestedConfig(config.resolve, resolve => ({
            ...resolve
        })),
        module: nestedConfig(config.module, module => ({
            parser: keyedNestedConfig(module.parser, cloneObject, {}),
            defaultRules: optionalNestedArray(module.defaultRules, r => [...r]),
            rules: nestedArray(module.rules, r => [...r])
        })),
        target: config.target,
        externals: config.externals,
        externalsType: config.externalsType,
        externalsPresets: cloneObject(config.externalsPresets),
        infrastructureLogging: cloneObject(config.infrastructureLogging),
        devtool: config.devtool,
        node: nestedConfig(config.node, node => node && {
            ...node
        }),
        snapshot: nestedConfig(config.snapshot, snapshot => ({
            resolve: optionalNestedConfig(snapshot.resolve, resolve => ({
                timestamp: resolve.timestamp,
                hash: resolve.hash
            })),
            module: optionalNestedConfig(snapshot.module, module => ({
                timestamp: module.timestamp,
                hash: module.hash
            }))
        })),
        cache: optionalNestedConfig(config.cache, cache => cache),
        stats: nestedConfig(config.stats, stats => {
            if (stats === false) {
                return {
                    preset: "none"
                };
            }
            if (stats === true) {
                return {
                    preset: "normal"
                };
            }
            if (typeof stats === "string") {
                return {
                    preset: stats
                };
            }
            return {
                ...stats
            };
        }),
        optimization: nestedConfig(config.optimization, optimization => {
            return {
                ...optimization,
                runtimeChunk: getNormalizedOptimizationRuntimeChunk(optimization.runtimeChunk),
                splitChunks: nestedConfig(optimization.splitChunks, splitChunks => splitChunks && {
                    ...splitChunks,
                    cacheGroups: cloneObject(splitChunks.cacheGroups)
                })
            };
        }),
        plugins: nestedArray(config.plugins, p => [...p]),
        experiments: nestedConfig(config.experiments, experiments => ({
            ...experiments
        })),
        watch: config.watch,
        watchOptions: cloneObject(config.watchOptions),
        devServer: config.devServer,
        builtins: nestedConfig(config.builtins, builtins => ({
            ...builtins
        }))
    };
};
exports.getNormalizedRspackOptions = getNormalizedRspackOptions;
const getNormalizedEntryStatic = (entry) => {
    if (typeof entry === "string") {
        return {
            main: {
                import: [entry]
            }
        };
    }
    if (Array.isArray(entry)) {
        return {
            main: {
                import: entry
            }
        };
    }
    const result = {};
    for (const key of Object.keys(entry)) {
        const value = entry[key];
        if (typeof value === "string") {
            result[key] = {
                import: [value]
            };
        }
        else if (Array.isArray(value)) {
            result[key] = {
                import: value
            };
        }
        else {
            result[key] = {
                import: Array.isArray(value.import) ? value.import : [value.import],
                runtime: value.runtime
            };
        }
    }
    return result;
};
const getNormalizedOptimizationRuntimeChunk = (runtimeChunk) => {
    if (runtimeChunk === undefined)
        return undefined;
    if (runtimeChunk === false)
        return false;
    if (runtimeChunk === "single") {
        return {
            name: () => "runtime"
        };
    }
    if (runtimeChunk === true || runtimeChunk === "multiple") {
        return {
            name: (entrypoint) => `runtime~${entrypoint.name}`
        };
    }
    const { name } = runtimeChunk;
    return {
        name: typeof name === "function" ? name : () => name
    };
};
const nestedConfig = (value, fn) => value === undefined ? fn({}) : fn(value);
const optionalNestedConfig = (value, fn) => (value === undefined ? undefined : fn(value));
const nestedArray = (value, fn) => Array.isArray(value) ? fn(value) : fn([]);
const optionalNestedArray = (value, fn) => (Array.isArray(value) ? fn(value) : undefined);
const cloneObject = (value) => ({ ...value });
const keyedNestedConfig = (value, fn, customKeys) => {
    const result = value === undefined
        ? {}
        : Object.keys(value).reduce((obj, key) => ((obj[key] = (customKeys && key in customKeys ? customKeys[key] : fn)(value[key])),
            obj), {});
    if (customKeys) {
        for (const key of Object.keys(customKeys)) {
            if (!(key in result)) {
                result[key] = customKeys[key]({});
            }
        }
    }
    return result;
};
//# sourceMappingURL=normalization.js.map