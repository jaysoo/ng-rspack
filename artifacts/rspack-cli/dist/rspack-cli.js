"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.definePlugin = exports.defineConfig = exports.RspackCLI = void 0;
const helpers_1 = require("yargs/helpers");
const yargs_1 = __importDefault(require("yargs"));
const util_1 = __importDefault(require("util"));
const build_1 = require("./commands/build");
const serve_1 = require("./commands/serve");
const core_1 = require("@rspack/core");
const options_1 = require("./utils/options");
const loadConfig_1 = require("./utils/loadConfig");
class RspackCLI {
    constructor() {
        this.colors = this.createColors();
        this.program = (0, yargs_1.default)();
    }
    async createCompiler(options, rspackEnv, callback) {
        var _a;
        process.env.RSPACK_CONFIG_VALIDATE = "loose";
        let nodeEnv = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV;
        if (typeof options.nodeEnv === "string") {
            process.env.NODE_ENV = nodeEnv || options.nodeEnv;
        }
        else {
            process.env.NODE_ENV = nodeEnv || rspackEnv;
        }
        let config = await this.loadConfig(options);
        config = await this.buildConfig(config, options, rspackEnv);
        const isWatch = Array.isArray(config)
            ? config.some(i => i.watch)
            : config.watch;
        const compiler = (0, core_1.rspack)(config, isWatch ? callback : undefined);
        return compiler;
    }
    createColors(useColor) {
        const { createColors, isColorSupported } = require("colorette");
        let shouldUseColor;
        if (useColor) {
            shouldUseColor = useColor;
        }
        else {
            shouldUseColor = isColorSupported;
        }
        return {
            ...createColors({ useColor: shouldUseColor }),
            isColorSupported: shouldUseColor
        };
    }
    getLogger() {
        return {
            error: val => console.error(`[rspack-cli] ${this.colors.red(util_1.default.format(val))}`),
            warn: val => console.warn(`[rspack-cli] ${this.colors.yellow(val)}`),
            info: val => console.info(`[rspack-cli] ${this.colors.cyan(val)}`),
            success: val => console.log(`[rspack-cli] ${this.colors.green(val)}`),
            log: val => console.log(`[rspack-cli] ${val}`),
            raw: val => console.log(val)
        };
    }
    async run(argv) {
        this.program.usage("[options]");
        this.program.scriptName("rspack");
        this.program.middleware(options_1.normalizeEnv);
        this.registerCommands();
        await this.program.parseAsync((0, helpers_1.hideBin)(argv));
    }
    async registerCommands() {
        const builtinCommands = [new build_1.BuildCommand(), new serve_1.ServeCommand()];
        for (const command of builtinCommands) {
            command.apply(this);
        }
    }
    async buildConfig(item, options, rspackEnv) {
        const internalBuildConfig = async (item) => {
            var _a;
            const isEnvProduction = rspackEnv === "production";
            const isEnvDevelopment = rspackEnv === "development";
            if (options.analyze) {
                const { BundleAnalyzerPlugin } = await import("webpack-bundle-analyzer");
                ((_a = item.plugins) !== null && _a !== void 0 ? _a : (item.plugins = [])).push({
                    name: "rspack-bundle-analyzer",
                    apply(compiler) {
                        new BundleAnalyzerPlugin({
                            generateStatsFile: true
                        }).apply(compiler);
                    }
                });
            }
            // cli --watch overrides the watch config
            if (options.watch) {
                item.watch = options.watch;
            }
            // auto set default mode if user config don't set it
            if (!item.mode) {
                item.mode = rspackEnv !== null && rspackEnv !== void 0 ? rspackEnv : "none";
            }
            // user parameters always has highest priority than default mode and config mode
            if (options.mode) {
                item.mode = options.mode;
            }
            // false is also a valid value for sourcemap, so don't override it
            if (typeof item.devtool === "undefined") {
                item.devtool = isEnvProduction
                    ? "source-map"
                    : "cheap-module-source-map";
            }
            item.builtins = item.builtins || {};
            if (isEnvDevelopment) {
                item.builtins.progress = true;
            }
            // no emit assets when run dev server, it will use node_binding api get file content
            if (typeof item.builtins.noEmitAssets === "undefined") {
                item.builtins.noEmitAssets = false; // @FIXME memory fs currently cause problems for outputFileSystem, so we disable it temporarily
            }
            // Tells webpack to set process.env.NODE_ENV to a given string value.
            // optimization.nodeEnv uses DefinePlugin unless set to false.
            // optimization.nodeEnv defaults to mode if set, else falls back to 'production'.
            // See doc: https://webpack.js.org/configuration/optimization/#optimizationnodeenv
            // See source: https://github.com/webpack/webpack/blob/8241da7f1e75c5581ba535d127fa66aeb9eb2ac8/lib/WebpackOptionsApply.js#L563
            // When mode is set to 'none', optimization.nodeEnv defaults to false.
            if (item.mode !== "none") {
                item.builtins.define = {
                    // User defined `process.env.NODE_ENV` always has highest priority than default define
                    "process.env.NODE_ENV": JSON.stringify(item.mode),
                    ...item.builtins.define
                };
            }
            if (typeof item.stats === "undefined") {
                item.stats = { preset: "errors-warnings", timings: true };
            }
            else if (typeof item.stats === "boolean") {
                item.stats = item.stats ? { preset: "normal" } : { preset: "none" };
            }
            else if (typeof item.stats === "string") {
                item.stats = {
                    preset: item.stats
                };
            }
            if (this.colors.isColorSupported &&
                typeof item.stats.colors === "undefined") {
                item.stats.colors = true;
            }
            return item;
        };
        if (Array.isArray(item)) {
            return Promise.all(item.map(internalBuildConfig));
        }
        else {
            return internalBuildConfig(item);
        }
    }
    async loadConfig(options) {
        var _a;
        let loadedConfig = await (0, loadConfig_1.loadRspackConfig)(options);
        if (options.configName) {
            const notFoundConfigNames = [];
            // @ts-expect-error
            loadedConfig = options.configName.map((configName) => {
                let found;
                if (Array.isArray(loadedConfig)) {
                    found = loadedConfig.find(options => options.name === configName);
                }
                else {
                    found =
                        loadedConfig.name === configName
                            ? loadedConfig
                            : undefined;
                }
                if (!found) {
                    notFoundConfigNames.push(configName);
                }
                return found;
            });
            if (notFoundConfigNames.length > 0) {
                this.getLogger().error(notFoundConfigNames
                    .map(configName => `Configuration with the name "${configName}" was not found.`)
                    .join(" "));
                process.exit(2);
            }
        }
        if (typeof loadedConfig === "function") {
            loadedConfig = loadedConfig((_a = options.argv) === null || _a === void 0 ? void 0 : _a.env, options.argv);
            // if return promise we should await its result
            if (typeof loadedConfig.then === "function") {
                loadedConfig = await loadedConfig;
            }
        }
        return loadedConfig;
    }
    isMultipleCompiler(compiler) {
        return Boolean(compiler.compilers);
    }
    isWatch(compiler) {
        return Boolean(this.isMultipleCompiler(compiler)
            ? compiler.compilers.some(compiler => compiler.options.watch)
            : compiler.options.watch);
    }
}
exports.RspackCLI = RspackCLI;
function defineConfig(config) {
    return config;
}
exports.defineConfig = defineConfig;
function definePlugin(plugin) {
    return plugin;
}
exports.definePlugin = definePlugin;
//# sourceMappingURL=rspack-cli.js.map