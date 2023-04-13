"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMultiCompiler = exports.createCompiler = exports.rspack = void 0;
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
const config_1 = require("./config");
const compiler_1 = require("./compiler");
const util_1 = __importDefault(require("util"));
const rspackOptionsApply_1 = require("./rspackOptionsApply");
const NodeEnvironmentPlugin_1 = __importDefault(require("./node/NodeEnvironmentPlugin"));
const multiCompiler_1 = require("./multiCompiler");
const assert_1 = __importDefault(require("assert"));
const util_2 = require("./util");
const schema_check_js_1 = __importDefault(require("./config/schema.check.js"));
const InvalidateConfiguration_1 = __importDefault(require("./error/InvalidateConfiguration"));
const schema_utils_1 = require("schema-utils");
function createMultiCompiler(options) {
    const compilers = options.map(createCompiler);
    const compiler = new multiCompiler_1.MultiCompiler(compilers, options);
    for (const childCompiler of compilers) {
        if (childCompiler.options.dependencies) {
            compiler.setDependencies(childCompiler, childCompiler.options.dependencies);
        }
    }
    return compiler;
}
exports.createMultiCompiler = createMultiCompiler;
function createCompiler(userOptions) {
    const options = (0, config_1.getNormalizedRspackOptions)(userOptions);
    (0, config_1.applyRspackOptionsBaseDefaults)(options);
    (0, assert_1.default)(!(0, util_2.isNil)(options.context));
    const compiler = new compiler_1.Compiler(options.context, options);
    new NodeEnvironmentPlugin_1.default({
        infrastructureLogging: options.infrastructureLogging
    }).apply(compiler);
    const logger = compiler.getInfrastructureLogger("config");
    logger.debug("RawOptions:", util_1.default.inspect(userOptions, { colors: true, depth: null }));
    if (Array.isArray(options.plugins)) {
        for (const plugin of options.plugins) {
            if (typeof plugin === "function") {
                plugin.call(compiler, compiler);
            }
            else {
                plugin.apply(compiler);
            }
        }
    }
    (0, config_1.applyRspackOptionsDefaults)(compiler.options);
    logger.debug("NormalizedOptions:", util_1.default.inspect(compiler.options, { colors: true, depth: null }));
    compiler.hooks.environment.call();
    compiler.hooks.afterEnvironment.call();
    new rspackOptionsApply_1.RspackOptionsApply().process(compiler.options, compiler);
    compiler.hooks.initialize.call();
    return compiler;
}
exports.createCompiler = createCompiler;
function isMultiRspackOptions(o) {
    return Array.isArray(o);
}
function revalidateWithStrategy(options) {
    var _a;
    try {
        (0, schema_utils_1.validate)(require("./config/schema.js"), options);
    }
    catch (e) {
        if (!(e instanceof schema_utils_1.ValidationError)) {
            throw e;
        }
        // 'strict', 'loose', 'loose-silent'
        const strategy = (_a = process.env.RSPACK_CONFIG_VALIDATE) !== null && _a !== void 0 ? _a : "strict";
        if (strategy === "loose-silent")
            return;
        if (strategy === "loose") {
            console.error(e.message);
            return;
        }
        throw new InvalidateConfiguration_1.default(e.message);
    }
}
function rspack(options, callback) {
    if (!(0, util_2.asArray)(options).every(i => (0, schema_check_js_1.default)(i))) {
        // slow path
        revalidateWithStrategy(options);
    }
    const create = () => {
        if (isMultiRspackOptions(options)) {
            const compiler = createMultiCompiler(options);
            const watch = options.some(options => options.watch);
            const watchOptions = options.map(options => options.watchOptions || {});
            return { compiler, watch, watchOptions };
        }
        const compiler = createCompiler(options);
        const watch = options.watch;
        const watchOptions = options.watchOptions || {};
        return { compiler, watch, watchOptions };
    };
    if (callback) {
        try {
            const { compiler, watch, watchOptions } = create();
            if (watch) {
                compiler.watch(watchOptions, callback);
            }
            else {
                compiler.run((err, stats) => {
                    compiler.close(() => {
                        callback(err, stats);
                    });
                });
            }
            return compiler;
        }
        catch (err) {
            process.nextTick(() => callback(err));
            return null;
        }
    }
    else {
        const { compiler, watch } = create();
        if (watch) {
            util_1.default.deprecate(() => { }, "A 'callback' argument needs to be provided to the 'rspack(options, callback)' function when the 'watch' option is set. There is no way to handle the 'watch' option without a callback.")();
        }
        return compiler;
    }
}
exports.rspack = rspack;
exports.default = rspack;
//# sourceMappingURL=rspack.js.map