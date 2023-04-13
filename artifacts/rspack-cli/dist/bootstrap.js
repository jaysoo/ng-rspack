"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = void 0;
const rspack_cli_1 = require("./rspack-cli");
async function runCLI(argv) {
    const cli = new rspack_cli_1.RspackCLI();
    await cli.run(argv);
}
exports.runCLI = runCLI;
//# sourceMappingURL=bootstrap.js.map