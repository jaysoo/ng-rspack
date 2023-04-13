"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveSwcPlugin = void 0;
const path_1 = __importDefault(require("path"));
class ResolveSwcPlugin {
    apply(compiler) {
        const swcPath = path_1.default.dirname(require.resolve("@swc/helpers/package.json"));
        const refreshPath = path_1.default.dirname(require.resolve("react-refresh"));
        // redirect @swc/helpers to rspack, so user don't have to manual install it
        compiler.options.resolve.alias = {
            "@swc/helpers": swcPath,
            "react-refresh": refreshPath,
            ...compiler.options.resolve.alias
        };
    }
}
exports.ResolveSwcPlugin = ResolveSwcPlugin;
//# sourceMappingURL=ResolveSwcPlugin.js.map