"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeCommand = void 0;
const dev_server_1 = require("@rspack/dev-server");
const options_1 = require("../utils/options");
class ServeCommand {
    async apply(cli) {
        cli.program.command(["serve [entry..]", "server", "s"], "run the rspack dev server.", options_1.commonOptions, async (options) => {
            var _a, _b, _c, _d;
            var _e, _f;
            const rspackOptions = {
                ...options,
                argv: {
                    ...options
                }
            };
            const compiler = await cli.createCompiler(rspackOptions, "development");
            const compilers = cli.isMultipleCompiler(compiler)
                ? compiler.compilers
                : [compiler];
            const possibleCompilers = compilers.filter((compiler) => compiler.options.devServer);
            const usedPorts = [];
            const servers = [];
            /**
             * Webpack uses an Array of compilerForDevServer,
             * however according to it's doc https://webpack.js.org/configuration/dev-server/#devserverhot
             * It should use only the first one
             *
             * Choose the one for configure devServer
             */
            const compilerForDevServer = possibleCompilers.length > 0 ? possibleCompilers[0] : compilers[0];
            /**
             * Rspack relies on devServer.hot to enable HMR
             */
            for (const compiler of compilers) {
                const devServer = ((_a = (_e = compiler.options).devServer) !== null && _a !== void 0 ? _a : (_e.devServer = {}));
                (_b = devServer.hot) !== null && _b !== void 0 ? _b : (devServer.hot = true);
                if (devServer.client !== false) {
                    if (devServer.client === true || devServer.client == null) {
                        devServer.client = {};
                    }
                    devServer.client = {
                        overlay: {
                            errors: true,
                            warnings: false
                        },
                        ...devServer.client
                    };
                }
            }
            const result = ((_c = (_f = compilerForDevServer.options).devServer) !== null && _c !== void 0 ? _c : (_f.devServer = {}));
            /**
             * Enable this to tell Rspack that we need to enable React Refresh by default
             */
            (_d = result.hot) !== null && _d !== void 0 ? _d : (result.hot = true);
            if (result.client !== false) {
                if (result.client === true || result.client == null) {
                    result.client = {};
                }
                result.client = {
                    overlay: {
                        errors: true,
                        warnings: false
                    },
                    ...result.client
                };
            }
            const devServerOptions = result;
            if (devServerOptions.port) {
                const portNumber = Number(devServerOptions.port);
                if (usedPorts.find(port => portNumber === port)) {
                    throw new Error("Unique ports must be specified for each devServer option in your rspack configuration. Alternatively, run only 1 devServer config using the --config-name flag to specify your desired config.");
                }
                usedPorts.push(portNumber);
            }
            try {
                const server = new dev_server_1.RspackDevServer(devServerOptions, compiler);
                await server.start();
                servers.push(server);
            }
            catch (error) {
                const logger = cli.getLogger();
                logger.error(error);
                process.exit(2);
            }
        });
    }
}
exports.ServeCommand = ServeCommand;
//# sourceMappingURL=serve.js.map