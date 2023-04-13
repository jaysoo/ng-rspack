import type { RawBuiltins, RawHtmlPluginConfig, RawDecoratorOptions, RawMinification, RawReactOptions, RawProgressPluginConfig, RawPostCssConfig, RawPattern, RawCssModulesConfig, RawRelayConfig } from "@rspack/binding";
import { Optimization } from "..";
export type BuiltinsHtmlPluginConfig = Omit<RawHtmlPluginConfig, "meta"> & {
    meta?: Record<string, string | Record<string, string>>;
};
export type EmotionConfigImportMap = {
    [packageName: string]: {
        [exportName: string]: {
            canonicalImport?: [string, string];
        };
    };
};
export type EmotionConfig = boolean | {
    sourceMap?: boolean;
    autoLabel?: "never" | "dev-only" | "always";
    labelFormat?: string;
    importMap?: EmotionConfigImportMap;
};
export type CssPluginConfig = {
    modules?: Partial<RawCssModulesConfig>;
};
export interface Builtins {
    css?: CssPluginConfig;
    postcss?: RawPostCssConfig;
    treeShaking?: boolean;
    progress?: boolean | RawProgressPluginConfig;
    react?: RawReactOptions;
    noEmitAssets?: boolean;
    define?: Record<string, string | boolean | undefined>;
    provide?: Record<string, string | string[]>;
    html?: Array<BuiltinsHtmlPluginConfig>;
    decorator?: boolean | Partial<RawDecoratorOptions>;
    minifyOptions?: Partial<RawMinification>;
    emotion?: EmotionConfig;
    presetEnv?: Partial<RawBuiltins["presetEnv"]>;
    polyfill?: boolean;
    devFriendlySplitChunks?: boolean;
    copy?: CopyConfig;
    pluginImport?: PluginImportConfig[];
    relay?: RelayConfig;
}
export type PluginImportConfig = {
    libraryName: string;
    libraryDirectory?: string;
    customName?: string;
    customStyleName?: string;
    style?: string | boolean;
    styleLibraryDirectory?: string;
    camelToDashComponentName?: boolean;
    transformToDefaultImport?: boolean;
    ignoreEsComponent?: Array<string>;
    ignoreStyleComponent?: Array<string>;
};
export type CopyConfig = {
    patterns: string[] | ({
        from: string;
    } & Partial<RawPattern>)[];
};
export type RelayConfig = boolean | RawRelayConfig;
export type ResolvedBuiltins = Omit<RawBuiltins, "html"> & {
    html?: Array<BuiltinsHtmlPluginConfig>;
    emotion?: string;
};
export declare function resolveBuiltinsOptions(builtins: Builtins, { contextPath, production, optimization }: {
    contextPath: string;
    production: boolean;
    optimization: Optimization;
}): RawBuiltins;
export declare function resolveMinifyOptions(builtins: Builtins, optimization: Optimization): RawMinification | undefined;
//# sourceMappingURL=builtins.d.ts.map