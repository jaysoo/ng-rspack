"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const memoize = (fn) => {
    let cache = false;
    // @ts-expect-error
    let result = undefined;
    return () => {
        if (cache) {
            // @ts-expect-error
            return result;
        }
        else {
            result = fn();
            cache = true;
            // Allow to clean up memory for fn
            // and all dependent resources
            // @ts-expect-error
            fn = undefined;
            return result;
        }
    };
};
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map