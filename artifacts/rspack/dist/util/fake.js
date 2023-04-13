"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFakeCompilationDependencies = exports.createFakeProcessAssetsHook = void 0;
const tapable = __importStar(require("tapable"));
const createFakeProcessAssetsHook = (compilation) => {
    const createFakeTap = (options, 
    // @ts-expect-error
    fn, tap) => {
        var _a;
        if (typeof options === "string")
            options = { name: options };
        const hook = compilation.__internal_getProcessAssetsHookByStage((_a = options.stage) !== null && _a !== void 0 ? _a : 0);
        // @ts-expect-error
        hook[tap](options.name, fn);
    };
    return {
        name: "processAssets",
        tap: (options, fn) => createFakeTap(options, fn, "tap"),
        tapAsync: (options, fn) => createFakeTap(options, fn, "tapAsync"),
        tapPromise: (options, fn) => createFakeTap(options, fn, "tapPromise"),
        stageAdditional: new tapable.AsyncSeriesHook(["assets"]),
        stagePreProcess: new tapable.AsyncSeriesHook(["assets"]),
        stageNone: new tapable.AsyncSeriesHook(["assets"]),
        stageOptimizeInline: new tapable.AsyncSeriesHook(["assets"]),
        stageSummarize: new tapable.AsyncSeriesHook(["assets"]),
        stageReport: new tapable.AsyncSeriesHook(["assets"])
    };
};
exports.createFakeProcessAssetsHook = createFakeProcessAssetsHook;
function createFakeCompilationDependencies(deps, addDeps) {
    return {
        *[Symbol.iterator]() {
            for (const dep of deps) {
                yield dep;
            }
        },
        has(dep) {
            return deps.includes(dep);
        },
        add: (dep) => {
            addDeps([dep]);
        },
        addAll: (deps) => {
            addDeps(Array.from(deps));
        }
    };
}
exports.createFakeCompilationDependencies = createFakeCompilationDependencies;
//# sourceMappingURL=fake.js.map