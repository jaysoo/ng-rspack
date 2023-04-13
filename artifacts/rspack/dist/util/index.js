"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asArray = exports.indent = exports.concatErrorMsgAndStack = exports.isPromiseLike = exports.isNil = exports.mapValues = void 0;
function mapValues(record, fn) {
    return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, fn(value)]));
}
exports.mapValues = mapValues;
function isNil(value) {
    return value === null || value === undefined;
}
exports.isNil = isNil;
function isPromiseLike(value) {
    return (typeof value === "object" &&
        value !== null &&
        typeof value.then === "function");
}
exports.isPromiseLike = isPromiseLike;
function concatErrorMsgAndStack(err) {
    return `${err.message}${err.stack ? `\n${err.stack}` : ""}`;
}
exports.concatErrorMsgAndStack = concatErrorMsgAndStack;
function indent(str, prefix) {
    const rem = str.replace(/\n([^\n])/g, "\n" + prefix + "$1");
    return prefix + rem;
}
exports.indent = indent;
function asArray(item) {
    return Array.isArray(item) ? item : [item];
}
exports.asArray = asArray;
//# sourceMappingURL=index.js.map