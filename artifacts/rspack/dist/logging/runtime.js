"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/logging/runtime.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.configureDefaultLogger = exports.getLogger = void 0;
const SyncBailHook = require("tapable/lib/SyncBailHook");
const { Logger } = require("./Logger");
const createConsoleLogger = require("./createConsoleLogger");
/** @type {createConsoleLogger.LoggerOptions} */
let currentDefaultLoggerOptions = {
    level: "info",
    debug: false,
    console
};
let currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
// @ts-expect-error
const getLogger = name => {
    return new Logger(
    // @ts-expect-error
    (type, args) => {
        if (exports.hooks.log.call(name, type, args) === undefined) {
            currentDefaultLogger(name, type, args);
        }
    }, 
    // @ts-expect-error
    childName => exports.getLogger(`${name}/${childName}`));
};
exports.getLogger = getLogger;
/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
// @ts-expect-error
const configureDefaultLogger = options => {
    Object.assign(currentDefaultLoggerOptions, options);
    currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};
exports.configureDefaultLogger = configureDefaultLogger;
exports.hooks = {
    log: new SyncBailHook(["origin", "type", "args"])
};
//# sourceMappingURL=runtime.js.map