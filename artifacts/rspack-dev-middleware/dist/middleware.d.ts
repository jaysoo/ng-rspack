import type { Compiler } from "@rspack/core";
import wdm from "webpack-dev-middleware";
import type { RequestHandler } from "express";
export declare function getRspackMemoryAssets(compiler: Compiler, rdm: ReturnType<typeof wdm>): RequestHandler;
//# sourceMappingURL=middleware.d.ts.map