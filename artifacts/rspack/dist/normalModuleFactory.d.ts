import { AsyncSeriesBailHook, HookMap } from "tapable";
type ResourceData = {
    resource: string;
    path: string;
    query?: string;
    fragment?: string;
};
type ResourceDataWithData = ResourceData & {
    data?: Record<string, any>;
};
export declare class NormalModuleFactory {
    hooks: {
        resolveForScheme: HookMap<AsyncSeriesBailHook<[ResourceDataWithData], true | void>>;
    };
    constructor();
}
export {};
//# sourceMappingURL=normalModuleFactory.d.ts.map