import { Compilation, Assets } from "..";
import * as tapable from "tapable";
export declare const createFakeProcessAssetsHook: (compilation: Compilation) => {
    name: string;
    tap: (options: string | {
        name: string;
        stage?: number | undefined;
    }, fn: (assets: Assets) => void) => void;
    tapAsync: (options: string | {
        name: string;
        stage?: number | undefined;
    }, fn: (assets: Assets, cb: tapable.InnerCallback<Error, void>) => void) => void;
    tapPromise: (options: string | {
        name: string;
        stage?: number | undefined;
    }, fn: (assets: Assets) => Promise<void>) => void;
    stageAdditional: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
    stagePreProcess: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
    stageNone: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
    stageOptimizeInline: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
    stageSummarize: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
    stageReport: tapable.AsyncSeriesHook<Assets, tapable.UnsetAdditionalOptions>;
};
export declare function createFakeCompilationDependencies(deps: string[], addDeps: (deps: string[]) => void): {
    [Symbol.iterator](): Generator<string, void, unknown>;
    has(dep: string): boolean;
    add: (dep: string) => void;
    addAll: (deps: Iterable<string>) => void;
};
//# sourceMappingURL=fake.d.ts.map