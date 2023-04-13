/// <reference types="node" />
import { JsAssetInfo, JsLoaderContext, RawModuleRuleUse, RawOptions } from "@rspack/binding";
import { ResolveRequest } from "enhanced-resolve";
import { Compiler } from "../compiler";
import { Logger } from "../logging/Logger";
import Hash from "../util/hash";
import { Mode, Resolve, RuleSetUse } from "./types";
export interface ComposeJsUseOptions {
    devtool: RawOptions["devtool"];
    context: RawOptions["context"];
    compiler: Compiler;
}
export interface SourceMap {
    version: number;
    sources: string[];
    mappings: string;
    file?: string;
    sourceRoot?: string;
    sourcesContent?: string[];
    names?: string[];
}
export interface AdditionalData {
    [index: string]: any;
}
export interface LoaderContext extends Pick<JsLoaderContext, "resource" | "resourcePath" | "resourceQuery" | "resourceFragment"> {
    version: 2;
    async(): (err: Error | null, content: string | Buffer, sourceMap?: string | SourceMap, additionalData?: AdditionalData) => void;
    callback(err: Error | null, content: string | Buffer, sourceMap?: string | SourceMap, additionalData?: AdditionalData): void;
    cacheable(cacheable?: boolean): void;
    sourceMap: boolean;
    rootContext: string;
    context: string;
    loaderIndex: number;
    mode?: Mode;
    hot?: boolean;
    getOptions(schema?: any): unknown;
    resolve(context: string, request: string, callback: (arg0: null | Error, arg1?: string | false, arg2?: ResolveRequest) => void): void;
    getResolve(options: Resolve): (context: any, request: any, callback: any) => Promise<any>;
    getLogger(name: string): Logger;
    emitError(error: Error): void;
    emitWarning(warning: Error): void;
    emitFile(name: string, content: string | Buffer, sourceMap?: string, assetInfo?: JsAssetInfo): void;
    addDependency(file: string): void;
    dependency(file: string): void;
    addContextDependency(context: string): void;
    addMissingDependency(missing: string): void;
    clearDependencies(): void;
    getDependencies(): string[];
    getContextDependencies(): string[];
    getMissingDependencies(): string[];
    addBuildDependency(file: string): void;
    fs: any;
    utils: {
        absolutify: (context: string, request: string) => string;
        contextify: (context: string, request: string) => string;
        createHash: (algorithm?: string) => Hash;
    };
    query: unknown;
    data: unknown;
    _compiler: Compiler;
    _compilation: Compiler["compilation"];
}
export interface LoaderResult {
    cacheable: boolean;
    content: string | Buffer;
    sourceMap?: string | SourceMap;
    additionalData?: AdditionalData;
    fileDependencies: string[];
    contextDependencies: string[];
    missingDependencies: string[];
    buildDependencies: string[];
}
export declare function createRawModuleRuleUses(uses: RuleSetUse, options: ComposeJsUseOptions): RawModuleRuleUse[];
export declare function isUseSourceMap(devtool: RawOptions["devtool"]): boolean;
export declare function isUseSimpleSourceMap(devtool: RawOptions["devtool"]): boolean;
//# sourceMappingURL=adapter-rule-use.d.ts.map