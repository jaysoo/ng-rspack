/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/Watching.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import { Callback } from "tapable";
import type { Compiler } from ".";
import { Stats } from ".";
import { WatchOptions } from "./config";
import { Watcher } from "./util/fs";
declare class Watching {
    #private;
    watcher?: Watcher;
    pausedWatcher?: Watcher;
    compiler: Compiler;
    handler: (error?: Error, stats?: Stats) => void;
    callbacks: Callback<Error, void>[];
    watchOptions: WatchOptions;
    lastWatcherStartTime: number;
    running: boolean;
    blocked: boolean;
    isBlocked?: () => boolean;
    onChange?: () => void;
    onInvalid?: () => void;
    invalid: boolean;
    startTime?: number;
    suspended: boolean;
    constructor(compiler: Compiler, watchOptions: WatchOptions, handler: (error?: Error, stats?: Stats) => void);
    watch(files: Iterable<string>, dirs: Iterable<string>, missing: Iterable<string>): void;
    close(callback?: () => void): void;
    invalidate(callback?: Callback<Error, void>): void;
    /**
     * The reason why this is _done instead of #done, is that in Webpack,
     * it will rewrite this function to another function
     */
    private _done;
    suspend(): void;
    resume(): void;
}
export default Watching;
//# sourceMappingURL=watching.d.ts.map