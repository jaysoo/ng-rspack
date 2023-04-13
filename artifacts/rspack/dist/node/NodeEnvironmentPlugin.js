"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/node/NodeEnvironmentPlugin.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
// @ts-expect-error
const CachedInputFileSystem_1 = __importDefault(require("enhanced-resolve/lib/CachedInputFileSystem"));
const graceful_fs_1 = __importDefault(require("graceful-fs"));
const createConsoleLogger_1 = __importDefault(require("../logging/createConsoleLogger"));
const NodeWatchFileSystem_1 = __importDefault(require("./NodeWatchFileSystem"));
const nodeConsole_1 = __importDefault(require("./nodeConsole"));
class NodeEnvironmentPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        const { infrastructureLogging } = this.options;
        compiler.infrastructureLogger = (0, createConsoleLogger_1.default)({
            level: infrastructureLogging.level || "info",
            debug: infrastructureLogging.debug || false,
            console: infrastructureLogging.console ||
                (0, nodeConsole_1.default)({
                    colors: infrastructureLogging.colors,
                    appendOnly: infrastructureLogging.appendOnly,
                    stream: infrastructureLogging.stream
                })
        });
        compiler.inputFileSystem = new CachedInputFileSystem_1.default(graceful_fs_1.default, 60000);
        const inputFileSystem = compiler.inputFileSystem;
        compiler.outputFileSystem = graceful_fs_1.default;
        compiler.intermediateFileSystem = graceful_fs_1.default;
        compiler.watchFileSystem = new NodeWatchFileSystem_1.default(compiler.inputFileSystem);
        compiler.hooks.beforeRun.tap("NodeEnvironmentPlugin", compiler => {
            if (compiler.inputFileSystem === inputFileSystem) {
                compiler.fsStartTime = Date.now();
                inputFileSystem.purge();
            }
        });
    }
}
exports.default = NodeEnvironmentPlugin;
//# sourceMappingURL=NodeEnvironmentPlugin.js.map