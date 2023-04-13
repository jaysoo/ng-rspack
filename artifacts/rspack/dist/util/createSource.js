"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRawFromSource = exports.createSourceFromRaw = void 0;
const webpack_sources_1 = require("webpack-sources");
const index_1 = require("./index");
function createSourceFromRaw(source) {
    if (source.isRaw) {
        return new webpack_sources_1.RawSource(
        // @ts-expect-error: webpack-sources can accept buffer as source, see: https://github.com/webpack/webpack-sources/blob/9f98066311d53a153fdc7c633422a1d086528027/lib/RawSource.js#L12
        source.isBuffer ? source.source : source.source.toString("utf-8"));
    }
    if (!source.map) {
        return new webpack_sources_1.RawSource(source.source.toString("utf-8"));
    }
    return new webpack_sources_1.CompatSource({
        source() {
            return source.source.toString("utf-8");
        },
        buffer() {
            return source.source;
        },
        map(_) {
            if (source.map) {
                return JSON.parse(source.map.toString("utf-8"));
            }
            return null;
        }
    });
}
exports.createSourceFromRaw = createSourceFromRaw;
function createRawFromSource(source) {
    var _a, _b, _c;
    const sourceSource = source.source();
    const isBuffer = Buffer.isBuffer(sourceSource);
    if (source instanceof webpack_sources_1.RawSource) {
        return {
            source: source.buffer(),
            isRaw: true,
            isBuffer
        };
    }
    const buffer = (_b = (_a = source.buffer) === null || _a === void 0 ? void 0 : _a.call(source)) !== null && _b !== void 0 ? _b : (isBuffer
        ? sourceSource
        : sourceSource instanceof ArrayBuffer
            ? arrayBufferToBuffer(sourceSource)
            : Buffer.from(sourceSource));
    const map = JSON.stringify((_c = source.map) === null || _c === void 0 ? void 0 : _c.call(source, {
        columns: true
    }));
    return {
        source: buffer,
        map: (0, index_1.isNil)(map) ? map : Buffer.from(map),
        isRaw: false,
        isBuffer
    };
}
exports.createRawFromSource = createRawFromSource;
function arrayBufferToBuffer(ab) {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
//# sourceMappingURL=createSource.js.map