/**
 * The following code is modified based on
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/lib/hooks.js
 *
 * MIT Licensed
 * Author Jan Nicklas
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/LICENSE
 */
import { Compilation } from "@rspack/core";
import { AsyncSeriesWaterfallHook } from "tapable";
import HTMLRspackPlugin, { HtmlTagObject } from "./index";
export type HtmlRspackPluginHooks = ReturnType<typeof createHtmlRspackPluginHooks>;
export declare function getHtmlRspackPluginHooks(compilation: Compilation): {
    beforeAssetTagGeneration: AsyncSeriesWaterfallHook<{
        assets: {
            publicPath: string;
            js: string[];
            css: string[];
            favicon?: string;
            manifest?: string;
        };
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    alterAssetTags: AsyncSeriesWaterfallHook<{
        assetTags: {
            scripts: HtmlTagObject[];
            styles: HtmlTagObject[];
            meta: HtmlTagObject[];
        };
        publicPath: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    alterAssetTagGroups: AsyncSeriesWaterfallHook<{
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
        publicPath: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    afterTemplateExecution: AsyncSeriesWaterfallHook<{
        html: string;
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    beforeEmit: AsyncSeriesWaterfallHook<{
        html: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    afterEmit: AsyncSeriesWaterfallHook<{
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
};
declare function createHtmlRspackPluginHooks(): {
    beforeAssetTagGeneration: AsyncSeriesWaterfallHook<{
        assets: {
            publicPath: string;
            js: string[];
            css: string[];
            favicon?: string | undefined;
            manifest?: string | undefined;
        };
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    alterAssetTags: AsyncSeriesWaterfallHook<{
        assetTags: {
            scripts: HtmlTagObject[];
            styles: HtmlTagObject[];
            meta: HtmlTagObject[];
        };
        publicPath: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    alterAssetTagGroups: AsyncSeriesWaterfallHook<{
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
        publicPath: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    afterTemplateExecution: AsyncSeriesWaterfallHook<{
        html: string;
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    beforeEmit: AsyncSeriesWaterfallHook<{
        html: string;
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
    afterEmit: AsyncSeriesWaterfallHook<{
        outputName: string;
        plugin: HTMLRspackPlugin;
    }, import("tapable").UnsetAdditionalOptions>;
};
export {};
//# sourceMappingURL=hooks.d.ts.map