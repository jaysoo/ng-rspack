"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChunkGroup_inner;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkGroup = void 0;
class ChunkGroup {
    constructor(inner) {
        _ChunkGroup_inner.set(this, void 0);
        __classPrivateFieldSet(this, _ChunkGroup_inner, inner, "f");
    }
    getFiles() {
        const files = new Set();
        for (const chunk of __classPrivateFieldGet(this, _ChunkGroup_inner, "f").chunks) {
            for (const file of chunk.files) {
                files.add(file);
            }
        }
        return Array.from(files);
    }
}
exports.ChunkGroup = ChunkGroup;
_ChunkGroup_inner = new WeakMap();
//# sourceMappingURL=chunk_group.js.map