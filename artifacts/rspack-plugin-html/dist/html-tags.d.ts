/**
 * The following code is modified based on
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/lib/html-tags.js
 *
 * MIT Licensed
 * Author Jan Nicklas
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/jantimon/html-webpack-plugin/blob/d5ce5a8f2d12a2450a65ec51c285dd54e36cd921/LICENSE
 */
import { HtmlTagObject } from "./index";
/**
 * Turn a tag definition into a html string
 */
export declare function htmlTagObjectToString(tagDefinition: HtmlTagObject, xhtml: boolean): string;
/**
 * Static helper to create a tag object to be get injected into the dom
 */
export declare function createHtmlTagObject(tagName: string, attributes: {
    [attributeName: string]: string | boolean | null | undefined;
}, innerHTML: string, meta: {
    [attributeName: string]: string | boolean | null | undefined;
}): {
    tagName: string;
    voidTag: boolean;
    attributes: {
        [attributeName: string]: string | boolean;
    };
    meta: {
        [attributeName: string]: string | boolean;
    };
    innerHTML: string;
};
/**
 * The `HtmlTagArray Array with a custom `.toString()` method.
 *
 * This allows the following:
 * ```
 *   const tags = HtmlTagArray.from([tag1, tag2]);
 *   const scriptTags = tags.filter((tag) => tag.tagName === 'script');
 *   const html = scriptTags.toString();
 * ```
 *
 * Or inside a string literal:
 * ```
 *   const tags = HtmlTagArray.from([tag1, tag2]);
 *   const html = `<html><body>${tags.filter((tag) => tag.tagName === 'script')}</body></html>`;
 * ```
 *
 */
export declare class HtmlTagArray extends Array {
    toString(): string;
}
//# sourceMappingURL=html-tags.d.ts.map