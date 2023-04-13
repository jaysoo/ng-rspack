import type { InfrastructureLogging } from "../config";
import type { Compiler } from "..";
export interface NodeEnvironmentPluginOptions {
    infrastructureLogging: InfrastructureLogging;
}
export default class NodeEnvironmentPlugin {
    options: NodeEnvironmentPluginOptions;
    constructor(options: NodeEnvironmentPluginOptions);
    apply(compiler: Compiler): void;
}
//# sourceMappingURL=NodeEnvironmentPlugin.d.ts.map