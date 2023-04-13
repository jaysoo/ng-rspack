"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const none = (chunks) => chunks;
const auto = none;
const manual = (entryPointNames, compilation, htmlWebpackPluginOptions) => {
    const chunks = htmlWebpackPluginOptions.chunks;
    if (!Array.isArray(chunks)) {
        return entryPointNames;
    }
    // Remove none existing entries from
    // htmlWebpackPluginOptions.chunks
    return chunks.filter(entryPointName => {
        return compilation.entrypoints.has(entryPointName);
    });
};
const chunkSorter = {
    none,
    auto,
    manual
};
exports.default = chunkSorter;
//# sourceMappingURL=chunkSorter.js.map