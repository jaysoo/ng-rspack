import yargs from "yargs";
export declare const commonOptions: (yargs: yargs.Argv<{}>) => yargs.Argv<yargs.Omit<{
    entry: string[];
}, "config" | "mode" | "watch" | "env" | "node-env" | "devtool" | "configName"> & yargs.InferredOptionTypes<{
    config: {
        g: boolean;
        type: "string";
        describe: string;
        alias: string;
    };
    mode: {
        type: "string";
        describe: string;
    };
    watch: {
        type: "boolean";
        default: boolean;
        describe: string;
    };
    env: {
        type: "array";
        string: true;
        describe: string;
    };
    "node-env": {
        string: true;
        describe: string;
    };
    devtool: {
        type: "boolean";
        default: boolean;
        describe: string;
    };
    configName: {
        type: "array";
        string: true;
        describe: string;
    };
}>>;
export declare function normalizeEnv(argv: any): void;
//# sourceMappingURL=options.d.ts.map