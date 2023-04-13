/**
 * The following code is modified based on
 * https://github.com/webpack/webpack-dev-server/blob/b0f15ace0123c125d5870609ef4691c141a6d187/client-src/utils/reloadApp.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack-dev-server/blob/b0f15ace0123c125d5870609ef4691c141a6d187/LICENSE
 */
import type { RspackOptionsNormalized } from "@rspack/core";
interface Status {
    isUnloading: boolean;
    currentHash: string;
    previousHash: string[];
}
export declare function reloadApp({ liveReload, hot }: RspackOptionsNormalized["devServer"], status: Status): void;
export {};
//# sourceMappingURL=reload.d.ts.map