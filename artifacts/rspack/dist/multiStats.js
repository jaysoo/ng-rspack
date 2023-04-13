"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/MultiStats.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MultiStats_instances, _MultiStats_createChildOptions;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiStats = void 0;
const util_1 = require("./util");
const identifier_1 = __importDefault(require("./util/identifier"));
class MultiStats {
    constructor(stats) {
        _MultiStats_instances.add(this);
        this.stats = stats;
    }
    get hash() {
        return this.stats.map(stat => stat.hash).join("");
    }
    hasErrors() {
        return this.stats.some(stat => stat.hasErrors());
    }
    hasWarnings() {
        return this.stats.some(stat => stat.hasWarnings());
    }
    toJson(options) {
        options = __classPrivateFieldGet(this, _MultiStats_instances, "m", _MultiStats_createChildOptions).call(this, options, { forToString: false });
        const obj = {};
        obj.children = this.stats.map((stat, idx) => {
            const obj = stat.toJson(options.children[idx]);
            const compilationName = stat.compilation.name;
            const name = compilationName &&
                identifier_1.default.makePathsRelative(options.context, compilationName, stat.compilation.compiler.root);
            obj.name = name;
            return obj;
        });
        if (options.hash) {
            obj.hash = obj.children.map(j => j.hash).join("");
        }
        const mapError = (j, obj) => {
            return {
                ...obj,
                compilerPath: obj.compilerPath
                    ? `${j.name}.${obj.compilerPath}`
                    : j.name
            };
        };
        if (options.errors) {
            obj.errors = [];
            for (const j of obj.children) {
                for (const i of j.errors || []) {
                    obj.errors.push(mapError(j, i));
                }
            }
        }
        if (options.warnings) {
            obj.warnings = [];
            for (const j of obj.children) {
                for (const i of j.warnings || []) {
                    obj.warnings.push(mapError(j, i));
                }
            }
        }
        if (options.errorsCount) {
            obj.errorsCount = 0;
            for (const j of obj.children) {
                obj.errorsCount += j.errorsCount || 0;
            }
        }
        if (options.warningsCount) {
            obj.warningsCount = 0;
            for (const j of obj.children) {
                obj.warningsCount += j.warningsCount || 0;
            }
        }
        return obj;
    }
    toString(options) {
        options = __classPrivateFieldGet(this, _MultiStats_instances, "m", _MultiStats_createChildOptions).call(this, options, { forToString: true });
        const results = this.stats.map((stat, idx) => {
            const str = stat.toString(options.children[idx]);
            const compilationName = stat.compilation.name;
            const name = compilationName &&
                identifier_1.default
                    .makePathsRelative(options.context, compilationName, stat.compilation.compiler.root)
                    .replace(/\|/g, " ");
            if (!str)
                return str;
            return name ? `${name}:\n${(0, util_1.indent)(str, "  ")}` : str;
        });
        return results.filter(Boolean).join("\n\n");
    }
}
exports.default = MultiStats;
exports.MultiStats = MultiStats;
_MultiStats_instances = new WeakSet(), _MultiStats_createChildOptions = function _MultiStats_createChildOptions(options, context) {
    if (!options) {
        options = {};
    }
    const { children: childrenOptions = undefined, ...baseOptions } = typeof options === "string" ? { preset: options } : options;
    const children = this.stats.map((stat, idx) => {
        const childOptions = Array.isArray(childrenOptions)
            ? childrenOptions[idx]
            : childrenOptions;
        return stat.compilation.createStatsOptions({
            ...baseOptions,
            ...(typeof childOptions === "string"
                ? { preset: childOptions }
                : childOptions && typeof childOptions === "object"
                    ? childOptions
                    : undefined)
        }, context);
    });
    return {
        hash: children.every(o => o.hash),
        errorsCount: children.every(o => o.errorsCount),
        warningsCount: children.every(o => o.warningsCount),
        errors: children.every(o => o.errors),
        warnings: children.every(o => o.warnings),
        children
    };
};
//# sourceMappingURL=multiStats.js.map