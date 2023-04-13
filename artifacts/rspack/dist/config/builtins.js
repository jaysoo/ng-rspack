"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMinifyOptions = exports.resolveBuiltinsOptions = void 0;
const path = __importStar(require("path"));
const browserslist_1 = require("browserslist");
function resolvePresetEnv(presetEnv, context) {
    var _a, _b;
    if (!presetEnv) {
        return undefined;
    }
    return {
        targets: (_b = (_a = presetEnv === null || presetEnv === void 0 ? void 0 : presetEnv.targets) !== null && _a !== void 0 ? _a : (0, browserslist_1.loadConfig)({ path: context })) !== null && _b !== void 0 ? _b : [],
        mode: presetEnv === null || presetEnv === void 0 ? void 0 : presetEnv.mode,
        coreJs: presetEnv === null || presetEnv === void 0 ? void 0 : presetEnv.coreJs
    };
}
function resolvePluginImport(pluginImport) {
    if (!pluginImport) {
        return undefined;
    }
    return pluginImport.map(config => {
        const rawConfig = {
            ...config,
            style: {} // As babel-plugin-import style config is very flexible, we convert it to a more specific structure
        };
        if (typeof config.style === "boolean") {
            rawConfig.style.bool = config.style;
        }
        else if (typeof config.style === "string") {
            const isTpl = config.style.includes("{{");
            rawConfig.style[isTpl ? "custom" : "css"] = config.style;
        }
        // This option will overrides the behavior of style
        if (config.styleLibraryDirectory) {
            rawConfig.style = { styleLibraryDirectory: config.styleLibraryDirectory };
        }
        return rawConfig;
    });
}
function resolveDefine(define) {
    // @ts-expect-error
    const entries = Object.entries(define).map(([key, value]) => {
        if (typeof value !== "string") {
            value = value === undefined ? "undefined" : JSON.stringify(value);
        }
        return [key, value];
    });
    return Object.fromEntries(entries);
}
function resolveProvide(provide = {}) {
    const entries = Object.entries(provide).map(([key, value]) => {
        if (typeof value === "string") {
            value = [value];
        }
        return [key, value];
    });
    return Object.fromEntries(entries);
}
function resolveHtml(html) {
    return html.map(c => {
        const meta = {};
        for (const key in c.meta) {
            const value = c.meta[key];
            if (typeof value === "string") {
                meta[key] = {
                    name: key,
                    content: value
                };
            }
        }
        return {
            ...c,
            meta
        };
    });
}
function resolveDecorator(decorator) {
    if (decorator === false) {
        return undefined;
    }
    if (decorator === undefined || decorator === true) {
        decorator = {};
    }
    return Object.assign({
        legacy: true,
        emitMetadata: true
    }, decorator);
}
function resolveProgress(progress) {
    if (!progress) {
        return undefined;
    }
    if (progress === true) {
        progress = {};
    }
    return progress;
}
function resolveEmotion(emotion, isProduction) {
    var _a, _b, _c;
    if (!emotion) {
        return undefined;
    }
    if (emotion === true) {
        emotion = {};
    }
    const autoLabel = (_a = emotion === null || emotion === void 0 ? void 0 : emotion.autoLabel) !== null && _a !== void 0 ? _a : "dev-only";
    const emotionConfig = {
        enabled: true,
        // @ts-expect-error autoLabel is string for JavaScript interface, however is boolean for Rust interface
        autoLabel: autoLabel === "dev-only" ? !isProduction : autoLabel === "always",
        importMap: emotion === null || emotion === void 0 ? void 0 : emotion.importMap,
        labelFormat: (_b = emotion === null || emotion === void 0 ? void 0 : emotion.labelFormat) !== null && _b !== void 0 ? _b : "[local]",
        sourcemap: isProduction ? false : (_c = emotion === null || emotion === void 0 ? void 0 : emotion.sourceMap) !== null && _c !== void 0 ? _c : true
    };
    return JSON.stringify(emotionConfig);
}
function resolveCopy(copy) {
    if (!copy) {
        return undefined;
    }
    const ret = {
        patterns: []
    };
    ret.patterns = (copy.patterns || []).map(pattern => {
        var _a, _b, _c, _d;
        if (typeof pattern === "string") {
            pattern = { from: pattern };
        }
        (_a = pattern.force) !== null && _a !== void 0 ? _a : (pattern.force = false);
        (_b = pattern.noErrorOnMissing) !== null && _b !== void 0 ? _b : (pattern.noErrorOnMissing = false);
        (_c = pattern.priority) !== null && _c !== void 0 ? _c : (pattern.priority = 0);
        (_d = pattern.globOptions) !== null && _d !== void 0 ? _d : (pattern.globOptions = {});
        return pattern;
    });
    return ret;
}
function resolveRelay(relay, rootDir) {
    if (!relay) {
        return undefined;
    }
    // Search relay config based on
    if (relay === true) {
        return (getRelayConfigFromProject(rootDir) || {
            language: "javascript"
        });
    }
    else {
        return relay;
    }
}
function getRelayConfigFromProject(rootDir) {
    for (const configName of [
        "relay.config.json",
        "relay.config.js",
        "package.json"
    ]) {
        const configPath = path.join(rootDir, configName);
        try {
            let config = require(configPath);
            let finalConfig;
            if (configName === "package.json") {
                finalConfig = config === null || config === void 0 ? void 0 : config.relay;
            }
            else {
                finalConfig = config;
            }
            if (finalConfig) {
                return {
                    language: finalConfig.language,
                    artifactDirectory: finalConfig.artifactDirectory
                };
            }
        }
        catch (_) { }
    }
}
function resolveBuiltinsOptions(builtins, { contextPath, production, optimization }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const presetEnv = resolvePresetEnv(builtins.presetEnv, contextPath);
    (_b = (_a = builtins.presetEnv) !== null && _a !== void 0 ? _a : (0, browserslist_1.loadConfig)({ path: contextPath })) !== null && _b !== void 0 ? _b : [];
    return {
        css: {
            modules: {
                localsConvention: "asIs",
                localIdentName: production ? "[hash]" : "[path][name][ext]__[local]",
                exportsOnly: false,
                ...(_c = builtins.css) === null || _c === void 0 ? void 0 : _c.modules
            }
        },
        postcss: { pxtorem: undefined, ...builtins.postcss },
        treeShaking: (_d = builtins.treeShaking) !== null && _d !== void 0 ? _d : !!production,
        react: (_e = builtins.react) !== null && _e !== void 0 ? _e : {},
        noEmitAssets: (_f = builtins.noEmitAssets) !== null && _f !== void 0 ? _f : false,
        define: resolveDefine(builtins.define || {}),
        provide: resolveProvide(builtins.provide),
        html: resolveHtml(builtins.html || []),
        presetEnv,
        progress: resolveProgress(builtins.progress),
        decorator: resolveDecorator(builtins.decorator),
        minifyOptions: resolveMinifyOptions(builtins, optimization),
        emotion: resolveEmotion(builtins.emotion, production),
        devFriendlySplitChunks: (_g = builtins.devFriendlySplitChunks) !== null && _g !== void 0 ? _g : false,
        copy: resolveCopy(builtins.copy),
        pluginImport: resolvePluginImport(builtins.pluginImport),
        relay: builtins.relay
            ? resolveRelay(builtins.relay, contextPath)
            : undefined
    };
}
exports.resolveBuiltinsOptions = resolveBuiltinsOptions;
function resolveMinifyOptions(builtins, optimization) {
    var _a;
    const disable_minify = !optimization.minimize ||
        ((_a = optimization.minimizer) === null || _a === void 0 ? void 0 : _a.some(item => item !== "..."));
    if (disable_minify) {
        return undefined;
    }
    return {
        passes: 1,
        dropConsole: false,
        pureFuncs: [],
        ...builtins.minifyOptions
    };
}
exports.resolveMinifyOptions = resolveMinifyOptions;
//# sourceMappingURL=builtins.js.map