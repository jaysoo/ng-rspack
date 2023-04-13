"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHtmlRspackPluginHooks = void 0;
const tapable_1 = require("tapable");
const htmlRspackPluginHooksMap = new WeakMap();
function getHtmlRspackPluginHooks(compilation) {
    let hooks = htmlRspackPluginHooksMap.get(compilation);
    // Setup the hooks only once
    if (hooks === undefined) {
        hooks = createHtmlRspackPluginHooks();
        htmlRspackPluginHooksMap.set(compilation, hooks);
    }
    return hooks;
}
exports.getHtmlRspackPluginHooks = getHtmlRspackPluginHooks;
function createHtmlRspackPluginHooks() {
    return {
        beforeAssetTagGeneration: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"]),
        alterAssetTags: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"]),
        alterAssetTagGroups: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"]),
        afterTemplateExecution: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"]),
        beforeEmit: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"]),
        afterEmit: new tapable_1.AsyncSeriesWaterfallHook(["pluginArgs"])
    };
}
//# sourceMappingURL=hooks.js.map