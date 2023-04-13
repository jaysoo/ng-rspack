"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeEnv = exports.commonOptions = void 0;
const commonOptions = (yargs) => {
    return yargs
        .positional("entry", {
        type: "string",
        array: true,
        describe: "entry"
    })
        .options({
        config: {
            g: true,
            type: "string",
            describe: "config file",
            alias: "c"
        },
        mode: { type: "string", describe: "mode" },
        watch: {
            type: "boolean",
            default: false,
            describe: "watch"
        },
        env: {
            type: "array",
            string: true,
            describe: "env passed to config function"
        },
        "node-env": {
            string: true,
            describe: "sets process.env.NODE_ENV to be specified value"
        },
        devtool: {
            type: "boolean",
            default: false,
            describe: "devtool"
        },
        configName: {
            type: "array",
            string: true,
            describe: "Name of the configuration to use."
        }
    });
};
exports.commonOptions = commonOptions;
function normalizeEnv(argv) {
    var _a;
    function parseValue(previous, value) {
        const [allKeys, val] = value.split(/=(.+)/, 2);
        const splitKeys = allKeys.split(/\.(?!$)/);
        let prevRef = previous;
        splitKeys.forEach((someKey, index) => {
            // https://github.com/webpack/webpack-cli/issues/3284
            if (someKey.endsWith("=")) {
                // remove '=' from key
                someKey = someKey.slice(0, -1);
                prevRef[someKey] = undefined;
                return;
            }
            if (!prevRef[someKey]) {
                prevRef[someKey] = {};
            }
            if (typeof prevRef[someKey] === "string") {
                prevRef[someKey] = {};
            }
            if (index === splitKeys.length - 1) {
                if (typeof val === "string") {
                    prevRef[someKey] = val;
                }
                else {
                    prevRef[someKey] = true;
                }
            }
            prevRef = prevRef[someKey];
        });
        return previous;
    }
    const envObj = ((_a = argv.env) !== null && _a !== void 0 ? _a : []).reduce(parseValue, {});
    argv.env = envObj;
}
exports.normalizeEnv = normalizeEnv;
//# sourceMappingURL=options.js.map