/// <reference types="node" />
import * as tapable from "tapable";
import { Callback } from "tapable";
import type { WatchOptions } from "watchpack";
import Watching from "./watching";
import { Logger } from "./logging/Logger";
import { OutputNormalized, RspackOptionsNormalized, RspackPluginInstance } from "./config";
import { Stats } from "./stats";
import { Compilation, CompilationParams } from "./compilation";
import ResolverFactory from "./ResolverFactory";
import { WatchFileSystem } from "./util/fs";
export declare class NormalModule {
    static getCompilationHooks(compilation: Compilation): any;
    apply(): void;
}
declare class Compiler {
    #private;
    webpack: any;
    compilation: Compilation;
    root: Compiler;
    running: boolean;
    resolverFactory: ResolverFactory;
    infrastructureLogger: any;
    watching?: Watching;
    outputPath: string;
    name?: string;
    inputFileSystem: any;
    outputFileSystem: typeof import("fs");
    watchFileSystem: WatchFileSystem;
    intermediateFileSystem: any;
    watchMode: boolean;
    context: string;
    modifiedFiles?: ReadonlySet<string>;
    removedFiles?: ReadonlySet<string>;
    hooks: {
        done: tapable.AsyncSeriesHook<Stats>;
        afterDone: tapable.SyncHook<Stats>;
        compilation: tapable.SyncHook<Compilation>;
        thisCompilation: tapable.SyncHook<[Compilation, CompilationParams]>;
        invalid: tapable.SyncHook<[string | null, number]>;
        compile: tapable.SyncHook<[any]>;
        initialize: tapable.SyncHook<[]>;
        infrastructureLog: tapable.SyncBailHook<[string, string, any[]], true>;
        beforeRun: tapable.AsyncSeriesHook<[Compiler]>;
        run: tapable.AsyncSeriesHook<[Compiler]>;
        emit: tapable.AsyncSeriesHook<[Compilation]>;
        afterEmit: tapable.AsyncSeriesHook<[Compilation]>;
        failed: tapable.SyncHook<[Error]>;
        watchRun: tapable.AsyncSeriesHook<[Compiler]>;
        watchClose: tapable.SyncHook<[]>;
        environment: tapable.SyncHook<[]>;
        afterEnvironment: tapable.SyncHook<[]>;
        afterPlugins: tapable.SyncHook<[Compiler]>;
        afterResolvers: tapable.SyncHook<[Compiler]>;
        make: tapable.AsyncParallelHook<[Compilation]>;
        beforeCompile: tapable.AsyncSeriesHook<any>;
        finishModules: tapable.AsyncSeriesHook<[any]>;
    };
    options: RspackOptionsNormalized;
    parentCompilation?: Compilation;
    constructor(context: string, options: RspackOptionsNormalized);
    createChildCompiler(compilation: Compilation, compilerName: string, compilerIndex: number, outputOptions: OutputNormalized, plugins: RspackPluginInstance[]): Compiler;
    runAsChild(callback: any): void;
    getInfrastructureLogger(name: string | Function): Logger;
    run(callback: Callback<Error, Stats>): void;
    build(cb: (error?: Error) => void): void;
    rebuild(modifiedFiles?: ReadonlySet<string>, removedFiles?: ReadonlySet<string>, cb?: (error?: Error) => void): void;
    watch(watchOptions: WatchOptions, handler: Callback<Error, Stats>): Watching;
    purgeInputFileSystem(): void;
    close(callback: () => void): void;
    getAsset(name: string): Buffer | null;
}
export { Compiler };
//# sourceMappingURL=compiler.d.ts.map