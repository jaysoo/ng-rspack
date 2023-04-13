"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RspackOptionsApply = void 0;
const graceful_fs_1 = __importDefault(require("graceful-fs"));
const ResolveSwcPlugin_1 = require("./web/ResolveSwcPlugin");
const cleverMerge_1 = require("./util/cleverMerge");
const assert_1 = __importDefault(require("assert"));
class RspackOptionsApply {
    constructor() { }
    process(options, compiler) {
        var _a;
        (0, assert_1.default)(options.output.path, "options.output.path should at least have a default value after `applyRspackOptionsDefaults`");
        compiler.outputPath = options.output.path;
        compiler.name = options.name;
        compiler.outputFileSystem = graceful_fs_1.default;
        const { minimize, minimizer } = options.optimization;
        if (minimize && minimizer) {
            for (const item of minimizer) {
                if (typeof item === "function") {
                    item.call(compiler, compiler);
                }
                else if (item !== "...") {
                    item.apply(compiler);
                }
            }
        }
        const runtimeChunk = options.optimization
            .runtimeChunk;
        if (runtimeChunk) {
            Object.entries(options.entry).forEach(([entryName, value]) => {
                if (value.runtime === undefined) {
                    value.runtime = runtimeChunk.name({ name: entryName });
                }
            });
        }
        if (options.builtins.devFriendlySplitChunks) {
            options.optimization.splitChunks = undefined;
        }
        if ((_a = options.devServer) === null || _a === void 0 ? void 0 : _a.hot) {
            options.output.strictModuleErrorHandling = true;
        }
        new ResolveSwcPlugin_1.ResolveSwcPlugin().apply(compiler);
        compiler.hooks.afterPlugins.call(compiler);
        if (!compiler.inputFileSystem) {
            throw new Error("No input filesystem provided");
        }
        compiler.resolverFactory.hooks.resolveOptions
            .for("normal")
            .tap("RspackOptionsApply", resolveOptions => {
            resolveOptions = (0, cleverMerge_1.cleverMerge)(options.resolve, resolveOptions);
            resolveOptions.fileSystem = compiler.inputFileSystem;
            return resolveOptions;
        });
        compiler.resolverFactory.hooks.resolveOptions
            .for("context")
            .tap("RspackOptionsApply", resolveOptions => {
            resolveOptions = (0, cleverMerge_1.cleverMerge)(options.resolve, resolveOptions);
            resolveOptions.fileSystem = compiler.inputFileSystem;
            resolveOptions.resolveToContext = true;
            return resolveOptions;
        });
        compiler.hooks.afterResolvers.call(compiler);
    }
}
exports.RspackOptionsApply = RspackOptionsApply;
//# sourceMappingURL=rspackOptionsApply.js.map