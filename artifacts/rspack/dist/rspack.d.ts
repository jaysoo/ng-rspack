/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import { RspackOptions } from "./config";
import { Compiler } from "./compiler";
import { Stats } from "./stats";
import { MultiCompiler, MultiRspackOptions } from "./multiCompiler";
import { Callback } from "tapable";
import MultiStats from "./multiStats";
declare function createMultiCompiler(options: MultiRspackOptions): MultiCompiler;
declare function createCompiler(userOptions: RspackOptions): Compiler;
declare function rspack(options: MultiRspackOptions, callback?: Callback<Error, MultiStats>): MultiCompiler;
declare function rspack(options: RspackOptions, callback?: Callback<Error, Stats>): Compiler;
declare function rspack(options: MultiRspackOptions | RspackOptions, callback?: Callback<Error, MultiStats | Stats>): MultiCompiler | Compiler;
export { rspack, createCompiler, createMultiCompiler };
export default rspack;
//# sourceMappingURL=rspack.d.ts.map