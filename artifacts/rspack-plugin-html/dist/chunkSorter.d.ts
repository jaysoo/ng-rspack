/**
 * The following code is modified based on
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/lib/chunksorter.js
 *
 * MIT Licensed
 * Author Jan Nicklas
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/LICENSE
 */
import { Compilation } from "@rspack/core";
import { ProcessedOptions } from ".";
declare const chunkSorter: {
    none: (chunks: string[]) => string[];
    auto: (chunks: string[]) => string[];
    manual: (entryPointNames: string[], compilation: Compilation, htmlWebpackPluginOptions: ProcessedOptions) => string[];
};
export default chunkSorter;
//# sourceMappingURL=chunkSorter.d.ts.map