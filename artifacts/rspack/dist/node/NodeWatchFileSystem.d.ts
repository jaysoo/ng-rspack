/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/node/NodeWatchFileSystem.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
import Watchpack, { WatchOptions } from "watchpack";
import { FileSystemInfoEntry, Watcher, WatchFileSystem } from "../util/fs";
export default class NodeWatchFileSystem implements WatchFileSystem {
    inputFileSystem: any;
    watcherOptions: WatchOptions;
    watcher: Watchpack;
    constructor(inputFileSystem: any);
    watch(files: Iterable<string>, directories: Iterable<string>, missing: Iterable<string>, startTime: number, options: WatchOptions, callback: (error: Error, fileTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">, contextTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">, changedFiles: Set<string>, removedFiles: Set<string>) => void, callbackUndelayed: (fileName: string, changeTime: number) => void): Watcher;
}
//# sourceMappingURL=NodeWatchFileSystem.d.ts.map