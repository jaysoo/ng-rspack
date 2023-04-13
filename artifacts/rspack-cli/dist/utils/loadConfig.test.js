"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadConfig_1 = require("./loadConfig");
const path_1 = require("path");
describe("loadRspackConfig", () => {
    it("should throw an error when config file does not exist", async () => {
        await expect((0, loadConfig_1.loadRspackConfig)({
            config: (0, path_1.resolve)(__dirname, ".", "./non-existent-config.js")
        })
        // 	@ts-ignore
        ).rejects.toThrow("config file");
    });
    it("should load test config file", async () => {
        const config = await (0, loadConfig_1.loadRspackConfig)({
            config: (0, path_1.resolve)(__dirname, ".", "test.rspack.config.js")
        });
        expect(config).toBeDefined();
    });
});
//# sourceMappingURL=loadConfig.test.js.map