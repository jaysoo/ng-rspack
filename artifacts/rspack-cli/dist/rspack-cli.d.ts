import yargs from "yargs";
import { RspackCLIColors, RspackCLILogger, RspackCLIOptions } from "./types";
import { RspackOptions, MultiCompiler, Compiler, MultiRspackOptions, Stats, MultiStats } from "@rspack/core";
import { RspackPluginInstance, RspackPluginFunction } from "@rspack/core";
type RspackEnv = "development" | "production";
export declare class RspackCLI {
    colors: RspackCLIColors;
    program: yargs.Argv<{}>;
    constructor();
    createCompiler(options: RspackCLIOptions, rspackEnv: RspackEnv, callback?: (e: Error, res?: Stats | MultiStats) => void): Promise<Compiler | MultiCompiler>;
    createColors(useColor?: boolean): RspackCLIColors;
    getLogger(): RspackCLILogger;
    run(argv: string[]): Promise<void>;
    registerCommands(): Promise<void>;
    buildConfig(item: RspackOptions | MultiRspackOptions, options: RspackCLIOptions, rspackEnv: RspackEnv): Promise<RspackOptions | MultiRspackOptions>;
    loadConfig(options: RspackCLIOptions): Promise<RspackOptions | MultiRspackOptions>;
    isMultipleCompiler(compiler: Compiler | MultiCompiler): compiler is MultiCompiler;
    isWatch(compiler: Compiler | MultiCompiler): boolean;
}
export declare function defineConfig(config: RspackOptions): RspackOptions;
export declare function definePlugin(plugin: RspackPluginFunction): RspackPluginFunction;
export declare function definePlugin(plugin: RspackPluginInstance): RspackPluginInstance;
export {};
//# sourceMappingURL=rspack-cli.d.ts.map