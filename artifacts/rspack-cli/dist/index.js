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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.definePlugin = exports.defineConfig = exports.RspackCLI = void 0;
__exportStar(require("./types"), exports);
var rspack_cli_1 = require("./rspack-cli");
Object.defineProperty(exports, "RspackCLI", { enumerable: true, get: function () { return rspack_cli_1.RspackCLI; } });
Object.defineProperty(exports, "defineConfig", { enumerable: true, get: function () { return rspack_cli_1.defineConfig; } });
Object.defineProperty(exports, "definePlugin", { enumerable: true, get: function () { return rspack_cli_1.definePlugin; } });
//# sourceMappingURL=index.js.map