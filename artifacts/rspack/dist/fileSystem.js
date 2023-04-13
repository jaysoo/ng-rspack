"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThreadsafeNodeFSFromRaw = void 0;
function createThreadsafeNodeFSFromRaw(fs) {
    return {
        writeFile: (file, data) => fs.writeFileSync(file, data),
        mkdir: dir => fs.mkdirSync(dir),
        mkdirp: dir => fs.mkdirSync(dir, {
            recursive: true
        })
    };
}
exports.createThreadsafeNodeFSFromRaw = createThreadsafeNodeFSFromRaw;
//# sourceMappingURL=fileSystem.js.map