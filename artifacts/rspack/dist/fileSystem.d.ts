export interface ThreadsafeWritableNodeFS {
    writeFile: (...args: any[]) => any;
    mkdir: (...args: any[]) => any;
    mkdirp: (...args: any[]) => any;
}
declare function createThreadsafeNodeFSFromRaw(fs: typeof import("fs")): ThreadsafeWritableNodeFS;
export { createThreadsafeNodeFSFromRaw };
//# sourceMappingURL=fileSystem.d.ts.map