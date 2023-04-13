/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3bb53f36a5b8fc6bc1bd976ed7af161bd80/lib/Compilation.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import * as tapable from "tapable";
import { Source } from "webpack-sources";
import { JsCompilation, JsAssetInfo, JsCompatSource, JsModule, JsChunk, JsStatsError, JsStatsWarning } from "@rspack/binding";
import { RspackOptionsNormalized, StatsOptions, OutputNormalized, StatsValue, RspackPluginInstance } from "./config";
import { ChunkGroup } from "./chunk_group";
import { Compiler } from "./compiler";
import ResolverFactory from "./ResolverFactory";
import { createFakeProcessAssetsHook } from "./util/fake";
import { Stats } from "./stats";
import { NormalModuleFactory } from "./normalModuleFactory";
export type AssetInfo = Partial<JsAssetInfo> & Record<string, any>;
export type Assets = Record<string, Source>;
export interface LogEntry {
    type: string;
    args: any[];
    time: number;
    trace?: string[];
}
export interface CompilationParams {
    normalModuleFactory: NormalModuleFactory;
}
export interface KnownCreateStatsOptionsContext {
    forToString?: boolean;
}
type CreateStatsOptionsContext = KnownCreateStatsOptionsContext & Record<string, any>;
export declare class Compilation {
    #private;
    hooks: {
        processAssets: ReturnType<typeof createFakeProcessAssetsHook>;
        log: tapable.SyncBailHook<[string, LogEntry], true>;
        additionalAssets: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
        optimizeChunkModules: tapable.AsyncSeriesBailHook<[
            Iterable<JsChunk>,
            Iterable<JsModule>
        ], undefined>;
        finishModules: tapable.AsyncSeriesHook<[Iterable<JsModule>], undefined>;
    };
    options: RspackOptionsNormalized;
    outputOptions: OutputNormalized;
    compiler: Compiler;
    resolverFactory: ResolverFactory;
    inputFileSystem: any;
    logging: Map<string, LogEntry[]>;
    name?: string;
    childrenCounters: Record<string, number>;
    startTime?: number;
    endTime?: number;
    normalModuleFactory?: NormalModuleFactory;
    children: Compilation[];
    constructor(compiler: Compiler, inner: JsCompilation);
    get hash(): string;
    get fullHash(): string;
    /**
     * Get a map of all assets.
     *
     * Source: [assets](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L1008-L1009)
     */
    get assets(): Record<string, Source>;
    /**
     * Get a map of all entrypoints.
     */
    get entrypoints(): ReadonlyMap<string, ChunkGroup>;
    createStatsOptions(optionsOrPreset: StatsValue | undefined, context?: CreateStatsOptionsContext): StatsOptions;
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
    updateAsset(filename: string, newSourceOrFunction: Source | ((source: Source) => Source), assetInfoUpdateOrFunction: JsAssetInfo | ((assetInfo: JsAssetInfo) => JsAssetInfo)): void;
    /**
     *
     * @param moduleIdentifier moduleIdentifier of the module you want to modify
     * @param source
     * @returns true if the setting is success, false if failed.
     */
    setNoneAstModuleSource(moduleIdentifier: string, source: JsCompatSource): boolean;
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
    emitAsset(filename: string, source: Source, assetInfo?: AssetInfo): void;
    deleteAsset(filename: string): void;
    /**
     * Get an array of Asset
     *
     * See: [Compilation.getAssets](https://webpack.js.org/api/compilation-object/#getassets)
     * Source: [getAssets](https://github.com/webpack/webpack/blob/9fcaa243573005d6fdece9a3f8d89a0e8b399613/lib/Compilation.js#L4448)
     *
     * @return {Readonly<JsAsset>[]}
     */
    getAssets(): {
        source: Source;
        name: string;
        info: JsAssetInfo;
    }[];
    getAsset(name: string): {
        source: Source;
        name: string;
        info: JsAssetInfo;
    } | undefined;
    pushDiagnostic(severity: "error" | "warning", title: string, message: string): void;
    get errors(): {
        push: (...errs: Error[]) => void;
        [Symbol.iterator](): {
            next(): {
                done: boolean;
                value?: undefined;
            } | {
                value: JsStatsError[];
                done: boolean;
            };
        };
    };
    get warnings(): {
        push: (...warns: Error[]) => void;
        [Symbol.iterator](): {
            next(): {
                done: boolean;
                value?: undefined;
            } | {
                value: JsStatsWarning[];
                done: boolean;
            };
        };
    };
    getPath(filename: string, data?: Record<string, any>): any;
    getAssetPath(filename: any, data: any): any;
    getLogger(name: string | (() => string)): any;
    get fileDependencies(): {
        [Symbol.iterator](): Generator<string, void, unknown>;
        has(dep: string): boolean;
        add: (dep: string) => void;
        addAll: (deps: Iterable<string>) => void;
    };
    get contextDependencies(): {
        [Symbol.iterator](): Generator<string, void, unknown>;
        has(dep: string): boolean;
        add: (dep: string) => void;
        addAll: (deps: Iterable<string>) => void;
    };
    get missingDependencies(): {
        [Symbol.iterator](): Generator<string, void, unknown>;
        has(dep: string): boolean;
        add: (dep: string) => void;
        addAll: (deps: Iterable<string>) => void;
    };
    get buildDependencies(): {
        [Symbol.iterator](): Generator<string, void, unknown>;
        has(dep: string): boolean;
        add: (dep: string) => void;
        addAll: (deps: Iterable<string>) => void;
    };
    getModules(): JsModule[];
    getChunks(): JsChunk[];
    get chunks(): JsChunk[];
    getStats(): Stats;
    createChildCompiler(name: string, outputOptions: OutputNormalized, plugins: RspackPluginInstance[]): Compiler;
    /**
     * Get the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__getAssetSource(filename: string): Source | null;
    /**
     * Set the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__setAssetSource(filename: string, source: Source): void;
    /**
     * Delete the `Source` of an given asset filename.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__deleteAssetSource(filename: string): void;
    /**
     * Get a list of asset filenames.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__getAssetFilenames(): string[];
    /**
     * Test if an asset exists.
     *
     * Note: This is not a webpack public API, maybe removed in future.
     *
     * @internal
     */
    __internal__hasAsset(name: string): boolean;
    __internal_getInner(): JsCompilation;
    seal(): void;
    unseal(): void;
    static PROCESS_ASSETS_STAGE_ADDITIONAL: number;
    static PROCESS_ASSETS_STAGE_PRE_PROCESS: number;
    static PROCESS_ASSETS_STAGE_NONE: number;
    static PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE: number;
    static PROCESS_ASSETS_STAGE_SUMMARIZE: number;
    static PROCESS_ASSETS_STAGE_REPORT: number;
    __internal_getProcessAssetsHookByStage(stage: number): tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
}
export type { JsAssetInfo };
//# sourceMappingURL=compilation.d.ts.map