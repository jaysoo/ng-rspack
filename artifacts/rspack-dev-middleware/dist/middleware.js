"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRspackMemoryAssets = void 0;
const path_1 = require("path");
const mime_types_1 = __importDefault(require("mime-types"));
const url_1 = require("url");
function getRspackMemoryAssets(compiler, rdm) {
    const publicPath = compiler.options.output.publicPath
        ? compiler.options.output.publicPath.replace(/\/$/, "") + "/"
        : "/";
    return function (req, res, next) {
        var _a;
        const { method, url } = req;
        if (method !== "GET") {
            return next();
        }
        // css hmr will append query string, so here need to remove query string
        const path = (0, url_1.parse)(url).pathname;
        // asset name is not start with /, so path need to slice 1
        const filename = path.startsWith(publicPath)
            ? path.slice(publicPath.length)
            : path.slice(1);
        let buffer = (_a = compiler.getAsset(filename)) !== null && _a !== void 0 ? _a : (() => {
            const { index } = rdm.context.options;
            const indexValue = typeof index === "undefined" || typeof index === "boolean"
                ? "index.html"
                : index;
            return compiler.getAsset(filename + indexValue);
        })();
        if (!buffer) {
            return next();
        }
        let contentType;
        if (filename === "") {
            contentType = "text/html; charset=utf-8";
        }
        else {
            contentType =
                mime_types_1.default.contentType((0, path_1.extname)(path)) || "text/plain; charset=utf-8";
        }
        res.setHeader("Content-Type", contentType);
        res.end(buffer);
    };
}
exports.getRspackMemoryAssets = getRspackMemoryAssets;
//# sourceMappingURL=middleware.js.map