"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/ConcurrentCompilationError.js
 *
 * MIT Licensed
 * Author Maksim Nazarjev @acupofspirt
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ConcurrentCompilationError extends Error {
    constructor() {
        super();
        this.name = "ConcurrentCompilationError";
        this.message =
            "You ran rspack twice. Each instance only supports a single concurrent compilation at a time.";
    }
}
exports.default = ConcurrentCompilationError;
//# sourceMappingURL=ConcurrentCompilationError.js.map