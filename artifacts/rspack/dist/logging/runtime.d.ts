/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/logging/runtime.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
export declare const getLogger: (name: any) => any;
/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
export declare const configureDefaultLogger: (options: any) => void;
export declare const hooks: {
    log: any;
};
//# sourceMappingURL=runtime.d.ts.map