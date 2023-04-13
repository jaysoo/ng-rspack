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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.defaultTemplateCompiler = void 0;
/**
 * The following code is modified based on
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/index.js
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/lib/loader.js
 *
 * MIT Licensed
 * Author Jan Nicklas
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/LICENSE
 */
const vm_1 = __importDefault(require("vm"));
exports.defaultTemplateCompiler = {
    async compile(content, options) {
        const template = (await Promise.resolve().then(() => __importStar(require("lodash.template")))).default(content, {
            interpolate: /<%=([\s\S]+?)%>/g,
            variable: "data",
            ...options
        });
        return `function template(templateParams) { with(templateParams) { return (${template.source})(); } }\ntemplate`;
    },
    options: {}
};
/**
 * eval js code to js function or js string.
 */
async function evaluate(compiled, publicPath, templateFilename) {
    if (!compiled) {
        return Promise.reject(new Error("The templateCompiler didn't provide a compiled result"));
    }
    const vmContext = vm_1.default.createContext({
        ...global,
        process,
        HTML_WEBPACK_PLUGIN: true,
        require: require,
        htmlWebpackPluginPublicPath: publicPath,
        URL: require("url").URL,
        __filename: templateFilename
    });
    const vmScript = new vm_1.default.Script(compiled, { filename: templateFilename });
    // Evaluate code and cast to string
    let newSource;
    try {
        newSource = vmScript.runInContext(vmContext);
    }
    catch (e) {
        return Promise.reject(e);
    }
    return typeof newSource === "string" || typeof newSource === "function"
        ? Promise.resolve(newSource)
        : Promise.reject(new Error('The compiled template "' +
            templateFilename +
            "\" didn't return html."));
}
exports.evaluate = evaluate;
//# sourceMappingURL=template.js.map