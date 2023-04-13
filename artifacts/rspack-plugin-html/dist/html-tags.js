"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTagArray = exports.createHtmlTagObject = exports.htmlTagObjectToString = void 0;
/**
 * Turn a tag definition into a html string
 */
function htmlTagObjectToString(tagDefinition, xhtml) {
    const attributes = Object.keys(tagDefinition.attributes || {})
        .filter(function (attributeName) {
        return (tagDefinition.attributes[attributeName] === "" ||
            tagDefinition.attributes[attributeName]);
    })
        .map(function (attributeName) {
        if (tagDefinition.attributes[attributeName] === true) {
            return xhtml
                ? attributeName + '="' + attributeName + '"'
                : attributeName;
        }
        return (attributeName + '="' + tagDefinition.attributes[attributeName] + '"');
    });
    return ("<" +
        [tagDefinition.tagName].concat(attributes).join(" ") +
        (tagDefinition.voidTag && xhtml ? "/" : "") +
        ">" +
        (tagDefinition.innerHTML || "") +
        (tagDefinition.voidTag ? "" : "</" + tagDefinition.tagName + ">"));
}
exports.htmlTagObjectToString = htmlTagObjectToString;
/**
 * All html tag elements which must not contain innerHTML
 * @see https://www.w3.org/TR/html5/syntax.html#void-elements
 */
const voidTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];
/**
 * Static helper to create a tag object to be get injected into the dom
 */
function createHtmlTagObject(tagName, attributes, innerHTML, meta) {
    return {
        tagName: tagName,
        voidTag: voidTags.indexOf(tagName) !== -1,
        attributes: attributes || {},
        meta: meta || {},
        innerHTML: innerHTML
    };
}
exports.createHtmlTagObject = createHtmlTagObject;
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
class HtmlTagArray extends Array {
    toString() {
        return this.join("");
    }
}
exports.HtmlTagArray = HtmlTagArray;
//# sourceMappingURL=html-tags.js.map