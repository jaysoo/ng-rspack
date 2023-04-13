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
exports.BuildCommand = void 0;
const fs = __importStar(require("fs"));
const options_1 = require("../utils/options");
class BuildCommand {
    async apply(cli) {
        cli.program.command(["build [entry..]", "$0", "bundle", "b"], "run the rspack build", yargs => (0, options_1.commonOptions)(yargs).options({
            analyze: {
                type: "boolean",
                default: false,
                describe: "analyze"
            },
            json: {
                describe: "emit stats json"
            }
        }), async (options) => {
            const logger = cli.getLogger();
            let createJsonStringifyStream;
            if (options.json) {
                const jsonExt = await import("@discoveryjs/json-ext");
                createJsonStringifyStream = jsonExt.stringifyStream;
            }
            const callback = (error, stats) => {
                if (error) {
                    logger.error(error);
                    process.exit(2);
                }
                if (stats && stats.hasErrors()) {
                    process.exitCode = 1;
                }
                if (!compiler || !stats) {
                    return;
                }
                const statsOptions = cli.isMultipleCompiler(compiler)
                    ? {
                        children: compiler.compilers.map(compiler => compiler.options ? compiler.options.stats : undefined)
                    }
                    : compiler.options
                        ? compiler.options.stats
                        : undefined;
                if (options.json && createJsonStringifyStream) {
                    const handleWriteError = error => {
                        logger.error(error);
                        process.exit(2);
                    };
                    if (options.json === true) {
                        createJsonStringifyStream(stats.toJson(statsOptions))
                            .on("error", handleWriteError)
                            .pipe(process.stdout)
                            .on("error", handleWriteError)
                            .on("close", () => process.stdout.write("\n"));
                    }
                    else if (typeof options.json === "string") {
                        createJsonStringifyStream(stats.toJson(statsOptions))
                            .on("error", handleWriteError)
                            .pipe(fs.createWriteStream(options.json))
                            .on("error", handleWriteError)
                            // Use stderr to logging
                            .on("close", () => {
                            process.stderr.write(`[rspack-cli] ${cli.colors.green(`stats are successfully stored as json to ${options.json}`)}\n`);
                        });
                    }
                }
                else {
                    const printedStats = stats.toString(statsOptions);
                    // Avoid extra empty line when `stats: 'none'`
                    if (printedStats) {
                        logger.raw(printedStats);
                    }
                }
            };
            let rspackOptions = { ...options, argv: { ...options } };
            const errorHandler = (err, Stats) => {
                callback(err, Stats);
            };
            const compiler = await cli.createCompiler(rspackOptions, "production", errorHandler);
            if (cli.isWatch(compiler)) {
                return;
            }
            else {
                compiler.run(errorHandler);
            }
        });
    }
}
exports.BuildCommand = BuildCommand;
//# sourceMappingURL=build.js.map