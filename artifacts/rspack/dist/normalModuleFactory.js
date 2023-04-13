"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalModuleFactory = void 0;
const tapable_1 = require("tapable");
// type ResolveData = {
// 	context: string;
// 	request: string;
// 	assertions: Record<string, any> | undefined;
// 	// dependencies: ModuleDependency[];
// };
class NormalModuleFactory {
    constructor() {
        this.hooks = {
            // /** @type {AsyncSeriesBailHook<[ResolveData], Module | false | void>} */
            // resolve: new AsyncSeriesBailHook(["resolveData"]),
            // /** @type {HookMap<AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>>} */
            resolveForScheme: new tapable_1.HookMap(() => new tapable_1.AsyncSeriesBailHook(["resourceData"]))
            // /** @type {HookMap<AsyncSeriesBailHook<[ResourceDataWithData, ResolveData], true | void>>} */
            // resolveInScheme: new HookMap(
            // 	() => new AsyncSeriesBailHook(["resourceData", "resolveData"])
            // ),
            // /** @type {AsyncSeriesBailHook<[ResolveData], Module>} */
            // factorize: new AsyncSeriesBailHook(["resolveData"]),
            // /** @type {AsyncSeriesBailHook<[ResolveData], false | void>} */
            // beforeResolve: new AsyncSeriesBailHook(["resolveData"]),
            // /** @type {AsyncSeriesBailHook<[ResolveData], false | void>} */
            // afterResolve: new AsyncSeriesBailHook(["resolveData"]),
            // /** @type {AsyncSeriesBailHook<[ResolveData["createData"], ResolveData], Module | void>} */
            // createModule: new AsyncSeriesBailHook(["createData", "resolveData"]),
            // /** @type {SyncWaterfallHook<[Module, ResolveData["createData"], ResolveData], Module>} */
            // module: new SyncWaterfallHook(["module", "createData", "resolveData"]),
            // createParser: new HookMap(() => new SyncBailHook(["parserOptions"])),
            // parser: new HookMap(() => new SyncHook(["parser", "parserOptions"])),
            // createGenerator: new HookMap(
            // 	() => new SyncBailHook(["generatorOptions"])
            // ),
            // generator: new HookMap(
            // 	() => new SyncHook(["generator", "generatorOptions"])
            // )
        };
    }
}
exports.NormalModuleFactory = NormalModuleFactory;
//# sourceMappingURL=normalModuleFactory.js.map