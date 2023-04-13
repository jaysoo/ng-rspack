/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/tree/4b4ca3bb53f36a5b8fc6bc1bd976ed7af161bd80/lib/stats
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import * as binding from "@rspack/binding";
import { Compilation } from ".";
import { StatsValue, StatsOptions } from "./config";
export type StatsCompilation = {
    name?: string;
    hash?: string;
    time?: number;
    builtAt?: number;
    publicPath?: string;
    outputPath?: string;
    assets?: binding.JsStatsAsset[];
    assetsByChunkName?: Record<string, string[]>;
    chunks?: binding.JsStatsChunk[];
    modules?: binding.JsStatsModule[];
    entrypoints?: Record<string, binding.JsStatsChunkGroup>;
    namedChunkGroups?: Record<string, binding.JsStatsChunkGroup>;
    errors?: binding.JsStatsError[];
    errorsCount?: number;
    warnings?: binding.JsStatsWarning[];
    warningsCount?: number;
    filteredModules?: number;
    children?: StatsCompilation[];
};
export declare class Stats {
    #private;
    compilation: Compilation;
    constructor(compilation: Compilation);
    get hash(): string;
    hasErrors(): boolean;
    hasWarnings(): boolean;
    toJson(opts?: StatsValue, forToString?: boolean): StatsCompilation;
    toString(opts?: StatsValue): any;
    static jsonToString(obj: any, useColors: boolean): any;
}
export declare const optionsOrFallback: (options: boolean | undefined, fallback: boolean) => boolean;
export declare function normalizeStatsPreset(options?: StatsValue): StatsOptions;
//# sourceMappingURL=stats.d.ts.map