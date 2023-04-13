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
var _Watching_instances, _Watching_invalidReported, _Watching_closeCallbacks, _Watching_initial, _Watching_closed, _Watching_collectedChangedFiles, _Watching_collectedRemovedFiles, _Watching_invalidate, _Watching_go, _Watching_mergeWithCollected;
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Watching {
    constructor(compiler, watchOptions, handler) {
        _Watching_instances.add(this);
        _Watching_invalidReported.set(this, void 0);
        _Watching_closeCallbacks.set(this, void 0);
        _Watching_initial.set(this, void 0);
        _Watching_closed.set(this, void 0);
        _Watching_collectedChangedFiles.set(this, void 0);
        _Watching_collectedRemovedFiles.set(this, void 0);
        this.callbacks = [];
        this.invalid = false;
        __classPrivateFieldSet(this, _Watching_invalidReported, true, "f");
        this.blocked = false;
        this.isBlocked = () => false;
        this.onChange = () => { };
        this.onInvalid = () => { };
        this.compiler = compiler;
        this.running = false;
        __classPrivateFieldSet(this, _Watching_initial, true, "f");
        __classPrivateFieldSet(this, _Watching_closed, false, "f");
        this.watchOptions = watchOptions;
        this.handler = handler;
        this.suspended = false;
        process.nextTick(() => {
            if (__classPrivateFieldGet(this, _Watching_initial, "f"))
                __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_invalidate).call(this);
            __classPrivateFieldSet(this, _Watching_initial, false, "f");
        });
    }
    watch(files, dirs, missing) {
        this.pausedWatcher = undefined;
        this.watcher = this.compiler.watchFileSystem.watch(files, dirs, missing, this.lastWatcherStartTime, this.watchOptions, (err, fileTimeInfoEntries, contextTimeInfoEntries, changedFiles, removedFiles) => {
            if (err) {
                this.compiler.modifiedFiles = undefined;
                this.compiler.removedFiles = undefined;
                return this.handler(err);
            }
            __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_invalidate).call(this, fileTimeInfoEntries, contextTimeInfoEntries, changedFiles, removedFiles);
            // @ts-expect-error
            this.onChange();
        }, (fileName, changeTime) => {
            if (!__classPrivateFieldGet(this, _Watching_invalidReported, "f")) {
                __classPrivateFieldSet(this, _Watching_invalidReported, true, "f");
                this.compiler.hooks.invalid.call(fileName, changeTime);
            }
            // @ts-expect-error
            this.onInvalid();
        });
    }
    close(callback) {
        if (__classPrivateFieldGet(this, _Watching_closeCallbacks, "f")) {
            if (callback) {
                __classPrivateFieldGet(this, _Watching_closeCallbacks, "f").push(callback);
            }
            return;
        }
        const finalCallback = (err) => {
            this.running = false;
            this.compiler.running = false;
            this.compiler.watching = undefined;
            this.compiler.watchMode = false;
            this.compiler.modifiedFiles = undefined;
            this.compiler.removedFiles = undefined;
            // this.compiler.fileTimestamps = undefined;
            // this.compiler.contextTimestamps = undefined;
            // this.compiler.fsStartTime = undefined;
            const shutdown = (err) => {
                this.compiler.hooks.watchClose.call();
                const closeCallbacks = __classPrivateFieldGet(this, _Watching_closeCallbacks, "f");
                __classPrivateFieldSet(this, _Watching_closeCallbacks, undefined, "f");
                // @ts-expect-error
                for (const cb of closeCallbacks)
                    cb(err);
            };
            // TODO: compilation parameter support
            // if (compilation) {
            // 	const logger = compilation.getLogger("webpack.Watching");
            // 	logger.time("storeBuildDependencies");
            // 	this.compiler.cache.storeBuildDependencies(
            // 		compilation.buildDependencies,
            // 		err2 => {
            // 			logger.timeEnd("storeBuildDependencies");
            // 			shutdown(err || err2);
            // 		}
            // 	);
            // } else {
            // 	shutdown(err);
            // }
            // @ts-expect-error
            shutdown(err);
        };
        __classPrivateFieldSet(this, _Watching_closed, true, "f");
        if (this.watcher) {
            this.watcher.close();
            this.watcher = undefined;
        }
        if (this.pausedWatcher) {
            this.pausedWatcher.close();
            this.pausedWatcher = undefined;
        }
        this.compiler.watching = undefined;
        this.compiler.watchMode = false;
        __classPrivateFieldSet(this, _Watching_closeCallbacks, [], "f");
        if (callback) {
            __classPrivateFieldGet(this, _Watching_closeCallbacks, "f").push(callback);
        }
        if (this.running) {
            this.invalid = true;
            this._done = finalCallback;
        }
        else {
            finalCallback();
        }
    }
    invalidate(callback) {
        if (callback) {
            this.callbacks.push(callback);
        }
        if (!__classPrivateFieldGet(this, _Watching_invalidReported, "f")) {
            __classPrivateFieldSet(this, _Watching_invalidReported, true, "f");
            this.compiler.hooks.invalid.call(null, Date.now());
        }
        // @ts-expect-error
        this.onChange();
        __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_invalidate).call(this);
    }
    /**
     * The reason why this is _done instead of #done, is that in Webpack,
     * it will rewrite this function to another function
     */
    _done(error) {
        this.running = false;
        const handleError = (err, cbs) => {
            // @ts-expect-error
            this.compiler.hooks.failed.call(err);
            // this.compiler.cache.beginIdle();
            // this.compiler.idle = true;
            this.handler(err, stats);
            if (!cbs) {
                cbs = this.callbacks;
                this.callbacks = [];
            }
            // @ts-expect-error
            for (const cb of cbs)
                cb(err);
        };
        const cbs = this.callbacks;
        this.callbacks = [];
        this.compiler.compilation.startTime = this.startTime;
        this.compiler.compilation.endTime = Date.now();
        const stats = new _1.Stats(this.compiler.compilation);
        this.startTime = undefined;
        if (error) {
            return handleError(error);
        }
        this.compiler.hooks.done.callAsync(stats, err => {
            if (err)
                return handleError(err, cbs);
            // @ts-expect-error
            this.handler(null, stats);
            process.nextTick(() => {
                if (!__classPrivateFieldGet(this, _Watching_closed, "f")) {
                    this.watch(this.compiler.compilation.fileDependencies, this.compiler.compilation.contextDependencies, this.compiler.compilation.missingDependencies);
                }
            });
            for (const cb of cbs)
                cb(null);
            this.compiler.hooks.afterDone.call(stats);
        });
    }
    suspend() {
        this.suspended = true;
    }
    resume() {
        if (this.suspended) {
            this.suspended = false;
            __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_invalidate).call(this);
        }
    }
}
_Watching_invalidReported = new WeakMap(), _Watching_closeCallbacks = new WeakMap(), _Watching_initial = new WeakMap(), _Watching_closed = new WeakMap(), _Watching_collectedChangedFiles = new WeakMap(), _Watching_collectedRemovedFiles = new WeakMap(), _Watching_instances = new WeakSet(), _Watching_invalidate = function _Watching_invalidate(fileTimeInfoEntries, contextTimeInfoEntries, changedFiles, removedFiles) {
    // @ts-expect-error
    __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_mergeWithCollected).call(this, changedFiles, removedFiles);
    // @ts-expect-error
    if (this.suspended || (this.isBlocked() && (this.blocked = true))) {
        return;
    }
    if (this.running) {
        this.invalid = true;
        return;
    }
    __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_go).call(this, changedFiles, removedFiles);
}, _Watching_go = function _Watching_go(changedFiles, removedFiles) {
    if (this.startTime === undefined)
        this.startTime = Date.now();
    this.running = true;
    if (this.watcher) {
        this.pausedWatcher = this.watcher;
        this.lastWatcherStartTime = Date.now();
        this.watcher.pause();
        this.watcher = undefined;
    }
    else if (!this.lastWatcherStartTime) {
        this.lastWatcherStartTime = Date.now();
    }
    if (changedFiles && removedFiles) {
        __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_mergeWithCollected).call(this, changedFiles, removedFiles);
    }
    else if (this.pausedWatcher) {
        const { changes, removals } = this.pausedWatcher.getInfo();
        __classPrivateFieldGet(this, _Watching_instances, "m", _Watching_mergeWithCollected).call(this, changes, removals);
    }
    const modifiedFiles = (this.compiler.modifiedFiles =
        __classPrivateFieldGet(this, _Watching_collectedChangedFiles, "f"));
    const deleteFiles = (this.compiler.removedFiles =
        __classPrivateFieldGet(this, _Watching_collectedRemovedFiles, "f"));
    __classPrivateFieldSet(this, _Watching_collectedChangedFiles, undefined, "f");
    __classPrivateFieldSet(this, _Watching_collectedRemovedFiles, undefined, "f");
    this.invalid = false;
    __classPrivateFieldSet(this, _Watching_invalidReported, false, "f");
    this.compiler.hooks.watchRun.callAsync(this.compiler, err => {
        if (err)
            return this._done(err);
        const isRebuild = this.compiler.options.devServer && !__classPrivateFieldGet(this, _Watching_initial, "f");
        const onBuild = (err) => {
            if (err)
                return this._done(err);
            // if (this.invalid) return this._done(null);
            // @ts-expect-error
            this._done(null);
        };
        if (isRebuild) {
            this.compiler.rebuild(modifiedFiles, deleteFiles, onBuild);
        }
        else {
            this.compiler.build(onBuild);
        }
    });
}, _Watching_mergeWithCollected = function _Watching_mergeWithCollected(changedFiles, removedFiles) {
    if (!changedFiles)
        return;
    if (!__classPrivateFieldGet(this, _Watching_collectedChangedFiles, "f")) {
        __classPrivateFieldSet(this, _Watching_collectedChangedFiles, new Set(changedFiles), "f");
        __classPrivateFieldSet(this, _Watching_collectedRemovedFiles, new Set(removedFiles), "f");
    }
    else {
        for (const file of changedFiles) {
            __classPrivateFieldGet(this, _Watching_collectedChangedFiles, "f").add(file);
            // @ts-expect-error
            __classPrivateFieldGet(this, _Watching_collectedRemovedFiles, "f").delete(file);
        }
        for (const file of removedFiles) {
            __classPrivateFieldGet(this, _Watching_collectedChangedFiles, "f").delete(file);
            // @ts-expect-error
            __classPrivateFieldGet(this, _Watching_collectedRemovedFiles, "f").add(file);
        }
    }
};
exports.default = Watching;
//# sourceMappingURL=watching.js.map