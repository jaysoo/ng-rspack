"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/MultiWatching.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neo_async_1 = __importDefault(require("neo-async"));
/** @typedef {import("./multiCompiler")} MultiCompiler */
/** @typedef {import("./watching")} Watching */
/**
 * @template T
 * @callback Callback
 * @param {(Error | null)=} err
 * @param {T=} result
 */
class MultiWatching {
    /**
     * @param {Watching[]} watchings child compilers' watchers
     * @param {MultiCompiler} compiler the compiler
     */
    constructor(watchings, compiler) {
        this.watchings = watchings;
        this.compiler = compiler;
    }
    // @ts-expect-error
    invalidate(callback) {
        if (callback) {
            neo_async_1.default.each(this.watchings, (watching, callback) => watching.invalidate(callback), callback);
        }
        else {
            for (const watching of this.watchings) {
                watching.invalidate();
            }
        }
    }
    /**
     * @param {Callback<void>} callback signals when the watcher is closed
     * @returns {void}
     */
    // @ts-expect-error
    close(callback) {
        neo_async_1.default.forEach(this.watchings, (watching, finishedCallback) => {
            watching.close(finishedCallback);
        }, err => {
            this.compiler.hooks.watchClose.call();
            if (typeof callback === "function") {
                this.compiler.running = false;
                callback(err);
            }
        });
    }
    suspend() {
        for (const watching of this.watchings) {
            watching.suspend();
        }
    }
    resume() {
        for (const watching of this.watchings) {
            watching.resume();
        }
    }
}
exports.default = MultiWatching;
//# sourceMappingURL=multiWatching.js.map