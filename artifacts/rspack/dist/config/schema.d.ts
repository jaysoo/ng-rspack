export declare namespace definitions {
    namespace AssetModuleFilename {
        const description: string;
        const anyOf: {
            type: string;
        }[];
    }
    namespace AssetParserDataUrlOptions {
        const description_1: string;
        export { description_1 as description };
        export const type: string;
        export const additionalProperties: boolean;
        export namespace properties {
            namespace maxSize {
                const description_2: string;
                export { description_2 as description };
                const type_1: string;
                export { type_1 as type };
            }
        }
    }
    namespace AssetParserOptions {
        const description_3: string;
        export { description_3 as description };
        const type_2: string;
        export { type_2 as type };
        const additionalProperties_1: boolean;
        export { additionalProperties_1 as additionalProperties };
        export namespace properties_1 {
            namespace dataUrlCondition {
                const description_4: string;
                export { description_4 as description };
                const anyOf_1: {
                    $ref: string;
                }[];
                export { anyOf_1 as anyOf };
            }
        }
        export { properties_1 as properties };
    }
    namespace AuxiliaryComment {
        const description_5: string;
        export { description_5 as description };
        const anyOf_2: ({
            description: string;
            type: string;
            $ref?: undefined;
        } | {
            $ref: string;
            description?: undefined;
            type?: undefined;
        })[];
        export { anyOf_2 as anyOf };
    }
    namespace CacheOptions {
        const description_6: string;
        export { description_6 as description };
        const type_3: string;
        export { type_3 as type };
    }
    namespace ChunkFilename {
        const description_7: string;
        export { description_7 as description };
        export const oneOf: {
            $ref: string;
        }[];
    }
    namespace Context {
        const description_8: string;
        export { description_8 as description };
        const type_4: string;
        export { type_4 as type };
    }
    namespace CssChunkFilename {
        const description_9: string;
        export { description_9 as description };
        const oneOf_1: {
            $ref: string;
        }[];
        export { oneOf_1 as oneOf };
    }
    namespace CssFilename {
        const description_10: string;
        export { description_10 as description };
        const oneOf_2: {
            $ref: string;
        }[];
        export { oneOf_2 as oneOf };
    }
    namespace WebassemblyModuleFilename {
        const description_11: string;
        export { description_11 as description };
        const type_5: string;
        export { type_5 as type };
    }
    namespace EnabledWasmLoadingTypes {
        const description_12: string;
        export { description_12 as description };
        const type_6: string;
        export { type_6 as type };
        export namespace items {
            const $ref: string;
        }
    }
    namespace WasmLoading {
        const description_13: string;
        export { description_13 as description };
        const anyOf_3: ({
            enum: boolean[];
            $ref?: undefined;
        } | {
            $ref: string;
            enum?: undefined;
        })[];
        export { anyOf_3 as anyOf };
    }
    namespace WasmLoadingType {
        const description_14: string;
        export { description_14 as description };
        const anyOf_4: ({
            enum: string[];
            type?: undefined;
        } | {
            type: string;
            enum?: undefined;
        })[];
        export { anyOf_4 as anyOf };
    }
    namespace Dependencies {
        const description_15: string;
        export { description_15 as description };
        const type_7: string;
        export { type_7 as type };
        export namespace items_1 {
            const description_16: string;
            export { description_16 as description };
            const type_8: string;
            export { type_8 as type };
        }
        export { items_1 as items };
    }
    namespace DevServer {
        const description_17: string;
        export { description_17 as description };
        const type_9: string;
        export { type_9 as type };
    }
    namespace DevTool {
        const description_18: string;
        export { description_18 as description };
        const anyOf_5: ({
            enum: boolean[];
            type?: undefined;
            pattern?: undefined;
        } | {
            type: string;
            pattern: string;
            enum?: undefined;
        })[];
        export { anyOf_5 as anyOf };
    }
    namespace EnabledLibraryTypes {
        const description_19: string;
        export { description_19 as description };
        const type_10: string;
        export { type_10 as type };
        export namespace items_2 {
            const $ref_1: string;
            export { $ref_1 as $ref };
        }
        export { items_2 as items };
    }
    namespace Entry {
        const description_20: string;
        export { description_20 as description };
        const anyOf_6: {
            $ref: string;
        }[];
        export { anyOf_6 as anyOf };
    }
    namespace EntryDescription {
        const description_21: string;
        export { description_21 as description };
        const type_11: string;
        export { type_11 as type };
        const additionalProperties_2: boolean;
        export { additionalProperties_2 as additionalProperties };
        export namespace properties_2 {
            export namespace _import {
                const $ref_2: string;
                export { $ref_2 as $ref };
            }
            export { _import as import };
            export namespace runtime {
                const $ref_3: string;
                export { $ref_3 as $ref };
            }
            export namespace wasmLoading {
                const $ref_4: string;
                export { $ref_4 as $ref };
            }
        }
        export { properties_2 as properties };
        export const required: string[];
    }
    namespace EntryFilename {
        const description_22: string;
        export { description_22 as description };
        const oneOf_3: {
            $ref: string;
        }[];
        export { oneOf_3 as oneOf };
    }
    namespace EntryItem {
        const description_23: string;
        export { description_23 as description };
        const anyOf_7: ({
            description: string;
            type: string;
            items: {
                description: string;
                type: string;
                minLength: number;
            };
            minItems: number;
            uniqueItems: boolean;
            minLength?: undefined;
        } | {
            description: string;
            type: string;
            minLength: number;
            items?: undefined;
            minItems?: undefined;
            uniqueItems?: undefined;
        })[];
        export { anyOf_7 as anyOf };
    }
    namespace EntryObject {
        const description_24: string;
        export { description_24 as description };
        const type_12: string;
        export { type_12 as type };
        export namespace additionalProperties_3 {
            const description_25: string;
            export { description_25 as description };
            const anyOf_8: {
                $ref: string;
            }[];
            export { anyOf_8 as anyOf };
        }
        export { additionalProperties_3 as additionalProperties };
    }
    namespace EntryRuntime {
        const description_26: string;
        export { description_26 as description };
        const anyOf_9: ({
            enum: boolean[];
            type?: undefined;
            minLength?: undefined;
        } | {
            type: string;
            minLength: number;
            enum?: undefined;
        })[];
        export { anyOf_9 as anyOf };
    }
    namespace EntryStatic {
        const description_27: string;
        export { description_27 as description };
        const anyOf_10: {
            $ref: string;
        }[];
        export { anyOf_10 as anyOf };
    }
    namespace EntryUnnamed {
        const description_28: string;
        export { description_28 as description };
        const oneOf_4: {
            $ref: string;
        }[];
        export { oneOf_4 as oneOf };
    }
    namespace Experiments {
        const description_29: string;
        export { description_29 as description };
        const type_13: string;
        export { type_13 as type };
        const additionalProperties_4: boolean;
        export { additionalProperties_4 as additionalProperties };
        export namespace properties_3 {
            namespace asyncWebAssembly {
                const description_30: string;
                export { description_30 as description };
                const type_14: string;
                export { type_14 as type };
            }
            namespace incrementalRebuild {
                const description_31: string;
                export { description_31 as description };
                const type_15: string;
                export { type_15 as type };
            }
            namespace lazyCompilation {
                const description_32: string;
                export { description_32 as description };
                const anyOf_11: {
                    type: string;
                }[];
                export { anyOf_11 as anyOf };
            }
        }
        export { properties_3 as properties };
    }
    namespace ExternalItem {
        const description_33: string;
        export { description_33 as description };
        const anyOf_12: ({
            description: string;
            instanceof: string;
            type?: undefined;
            additionalProperties?: undefined;
        } | {
            description: string;
            type: string;
            instanceof?: undefined;
            additionalProperties?: undefined;
        } | {
            description: string;
            type: string;
            additionalProperties: {
                $ref: string;
            };
            instanceof?: undefined;
        })[];
        export { anyOf_12 as anyOf };
    }
    namespace ExternalItemValue {
        const description_34: string;
        export { description_34 as description };
        const anyOf_13: {
            description: string;
            type: string;
        }[];
        export { anyOf_13 as anyOf };
    }
    namespace Externals {
        const description_35: string;
        export { description_35 as description };
        const anyOf_14: ({
            type: string;
            items: {
                $ref: string;
            };
            $ref?: undefined;
        } | {
            $ref: string;
            type?: undefined;
            items?: undefined;
        })[];
        export { anyOf_14 as anyOf };
    }
    namespace ExternalsPresets {
        const description_36: string;
        export { description_36 as description };
        const type_16: string;
        export { type_16 as type };
        const additionalProperties_5: boolean;
        export { additionalProperties_5 as additionalProperties };
        export namespace properties_4 {
            namespace node {
                const description_37: string;
                export { description_37 as description };
                const type_17: string;
                export { type_17 as type };
            }
        }
        export { properties_4 as properties };
    }
    namespace ExternalsType {
        const description_38: string;
        export { description_38 as description };
        const _enum: string[];
        export { _enum as enum };
    }
    namespace Filename {
        const description_39: string;
        export { description_39 as description };
        const oneOf_5: {
            $ref: string;
        }[];
        export { oneOf_5 as oneOf };
    }
    namespace FilenameTemplate {
        const description_40: string;
        export { description_40 as description };
        const anyOf_15: ({
            type: string;
            minLength: number;
            instanceof?: undefined;
        } | {
            instanceof: string;
            type?: undefined;
            minLength?: undefined;
        })[];
        export { anyOf_15 as anyOf };
    }
    namespace FilterItemTypes {
        const description_41: string;
        export { description_41 as description };
        const anyOf_16: ({
            instanceof: string;
            type?: undefined;
        } | {
            type: string;
            instanceof?: undefined;
        })[];
        export { anyOf_16 as anyOf };
    }
    namespace FilterTypes {
        const description_42: string;
        export { description_42 as description };
        const anyOf_17: ({
            type: string;
            items: {
                description: string;
                oneOf: {
                    $ref: string;
                }[];
            };
            $ref?: undefined;
        } | {
            $ref: string;
            type?: undefined;
            items?: undefined;
        })[];
        export { anyOf_17 as anyOf };
    }
    namespace GlobalObject {
        const description_43: string;
        export { description_43 as description };
        const type_18: string;
        export { type_18 as type };
        export const minLength: number;
    }
    namespace ImportFunctionName {
        const description_44: string;
        export { description_44 as description };
        const type_19: string;
        export { type_19 as type };
    }
    namespace InfrastructureLogging {
        const description_45: string;
        export { description_45 as description };
        const type_20: string;
        export { type_20 as type };
        const additionalProperties_6: boolean;
        export { additionalProperties_6 as additionalProperties };
        export namespace properties_5 {
            namespace appendOnly {
                const description_46: string;
                export { description_46 as description };
                const type_21: string;
                export { type_21 as type };
            }
            namespace colors {
                const description_47: string;
                export { description_47 as description };
                const type_22: string;
                export { type_22 as type };
            }
            namespace console {
                const description_48: string;
                export { description_48 as description };
            }
            namespace debug {
                const description_49: string;
                export { description_49 as description };
                const anyOf_18: ({
                    description: string;
                    type: string;
                    $ref?: undefined;
                } | {
                    $ref: string;
                    description?: undefined;
                    type?: undefined;
                })[];
                export { anyOf_18 as anyOf };
            }
            namespace level {
                const description_50: string;
                export { description_50 as description };
                const _enum_1: string[];
                export { _enum_1 as enum };
            }
            namespace stream {
                const description_51: string;
                export { description_51 as description };
            }
        }
        export { properties_5 as properties };
    }
    namespace Library {
        const description_52: string;
        export { description_52 as description };
        const anyOf_19: {
            $ref: string;
        }[];
        export { anyOf_19 as anyOf };
    }
    namespace LibraryCustomUmdCommentObject {
        const description_53: string;
        export { description_53 as description };
        const type_23: string;
        export { type_23 as type };
        const additionalProperties_7: boolean;
        export { additionalProperties_7 as additionalProperties };
        export namespace properties_6 {
            namespace amd {
                const description_54: string;
                export { description_54 as description };
                const type_24: string;
                export { type_24 as type };
            }
            namespace commonjs {
                const description_55: string;
                export { description_55 as description };
                const type_25: string;
                export { type_25 as type };
            }
            namespace commonjs2 {
                const description_56: string;
                export { description_56 as description };
                const type_26: string;
                export { type_26 as type };
            }
            namespace root {
                const description_57: string;
                export { description_57 as description };
                const type_27: string;
                export { type_27 as type };
            }
        }
        export { properties_6 as properties };
    }
    namespace LibraryCustomUmdObject {
        const description_58: string;
        export { description_58 as description };
        const type_28: string;
        export { type_28 as type };
        const additionalProperties_8: boolean;
        export { additionalProperties_8 as additionalProperties };
        export namespace properties_7 {
            export namespace amd_1 {
                const description_59: string;
                export { description_59 as description };
                const type_29: string;
                export { type_29 as type };
                const minLength_1: number;
                export { minLength_1 as minLength };
            }
            export { amd_1 as amd };
            export namespace commonjs_1 {
                const description_60: string;
                export { description_60 as description };
                const type_30: string;
                export { type_30 as type };
                const minLength_2: number;
                export { minLength_2 as minLength };
            }
            export { commonjs_1 as commonjs };
            export namespace root_1 {
                const description_61: string;
                export { description_61 as description };
                const anyOf_20: ({
                    type: string;
                    items: {
                        description: string;
                        type: string;
                        minLength: number;
                    };
                    minLength?: undefined;
                } | {
                    type: string;
                    minLength: number;
                    items?: undefined;
                })[];
                export { anyOf_20 as anyOf };
            }
            export { root_1 as root };
        }
        export { properties_7 as properties };
    }
    namespace LibraryExport {
        const description_62: string;
        export { description_62 as description };
        const anyOf_21: ({
            type: string;
            items: {
                description: string;
                type: string;
                minLength: number;
            };
            minLength?: undefined;
        } | {
            type: string;
            minLength: number;
            items?: undefined;
        })[];
        export { anyOf_21 as anyOf };
    }
    namespace LibraryName {
        const description_63: string;
        export { description_63 as description };
        const anyOf_22: ({
            type: string;
            items: {
                description: string;
                type: string;
                minLength: number;
            };
            minItems: number;
            minLength?: undefined;
            $ref?: undefined;
        } | {
            type: string;
            minLength: number;
            items?: undefined;
            minItems?: undefined;
            $ref?: undefined;
        } | {
            $ref: string;
            type?: undefined;
            items?: undefined;
            minItems?: undefined;
            minLength?: undefined;
        })[];
        export { anyOf_22 as anyOf };
    }
    namespace LibraryOptions {
        const description_64: string;
        export { description_64 as description };
        const type_31: string;
        export { type_31 as type };
        const additionalProperties_9: boolean;
        export { additionalProperties_9 as additionalProperties };
        export namespace properties_8 {
            export namespace auxiliaryComment {
                const $ref_5: string;
                export { $ref_5 as $ref };
            }
            export namespace _export {
                const $ref_6: string;
                export { $ref_6 as $ref };
            }
            export { _export as export };
            export namespace name {
                const $ref_7: string;
                export { $ref_7 as $ref };
            }
            export namespace type_32 {
                const $ref_8: string;
                export { $ref_8 as $ref };
            }
            export { type_32 as type };
            export namespace umdNamedDefine {
                const $ref_9: string;
                export { $ref_9 as $ref };
            }
        }
        export { properties_8 as properties };
        const required_1: string[];
        export { required_1 as required };
    }
    namespace LibraryType {
        const description_65: string;
        export { description_65 as description };
        const anyOf_23: ({
            enum: string[];
            type?: undefined;
        } | {
            type: string;
            enum?: undefined;
        })[];
        export { anyOf_23 as anyOf };
    }
    namespace Mode {
        const description_66: string;
        export { description_66 as description };
        const _enum_2: string[];
        export { _enum_2 as enum };
    }
    namespace ModuleOptions {
        const description_67: string;
        export { description_67 as description };
        const type_33: string;
        export { type_33 as type };
        const additionalProperties_10: boolean;
        export { additionalProperties_10 as additionalProperties };
        export namespace properties_9 {
            namespace defaultRules {
                const description_68: string;
                export { description_68 as description };
                const oneOf_6: {
                    $ref: string;
                }[];
                export { oneOf_6 as oneOf };
            }
            namespace parser {
                const $ref_10: string;
                export { $ref_10 as $ref };
            }
            namespace rules {
                const description_69: string;
                export { description_69 as description };
                const oneOf_7: {
                    $ref: string;
                }[];
                export { oneOf_7 as oneOf };
            }
        }
        export { properties_9 as properties };
    }
    namespace Name {
        const description_70: string;
        export { description_70 as description };
        const type_34: string;
        export { type_34 as type };
    }
    namespace Node {
        const description_71: string;
        export { description_71 as description };
        const anyOf_24: ({
            enum: boolean[];
            $ref?: undefined;
        } | {
            $ref: string;
            enum?: undefined;
        })[];
        export { anyOf_24 as anyOf };
    }
    namespace NodeOptions {
        const description_72: string;
        export { description_72 as description };
        const type_35: string;
        export { type_35 as type };
        const additionalProperties_11: boolean;
        export { additionalProperties_11 as additionalProperties };
        export namespace properties_10 {
            namespace __dirname {
                const description_73: string;
                export { description_73 as description };
                const _enum_3: (string | boolean)[];
                export { _enum_3 as enum };
            }
            namespace __filename {
                const description_74: string;
                export { description_74 as description };
                const _enum_4: (string | boolean)[];
                export { _enum_4 as enum };
            }
            namespace global {
                const description_75: string;
                export { description_75 as description };
                const _enum_5: (string | boolean)[];
                export { _enum_5 as enum };
            }
        }
        export { properties_10 as properties };
    }
    namespace Optimization {
        const description_76: string;
        export { description_76 as description };
        const type_36: string;
        export { type_36 as type };
        const additionalProperties_12: boolean;
        export { additionalProperties_12 as additionalProperties };
        export namespace properties_11 {
            namespace chunkIds {
                const description_77: string;
                export { description_77 as description };
                const _enum_6: string[];
                export { _enum_6 as enum };
            }
            namespace minimize {
                const description_78: string;
                export { description_78 as description };
                const type_37: string;
                export { type_37 as type };
            }
            namespace minimizer {
                const description_79: string;
                export { description_79 as description };
                const type_38: string;
                export { type_38 as type };
                export namespace items_3 {
                    const description_80: string;
                    export { description_80 as description };
                    const anyOf_25: ({
                        enum: string[];
                        $ref?: undefined;
                    } | {
                        $ref: string;
                        enum?: undefined;
                    })[];
                    export { anyOf_25 as anyOf };
                }
                export { items_3 as items };
            }
            namespace moduleIds {
                const description_81: string;
                export { description_81 as description };
                const _enum_7: string[];
                export { _enum_7 as enum };
            }
            namespace removeAvailableModules {
                const description_82: string;
                export { description_82 as description };
                const type_39: string;
                export { type_39 as type };
            }
            namespace runtimeChunk {
                const $ref_11: string;
                export { $ref_11 as $ref };
            }
            namespace sideEffects {
                const description_83: string;
                export { description_83 as description };
                const anyOf_26: ({
                    enum: string[];
                    type?: undefined;
                } | {
                    type: string;
                    enum?: undefined;
                })[];
                export { anyOf_26 as anyOf };
            }
            namespace splitChunks {
                const description_84: string;
                export { description_84 as description };
                const anyOf_27: ({
                    enum: boolean[];
                    $ref?: undefined;
                } | {
                    $ref: string;
                    enum?: undefined;
                })[];
                export { anyOf_27 as anyOf };
            }
        }
        export { properties_11 as properties };
    }
    namespace OptimizationRuntimeChunk {
        const description_85: string;
        export { description_85 as description };
        const anyOf_28: ({
            enum: string[];
            type?: undefined;
            additionalProperties?: undefined;
            properties?: undefined;
        } | {
            type: string;
            enum?: undefined;
            additionalProperties?: undefined;
            properties?: undefined;
        } | {
            type: string;
            additionalProperties: boolean;
            properties: {
                name: {
                    description: string;
                    anyOf: ({
                        type: string;
                        instanceof?: undefined;
                    } | {
                        instanceof: string;
                        type?: undefined;
                    })[];
                };
            };
            enum?: undefined;
        })[];
        export { anyOf_28 as anyOf };
    }
    namespace OptimizationSplitChunksCacheGroup {
        const description_86: string;
        export { description_86 as description };
        const type_40: string;
        export { type_40 as type };
        const additionalProperties_13: boolean;
        export { additionalProperties_13 as additionalProperties };
        export namespace properties_12 {
            export namespace chunks {
                const description_87: string;
                export { description_87 as description };
                const anyOf_29: ({
                    enum: string[];
                    instanceof?: undefined;
                } | {
                    instanceof: string;
                    enum?: undefined;
                })[];
                export { anyOf_29 as anyOf };
            }
            export namespace minChunks {
                const description_88: string;
                export { description_88 as description };
                const type_41: string;
                export { type_41 as type };
                export const minimum: number;
            }
            export namespace name_1 {
                const description_89: string;
                export { description_89 as description };
                const anyOf_30: ({
                    enum: boolean[];
                    type?: undefined;
                    instanceof?: undefined;
                } | {
                    type: string;
                    enum?: undefined;
                    instanceof?: undefined;
                } | {
                    instanceof: string;
                    enum?: undefined;
                    type?: undefined;
                })[];
                export { anyOf_30 as anyOf };
            }
            export { name_1 as name };
            export namespace priority {
                const description_90: string;
                export { description_90 as description };
                const type_42: string;
                export { type_42 as type };
            }
            export namespace reuseExistingChunk {
                const description_91: string;
                export { description_91 as description };
                const type_43: string;
                export { type_43 as type };
            }
            export namespace test {
                const description_92: string;
                export { description_92 as description };
                const anyOf_31: {
                    instanceof: string;
                }[];
                export { anyOf_31 as anyOf };
            }
        }
        export { properties_12 as properties };
    }
    namespace OptimizationSplitChunksOptions {
        const description_93: string;
        export { description_93 as description };
        const type_44: string;
        export { type_44 as type };
        const additionalProperties_14: boolean;
        export { additionalProperties_14 as additionalProperties };
        export namespace properties_13 {
            export namespace cacheGroups {
                const description_94: string;
                export { description_94 as description };
                const type_45: string;
                export { type_45 as type };
                export namespace additionalProperties_15 {
                    const description_95: string;
                    export { description_95 as description };
                    const anyOf_32: {
                        $ref: string;
                    }[];
                    export { anyOf_32 as anyOf };
                }
                export { additionalProperties_15 as additionalProperties };
            }
            export namespace chunks_1 {
                const description_96: string;
                export { description_96 as description };
                const anyOf_33: {
                    enum: string[];
                }[];
                export { anyOf_33 as anyOf };
            }
            export { chunks_1 as chunks };
            export namespace enforceSizeThreshold {
                const description_97: string;
                export { description_97 as description };
                const oneOf_8: {
                    $ref: string;
                }[];
                export { oneOf_8 as oneOf };
            }
            export namespace maxAsyncRequests {
                const description_98: string;
                export { description_98 as description };
                const type_46: string;
                export { type_46 as type };
                const minimum_1: number;
                export { minimum_1 as minimum };
            }
            export namespace maxInitialRequests {
                const description_99: string;
                export { description_99 as description };
                const type_47: string;
                export { type_47 as type };
                const minimum_2: number;
                export { minimum_2 as minimum };
            }
            export namespace minChunks_1 {
                const description_100: string;
                export { description_100 as description };
                const type_48: string;
                export { type_48 as type };
                const minimum_3: number;
                export { minimum_3 as minimum };
            }
            export { minChunks_1 as minChunks };
            export namespace minRemainingSize {
                const description_101: string;
                export { description_101 as description };
                const oneOf_9: {
                    $ref: string;
                }[];
                export { oneOf_9 as oneOf };
            }
            export namespace minSize {
                const description_102: string;
                export { description_102 as description };
                const oneOf_10: {
                    $ref: string;
                }[];
                export { oneOf_10 as oneOf };
            }
        }
        export { properties_13 as properties };
    }
    namespace OptimizationSplitChunksSizes {
        const description_103: string;
        export { description_103 as description };
        const anyOf_34: {
            description: string;
            type: string;
            minimum: number;
        }[];
        export { anyOf_34 as anyOf };
    }
    namespace Iife {
        const description_104: string;
        export { description_104 as description };
        const type_49: string;
        export { type_49 as type };
    }
    namespace Output {
        const description_105: string;
        export { description_105 as description };
        const type_50: string;
        export { type_50 as type };
        const additionalProperties_16: boolean;
        export { additionalProperties_16 as additionalProperties };
        export namespace properties_14 {
            export namespace iife {
                const $ref_12: string;
                export { $ref_12 as $ref };
            }
            export namespace assetModuleFilename {
                const $ref_13: string;
                export { $ref_13 as $ref };
            }
            export namespace auxiliaryComment_1 {
                const oneOf_11: {
                    $ref: string;
                }[];
                export { oneOf_11 as oneOf };
            }
            export { auxiliaryComment_1 as auxiliaryComment };
            export namespace chunkFilename {
                const $ref_14: string;
                export { $ref_14 as $ref };
            }
            export namespace cssChunkFilename {
                const $ref_15: string;
                export { $ref_15 as $ref };
            }
            export namespace cssFilename {
                const $ref_16: string;
                export { $ref_16 as $ref };
            }
            export namespace enabledWasmLoadingTypes {
                const $ref_17: string;
                export { $ref_17 as $ref };
            }
            export namespace wasmLoading_1 {
                const $ref_18: string;
                export { $ref_18 as $ref };
            }
            export { wasmLoading_1 as wasmLoading };
            export namespace webassemblyModuleFilename {
                const $ref_19: string;
                export { $ref_19 as $ref };
            }
            export namespace enabledLibraryTypes {
                const $ref_20: string;
                export { $ref_20 as $ref };
            }
            export namespace filename {
                const $ref_21: string;
                export { $ref_21 as $ref };
            }
            export namespace globalObject {
                const $ref_22: string;
                export { $ref_22 as $ref };
            }
            export namespace importFunctionName {
                const $ref_23: string;
                export { $ref_23 as $ref };
            }
            export namespace library {
                const $ref_24: string;
                export { $ref_24 as $ref };
            }
            export namespace libraryExport {
                const oneOf_12: {
                    $ref: string;
                }[];
                export { oneOf_12 as oneOf };
            }
            export namespace libraryTarget {
                const oneOf_13: {
                    $ref: string;
                }[];
                export { oneOf_13 as oneOf };
            }
            export namespace module {
                const $ref_25: string;
                export { $ref_25 as $ref };
            }
            export namespace path {
                const $ref_26: string;
                export { $ref_26 as $ref };
            }
            export namespace publicPath {
                const $ref_27: string;
                export { $ref_27 as $ref };
            }
            export namespace strictModuleErrorHandling {
                const $ref_28: string;
                export { $ref_28 as $ref };
            }
            export namespace umdNamedDefine_1 {
                const oneOf_14: {
                    $ref: string;
                }[];
                export { oneOf_14 as oneOf };
            }
            export { umdNamedDefine_1 as umdNamedDefine };
            export namespace uniqueName {
                const $ref_29: string;
                export { $ref_29 as $ref };
            }
        }
        export { properties_14 as properties };
    }
    namespace OutputModule {
        const description_106: string;
        export { description_106 as description };
        const type_51: string;
        export { type_51 as type };
    }
    namespace ParserOptionsByModuleType {
        const description_107: string;
        export { description_107 as description };
        const type_52: string;
        export { type_52 as type };
        export namespace additionalProperties_17 {
            const description_108: string;
            export { description_108 as description };
            const type_53: string;
            export { type_53 as type };
            const additionalProperties_18: boolean;
            export { additionalProperties_18 as additionalProperties };
        }
        export { additionalProperties_17 as additionalProperties };
        export namespace properties_15 {
            namespace asset {
                const $ref_30: string;
                export { $ref_30 as $ref };
            }
        }
        export { properties_15 as properties };
    }
    namespace Path {
        const description_109: string;
        export { description_109 as description };
        const type_54: string;
        export { type_54 as type };
    }
    namespace Plugins {
        const description_110: string;
        export { description_110 as description };
        const type_55: string;
        export { type_55 as type };
        export namespace items_4 {
            const description_111: string;
            export { description_111 as description };
            const anyOf_35: {
                $ref: string;
            }[];
            export { anyOf_35 as anyOf };
        }
        export { items_4 as items };
    }
    namespace PublicPath {
        const description_112: string;
        export { description_112 as description };
        const anyOf_36: ({
            enum: string[];
            $ref?: undefined;
        } | {
            $ref: string;
            enum?: undefined;
        })[];
        export { anyOf_36 as anyOf };
    }
    namespace RawPublicPath {
        const description_113: string;
        export { description_113 as description };
        const anyOf_37: {
            type: string;
        }[];
        export { anyOf_37 as anyOf };
    }
    namespace Resolve {
        const description_114: string;
        export { description_114 as description };
        const oneOf_15: {
            $ref: string;
        }[];
        export { oneOf_15 as oneOf };
    }
    namespace ResolveAlias {
        const description_115: string;
        export { description_115 as description };
        const anyOf_38: {
            type: string;
            additionalProperties: {
                description: string;
                anyOf: ({
                    description: string;
                    type: string;
                    items: {
                        description: string;
                        type: string;
                        minLength: number;
                    };
                    enum?: undefined;
                    minLength?: undefined;
                } | {
                    description: string;
                    enum: boolean[];
                    type?: undefined;
                    items?: undefined;
                    minLength?: undefined;
                } | {
                    description: string;
                    type: string;
                    minLength: number;
                    items?: undefined;
                    enum?: undefined;
                })[];
            };
        }[];
        export { anyOf_38 as anyOf };
    }
    namespace ResolveOptions {
        const description_116: string;
        export { description_116 as description };
        const type_56: string;
        export { type_56 as type };
        const additionalProperties_19: boolean;
        export { additionalProperties_19 as additionalProperties };
        export namespace properties_16 {
            namespace alias {
                const $ref_31: string;
                export { $ref_31 as $ref };
            }
            namespace browserField {
                const description_117: string;
                export { description_117 as description };
                const type_57: string;
                export { type_57 as type };
            }
            namespace conditionNames {
                const description_118: string;
                export { description_118 as description };
                const type_58: string;
                export { type_58 as type };
                export namespace items_5 {
                    const description_119: string;
                    export { description_119 as description };
                    const type_59: string;
                    export { type_59 as type };
                }
                export { items_5 as items };
            }
            namespace extensions {
                const description_120: string;
                export { description_120 as description };
                const type_60: string;
                export { type_60 as type };
                export namespace items_6 {
                    const description_121: string;
                    export { description_121 as description };
                    const type_61: string;
                    export { type_61 as type };
                }
                export { items_6 as items };
            }
            namespace fallback {
                const description_122: string;
                export { description_122 as description };
                const oneOf_16: {
                    $ref: string;
                }[];
                export { oneOf_16 as oneOf };
            }
            namespace mainFields {
                const description_123: string;
                export { description_123 as description };
                const type_62: string;
                export { type_62 as type };
                export namespace items_7 {
                    const description_124: string;
                    export { description_124 as description };
                    const anyOf_39: ({
                        type: string;
                        items: {
                            description: string;
                            type: string;
                            minLength: number;
                        };
                        minLength?: undefined;
                    } | {
                        type: string;
                        minLength: number;
                        items?: undefined;
                    })[];
                    export { anyOf_39 as anyOf };
                }
                export { items_7 as items };
            }
            namespace mainFiles {
                const description_125: string;
                export { description_125 as description };
                const type_63: string;
                export { type_63 as type };
                export namespace items_8 {
                    const description_126: string;
                    export { description_126 as description };
                    const type_64: string;
                    export { type_64 as type };
                    const minLength_3: number;
                    export { minLength_3 as minLength };
                }
                export { items_8 as items };
            }
            namespace modules {
                const description_127: string;
                export { description_127 as description };
                const type_65: string;
                export { type_65 as type };
                export namespace items_9 {
                    const description_128: string;
                    export { description_128 as description };
                    const type_66: string;
                    export { type_66 as type };
                    const minLength_4: number;
                    export { minLength_4 as minLength };
                }
                export { items_9 as items };
            }
            namespace preferRelative {
                const description_129: string;
                export { description_129 as description };
                const type_67: string;
                export { type_67 as type };
            }
            namespace byDependency {
                const description_130: string;
                export { description_130 as description };
                const type_68: string;
                export { type_68 as type };
                export namespace additionalProperties_20 {
                    const description_131: string;
                    export { description_131 as description };
                    const oneOf_17: {
                        $ref: string;
                    }[];
                    export { oneOf_17 as oneOf };
                }
                export { additionalProperties_20 as additionalProperties };
            }
            namespace tsConfigPath {
                const description_132: string;
                export { description_132 as description };
                const type_69: string;
                export { type_69 as type };
            }
        }
        export { properties_16 as properties };
    }
    namespace RuleSetCondition {
        const description_133: string;
        export { description_133 as description };
        const anyOf_40: ({
            instanceof: string;
            type?: undefined;
            $ref?: undefined;
        } | {
            type: string;
            instanceof?: undefined;
            $ref?: undefined;
        } | {
            $ref: string;
            instanceof?: undefined;
            type?: undefined;
        })[];
        export { anyOf_40 as anyOf };
    }
    namespace RuleSetConditionOrConditions {
        const description_134: string;
        export { description_134 as description };
        const anyOf_41: {
            $ref: string;
        }[];
        export { anyOf_41 as anyOf };
    }
    namespace RuleSetConditions {
        const description_135: string;
        export { description_135 as description };
        const type_70: string;
        export { type_70 as type };
        export namespace items_10 {
            const description_136: string;
            export { description_136 as description };
            const oneOf_18: {
                $ref: string;
            }[];
            export { oneOf_18 as oneOf };
        }
        export { items_10 as items };
    }
    namespace RuleSetLoader {
        const description_137: string;
        export { description_137 as description };
        const type_71: string;
        export { type_71 as type };
        const minLength_5: number;
        export { minLength_5 as minLength };
    }
    namespace RuleSetLoaderOptions {
        const description_138: string;
        export { description_138 as description };
        const anyOf_42: {
            type: string;
        }[];
        export { anyOf_42 as anyOf };
    }
    namespace RuleSetLogicalConditions {
        const description_139: string;
        export { description_139 as description };
        const type_72: string;
        export { type_72 as type };
        const additionalProperties_21: boolean;
        export { additionalProperties_21 as additionalProperties };
        export namespace properties_17 {
            namespace and {
                const description_140: string;
                export { description_140 as description };
                const oneOf_19: {
                    $ref: string;
                }[];
                export { oneOf_19 as oneOf };
            }
            namespace not {
                const description_141: string;
                export { description_141 as description };
                const oneOf_20: {
                    $ref: string;
                }[];
                export { oneOf_20 as oneOf };
            }
            namespace or {
                const description_142: string;
                export { description_142 as description };
                const oneOf_21: {
                    $ref: string;
                }[];
                export { oneOf_21 as oneOf };
            }
        }
        export { properties_17 as properties };
    }
    namespace RuleSetRule {
        const description_143: string;
        export { description_143 as description };
        const type_73: string;
        export { type_73 as type };
        const additionalProperties_22: boolean;
        export { additionalProperties_22 as additionalProperties };
        export namespace properties_18 {
            export namespace exclude {
                const description_144: string;
                export { description_144 as description };
                const oneOf_22: {
                    $ref: string;
                }[];
                export { oneOf_22 as oneOf };
            }
            export namespace generator {
                const description_145: string;
                export { description_145 as description };
                const type_74: string;
                export { type_74 as type };
            }
            export namespace include {
                const description_146: string;
                export { description_146 as description };
                const oneOf_23: {
                    $ref: string;
                }[];
                export { oneOf_23 as oneOf };
            }
            export namespace issuer {
                const description_147: string;
                export { description_147 as description };
                const oneOf_24: {
                    $ref: string;
                }[];
                export { oneOf_24 as oneOf };
            }
            export namespace oneOf_25 {
                const description_148: string;
                export { description_148 as description };
                const type_75: string;
                export { type_75 as type };
                export namespace items_11 {
                    const description_149: string;
                    export { description_149 as description };
                    const oneOf_26: {
                        $ref: string;
                    }[];
                    export { oneOf_26 as oneOf };
                }
                export { items_11 as items };
            }
            export { oneOf_25 as oneOf };
            export namespace parser_1 {
                const description_150: string;
                export { description_150 as description };
                const type_76: string;
                export { type_76 as type };
                const additionalProperties_23: boolean;
                export { additionalProperties_23 as additionalProperties };
            }
            export { parser_1 as parser };
            export namespace resolve {
                const description_151: string;
                export { description_151 as description };
                const type_77: string;
                export { type_77 as type };
                const oneOf_27: {
                    $ref: string;
                }[];
                export { oneOf_27 as oneOf };
            }
            export namespace resource {
                const description_152: string;
                export { description_152 as description };
                const oneOf_28: {
                    $ref: string;
                }[];
                export { oneOf_28 as oneOf };
            }
            export namespace resourceFragment {
                const description_153: string;
                export { description_153 as description };
                const oneOf_29: {
                    $ref: string;
                }[];
                export { oneOf_29 as oneOf };
            }
            export namespace resourceQuery {
                const description_154: string;
                export { description_154 as description };
                const oneOf_30: {
                    $ref: string;
                }[];
                export { oneOf_30 as oneOf };
            }
            export namespace rules_1 {
                const description_155: string;
                export { description_155 as description };
                const type_78: string;
                export { type_78 as type };
                export namespace items_12 {
                    const description_156: string;
                    export { description_156 as description };
                    const oneOf_31: {
                        $ref: string;
                    }[];
                    export { oneOf_31 as oneOf };
                }
                export { items_12 as items };
            }
            export { rules_1 as rules };
            export namespace sideEffects_1 {
                const description_157: string;
                export { description_157 as description };
                const type_79: string;
                export { type_79 as type };
            }
            export { sideEffects_1 as sideEffects };
            export namespace test_1 {
                const description_158: string;
                export { description_158 as description };
                const oneOf_32: {
                    $ref: string;
                }[];
                export { oneOf_32 as oneOf };
            }
            export { test_1 as test };
            export namespace type_80 {
                const description_159: string;
                export { description_159 as description };
                const type_81: string;
                export { type_81 as type };
            }
            export { type_80 as type };
            export namespace use {
                const description_160: string;
                export { description_160 as description };
                const oneOf_33: {
                    $ref: string;
                }[];
                export { oneOf_33 as oneOf };
            }
        }
        export { properties_18 as properties };
    }
    namespace RuleSetRules {
        const description_161: string;
        export { description_161 as description };
        const type_82: string;
        export { type_82 as type };
        export namespace items_13 {
            const description_162: string;
            export { description_162 as description };
            const anyOf_43: ({
                enum: string[];
                $ref?: undefined;
            } | {
                $ref: string;
                enum?: undefined;
            })[];
            export { anyOf_43 as anyOf };
        }
        export { items_13 as items };
    }
    namespace RuleSetUse {
        const description_163: string;
        export { description_163 as description };
        const anyOf_44: ({
            type: string;
            items: {
                description: string;
                oneOf: {
                    $ref: string;
                }[];
            };
            $ref?: undefined;
        } | {
            $ref: string;
            type?: undefined;
            items?: undefined;
        })[];
        export { anyOf_44 as anyOf };
    }
    namespace RuleSetUseItem {
        const description_164: string;
        export { description_164 as description };
        const anyOf_45: ({
            type: string;
            additionalProperties: boolean;
            properties: {
                loader: {
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                };
                options: {
                    description: string;
                    oneOf: {
                        $ref: string;
                    }[];
                };
            };
            $ref?: undefined;
        } | {
            $ref: string;
            type?: undefined;
            additionalProperties?: undefined;
            properties?: undefined;
        })[];
        export { anyOf_45 as anyOf };
    }
    namespace SnapshotOptions {
        const description_165: string;
        export { description_165 as description };
        const type_83: string;
        export { type_83 as type };
        const additionalProperties_24: boolean;
        export { additionalProperties_24 as additionalProperties };
        export namespace properties_19 {
            export namespace module_1 {
                const description_166: string;
                export { description_166 as description };
                const type_84: string;
                export { type_84 as type };
                const additionalProperties_25: boolean;
                export { additionalProperties_25 as additionalProperties };
                export namespace properties_20 {
                    namespace hash {
                        const description_167: string;
                        export { description_167 as description };
                        const type_85: string;
                        export { type_85 as type };
                    }
                    namespace timestamp {
                        const description_168: string;
                        export { description_168 as description };
                        const type_86: string;
                        export { type_86 as type };
                    }
                }
                export { properties_20 as properties };
            }
            export { module_1 as module };
            export namespace resolve_1 {
                const description_169: string;
                export { description_169 as description };
                const type_87: string;
                export { type_87 as type };
                const additionalProperties_26: boolean;
                export { additionalProperties_26 as additionalProperties };
                export namespace properties_21 {
                    export namespace hash_1 {
                        const description_170: string;
                        export { description_170 as description };
                        const type_88: string;
                        export { type_88 as type };
                    }
                    export { hash_1 as hash };
                    export namespace timestamp_1 {
                        const description_171: string;
                        export { description_171 as description };
                        const type_89: string;
                        export { type_89 as type };
                    }
                    export { timestamp_1 as timestamp };
                }
                export { properties_21 as properties };
            }
            export { resolve_1 as resolve };
        }
        export { properties_19 as properties };
    }
    namespace StatsOptions {
        const description_172: string;
        export { description_172 as description };
        const type_90: string;
        export { type_90 as type };
        const additionalProperties_27: boolean;
        export { additionalProperties_27 as additionalProperties };
        export namespace properties_22 {
            export namespace all {
                const description_173: string;
                export { description_173 as description };
                const type_91: string;
                export { type_91 as type };
            }
            export namespace assets {
                const description_174: string;
                export { description_174 as description };
                const type_92: string;
                export { type_92 as type };
            }
            export namespace chunkGroups {
                const description_175: string;
                export { description_175 as description };
                const type_93: string;
                export { type_93 as type };
            }
            export namespace chunks_2 {
                const description_176: string;
                export { description_176 as description };
                const type_94: string;
                export { type_94 as type };
            }
            export { chunks_2 as chunks };
            export namespace colors_1 {
                const description_177: string;
                export { description_177 as description };
                const type_95: string;
                export { type_95 as type };
            }
            export { colors_1 as colors };
            export namespace entrypoints {
                const description_178: string;
                export { description_178 as description };
                const anyOf_46: ({
                    enum: string[];
                    type?: undefined;
                } | {
                    type: string;
                    enum?: undefined;
                })[];
                export { anyOf_46 as anyOf };
            }
            export namespace errors {
                const description_179: string;
                export { description_179 as description };
                const type_96: string;
                export { type_96 as type };
            }
            export namespace errorsCount {
                const description_180: string;
                export { description_180 as description };
                const type_97: string;
                export { type_97 as type };
            }
            export namespace hash_2 {
                const description_181: string;
                export { description_181 as description };
                const type_98: string;
                export { type_98 as type };
            }
            export { hash_2 as hash };
            export namespace modules_1 {
                const description_182: string;
                export { description_182 as description };
                const type_99: string;
                export { type_99 as type };
            }
            export { modules_1 as modules };
            export namespace preset {
                const description_183: string;
                export { description_183 as description };
                const anyOf_47: {
                    type: string;
                }[];
                export { anyOf_47 as anyOf };
            }
            export namespace publicPath_1 {
                const description_184: string;
                export { description_184 as description };
                const type_100: string;
                export { type_100 as type };
            }
            export { publicPath_1 as publicPath };
            export namespace reasons {
                const description_185: string;
                export { description_185 as description };
                const type_101: string;
                export { type_101 as type };
            }
            export namespace warnings {
                const description_186: string;
                export { description_186 as description };
                const type_102: string;
                export { type_102 as type };
            }
            export namespace warningsCount {
                const description_187: string;
                export { description_187 as description };
                const type_103: string;
                export { type_103 as type };
            }
            export namespace outputPath {
                const description_188: string;
                export { description_188 as description };
                const type_104: string;
                export { type_104 as type };
            }
            export namespace chunkModules {
                const description_189: string;
                export { description_189 as description };
                const type_105: string;
                export { type_105 as type };
            }
            export namespace chunkRelations {
                const description_190: string;
                export { description_190 as description };
                const type_106: string;
                export { type_106 as type };
            }
            export namespace timings {
                const description_191: string;
                export { description_191 as description };
                const type_107: string;
                export { type_107 as type };
            }
            export namespace builtAt {
                const description_192: string;
                export { description_192 as description };
                const type_108: string;
                export { type_108 as type };
            }
        }
        export { properties_22 as properties };
    }
    namespace StatsValue {
        const description_193: string;
        export { description_193 as description };
        const anyOf_48: ({
            enum: string[];
            type?: undefined;
            $ref?: undefined;
        } | {
            type: string;
            enum?: undefined;
            $ref?: undefined;
        } | {
            $ref: string;
            enum?: undefined;
            type?: undefined;
        })[];
        export { anyOf_48 as anyOf };
    }
    namespace StrictModuleErrorHandling {
        const description_194: string;
        export { description_194 as description };
        const type_109: string;
        export { type_109 as type };
    }
    namespace Target {
        const description_195: string;
        export { description_195 as description };
        const anyOf_49: ({
            type: string;
            items: {
                description: string;
                type: string;
                minLength: number;
            };
            minItems: number;
            enum?: undefined;
            minLength?: undefined;
        } | {
            enum: boolean[];
            type?: undefined;
            items?: undefined;
            minItems?: undefined;
            minLength?: undefined;
        } | {
            type: string;
            minLength: number;
            items?: undefined;
            minItems?: undefined;
            enum?: undefined;
        })[];
        export { anyOf_49 as anyOf };
    }
    namespace UmdNamedDefine {
        const description_196: string;
        export { description_196 as description };
        const type_110: string;
        export { type_110 as type };
    }
    namespace UniqueName {
        const description_197: string;
        export { description_197 as description };
        const type_111: string;
        export { type_111 as type };
        const minLength_6: number;
        export { minLength_6 as minLength };
    }
    namespace Watch {
        const description_198: string;
        export { description_198 as description };
        const type_112: string;
        export { type_112 as type };
    }
    namespace WatchOptions {
        const description_199: string;
        export { description_199 as description };
        const type_113: string;
        export { type_113 as type };
        const additionalProperties_28: boolean;
        export { additionalProperties_28 as additionalProperties };
        export namespace properties_23 {
            namespace aggregateTimeout {
                const description_200: string;
                export { description_200 as description };
                const type_114: string;
                export { type_114 as type };
            }
            namespace followSymlinks {
                const description_201: string;
                export { description_201 as description };
                const type_115: string;
                export { type_115 as type };
            }
            namespace ignored {
                const description_202: string;
                export { description_202 as description };
                const anyOf_50: ({
                    type: string;
                    items: {
                        description: string;
                        type: string;
                        minLength: number;
                    };
                    instanceof?: undefined;
                    description?: undefined;
                    minLength?: undefined;
                } | {
                    instanceof: string;
                    type?: undefined;
                    items?: undefined;
                    description?: undefined;
                    minLength?: undefined;
                } | {
                    description: string;
                    type: string;
                    minLength: number;
                    items?: undefined;
                    instanceof?: undefined;
                })[];
                export { anyOf_50 as anyOf };
            }
            namespace poll {
                const description_203: string;
                export { description_203 as description };
                const anyOf_51: {
                    description: string;
                    type: string;
                }[];
                export { anyOf_51 as anyOf };
            }
            namespace stdin {
                const description_204: string;
                export { description_204 as description };
                const type_116: string;
                export { type_116 as type };
            }
        }
        export { properties_23 as properties };
    }
    namespace RspackPluginFunction {
        const description_205: string;
        export { description_205 as description };
        const _instanceof: string;
        export { _instanceof as instanceof };
    }
    namespace RspackPluginInstance {
        const description_206: string;
        export { description_206 as description };
        const type_117: string;
        export { type_117 as type };
        const additionalProperties_29: boolean;
        export { additionalProperties_29 as additionalProperties };
        export namespace properties_24 {
            namespace apply {
                const description_207: string;
                export { description_207 as description };
                const _instanceof_1: string;
                export { _instanceof_1 as instanceof };
            }
        }
        export { properties_24 as properties };
        const required_2: string[];
        export { required_2 as required };
    }
}
export declare const title: string;
declare const description_208: string;
declare const type_118: string;
declare const additionalProperties_30: boolean;
export declare namespace properties_25 {
    export namespace cache {
        const $ref_32: string;
        export { $ref_32 as $ref };
    }
    export namespace context {
        const $ref_33: string;
        export { $ref_33 as $ref };
    }
    export namespace dependencies {
        const $ref_34: string;
        export { $ref_34 as $ref };
    }
    export namespace devServer {
        const $ref_35: string;
        export { $ref_35 as $ref };
    }
    export namespace devtool {
        const $ref_36: string;
        export { $ref_36 as $ref };
    }
    export namespace entry {
        const $ref_37: string;
        export { $ref_37 as $ref };
    }
    export namespace experiments {
        const $ref_38: string;
        export { $ref_38 as $ref };
    }
    export namespace externals {
        const $ref_39: string;
        export { $ref_39 as $ref };
    }
    export namespace externalsType {
        const $ref_40: string;
        export { $ref_40 as $ref };
    }
    export namespace externalsPresets {
        const $ref_41: string;
        export { $ref_41 as $ref };
    }
    export namespace infrastructureLogging {
        const $ref_42: string;
        export { $ref_42 as $ref };
    }
    export namespace mode {
        const $ref_43: string;
        export { $ref_43 as $ref };
    }
    export namespace module_2 {
        const $ref_44: string;
        export { $ref_44 as $ref };
    }
    export { module_2 as module };
    export namespace name_2 {
        const $ref_45: string;
        export { $ref_45 as $ref };
    }
    export { name_2 as name };
    export namespace node_1 {
        const $ref_46: string;
        export { $ref_46 as $ref };
    }
    export { node_1 as node };
    export namespace optimization {
        const $ref_47: string;
        export { $ref_47 as $ref };
    }
    export namespace output {
        const $ref_48: string;
        export { $ref_48 as $ref };
    }
    export namespace plugins {
        const $ref_49: string;
        export { $ref_49 as $ref };
    }
    export namespace resolve_2 {
        const $ref_50: string;
        export { $ref_50 as $ref };
    }
    export { resolve_2 as resolve };
    export namespace snapshot {
        const $ref_51: string;
        export { $ref_51 as $ref };
    }
    export namespace stats {
        const $ref_52: string;
        export { $ref_52 as $ref };
    }
    export namespace target {
        const $ref_53: string;
        export { $ref_53 as $ref };
    }
    export namespace watch {
        const $ref_54: string;
        export { $ref_54 as $ref };
    }
    export namespace watchOptions {
        const $ref_55: string;
        export { $ref_55 as $ref };
    }
    export namespace builtins {
        const description_209: string;
        export { description_209 as description };
        const type_119: string;
        export { type_119 as type };
        const additionalProperties_31: boolean;
        export { additionalProperties_31 as additionalProperties };
    }
}
export { description_208 as description, type_118 as type, additionalProperties_30 as additionalProperties, properties_25 as properties };
//# sourceMappingURL=schema.d.ts.map