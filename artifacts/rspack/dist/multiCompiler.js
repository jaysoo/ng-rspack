"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/MultiCompiler.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MultiCompiler_instances, _MultiCompiler_runGraph;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiCompiler = void 0;
const tapable_1 = require("tapable");
const multiStats_1 = __importDefault(require("./multiStats"));
const neo_async_1 = __importDefault(require("neo-async"));
const ArrayQueue_1 = __importDefault(require("./util/ArrayQueue"));
const ConcurrentCompilationError_1 = __importDefault(require("./error/ConcurrentCompilationError"));
const multiWatching_1 = __importDefault(require("./multiWatching"));
class MultiCompiler {
    constructor(compilers, options) {
        _MultiCompiler_instances.add(this);
        if (!Array.isArray(compilers)) {
            compilers = Object.entries(compilers).map(([name, compiler]) => {
                compiler.name = name;
                return compiler;
            });
        }
        this.hooks = {
            /** @type {SyncHook<[MultiStats]>} */
            done: new tapable_1.SyncHook(["stats"]),
            /** @type {MultiHook<SyncHook<[string | null, number]>>} */
            invalid: new tapable_1.MultiHook(compilers.map(c => c.hooks.invalid)),
            /** @type {MultiHook<AsyncSeriesHook<[Compiler]>>} */
            run: new tapable_1.MultiHook(compilers.map(c => c.hooks.run)),
            /** @type {SyncHook<[]>} */
            watchClose: new tapable_1.SyncHook([]),
            /** @type {MultiHook<AsyncSeriesHook<[Compiler]>>} */
            watchRun: new tapable_1.MultiHook(compilers.map(c => c.hooks.watchRun)),
            /** @type {MultiHook<SyncBailHook<[string, string, any[]], true>>} */
            infrastructureLog: new tapable_1.MultiHook(compilers.map(c => c.hooks.infrastructureLog))
        };
        this.compilers = compilers;
        this._options = {
            parallelism: (options === null || options === void 0 ? void 0 : options.parallelism) || Infinity
        };
        this.dependencies = new WeakMap();
        this.running = false;
        const compilerStats = this.compilers.map(() => null);
        let doneCompilers = 0;
        for (let index = 0; index < this.compilers.length; index++) {
            const compiler = this.compilers[index];
            const compilerIndex = index;
            let compilerDone = false;
            compiler.hooks.done.tap("MultiCompiler", stats => {
                if (!compilerDone) {
                    compilerDone = true;
                    doneCompilers++;
                }
                compilerStats[compilerIndex] = stats;
                if (doneCompilers === this.compilers.length) {
                    this.hooks.done.call(new multiStats_1.default(compilerStats));
                }
            });
            compiler.hooks.invalid.tap("MultiCompiler", () => {
                if (compilerDone) {
                    compilerDone = false;
                    doneCompilers--;
                }
            });
        }
    }
    get options() {
        return Object.assign(this.compilers.map(c => c.options), this._options);
    }
    get outputPath() {
        let commonPath = this.compilers[0].outputPath;
        for (const compiler of this.compilers) {
            while (compiler.outputPath.indexOf(commonPath) !== 0 &&
                /[/\\]/.test(commonPath)) {
                commonPath = commonPath.replace(/[/\\][^/\\]*$/, "");
            }
        }
        if (!commonPath && this.compilers[0].outputPath[0] === "/")
            return "/";
        return commonPath;
    }
    get inputFileSystem() {
        throw new Error("Cannot read inputFileSystem of a MultiCompiler");
    }
    get outputFileSystem() {
        throw new Error("Cannot read outputFileSystem of a MultiCompiler");
    }
    get watchFileSystem() {
        throw new Error("Cannot read watchFileSystem of a MultiCompiler");
    }
    get intermediateFileSystem() {
        throw new Error("Cannot read outputFileSystem of a MultiCompiler");
    }
    /**
     * @param {InputFileSystem} value the new input file system
     */
    set inputFileSystem(value) {
        for (const compiler of this.compilers) {
            compiler.inputFileSystem = value;
        }
    }
    /**
     * @param {OutputFileSystem} value the new output file system
     */
    set outputFileSystem(value) {
        for (const compiler of this.compilers) {
            compiler.outputFileSystem = value;
        }
    }
    set watchFileSystem(value) {
        for (const compiler of this.compilers) {
            compiler.watchFileSystem = value;
        }
    }
    /**
     * @param {IntermediateFileSystem} value the new intermediate file system
     */
    set intermediateFileSystem(value) {
        for (const compiler of this.compilers) {
            compiler.intermediateFileSystem = value;
        }
    }
    getInfrastructureLogger(name) {
        return this.compilers[0].getInfrastructureLogger(name);
    }
    /**
     * @param {Compiler} compiler the child compiler
     * @param {string[]} dependencies its dependencies
     * @returns {void}
     */
    setDependencies(compiler, dependencies) {
        this.dependencies.set(compiler, dependencies);
    }
    /**
     * @param {Callback<MultiStats>} callback signals when the validation is complete
     * @returns {boolean} true if the dependencies are valid
     */
    validateDependencies(callback) {
        const edges = new Set();
        const missing = [];
        const targetFound = (compiler) => {
            for (const edge of edges) {
                if (edge.target === compiler) {
                    return true;
                }
            }
            return false;
        };
        // @ts-expect-error
        const sortEdges = (e1, e2) => {
            return (e1.source.name.localeCompare(e2.source.name) ||
                e1.target.name.localeCompare(e2.target.name));
        };
        for (const source of this.compilers) {
            const dependencies = this.dependencies.get(source);
            if (dependencies) {
                for (const dep of dependencies) {
                    const target = this.compilers.find(c => c.name === dep);
                    if (!target) {
                        missing.push(dep);
                    }
                    else {
                        edges.add({
                            source,
                            target
                        });
                    }
                }
            }
        }
        /** @type {string[]} */
        const errors = missing.map(m => `Compiler dependency \`${m}\` not found.`);
        const stack = this.compilers.filter(c => !targetFound(c));
        while (stack.length > 0) {
            const current = stack.pop();
            for (const edge of edges) {
                if (edge.source === current) {
                    edges.delete(edge);
                    const target = edge.target;
                    if (!targetFound(target)) {
                        stack.push(target);
                    }
                }
            }
        }
        if (edges.size > 0) {
            /** @type {string[]} */
            const lines = Array.from(edges)
                .sort(sortEdges)
                .map(edge => `${edge.source.name} -> ${edge.target.name}`);
            lines.unshift("Circular dependency found in compiler dependencies.");
            errors.unshift(lines.join("\n"));
        }
        if (errors.length > 0) {
            const message = errors.join("\n");
            callback(new Error(message));
            return false;
        }
        return true;
    }
    /**
     * @param {WatchOptions|WatchOptions[]} watchOptions the watcher's options
     * @param {Callback<MultiStats>} handler signals when the call finishes
     * @returns {MultiWatching} a compiler watcher
     */
    watch(watchOptions, handler) {
        if (this.running) {
            return handler(new ConcurrentCompilationError_1.default());
        }
        this.running = true;
        if (this.validateDependencies(handler)) {
            const watchings = __classPrivateFieldGet(this, _MultiCompiler_instances, "m", _MultiCompiler_runGraph).call(this, 
            // @ts-expect-error
            (compiler, idx, done, isBlocked, setChanged, setInvalid) => {
                const watching = compiler.watch(
                // @ts-expect-error
                Array.isArray(watchOptions) ? watchOptions[idx] : watchOptions, 
                // @ts-expect-error
                done);
                if (watching) {
                    watching.onInvalid = setInvalid;
                    watching.onChange = setChanged;
                    watching.isBlocked = isBlocked;
                }
                return watching;
            }, (compiler, watching, _done) => {
                if (compiler.watching !== watching)
                    return;
                if (!watching.running)
                    watching.invalidate();
            }, handler);
            // @ts-expect-error
            return new multiWatching_1.default(watchings, this);
        }
        return new multiWatching_1.default([], this);
    }
    run(callback) {
        if (this.running) {
            return callback(new ConcurrentCompilationError_1.default());
        }
        this.running = true;
        if (this.validateDependencies(callback)) {
            __classPrivateFieldGet(this, _MultiCompiler_instances, "m", _MultiCompiler_runGraph).call(this, () => { }, (compiler, _, callback) => compiler.run(callback), (err, stats) => {
                this.running = false;
                if (callback !== undefined) {
                    return callback(err, stats);
                }
            });
        }
    }
    purgeInputFileSystem() {
        for (const compiler of this.compilers) {
            if (compiler.inputFileSystem && compiler.inputFileSystem.purge) {
                compiler.inputFileSystem.purge();
            }
        }
    }
    close(callback) {
        neo_async_1.default.each(this.compilers, (compiler, cb) => {
            compiler.close(cb);
        }, 
        // @ts-expect-error
        callback);
    }
}
exports.MultiCompiler = MultiCompiler;
_MultiCompiler_instances = new WeakSet(), _MultiCompiler_runGraph = function _MultiCompiler_runGraph(setup, run, callback) {
    /** @typedef {{ compiler: Compiler, setupResult: SetupResult, result: Stats, state: "pending" | "blocked" | "queued" | "starting" | "running" | "running-outdated" | "done", children: Node[], parents: Node[] }} Node */
    // State transitions for nodes:
    // -> blocked (initial)
    // blocked -> starting [running++] (when all parents done)
    // queued -> starting [running++] (when processing the queue)
    // starting -> running (when run has been called)
    // running -> done [running--] (when compilation is done)
    // done -> pending (when invalidated from file change)
    // pending -> blocked [add to queue] (when invalidated from aggregated changes)
    // done -> blocked [add to queue] (when invalidated, from parent invalidation)
    // running -> running-outdated (when invalidated, either from change or parent invalidation)
    // running-outdated -> blocked [running--] (when compilation is done)
    const nodes = this.compilers.map(compiler => ({
        compiler,
        setupResult: undefined,
        result: undefined,
        state: "blocked",
        children: [],
        parents: []
    }));
    // only useful for MultiCompiler options.name and options.dependencies
    const compilerToNode = new Map();
    for (const node of nodes)
        compilerToNode.set(node.compiler.name, node);
    for (const node of nodes) {
        const dependencies = this.dependencies.get(node.compiler);
        if (!dependencies)
            continue;
        for (const dep of dependencies) {
            const parent = compilerToNode.get(dep);
            node.parents.push(parent);
            parent.children.push(node);
        }
    }
    const queue = new ArrayQueue_1.default();
    for (const node of nodes) {
        if (node.parents.length === 0) {
            node.state = "queued";
            queue.enqueue(node);
        }
    }
    let errored = false;
    let running = 0;
    const parallelism = this._options.parallelism;
    /**
     * @param {Node} node node
     * @param {Error=} err error
     * @param {Stats=} stats result
     * @returns {void}
     */
    const nodeDone = (node, err, stats) => {
        if (errored)
            return;
        if (err) {
            errored = true;
            return neo_async_1.default.each(nodes, (node, callback) => {
                if (node.compiler.watching) {
                    node.compiler.watching.close(callback);
                }
                else {
                    callback();
                }
            }, () => callback(err));
        }
        node.result = stats;
        running--;
        if (node.state === "running") {
            node.state = "done";
            for (const child of node.children) {
                if (child.state === "blocked")
                    queue.enqueue(child);
            }
        }
        else if (node.state === "running-outdated") {
            node.state = "blocked";
            queue.enqueue(node);
        }
        processQueue();
    };
    /**
     * @param {Node} node node
     * @returns {void}
     */
    const nodeInvalidFromParent = (node) => {
        if (node.state === "done") {
            node.state = "blocked";
        }
        else if (node.state === "running") {
            node.state = "running-outdated";
        }
        for (const child of node.children) {
            nodeInvalidFromParent(child);
        }
    };
    /**
     * @param {Node} node node
     * @returns {void}
     */
    const nodeInvalid = (node) => {
        if (node.state === "done") {
            node.state = "pending";
        }
        else if (node.state === "running") {
            node.state = "running-outdated";
        }
        for (const child of node.children) {
            nodeInvalidFromParent(child);
        }
    };
    /**
     * @param {Node} node node
     * @returns {void}
     */
    // @ts-expect-error
    const nodeChange = node => {
        nodeInvalid(node);
        if (node.state === "pending") {
            node.state = "blocked";
        }
        if (node.state === "blocked") {
            queue.enqueue(node);
            processQueue();
        }
    };
    const setupResults = [];
    nodes.forEach((node, i) => {
        setupResults.push((node.setupResult = setup(node.compiler, i, 
        // @ts-expect-error
        nodeDone.bind(null, node), () => node.state !== "starting" && node.state !== "running", () => nodeChange(node), () => nodeInvalid(node))));
    });
    let processing = true;
    const processQueue = () => {
        if (processing)
            return;
        processing = true;
        process.nextTick(processQueueWorker);
    };
    const processQueueWorker = () => {
        while (running < parallelism && queue.length > 0 && !errored) {
            const node = queue.dequeue();
            if (node.state === "queued" ||
                (node.state === "blocked" &&
                    node.parents.every(p => p.state === "done"))) {
                running++;
                node.state = "starting";
                // @ts-expect-error
                run(node.compiler, node.setupResult, nodeDone.bind(null, node));
                node.state = "running";
            }
        }
        processing = false;
        if (!errored &&
            running === 0 &&
            nodes.every(node => node.state === "done")) {
            const stats = [];
            for (const node of nodes) {
                const result = node.result;
                if (result) {
                    node.result = undefined;
                    stats.push(result);
                }
            }
            if (stats.length > 0) {
                callback(null, new multiStats_1.default(stats));
            }
        }
    };
    processQueueWorker();
    return setupResults;
};
//# sourceMappingURL=multiCompiler.js.map