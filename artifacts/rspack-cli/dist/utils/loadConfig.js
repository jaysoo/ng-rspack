"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRspackConfig = void 0;
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const fs_1 = __importDefault(require("fs"));
const supportedExtensions = [".js", ".ts"];
const defaultConfig = "rspack.config";
const defaultEntry = "src/index";
async function loadRspackConfig(options) {
    let loadedConfig;
    // if we pass config paras
    if (options.config) {
        const resolvedConfigPath = path_1.default.resolve(process.cwd(), options.config);
        if (!fs_1.default.existsSync(resolvedConfigPath)) {
            throw new Error(`config file "${resolvedConfigPath}" not exists`);
        }
        loadedConfig = await requireWithAdditionalExtension(resolvedConfigPath);
    }
    else {
        let defaultConfigPath = findFileWithSupportedExtensions(path_1.default.resolve(process.cwd(), defaultConfig));
        if (defaultConfigPath != null) {
            loadedConfig = await requireWithAdditionalExtension(defaultConfigPath);
        }
        else {
            let entry = {};
            if (options.entry) {
                entry = {
                    main: options.entry.map(x => path_1.default.resolve(process.cwd(), x))[0] // Fix me when entry supports array
                };
            }
            else {
                const defaultEntryBase = path_1.default.resolve(process.cwd(), defaultEntry);
                const defaultEntryPath = findFileWithSupportedExtensions(defaultEntryBase) ||
                    defaultEntryBase + ".js"; // default entry is js
                entry = {
                    main: defaultEntryPath
                };
            }
            loadedConfig = {
                entry
            };
        }
    }
    return loadedConfig;
}
exports.loadRspackConfig = loadRspackConfig;
// takes a basePath like `webpack.config`, return `webpack.config.{js,ts}` if
// exists. returns null if none of them exists
function findFileWithSupportedExtensions(basePath) {
    for (const extension of supportedExtensions) {
        if (fs_1.default.existsSync(basePath + extension)) {
            return basePath + extension;
        }
    }
    return null;
}
let hasRegisteredTS = false;
async function requireWithAdditionalExtension(resolvedPath) {
    if (resolvedPath.endsWith("ts") && !hasRegisteredTS) {
        hasRegisteredTS = true;
        let tsNode;
        try {
            tsNode = require("ts-node");
        }
        catch (e) {
            throw new Error("`ts-node` is required to use TypeScript configuration.");
        }
        tsNode.register({ transpileOnly: true });
    }
    let loadedConfig;
    if (resolvedPath.endsWith("ts")) {
        loadedConfig = require(resolvedPath);
    }
    else {
        // dynamic import can handle both cjs & mjs
        const fileUrl = (0, url_1.pathToFileURL)(resolvedPath).href;
        loadedConfig = (await import(fileUrl)).default;
    }
    return loadedConfig;
}
//# sourceMappingURL=loadConfig.js.map