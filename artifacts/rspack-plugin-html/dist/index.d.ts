/**
 * The following code is modified based on
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/index.js
 *
 * MIT Licensed
 * Author Jan Nicklas
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/LICENSE
 */
import type { Compiler, Compilation, RspackPluginInstance } from "@rspack/core";
import type { Options as MinifyOptions } from "html-minifier-terser";
import * as template from "./template";
import { getHtmlRspackPluginHooks } from "./hooks";
import { createHtmlTagObject } from "./html-tags";
export type { HtmlRspackPluginHooks } from "./hooks";
export { defaultTemplateCompiler } from "./template";
export interface Options {
    /**
     * Emit the file only if it was changed.
     * @default true
     */
    cache?: boolean;
    /**
     * List all entries which should be injected
     */
    chunks?: "all" | string[];
    /**
     * Allows to control how chunks should be sorted before they are included to the html.
     * @default 'auto'
     */
    chunksSortMode?: "auto" | "manual" | ((entryNameA: string, entryNameB: string) => number);
    /**
     * List all entries which should not be injected
     */
    excludeChunks?: string[];
    /**
     * Path to the favicon icon
     */
    favicon?: false | string;
    /**
     * The file to write the HTML to.
     * Supports subdirectories eg: `assets/admin.html`
     * [name] will be replaced by the entry name
     * Supports a function to generate the name
     *
     * @default 'index.html'
     */
    filename?: string | ((entryName: string) => string);
    /**
     * By default the public path is set to `auto` - that way the html-webpack-plugin will try
     * to set the publicPath according to the current filename and the webpack publicPath setting
     */
    publicPath?: string | "auto";
    /**
     * If `true` then append a unique `webpack` compilation hash to all included scripts and CSS files.
     * This is useful for cache busting
     */
    hash?: boolean;
    /**
     * Inject all assets into the given `template` or `templateContent`.
     */
    inject?: false | true | "body" | "head";
    /**
     * Set up script loading
     * blocking will result in <script src="..."></script>
     * defer will result in <script defer src="..."></script>
     *
     * @default 'defer'
     */
    scriptLoading?: "blocking" | "defer" | "module";
    /**
     * Inject meta tags
     */
    meta?: false | {
        [name: string]: string | false | {
            [attributeName: string]: string | boolean;
        };
    };
    /**
     * HTML Minification options accepts the following values:
     * - Set to `false` to disable minifcation
     * - Set to `'auto'` to enable minifcation only for production mode
     * - Set to custom minification according to
     * {@link https://github.com/kangax/html-minifier#options-quick-reference}
     */
    minify?: "auto" | boolean | MinifyOptions;
    /**
     * Render errors into the HTML page
     */
    showErrors?: boolean;
    /**
     * The `webpack` require path to the template.
     * @see https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md
     */
    template?: string;
    /**
     * Allow to use a html string instead of reading from a file
     */
    templateContent?: false | string | ((templateParameters: {
        [option: string]: any;
    }) => string | Promise<string>) | Promise<string>;
    /**
     * Compile template to js code.
     */
    templateCompiler?: template.TemplateCompiler;
    /**
     * Allows to overwrite the parameters used in the template
     */
    templateParameters?: false | ((compilation: any, assets: {
        publicPath: string;
        js: Array<string>;
        css: Array<string>;
        manifest?: string;
        favicon?: string;
    }, assetTags: {
        headTags: HtmlTagObject[];
        bodyTags: HtmlTagObject[];
    }, options: ProcessedOptions) => {
        [option: string]: any;
    } | Promise<{
        [option: string]: any;
    }>) | {
        [option: string]: any;
    };
    /**
     * The title to use for the generated HTML document
     */
    title?: string;
    /**
     * Enforce self closing tags e.g. <link />
     */
    xhtml?: boolean;
    /**
     * In addition to the options actually used by this plugin, you can use this hash to pass arbitrary data through
     * to your template.
     */
    [option: string]: any;
}
/**
 * The plugin options after adding default values
 */
export interface ProcessedOptions extends Required<Options> {
    filename: string;
}
/**
 * A tag element according to the HtmlRspackPlugin object notation
 */
export interface HtmlTagObject {
    /**
     * Attributes of the html tag
     * E.g. `{'disabled': true, 'value': 'demo'}`
     */
    attributes: {
        [attributeName: string]: string | boolean | null | undefined;
    };
    /**
     * The tag name e.g. `'div'`
     */
    tagName: string;
    /**
     * The inner HTML
     */
    innerHTML?: string;
    /**
     * Whether this html must not contain innerHTML
     * @see https://www.w3.org/TR/html5/syntax.html#void-elements
     */
    voidTag: boolean;
    /**
     * Meta information about the tag
     * E.g. `{'plugin': 'html-webpack-plugin'}`
     */
    meta: {
        plugin?: string;
        [metaAttributeName: string]: any;
    };
}
export interface AssetTags {
    headTags: HtmlTagObject[];
    bodyTags: HtmlTagObject[];
}
export interface Assets {
    publicPath: string;
    js: string[];
    css: string[];
    manifest?: string;
    favicon?: string;
}
/**
 * The values which are available during template execution
 *
 * Please keep in mind that the `templateParameter` options allows to change them
 */
export interface TemplateParameter {
    compilation: Compilation;
    htmlWebpackPlugin: {
        tags: {
            headTags: HtmlTagObject[];
            bodyTags: HtmlTagObject[];
        };
        files: {
            publicPath: string;
            js: Array<string>;
            css: Array<string>;
            manifest?: string;
            favicon?: string;
        };
        options: Options;
    };
    webpackConfig: any;
}
export default class HtmlRspackPlugin implements RspackPluginInstance {
    name: string;
    userOptions: Options;
    options: ProcessedOptions;
    constructor(options?: Options);
    static getHooks: typeof getHtmlRspackPluginHooks;
    static createHtmlTagObject: typeof createHtmlTagObject;
    apply(compiler: Compiler): void;
}
//# sourceMappingURL=index.d.ts.map