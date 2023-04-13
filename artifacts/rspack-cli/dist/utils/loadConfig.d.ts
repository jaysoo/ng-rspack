import { RspackCLIOptions } from "../types";
import { RspackOptions, MultiRspackOptions } from "@rspack/core";
export type LoadedRspackConfig = undefined | RspackOptions | MultiRspackOptions | ((env: Record<string, any>, argv: Record<string, any>) => RspackOptions | MultiRspackOptions);
export declare function loadRspackConfig(options: RspackCLIOptions): Promise<LoadedRspackConfig>;
//# sourceMappingURL=loadConfig.d.ts.map