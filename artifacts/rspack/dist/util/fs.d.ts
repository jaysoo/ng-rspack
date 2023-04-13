import { WatchOptions } from "../config";
export interface Watcher {
    close(): void;
    pause(): void;
    getAggregatedChanges?(): Set<string>;
    getAggregatedRemovals?(): Set<string>;
    getFileTimeInfoEntries?(): Map<string, FileSystemInfoEntry | "ignore">;
    getContextTimeInfoEntries?(): Map<string, FileSystemInfoEntry | "ignore">;
    getInfo(): WatcherInfo;
}
export interface WatcherInfo {
    changes: Set<string>;
    removals: Set<string>;
    fileTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">;
    contextTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">;
}
export interface FileSystemInfoEntry {
    safeTime: number;
    timestamp?: number;
}
export interface WatchFileSystem {
    watch(files: Iterable<string>, directories: Iterable<string>, missing: Iterable<string>, startTime: number, options: WatchOptions, callback: (error: Error | null, fileTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">, contextTimeInfoEntries: Map<string, FileSystemInfoEntry | "ignore">, changedFiles: Set<string>, removedFiles: Set<string>) => void, callbackUndelayed: (fileName: string, changeTime: number) => void): Watcher;
}
//# sourceMappingURL=fs.d.ts.map