/** This file was automatically generated, Run `pnpm precompile-schema` to update */
"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = { "definitions": { "AssetModuleFilename": { "description": "The filename of asset modules as relative path inside the 'output.path' directory.", "anyOf": [{ "type": "string" }] }, "AssetParserDataUrlOptions": { "description": "Options object for DataUrl condition.", "type": "object", "additionalProperties": false, "properties": { "maxSize": { "description": "Maximum size of asset that should be inline as modules. Default: 8kb.", "type": "number" } } }, "AssetParserOptions": { "description": "Parser options for asset modules.", "type": "object", "additionalProperties": false, "properties": { "dataUrlCondition": { "description": "The condition for inlining the asset as DataUrl.", "anyOf": [{ "$ref": "#/definitions/AssetParserDataUrlOptions" }] } } }, "AuxiliaryComment": { "description": "Add a comment in the UMD wrapper.", "anyOf": [{ "description": "Append the same comment above each import style.", "type": "string" }, { "$ref": "#/definitions/LibraryCustomUmdCommentObject" }] }, "CacheOptions": { "description": "Cache generated modules and chunks to improve performance for multiple incremental builds.", "type": "boolean" }, "ChunkFilename": { "description": "Specifies the filename template of output files of non-initial chunks on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] }, "Context": { "description": "The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.", "type": "string" }, "CssChunkFilename": { "description": "Specifies the filename template of non-initial output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] }, "CssFilename": { "description": "Specifies the filename template of output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] }, "WebassemblyModuleFilename": { "description": "The filename of WebAssembly modules as relative path inside the 'output.path' directory.", "type": "string" }, "EnabledWasmLoadingTypes": { "description": "List of wasm loading types enabled for use by entry points.", "type": "array", "items": { "$ref": "#/definitions/WasmLoadingType" } }, "WasmLoading": { "description": "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/WasmLoadingType" }] }, "WasmLoadingType": { "description": "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).", "anyOf": [{ "enum": ["fetch-streaming", "fetch", "async-node"] }, { "type": "string" }] }, "Dependencies": { "description": "References to other configurations to depend on.", "type": "array", "items": { "description": "References to another configuration to depend on.", "type": "string" } }, "DevServer": { "description": "Options for the rspack-dev-server.", "type": "object" }, "DevTool": { "description": "A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).", "anyOf": [{ "enum": [false] }, { "type": "string", "pattern": "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$" }] }, "EnabledLibraryTypes": { "description": "List of library types enabled for use by entry points.", "type": "array", "items": { "$ref": "#/definitions/LibraryType" } }, "Entry": { "description": "The entry point(s) of the compilation.", "anyOf": [{ "$ref": "#/definitions/EntryStatic" }] }, "EntryDescription": { "description": "An object with entry point description.", "type": "object", "additionalProperties": false, "properties": { "import": { "$ref": "#/definitions/EntryItem" }, "runtime": { "$ref": "#/definitions/EntryRuntime" }, "wasmLoading": { "$ref": "#/definitions/WasmLoading" } }, "required": ["import"] }, "EntryFilename": { "description": "Specifies the filename of the output file on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] }, "EntryItem": { "description": "Module(s) that are loaded upon startup.", "anyOf": [{ "description": "All modules are loaded upon startup. The last one is exported.", "type": "array", "items": { "description": "A module that is loaded upon startup. Only the last one is exported.", "type": "string", "minLength": 1 }, "minItems": 1, "uniqueItems": true }, { "description": "The string is resolved to a module which is loaded upon startup.", "type": "string", "minLength": 1 }] }, "EntryObject": { "description": "Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.", "type": "object", "additionalProperties": { "description": "An entry point with name.", "anyOf": [{ "$ref": "#/definitions/EntryItem" }, { "$ref": "#/definitions/EntryDescription" }] } }, "EntryRuntime": { "description": "The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.", "anyOf": [{ "enum": [false] }, { "type": "string", "minLength": 1 }] }, "EntryStatic": { "description": "A static entry description.", "anyOf": [{ "$ref": "#/definitions/EntryObject" }, { "$ref": "#/definitions/EntryUnnamed" }] }, "EntryUnnamed": { "description": "An entry point without name.", "oneOf": [{ "$ref": "#/definitions/EntryItem" }] }, "Experiments": { "description": "Enables/Disables experiments (experimental features with relax SemVer compatibility).", "type": "object", "additionalProperties": false, "properties": { "asyncWebAssembly": { "description": "Support WebAssembly as asynchronous EcmaScript Module.", "type": "boolean" }, "incrementalRebuild": { "description": "Rebuild incrementally", "type": "boolean" }, "lazyCompilation": { "description": "Compile entrypoints and import()s only when they are accessed.", "anyOf": [{ "type": "boolean" }] } } }, "ExternalItem": { "description": "Specify dependency that shouldn't be resolved by rspack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.", "anyOf": [{ "description": "Every matched dependency becomes external.", "instanceof": "RegExp" }, { "description": "An exact matched dependency becomes external. The same string is used as external dependency.", "type": "string" }, { "description": "If an dependency matches exactly a property of the object, the property value is used as dependency.", "type": "object", "additionalProperties": { "$ref": "#/definitions/ExternalItemValue" } }] }, "ExternalItemValue": { "description": "The dependency used for the external.", "anyOf": [{ "description": "The target of the external.", "type": "string" }, { "description": "`true`: The dependency name is used as target of the external.", "type": "boolean" }] }, "Externals": { "description": "Specify dependencies that shouldn't be resolved by rspack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.", "anyOf": [{ "type": "array", "items": { "$ref": "#/definitions/ExternalItem" } }, { "$ref": "#/definitions/ExternalItem" }] }, "ExternalsPresets": { "description": "Enable presets of externals for specific targets.", "type": "object", "additionalProperties": false, "properties": { "node": { "description": "Treat node.js built-in modules like fs, path or vm as external and load them via require() when used.", "type": "boolean" } } }, "ExternalsType": { "description": "Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).", "enum": ["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "script", "node-commonjs"] }, "Filename": { "description": "Specifies the filename of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] }, "FilenameTemplate": { "description": "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "anyOf": [{ "type": "string", "minLength": 1 }, { "instanceof": "Function" }] }, "FilterItemTypes": { "description": "Filtering value, regexp or function.", "anyOf": [{ "instanceof": "RegExp" }, { "type": "string" }, { "instanceof": "Function" }] }, "FilterTypes": { "description": "Filtering values.", "anyOf": [{ "type": "array", "items": { "description": "Rule to filter.", "oneOf": [{ "$ref": "#/definitions/FilterItemTypes" }] } }, { "$ref": "#/definitions/FilterItemTypes" }] }, "GlobalObject": { "description": "An expression which is used to address the global object/scope in runtime code.", "type": "string", "minLength": 1 }, "ImportFunctionName": { "description": "The name of the native import() function (can be exchanged for a polyfill).", "type": "string" }, "InfrastructureLogging": { "description": "Options for infrastructure level logging.", "type": "object", "additionalProperties": false, "properties": { "appendOnly": { "description": "Only appends lines to the output. Avoids updating existing output e. g. for status messages. This option is only used when no custom console is provided.", "type": "boolean" }, "colors": { "description": "Enables/Disables colorful output. This option is only used when no custom console is provided.", "type": "boolean" }, "console": { "description": "Custom console used for logging." }, "debug": { "description": "Enable debug logging for specific loggers.", "anyOf": [{ "description": "Enable/Disable debug logging for all loggers.", "type": "boolean" }, { "$ref": "#/definitions/FilterTypes" }] }, "level": { "description": "Log level.", "enum": ["none", "error", "warn", "info", "log", "verbose"] }, "stream": { "description": "Stream used for logging output. Defaults to process.stderr. This option is only used when no custom console is provided." } } }, "Library": { "description": "Make the output files a library, exporting the exports of the entry point.", "anyOf": [{ "$ref": "#/definitions/LibraryName" }, { "$ref": "#/definitions/LibraryOptions" }] }, "LibraryCustomUmdCommentObject": { "description": "Set explicit comments for `commonjs`, `commonjs2`, `amd`, and `root`.", "type": "object", "additionalProperties": false, "properties": { "amd": { "description": "Set comment for `amd` section in UMD.", "type": "string" }, "commonjs": { "description": "Set comment for `commonjs` (exports) section in UMD.", "type": "string" }, "commonjs2": { "description": "Set comment for `commonjs2` (module.exports) section in UMD.", "type": "string" }, "root": { "description": "Set comment for `root` (global variable) section in UMD.", "type": "string" } } }, "LibraryCustomUmdObject": { "description": "Description object for all UMD variants of the library name.", "type": "object", "additionalProperties": false, "properties": { "amd": { "description": "Name of the exposed AMD library in the UMD.", "type": "string", "minLength": 1 }, "commonjs": { "description": "Name of the exposed commonjs export in the UMD.", "type": "string", "minLength": 1 }, "root": { "description": "Name of the property exposed globally by a UMD library.", "anyOf": [{ "type": "array", "items": { "description": "Part of the name of the property exposed globally by a UMD library.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] } } }, "LibraryExport": { "description": "Specify which export should be exposed as library.", "anyOf": [{ "type": "array", "items": { "description": "Part of the export that should be exposed as library.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] }, "LibraryName": { "description": "The name of the library (some types allow unnamed libraries too).", "anyOf": [{ "type": "array", "items": { "description": "A part of the library name.", "type": "string", "minLength": 1 }, "minItems": 1 }, { "type": "string", "minLength": 1 }, { "$ref": "#/definitions/LibraryCustomUmdObject" }] }, "LibraryOptions": { "description": "Options for library.", "type": "object", "additionalProperties": false, "properties": { "auxiliaryComment": { "$ref": "#/definitions/AuxiliaryComment" }, "export": { "$ref": "#/definitions/LibraryExport" }, "name": { "$ref": "#/definitions/LibraryName" }, "type": { "$ref": "#/definitions/LibraryType" }, "umdNamedDefine": { "$ref": "#/definitions/UmdNamedDefine" } }, "required": ["type"] }, "LibraryType": { "description": "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).", "anyOf": [{ "enum": ["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"] }, { "type": "string" }] }, "Mode": { "description": "Enable production optimizations or development hints.", "enum": ["development", "production", "none"] }, "ModuleOptions": { "description": "Options affecting the normal modules (`NormalModuleFactory`).", "type": "object", "additionalProperties": false, "properties": { "defaultRules": { "description": "An array of rules applied by default for modules.", "oneOf": [{ "$ref": "#/definitions/RuleSetRules" }] }, "parser": { "$ref": "#/definitions/ParserOptionsByModuleType" }, "rules": { "description": "An array of rules applied for modules.", "oneOf": [{ "$ref": "#/definitions/RuleSetRules" }] } } }, "Name": { "description": "Name of the configuration. Used when loading multiple configurations.", "type": "string" }, "Node": { "description": "Include polyfills or mocks for various node stuff.", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/NodeOptions" }] }, "NodeOptions": { "description": "Options object for node compatibility features.", "type": "object", "additionalProperties": false, "properties": { "__dirname": { "description": "Include a polyfill for the '__dirname' variable.", "enum": [false, true, "warn-mock", "mock", "eval-only"] }, "__filename": { "description": "Include a polyfill for the '__filename' variable.", "enum": [false, true, "warn-mock", "mock", "eval-only"] }, "global": { "description": "Include a polyfill for the 'global' variable.", "enum": [false, true, "warn"] } } }, "Optimization": { "description": "Enables/Disables integrated optimizations.", "type": "object", "additionalProperties": false, "properties": { "chunkIds": { "description": "Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin).", "enum": ["named", "deterministic"] }, "minimize": { "description": "Enable minimizing the output. Uses optimization.minimizer.", "type": "boolean" }, "minimizer": { "description": "Minimizer(s) to use for minimizing the output.", "type": "array", "items": { "description": "Plugin of type object or instanceof Function.", "anyOf": [{ "enum": ["..."] }, { "$ref": "#/definitions/RspackPluginInstance" }, { "$ref": "#/definitions/RspackPluginFunction" }] } }, "moduleIds": { "description": "Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin).", "enum": ["named", "deterministic"] }, "removeAvailableModules": { "description": "Removes modules from chunks when these modules are already included in all parents.", "type": "boolean" }, "runtimeChunk": { "$ref": "#/definitions/OptimizationRuntimeChunk" }, "sideEffects": { "description": "Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects).", "anyOf": [{ "enum": ["flag"] }, { "type": "boolean" }] }, "splitChunks": { "description": "Optimize duplication and caching by splitting chunks by shared modules and cache group.", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/OptimizationSplitChunksOptions" }] } } }, "OptimizationRuntimeChunk": { "description": "Create an additional chunk which contains only the rspack runtime and chunk hash maps.", "anyOf": [{ "enum": ["single", "multiple"] }, { "type": "boolean" }, { "type": "object", "additionalProperties": false, "properties": { "name": { "description": "The name or name factory for the runtime chunks.", "anyOf": [{ "type": "string" }, { "instanceof": "Function" }] } } }] }, "OptimizationSplitChunksCacheGroup": { "description": "Options object for describing behavior of a cache group selecting modules that should be cached together.", "type": "object", "additionalProperties": false, "properties": { "chunks": { "description": "Select chunks for determining cache group content (defaults to \"initial\", \"initial\" and \"all\" requires adding these chunks to the HTML).", "anyOf": [{ "enum": ["initial", "async", "all"] }, { "instanceof": "Function" }] }, "minChunks": { "description": "Minimum number of times a module has to be duplicated until it's considered for splitting.", "type": "number", "minimum": 1 }, "name": { "description": "Give chunks for this cache group a name (chunks with equal name are merged).", "anyOf": [{ "enum": [false] }, { "type": "string" }, { "instanceof": "Function" }] }, "priority": { "description": "Priority of this cache group.", "type": "number" }, "reuseExistingChunk": { "description": "Try to reuse existing chunk (with name) when it has matching modules.", "type": "boolean" }, "test": { "description": "Assign modules to a cache group by module name.", "anyOf": [{ "instanceof": "RegExp" }] } } }, "OptimizationSplitChunksOptions": { "description": "Options object for splitting chunks into smaller chunks.", "type": "object", "additionalProperties": false, "properties": { "cacheGroups": { "description": "Assign modules to a cache group (modules from different cache groups are tried to keep in separate chunks, default categories: 'default', 'defaultVendors').", "type": "object", "additionalProperties": { "description": "Configuration for a cache group.", "anyOf": [{ "$ref": "#/definitions/OptimizationSplitChunksCacheGroup" }] } }, "chunks": { "description": "Select chunks for determining shared modules (defaults to \"async\", \"initial\" and \"all\" requires adding these chunks to the HTML).", "anyOf": [{ "enum": ["initial", "async", "all"] }] }, "enforceSizeThreshold": { "description": "Size threshold at which splitting is enforced and other restrictions (minRemainingSize, maxAsyncRequests, maxInitialRequests) are ignored.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] }, "maxAsyncRequests": { "description": "Maximum number of requests which are accepted for on-demand loading.", "type": "number", "minimum": 1 }, "maxInitialRequests": { "description": "Maximum number of initial chunks which are accepted for an entry point.", "type": "number", "minimum": 1 }, "minChunks": { "description": "Minimum number of times a module has to be duplicated until it's considered for splitting.", "type": "number", "minimum": 1 }, "minRemainingSize": { "description": "Minimal size for the chunks the stay after moving the modules to a new chunk.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] }, "minSize": { "description": "Minimal size for the created chunks.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] } } }, "OptimizationSplitChunksSizes": { "description": "Size description for limits.", "anyOf": [{ "description": "Size of the javascript part of the chunk.", "type": "number", "minimum": 0 }] }, "Iife": { "description": "Wrap javascript code into IIFE's to avoid leaking into global scope.", "type": "boolean" }, "Output": { "description": "Options affecting the output of the compilation. `output` options tell rspack how to write the compiled files to disk.", "type": "object", "additionalProperties": false, "properties": { "iife": { "$ref": "#/definitions/Iife" }, "assetModuleFilename": { "$ref": "#/definitions/AssetModuleFilename" }, "auxiliaryComment": { "oneOf": [{ "$ref": "#/definitions/AuxiliaryComment" }] }, "chunkFilename": { "$ref": "#/definitions/ChunkFilename" }, "cssChunkFilename": { "$ref": "#/definitions/CssChunkFilename" }, "cssFilename": { "$ref": "#/definitions/CssFilename" }, "enabledWasmLoadingTypes": { "$ref": "#/definitions/EnabledWasmLoadingTypes" }, "wasmLoading": { "$ref": "#/definitions/WasmLoading" }, "webassemblyModuleFilename": { "$ref": "#/definitions/WebassemblyModuleFilename" }, "enabledLibraryTypes": { "$ref": "#/definitions/EnabledLibraryTypes" }, "filename": { "$ref": "#/definitions/Filename" }, "globalObject": { "$ref": "#/definitions/GlobalObject" }, "importFunctionName": { "$ref": "#/definitions/ImportFunctionName" }, "library": { "$ref": "#/definitions/Library" }, "libraryExport": { "oneOf": [{ "$ref": "#/definitions/LibraryExport" }] }, "libraryTarget": { "oneOf": [{ "$ref": "#/definitions/LibraryType" }] }, "module": { "$ref": "#/definitions/OutputModule" }, "path": { "$ref": "#/definitions/Path" }, "publicPath": { "$ref": "#/definitions/PublicPath" }, "strictModuleErrorHandling": { "$ref": "#/definitions/StrictModuleErrorHandling" }, "umdNamedDefine": { "oneOf": [{ "$ref": "#/definitions/UmdNamedDefine" }] }, "uniqueName": { "$ref": "#/definitions/UniqueName" } } }, "OutputModule": { "description": "Output javascript files as module source type.", "type": "boolean" }, "ParserOptionsByModuleType": { "description": "Specify options for each parser.", "type": "object", "additionalProperties": { "description": "Options for parsing.", "type": "object", "additionalProperties": true }, "properties": { "asset": { "$ref": "#/definitions/AssetParserOptions" } } }, "Path": { "description": "The output directory as **absolute path** (required).", "type": "string" }, "Plugins": { "description": "Add additional plugins to the compiler.", "type": "array", "items": { "description": "Plugin of type object or instanceof Function.", "anyOf": [{ "$ref": "#/definitions/RspackPluginInstance" }, { "$ref": "#/definitions/RspackPluginFunction" }] } }, "PublicPath": { "description": "The 'publicPath' specifies the public URL address of the output files when referenced in a browser.", "anyOf": [{ "enum": ["auto"] }, { "$ref": "#/definitions/RawPublicPath" }] }, "RawPublicPath": { "description": "The 'publicPath' specifies the public URL address of the output files when referenced in a browser.", "anyOf": [{ "type": "string" }] }, "Resolve": { "description": "Options for the resolver.", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] }, "ResolveAlias": { "description": "Redirect module requests.", "anyOf": [{ "type": "object", "additionalProperties": { "description": "New request.", "anyOf": [{ "description": "Multiple alternative requests.", "type": "array", "items": { "description": "One choice of request.", "type": "string", "minLength": 1 } }, { "description": "Ignore request (replace with empty module).", "enum": [false] }, { "description": "New request.", "type": "string", "minLength": 1 }] } }] }, "ResolveOptions": { "description": "Options object for resolving requests.", "type": "object", "additionalProperties": false, "properties": { "alias": { "$ref": "#/definitions/ResolveAlias" }, "browserField": { "description": "Fields in the description file (usually package.json) which are used to redirect requests inside the module.", "type": "boolean" }, "conditionNames": { "description": "Condition names for exports field entry point.", "type": "array", "items": { "description": "Condition names for exports field entry point.", "type": "string" } }, "extensions": { "description": "Extensions added to the request when trying to find the file.", "type": "array", "items": { "description": "Extension added to the request when trying to find the file.", "type": "string" } }, "fallback": { "description": "Redirect module requests when normal resolving fails.", "oneOf": [{ "$ref": "#/definitions/ResolveAlias" }] }, "mainFields": { "description": "Field names from the description file (package.json) which are used to find the default entry point.", "type": "array", "items": { "description": "Field name from the description file (package.json) which are used to find the default entry point.", "anyOf": [{ "type": "array", "items": { "description": "Part of the field path from the description file (package.json) which are used to find the default entry point.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] } }, "mainFiles": { "description": "Filenames used to find the default entry point if there is no description file or main field.", "type": "array", "items": { "description": "Filename used to find the default entry point if there is no description file or main field.", "type": "string", "minLength": 1 } }, "modules": { "description": "Folder names or directory paths where to find modules.", "type": "array", "items": { "description": "Folder name or directory path where to find modules.", "type": "string", "minLength": 1 } }, "preferRelative": { "description": "Prefer to resolve module requests as relative request and fallback to resolving as module.", "type": "boolean" }, "byDependency": { "description": "Extra resolve options per dependency category. Typical categories are \"commonjs\", \"amd\", \"esm\".", "type": "object", "additionalProperties": { "description": "Options object for resolving requests.", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] } }, "tsConfigPath": { "description": "Path to tsconfig.json", "type": "string" } } }, "RuleSetCondition": { "description": "A condition matcher.", "anyOf": [{ "instanceof": "RegExp" }, { "type": "string" }, { "instanceof": "Function" }, { "$ref": "#/definitions/RuleSetLogicalConditions" }, { "$ref": "#/definitions/RuleSetConditions" }] }, "RuleSetConditionOrConditions": { "description": "One or multiple rule conditions.", "anyOf": [{ "$ref": "#/definitions/RuleSetCondition" }, { "$ref": "#/definitions/RuleSetConditions" }] }, "RuleSetConditions": { "description": "A list of rule conditions.", "type": "array", "items": { "description": "A rule condition.", "oneOf": [{ "$ref": "#/definitions/RuleSetCondition" }] } }, "RuleSetLoader": { "description": "A loader request.", "type": "string", "minLength": 1 }, "RuleSetLoaderOptions": { "description": "Options passed to a loader.", "anyOf": [{ "type": "string" }, { "type": "object" }] }, "RuleSetLogicalConditions": { "description": "Logic operators used in a condition matcher.", "type": "object", "additionalProperties": false, "properties": { "and": { "description": "Logical AND.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditions" }] }, "not": { "description": "Logical NOT.", "oneOf": [{ "$ref": "#/definitions/RuleSetCondition" }] }, "or": { "description": "Logical OR.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditions" }] } } }, "RuleSetRule": { "description": "A rule description with conditions and effects for modules.", "type": "object", "additionalProperties": false, "properties": { "exclude": { "description": "Shortcut for resource.exclude.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "generator": { "description": "The options for the module generator.", "type": "object" }, "include": { "description": "Shortcut for resource.include.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "issuer": { "description": "Match the issuer of the module (The module pointing to this module).", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "oneOf": { "description": "Only execute the first matching rule in this array.", "type": "array", "items": { "description": "A rule.", "oneOf": [{ "$ref": "#/definitions/RuleSetRule" }] } }, "parser": { "description": "Options for parsing.", "type": "object", "additionalProperties": true }, "resolve": { "description": "Options for the resolver.", "type": "object", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] }, "resource": { "description": "Match the resource path of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "resourceFragment": { "description": "Match the resource fragment of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "resourceQuery": { "description": "Match the resource query of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "rules": { "description": "Match and execute these rules when this rule is matched.", "type": "array", "items": { "description": "A rule.", "oneOf": [{ "$ref": "#/definitions/RuleSetRule" }] } }, "sideEffects": { "description": "Flags a module as with or without side effects.", "type": "boolean" }, "test": { "description": "Shortcut for resource.test.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "type": { "description": "Module type to use for the module.", "type": "string" }, "use": { "description": "Modifiers applied to the module when rule is matched.", "oneOf": [{ "$ref": "#/definitions/RuleSetUse" }] } } }, "RuleSetRules": { "description": "A list of rules.", "type": "array", "items": { "description": "A rule.", "anyOf": [{ "enum": ["..."] }, { "$ref": "#/definitions/RuleSetRule" }] } }, "RuleSetUse": { "description": "A list of descriptions of loaders applied.", "anyOf": [{ "type": "array", "items": { "description": "An use item.", "oneOf": [{ "$ref": "#/definitions/RuleSetUseItem" }] } }, { "$ref": "#/definitions/RuleSetUseItem" }] }, "RuleSetUseItem": { "description": "A description of an applied loader.", "anyOf": [{ "type": "object", "additionalProperties": false, "properties": { "loader": { "description": "Loader name.", "oneOf": [{ "$ref": "#/definitions/RuleSetLoader" }] }, "options": { "description": "Loader options.", "oneOf": [{ "$ref": "#/definitions/RuleSetLoaderOptions" }] } } }, { "$ref": "#/definitions/RuleSetLoader" }] }, "SnapshotOptions": { "description": "Options affecting how file system snapshots are created and validated.", "type": "object", "additionalProperties": false, "properties": { "module": { "description": "Options for snapshotting dependencies of modules to determine if they need to be built again.", "type": "object", "additionalProperties": false, "properties": { "hash": { "description": "Use hashes of the content of the files/directories to determine invalidation.", "type": "boolean" }, "timestamp": { "description": "Use timestamps of the files/directories to determine invalidation.", "type": "boolean" } } }, "resolve": { "description": "Options for snapshotting dependencies of request resolving to determine if requests need to be re-resolved.", "type": "object", "additionalProperties": false, "properties": { "hash": { "description": "Use hashes of the content of the files/directories to determine invalidation.", "type": "boolean" }, "timestamp": { "description": "Use timestamps of the files/directories to determine invalidation.", "type": "boolean" } } } } }, "StatsOptions": { "description": "Stats options object.", "type": "object", "additionalProperties": true, "properties": { "all": { "description": "Fallback value for stats options when an option is not defined (has precedence over local rspack defaults).", "type": "boolean" }, "assets": { "description": "Add assets information.", "type": "boolean" }, "chunkGroups": { "description": "Display all chunk groups with the corresponding bundles.", "type": "boolean" }, "chunks": { "description": "Add chunk information.", "type": "boolean" }, "colors": { "description": "Enables/Disables colorful output.", "type": "boolean" }, "entrypoints": { "description": "Display the entry points with the corresponding bundles.", "anyOf": [{ "enum": ["auto"] }, { "type": "boolean" }] }, "errors": { "description": "Add errors.", "type": "boolean" }, "errorsCount": { "description": "Add errors count.", "type": "boolean" }, "hash": { "description": "Add the hash of the compilation.", "type": "boolean" }, "modules": { "description": "Add built modules information.", "type": "boolean" }, "preset": { "description": "Preset for the default values.", "anyOf": [{ "type": "boolean" }, { "type": "string" }] }, "publicPath": { "description": "Add public path information.", "type": "boolean" }, "reasons": { "description": "Add information about the reasons why modules are included.", "type": "boolean" }, "warnings": { "description": "Add warnings.", "type": "boolean" }, "warningsCount": { "description": "Add warnings count.", "type": "boolean" }, "outputPath": { "description": "Add output path information.", "type": "boolean" }, "chunkModules": { "description": "Add built modules information to chunk information.", "type": "boolean" }, "chunkRelations": { "description": "Add information about parent, children and sibling chunks to chunk information.", "type": "boolean" }, "timings": { "description": "Add timing information.", "type": "boolean" }, "builtAt": { "description": "Add built at time information.", "type": "boolean" } } }, "StatsValue": { "description": "Stats options object or preset name.", "anyOf": [{ "enum": ["none", "errors-only", "errors-warnings", "normal", "verbose"] }, { "type": "boolean" }, { "$ref": "#/definitions/StatsOptions" }] }, "StrictModuleErrorHandling": { "description": "Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec.", "type": "boolean" }, "Target": { "description": "Environment to build for. An array of environments to build for all of them when possible.", "anyOf": [{ "type": "array", "items": { "description": "Environment to build for.", "type": "string", "minLength": 1 }, "minItems": 1 }, { "enum": [false] }, { "type": "string", "minLength": 1 }] }, "UmdNamedDefine": { "description": "If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.", "type": "boolean" }, "UniqueName": { "description": "A unique name of the rspack build to avoid multiple rspack runtimes to conflict when using globals.", "type": "string", "minLength": 1 }, "Watch": { "description": "Enter watch mode, which rebuilds on file change.", "type": "boolean" }, "WatchOptions": { "description": "Options for the watcher.", "type": "object", "additionalProperties": false, "properties": { "aggregateTimeout": { "description": "Delay the rebuilt after the first change. Value is a time in ms.", "type": "number" }, "followSymlinks": { "description": "Resolve symlinks and watch symlink and real file. This is usually not needed as rspack already resolves symlinks ('resolve.symlinks').", "type": "boolean" }, "ignored": { "description": "Ignore some files from watching (glob pattern or regexp).", "anyOf": [{ "type": "array", "items": { "description": "A glob pattern for files that should be ignored from watching.", "type": "string", "minLength": 1 } }, { "instanceof": "RegExp" }, { "description": "A single glob pattern for files that should be ignored from watching.", "type": "string", "minLength": 1 }] }, "poll": { "description": "Enable polling mode for watching.", "anyOf": [{ "description": "`number`: use polling with specified interval.", "type": "number" }, { "description": "`true`: use polling.", "type": "boolean" }] }, "stdin": { "description": "Stop watching when stdin stream has ended.", "type": "boolean" } } }, "RspackPluginFunction": { "description": "Function acting as plugin.", "instanceof": "Function" }, "RspackPluginInstance": { "description": "Plugin instance.", "type": "object", "additionalProperties": true, "properties": { "apply": { "description": "The run point of the plugin, required method.", "instanceof": "Function" } }, "required": ["apply"] } }, "title": "RspackOptions", "description": "Options object as provided by the user.", "type": "object", "additionalProperties": false, "properties": { "cache": { "$ref": "#/definitions/CacheOptions" }, "context": { "$ref": "#/definitions/Context" }, "dependencies": { "$ref": "#/definitions/Dependencies" }, "devServer": { "$ref": "#/definitions/DevServer" }, "devtool": { "$ref": "#/definitions/DevTool" }, "entry": { "$ref": "#/definitions/Entry" }, "experiments": { "$ref": "#/definitions/Experiments" }, "externals": { "$ref": "#/definitions/Externals" }, "externalsType": { "$ref": "#/definitions/ExternalsType" }, "externalsPresets": { "$ref": "#/definitions/ExternalsPresets" }, "infrastructureLogging": { "$ref": "#/definitions/InfrastructureLogging" }, "mode": { "$ref": "#/definitions/Mode" }, "module": { "$ref": "#/definitions/ModuleOptions" }, "name": { "$ref": "#/definitions/Name" }, "node": { "$ref": "#/definitions/Node" }, "optimization": { "$ref": "#/definitions/Optimization" }, "output": { "$ref": "#/definitions/Output" }, "plugins": { "$ref": "#/definitions/Plugins" }, "resolve": { "$ref": "#/definitions/Resolve" }, "snapshot": { "$ref": "#/definitions/SnapshotOptions" }, "stats": { "$ref": "#/definitions/StatsValue" }, "target": { "$ref": "#/definitions/Target" }, "watch": { "$ref": "#/definitions/Watch" }, "watchOptions": { "$ref": "#/definitions/WatchOptions" }, "builtins": { "description": "Builtins features in rspack", "type": "object", "additionalProperties": true } } };
const schema12 = { "description": "Cache generated modules and chunks to improve performance for multiple incremental builds.", "type": "boolean" };
const schema13 = { "description": "The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.", "type": "string" };
const schema14 = { "description": "References to other configurations to depend on.", "type": "array", "items": { "description": "References to another configuration to depend on.", "type": "string" } };
const schema15 = { "description": "Options for the rspack-dev-server.", "type": "object" };
const schema16 = { "description": "A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).", "anyOf": [{ "enum": [false] }, { "type": "string", "pattern": "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$" }] };
const schema28 = { "description": "Enables/Disables experiments (experimental features with relax SemVer compatibility).", "type": "object", "additionalProperties": false, "properties": { "asyncWebAssembly": { "description": "Support WebAssembly as asynchronous EcmaScript Module.", "type": "boolean" }, "incrementalRebuild": { "description": "Rebuild incrementally", "type": "boolean" }, "lazyCompilation": { "description": "Compile entrypoints and import()s only when they are accessed.", "anyOf": [{ "type": "boolean" }] } } };
const schema32 = { "description": "Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).", "enum": ["var", "module", "assign", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system", "promise", "import", "script", "node-commonjs"] };
const schema33 = { "description": "Enable presets of externals for specific targets.", "type": "object", "additionalProperties": false, "properties": { "node": { "description": "Treat node.js built-in modules like fs, path or vm as external and load them via require() when used.", "type": "boolean" } } };
const schema38 = { "description": "Enable production optimizations or development hints.", "enum": ["development", "production", "none"] };
const schema57 = { "description": "Name of the configuration. Used when loading multiple configurations.", "type": "string" };
const schema109 = { "description": "Options affecting how file system snapshots are created and validated.", "type": "object", "additionalProperties": false, "properties": { "module": { "description": "Options for snapshotting dependencies of modules to determine if they need to be built again.", "type": "object", "additionalProperties": false, "properties": { "hash": { "description": "Use hashes of the content of the files/directories to determine invalidation.", "type": "boolean" }, "timestamp": { "description": "Use timestamps of the files/directories to determine invalidation.", "type": "boolean" } } }, "resolve": { "description": "Options for snapshotting dependencies of request resolving to determine if requests need to be re-resolved.", "type": "object", "additionalProperties": false, "properties": { "hash": { "description": "Use hashes of the content of the files/directories to determine invalidation.", "type": "boolean" }, "timestamp": { "description": "Use timestamps of the files/directories to determine invalidation.", "type": "boolean" } } } } };
const schema112 = { "description": "Environment to build for. An array of environments to build for all of them when possible.", "anyOf": [{ "type": "array", "items": { "description": "Environment to build for.", "type": "string", "minLength": 1 }, "minItems": 1 }, { "enum": [false] }, { "type": "string", "minLength": 1 }] };
const schema113 = { "description": "Enter watch mode, which rebuilds on file change.", "type": "boolean" };
const schema114 = { "description": "Options for the watcher.", "type": "object", "additionalProperties": false, "properties": { "aggregateTimeout": { "description": "Delay the rebuilt after the first change. Value is a time in ms.", "type": "number" }, "followSymlinks": { "description": "Resolve symlinks and watch symlink and real file. This is usually not needed as rspack already resolves symlinks ('resolve.symlinks').", "type": "boolean" }, "ignored": { "description": "Ignore some files from watching (glob pattern or regexp).", "anyOf": [{ "type": "array", "items": { "description": "A glob pattern for files that should be ignored from watching.", "type": "string", "minLength": 1 } }, { "instanceof": "RegExp" }, { "description": "A single glob pattern for files that should be ignored from watching.", "type": "string", "minLength": 1 }] }, "poll": { "description": "Enable polling mode for watching.", "anyOf": [{ "description": "`number`: use polling with specified interval.", "type": "number" }, { "description": "`true`: use polling.", "type": "boolean" }] }, "stdin": { "description": "Stop watching when stdin stream has ended.", "type": "boolean" } } };
const func2 = Object.prototype.hasOwnProperty;
const pattern0 = new RegExp("^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$", "u");
const schema17 = { "description": "The entry point(s) of the compilation.", "anyOf": [{ "$ref": "#/definitions/EntryStatic" }] };
const schema18 = { "description": "A static entry description.", "anyOf": [{ "$ref": "#/definitions/EntryObject" }, { "$ref": "#/definitions/EntryUnnamed" }] };
const schema19 = { "description": "Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.", "type": "object", "additionalProperties": { "description": "An entry point with name.", "anyOf": [{ "$ref": "#/definitions/EntryItem" }, { "$ref": "#/definitions/EntryDescription" }] } };
const schema20 = { "description": "Module(s) that are loaded upon startup.", "anyOf": [{ "description": "All modules are loaded upon startup. The last one is exported.", "type": "array", "items": { "description": "A module that is loaded upon startup. Only the last one is exported.", "type": "string", "minLength": 1 }, "minItems": 1, "uniqueItems": true }, { "description": "The string is resolved to a module which is loaded upon startup.", "type": "string", "minLength": 1 }] };
const schema21 = { "description": "An object with entry point description.", "type": "object", "additionalProperties": false, "properties": { "import": { "$ref": "#/definitions/EntryItem" }, "runtime": { "$ref": "#/definitions/EntryRuntime" }, "wasmLoading": { "$ref": "#/definitions/WasmLoading" } }, "required": ["import"] };
const schema23 = { "description": "The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.", "anyOf": [{ "enum": [false] }, { "type": "string", "minLength": 1 }] };
const schema24 = { "description": "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/WasmLoadingType" }] };
const schema25 = { "description": "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins).", "anyOf": [{ "enum": ["fetch-streaming", "fetch", "async-node"] }, { "type": "string" }] };
function validate15(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (data !== false) {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    const _errs4 = errors;
    let valid2 = false;
    const _errs5 = errors;
    if (data !== "fetch-streaming" && data !== "fetch" && data !== "async-node") {
        const err1 = { instancePath, schemaPath: "#/definitions/WasmLoadingType/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid1 = _errs5 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
        const _errs6 = errors;
        if (typeof data !== "string") {
            const err2 = { instancePath, schemaPath: "#/definitions/WasmLoadingType/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
                vErrors = [err2];
            }
            else {
                vErrors.push(err2);
            }
            errors++;
        }
        var _valid1 = _errs6 === errors;
        valid2 = valid2 || _valid1;
    }
    if (!valid2) {
        const err3 = { instancePath, schemaPath: "#/definitions/WasmLoadingType/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
        if (vErrors === null) {
            vErrors = [err3];
        }
        else {
            vErrors.push(err3);
        }
        errors++;
    }
    else {
        errors = _errs4;
        if (vErrors !== null) {
            if (_errs4) {
                vErrors.length = _errs4;
            }
            else {
                vErrors = null;
            }
        }
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err4 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err4];
    }
    else {
        vErrors.push(err4);
    }
    errors++;
    validate15.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate15.errors = vErrors; return errors === 0; }
function validate14(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((data.import === undefined) && (missing0 = "import")) {
            validate14.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
            return false;
        }
        else {
            const _errs1 = errors;
            for (const key0 in data) {
                if (!(((key0 === "import") || (key0 === "runtime")) || (key0 === "wasmLoading"))) {
                    validate14.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                    return false;
                    break;
                }
            }
            if (_errs1 === errors) {
                if (data.import !== undefined) {
                    let data0 = data.import;
                    const _errs2 = errors;
                    const _errs4 = errors;
                    let valid2 = false;
                    const _errs5 = errors;
                    if (errors === _errs5) {
                        if (Array.isArray(data0)) {
                            if (data0.length < 1) {
                                const err0 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf/0/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
                                if (vErrors === null) {
                                    vErrors = [err0];
                                }
                                else {
                                    vErrors.push(err0);
                                }
                                errors++;
                            }
                            else {
                                var valid3 = true;
                                const len0 = data0.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    let data1 = data0[i0];
                                    const _errs7 = errors;
                                    if (errors === _errs7) {
                                        if (typeof data1 === "string") {
                                            if (data1.length < 1) {
                                                const err1 = { instancePath: instancePath + "/import/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err1];
                                                }
                                                else {
                                                    vErrors.push(err1);
                                                }
                                                errors++;
                                            }
                                        }
                                        else {
                                            const err2 = { instancePath: instancePath + "/import/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                                vErrors = [err2];
                                            }
                                            else {
                                                vErrors.push(err2);
                                            }
                                            errors++;
                                        }
                                    }
                                    var valid3 = _errs7 === errors;
                                    if (!valid3) {
                                        break;
                                    }
                                }
                                if (valid3) {
                                    let i1 = data0.length;
                                    let j0;
                                    if (i1 > 1) {
                                        const indices0 = {};
                                        for (; i1--;) {
                                            let item0 = data0[i1];
                                            if (typeof item0 !== "string") {
                                                continue;
                                            }
                                            if (typeof indices0[item0] == "number") {
                                                j0 = indices0[item0];
                                                const err3 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf/0/uniqueItems", keyword: "uniqueItems", params: { i: i1, j: j0 }, message: "must NOT have duplicate items (items ## " + j0 + " and " + i1 + " are identical)" };
                                                if (vErrors === null) {
                                                    vErrors = [err3];
                                                }
                                                else {
                                                    vErrors.push(err3);
                                                }
                                                errors++;
                                                break;
                                            }
                                            indices0[item0] = i1;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            const err4 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                            if (vErrors === null) {
                                vErrors = [err4];
                            }
                            else {
                                vErrors.push(err4);
                            }
                            errors++;
                        }
                    }
                    var _valid0 = _errs5 === errors;
                    valid2 = valid2 || _valid0;
                    if (!valid2) {
                        const _errs9 = errors;
                        if (errors === _errs9) {
                            if (typeof data0 === "string") {
                                if (data0.length < 1) {
                                    const err5 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                    if (vErrors === null) {
                                        vErrors = [err5];
                                    }
                                    else {
                                        vErrors.push(err5);
                                    }
                                    errors++;
                                }
                            }
                            else {
                                const err6 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                if (vErrors === null) {
                                    vErrors = [err6];
                                }
                                else {
                                    vErrors.push(err6);
                                }
                                errors++;
                            }
                        }
                        var _valid0 = _errs9 === errors;
                        valid2 = valid2 || _valid0;
                    }
                    if (!valid2) {
                        const err7 = { instancePath: instancePath + "/import", schemaPath: "#/definitions/EntryItem/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                        if (vErrors === null) {
                            vErrors = [err7];
                        }
                        else {
                            vErrors.push(err7);
                        }
                        errors++;
                        validate14.errors = vErrors;
                        return false;
                    }
                    else {
                        errors = _errs4;
                        if (vErrors !== null) {
                            if (_errs4) {
                                vErrors.length = _errs4;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid0 = _errs2 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.runtime !== undefined) {
                        let data2 = data.runtime;
                        const _errs11 = errors;
                        const _errs13 = errors;
                        let valid6 = false;
                        const _errs14 = errors;
                        if (data2 !== false) {
                            const err8 = { instancePath: instancePath + "/runtime", schemaPath: "#/definitions/EntryRuntime/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err8];
                            }
                            else {
                                vErrors.push(err8);
                            }
                            errors++;
                        }
                        var _valid1 = _errs14 === errors;
                        valid6 = valid6 || _valid1;
                        if (!valid6) {
                            const _errs15 = errors;
                            if (errors === _errs15) {
                                if (typeof data2 === "string") {
                                    if (data2.length < 1) {
                                        const err9 = { instancePath: instancePath + "/runtime", schemaPath: "#/definitions/EntryRuntime/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err9];
                                        }
                                        else {
                                            vErrors.push(err9);
                                        }
                                        errors++;
                                    }
                                }
                                else {
                                    const err10 = { instancePath: instancePath + "/runtime", schemaPath: "#/definitions/EntryRuntime/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                    if (vErrors === null) {
                                        vErrors = [err10];
                                    }
                                    else {
                                        vErrors.push(err10);
                                    }
                                    errors++;
                                }
                            }
                            var _valid1 = _errs15 === errors;
                            valid6 = valid6 || _valid1;
                        }
                        if (!valid6) {
                            const err11 = { instancePath: instancePath + "/runtime", schemaPath: "#/definitions/EntryRuntime/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                            if (vErrors === null) {
                                vErrors = [err11];
                            }
                            else {
                                vErrors.push(err11);
                            }
                            errors++;
                            validate14.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs13;
                            if (vErrors !== null) {
                                if (_errs13) {
                                    vErrors.length = _errs13;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs11 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.wasmLoading !== undefined) {
                            const _errs17 = errors;
                            if (!(validate15(data.wasmLoading, { instancePath: instancePath + "/wasmLoading", parentData: data, parentDataProperty: "wasmLoading", rootData }))) {
                                vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                                errors = vErrors.length;
                            }
                            var valid0 = _errs17 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                    }
                }
            }
        }
    }
    else {
        validate14.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate14.errors = vErrors; return errors === 0; }
function validate13(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            let data0 = data[key0];
            const _errs2 = errors;
            const _errs3 = errors;
            let valid1 = false;
            const _errs4 = errors;
            const _errs6 = errors;
            let valid3 = false;
            const _errs7 = errors;
            if (errors === _errs7) {
                if (Array.isArray(data0)) {
                    if (data0.length < 1) {
                        const err0 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf/0/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
                        if (vErrors === null) {
                            vErrors = [err0];
                        }
                        else {
                            vErrors.push(err0);
                        }
                        errors++;
                    }
                    else {
                        var valid4 = true;
                        const len0 = data0.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                            let data1 = data0[i0];
                            const _errs9 = errors;
                            if (errors === _errs9) {
                                if (typeof data1 === "string") {
                                    if (data1.length < 1) {
                                        const err1 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err1];
                                        }
                                        else {
                                            vErrors.push(err1);
                                        }
                                        errors++;
                                    }
                                }
                                else {
                                    const err2 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                    if (vErrors === null) {
                                        vErrors = [err2];
                                    }
                                    else {
                                        vErrors.push(err2);
                                    }
                                    errors++;
                                }
                            }
                            var valid4 = _errs9 === errors;
                            if (!valid4) {
                                break;
                            }
                        }
                        if (valid4) {
                            let i1 = data0.length;
                            let j0;
                            if (i1 > 1) {
                                const indices0 = {};
                                for (; i1--;) {
                                    let item0 = data0[i1];
                                    if (typeof item0 !== "string") {
                                        continue;
                                    }
                                    if (typeof indices0[item0] == "number") {
                                        j0 = indices0[item0];
                                        const err3 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf/0/uniqueItems", keyword: "uniqueItems", params: { i: i1, j: j0 }, message: "must NOT have duplicate items (items ## " + j0 + " and " + i1 + " are identical)" };
                                        if (vErrors === null) {
                                            vErrors = [err3];
                                        }
                                        else {
                                            vErrors.push(err3);
                                        }
                                        errors++;
                                        break;
                                    }
                                    indices0[item0] = i1;
                                }
                            }
                        }
                    }
                }
                else {
                    const err4 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                    if (vErrors === null) {
                        vErrors = [err4];
                    }
                    else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
            }
            var _valid1 = _errs7 === errors;
            valid3 = valid3 || _valid1;
            if (!valid3) {
                const _errs11 = errors;
                if (errors === _errs11) {
                    if (typeof data0 === "string") {
                        if (data0.length < 1) {
                            const err5 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err5];
                            }
                            else {
                                vErrors.push(err5);
                            }
                            errors++;
                        }
                    }
                    else {
                        const err6 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err6];
                        }
                        else {
                            vErrors.push(err6);
                        }
                        errors++;
                    }
                }
                var _valid1 = _errs11 === errors;
                valid3 = valid3 || _valid1;
            }
            if (!valid3) {
                const err7 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/EntryItem/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err7];
                }
                else {
                    vErrors.push(err7);
                }
                errors++;
            }
            else {
                errors = _errs6;
                if (vErrors !== null) {
                    if (_errs6) {
                        vErrors.length = _errs6;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var _valid0 = _errs4 === errors;
            valid1 = valid1 || _valid0;
            if (!valid1) {
                const _errs13 = errors;
                if (!(validate14(data0, { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: data, parentDataProperty: key0, rootData }))) {
                    vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs13 === errors;
                valid1 = valid1 || _valid0;
            }
            if (!valid1) {
                const err8 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/additionalProperties/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
                validate13.errors = vErrors;
                return false;
            }
            else {
                errors = _errs3;
                if (vErrors !== null) {
                    if (_errs3) {
                        vErrors.length = _errs3;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs2 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate13.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate13.errors = vErrors; return errors === 0; }
const schema26 = { "description": "An entry point without name.", "oneOf": [{ "$ref": "#/definitions/EntryItem" }] };
function validate19(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; const _errs3 = errors; let valid2 = false; const _errs4 = errors; if (errors === _errs4) {
    if (Array.isArray(data)) {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf/0/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        else {
            var valid3 = true;
            const len0 = data.length;
            for (let i0 = 0; i0 < len0; i0++) {
                let data0 = data[i0];
                const _errs6 = errors;
                if (errors === _errs6) {
                    if (typeof data0 === "string") {
                        if (data0.length < 1) {
                            const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                        }
                    }
                    else {
                        const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/EntryItem/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                }
                var valid3 = _errs6 === errors;
                if (!valid3) {
                    break;
                }
            }
            if (valid3) {
                let i1 = data.length;
                let j0;
                if (i1 > 1) {
                    const indices0 = {};
                    for (; i1--;) {
                        let item0 = data[i1];
                        if (typeof item0 !== "string") {
                            continue;
                        }
                        if (typeof indices0[item0] == "number") {
                            j0 = indices0[item0];
                            const err3 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf/0/uniqueItems", keyword: "uniqueItems", params: { i: i1, j: j0 }, message: "must NOT have duplicate items (items ## " + j0 + " and " + i1 + " are identical)" };
                            if (vErrors === null) {
                                vErrors = [err3];
                            }
                            else {
                                vErrors.push(err3);
                            }
                            errors++;
                            break;
                        }
                        indices0[item0] = i1;
                    }
                }
            }
        }
    }
    else {
        const err4 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
            vErrors = [err4];
        }
        else {
            vErrors.push(err4);
        }
        errors++;
    }
} var _valid1 = _errs4 === errors; valid2 = valid2 || _valid1; if (!valid2) {
    const _errs8 = errors;
    if (errors === _errs8) {
        if (typeof data === "string") {
            if (data.length < 1) {
                const err5 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        else {
            const err6 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
                vErrors = [err6];
            }
            else {
                vErrors.push(err6);
            }
            errors++;
        }
    }
    var _valid1 = _errs8 === errors;
    valid2 = valid2 || _valid1;
} if (!valid2) {
    const err7 = { instancePath, schemaPath: "#/definitions/EntryItem/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err7];
    }
    else {
        vErrors.push(err7);
    }
    errors++;
}
else {
    errors = _errs3;
    if (vErrors !== null) {
        if (_errs3) {
            vErrors.length = _errs3;
        }
        else {
            vErrors = null;
        }
    }
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err8 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err8];
    }
    else {
        vErrors.push(err8);
    }
    errors++;
    validate19.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate19.errors = vErrors; return errors === 0; }
function validate12(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(validate13(data, { instancePath, parentData, parentDataProperty, rootData }))) {
    vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
    errors = vErrors.length;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (!(validate19(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors = vErrors === null ? validate19.errors : vErrors.concat(validate19.errors);
        errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
    validate12.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate12.errors = vErrors; return errors === 0; }
function validate11(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(validate12(data, { instancePath, parentData, parentDataProperty, rootData }))) {
    vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
    errors = vErrors.length;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
    validate11.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate11.errors = vErrors; return errors === 0; }
const schema29 = { "description": "Specify dependencies that shouldn't be resolved by rspack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.", "anyOf": [{ "type": "array", "items": { "$ref": "#/definitions/ExternalItem" } }, { "$ref": "#/definitions/ExternalItem" }] };
const schema30 = { "description": "Specify dependency that shouldn't be resolved by rspack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.", "anyOf": [{ "description": "Every matched dependency becomes external.", "instanceof": "RegExp" }, { "description": "An exact matched dependency becomes external. The same string is used as external dependency.", "type": "string" }, { "description": "If an dependency matches exactly a property of the object, the property value is used as dependency.", "type": "object", "additionalProperties": { "$ref": "#/definitions/ExternalItemValue" } }] };
const schema31 = { "description": "The dependency used for the external.", "anyOf": [{ "description": "The target of the external.", "type": "string" }, { "description": "`true`: The dependency name is used as target of the external.", "type": "boolean" }] };
function validate24(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(data instanceof RegExp)) {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (typeof data !== "string") {
        const err1 = { instancePath, schemaPath: "#/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
        const _errs4 = errors;
        if (errors === _errs4) {
            if (data && typeof data == "object" && !Array.isArray(data)) {
                for (const key0 in data) {
                    let data0 = data[key0];
                    const _errs7 = errors;
                    const _errs9 = errors;
                    let valid3 = false;
                    const _errs10 = errors;
                    if (typeof data0 !== "string") {
                        const err2 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ExternalItemValue/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                    var _valid1 = _errs10 === errors;
                    valid3 = valid3 || _valid1;
                    if (!valid3) {
                        const _errs12 = errors;
                        if (typeof data0 !== "boolean") {
                            const err3 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ExternalItemValue/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                            if (vErrors === null) {
                                vErrors = [err3];
                            }
                            else {
                                vErrors.push(err3);
                            }
                            errors++;
                        }
                        var _valid1 = _errs12 === errors;
                        valid3 = valid3 || _valid1;
                    }
                    if (!valid3) {
                        const err4 = { instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ExternalItemValue/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                        if (vErrors === null) {
                            vErrors = [err4];
                        }
                        else {
                            vErrors.push(err4);
                        }
                        errors++;
                    }
                    else {
                        errors = _errs9;
                        if (vErrors !== null) {
                            if (_errs9) {
                                vErrors.length = _errs9;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid1 = _errs7 === errors;
                    if (!valid1) {
                        break;
                    }
                }
            }
            else {
                const err5 = { instancePath, schemaPath: "#/anyOf/2/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        var _valid0 = _errs4 === errors;
        valid0 = valid0 || _valid0;
    }
} if (!valid0) {
    const err6 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err6];
    }
    else {
        vErrors.push(err6);
    }
    errors++;
    validate24.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate24.errors = vErrors; return errors === 0; }
function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (errors === _errs1) {
    if (Array.isArray(data)) {
        var valid1 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            const _errs3 = errors;
            if (!(validate24(data[i0], { instancePath: instancePath + "/" + i0, parentData: data, parentDataProperty: i0, rootData }))) {
                vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
                errors = vErrors.length;
            }
            var valid1 = _errs3 === errors;
            if (!valid1) {
                break;
            }
        }
    }
    else {
        const err0 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs4 = errors;
    if (!(validate24(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
        errors = vErrors.length;
    }
    var _valid0 = _errs4 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err1 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err1];
    }
    else {
        vErrors.push(err1);
    }
    errors++;
    validate23.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate23.errors = vErrors; return errors === 0; }
const schema34 = { "description": "Options for infrastructure level logging.", "type": "object", "additionalProperties": false, "properties": { "appendOnly": { "description": "Only appends lines to the output. Avoids updating existing output e. g. for status messages. This option is only used when no custom console is provided.", "type": "boolean" }, "colors": { "description": "Enables/Disables colorful output. This option is only used when no custom console is provided.", "type": "boolean" }, "console": { "description": "Custom console used for logging." }, "debug": { "description": "Enable debug logging for specific loggers.", "anyOf": [{ "description": "Enable/Disable debug logging for all loggers.", "type": "boolean" }, { "$ref": "#/definitions/FilterTypes" }] }, "level": { "description": "Log level.", "enum": ["none", "error", "warn", "info", "log", "verbose"] }, "stream": { "description": "Stream used for logging output. Defaults to process.stderr. This option is only used when no custom console is provided." } } };
const schema35 = { "description": "Filtering values.", "anyOf": [{ "type": "array", "items": { "description": "Rule to filter.", "oneOf": [{ "$ref": "#/definitions/FilterItemTypes" }] } }, { "$ref": "#/definitions/FilterItemTypes" }] };
const schema36 = { "description": "Filtering value, regexp or function.", "anyOf": [{ "instanceof": "RegExp" }, { "type": "string" }, { "instanceof": "Function" }] };
function validate29(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (errors === _errs1) {
    if (Array.isArray(data)) {
        var valid1 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            let data0 = data[i0];
            const _errs3 = errors;
            const _errs4 = errors;
            let valid2 = false;
            let passing0 = null;
            const _errs5 = errors;
            const _errs7 = errors;
            let valid4 = false;
            const _errs8 = errors;
            if (!(data0 instanceof RegExp)) {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/FilterItemTypes/anyOf/0/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            var _valid2 = _errs8 === errors;
            valid4 = valid4 || _valid2;
            if (!valid4) {
                const _errs9 = errors;
                if (typeof data0 !== "string") {
                    const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/FilterItemTypes/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                var _valid2 = _errs9 === errors;
                valid4 = valid4 || _valid2;
                if (!valid4) {
                    const _errs11 = errors;
                    if (!(data0 instanceof Function)) {
                        const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/FilterItemTypes/anyOf/2/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                    var _valid2 = _errs11 === errors;
                    valid4 = valid4 || _valid2;
                }
            }
            if (!valid4) {
                const err3 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/FilterItemTypes/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
            else {
                errors = _errs7;
                if (vErrors !== null) {
                    if (_errs7) {
                        vErrors.length = _errs7;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var _valid1 = _errs5 === errors;
            if (_valid1) {
                valid2 = true;
                passing0 = 0;
            }
            if (!valid2) {
                const err4 = { instancePath: instancePath + "/" + i0, schemaPath: "#/anyOf/0/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
            else {
                errors = _errs4;
                if (vErrors !== null) {
                    if (_errs4) {
                        vErrors.length = _errs4;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid1 = _errs3 === errors;
            if (!valid1) {
                break;
            }
        }
    }
    else {
        const err5 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
            vErrors = [err5];
        }
        else {
            vErrors.push(err5);
        }
        errors++;
    }
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs12 = errors;
    const _errs14 = errors;
    let valid6 = false;
    const _errs15 = errors;
    if (!(data instanceof RegExp)) {
        const err6 = { instancePath, schemaPath: "#/definitions/FilterItemTypes/anyOf/0/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err6];
        }
        else {
            vErrors.push(err6);
        }
        errors++;
    }
    var _valid3 = _errs15 === errors;
    valid6 = valid6 || _valid3;
    if (!valid6) {
        const _errs16 = errors;
        if (typeof data !== "string") {
            const err7 = { instancePath, schemaPath: "#/definitions/FilterItemTypes/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
                vErrors = [err7];
            }
            else {
                vErrors.push(err7);
            }
            errors++;
        }
        var _valid3 = _errs16 === errors;
        valid6 = valid6 || _valid3;
        if (!valid6) {
            const _errs18 = errors;
            if (!(data instanceof Function)) {
                const err8 = { instancePath, schemaPath: "#/definitions/FilterItemTypes/anyOf/2/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
            }
            var _valid3 = _errs18 === errors;
            valid6 = valid6 || _valid3;
        }
    }
    if (!valid6) {
        const err9 = { instancePath, schemaPath: "#/definitions/FilterItemTypes/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
        if (vErrors === null) {
            vErrors = [err9];
        }
        else {
            vErrors.push(err9);
        }
        errors++;
    }
    else {
        errors = _errs14;
        if (vErrors !== null) {
            if (_errs14) {
                vErrors.length = _errs14;
            }
            else {
                vErrors = null;
            }
        }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err10 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err10];
    }
    else {
        vErrors.push(err10);
    }
    errors++;
    validate29.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate29.errors = vErrors; return errors === 0; }
function validate28(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!((((((key0 === "appendOnly") || (key0 === "colors")) || (key0 === "console")) || (key0 === "debug")) || (key0 === "level")) || (key0 === "stream"))) {
                validate28.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.appendOnly !== undefined) {
                const _errs2 = errors;
                if (typeof data.appendOnly !== "boolean") {
                    validate28.errors = [{ instancePath: instancePath + "/appendOnly", schemaPath: "#/properties/appendOnly/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                    return false;
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.colors !== undefined) {
                    const _errs4 = errors;
                    if (typeof data.colors !== "boolean") {
                        validate28.errors = [{ instancePath: instancePath + "/colors", schemaPath: "#/properties/colors/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                        return false;
                    }
                    var valid0 = _errs4 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.debug !== undefined) {
                        let data2 = data.debug;
                        const _errs6 = errors;
                        const _errs7 = errors;
                        let valid1 = false;
                        const _errs8 = errors;
                        if (typeof data2 !== "boolean") {
                            const err0 = { instancePath: instancePath + "/debug", schemaPath: "#/properties/debug/anyOf/0/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                            if (vErrors === null) {
                                vErrors = [err0];
                            }
                            else {
                                vErrors.push(err0);
                            }
                            errors++;
                        }
                        var _valid0 = _errs8 === errors;
                        valid1 = valid1 || _valid0;
                        if (!valid1) {
                            const _errs10 = errors;
                            if (!(validate29(data2, { instancePath: instancePath + "/debug", parentData: data, parentDataProperty: "debug", rootData }))) {
                                vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
                                errors = vErrors.length;
                            }
                            var _valid0 = _errs10 === errors;
                            valid1 = valid1 || _valid0;
                        }
                        if (!valid1) {
                            const err1 = { instancePath: instancePath + "/debug", schemaPath: "#/properties/debug/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                            validate28.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs7;
                            if (vErrors !== null) {
                                if (_errs7) {
                                    vErrors.length = _errs7;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs6 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.level !== undefined) {
                            let data3 = data.level;
                            const _errs11 = errors;
                            if (data3 !== "none" && data3 !== "error" && data3 !== "warn" && data3 !== "info" && data3 !== "log" && data3 !== "verbose") {
                                validate28.errors = [{ instancePath: instancePath + "/level", schemaPath: "#/properties/level/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" }];
                                return false;
                            }
                            var valid0 = _errs11 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                    }
                }
            }
        }
    }
    else {
        validate28.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate28.errors = vErrors; return errors === 0; }
const schema39 = { "description": "Options affecting the normal modules (`NormalModuleFactory`).", "type": "object", "additionalProperties": false, "properties": { "defaultRules": { "description": "An array of rules applied by default for modules.", "oneOf": [{ "$ref": "#/definitions/RuleSetRules" }] }, "parser": { "$ref": "#/definitions/ParserOptionsByModuleType" }, "rules": { "description": "An array of rules applied for modules.", "oneOf": [{ "$ref": "#/definitions/RuleSetRules" }] } } };
const schema40 = { "description": "A list of rules.", "type": "array", "items": { "description": "A rule.", "anyOf": [{ "enum": ["..."] }, { "$ref": "#/definitions/RuleSetRule" }] } };
const schema41 = { "description": "A rule description with conditions and effects for modules.", "type": "object", "additionalProperties": false, "properties": { "exclude": { "description": "Shortcut for resource.exclude.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "generator": { "description": "The options for the module generator.", "type": "object" }, "include": { "description": "Shortcut for resource.include.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "issuer": { "description": "Match the issuer of the module (The module pointing to this module).", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "oneOf": { "description": "Only execute the first matching rule in this array.", "type": "array", "items": { "description": "A rule.", "oneOf": [{ "$ref": "#/definitions/RuleSetRule" }] } }, "parser": { "description": "Options for parsing.", "type": "object", "additionalProperties": true }, "resolve": { "description": "Options for the resolver.", "type": "object", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] }, "resource": { "description": "Match the resource path of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "resourceFragment": { "description": "Match the resource fragment of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "resourceQuery": { "description": "Match the resource query of the module.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "rules": { "description": "Match and execute these rules when this rule is matched.", "type": "array", "items": { "description": "A rule.", "oneOf": [{ "$ref": "#/definitions/RuleSetRule" }] } }, "sideEffects": { "description": "Flags a module as with or without side effects.", "type": "boolean" }, "test": { "description": "Shortcut for resource.test.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditionOrConditions" }] }, "type": { "description": "Module type to use for the module.", "type": "string" }, "use": { "description": "Modifiers applied to the module when rule is matched.", "oneOf": [{ "$ref": "#/definitions/RuleSetUse" }] } } };
const schema42 = { "description": "One or multiple rule conditions.", "anyOf": [{ "$ref": "#/definitions/RuleSetCondition" }, { "$ref": "#/definitions/RuleSetConditions" }] };
const schema43 = { "description": "A condition matcher.", "anyOf": [{ "instanceof": "RegExp" }, { "type": "string" }, { "instanceof": "Function" }, { "$ref": "#/definitions/RuleSetLogicalConditions" }, { "$ref": "#/definitions/RuleSetConditions" }] };
const schema44 = { "description": "Logic operators used in a condition matcher.", "type": "object", "additionalProperties": false, "properties": { "and": { "description": "Logical AND.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditions" }] }, "not": { "description": "Logical NOT.", "oneOf": [{ "$ref": "#/definitions/RuleSetCondition" }] }, "or": { "description": "Logical OR.", "oneOf": [{ "$ref": "#/definitions/RuleSetConditions" }] } } };
const schema45 = { "description": "A list of rule conditions.", "type": "array", "items": { "description": "A rule condition.", "oneOf": [{ "$ref": "#/definitions/RuleSetCondition" }] } };
const wrapper0 = { validate: validate36 };
function validate38(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (Array.isArray(data)) {
        var valid0 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            const _errs1 = errors;
            const _errs2 = errors;
            let valid1 = false;
            let passing0 = null;
            const _errs3 = errors;
            if (!(wrapper0.validate(data[i0], { instancePath: instancePath + "/" + i0, parentData: data, parentDataProperty: i0, rootData }))) {
                vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
                errors = vErrors.length;
            }
            var _valid0 = _errs3 === errors;
            if (_valid0) {
                valid1 = true;
                passing0 = 0;
            }
            if (!valid1) {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
                validate38.errors = vErrors;
                return false;
            }
            else {
                errors = _errs2;
                if (vErrors !== null) {
                    if (_errs2) {
                        vErrors.length = _errs2;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs1 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate38.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
        return false;
    }
} validate38.errors = vErrors; return errors === 0; }
function validate37(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(((key0 === "and") || (key0 === "not")) || (key0 === "or"))) {
                validate37.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.and !== undefined) {
                const _errs2 = errors;
                const _errs3 = errors;
                let valid1 = false;
                let passing0 = null;
                const _errs4 = errors;
                if (!(validate38(data.and, { instancePath: instancePath + "/and", parentData: data, parentDataProperty: "and", rootData }))) {
                    vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs4 === errors;
                if (_valid0) {
                    valid1 = true;
                    passing0 = 0;
                }
                if (!valid1) {
                    const err0 = { instancePath: instancePath + "/and", schemaPath: "#/properties/and/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                    if (vErrors === null) {
                        vErrors = [err0];
                    }
                    else {
                        vErrors.push(err0);
                    }
                    errors++;
                    validate37.errors = vErrors;
                    return false;
                }
                else {
                    errors = _errs3;
                    if (vErrors !== null) {
                        if (_errs3) {
                            vErrors.length = _errs3;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.not !== undefined) {
                    const _errs5 = errors;
                    const _errs6 = errors;
                    let valid2 = false;
                    let passing1 = null;
                    const _errs7 = errors;
                    if (!(wrapper0.validate(data.not, { instancePath: instancePath + "/not", parentData: data, parentDataProperty: "not", rootData }))) {
                        vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors);
                        errors = vErrors.length;
                    }
                    var _valid1 = _errs7 === errors;
                    if (_valid1) {
                        valid2 = true;
                        passing1 = 0;
                    }
                    if (!valid2) {
                        const err1 = { instancePath: instancePath + "/not", schemaPath: "#/properties/not/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                        if (vErrors === null) {
                            vErrors = [err1];
                        }
                        else {
                            vErrors.push(err1);
                        }
                        errors++;
                        validate37.errors = vErrors;
                        return false;
                    }
                    else {
                        errors = _errs6;
                        if (vErrors !== null) {
                            if (_errs6) {
                                vErrors.length = _errs6;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid0 = _errs5 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.or !== undefined) {
                        const _errs8 = errors;
                        const _errs9 = errors;
                        let valid3 = false;
                        let passing2 = null;
                        const _errs10 = errors;
                        if (!(validate38(data.or, { instancePath: instancePath + "/or", parentData: data, parentDataProperty: "or", rootData }))) {
                            vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
                            errors = vErrors.length;
                        }
                        var _valid2 = _errs10 === errors;
                        if (_valid2) {
                            valid3 = true;
                            passing2 = 0;
                        }
                        if (!valid3) {
                            const err2 = { instancePath: instancePath + "/or", schemaPath: "#/properties/or/oneOf", keyword: "oneOf", params: { passingSchemas: passing2 }, message: "must match exactly one schema in oneOf" };
                            if (vErrors === null) {
                                vErrors = [err2];
                            }
                            else {
                                vErrors.push(err2);
                            }
                            errors++;
                            validate37.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs9;
                            if (vErrors !== null) {
                                if (_errs9) {
                                    vErrors.length = _errs9;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs8 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                }
            }
        }
    }
    else {
        validate37.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate37.errors = vErrors; return errors === 0; }
function validate36(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(data instanceof RegExp)) {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (typeof data !== "string") {
        const err1 = { instancePath, schemaPath: "#/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
        const _errs4 = errors;
        if (!(data instanceof Function)) {
            const err2 = { instancePath, schemaPath: "#/anyOf/2/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
            if (vErrors === null) {
                vErrors = [err2];
            }
            else {
                vErrors.push(err2);
            }
            errors++;
        }
        var _valid0 = _errs4 === errors;
        valid0 = valid0 || _valid0;
        if (!valid0) {
            const _errs5 = errors;
            if (!(validate37(data, { instancePath, parentData, parentDataProperty, rootData }))) {
                vErrors = vErrors === null ? validate37.errors : vErrors.concat(validate37.errors);
                errors = vErrors.length;
            }
            var _valid0 = _errs5 === errors;
            valid0 = valid0 || _valid0;
            if (!valid0) {
                const _errs6 = errors;
                if (!(validate38(data, { instancePath, parentData, parentDataProperty, rootData }))) {
                    vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs6 === errors;
                valid0 = valid0 || _valid0;
            }
        }
    }
} if (!valid0) {
    const err3 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
    validate36.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate36.errors = vErrors; return errors === 0; }
function validate35(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(validate36(data, { instancePath, parentData, parentDataProperty, rootData }))) {
    vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
    errors = vErrors.length;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (!(validate38(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors = vErrors === null ? validate38.errors : vErrors.concat(validate38.errors);
        errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
    validate35.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate35.errors = vErrors; return errors === 0; }
const schema46 = { "description": "Options object for resolving requests.", "type": "object", "additionalProperties": false, "properties": { "alias": { "$ref": "#/definitions/ResolveAlias" }, "browserField": { "description": "Fields in the description file (usually package.json) which are used to redirect requests inside the module.", "type": "boolean" }, "conditionNames": { "description": "Condition names for exports field entry point.", "type": "array", "items": { "description": "Condition names for exports field entry point.", "type": "string" } }, "extensions": { "description": "Extensions added to the request when trying to find the file.", "type": "array", "items": { "description": "Extension added to the request when trying to find the file.", "type": "string" } }, "fallback": { "description": "Redirect module requests when normal resolving fails.", "oneOf": [{ "$ref": "#/definitions/ResolveAlias" }] }, "mainFields": { "description": "Field names from the description file (package.json) which are used to find the default entry point.", "type": "array", "items": { "description": "Field name from the description file (package.json) which are used to find the default entry point.", "anyOf": [{ "type": "array", "items": { "description": "Part of the field path from the description file (package.json) which are used to find the default entry point.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] } }, "mainFiles": { "description": "Filenames used to find the default entry point if there is no description file or main field.", "type": "array", "items": { "description": "Filename used to find the default entry point if there is no description file or main field.", "type": "string", "minLength": 1 } }, "modules": { "description": "Folder names or directory paths where to find modules.", "type": "array", "items": { "description": "Folder name or directory path where to find modules.", "type": "string", "minLength": 1 } }, "preferRelative": { "description": "Prefer to resolve module requests as relative request and fallback to resolving as module.", "type": "boolean" }, "byDependency": { "description": "Extra resolve options per dependency category. Typical categories are \"commonjs\", \"amd\", \"esm\".", "type": "object", "additionalProperties": { "description": "Options object for resolving requests.", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] } }, "tsConfigPath": { "description": "Path to tsconfig.json", "type": "string" } } };
const schema47 = { "description": "Redirect module requests.", "anyOf": [{ "type": "object", "additionalProperties": { "description": "New request.", "anyOf": [{ "description": "Multiple alternative requests.", "type": "array", "items": { "description": "One choice of request.", "type": "string", "minLength": 1 } }, { "description": "Ignore request (replace with empty module).", "enum": [false] }, { "description": "New request.", "type": "string", "minLength": 1 }] } }] };
const wrapper3 = { validate: validate48 };
function validate48(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(func2.call(schema46.properties, key0))) {
                validate48.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.alias !== undefined) {
                let data0 = data.alias;
                const _errs2 = errors;
                const _errs4 = errors;
                let valid2 = false;
                const _errs5 = errors;
                if (errors === _errs5) {
                    if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                        for (const key1 in data0) {
                            let data1 = data0[key1];
                            const _errs8 = errors;
                            const _errs9 = errors;
                            let valid4 = false;
                            const _errs10 = errors;
                            if (errors === _errs10) {
                                if (Array.isArray(data1)) {
                                    var valid5 = true;
                                    const len0 = data1.length;
                                    for (let i0 = 0; i0 < len0; i0++) {
                                        let data2 = data1[i0];
                                        const _errs12 = errors;
                                        if (errors === _errs12) {
                                            if (typeof data2 === "string") {
                                                if (data2.length < 1) {
                                                    const err0 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i0, schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                    if (vErrors === null) {
                                                        vErrors = [err0];
                                                    }
                                                    else {
                                                        vErrors.push(err0);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            else {
                                                const err1 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i0, schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                if (vErrors === null) {
                                                    vErrors = [err1];
                                                }
                                                else {
                                                    vErrors.push(err1);
                                                }
                                                errors++;
                                            }
                                        }
                                        var valid5 = _errs12 === errors;
                                        if (!valid5) {
                                            break;
                                        }
                                    }
                                }
                                else {
                                    const err2 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                    if (vErrors === null) {
                                        vErrors = [err2];
                                    }
                                    else {
                                        vErrors.push(err2);
                                    }
                                    errors++;
                                }
                            }
                            var _valid1 = _errs10 === errors;
                            valid4 = valid4 || _valid1;
                            if (!valid4) {
                                const _errs14 = errors;
                                if (data1 !== false) {
                                    const err3 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/1/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                    if (vErrors === null) {
                                        vErrors = [err3];
                                    }
                                    else {
                                        vErrors.push(err3);
                                    }
                                    errors++;
                                }
                                var _valid1 = _errs14 === errors;
                                valid4 = valid4 || _valid1;
                                if (!valid4) {
                                    const _errs15 = errors;
                                    if (errors === _errs15) {
                                        if (typeof data1 === "string") {
                                            if (data1.length < 1) {
                                                const err4 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/2/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err4];
                                                }
                                                else {
                                                    vErrors.push(err4);
                                                }
                                                errors++;
                                            }
                                        }
                                        else {
                                            const err5 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/2/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                                vErrors = [err5];
                                            }
                                            else {
                                                vErrors.push(err5);
                                            }
                                            errors++;
                                        }
                                    }
                                    var _valid1 = _errs15 === errors;
                                    valid4 = valid4 || _valid1;
                                }
                            }
                            if (!valid4) {
                                const err6 = { instancePath: instancePath + "/alias/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                if (vErrors === null) {
                                    vErrors = [err6];
                                }
                                else {
                                    vErrors.push(err6);
                                }
                                errors++;
                            }
                            else {
                                errors = _errs9;
                                if (vErrors !== null) {
                                    if (_errs9) {
                                        vErrors.length = _errs9;
                                    }
                                    else {
                                        vErrors = null;
                                    }
                                }
                            }
                            var valid3 = _errs8 === errors;
                            if (!valid3) {
                                break;
                            }
                        }
                    }
                    else {
                        const err7 = { instancePath: instancePath + "/alias", schemaPath: "#/definitions/ResolveAlias/anyOf/0/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                        if (vErrors === null) {
                            vErrors = [err7];
                        }
                        else {
                            vErrors.push(err7);
                        }
                        errors++;
                    }
                }
                var _valid0 = _errs5 === errors;
                valid2 = valid2 || _valid0;
                if (!valid2) {
                    const err8 = { instancePath: instancePath + "/alias", schemaPath: "#/definitions/ResolveAlias/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                    if (vErrors === null) {
                        vErrors = [err8];
                    }
                    else {
                        vErrors.push(err8);
                    }
                    errors++;
                    validate48.errors = vErrors;
                    return false;
                }
                else {
                    errors = _errs4;
                    if (vErrors !== null) {
                        if (_errs4) {
                            vErrors.length = _errs4;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.browserField !== undefined) {
                    const _errs17 = errors;
                    if (typeof data.browserField !== "boolean") {
                        validate48.errors = [{ instancePath: instancePath + "/browserField", schemaPath: "#/properties/browserField/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                        return false;
                    }
                    var valid0 = _errs17 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.conditionNames !== undefined) {
                        let data4 = data.conditionNames;
                        const _errs19 = errors;
                        if (errors === _errs19) {
                            if (Array.isArray(data4)) {
                                var valid6 = true;
                                const len1 = data4.length;
                                for (let i1 = 0; i1 < len1; i1++) {
                                    const _errs21 = errors;
                                    if (typeof data4[i1] !== "string") {
                                        validate48.errors = [{ instancePath: instancePath + "/conditionNames/" + i1, schemaPath: "#/properties/conditionNames/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                    }
                                    var valid6 = _errs21 === errors;
                                    if (!valid6) {
                                        break;
                                    }
                                }
                            }
                            else {
                                validate48.errors = [{ instancePath: instancePath + "/conditionNames", schemaPath: "#/properties/conditionNames/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                return false;
                            }
                        }
                        var valid0 = _errs19 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.extensions !== undefined) {
                            let data6 = data.extensions;
                            const _errs23 = errors;
                            if (errors === _errs23) {
                                if (Array.isArray(data6)) {
                                    var valid7 = true;
                                    const len2 = data6.length;
                                    for (let i2 = 0; i2 < len2; i2++) {
                                        const _errs25 = errors;
                                        if (typeof data6[i2] !== "string") {
                                            validate48.errors = [{ instancePath: instancePath + "/extensions/" + i2, schemaPath: "#/properties/extensions/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                        }
                                        var valid7 = _errs25 === errors;
                                        if (!valid7) {
                                            break;
                                        }
                                    }
                                }
                                else {
                                    validate48.errors = [{ instancePath: instancePath + "/extensions", schemaPath: "#/properties/extensions/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                    return false;
                                }
                            }
                            var valid0 = _errs23 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.fallback !== undefined) {
                                let data8 = data.fallback;
                                const _errs27 = errors;
                                const _errs28 = errors;
                                let valid8 = false;
                                let passing0 = null;
                                const _errs29 = errors;
                                const _errs31 = errors;
                                let valid10 = false;
                                const _errs32 = errors;
                                if (errors === _errs32) {
                                    if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                        for (const key2 in data8) {
                                            let data9 = data8[key2];
                                            const _errs35 = errors;
                                            const _errs36 = errors;
                                            let valid12 = false;
                                            const _errs37 = errors;
                                            if (errors === _errs37) {
                                                if (Array.isArray(data9)) {
                                                    var valid13 = true;
                                                    const len3 = data9.length;
                                                    for (let i3 = 0; i3 < len3; i3++) {
                                                        let data10 = data9[i3];
                                                        const _errs39 = errors;
                                                        if (errors === _errs39) {
                                                            if (typeof data10 === "string") {
                                                                if (data10.length < 1) {
                                                                    const err9 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i3, schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err9];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err9);
                                                                    }
                                                                    errors++;
                                                                }
                                                            }
                                                            else {
                                                                const err10 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i3, schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err10];
                                                                }
                                                                else {
                                                                    vErrors.push(err10);
                                                                }
                                                                errors++;
                                                            }
                                                        }
                                                        var valid13 = _errs39 === errors;
                                                        if (!valid13) {
                                                            break;
                                                        }
                                                    }
                                                }
                                                else {
                                                    const err11 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                    if (vErrors === null) {
                                                        vErrors = [err11];
                                                    }
                                                    else {
                                                        vErrors.push(err11);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            var _valid4 = _errs37 === errors;
                                            valid12 = valid12 || _valid4;
                                            if (!valid12) {
                                                const _errs41 = errors;
                                                if (data9 !== false) {
                                                    const err12 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/1/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                    if (vErrors === null) {
                                                        vErrors = [err12];
                                                    }
                                                    else {
                                                        vErrors.push(err12);
                                                    }
                                                    errors++;
                                                }
                                                var _valid4 = _errs41 === errors;
                                                valid12 = valid12 || _valid4;
                                                if (!valid12) {
                                                    const _errs42 = errors;
                                                    if (errors === _errs42) {
                                                        if (typeof data9 === "string") {
                                                            if (data9.length < 1) {
                                                                const err13 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/2/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err13];
                                                                }
                                                                else {
                                                                    vErrors.push(err13);
                                                                }
                                                                errors++;
                                                            }
                                                        }
                                                        else {
                                                            const err14 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf/2/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                            if (vErrors === null) {
                                                                vErrors = [err14];
                                                            }
                                                            else {
                                                                vErrors.push(err14);
                                                            }
                                                            errors++;
                                                        }
                                                    }
                                                    var _valid4 = _errs42 === errors;
                                                    valid12 = valid12 || _valid4;
                                                }
                                            }
                                            if (!valid12) {
                                                const err15 = { instancePath: instancePath + "/fallback/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/ResolveAlias/anyOf/0/additionalProperties/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err15];
                                                }
                                                else {
                                                    vErrors.push(err15);
                                                }
                                                errors++;
                                            }
                                            else {
                                                errors = _errs36;
                                                if (vErrors !== null) {
                                                    if (_errs36) {
                                                        vErrors.length = _errs36;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid11 = _errs35 === errors;
                                            if (!valid11) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        const err16 = { instancePath: instancePath + "/fallback", schemaPath: "#/definitions/ResolveAlias/anyOf/0/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                        if (vErrors === null) {
                                            vErrors = [err16];
                                        }
                                        else {
                                            vErrors.push(err16);
                                        }
                                        errors++;
                                    }
                                }
                                var _valid3 = _errs32 === errors;
                                valid10 = valid10 || _valid3;
                                if (!valid10) {
                                    const err17 = { instancePath: instancePath + "/fallback", schemaPath: "#/definitions/ResolveAlias/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                    if (vErrors === null) {
                                        vErrors = [err17];
                                    }
                                    else {
                                        vErrors.push(err17);
                                    }
                                    errors++;
                                }
                                else {
                                    errors = _errs31;
                                    if (vErrors !== null) {
                                        if (_errs31) {
                                            vErrors.length = _errs31;
                                        }
                                        else {
                                            vErrors = null;
                                        }
                                    }
                                }
                                var _valid2 = _errs29 === errors;
                                if (_valid2) {
                                    valid8 = true;
                                    passing0 = 0;
                                }
                                if (!valid8) {
                                    const err18 = { instancePath: instancePath + "/fallback", schemaPath: "#/properties/fallback/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                    if (vErrors === null) {
                                        vErrors = [err18];
                                    }
                                    else {
                                        vErrors.push(err18);
                                    }
                                    errors++;
                                    validate48.errors = vErrors;
                                    return false;
                                }
                                else {
                                    errors = _errs28;
                                    if (vErrors !== null) {
                                        if (_errs28) {
                                            vErrors.length = _errs28;
                                        }
                                        else {
                                            vErrors = null;
                                        }
                                    }
                                }
                                var valid0 = _errs27 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.mainFields !== undefined) {
                                    let data11 = data.mainFields;
                                    const _errs44 = errors;
                                    if (errors === _errs44) {
                                        if (Array.isArray(data11)) {
                                            var valid14 = true;
                                            const len4 = data11.length;
                                            for (let i4 = 0; i4 < len4; i4++) {
                                                let data12 = data11[i4];
                                                const _errs46 = errors;
                                                const _errs47 = errors;
                                                let valid15 = false;
                                                const _errs48 = errors;
                                                if (errors === _errs48) {
                                                    if (Array.isArray(data12)) {
                                                        var valid16 = true;
                                                        const len5 = data12.length;
                                                        for (let i5 = 0; i5 < len5; i5++) {
                                                            let data13 = data12[i5];
                                                            const _errs50 = errors;
                                                            if (errors === _errs50) {
                                                                if (typeof data13 === "string") {
                                                                    if (data13.length < 1) {
                                                                        const err19 = { instancePath: instancePath + "/mainFields/" + i4 + "/" + i5, schemaPath: "#/properties/mainFields/items/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                        if (vErrors === null) {
                                                                            vErrors = [err19];
                                                                        }
                                                                        else {
                                                                            vErrors.push(err19);
                                                                        }
                                                                        errors++;
                                                                    }
                                                                }
                                                                else {
                                                                    const err20 = { instancePath: instancePath + "/mainFields/" + i4 + "/" + i5, schemaPath: "#/properties/mainFields/items/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err20];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err20);
                                                                    }
                                                                    errors++;
                                                                }
                                                            }
                                                            var valid16 = _errs50 === errors;
                                                            if (!valid16) {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        const err21 = { instancePath: instancePath + "/mainFields/" + i4, schemaPath: "#/properties/mainFields/items/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                        if (vErrors === null) {
                                                            vErrors = [err21];
                                                        }
                                                        else {
                                                            vErrors.push(err21);
                                                        }
                                                        errors++;
                                                    }
                                                }
                                                var _valid5 = _errs48 === errors;
                                                valid15 = valid15 || _valid5;
                                                if (!valid15) {
                                                    const _errs52 = errors;
                                                    if (errors === _errs52) {
                                                        if (typeof data12 === "string") {
                                                            if (data12.length < 1) {
                                                                const err22 = { instancePath: instancePath + "/mainFields/" + i4, schemaPath: "#/properties/mainFields/items/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err22];
                                                                }
                                                                else {
                                                                    vErrors.push(err22);
                                                                }
                                                                errors++;
                                                            }
                                                        }
                                                        else {
                                                            const err23 = { instancePath: instancePath + "/mainFields/" + i4, schemaPath: "#/properties/mainFields/items/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                            if (vErrors === null) {
                                                                vErrors = [err23];
                                                            }
                                                            else {
                                                                vErrors.push(err23);
                                                            }
                                                            errors++;
                                                        }
                                                    }
                                                    var _valid5 = _errs52 === errors;
                                                    valid15 = valid15 || _valid5;
                                                }
                                                if (!valid15) {
                                                    const err24 = { instancePath: instancePath + "/mainFields/" + i4, schemaPath: "#/properties/mainFields/items/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                    if (vErrors === null) {
                                                        vErrors = [err24];
                                                    }
                                                    else {
                                                        vErrors.push(err24);
                                                    }
                                                    errors++;
                                                    validate48.errors = vErrors;
                                                    return false;
                                                }
                                                else {
                                                    errors = _errs47;
                                                    if (vErrors !== null) {
                                                        if (_errs47) {
                                                            vErrors.length = _errs47;
                                                        }
                                                        else {
                                                            vErrors = null;
                                                        }
                                                    }
                                                }
                                                var valid14 = _errs46 === errors;
                                                if (!valid14) {
                                                    break;
                                                }
                                            }
                                        }
                                        else {
                                            validate48.errors = [{ instancePath: instancePath + "/mainFields", schemaPath: "#/properties/mainFields/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                            return false;
                                        }
                                    }
                                    var valid0 = _errs44 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.mainFiles !== undefined) {
                                        let data14 = data.mainFiles;
                                        const _errs54 = errors;
                                        if (errors === _errs54) {
                                            if (Array.isArray(data14)) {
                                                var valid17 = true;
                                                const len6 = data14.length;
                                                for (let i6 = 0; i6 < len6; i6++) {
                                                    let data15 = data14[i6];
                                                    const _errs56 = errors;
                                                    if (errors === _errs56) {
                                                        if (typeof data15 === "string") {
                                                            if (data15.length < 1) {
                                                                validate48.errors = [{ instancePath: instancePath + "/mainFiles/" + i6, schemaPath: "#/properties/mainFiles/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" }];
                                                                return false;
                                                            }
                                                        }
                                                        else {
                                                            validate48.errors = [{ instancePath: instancePath + "/mainFiles/" + i6, schemaPath: "#/properties/mainFiles/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                            return false;
                                                        }
                                                    }
                                                    var valid17 = _errs56 === errors;
                                                    if (!valid17) {
                                                        break;
                                                    }
                                                }
                                            }
                                            else {
                                                validate48.errors = [{ instancePath: instancePath + "/mainFiles", schemaPath: "#/properties/mainFiles/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                return false;
                                            }
                                        }
                                        var valid0 = _errs54 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.modules !== undefined) {
                                            let data16 = data.modules;
                                            const _errs58 = errors;
                                            if (errors === _errs58) {
                                                if (Array.isArray(data16)) {
                                                    var valid18 = true;
                                                    const len7 = data16.length;
                                                    for (let i7 = 0; i7 < len7; i7++) {
                                                        let data17 = data16[i7];
                                                        const _errs60 = errors;
                                                        if (errors === _errs60) {
                                                            if (typeof data17 === "string") {
                                                                if (data17.length < 1) {
                                                                    validate48.errors = [{ instancePath: instancePath + "/modules/" + i7, schemaPath: "#/properties/modules/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" }];
                                                                    return false;
                                                                }
                                                            }
                                                            else {
                                                                validate48.errors = [{ instancePath: instancePath + "/modules/" + i7, schemaPath: "#/properties/modules/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                return false;
                                                            }
                                                        }
                                                        var valid18 = _errs60 === errors;
                                                        if (!valid18) {
                                                            break;
                                                        }
                                                    }
                                                }
                                                else {
                                                    validate48.errors = [{ instancePath: instancePath + "/modules", schemaPath: "#/properties/modules/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                    return false;
                                                }
                                            }
                                            var valid0 = _errs58 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.preferRelative !== undefined) {
                                                const _errs62 = errors;
                                                if (typeof data.preferRelative !== "boolean") {
                                                    validate48.errors = [{ instancePath: instancePath + "/preferRelative", schemaPath: "#/properties/preferRelative/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                    return false;
                                                }
                                                var valid0 = _errs62 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                            if (valid0) {
                                                if (data.byDependency !== undefined) {
                                                    let data19 = data.byDependency;
                                                    const _errs64 = errors;
                                                    if (errors === _errs64) {
                                                        if (data19 && typeof data19 == "object" && !Array.isArray(data19)) {
                                                            for (const key3 in data19) {
                                                                const _errs67 = errors;
                                                                const _errs68 = errors;
                                                                let valid20 = false;
                                                                let passing1 = null;
                                                                const _errs69 = errors;
                                                                if (!(wrapper3.validate(data19[key3], { instancePath: instancePath + "/byDependency/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"), parentData: data19, parentDataProperty: key3, rootData }))) {
                                                                    vErrors = vErrors === null ? wrapper3.validate.errors : vErrors.concat(wrapper3.validate.errors);
                                                                    errors = vErrors.length;
                                                                }
                                                                var _valid6 = _errs69 === errors;
                                                                if (_valid6) {
                                                                    valid20 = true;
                                                                    passing1 = 0;
                                                                }
                                                                if (!valid20) {
                                                                    const err25 = { instancePath: instancePath + "/byDependency/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/byDependency/additionalProperties/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err25];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err25);
                                                                    }
                                                                    errors++;
                                                                    validate48.errors = vErrors;
                                                                    return false;
                                                                }
                                                                else {
                                                                    errors = _errs68;
                                                                    if (vErrors !== null) {
                                                                        if (_errs68) {
                                                                            vErrors.length = _errs68;
                                                                        }
                                                                        else {
                                                                            vErrors = null;
                                                                        }
                                                                    }
                                                                }
                                                                var valid19 = _errs67 === errors;
                                                                if (!valid19) {
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            validate48.errors = [{ instancePath: instancePath + "/byDependency", schemaPath: "#/properties/byDependency/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                            return false;
                                                        }
                                                    }
                                                    var valid0 = _errs64 === errors;
                                                }
                                                else {
                                                    var valid0 = true;
                                                }
                                                if (valid0) {
                                                    if (data.tsConfigPath !== undefined) {
                                                        const _errs70 = errors;
                                                        if (typeof data.tsConfigPath !== "string") {
                                                            validate48.errors = [{ instancePath: instancePath + "/tsConfigPath", schemaPath: "#/properties/tsConfigPath/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                            return false;
                                                        }
                                                        var valid0 = _errs70 === errors;
                                                    }
                                                    else {
                                                        var valid0 = true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate48.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate48.errors = vErrors; return errors === 0; }
const schema49 = { "description": "A list of descriptions of loaders applied.", "anyOf": [{ "type": "array", "items": { "description": "An use item.", "oneOf": [{ "$ref": "#/definitions/RuleSetUseItem" }] } }, { "$ref": "#/definitions/RuleSetUseItem" }] };
const schema50 = { "description": "A description of an applied loader.", "anyOf": [{ "type": "object", "additionalProperties": false, "properties": { "loader": { "description": "Loader name.", "oneOf": [{ "$ref": "#/definitions/RuleSetLoader" }] }, "options": { "description": "Loader options.", "oneOf": [{ "$ref": "#/definitions/RuleSetLoaderOptions" }] } } }, { "$ref": "#/definitions/RuleSetLoader" }] };
const schema51 = { "description": "A loader request.", "type": "string", "minLength": 1 };
const schema52 = { "description": "Options passed to a loader.", "anyOf": [{ "type": "string" }, { "type": "object" }] };
function validate55(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (errors === _errs1) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs3 = errors;
        for (const key0 in data) {
            if (!((key0 === "loader") || (key0 === "options"))) {
                const err0 = { instancePath, schemaPath: "#/anyOf/0/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
                break;
            }
        }
        if (_errs3 === errors) {
            if (data.loader !== undefined) {
                let data0 = data.loader;
                const _errs4 = errors;
                const _errs5 = errors;
                let valid2 = false;
                let passing0 = null;
                const _errs6 = errors;
                const _errs7 = errors;
                if (errors === _errs7) {
                    if (typeof data0 === "string") {
                        if (data0.length < 1) {
                            const err1 = { instancePath: instancePath + "/loader", schemaPath: "#/definitions/RuleSetLoader/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                        }
                    }
                    else {
                        const err2 = { instancePath: instancePath + "/loader", schemaPath: "#/definitions/RuleSetLoader/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                }
                var _valid1 = _errs6 === errors;
                if (_valid1) {
                    valid2 = true;
                    passing0 = 0;
                }
                if (!valid2) {
                    const err3 = { instancePath: instancePath + "/loader", schemaPath: "#/anyOf/0/properties/loader/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
                else {
                    errors = _errs5;
                    if (vErrors !== null) {
                        if (_errs5) {
                            vErrors.length = _errs5;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
                var valid1 = _errs4 === errors;
            }
            else {
                var valid1 = true;
            }
            if (valid1) {
                if (data.options !== undefined) {
                    let data1 = data.options;
                    const _errs9 = errors;
                    const _errs10 = errors;
                    let valid4 = false;
                    let passing1 = null;
                    const _errs11 = errors;
                    const _errs13 = errors;
                    let valid6 = false;
                    const _errs14 = errors;
                    if (typeof data1 !== "string") {
                        const err4 = { instancePath: instancePath + "/options", schemaPath: "#/definitions/RuleSetLoaderOptions/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err4];
                        }
                        else {
                            vErrors.push(err4);
                        }
                        errors++;
                    }
                    var _valid3 = _errs14 === errors;
                    valid6 = valid6 || _valid3;
                    if (!valid6) {
                        const _errs16 = errors;
                        if (!(data1 && typeof data1 == "object" && !Array.isArray(data1))) {
                            const err5 = { instancePath: instancePath + "/options", schemaPath: "#/definitions/RuleSetLoaderOptions/anyOf/1/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                            if (vErrors === null) {
                                vErrors = [err5];
                            }
                            else {
                                vErrors.push(err5);
                            }
                            errors++;
                        }
                        var _valid3 = _errs16 === errors;
                        valid6 = valid6 || _valid3;
                    }
                    if (!valid6) {
                        const err6 = { instancePath: instancePath + "/options", schemaPath: "#/definitions/RuleSetLoaderOptions/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                        if (vErrors === null) {
                            vErrors = [err6];
                        }
                        else {
                            vErrors.push(err6);
                        }
                        errors++;
                    }
                    else {
                        errors = _errs13;
                        if (vErrors !== null) {
                            if (_errs13) {
                                vErrors.length = _errs13;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var _valid2 = _errs11 === errors;
                    if (_valid2) {
                        valid4 = true;
                        passing1 = 0;
                    }
                    if (!valid4) {
                        const err7 = { instancePath: instancePath + "/options", schemaPath: "#/anyOf/0/properties/options/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                        if (vErrors === null) {
                            vErrors = [err7];
                        }
                        else {
                            vErrors.push(err7);
                        }
                        errors++;
                    }
                    else {
                        errors = _errs10;
                        if (vErrors !== null) {
                            if (_errs10) {
                                vErrors.length = _errs10;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid1 = _errs9 === errors;
                }
                else {
                    var valid1 = true;
                }
            }
        }
    }
    else {
        const err8 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
            vErrors = [err8];
        }
        else {
            vErrors.push(err8);
        }
        errors++;
    }
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs18 = errors;
    const _errs19 = errors;
    if (errors === _errs19) {
        if (typeof data === "string") {
            if (data.length < 1) {
                const err9 = { instancePath, schemaPath: "#/definitions/RuleSetLoader/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err9];
                }
                else {
                    vErrors.push(err9);
                }
                errors++;
            }
        }
        else {
            const err10 = { instancePath, schemaPath: "#/definitions/RuleSetLoader/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
                vErrors = [err10];
            }
            else {
                vErrors.push(err10);
            }
            errors++;
        }
    }
    var _valid0 = _errs18 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err11 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err11];
    }
    else {
        vErrors.push(err11);
    }
    errors++;
    validate55.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate55.errors = vErrors; return errors === 0; }
function validate54(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (errors === _errs1) {
    if (Array.isArray(data)) {
        var valid1 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            const _errs3 = errors;
            const _errs4 = errors;
            let valid2 = false;
            let passing0 = null;
            const _errs5 = errors;
            if (!(validate55(data[i0], { instancePath: instancePath + "/" + i0, parentData: data, parentDataProperty: i0, rootData }))) {
                vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
                errors = vErrors.length;
            }
            var _valid1 = _errs5 === errors;
            if (_valid1) {
                valid2 = true;
                passing0 = 0;
            }
            if (!valid2) {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/anyOf/0/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            else {
                errors = _errs4;
                if (vErrors !== null) {
                    if (_errs4) {
                        vErrors.length = _errs4;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid1 = _errs3 === errors;
            if (!valid1) {
                break;
            }
        }
    }
    else {
        const err1 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs6 = errors;
    if (!(validate55(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors = vErrors === null ? validate55.errors : vErrors.concat(validate55.errors);
        errors = vErrors.length;
    }
    var _valid0 = _errs6 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err2 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err2];
    }
    else {
        vErrors.push(err2);
    }
    errors++;
    validate54.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate54.errors = vErrors; return errors === 0; }
const wrapper2 = { validate: validate34 };
function validate34(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(func2.call(schema41.properties, key0))) {
                validate34.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.exclude !== undefined) {
                const _errs2 = errors;
                const _errs3 = errors;
                let valid1 = false;
                let passing0 = null;
                const _errs4 = errors;
                if (!(validate35(data.exclude, { instancePath: instancePath + "/exclude", parentData: data, parentDataProperty: "exclude", rootData }))) {
                    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs4 === errors;
                if (_valid0) {
                    valid1 = true;
                    passing0 = 0;
                }
                if (!valid1) {
                    const err0 = { instancePath: instancePath + "/exclude", schemaPath: "#/properties/exclude/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                    if (vErrors === null) {
                        vErrors = [err0];
                    }
                    else {
                        vErrors.push(err0);
                    }
                    errors++;
                    validate34.errors = vErrors;
                    return false;
                }
                else {
                    errors = _errs3;
                    if (vErrors !== null) {
                        if (_errs3) {
                            vErrors.length = _errs3;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.generator !== undefined) {
                    let data1 = data.generator;
                    const _errs5 = errors;
                    if (!(data1 && typeof data1 == "object" && !Array.isArray(data1))) {
                        validate34.errors = [{ instancePath: instancePath + "/generator", schemaPath: "#/properties/generator/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                    }
                    var valid0 = _errs5 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.include !== undefined) {
                        const _errs7 = errors;
                        const _errs8 = errors;
                        let valid2 = false;
                        let passing1 = null;
                        const _errs9 = errors;
                        if (!(validate35(data.include, { instancePath: instancePath + "/include", parentData: data, parentDataProperty: "include", rootData }))) {
                            vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                            errors = vErrors.length;
                        }
                        var _valid1 = _errs9 === errors;
                        if (_valid1) {
                            valid2 = true;
                            passing1 = 0;
                        }
                        if (!valid2) {
                            const err1 = { instancePath: instancePath + "/include", schemaPath: "#/properties/include/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                            validate34.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs8;
                            if (vErrors !== null) {
                                if (_errs8) {
                                    vErrors.length = _errs8;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs7 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.issuer !== undefined) {
                            const _errs10 = errors;
                            const _errs11 = errors;
                            let valid3 = false;
                            let passing2 = null;
                            const _errs12 = errors;
                            if (!(validate35(data.issuer, { instancePath: instancePath + "/issuer", parentData: data, parentDataProperty: "issuer", rootData }))) {
                                vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                                errors = vErrors.length;
                            }
                            var _valid2 = _errs12 === errors;
                            if (_valid2) {
                                valid3 = true;
                                passing2 = 0;
                            }
                            if (!valid3) {
                                const err2 = { instancePath: instancePath + "/issuer", schemaPath: "#/properties/issuer/oneOf", keyword: "oneOf", params: { passingSchemas: passing2 }, message: "must match exactly one schema in oneOf" };
                                if (vErrors === null) {
                                    vErrors = [err2];
                                }
                                else {
                                    vErrors.push(err2);
                                }
                                errors++;
                                validate34.errors = vErrors;
                                return false;
                            }
                            else {
                                errors = _errs11;
                                if (vErrors !== null) {
                                    if (_errs11) {
                                        vErrors.length = _errs11;
                                    }
                                    else {
                                        vErrors = null;
                                    }
                                }
                            }
                            var valid0 = _errs10 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.oneOf !== undefined) {
                                let data4 = data.oneOf;
                                const _errs13 = errors;
                                if (errors === _errs13) {
                                    if (Array.isArray(data4)) {
                                        var valid4 = true;
                                        const len0 = data4.length;
                                        for (let i0 = 0; i0 < len0; i0++) {
                                            const _errs15 = errors;
                                            const _errs16 = errors;
                                            let valid5 = false;
                                            let passing3 = null;
                                            const _errs17 = errors;
                                            if (!(wrapper2.validate(data4[i0], { instancePath: instancePath + "/oneOf/" + i0, parentData: data4, parentDataProperty: i0, rootData }))) {
                                                vErrors = vErrors === null ? wrapper2.validate.errors : vErrors.concat(wrapper2.validate.errors);
                                                errors = vErrors.length;
                                            }
                                            var _valid3 = _errs17 === errors;
                                            if (_valid3) {
                                                valid5 = true;
                                                passing3 = 0;
                                            }
                                            if (!valid5) {
                                                const err3 = { instancePath: instancePath + "/oneOf/" + i0, schemaPath: "#/properties/oneOf/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing3 }, message: "must match exactly one schema in oneOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err3];
                                                }
                                                else {
                                                    vErrors.push(err3);
                                                }
                                                errors++;
                                                validate34.errors = vErrors;
                                                return false;
                                            }
                                            else {
                                                errors = _errs16;
                                                if (vErrors !== null) {
                                                    if (_errs16) {
                                                        vErrors.length = _errs16;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid4 = _errs15 === errors;
                                            if (!valid4) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        validate34.errors = [{ instancePath: instancePath + "/oneOf", schemaPath: "#/properties/oneOf/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                        return false;
                                    }
                                }
                                var valid0 = _errs13 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.parser !== undefined) {
                                    let data6 = data.parser;
                                    const _errs18 = errors;
                                    if (errors === _errs18) {
                                        if (data6 && typeof data6 == "object" && !Array.isArray(data6)) { }
                                        else {
                                            validate34.errors = [{ instancePath: instancePath + "/parser", schemaPath: "#/properties/parser/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                            return false;
                                        }
                                    }
                                    var valid0 = _errs18 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.resolve !== undefined) {
                                        let data7 = data.resolve;
                                        const _errs21 = errors;
                                        if (!(data7 && typeof data7 == "object" && !Array.isArray(data7))) {
                                            validate34.errors = [{ instancePath: instancePath + "/resolve", schemaPath: "#/properties/resolve/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                            return false;
                                        }
                                        const _errs23 = errors;
                                        let valid6 = false;
                                        let passing4 = null;
                                        const _errs24 = errors;
                                        if (!(validate48(data7, { instancePath: instancePath + "/resolve", parentData: data, parentDataProperty: "resolve", rootData }))) {
                                            vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
                                            errors = vErrors.length;
                                        }
                                        var _valid4 = _errs24 === errors;
                                        if (_valid4) {
                                            valid6 = true;
                                            passing4 = 0;
                                        }
                                        if (!valid6) {
                                            const err4 = { instancePath: instancePath + "/resolve", schemaPath: "#/properties/resolve/oneOf", keyword: "oneOf", params: { passingSchemas: passing4 }, message: "must match exactly one schema in oneOf" };
                                            if (vErrors === null) {
                                                vErrors = [err4];
                                            }
                                            else {
                                                vErrors.push(err4);
                                            }
                                            errors++;
                                            validate34.errors = vErrors;
                                            return false;
                                        }
                                        else {
                                            errors = _errs23;
                                            if (vErrors !== null) {
                                                if (_errs23) {
                                                    vErrors.length = _errs23;
                                                }
                                                else {
                                                    vErrors = null;
                                                }
                                            }
                                        }
                                        var valid0 = _errs21 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.resource !== undefined) {
                                            const _errs25 = errors;
                                            const _errs26 = errors;
                                            let valid7 = false;
                                            let passing5 = null;
                                            const _errs27 = errors;
                                            if (!(validate35(data.resource, { instancePath: instancePath + "/resource", parentData: data, parentDataProperty: "resource", rootData }))) {
                                                vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                                                errors = vErrors.length;
                                            }
                                            var _valid5 = _errs27 === errors;
                                            if (_valid5) {
                                                valid7 = true;
                                                passing5 = 0;
                                            }
                                            if (!valid7) {
                                                const err5 = { instancePath: instancePath + "/resource", schemaPath: "#/properties/resource/oneOf", keyword: "oneOf", params: { passingSchemas: passing5 }, message: "must match exactly one schema in oneOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err5];
                                                }
                                                else {
                                                    vErrors.push(err5);
                                                }
                                                errors++;
                                                validate34.errors = vErrors;
                                                return false;
                                            }
                                            else {
                                                errors = _errs26;
                                                if (vErrors !== null) {
                                                    if (_errs26) {
                                                        vErrors.length = _errs26;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid0 = _errs25 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.resourceFragment !== undefined) {
                                                const _errs28 = errors;
                                                const _errs29 = errors;
                                                let valid8 = false;
                                                let passing6 = null;
                                                const _errs30 = errors;
                                                if (!(validate35(data.resourceFragment, { instancePath: instancePath + "/resourceFragment", parentData: data, parentDataProperty: "resourceFragment", rootData }))) {
                                                    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                                                    errors = vErrors.length;
                                                }
                                                var _valid6 = _errs30 === errors;
                                                if (_valid6) {
                                                    valid8 = true;
                                                    passing6 = 0;
                                                }
                                                if (!valid8) {
                                                    const err6 = { instancePath: instancePath + "/resourceFragment", schemaPath: "#/properties/resourceFragment/oneOf", keyword: "oneOf", params: { passingSchemas: passing6 }, message: "must match exactly one schema in oneOf" };
                                                    if (vErrors === null) {
                                                        vErrors = [err6];
                                                    }
                                                    else {
                                                        vErrors.push(err6);
                                                    }
                                                    errors++;
                                                    validate34.errors = vErrors;
                                                    return false;
                                                }
                                                else {
                                                    errors = _errs29;
                                                    if (vErrors !== null) {
                                                        if (_errs29) {
                                                            vErrors.length = _errs29;
                                                        }
                                                        else {
                                                            vErrors = null;
                                                        }
                                                    }
                                                }
                                                var valid0 = _errs28 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                            if (valid0) {
                                                if (data.resourceQuery !== undefined) {
                                                    const _errs31 = errors;
                                                    const _errs32 = errors;
                                                    let valid9 = false;
                                                    let passing7 = null;
                                                    const _errs33 = errors;
                                                    if (!(validate35(data.resourceQuery, { instancePath: instancePath + "/resourceQuery", parentData: data, parentDataProperty: "resourceQuery", rootData }))) {
                                                        vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                                                        errors = vErrors.length;
                                                    }
                                                    var _valid7 = _errs33 === errors;
                                                    if (_valid7) {
                                                        valid9 = true;
                                                        passing7 = 0;
                                                    }
                                                    if (!valid9) {
                                                        const err7 = { instancePath: instancePath + "/resourceQuery", schemaPath: "#/properties/resourceQuery/oneOf", keyword: "oneOf", params: { passingSchemas: passing7 }, message: "must match exactly one schema in oneOf" };
                                                        if (vErrors === null) {
                                                            vErrors = [err7];
                                                        }
                                                        else {
                                                            vErrors.push(err7);
                                                        }
                                                        errors++;
                                                        validate34.errors = vErrors;
                                                        return false;
                                                    }
                                                    else {
                                                        errors = _errs32;
                                                        if (vErrors !== null) {
                                                            if (_errs32) {
                                                                vErrors.length = _errs32;
                                                            }
                                                            else {
                                                                vErrors = null;
                                                            }
                                                        }
                                                    }
                                                    var valid0 = _errs31 === errors;
                                                }
                                                else {
                                                    var valid0 = true;
                                                }
                                                if (valid0) {
                                                    if (data.rules !== undefined) {
                                                        let data11 = data.rules;
                                                        const _errs34 = errors;
                                                        if (errors === _errs34) {
                                                            if (Array.isArray(data11)) {
                                                                var valid10 = true;
                                                                const len1 = data11.length;
                                                                for (let i1 = 0; i1 < len1; i1++) {
                                                                    const _errs36 = errors;
                                                                    const _errs37 = errors;
                                                                    let valid11 = false;
                                                                    let passing8 = null;
                                                                    const _errs38 = errors;
                                                                    if (!(wrapper2.validate(data11[i1], { instancePath: instancePath + "/rules/" + i1, parentData: data11, parentDataProperty: i1, rootData }))) {
                                                                        vErrors = vErrors === null ? wrapper2.validate.errors : vErrors.concat(wrapper2.validate.errors);
                                                                        errors = vErrors.length;
                                                                    }
                                                                    var _valid8 = _errs38 === errors;
                                                                    if (_valid8) {
                                                                        valid11 = true;
                                                                        passing8 = 0;
                                                                    }
                                                                    if (!valid11) {
                                                                        const err8 = { instancePath: instancePath + "/rules/" + i1, schemaPath: "#/properties/rules/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing8 }, message: "must match exactly one schema in oneOf" };
                                                                        if (vErrors === null) {
                                                                            vErrors = [err8];
                                                                        }
                                                                        else {
                                                                            vErrors.push(err8);
                                                                        }
                                                                        errors++;
                                                                        validate34.errors = vErrors;
                                                                        return false;
                                                                    }
                                                                    else {
                                                                        errors = _errs37;
                                                                        if (vErrors !== null) {
                                                                            if (_errs37) {
                                                                                vErrors.length = _errs37;
                                                                            }
                                                                            else {
                                                                                vErrors = null;
                                                                            }
                                                                        }
                                                                    }
                                                                    var valid10 = _errs36 === errors;
                                                                    if (!valid10) {
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                validate34.errors = [{ instancePath: instancePath + "/rules", schemaPath: "#/properties/rules/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                                return false;
                                                            }
                                                        }
                                                        var valid0 = _errs34 === errors;
                                                    }
                                                    else {
                                                        var valid0 = true;
                                                    }
                                                    if (valid0) {
                                                        if (data.sideEffects !== undefined) {
                                                            const _errs39 = errors;
                                                            if (typeof data.sideEffects !== "boolean") {
                                                                validate34.errors = [{ instancePath: instancePath + "/sideEffects", schemaPath: "#/properties/sideEffects/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                return false;
                                                            }
                                                            var valid0 = _errs39 === errors;
                                                        }
                                                        else {
                                                            var valid0 = true;
                                                        }
                                                        if (valid0) {
                                                            if (data.test !== undefined) {
                                                                const _errs41 = errors;
                                                                const _errs42 = errors;
                                                                let valid12 = false;
                                                                let passing9 = null;
                                                                const _errs43 = errors;
                                                                if (!(validate35(data.test, { instancePath: instancePath + "/test", parentData: data, parentDataProperty: "test", rootData }))) {
                                                                    vErrors = vErrors === null ? validate35.errors : vErrors.concat(validate35.errors);
                                                                    errors = vErrors.length;
                                                                }
                                                                var _valid9 = _errs43 === errors;
                                                                if (_valid9) {
                                                                    valid12 = true;
                                                                    passing9 = 0;
                                                                }
                                                                if (!valid12) {
                                                                    const err9 = { instancePath: instancePath + "/test", schemaPath: "#/properties/test/oneOf", keyword: "oneOf", params: { passingSchemas: passing9 }, message: "must match exactly one schema in oneOf" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err9];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err9);
                                                                    }
                                                                    errors++;
                                                                    validate34.errors = vErrors;
                                                                    return false;
                                                                }
                                                                else {
                                                                    errors = _errs42;
                                                                    if (vErrors !== null) {
                                                                        if (_errs42) {
                                                                            vErrors.length = _errs42;
                                                                        }
                                                                        else {
                                                                            vErrors = null;
                                                                        }
                                                                    }
                                                                }
                                                                var valid0 = _errs41 === errors;
                                                            }
                                                            else {
                                                                var valid0 = true;
                                                            }
                                                            if (valid0) {
                                                                if (data.type !== undefined) {
                                                                    const _errs44 = errors;
                                                                    if (typeof data.type !== "string") {
                                                                        validate34.errors = [{ instancePath: instancePath + "/type", schemaPath: "#/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                        return false;
                                                                    }
                                                                    var valid0 = _errs44 === errors;
                                                                }
                                                                else {
                                                                    var valid0 = true;
                                                                }
                                                                if (valid0) {
                                                                    if (data.use !== undefined) {
                                                                        const _errs46 = errors;
                                                                        const _errs47 = errors;
                                                                        let valid13 = false;
                                                                        let passing10 = null;
                                                                        const _errs48 = errors;
                                                                        if (!(validate54(data.use, { instancePath: instancePath + "/use", parentData: data, parentDataProperty: "use", rootData }))) {
                                                                            vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
                                                                            errors = vErrors.length;
                                                                        }
                                                                        var _valid10 = _errs48 === errors;
                                                                        if (_valid10) {
                                                                            valid13 = true;
                                                                            passing10 = 0;
                                                                        }
                                                                        if (!valid13) {
                                                                            const err10 = { instancePath: instancePath + "/use", schemaPath: "#/properties/use/oneOf", keyword: "oneOf", params: { passingSchemas: passing10 }, message: "must match exactly one schema in oneOf" };
                                                                            if (vErrors === null) {
                                                                                vErrors = [err10];
                                                                            }
                                                                            else {
                                                                                vErrors.push(err10);
                                                                            }
                                                                            errors++;
                                                                            validate34.errors = vErrors;
                                                                            return false;
                                                                        }
                                                                        else {
                                                                            errors = _errs47;
                                                                            if (vErrors !== null) {
                                                                                if (_errs47) {
                                                                                    vErrors.length = _errs47;
                                                                                }
                                                                                else {
                                                                                    vErrors = null;
                                                                                }
                                                                            }
                                                                        }
                                                                        var valid0 = _errs46 === errors;
                                                                    }
                                                                    else {
                                                                        var valid0 = true;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate34.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate34.errors = vErrors; return errors === 0; }
function validate33(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (Array.isArray(data)) {
        var valid0 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            let data0 = data[i0];
            const _errs1 = errors;
            const _errs2 = errors;
            let valid1 = false;
            const _errs3 = errors;
            if (data0 !== "...") {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/items/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            var _valid0 = _errs3 === errors;
            valid1 = valid1 || _valid0;
            if (!valid1) {
                const _errs4 = errors;
                if (!(validate34(data0, { instancePath: instancePath + "/" + i0, parentData: data, parentDataProperty: i0, rootData }))) {
                    vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs4 === errors;
                valid1 = valid1 || _valid0;
            }
            if (!valid1) {
                const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/items/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
                validate33.errors = vErrors;
                return false;
            }
            else {
                errors = _errs2;
                if (vErrors !== null) {
                    if (_errs2) {
                        vErrors.length = _errs2;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs1 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate33.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
        return false;
    }
} validate33.errors = vErrors; return errors === 0; }
const schema54 = { "description": "Specify options for each parser.", "type": "object", "additionalProperties": { "description": "Options for parsing.", "type": "object", "additionalProperties": true }, "properties": { "asset": { "$ref": "#/definitions/AssetParserOptions" } } };
const schema55 = { "description": "Parser options for asset modules.", "type": "object", "additionalProperties": false, "properties": { "dataUrlCondition": { "description": "The condition for inlining the asset as DataUrl.", "anyOf": [{ "$ref": "#/definitions/AssetParserDataUrlOptions" }] } } };
const schema56 = { "description": "Options object for DataUrl condition.", "type": "object", "additionalProperties": false, "properties": { "maxSize": { "description": "Maximum size of asset that should be inline as modules. Default: 8kb.", "type": "number" } } };
function validate62(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(key0 === "dataUrlCondition")) {
                validate62.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.dataUrlCondition !== undefined) {
                let data0 = data.dataUrlCondition;
                const _errs3 = errors;
                let valid1 = false;
                const _errs4 = errors;
                const _errs5 = errors;
                if (errors === _errs5) {
                    if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                        const _errs7 = errors;
                        for (const key1 in data0) {
                            if (!(key1 === "maxSize")) {
                                const err0 = { instancePath: instancePath + "/dataUrlCondition", schemaPath: "#/definitions/AssetParserDataUrlOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                                if (vErrors === null) {
                                    vErrors = [err0];
                                }
                                else {
                                    vErrors.push(err0);
                                }
                                errors++;
                                break;
                            }
                        }
                        if (_errs7 === errors) {
                            if (data0.maxSize !== undefined) {
                                if (!(typeof data0.maxSize == "number")) {
                                    const err1 = { instancePath: instancePath + "/dataUrlCondition/maxSize", schemaPath: "#/definitions/AssetParserDataUrlOptions/properties/maxSize/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                    if (vErrors === null) {
                                        vErrors = [err1];
                                    }
                                    else {
                                        vErrors.push(err1);
                                    }
                                    errors++;
                                }
                            }
                        }
                    }
                    else {
                        const err2 = { instancePath: instancePath + "/dataUrlCondition", schemaPath: "#/definitions/AssetParserDataUrlOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                }
                var _valid0 = _errs4 === errors;
                valid1 = valid1 || _valid0;
                if (!valid1) {
                    const err3 = { instancePath: instancePath + "/dataUrlCondition", schemaPath: "#/properties/dataUrlCondition/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                    validate62.errors = vErrors;
                    return false;
                }
                else {
                    errors = _errs3;
                    if (vErrors !== null) {
                        if (_errs3) {
                            vErrors.length = _errs3;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
            }
        }
    }
    else {
        validate62.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate62.errors = vErrors; return errors === 0; }
function validate61(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(key0 === "asset")) {
                let data0 = data[key0];
                const _errs2 = errors;
                if (errors === _errs2) {
                    if (data0 && typeof data0 == "object" && !Array.isArray(data0)) { }
                    else {
                        validate61.errors = [{ instancePath: instancePath + "/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/additionalProperties/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                    }
                }
                var valid0 = _errs2 === errors;
                if (!valid0) {
                    break;
                }
            }
        }
        if (_errs1 === errors) {
            if (data.asset !== undefined) {
                if (!(validate62(data.asset, { instancePath: instancePath + "/asset", parentData: data, parentDataProperty: "asset", rootData }))) {
                    vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
                    errors = vErrors.length;
                }
            }
        }
    }
    else {
        validate61.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate61.errors = vErrors; return errors === 0; }
function validate32(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(((key0 === "defaultRules") || (key0 === "parser")) || (key0 === "rules"))) {
                validate32.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.defaultRules !== undefined) {
                const _errs2 = errors;
                const _errs3 = errors;
                let valid1 = false;
                let passing0 = null;
                const _errs4 = errors;
                if (!(validate33(data.defaultRules, { instancePath: instancePath + "/defaultRules", parentData: data, parentDataProperty: "defaultRules", rootData }))) {
                    vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
                    errors = vErrors.length;
                }
                var _valid0 = _errs4 === errors;
                if (_valid0) {
                    valid1 = true;
                    passing0 = 0;
                }
                if (!valid1) {
                    const err0 = { instancePath: instancePath + "/defaultRules", schemaPath: "#/properties/defaultRules/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                    if (vErrors === null) {
                        vErrors = [err0];
                    }
                    else {
                        vErrors.push(err0);
                    }
                    errors++;
                    validate32.errors = vErrors;
                    return false;
                }
                else {
                    errors = _errs3;
                    if (vErrors !== null) {
                        if (_errs3) {
                            vErrors.length = _errs3;
                        }
                        else {
                            vErrors = null;
                        }
                    }
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.parser !== undefined) {
                    const _errs5 = errors;
                    if (!(validate61(data.parser, { instancePath: instancePath + "/parser", parentData: data, parentDataProperty: "parser", rootData }))) {
                        vErrors = vErrors === null ? validate61.errors : vErrors.concat(validate61.errors);
                        errors = vErrors.length;
                    }
                    var valid0 = _errs5 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.rules !== undefined) {
                        const _errs6 = errors;
                        const _errs7 = errors;
                        let valid2 = false;
                        let passing1 = null;
                        const _errs8 = errors;
                        if (!(validate33(data.rules, { instancePath: instancePath + "/rules", parentData: data, parentDataProperty: "rules", rootData }))) {
                            vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
                            errors = vErrors.length;
                        }
                        var _valid1 = _errs8 === errors;
                        if (_valid1) {
                            valid2 = true;
                            passing1 = 0;
                        }
                        if (!valid2) {
                            const err1 = { instancePath: instancePath + "/rules", schemaPath: "#/properties/rules/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                            validate32.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs7;
                            if (vErrors !== null) {
                                if (_errs7) {
                                    vErrors.length = _errs7;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs6 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                }
            }
        }
    }
    else {
        validate32.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate32.errors = vErrors; return errors === 0; }
const schema58 = { "description": "Include polyfills or mocks for various node stuff.", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/NodeOptions" }] };
const schema59 = { "description": "Options object for node compatibility features.", "type": "object", "additionalProperties": false, "properties": { "__dirname": { "description": "Include a polyfill for the '__dirname' variable.", "enum": [false, true, "warn-mock", "mock", "eval-only"] }, "__filename": { "description": "Include a polyfill for the '__filename' variable.", "enum": [false, true, "warn-mock", "mock", "eval-only"] }, "global": { "description": "Include a polyfill for the 'global' variable.", "enum": [false, true, "warn"] } } };
function validate67(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (data !== false) {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    const _errs3 = errors;
    if (errors === _errs3) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            const _errs5 = errors;
            for (const key0 in data) {
                if (!(((key0 === "__dirname") || (key0 === "__filename")) || (key0 === "global"))) {
                    const err1 = { instancePath, schemaPath: "#/definitions/NodeOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                    break;
                }
            }
            if (_errs5 === errors) {
                if (data.__dirname !== undefined) {
                    let data0 = data.__dirname;
                    const _errs6 = errors;
                    if (data0 !== false && data0 !== true && data0 !== "warn-mock" && data0 !== "mock" && data0 !== "eval-only") {
                        const err2 = { instancePath: instancePath + "/__dirname", schemaPath: "#/definitions/NodeOptions/properties/__dirname/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                    var valid2 = _errs6 === errors;
                }
                else {
                    var valid2 = true;
                }
                if (valid2) {
                    if (data.__filename !== undefined) {
                        let data1 = data.__filename;
                        const _errs7 = errors;
                        if (data1 !== false && data1 !== true && data1 !== "warn-mock" && data1 !== "mock" && data1 !== "eval-only") {
                            const err3 = { instancePath: instancePath + "/__filename", schemaPath: "#/definitions/NodeOptions/properties/__filename/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err3];
                            }
                            else {
                                vErrors.push(err3);
                            }
                            errors++;
                        }
                        var valid2 = _errs7 === errors;
                    }
                    else {
                        var valid2 = true;
                    }
                    if (valid2) {
                        if (data.global !== undefined) {
                            let data2 = data.global;
                            const _errs8 = errors;
                            if (data2 !== false && data2 !== true && data2 !== "warn") {
                                const err4 = { instancePath: instancePath + "/global", schemaPath: "#/definitions/NodeOptions/properties/global/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                if (vErrors === null) {
                                    vErrors = [err4];
                                }
                                else {
                                    vErrors.push(err4);
                                }
                                errors++;
                            }
                            var valid2 = _errs8 === errors;
                        }
                        else {
                            var valid2 = true;
                        }
                    }
                }
            }
        }
        else {
            const err5 = { instancePath, schemaPath: "#/definitions/NodeOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
                vErrors = [err5];
            }
            else {
                vErrors.push(err5);
            }
            errors++;
        }
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err6 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err6];
    }
    else {
        vErrors.push(err6);
    }
    errors++;
    validate67.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate67.errors = vErrors; return errors === 0; }
const schema60 = { "description": "Enables/Disables integrated optimizations.", "type": "object", "additionalProperties": false, "properties": { "chunkIds": { "description": "Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin).", "enum": ["named", "deterministic"] }, "minimize": { "description": "Enable minimizing the output. Uses optimization.minimizer.", "type": "boolean" }, "minimizer": { "description": "Minimizer(s) to use for minimizing the output.", "type": "array", "items": { "description": "Plugin of type object or instanceof Function.", "anyOf": [{ "enum": ["..."] }, { "$ref": "#/definitions/RspackPluginInstance" }, { "$ref": "#/definitions/RspackPluginFunction" }] } }, "moduleIds": { "description": "Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin).", "enum": ["named", "deterministic"] }, "removeAvailableModules": { "description": "Removes modules from chunks when these modules are already included in all parents.", "type": "boolean" }, "runtimeChunk": { "$ref": "#/definitions/OptimizationRuntimeChunk" }, "sideEffects": { "description": "Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects).", "anyOf": [{ "enum": ["flag"] }, { "type": "boolean" }] }, "splitChunks": { "description": "Optimize duplication and caching by splitting chunks by shared modules and cache group.", "anyOf": [{ "enum": [false] }, { "$ref": "#/definitions/OptimizationSplitChunksOptions" }] } } };
const schema61 = { "description": "Plugin instance.", "type": "object", "additionalProperties": true, "properties": { "apply": { "description": "The run point of the plugin, required method.", "instanceof": "Function" } }, "required": ["apply"] };
const schema62 = { "description": "Function acting as plugin.", "instanceof": "Function" };
const schema63 = { "description": "Create an additional chunk which contains only the rspack runtime and chunk hash maps.", "anyOf": [{ "enum": ["single", "multiple"] }, { "type": "boolean" }, { "type": "object", "additionalProperties": false, "properties": { "name": { "description": "The name or name factory for the runtime chunks.", "anyOf": [{ "type": "string" }, { "instanceof": "Function" }] } } }] };
const schema64 = { "description": "Options object for splitting chunks into smaller chunks.", "type": "object", "additionalProperties": false, "properties": { "cacheGroups": { "description": "Assign modules to a cache group (modules from different cache groups are tried to keep in separate chunks, default categories: 'default', 'defaultVendors').", "type": "object", "additionalProperties": { "description": "Configuration for a cache group.", "anyOf": [{ "$ref": "#/definitions/OptimizationSplitChunksCacheGroup" }] } }, "chunks": { "description": "Select chunks for determining shared modules (defaults to \"async\", \"initial\" and \"all\" requires adding these chunks to the HTML).", "anyOf": [{ "enum": ["initial", "async", "all"] }] }, "enforceSizeThreshold": { "description": "Size threshold at which splitting is enforced and other restrictions (minRemainingSize, maxAsyncRequests, maxInitialRequests) are ignored.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] }, "maxAsyncRequests": { "description": "Maximum number of requests which are accepted for on-demand loading.", "type": "number", "minimum": 1 }, "maxInitialRequests": { "description": "Maximum number of initial chunks which are accepted for an entry point.", "type": "number", "minimum": 1 }, "minChunks": { "description": "Minimum number of times a module has to be duplicated until it's considered for splitting.", "type": "number", "minimum": 1 }, "minRemainingSize": { "description": "Minimal size for the chunks the stay after moving the modules to a new chunk.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] }, "minSize": { "description": "Minimal size for the created chunks.", "oneOf": [{ "$ref": "#/definitions/OptimizationSplitChunksSizes" }] } } };
const schema65 = { "description": "Options object for describing behavior of a cache group selecting modules that should be cached together.", "type": "object", "additionalProperties": false, "properties": { "chunks": { "description": "Select chunks for determining cache group content (defaults to \"initial\", \"initial\" and \"all\" requires adding these chunks to the HTML).", "anyOf": [{ "enum": ["initial", "async", "all"] }, { "instanceof": "Function" }] }, "minChunks": { "description": "Minimum number of times a module has to be duplicated until it's considered for splitting.", "type": "number", "minimum": 1 }, "name": { "description": "Give chunks for this cache group a name (chunks with equal name are merged).", "anyOf": [{ "enum": [false] }, { "type": "string" }, { "instanceof": "Function" }] }, "priority": { "description": "Priority of this cache group.", "type": "number" }, "reuseExistingChunk": { "description": "Try to reuse existing chunk (with name) when it has matching modules.", "type": "boolean" }, "test": { "description": "Assign modules to a cache group by module name.", "anyOf": [{ "instanceof": "RegExp" }] } } };
const schema66 = { "description": "Size description for limits.", "anyOf": [{ "description": "Size of the javascript part of the chunk.", "type": "number", "minimum": 0 }] };
function validate70(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!((((((((key0 === "cacheGroups") || (key0 === "chunks")) || (key0 === "enforceSizeThreshold")) || (key0 === "maxAsyncRequests")) || (key0 === "maxInitialRequests")) || (key0 === "minChunks")) || (key0 === "minRemainingSize")) || (key0 === "minSize"))) {
                validate70.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.cacheGroups !== undefined) {
                let data0 = data.cacheGroups;
                const _errs2 = errors;
                if (errors === _errs2) {
                    if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                        for (const key1 in data0) {
                            let data1 = data0[key1];
                            const _errs5 = errors;
                            const _errs6 = errors;
                            let valid2 = false;
                            const _errs7 = errors;
                            const _errs8 = errors;
                            if (errors === _errs8) {
                                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                                    const _errs10 = errors;
                                    for (const key2 in data1) {
                                        if (!((((((key2 === "chunks") || (key2 === "minChunks")) || (key2 === "name")) || (key2 === "priority")) || (key2 === "reuseExistingChunk")) || (key2 === "test"))) {
                                            const err0 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
                                            if (vErrors === null) {
                                                vErrors = [err0];
                                            }
                                            else {
                                                vErrors.push(err0);
                                            }
                                            errors++;
                                            break;
                                        }
                                    }
                                    if (_errs10 === errors) {
                                        if (data1.chunks !== undefined) {
                                            let data2 = data1.chunks;
                                            const _errs11 = errors;
                                            const _errs12 = errors;
                                            let valid5 = false;
                                            const _errs13 = errors;
                                            if (data2 !== "initial" && data2 !== "async" && data2 !== "all") {
                                                const err1 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/chunks", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/chunks/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err1];
                                                }
                                                else {
                                                    vErrors.push(err1);
                                                }
                                                errors++;
                                            }
                                            var _valid1 = _errs13 === errors;
                                            valid5 = valid5 || _valid1;
                                            if (!valid5) {
                                                const _errs14 = errors;
                                                if (!(data2 instanceof Function)) {
                                                    const err2 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/chunks", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/chunks/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                    if (vErrors === null) {
                                                        vErrors = [err2];
                                                    }
                                                    else {
                                                        vErrors.push(err2);
                                                    }
                                                    errors++;
                                                }
                                                var _valid1 = _errs14 === errors;
                                                valid5 = valid5 || _valid1;
                                            }
                                            if (!valid5) {
                                                const err3 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/chunks", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/chunks/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err3];
                                                }
                                                else {
                                                    vErrors.push(err3);
                                                }
                                                errors++;
                                            }
                                            else {
                                                errors = _errs12;
                                                if (vErrors !== null) {
                                                    if (_errs12) {
                                                        vErrors.length = _errs12;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid4 = _errs11 === errors;
                                        }
                                        else {
                                            var valid4 = true;
                                        }
                                        if (valid4) {
                                            if (data1.minChunks !== undefined) {
                                                let data3 = data1.minChunks;
                                                const _errs15 = errors;
                                                if (errors === _errs15) {
                                                    if (typeof data3 == "number") {
                                                        if (data3 < 1 || isNaN(data3)) {
                                                            const err4 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/minChunks", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/minChunks/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" };
                                                            if (vErrors === null) {
                                                                vErrors = [err4];
                                                            }
                                                            else {
                                                                vErrors.push(err4);
                                                            }
                                                            errors++;
                                                        }
                                                    }
                                                    else {
                                                        const err5 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/minChunks", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/minChunks/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                        if (vErrors === null) {
                                                            vErrors = [err5];
                                                        }
                                                        else {
                                                            vErrors.push(err5);
                                                        }
                                                        errors++;
                                                    }
                                                }
                                                var valid4 = _errs15 === errors;
                                            }
                                            else {
                                                var valid4 = true;
                                            }
                                            if (valid4) {
                                                if (data1.name !== undefined) {
                                                    let data4 = data1.name;
                                                    const _errs17 = errors;
                                                    const _errs18 = errors;
                                                    let valid6 = false;
                                                    const _errs19 = errors;
                                                    if (data4 !== false) {
                                                        const err6 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/name", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/name/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                        if (vErrors === null) {
                                                            vErrors = [err6];
                                                        }
                                                        else {
                                                            vErrors.push(err6);
                                                        }
                                                        errors++;
                                                    }
                                                    var _valid2 = _errs19 === errors;
                                                    valid6 = valid6 || _valid2;
                                                    if (!valid6) {
                                                        const _errs20 = errors;
                                                        if (typeof data4 !== "string") {
                                                            const err7 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/name", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/name/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                            if (vErrors === null) {
                                                                vErrors = [err7];
                                                            }
                                                            else {
                                                                vErrors.push(err7);
                                                            }
                                                            errors++;
                                                        }
                                                        var _valid2 = _errs20 === errors;
                                                        valid6 = valid6 || _valid2;
                                                        if (!valid6) {
                                                            const _errs22 = errors;
                                                            if (!(data4 instanceof Function)) {
                                                                const err8 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/name", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/name/anyOf/2/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err8];
                                                                }
                                                                else {
                                                                    vErrors.push(err8);
                                                                }
                                                                errors++;
                                                            }
                                                            var _valid2 = _errs22 === errors;
                                                            valid6 = valid6 || _valid2;
                                                        }
                                                    }
                                                    if (!valid6) {
                                                        const err9 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/name", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/name/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                        if (vErrors === null) {
                                                            vErrors = [err9];
                                                        }
                                                        else {
                                                            vErrors.push(err9);
                                                        }
                                                        errors++;
                                                    }
                                                    else {
                                                        errors = _errs18;
                                                        if (vErrors !== null) {
                                                            if (_errs18) {
                                                                vErrors.length = _errs18;
                                                            }
                                                            else {
                                                                vErrors = null;
                                                            }
                                                        }
                                                    }
                                                    var valid4 = _errs17 === errors;
                                                }
                                                else {
                                                    var valid4 = true;
                                                }
                                                if (valid4) {
                                                    if (data1.priority !== undefined) {
                                                        const _errs23 = errors;
                                                        if (!(typeof data1.priority == "number")) {
                                                            const err10 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/priority", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/priority/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                            if (vErrors === null) {
                                                                vErrors = [err10];
                                                            }
                                                            else {
                                                                vErrors.push(err10);
                                                            }
                                                            errors++;
                                                        }
                                                        var valid4 = _errs23 === errors;
                                                    }
                                                    else {
                                                        var valid4 = true;
                                                    }
                                                    if (valid4) {
                                                        if (data1.reuseExistingChunk !== undefined) {
                                                            const _errs25 = errors;
                                                            if (typeof data1.reuseExistingChunk !== "boolean") {
                                                                const err11 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/reuseExistingChunk", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/reuseExistingChunk/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err11];
                                                                }
                                                                else {
                                                                    vErrors.push(err11);
                                                                }
                                                                errors++;
                                                            }
                                                            var valid4 = _errs25 === errors;
                                                        }
                                                        else {
                                                            var valid4 = true;
                                                        }
                                                        if (valid4) {
                                                            if (data1.test !== undefined) {
                                                                const _errs27 = errors;
                                                                const _errs28 = errors;
                                                                let valid7 = false;
                                                                const _errs29 = errors;
                                                                if (!(data1.test instanceof RegExp)) {
                                                                    const err12 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/test", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/test/anyOf/0/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err12];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err12);
                                                                    }
                                                                    errors++;
                                                                }
                                                                var _valid3 = _errs29 === errors;
                                                                valid7 = valid7 || _valid3;
                                                                if (!valid7) {
                                                                    const err13 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1") + "/test", schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/properties/test/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err13];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err13);
                                                                    }
                                                                    errors++;
                                                                }
                                                                else {
                                                                    errors = _errs28;
                                                                    if (vErrors !== null) {
                                                                        if (_errs28) {
                                                                            vErrors.length = _errs28;
                                                                        }
                                                                        else {
                                                                            vErrors = null;
                                                                        }
                                                                    }
                                                                }
                                                                var valid4 = _errs27 === errors;
                                                            }
                                                            else {
                                                                var valid4 = true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    const err14 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/OptimizationSplitChunksCacheGroup/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                    if (vErrors === null) {
                                        vErrors = [err14];
                                    }
                                    else {
                                        vErrors.push(err14);
                                    }
                                    errors++;
                                }
                            }
                            var _valid0 = _errs7 === errors;
                            valid2 = valid2 || _valid0;
                            if (!valid2) {
                                const err15 = { instancePath: instancePath + "/cacheGroups/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/cacheGroups/additionalProperties/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                if (vErrors === null) {
                                    vErrors = [err15];
                                }
                                else {
                                    vErrors.push(err15);
                                }
                                errors++;
                                validate70.errors = vErrors;
                                return false;
                            }
                            else {
                                errors = _errs6;
                                if (vErrors !== null) {
                                    if (_errs6) {
                                        vErrors.length = _errs6;
                                    }
                                    else {
                                        vErrors = null;
                                    }
                                }
                            }
                            var valid1 = _errs5 === errors;
                            if (!valid1) {
                                break;
                            }
                        }
                    }
                    else {
                        validate70.errors = [{ instancePath: instancePath + "/cacheGroups", schemaPath: "#/properties/cacheGroups/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                    }
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.chunks !== undefined) {
                    let data8 = data.chunks;
                    const _errs30 = errors;
                    const _errs31 = errors;
                    let valid8 = false;
                    const _errs32 = errors;
                    if (data8 !== "initial" && data8 !== "async" && data8 !== "all") {
                        const err16 = { instancePath: instancePath + "/chunks", schemaPath: "#/properties/chunks/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                        if (vErrors === null) {
                            vErrors = [err16];
                        }
                        else {
                            vErrors.push(err16);
                        }
                        errors++;
                    }
                    var _valid4 = _errs32 === errors;
                    valid8 = valid8 || _valid4;
                    if (!valid8) {
                        const err17 = { instancePath: instancePath + "/chunks", schemaPath: "#/properties/chunks/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                        if (vErrors === null) {
                            vErrors = [err17];
                        }
                        else {
                            vErrors.push(err17);
                        }
                        errors++;
                        validate70.errors = vErrors;
                        return false;
                    }
                    else {
                        errors = _errs31;
                        if (vErrors !== null) {
                            if (_errs31) {
                                vErrors.length = _errs31;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid0 = _errs30 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.enforceSizeThreshold !== undefined) {
                        let data9 = data.enforceSizeThreshold;
                        const _errs33 = errors;
                        const _errs34 = errors;
                        let valid9 = false;
                        let passing0 = null;
                        const _errs35 = errors;
                        const _errs37 = errors;
                        let valid11 = false;
                        const _errs38 = errors;
                        if (errors === _errs38) {
                            if (typeof data9 == "number") {
                                if (data9 < 0 || isNaN(data9)) {
                                    const err18 = { instancePath: instancePath + "/enforceSizeThreshold", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
                                    if (vErrors === null) {
                                        vErrors = [err18];
                                    }
                                    else {
                                        vErrors.push(err18);
                                    }
                                    errors++;
                                }
                            }
                            else {
                                const err19 = { instancePath: instancePath + "/enforceSizeThreshold", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                if (vErrors === null) {
                                    vErrors = [err19];
                                }
                                else {
                                    vErrors.push(err19);
                                }
                                errors++;
                            }
                        }
                        var _valid6 = _errs38 === errors;
                        valid11 = valid11 || _valid6;
                        if (!valid11) {
                            const err20 = { instancePath: instancePath + "/enforceSizeThreshold", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                            if (vErrors === null) {
                                vErrors = [err20];
                            }
                            else {
                                vErrors.push(err20);
                            }
                            errors++;
                        }
                        else {
                            errors = _errs37;
                            if (vErrors !== null) {
                                if (_errs37) {
                                    vErrors.length = _errs37;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var _valid5 = _errs35 === errors;
                        if (_valid5) {
                            valid9 = true;
                            passing0 = 0;
                        }
                        if (!valid9) {
                            const err21 = { instancePath: instancePath + "/enforceSizeThreshold", schemaPath: "#/properties/enforceSizeThreshold/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                            if (vErrors === null) {
                                vErrors = [err21];
                            }
                            else {
                                vErrors.push(err21);
                            }
                            errors++;
                            validate70.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs34;
                            if (vErrors !== null) {
                                if (_errs34) {
                                    vErrors.length = _errs34;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs33 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.maxAsyncRequests !== undefined) {
                            let data10 = data.maxAsyncRequests;
                            const _errs40 = errors;
                            if (errors === _errs40) {
                                if (typeof data10 == "number") {
                                    if (data10 < 1 || isNaN(data10)) {
                                        validate70.errors = [{ instancePath: instancePath + "/maxAsyncRequests", schemaPath: "#/properties/maxAsyncRequests/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" }];
                                        return false;
                                    }
                                }
                                else {
                                    validate70.errors = [{ instancePath: instancePath + "/maxAsyncRequests", schemaPath: "#/properties/maxAsyncRequests/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                    return false;
                                }
                            }
                            var valid0 = _errs40 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.maxInitialRequests !== undefined) {
                                let data11 = data.maxInitialRequests;
                                const _errs42 = errors;
                                if (errors === _errs42) {
                                    if (typeof data11 == "number") {
                                        if (data11 < 1 || isNaN(data11)) {
                                            validate70.errors = [{ instancePath: instancePath + "/maxInitialRequests", schemaPath: "#/properties/maxInitialRequests/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" }];
                                            return false;
                                        }
                                    }
                                    else {
                                        validate70.errors = [{ instancePath: instancePath + "/maxInitialRequests", schemaPath: "#/properties/maxInitialRequests/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                        return false;
                                    }
                                }
                                var valid0 = _errs42 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.minChunks !== undefined) {
                                    let data12 = data.minChunks;
                                    const _errs44 = errors;
                                    if (errors === _errs44) {
                                        if (typeof data12 == "number") {
                                            if (data12 < 1 || isNaN(data12)) {
                                                validate70.errors = [{ instancePath: instancePath + "/minChunks", schemaPath: "#/properties/minChunks/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" }];
                                                return false;
                                            }
                                        }
                                        else {
                                            validate70.errors = [{ instancePath: instancePath + "/minChunks", schemaPath: "#/properties/minChunks/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                            return false;
                                        }
                                    }
                                    var valid0 = _errs44 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.minRemainingSize !== undefined) {
                                        let data13 = data.minRemainingSize;
                                        const _errs46 = errors;
                                        const _errs47 = errors;
                                        let valid12 = false;
                                        let passing1 = null;
                                        const _errs48 = errors;
                                        const _errs50 = errors;
                                        let valid14 = false;
                                        const _errs51 = errors;
                                        if (errors === _errs51) {
                                            if (typeof data13 == "number") {
                                                if (data13 < 0 || isNaN(data13)) {
                                                    const err22 = { instancePath: instancePath + "/minRemainingSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
                                                    if (vErrors === null) {
                                                        vErrors = [err22];
                                                    }
                                                    else {
                                                        vErrors.push(err22);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            else {
                                                const err23 = { instancePath: instancePath + "/minRemainingSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                if (vErrors === null) {
                                                    vErrors = [err23];
                                                }
                                                else {
                                                    vErrors.push(err23);
                                                }
                                                errors++;
                                            }
                                        }
                                        var _valid8 = _errs51 === errors;
                                        valid14 = valid14 || _valid8;
                                        if (!valid14) {
                                            const err24 = { instancePath: instancePath + "/minRemainingSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                            if (vErrors === null) {
                                                vErrors = [err24];
                                            }
                                            else {
                                                vErrors.push(err24);
                                            }
                                            errors++;
                                        }
                                        else {
                                            errors = _errs50;
                                            if (vErrors !== null) {
                                                if (_errs50) {
                                                    vErrors.length = _errs50;
                                                }
                                                else {
                                                    vErrors = null;
                                                }
                                            }
                                        }
                                        var _valid7 = _errs48 === errors;
                                        if (_valid7) {
                                            valid12 = true;
                                            passing1 = 0;
                                        }
                                        if (!valid12) {
                                            const err25 = { instancePath: instancePath + "/minRemainingSize", schemaPath: "#/properties/minRemainingSize/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                                            if (vErrors === null) {
                                                vErrors = [err25];
                                            }
                                            else {
                                                vErrors.push(err25);
                                            }
                                            errors++;
                                            validate70.errors = vErrors;
                                            return false;
                                        }
                                        else {
                                            errors = _errs47;
                                            if (vErrors !== null) {
                                                if (_errs47) {
                                                    vErrors.length = _errs47;
                                                }
                                                else {
                                                    vErrors = null;
                                                }
                                            }
                                        }
                                        var valid0 = _errs46 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.minSize !== undefined) {
                                            let data14 = data.minSize;
                                            const _errs53 = errors;
                                            const _errs54 = errors;
                                            let valid15 = false;
                                            let passing2 = null;
                                            const _errs55 = errors;
                                            const _errs57 = errors;
                                            let valid17 = false;
                                            const _errs58 = errors;
                                            if (errors === _errs58) {
                                                if (typeof data14 == "number") {
                                                    if (data14 < 0 || isNaN(data14)) {
                                                        const err26 = { instancePath: instancePath + "/minSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" };
                                                        if (vErrors === null) {
                                                            vErrors = [err26];
                                                        }
                                                        else {
                                                            vErrors.push(err26);
                                                        }
                                                        errors++;
                                                    }
                                                }
                                                else {
                                                    const err27 = { instancePath: instancePath + "/minSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf/0/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                    if (vErrors === null) {
                                                        vErrors = [err27];
                                                    }
                                                    else {
                                                        vErrors.push(err27);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            var _valid10 = _errs58 === errors;
                                            valid17 = valid17 || _valid10;
                                            if (!valid17) {
                                                const err28 = { instancePath: instancePath + "/minSize", schemaPath: "#/definitions/OptimizationSplitChunksSizes/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err28];
                                                }
                                                else {
                                                    vErrors.push(err28);
                                                }
                                                errors++;
                                            }
                                            else {
                                                errors = _errs57;
                                                if (vErrors !== null) {
                                                    if (_errs57) {
                                                        vErrors.length = _errs57;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var _valid9 = _errs55 === errors;
                                            if (_valid9) {
                                                valid15 = true;
                                                passing2 = 0;
                                            }
                                            if (!valid15) {
                                                const err29 = { instancePath: instancePath + "/minSize", schemaPath: "#/properties/minSize/oneOf", keyword: "oneOf", params: { passingSchemas: passing2 }, message: "must match exactly one schema in oneOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err29];
                                                }
                                                else {
                                                    vErrors.push(err29);
                                                }
                                                errors++;
                                                validate70.errors = vErrors;
                                                return false;
                                            }
                                            else {
                                                errors = _errs54;
                                                if (vErrors !== null) {
                                                    if (_errs54) {
                                                        vErrors.length = _errs54;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid0 = _errs53 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate70.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate70.errors = vErrors; return errors === 0; }
function validate69(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!((((((((key0 === "chunkIds") || (key0 === "minimize")) || (key0 === "minimizer")) || (key0 === "moduleIds")) || (key0 === "removeAvailableModules")) || (key0 === "runtimeChunk")) || (key0 === "sideEffects")) || (key0 === "splitChunks"))) {
                validate69.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.chunkIds !== undefined) {
                let data0 = data.chunkIds;
                const _errs2 = errors;
                if (data0 !== "named" && data0 !== "deterministic") {
                    validate69.errors = [{ instancePath: instancePath + "/chunkIds", schemaPath: "#/properties/chunkIds/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" }];
                    return false;
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.minimize !== undefined) {
                    const _errs3 = errors;
                    if (typeof data.minimize !== "boolean") {
                        validate69.errors = [{ instancePath: instancePath + "/minimize", schemaPath: "#/properties/minimize/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                        return false;
                    }
                    var valid0 = _errs3 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.minimizer !== undefined) {
                        let data2 = data.minimizer;
                        const _errs5 = errors;
                        if (errors === _errs5) {
                            if (Array.isArray(data2)) {
                                var valid1 = true;
                                const len0 = data2.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    let data3 = data2[i0];
                                    const _errs7 = errors;
                                    const _errs8 = errors;
                                    let valid2 = false;
                                    const _errs9 = errors;
                                    if (data3 !== "...") {
                                        const err0 = { instancePath: instancePath + "/minimizer/" + i0, schemaPath: "#/properties/minimizer/items/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err0];
                                        }
                                        else {
                                            vErrors.push(err0);
                                        }
                                        errors++;
                                    }
                                    var _valid0 = _errs9 === errors;
                                    valid2 = valid2 || _valid0;
                                    if (!valid2) {
                                        const _errs10 = errors;
                                        const _errs11 = errors;
                                        if (errors === _errs11) {
                                            if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                                                let missing0;
                                                if ((data3.apply === undefined) && (missing0 = "apply")) {
                                                    const err1 = { instancePath: instancePath + "/minimizer/" + i0, schemaPath: "#/definitions/RspackPluginInstance/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
                                                    if (vErrors === null) {
                                                        vErrors = [err1];
                                                    }
                                                    else {
                                                        vErrors.push(err1);
                                                    }
                                                    errors++;
                                                }
                                                else {
                                                    if (data3.apply !== undefined) {
                                                        if (!(data3.apply instanceof Function)) {
                                                            const err2 = { instancePath: instancePath + "/minimizer/" + i0 + "/apply", schemaPath: "#/definitions/RspackPluginInstance/properties/apply/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                            if (vErrors === null) {
                                                                vErrors = [err2];
                                                            }
                                                            else {
                                                                vErrors.push(err2);
                                                            }
                                                            errors++;
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                const err3 = { instancePath: instancePath + "/minimizer/" + i0, schemaPath: "#/definitions/RspackPluginInstance/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                if (vErrors === null) {
                                                    vErrors = [err3];
                                                }
                                                else {
                                                    vErrors.push(err3);
                                                }
                                                errors++;
                                            }
                                        }
                                        var _valid0 = _errs10 === errors;
                                        valid2 = valid2 || _valid0;
                                        if (!valid2) {
                                            const _errs15 = errors;
                                            if (!(data3 instanceof Function)) {
                                                const err4 = { instancePath: instancePath + "/minimizer/" + i0, schemaPath: "#/definitions/RspackPluginFunction/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err4];
                                                }
                                                else {
                                                    vErrors.push(err4);
                                                }
                                                errors++;
                                            }
                                            var _valid0 = _errs15 === errors;
                                            valid2 = valid2 || _valid0;
                                        }
                                    }
                                    if (!valid2) {
                                        const err5 = { instancePath: instancePath + "/minimizer/" + i0, schemaPath: "#/properties/minimizer/items/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                        if (vErrors === null) {
                                            vErrors = [err5];
                                        }
                                        else {
                                            vErrors.push(err5);
                                        }
                                        errors++;
                                        validate69.errors = vErrors;
                                        return false;
                                    }
                                    else {
                                        errors = _errs8;
                                        if (vErrors !== null) {
                                            if (_errs8) {
                                                vErrors.length = _errs8;
                                            }
                                            else {
                                                vErrors = null;
                                            }
                                        }
                                    }
                                    var valid1 = _errs7 === errors;
                                    if (!valid1) {
                                        break;
                                    }
                                }
                            }
                            else {
                                validate69.errors = [{ instancePath: instancePath + "/minimizer", schemaPath: "#/properties/minimizer/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                return false;
                            }
                        }
                        var valid0 = _errs5 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.moduleIds !== undefined) {
                            let data5 = data.moduleIds;
                            const _errs17 = errors;
                            if (data5 !== "named" && data5 !== "deterministic") {
                                validate69.errors = [{ instancePath: instancePath + "/moduleIds", schemaPath: "#/properties/moduleIds/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" }];
                                return false;
                            }
                            var valid0 = _errs17 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.removeAvailableModules !== undefined) {
                                const _errs18 = errors;
                                if (typeof data.removeAvailableModules !== "boolean") {
                                    validate69.errors = [{ instancePath: instancePath + "/removeAvailableModules", schemaPath: "#/properties/removeAvailableModules/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                    return false;
                                }
                                var valid0 = _errs18 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.runtimeChunk !== undefined) {
                                    let data7 = data.runtimeChunk;
                                    const _errs20 = errors;
                                    const _errs22 = errors;
                                    let valid7 = false;
                                    const _errs23 = errors;
                                    if (data7 !== "single" && data7 !== "multiple") {
                                        const err6 = { instancePath: instancePath + "/runtimeChunk", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err6];
                                        }
                                        else {
                                            vErrors.push(err6);
                                        }
                                        errors++;
                                    }
                                    var _valid1 = _errs23 === errors;
                                    valid7 = valid7 || _valid1;
                                    if (!valid7) {
                                        const _errs24 = errors;
                                        if (typeof data7 !== "boolean") {
                                            const err7 = { instancePath: instancePath + "/runtimeChunk", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                            if (vErrors === null) {
                                                vErrors = [err7];
                                            }
                                            else {
                                                vErrors.push(err7);
                                            }
                                            errors++;
                                        }
                                        var _valid1 = _errs24 === errors;
                                        valid7 = valid7 || _valid1;
                                        if (!valid7) {
                                            const _errs26 = errors;
                                            if (errors === _errs26) {
                                                if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
                                                    const _errs28 = errors;
                                                    for (const key1 in data7) {
                                                        if (!(key1 === "name")) {
                                                            const err8 = { instancePath: instancePath + "/runtimeChunk", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/2/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                                                            if (vErrors === null) {
                                                                vErrors = [err8];
                                                            }
                                                            else {
                                                                vErrors.push(err8);
                                                            }
                                                            errors++;
                                                            break;
                                                        }
                                                    }
                                                    if (_errs28 === errors) {
                                                        if (data7.name !== undefined) {
                                                            let data8 = data7.name;
                                                            const _errs30 = errors;
                                                            let valid9 = false;
                                                            const _errs31 = errors;
                                                            if (typeof data8 !== "string") {
                                                                const err9 = { instancePath: instancePath + "/runtimeChunk/name", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/2/properties/name/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err9];
                                                                }
                                                                else {
                                                                    vErrors.push(err9);
                                                                }
                                                                errors++;
                                                            }
                                                            var _valid2 = _errs31 === errors;
                                                            valid9 = valid9 || _valid2;
                                                            if (!valid9) {
                                                                const _errs33 = errors;
                                                                if (!(data8 instanceof Function)) {
                                                                    const err10 = { instancePath: instancePath + "/runtimeChunk/name", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/2/properties/name/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err10];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err10);
                                                                    }
                                                                    errors++;
                                                                }
                                                                var _valid2 = _errs33 === errors;
                                                                valid9 = valid9 || _valid2;
                                                            }
                                                            if (!valid9) {
                                                                const err11 = { instancePath: instancePath + "/runtimeChunk/name", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/2/properties/name/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err11];
                                                                }
                                                                else {
                                                                    vErrors.push(err11);
                                                                }
                                                                errors++;
                                                            }
                                                            else {
                                                                errors = _errs30;
                                                                if (vErrors !== null) {
                                                                    if (_errs30) {
                                                                        vErrors.length = _errs30;
                                                                    }
                                                                    else {
                                                                        vErrors = null;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    const err12 = { instancePath: instancePath + "/runtimeChunk", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf/2/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                    if (vErrors === null) {
                                                        vErrors = [err12];
                                                    }
                                                    else {
                                                        vErrors.push(err12);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            var _valid1 = _errs26 === errors;
                                            valid7 = valid7 || _valid1;
                                        }
                                    }
                                    if (!valid7) {
                                        const err13 = { instancePath: instancePath + "/runtimeChunk", schemaPath: "#/definitions/OptimizationRuntimeChunk/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                        if (vErrors === null) {
                                            vErrors = [err13];
                                        }
                                        else {
                                            vErrors.push(err13);
                                        }
                                        errors++;
                                        validate69.errors = vErrors;
                                        return false;
                                    }
                                    else {
                                        errors = _errs22;
                                        if (vErrors !== null) {
                                            if (_errs22) {
                                                vErrors.length = _errs22;
                                            }
                                            else {
                                                vErrors = null;
                                            }
                                        }
                                    }
                                    var valid0 = _errs20 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.sideEffects !== undefined) {
                                        let data9 = data.sideEffects;
                                        const _errs34 = errors;
                                        const _errs35 = errors;
                                        let valid10 = false;
                                        const _errs36 = errors;
                                        if (data9 !== "flag") {
                                            const err14 = { instancePath: instancePath + "/sideEffects", schemaPath: "#/properties/sideEffects/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                            if (vErrors === null) {
                                                vErrors = [err14];
                                            }
                                            else {
                                                vErrors.push(err14);
                                            }
                                            errors++;
                                        }
                                        var _valid3 = _errs36 === errors;
                                        valid10 = valid10 || _valid3;
                                        if (!valid10) {
                                            const _errs37 = errors;
                                            if (typeof data9 !== "boolean") {
                                                const err15 = { instancePath: instancePath + "/sideEffects", schemaPath: "#/properties/sideEffects/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                if (vErrors === null) {
                                                    vErrors = [err15];
                                                }
                                                else {
                                                    vErrors.push(err15);
                                                }
                                                errors++;
                                            }
                                            var _valid3 = _errs37 === errors;
                                            valid10 = valid10 || _valid3;
                                        }
                                        if (!valid10) {
                                            const err16 = { instancePath: instancePath + "/sideEffects", schemaPath: "#/properties/sideEffects/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                            if (vErrors === null) {
                                                vErrors = [err16];
                                            }
                                            else {
                                                vErrors.push(err16);
                                            }
                                            errors++;
                                            validate69.errors = vErrors;
                                            return false;
                                        }
                                        else {
                                            errors = _errs35;
                                            if (vErrors !== null) {
                                                if (_errs35) {
                                                    vErrors.length = _errs35;
                                                }
                                                else {
                                                    vErrors = null;
                                                }
                                            }
                                        }
                                        var valid0 = _errs34 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.splitChunks !== undefined) {
                                            let data10 = data.splitChunks;
                                            const _errs39 = errors;
                                            const _errs40 = errors;
                                            let valid11 = false;
                                            const _errs41 = errors;
                                            if (data10 !== false) {
                                                const err17 = { instancePath: instancePath + "/splitChunks", schemaPath: "#/properties/splitChunks/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err17];
                                                }
                                                else {
                                                    vErrors.push(err17);
                                                }
                                                errors++;
                                            }
                                            var _valid4 = _errs41 === errors;
                                            valid11 = valid11 || _valid4;
                                            if (!valid11) {
                                                const _errs42 = errors;
                                                if (!(validate70(data10, { instancePath: instancePath + "/splitChunks", parentData: data, parentDataProperty: "splitChunks", rootData }))) {
                                                    vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
                                                    errors = vErrors.length;
                                                }
                                                var _valid4 = _errs42 === errors;
                                                valid11 = valid11 || _valid4;
                                            }
                                            if (!valid11) {
                                                const err18 = { instancePath: instancePath + "/splitChunks", schemaPath: "#/properties/splitChunks/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                if (vErrors === null) {
                                                    vErrors = [err18];
                                                }
                                                else {
                                                    vErrors.push(err18);
                                                }
                                                errors++;
                                                validate69.errors = vErrors;
                                                return false;
                                            }
                                            else {
                                                errors = _errs40;
                                                if (vErrors !== null) {
                                                    if (_errs40) {
                                                        vErrors.length = _errs40;
                                                    }
                                                    else {
                                                        vErrors = null;
                                                    }
                                                }
                                            }
                                            var valid0 = _errs39 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate69.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate69.errors = vErrors; return errors === 0; }
const schema69 = { "description": "Options affecting the output of the compilation. `output` options tell rspack how to write the compiled files to disk.", "type": "object", "additionalProperties": false, "properties": { "iife": { "$ref": "#/definitions/Iife" }, "assetModuleFilename": { "$ref": "#/definitions/AssetModuleFilename" }, "auxiliaryComment": { "oneOf": [{ "$ref": "#/definitions/AuxiliaryComment" }] }, "chunkFilename": { "$ref": "#/definitions/ChunkFilename" }, "cssChunkFilename": { "$ref": "#/definitions/CssChunkFilename" }, "cssFilename": { "$ref": "#/definitions/CssFilename" }, "enabledWasmLoadingTypes": { "$ref": "#/definitions/EnabledWasmLoadingTypes" }, "wasmLoading": { "$ref": "#/definitions/WasmLoading" }, "webassemblyModuleFilename": { "$ref": "#/definitions/WebassemblyModuleFilename" }, "enabledLibraryTypes": { "$ref": "#/definitions/EnabledLibraryTypes" }, "filename": { "$ref": "#/definitions/Filename" }, "globalObject": { "$ref": "#/definitions/GlobalObject" }, "importFunctionName": { "$ref": "#/definitions/ImportFunctionName" }, "library": { "$ref": "#/definitions/Library" }, "libraryExport": { "oneOf": [{ "$ref": "#/definitions/LibraryExport" }] }, "libraryTarget": { "oneOf": [{ "$ref": "#/definitions/LibraryType" }] }, "module": { "$ref": "#/definitions/OutputModule" }, "path": { "$ref": "#/definitions/Path" }, "publicPath": { "$ref": "#/definitions/PublicPath" }, "strictModuleErrorHandling": { "$ref": "#/definitions/StrictModuleErrorHandling" }, "umdNamedDefine": { "oneOf": [{ "$ref": "#/definitions/UmdNamedDefine" }] }, "uniqueName": { "$ref": "#/definitions/UniqueName" } } };
const schema70 = { "description": "Wrap javascript code into IIFE's to avoid leaking into global scope.", "type": "boolean" };
const schema71 = { "description": "The filename of asset modules as relative path inside the 'output.path' directory.", "anyOf": [{ "type": "string" }] };
const schema82 = { "description": "The filename of WebAssembly modules as relative path inside the 'output.path' directory.", "type": "string" };
const schema87 = { "description": "An expression which is used to address the global object/scope in runtime code.", "type": "string", "minLength": 1 };
const schema88 = { "description": "The name of the native import() function (can be exchanged for a polyfill).", "type": "string" };
const schema93 = { "description": "Specify which export should be exposed as library.", "anyOf": [{ "type": "array", "items": { "description": "Part of the export that should be exposed as library.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] };
const schema84 = { "description": "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).", "anyOf": [{ "enum": ["var", "module", "assign", "assign-properties", "this", "window", "self", "global", "commonjs", "commonjs2", "commonjs-module", "commonjs-static", "amd", "amd-require", "umd", "umd2", "jsonp", "system"] }, { "type": "string" }] };
const schema98 = { "description": "Output javascript files as module source type.", "type": "boolean" };
const schema99 = { "description": "The output directory as **absolute path** (required).", "type": "string" };
const schema102 = { "description": "Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec.", "type": "boolean" };
const schema95 = { "description": "If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.", "type": "boolean" };
const schema104 = { "description": "A unique name of the rspack build to avoid multiple rspack runtimes to conflict when using globals.", "type": "string", "minLength": 1 };
const schema72 = { "description": "Add a comment in the UMD wrapper.", "anyOf": [{ "description": "Append the same comment above each import style.", "type": "string" }, { "$ref": "#/definitions/LibraryCustomUmdCommentObject" }] };
const schema73 = { "description": "Set explicit comments for `commonjs`, `commonjs2`, `amd`, and `root`.", "type": "object", "additionalProperties": false, "properties": { "amd": { "description": "Set comment for `amd` section in UMD.", "type": "string" }, "commonjs": { "description": "Set comment for `commonjs` (exports) section in UMD.", "type": "string" }, "commonjs2": { "description": "Set comment for `commonjs2` (module.exports) section in UMD.", "type": "string" }, "root": { "description": "Set comment for `root` (global variable) section in UMD.", "type": "string" } } };
function validate74(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (typeof data !== "string") {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs3 = errors;
    const _errs4 = errors;
    if (errors === _errs4) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
            const _errs6 = errors;
            for (const key0 in data) {
                if (!((((key0 === "amd") || (key0 === "commonjs")) || (key0 === "commonjs2")) || (key0 === "root"))) {
                    const err1 = { instancePath, schemaPath: "#/definitions/LibraryCustomUmdCommentObject/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                    break;
                }
            }
            if (_errs6 === errors) {
                if (data.amd !== undefined) {
                    const _errs7 = errors;
                    if (typeof data.amd !== "string") {
                        const err2 = { instancePath: instancePath + "/amd", schemaPath: "#/definitions/LibraryCustomUmdCommentObject/properties/amd/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                    var valid2 = _errs7 === errors;
                }
                else {
                    var valid2 = true;
                }
                if (valid2) {
                    if (data.commonjs !== undefined) {
                        const _errs9 = errors;
                        if (typeof data.commonjs !== "string") {
                            const err3 = { instancePath: instancePath + "/commonjs", schemaPath: "#/definitions/LibraryCustomUmdCommentObject/properties/commonjs/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                            if (vErrors === null) {
                                vErrors = [err3];
                            }
                            else {
                                vErrors.push(err3);
                            }
                            errors++;
                        }
                        var valid2 = _errs9 === errors;
                    }
                    else {
                        var valid2 = true;
                    }
                    if (valid2) {
                        if (data.commonjs2 !== undefined) {
                            const _errs11 = errors;
                            if (typeof data.commonjs2 !== "string") {
                                const err4 = { instancePath: instancePath + "/commonjs2", schemaPath: "#/definitions/LibraryCustomUmdCommentObject/properties/commonjs2/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                if (vErrors === null) {
                                    vErrors = [err4];
                                }
                                else {
                                    vErrors.push(err4);
                                }
                                errors++;
                            }
                            var valid2 = _errs11 === errors;
                        }
                        else {
                            var valid2 = true;
                        }
                        if (valid2) {
                            if (data.root !== undefined) {
                                const _errs13 = errors;
                                if (typeof data.root !== "string") {
                                    const err5 = { instancePath: instancePath + "/root", schemaPath: "#/definitions/LibraryCustomUmdCommentObject/properties/root/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                    if (vErrors === null) {
                                        vErrors = [err5];
                                    }
                                    else {
                                        vErrors.push(err5);
                                    }
                                    errors++;
                                }
                                var valid2 = _errs13 === errors;
                            }
                            else {
                                var valid2 = true;
                            }
                        }
                    }
                }
            }
        }
        else {
            const err6 = { instancePath, schemaPath: "#/definitions/LibraryCustomUmdCommentObject/type", keyword: "type", params: { type: "object" }, message: "must be object" };
            if (vErrors === null) {
                vErrors = [err6];
            }
            else {
                vErrors.push(err6);
            }
            errors++;
        }
    }
    var _valid0 = _errs3 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err7 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err7];
    }
    else {
        vErrors.push(err7);
    }
    errors++;
    validate74.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate74.errors = vErrors; return errors === 0; }
const schema74 = { "description": "Specifies the filename template of output files of non-initial chunks on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] };
const schema75 = { "description": "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "anyOf": [{ "type": "string", "minLength": 1 }, { "instanceof": "Function" }] };
function validate76(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; const _errs3 = errors; let valid2 = false; const _errs4 = errors; if (errors === _errs4) {
    if (typeof data === "string") {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
    }
    else {
        const err1 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
} var _valid1 = _errs4 === errors; valid2 = valid2 || _valid1; if (!valid2) {
    const _errs6 = errors;
    if (!(data instanceof Function)) {
        const err2 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
} if (!valid2) {
    const err3 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
}
else {
    errors = _errs3;
    if (vErrors !== null) {
        if (_errs3) {
            vErrors.length = _errs3;
        }
        else {
            vErrors = null;
        }
    }
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err4 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err4];
    }
    else {
        vErrors.push(err4);
    }
    errors++;
    validate76.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate76.errors = vErrors; return errors === 0; }
const schema76 = { "description": "Specifies the filename template of non-initial output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] };
function validate78(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; const _errs3 = errors; let valid2 = false; const _errs4 = errors; if (errors === _errs4) {
    if (typeof data === "string") {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
    }
    else {
        const err1 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
} var _valid1 = _errs4 === errors; valid2 = valid2 || _valid1; if (!valid2) {
    const _errs6 = errors;
    if (!(data instanceof Function)) {
        const err2 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
} if (!valid2) {
    const err3 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
}
else {
    errors = _errs3;
    if (vErrors !== null) {
        if (_errs3) {
            vErrors.length = _errs3;
        }
        else {
            vErrors = null;
        }
    }
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err4 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err4];
    }
    else {
        vErrors.push(err4);
    }
    errors++;
    validate78.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate78.errors = vErrors; return errors === 0; }
const schema78 = { "description": "Specifies the filename template of output css files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] };
function validate80(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; const _errs3 = errors; let valid2 = false; const _errs4 = errors; if (errors === _errs4) {
    if (typeof data === "string") {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
    }
    else {
        const err1 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
} var _valid1 = _errs4 === errors; valid2 = valid2 || _valid1; if (!valid2) {
    const _errs6 = errors;
    if (!(data instanceof Function)) {
        const err2 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
} if (!valid2) {
    const err3 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
}
else {
    errors = _errs3;
    if (vErrors !== null) {
        if (_errs3) {
            vErrors.length = _errs3;
        }
        else {
            vErrors = null;
        }
    }
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err4 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err4];
    }
    else {
        vErrors.push(err4);
    }
    errors++;
    validate80.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate80.errors = vErrors; return errors === 0; }
const schema80 = { "description": "List of wasm loading types enabled for use by entry points.", "type": "array", "items": { "$ref": "#/definitions/WasmLoadingType" } };
function validate82(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (Array.isArray(data)) {
        var valid0 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            let data0 = data[i0];
            const _errs1 = errors;
            const _errs3 = errors;
            let valid2 = false;
            const _errs4 = errors;
            if (data0 !== "fetch-streaming" && data0 !== "fetch" && data0 !== "async-node") {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/WasmLoadingType/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            var _valid0 = _errs4 === errors;
            valid2 = valid2 || _valid0;
            if (!valid2) {
                const _errs5 = errors;
                if (typeof data0 !== "string") {
                    const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/WasmLoadingType/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                var _valid0 = _errs5 === errors;
                valid2 = valid2 || _valid0;
            }
            if (!valid2) {
                const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/WasmLoadingType/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
                validate82.errors = vErrors;
                return false;
            }
            else {
                errors = _errs3;
                if (vErrors !== null) {
                    if (_errs3) {
                        vErrors.length = _errs3;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs1 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate82.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
        return false;
    }
} validate82.errors = vErrors; return errors === 0; }
const schema83 = { "description": "List of library types enabled for use by entry points.", "type": "array", "items": { "$ref": "#/definitions/LibraryType" } };
function validate85(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (Array.isArray(data)) {
        var valid0 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            let data0 = data[i0];
            const _errs1 = errors;
            const _errs3 = errors;
            let valid2 = false;
            const _errs4 = errors;
            if (data0 !== "var" && data0 !== "module" && data0 !== "assign" && data0 !== "assign-properties" && data0 !== "this" && data0 !== "window" && data0 !== "self" && data0 !== "global" && data0 !== "commonjs" && data0 !== "commonjs2" && data0 !== "commonjs-module" && data0 !== "commonjs-static" && data0 !== "amd" && data0 !== "amd-require" && data0 !== "umd" && data0 !== "umd2" && data0 !== "jsonp" && data0 !== "system") {
                const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/LibraryType/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
            var _valid0 = _errs4 === errors;
            valid2 = valid2 || _valid0;
            if (!valid2) {
                const _errs5 = errors;
                if (typeof data0 !== "string") {
                    const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/LibraryType/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                var _valid0 = _errs5 === errors;
                valid2 = valid2 || _valid0;
            }
            if (!valid2) {
                const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/LibraryType/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
                validate85.errors = vErrors;
                return false;
            }
            else {
                errors = _errs3;
                if (vErrors !== null) {
                    if (_errs3) {
                        vErrors.length = _errs3;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs1 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate85.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
        return false;
    }
} validate85.errors = vErrors; return errors === 0; }
const schema85 = { "description": "Specifies the filename of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk.", "oneOf": [{ "$ref": "#/definitions/FilenameTemplate" }] };
function validate87(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; const _errs3 = errors; let valid2 = false; const _errs4 = errors; if (errors === _errs4) {
    if (typeof data === "string") {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
    }
    else {
        const err1 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
} var _valid1 = _errs4 === errors; valid2 = valid2 || _valid1; if (!valid2) {
    const _errs6 = errors;
    if (!(data instanceof Function)) {
        const err2 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
} if (!valid2) {
    const err3 = { instancePath, schemaPath: "#/definitions/FilenameTemplate/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
}
else {
    errors = _errs3;
    if (vErrors !== null) {
        if (_errs3) {
            vErrors.length = _errs3;
        }
        else {
            vErrors = null;
        }
    }
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err4 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err4];
    }
    else {
        vErrors.push(err4);
    }
    errors++;
    validate87.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate87.errors = vErrors; return errors === 0; }
const schema89 = { "description": "Make the output files a library, exporting the exports of the entry point.", "anyOf": [{ "$ref": "#/definitions/LibraryName" }, { "$ref": "#/definitions/LibraryOptions" }] };
const schema90 = { "description": "The name of the library (some types allow unnamed libraries too).", "anyOf": [{ "type": "array", "items": { "description": "A part of the library name.", "type": "string", "minLength": 1 }, "minItems": 1 }, { "type": "string", "minLength": 1 }, { "$ref": "#/definitions/LibraryCustomUmdObject" }] };
const schema91 = { "description": "Description object for all UMD variants of the library name.", "type": "object", "additionalProperties": false, "properties": { "amd": { "description": "Name of the exposed AMD library in the UMD.", "type": "string", "minLength": 1 }, "commonjs": { "description": "Name of the exposed commonjs export in the UMD.", "type": "string", "minLength": 1 }, "root": { "description": "Name of the property exposed globally by a UMD library.", "anyOf": [{ "type": "array", "items": { "description": "Part of the name of the property exposed globally by a UMD library.", "type": "string", "minLength": 1 } }, { "type": "string", "minLength": 1 }] } } };
function validate90(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (errors === _errs1) {
    if (Array.isArray(data)) {
        if (data.length < 1) {
            const err0 = { instancePath, schemaPath: "#/anyOf/0/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        else {
            var valid1 = true;
            const len0 = data.length;
            for (let i0 = 0; i0 < len0; i0++) {
                let data0 = data[i0];
                const _errs3 = errors;
                if (errors === _errs3) {
                    if (typeof data0 === "string") {
                        if (data0.length < 1) {
                            const err1 = { instancePath: instancePath + "/" + i0, schemaPath: "#/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                            if (vErrors === null) {
                                vErrors = [err1];
                            }
                            else {
                                vErrors.push(err1);
                            }
                            errors++;
                        }
                    }
                    else {
                        const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                }
                var valid1 = _errs3 === errors;
                if (!valid1) {
                    break;
                }
            }
        }
    }
    else {
        const err3 = { instancePath, schemaPath: "#/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
        if (vErrors === null) {
            vErrors = [err3];
        }
        else {
            vErrors.push(err3);
        }
        errors++;
    }
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs5 = errors;
    if (errors === _errs5) {
        if (typeof data === "string") {
            if (data.length < 1) {
                const err4 = { instancePath, schemaPath: "#/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        else {
            const err5 = { instancePath, schemaPath: "#/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
            if (vErrors === null) {
                vErrors = [err5];
            }
            else {
                vErrors.push(err5);
            }
            errors++;
        }
    }
    var _valid0 = _errs5 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
        const _errs7 = errors;
        const _errs8 = errors;
        if (errors === _errs8) {
            if (data && typeof data == "object" && !Array.isArray(data)) {
                const _errs10 = errors;
                for (const key0 in data) {
                    if (!(((key0 === "amd") || (key0 === "commonjs")) || (key0 === "root"))) {
                        const err6 = { instancePath, schemaPath: "#/definitions/LibraryCustomUmdObject/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                            vErrors = [err6];
                        }
                        else {
                            vErrors.push(err6);
                        }
                        errors++;
                        break;
                    }
                }
                if (_errs10 === errors) {
                    if (data.amd !== undefined) {
                        let data1 = data.amd;
                        const _errs11 = errors;
                        if (errors === _errs11) {
                            if (typeof data1 === "string") {
                                if (data1.length < 1) {
                                    const err7 = { instancePath: instancePath + "/amd", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/amd/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                    if (vErrors === null) {
                                        vErrors = [err7];
                                    }
                                    else {
                                        vErrors.push(err7);
                                    }
                                    errors++;
                                }
                            }
                            else {
                                const err8 = { instancePath: instancePath + "/amd", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/amd/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                if (vErrors === null) {
                                    vErrors = [err8];
                                }
                                else {
                                    vErrors.push(err8);
                                }
                                errors++;
                            }
                        }
                        var valid3 = _errs11 === errors;
                    }
                    else {
                        var valid3 = true;
                    }
                    if (valid3) {
                        if (data.commonjs !== undefined) {
                            let data2 = data.commonjs;
                            const _errs13 = errors;
                            if (errors === _errs13) {
                                if (typeof data2 === "string") {
                                    if (data2.length < 1) {
                                        const err9 = { instancePath: instancePath + "/commonjs", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/commonjs/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err9];
                                        }
                                        else {
                                            vErrors.push(err9);
                                        }
                                        errors++;
                                    }
                                }
                                else {
                                    const err10 = { instancePath: instancePath + "/commonjs", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/commonjs/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                    if (vErrors === null) {
                                        vErrors = [err10];
                                    }
                                    else {
                                        vErrors.push(err10);
                                    }
                                    errors++;
                                }
                            }
                            var valid3 = _errs13 === errors;
                        }
                        else {
                            var valid3 = true;
                        }
                        if (valid3) {
                            if (data.root !== undefined) {
                                let data3 = data.root;
                                const _errs15 = errors;
                                const _errs16 = errors;
                                let valid4 = false;
                                const _errs17 = errors;
                                if (errors === _errs17) {
                                    if (Array.isArray(data3)) {
                                        var valid5 = true;
                                        const len1 = data3.length;
                                        for (let i1 = 0; i1 < len1; i1++) {
                                            let data4 = data3[i1];
                                            const _errs19 = errors;
                                            if (errors === _errs19) {
                                                if (typeof data4 === "string") {
                                                    if (data4.length < 1) {
                                                        const err11 = { instancePath: instancePath + "/root/" + i1, schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                        if (vErrors === null) {
                                                            vErrors = [err11];
                                                        }
                                                        else {
                                                            vErrors.push(err11);
                                                        }
                                                        errors++;
                                                    }
                                                }
                                                else {
                                                    const err12 = { instancePath: instancePath + "/root/" + i1, schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                    if (vErrors === null) {
                                                        vErrors = [err12];
                                                    }
                                                    else {
                                                        vErrors.push(err12);
                                                    }
                                                    errors++;
                                                }
                                            }
                                            var valid5 = _errs19 === errors;
                                            if (!valid5) {
                                                break;
                                            }
                                        }
                                    }
                                    else {
                                        const err13 = { instancePath: instancePath + "/root", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                        if (vErrors === null) {
                                            vErrors = [err13];
                                        }
                                        else {
                                            vErrors.push(err13);
                                        }
                                        errors++;
                                    }
                                }
                                var _valid1 = _errs17 === errors;
                                valid4 = valid4 || _valid1;
                                if (!valid4) {
                                    const _errs21 = errors;
                                    if (errors === _errs21) {
                                        if (typeof data3 === "string") {
                                            if (data3.length < 1) {
                                                const err14 = { instancePath: instancePath + "/root", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err14];
                                                }
                                                else {
                                                    vErrors.push(err14);
                                                }
                                                errors++;
                                            }
                                        }
                                        else {
                                            const err15 = { instancePath: instancePath + "/root", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                                vErrors = [err15];
                                            }
                                            else {
                                                vErrors.push(err15);
                                            }
                                            errors++;
                                        }
                                    }
                                    var _valid1 = _errs21 === errors;
                                    valid4 = valid4 || _valid1;
                                }
                                if (!valid4) {
                                    const err16 = { instancePath: instancePath + "/root", schemaPath: "#/definitions/LibraryCustomUmdObject/properties/root/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                    if (vErrors === null) {
                                        vErrors = [err16];
                                    }
                                    else {
                                        vErrors.push(err16);
                                    }
                                    errors++;
                                }
                                else {
                                    errors = _errs16;
                                    if (vErrors !== null) {
                                        if (_errs16) {
                                            vErrors.length = _errs16;
                                        }
                                        else {
                                            vErrors = null;
                                        }
                                    }
                                }
                                var valid3 = _errs15 === errors;
                            }
                            else {
                                var valid3 = true;
                            }
                        }
                    }
                }
            }
            else {
                const err17 = { instancePath, schemaPath: "#/definitions/LibraryCustomUmdObject/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                if (vErrors === null) {
                    vErrors = [err17];
                }
                else {
                    vErrors.push(err17);
                }
                errors++;
            }
        }
        var _valid0 = _errs7 === errors;
        valid0 = valid0 || _valid0;
    }
} if (!valid0) {
    const err18 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err18];
    }
    else {
        vErrors.push(err18);
    }
    errors++;
    validate90.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate90.errors = vErrors; return errors === 0; }
const schema92 = { "description": "Options for library.", "type": "object", "additionalProperties": false, "properties": { "auxiliaryComment": { "$ref": "#/definitions/AuxiliaryComment" }, "export": { "$ref": "#/definitions/LibraryExport" }, "name": { "$ref": "#/definitions/LibraryName" }, "type": { "$ref": "#/definitions/LibraryType" }, "umdNamedDefine": { "$ref": "#/definitions/UmdNamedDefine" } }, "required": ["type"] };
function validate92(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing0;
        if ((data.type === undefined) && (missing0 = "type")) {
            validate92.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
            return false;
        }
        else {
            const _errs1 = errors;
            for (const key0 in data) {
                if (!(((((key0 === "auxiliaryComment") || (key0 === "export")) || (key0 === "name")) || (key0 === "type")) || (key0 === "umdNamedDefine"))) {
                    validate92.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                    return false;
                    break;
                }
            }
            if (_errs1 === errors) {
                if (data.auxiliaryComment !== undefined) {
                    const _errs2 = errors;
                    if (!(validate74(data.auxiliaryComment, { instancePath: instancePath + "/auxiliaryComment", parentData: data, parentDataProperty: "auxiliaryComment", rootData }))) {
                        vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
                        errors = vErrors.length;
                    }
                    var valid0 = _errs2 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.export !== undefined) {
                        let data1 = data.export;
                        const _errs3 = errors;
                        const _errs5 = errors;
                        let valid2 = false;
                        const _errs6 = errors;
                        if (errors === _errs6) {
                            if (Array.isArray(data1)) {
                                var valid3 = true;
                                const len0 = data1.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    let data2 = data1[i0];
                                    const _errs8 = errors;
                                    if (errors === _errs8) {
                                        if (typeof data2 === "string") {
                                            if (data2.length < 1) {
                                                const err0 = { instancePath: instancePath + "/export/" + i0, schemaPath: "#/definitions/LibraryExport/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                if (vErrors === null) {
                                                    vErrors = [err0];
                                                }
                                                else {
                                                    vErrors.push(err0);
                                                }
                                                errors++;
                                            }
                                        }
                                        else {
                                            const err1 = { instancePath: instancePath + "/export/" + i0, schemaPath: "#/definitions/LibraryExport/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                                vErrors = [err1];
                                            }
                                            else {
                                                vErrors.push(err1);
                                            }
                                            errors++;
                                        }
                                    }
                                    var valid3 = _errs8 === errors;
                                    if (!valid3) {
                                        break;
                                    }
                                }
                            }
                            else {
                                const err2 = { instancePath: instancePath + "/export", schemaPath: "#/definitions/LibraryExport/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                if (vErrors === null) {
                                    vErrors = [err2];
                                }
                                else {
                                    vErrors.push(err2);
                                }
                                errors++;
                            }
                        }
                        var _valid0 = _errs6 === errors;
                        valid2 = valid2 || _valid0;
                        if (!valid2) {
                            const _errs10 = errors;
                            if (errors === _errs10) {
                                if (typeof data1 === "string") {
                                    if (data1.length < 1) {
                                        const err3 = { instancePath: instancePath + "/export", schemaPath: "#/definitions/LibraryExport/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                        if (vErrors === null) {
                                            vErrors = [err3];
                                        }
                                        else {
                                            vErrors.push(err3);
                                        }
                                        errors++;
                                    }
                                }
                                else {
                                    const err4 = { instancePath: instancePath + "/export", schemaPath: "#/definitions/LibraryExport/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                    if (vErrors === null) {
                                        vErrors = [err4];
                                    }
                                    else {
                                        vErrors.push(err4);
                                    }
                                    errors++;
                                }
                            }
                            var _valid0 = _errs10 === errors;
                            valid2 = valid2 || _valid0;
                        }
                        if (!valid2) {
                            const err5 = { instancePath: instancePath + "/export", schemaPath: "#/definitions/LibraryExport/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                            if (vErrors === null) {
                                vErrors = [err5];
                            }
                            else {
                                vErrors.push(err5);
                            }
                            errors++;
                            validate92.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs5;
                            if (vErrors !== null) {
                                if (_errs5) {
                                    vErrors.length = _errs5;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs3 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.name !== undefined) {
                            const _errs12 = errors;
                            if (!(validate90(data.name, { instancePath: instancePath + "/name", parentData: data, parentDataProperty: "name", rootData }))) {
                                vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
                                errors = vErrors.length;
                            }
                            var valid0 = _errs12 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.type !== undefined) {
                                let data4 = data.type;
                                const _errs13 = errors;
                                const _errs15 = errors;
                                let valid5 = false;
                                const _errs16 = errors;
                                if (data4 !== "var" && data4 !== "module" && data4 !== "assign" && data4 !== "assign-properties" && data4 !== "this" && data4 !== "window" && data4 !== "self" && data4 !== "global" && data4 !== "commonjs" && data4 !== "commonjs2" && data4 !== "commonjs-module" && data4 !== "commonjs-static" && data4 !== "amd" && data4 !== "amd-require" && data4 !== "umd" && data4 !== "umd2" && data4 !== "jsonp" && data4 !== "system") {
                                    const err6 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/LibraryType/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                    if (vErrors === null) {
                                        vErrors = [err6];
                                    }
                                    else {
                                        vErrors.push(err6);
                                    }
                                    errors++;
                                }
                                var _valid1 = _errs16 === errors;
                                valid5 = valid5 || _valid1;
                                if (!valid5) {
                                    const _errs17 = errors;
                                    if (typeof data4 !== "string") {
                                        const err7 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/LibraryType/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                        if (vErrors === null) {
                                            vErrors = [err7];
                                        }
                                        else {
                                            vErrors.push(err7);
                                        }
                                        errors++;
                                    }
                                    var _valid1 = _errs17 === errors;
                                    valid5 = valid5 || _valid1;
                                }
                                if (!valid5) {
                                    const err8 = { instancePath: instancePath + "/type", schemaPath: "#/definitions/LibraryType/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                    if (vErrors === null) {
                                        vErrors = [err8];
                                    }
                                    else {
                                        vErrors.push(err8);
                                    }
                                    errors++;
                                    validate92.errors = vErrors;
                                    return false;
                                }
                                else {
                                    errors = _errs15;
                                    if (vErrors !== null) {
                                        if (_errs15) {
                                            vErrors.length = _errs15;
                                        }
                                        else {
                                            vErrors = null;
                                        }
                                    }
                                }
                                var valid0 = _errs13 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.umdNamedDefine !== undefined) {
                                    const _errs19 = errors;
                                    if (typeof data.umdNamedDefine !== "boolean") {
                                        validate92.errors = [{ instancePath: instancePath + "/umdNamedDefine", schemaPath: "#/definitions/UmdNamedDefine/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                        return false;
                                    }
                                    var valid0 = _errs19 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate92.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate92.errors = vErrors; return errors === 0; }
function validate89(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (!(validate90(data, { instancePath, parentData, parentDataProperty, rootData }))) {
    vErrors = vErrors === null ? validate90.errors : vErrors.concat(validate90.errors);
    errors = vErrors.length;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (!(validate92(data, { instancePath, parentData, parentDataProperty, rootData }))) {
        vErrors = vErrors === null ? validate92.errors : vErrors.concat(validate92.errors);
        errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
    validate89.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate89.errors = vErrors; return errors === 0; }
const schema100 = { "description": "The 'publicPath' specifies the public URL address of the output files when referenced in a browser.", "anyOf": [{ "enum": ["auto"] }, { "$ref": "#/definitions/RawPublicPath" }] };
const schema101 = { "description": "The 'publicPath' specifies the public URL address of the output files when referenced in a browser.", "anyOf": [{ "type": "string" }] };
function validate97(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (data !== "auto") {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    const _errs4 = errors;
    let valid2 = false;
    const _errs5 = errors;
    if (typeof data !== "string") {
        const err1 = { instancePath, schemaPath: "#/definitions/RawPublicPath/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid1 = _errs5 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
        const err2 = { instancePath, schemaPath: "#/definitions/RawPublicPath/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    else {
        errors = _errs4;
        if (vErrors !== null) {
            if (_errs4) {
                vErrors.length = _errs4;
            }
            else {
                vErrors = null;
            }
        }
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
} if (!valid0) {
    const err3 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err3];
    }
    else {
        vErrors.push(err3);
    }
    errors++;
    validate97.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate97.errors = vErrors; return errors === 0; }
function validate73(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(func2.call(schema69.properties, key0))) {
                validate73.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.iife !== undefined) {
                const _errs2 = errors;
                if (typeof data.iife !== "boolean") {
                    validate73.errors = [{ instancePath: instancePath + "/iife", schemaPath: "#/definitions/Iife/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                    return false;
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.assetModuleFilename !== undefined) {
                    const _errs5 = errors;
                    const _errs7 = errors;
                    let valid3 = false;
                    const _errs8 = errors;
                    if (typeof data.assetModuleFilename !== "string") {
                        const err0 = { instancePath: instancePath + "/assetModuleFilename", schemaPath: "#/definitions/AssetModuleFilename/anyOf/0/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                        if (vErrors === null) {
                            vErrors = [err0];
                        }
                        else {
                            vErrors.push(err0);
                        }
                        errors++;
                    }
                    var _valid0 = _errs8 === errors;
                    valid3 = valid3 || _valid0;
                    if (!valid3) {
                        const err1 = { instancePath: instancePath + "/assetModuleFilename", schemaPath: "#/definitions/AssetModuleFilename/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                        if (vErrors === null) {
                            vErrors = [err1];
                        }
                        else {
                            vErrors.push(err1);
                        }
                        errors++;
                        validate73.errors = vErrors;
                        return false;
                    }
                    else {
                        errors = _errs7;
                        if (vErrors !== null) {
                            if (_errs7) {
                                vErrors.length = _errs7;
                            }
                            else {
                                vErrors = null;
                            }
                        }
                    }
                    var valid0 = _errs5 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.auxiliaryComment !== undefined) {
                        const _errs10 = errors;
                        const _errs11 = errors;
                        let valid4 = false;
                        let passing0 = null;
                        const _errs12 = errors;
                        if (!(validate74(data.auxiliaryComment, { instancePath: instancePath + "/auxiliaryComment", parentData: data, parentDataProperty: "auxiliaryComment", rootData }))) {
                            vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
                            errors = vErrors.length;
                        }
                        var _valid1 = _errs12 === errors;
                        if (_valid1) {
                            valid4 = true;
                            passing0 = 0;
                        }
                        if (!valid4) {
                            const err2 = { instancePath: instancePath + "/auxiliaryComment", schemaPath: "#/properties/auxiliaryComment/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                            if (vErrors === null) {
                                vErrors = [err2];
                            }
                            else {
                                vErrors.push(err2);
                            }
                            errors++;
                            validate73.errors = vErrors;
                            return false;
                        }
                        else {
                            errors = _errs11;
                            if (vErrors !== null) {
                                if (_errs11) {
                                    vErrors.length = _errs11;
                                }
                                else {
                                    vErrors = null;
                                }
                            }
                        }
                        var valid0 = _errs10 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.chunkFilename !== undefined) {
                            const _errs13 = errors;
                            if (!(validate76(data.chunkFilename, { instancePath: instancePath + "/chunkFilename", parentData: data, parentDataProperty: "chunkFilename", rootData }))) {
                                vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
                                errors = vErrors.length;
                            }
                            var valid0 = _errs13 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.cssChunkFilename !== undefined) {
                                const _errs14 = errors;
                                if (!(validate78(data.cssChunkFilename, { instancePath: instancePath + "/cssChunkFilename", parentData: data, parentDataProperty: "cssChunkFilename", rootData }))) {
                                    vErrors = vErrors === null ? validate78.errors : vErrors.concat(validate78.errors);
                                    errors = vErrors.length;
                                }
                                var valid0 = _errs14 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.cssFilename !== undefined) {
                                    const _errs15 = errors;
                                    if (!(validate80(data.cssFilename, { instancePath: instancePath + "/cssFilename", parentData: data, parentDataProperty: "cssFilename", rootData }))) {
                                        vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
                                        errors = vErrors.length;
                                    }
                                    var valid0 = _errs15 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.enabledWasmLoadingTypes !== undefined) {
                                        const _errs16 = errors;
                                        if (!(validate82(data.enabledWasmLoadingTypes, { instancePath: instancePath + "/enabledWasmLoadingTypes", parentData: data, parentDataProperty: "enabledWasmLoadingTypes", rootData }))) {
                                            vErrors = vErrors === null ? validate82.errors : vErrors.concat(validate82.errors);
                                            errors = vErrors.length;
                                        }
                                        var valid0 = _errs16 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.wasmLoading !== undefined) {
                                            const _errs17 = errors;
                                            if (!(validate15(data.wasmLoading, { instancePath: instancePath + "/wasmLoading", parentData: data, parentDataProperty: "wasmLoading", rootData }))) {
                                                vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                                                errors = vErrors.length;
                                            }
                                            var valid0 = _errs17 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.webassemblyModuleFilename !== undefined) {
                                                const _errs18 = errors;
                                                if (typeof data.webassemblyModuleFilename !== "string") {
                                                    validate73.errors = [{ instancePath: instancePath + "/webassemblyModuleFilename", schemaPath: "#/definitions/WebassemblyModuleFilename/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                }
                                                var valid0 = _errs18 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                            if (valid0) {
                                                if (data.enabledLibraryTypes !== undefined) {
                                                    const _errs21 = errors;
                                                    if (!(validate85(data.enabledLibraryTypes, { instancePath: instancePath + "/enabledLibraryTypes", parentData: data, parentDataProperty: "enabledLibraryTypes", rootData }))) {
                                                        vErrors = vErrors === null ? validate85.errors : vErrors.concat(validate85.errors);
                                                        errors = vErrors.length;
                                                    }
                                                    var valid0 = _errs21 === errors;
                                                }
                                                else {
                                                    var valid0 = true;
                                                }
                                                if (valid0) {
                                                    if (data.filename !== undefined) {
                                                        const _errs22 = errors;
                                                        if (!(validate87(data.filename, { instancePath: instancePath + "/filename", parentData: data, parentDataProperty: "filename", rootData }))) {
                                                            vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
                                                            errors = vErrors.length;
                                                        }
                                                        var valid0 = _errs22 === errors;
                                                    }
                                                    else {
                                                        var valid0 = true;
                                                    }
                                                    if (valid0) {
                                                        if (data.globalObject !== undefined) {
                                                            let data11 = data.globalObject;
                                                            const _errs23 = errors;
                                                            const _errs24 = errors;
                                                            if (errors === _errs24) {
                                                                if (typeof data11 === "string") {
                                                                    if (data11.length < 1) {
                                                                        validate73.errors = [{ instancePath: instancePath + "/globalObject", schemaPath: "#/definitions/GlobalObject/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" }];
                                                                        return false;
                                                                    }
                                                                }
                                                                else {
                                                                    validate73.errors = [{ instancePath: instancePath + "/globalObject", schemaPath: "#/definitions/GlobalObject/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                    return false;
                                                                }
                                                            }
                                                            var valid0 = _errs23 === errors;
                                                        }
                                                        else {
                                                            var valid0 = true;
                                                        }
                                                        if (valid0) {
                                                            if (data.importFunctionName !== undefined) {
                                                                const _errs26 = errors;
                                                                if (typeof data.importFunctionName !== "string") {
                                                                    validate73.errors = [{ instancePath: instancePath + "/importFunctionName", schemaPath: "#/definitions/ImportFunctionName/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                    return false;
                                                                }
                                                                var valid0 = _errs26 === errors;
                                                            }
                                                            else {
                                                                var valid0 = true;
                                                            }
                                                            if (valid0) {
                                                                if (data.library !== undefined) {
                                                                    const _errs29 = errors;
                                                                    if (!(validate89(data.library, { instancePath: instancePath + "/library", parentData: data, parentDataProperty: "library", rootData }))) {
                                                                        vErrors = vErrors === null ? validate89.errors : vErrors.concat(validate89.errors);
                                                                        errors = vErrors.length;
                                                                    }
                                                                    var valid0 = _errs29 === errors;
                                                                }
                                                                else {
                                                                    var valid0 = true;
                                                                }
                                                                if (valid0) {
                                                                    if (data.libraryExport !== undefined) {
                                                                        let data14 = data.libraryExport;
                                                                        const _errs30 = errors;
                                                                        const _errs31 = errors;
                                                                        let valid8 = false;
                                                                        let passing1 = null;
                                                                        const _errs32 = errors;
                                                                        const _errs34 = errors;
                                                                        let valid10 = false;
                                                                        const _errs35 = errors;
                                                                        if (errors === _errs35) {
                                                                            if (Array.isArray(data14)) {
                                                                                var valid11 = true;
                                                                                const len0 = data14.length;
                                                                                for (let i0 = 0; i0 < len0; i0++) {
                                                                                    let data15 = data14[i0];
                                                                                    const _errs37 = errors;
                                                                                    if (errors === _errs37) {
                                                                                        if (typeof data15 === "string") {
                                                                                            if (data15.length < 1) {
                                                                                                const err3 = { instancePath: instancePath + "/libraryExport/" + i0, schemaPath: "#/definitions/LibraryExport/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                                if (vErrors === null) {
                                                                                                    vErrors = [err3];
                                                                                                }
                                                                                                else {
                                                                                                    vErrors.push(err3);
                                                                                                }
                                                                                                errors++;
                                                                                            }
                                                                                        }
                                                                                        else {
                                                                                            const err4 = { instancePath: instancePath + "/libraryExport/" + i0, schemaPath: "#/definitions/LibraryExport/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                            if (vErrors === null) {
                                                                                                vErrors = [err4];
                                                                                            }
                                                                                            else {
                                                                                                vErrors.push(err4);
                                                                                            }
                                                                                            errors++;
                                                                                        }
                                                                                    }
                                                                                    var valid11 = _errs37 === errors;
                                                                                    if (!valid11) {
                                                                                        break;
                                                                                    }
                                                                                }
                                                                            }
                                                                            else {
                                                                                const err5 = { instancePath: instancePath + "/libraryExport", schemaPath: "#/definitions/LibraryExport/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err5];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err5);
                                                                                }
                                                                                errors++;
                                                                            }
                                                                        }
                                                                        var _valid3 = _errs35 === errors;
                                                                        valid10 = valid10 || _valid3;
                                                                        if (!valid10) {
                                                                            const _errs39 = errors;
                                                                            if (errors === _errs39) {
                                                                                if (typeof data14 === "string") {
                                                                                    if (data14.length < 1) {
                                                                                        const err6 = { instancePath: instancePath + "/libraryExport", schemaPath: "#/definitions/LibraryExport/anyOf/1/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                        if (vErrors === null) {
                                                                                            vErrors = [err6];
                                                                                        }
                                                                                        else {
                                                                                            vErrors.push(err6);
                                                                                        }
                                                                                        errors++;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    const err7 = { instancePath: instancePath + "/libraryExport", schemaPath: "#/definitions/LibraryExport/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                    if (vErrors === null) {
                                                                                        vErrors = [err7];
                                                                                    }
                                                                                    else {
                                                                                        vErrors.push(err7);
                                                                                    }
                                                                                    errors++;
                                                                                }
                                                                            }
                                                                            var _valid3 = _errs39 === errors;
                                                                            valid10 = valid10 || _valid3;
                                                                        }
                                                                        if (!valid10) {
                                                                            const err8 = { instancePath: instancePath + "/libraryExport", schemaPath: "#/definitions/LibraryExport/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                            if (vErrors === null) {
                                                                                vErrors = [err8];
                                                                            }
                                                                            else {
                                                                                vErrors.push(err8);
                                                                            }
                                                                            errors++;
                                                                        }
                                                                        else {
                                                                            errors = _errs34;
                                                                            if (vErrors !== null) {
                                                                                if (_errs34) {
                                                                                    vErrors.length = _errs34;
                                                                                }
                                                                                else {
                                                                                    vErrors = null;
                                                                                }
                                                                            }
                                                                        }
                                                                        var _valid2 = _errs32 === errors;
                                                                        if (_valid2) {
                                                                            valid8 = true;
                                                                            passing1 = 0;
                                                                        }
                                                                        if (!valid8) {
                                                                            const err9 = { instancePath: instancePath + "/libraryExport", schemaPath: "#/properties/libraryExport/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                                                                            if (vErrors === null) {
                                                                                vErrors = [err9];
                                                                            }
                                                                            else {
                                                                                vErrors.push(err9);
                                                                            }
                                                                            errors++;
                                                                            validate73.errors = vErrors;
                                                                            return false;
                                                                        }
                                                                        else {
                                                                            errors = _errs31;
                                                                            if (vErrors !== null) {
                                                                                if (_errs31) {
                                                                                    vErrors.length = _errs31;
                                                                                }
                                                                                else {
                                                                                    vErrors = null;
                                                                                }
                                                                            }
                                                                        }
                                                                        var valid0 = _errs30 === errors;
                                                                    }
                                                                    else {
                                                                        var valid0 = true;
                                                                    }
                                                                    if (valid0) {
                                                                        if (data.libraryTarget !== undefined) {
                                                                            let data16 = data.libraryTarget;
                                                                            const _errs41 = errors;
                                                                            const _errs42 = errors;
                                                                            let valid12 = false;
                                                                            let passing2 = null;
                                                                            const _errs43 = errors;
                                                                            const _errs45 = errors;
                                                                            let valid14 = false;
                                                                            const _errs46 = errors;
                                                                            if (data16 !== "var" && data16 !== "module" && data16 !== "assign" && data16 !== "assign-properties" && data16 !== "this" && data16 !== "window" && data16 !== "self" && data16 !== "global" && data16 !== "commonjs" && data16 !== "commonjs2" && data16 !== "commonjs-module" && data16 !== "commonjs-static" && data16 !== "amd" && data16 !== "amd-require" && data16 !== "umd" && data16 !== "umd2" && data16 !== "jsonp" && data16 !== "system") {
                                                                                const err10 = { instancePath: instancePath + "/libraryTarget", schemaPath: "#/definitions/LibraryType/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err10];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err10);
                                                                                }
                                                                                errors++;
                                                                            }
                                                                            var _valid5 = _errs46 === errors;
                                                                            valid14 = valid14 || _valid5;
                                                                            if (!valid14) {
                                                                                const _errs47 = errors;
                                                                                if (typeof data16 !== "string") {
                                                                                    const err11 = { instancePath: instancePath + "/libraryTarget", schemaPath: "#/definitions/LibraryType/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                    if (vErrors === null) {
                                                                                        vErrors = [err11];
                                                                                    }
                                                                                    else {
                                                                                        vErrors.push(err11);
                                                                                    }
                                                                                    errors++;
                                                                                }
                                                                                var _valid5 = _errs47 === errors;
                                                                                valid14 = valid14 || _valid5;
                                                                            }
                                                                            if (!valid14) {
                                                                                const err12 = { instancePath: instancePath + "/libraryTarget", schemaPath: "#/definitions/LibraryType/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err12];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err12);
                                                                                }
                                                                                errors++;
                                                                            }
                                                                            else {
                                                                                errors = _errs45;
                                                                                if (vErrors !== null) {
                                                                                    if (_errs45) {
                                                                                        vErrors.length = _errs45;
                                                                                    }
                                                                                    else {
                                                                                        vErrors = null;
                                                                                    }
                                                                                }
                                                                            }
                                                                            var _valid4 = _errs43 === errors;
                                                                            if (_valid4) {
                                                                                valid12 = true;
                                                                                passing2 = 0;
                                                                            }
                                                                            if (!valid12) {
                                                                                const err13 = { instancePath: instancePath + "/libraryTarget", schemaPath: "#/properties/libraryTarget/oneOf", keyword: "oneOf", params: { passingSchemas: passing2 }, message: "must match exactly one schema in oneOf" };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err13];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err13);
                                                                                }
                                                                                errors++;
                                                                                validate73.errors = vErrors;
                                                                                return false;
                                                                            }
                                                                            else {
                                                                                errors = _errs42;
                                                                                if (vErrors !== null) {
                                                                                    if (_errs42) {
                                                                                        vErrors.length = _errs42;
                                                                                    }
                                                                                    else {
                                                                                        vErrors = null;
                                                                                    }
                                                                                }
                                                                            }
                                                                            var valid0 = _errs41 === errors;
                                                                        }
                                                                        else {
                                                                            var valid0 = true;
                                                                        }
                                                                        if (valid0) {
                                                                            if (data.module !== undefined) {
                                                                                const _errs49 = errors;
                                                                                if (typeof data.module !== "boolean") {
                                                                                    validate73.errors = [{ instancePath: instancePath + "/module", schemaPath: "#/definitions/OutputModule/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                    return false;
                                                                                }
                                                                                var valid0 = _errs49 === errors;
                                                                            }
                                                                            else {
                                                                                var valid0 = true;
                                                                            }
                                                                            if (valid0) {
                                                                                if (data.path !== undefined) {
                                                                                    const _errs52 = errors;
                                                                                    if (typeof data.path !== "string") {
                                                                                        validate73.errors = [{ instancePath: instancePath + "/path", schemaPath: "#/definitions/Path/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                                        return false;
                                                                                    }
                                                                                    var valid0 = _errs52 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid0 = true;
                                                                                }
                                                                                if (valid0) {
                                                                                    if (data.publicPath !== undefined) {
                                                                                        const _errs55 = errors;
                                                                                        if (!(validate97(data.publicPath, { instancePath: instancePath + "/publicPath", parentData: data, parentDataProperty: "publicPath", rootData }))) {
                                                                                            vErrors = vErrors === null ? validate97.errors : vErrors.concat(validate97.errors);
                                                                                            errors = vErrors.length;
                                                                                        }
                                                                                        var valid0 = _errs55 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid0 = true;
                                                                                    }
                                                                                    if (valid0) {
                                                                                        if (data.strictModuleErrorHandling !== undefined) {
                                                                                            const _errs56 = errors;
                                                                                            if (typeof data.strictModuleErrorHandling !== "boolean") {
                                                                                                validate73.errors = [{ instancePath: instancePath + "/strictModuleErrorHandling", schemaPath: "#/definitions/StrictModuleErrorHandling/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                return false;
                                                                                            }
                                                                                            var valid0 = _errs56 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid0 = true;
                                                                                        }
                                                                                        if (valid0) {
                                                                                            if (data.umdNamedDefine !== undefined) {
                                                                                                const _errs59 = errors;
                                                                                                const _errs60 = errors;
                                                                                                let valid18 = false;
                                                                                                let passing3 = null;
                                                                                                const _errs61 = errors;
                                                                                                if (typeof data.umdNamedDefine !== "boolean") {
                                                                                                    const err14 = { instancePath: instancePath + "/umdNamedDefine", schemaPath: "#/definitions/UmdNamedDefine/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                                    if (vErrors === null) {
                                                                                                        vErrors = [err14];
                                                                                                    }
                                                                                                    else {
                                                                                                        vErrors.push(err14);
                                                                                                    }
                                                                                                    errors++;
                                                                                                }
                                                                                                var _valid6 = _errs61 === errors;
                                                                                                if (_valid6) {
                                                                                                    valid18 = true;
                                                                                                    passing3 = 0;
                                                                                                }
                                                                                                if (!valid18) {
                                                                                                    const err15 = { instancePath: instancePath + "/umdNamedDefine", schemaPath: "#/properties/umdNamedDefine/oneOf", keyword: "oneOf", params: { passingSchemas: passing3 }, message: "must match exactly one schema in oneOf" };
                                                                                                    if (vErrors === null) {
                                                                                                        vErrors = [err15];
                                                                                                    }
                                                                                                    else {
                                                                                                        vErrors.push(err15);
                                                                                                    }
                                                                                                    errors++;
                                                                                                    validate73.errors = vErrors;
                                                                                                    return false;
                                                                                                }
                                                                                                else {
                                                                                                    errors = _errs60;
                                                                                                    if (vErrors !== null) {
                                                                                                        if (_errs60) {
                                                                                                            vErrors.length = _errs60;
                                                                                                        }
                                                                                                        else {
                                                                                                            vErrors = null;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                var valid0 = _errs59 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid0 = true;
                                                                                            }
                                                                                            if (valid0) {
                                                                                                if (data.uniqueName !== undefined) {
                                                                                                    let data22 = data.uniqueName;
                                                                                                    const _errs64 = errors;
                                                                                                    const _errs65 = errors;
                                                                                                    if (errors === _errs65) {
                                                                                                        if (typeof data22 === "string") {
                                                                                                            if (data22.length < 1) {
                                                                                                                validate73.errors = [{ instancePath: instancePath + "/uniqueName", schemaPath: "#/definitions/UniqueName/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" }];
                                                                                                                return false;
                                                                                                            }
                                                                                                        }
                                                                                                        else {
                                                                                                            validate73.errors = [{ instancePath: instancePath + "/uniqueName", schemaPath: "#/definitions/UniqueName/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                                                            return false;
                                                                                                        }
                                                                                                    }
                                                                                                    var valid0 = _errs64 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid0 = true;
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate73.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate73.errors = vErrors; return errors === 0; }
const schema105 = { "description": "Add additional plugins to the compiler.", "type": "array", "items": { "description": "Plugin of type object or instanceof Function.", "anyOf": [{ "$ref": "#/definitions/RspackPluginInstance" }, { "$ref": "#/definitions/RspackPluginFunction" }] } };
function validate100(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (Array.isArray(data)) {
        var valid0 = true;
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            let data0 = data[i0];
            const _errs1 = errors;
            const _errs2 = errors;
            let valid1 = false;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs4) {
                if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                    let missing0;
                    if ((data0.apply === undefined) && (missing0 = "apply")) {
                        const err0 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/RspackPluginInstance/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
                        if (vErrors === null) {
                            vErrors = [err0];
                        }
                        else {
                            vErrors.push(err0);
                        }
                        errors++;
                    }
                    else {
                        if (data0.apply !== undefined) {
                            if (!(data0.apply instanceof Function)) {
                                const err1 = { instancePath: instancePath + "/" + i0 + "/apply", schemaPath: "#/definitions/RspackPluginInstance/properties/apply/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                if (vErrors === null) {
                                    vErrors = [err1];
                                }
                                else {
                                    vErrors.push(err1);
                                }
                                errors++;
                            }
                        }
                    }
                }
                else {
                    const err2 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/RspackPluginInstance/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
            }
            var _valid0 = _errs3 === errors;
            valid1 = valid1 || _valid0;
            if (!valid1) {
                const _errs8 = errors;
                if (!(data0 instanceof Function)) {
                    const err3 = { instancePath: instancePath + "/" + i0, schemaPath: "#/definitions/RspackPluginFunction/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                    if (vErrors === null) {
                        vErrors = [err3];
                    }
                    else {
                        vErrors.push(err3);
                    }
                    errors++;
                }
                var _valid0 = _errs8 === errors;
                valid1 = valid1 || _valid0;
            }
            if (!valid1) {
                const err4 = { instancePath: instancePath + "/" + i0, schemaPath: "#/items/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
                validate100.errors = vErrors;
                return false;
            }
            else {
                errors = _errs2;
                if (vErrors !== null) {
                    if (_errs2) {
                        vErrors.length = _errs2;
                    }
                    else {
                        vErrors = null;
                    }
                }
            }
            var valid0 = _errs1 === errors;
            if (!valid0) {
                break;
            }
        }
    }
    else {
        validate100.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
        return false;
    }
} validate100.errors = vErrors; return errors === 0; }
const schema108 = { "description": "Options for the resolver.", "oneOf": [{ "$ref": "#/definitions/ResolveOptions" }] };
function validate102(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; let passing0 = null; const _errs1 = errors; if (!(validate48(data, { instancePath, parentData, parentDataProperty, rootData }))) {
    vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
    errors = vErrors.length;
} var _valid0 = _errs1 === errors; if (_valid0) {
    valid0 = true;
    passing0 = 0;
} if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
    validate102.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate102.errors = vErrors; return errors === 0; }
const schema110 = { "description": "Stats options object or preset name.", "anyOf": [{ "enum": ["none", "errors-only", "errors-warnings", "normal", "verbose"] }, { "type": "boolean" }, { "$ref": "#/definitions/StatsOptions" }] };
const schema111 = { "description": "Stats options object.", "type": "object", "additionalProperties": true, "properties": { "all": { "description": "Fallback value for stats options when an option is not defined (has precedence over local rspack defaults).", "type": "boolean" }, "assets": { "description": "Add assets information.", "type": "boolean" }, "chunkGroups": { "description": "Display all chunk groups with the corresponding bundles.", "type": "boolean" }, "chunks": { "description": "Add chunk information.", "type": "boolean" }, "colors": { "description": "Enables/Disables colorful output.", "type": "boolean" }, "entrypoints": { "description": "Display the entry points with the corresponding bundles.", "anyOf": [{ "enum": ["auto"] }, { "type": "boolean" }] }, "errors": { "description": "Add errors.", "type": "boolean" }, "errorsCount": { "description": "Add errors count.", "type": "boolean" }, "hash": { "description": "Add the hash of the compilation.", "type": "boolean" }, "modules": { "description": "Add built modules information.", "type": "boolean" }, "preset": { "description": "Preset for the default values.", "anyOf": [{ "type": "boolean" }, { "type": "string" }] }, "publicPath": { "description": "Add public path information.", "type": "boolean" }, "reasons": { "description": "Add information about the reasons why modules are included.", "type": "boolean" }, "warnings": { "description": "Add warnings.", "type": "boolean" }, "warningsCount": { "description": "Add warnings count.", "type": "boolean" }, "outputPath": { "description": "Add output path information.", "type": "boolean" }, "chunkModules": { "description": "Add built modules information to chunk information.", "type": "boolean" }, "chunkRelations": { "description": "Add information about parent, children and sibling chunks to chunk information.", "type": "boolean" }, "timings": { "description": "Add timing information.", "type": "boolean" }, "builtAt": { "description": "Add built at time information.", "type": "boolean" } } };
function validate105(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; const _errs0 = errors; let valid0 = false; const _errs1 = errors; if (data !== "none" && data !== "errors-only" && data !== "errors-warnings" && data !== "normal" && data !== "verbose") {
    const err0 = { instancePath, schemaPath: "#/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
    if (vErrors === null) {
        vErrors = [err0];
    }
    else {
        vErrors.push(err0);
    }
    errors++;
} var _valid0 = _errs1 === errors; valid0 = valid0 || _valid0; if (!valid0) {
    const _errs2 = errors;
    if (typeof data !== "boolean") {
        const err1 = { instancePath, schemaPath: "#/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
        const _errs4 = errors;
        const _errs5 = errors;
        if (errors === _errs5) {
            if (data && typeof data == "object" && !Array.isArray(data)) {
                if (data.all !== undefined) {
                    const _errs8 = errors;
                    if (typeof data.all !== "boolean") {
                        const err2 = { instancePath: instancePath + "/all", schemaPath: "#/definitions/StatsOptions/properties/all/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                    var valid2 = _errs8 === errors;
                }
                else {
                    var valid2 = true;
                }
                if (valid2) {
                    if (data.assets !== undefined) {
                        const _errs10 = errors;
                        if (typeof data.assets !== "boolean") {
                            const err3 = { instancePath: instancePath + "/assets", schemaPath: "#/definitions/StatsOptions/properties/assets/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                            if (vErrors === null) {
                                vErrors = [err3];
                            }
                            else {
                                vErrors.push(err3);
                            }
                            errors++;
                        }
                        var valid2 = _errs10 === errors;
                    }
                    else {
                        var valid2 = true;
                    }
                    if (valid2) {
                        if (data.chunkGroups !== undefined) {
                            const _errs12 = errors;
                            if (typeof data.chunkGroups !== "boolean") {
                                const err4 = { instancePath: instancePath + "/chunkGroups", schemaPath: "#/definitions/StatsOptions/properties/chunkGroups/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                if (vErrors === null) {
                                    vErrors = [err4];
                                }
                                else {
                                    vErrors.push(err4);
                                }
                                errors++;
                            }
                            var valid2 = _errs12 === errors;
                        }
                        else {
                            var valid2 = true;
                        }
                        if (valid2) {
                            if (data.chunks !== undefined) {
                                const _errs14 = errors;
                                if (typeof data.chunks !== "boolean") {
                                    const err5 = { instancePath: instancePath + "/chunks", schemaPath: "#/definitions/StatsOptions/properties/chunks/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                    if (vErrors === null) {
                                        vErrors = [err5];
                                    }
                                    else {
                                        vErrors.push(err5);
                                    }
                                    errors++;
                                }
                                var valid2 = _errs14 === errors;
                            }
                            else {
                                var valid2 = true;
                            }
                            if (valid2) {
                                if (data.colors !== undefined) {
                                    const _errs16 = errors;
                                    if (typeof data.colors !== "boolean") {
                                        const err6 = { instancePath: instancePath + "/colors", schemaPath: "#/definitions/StatsOptions/properties/colors/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                        if (vErrors === null) {
                                            vErrors = [err6];
                                        }
                                        else {
                                            vErrors.push(err6);
                                        }
                                        errors++;
                                    }
                                    var valid2 = _errs16 === errors;
                                }
                                else {
                                    var valid2 = true;
                                }
                                if (valid2) {
                                    if (data.entrypoints !== undefined) {
                                        let data5 = data.entrypoints;
                                        const _errs18 = errors;
                                        const _errs19 = errors;
                                        let valid3 = false;
                                        const _errs20 = errors;
                                        if (data5 !== "auto") {
                                            const err7 = { instancePath: instancePath + "/entrypoints", schemaPath: "#/definitions/StatsOptions/properties/entrypoints/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                            if (vErrors === null) {
                                                vErrors = [err7];
                                            }
                                            else {
                                                vErrors.push(err7);
                                            }
                                            errors++;
                                        }
                                        var _valid1 = _errs20 === errors;
                                        valid3 = valid3 || _valid1;
                                        if (!valid3) {
                                            const _errs21 = errors;
                                            if (typeof data5 !== "boolean") {
                                                const err8 = { instancePath: instancePath + "/entrypoints", schemaPath: "#/definitions/StatsOptions/properties/entrypoints/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                if (vErrors === null) {
                                                    vErrors = [err8];
                                                }
                                                else {
                                                    vErrors.push(err8);
                                                }
                                                errors++;
                                            }
                                            var _valid1 = _errs21 === errors;
                                            valid3 = valid3 || _valid1;
                                        }
                                        if (!valid3) {
                                            const err9 = { instancePath: instancePath + "/entrypoints", schemaPath: "#/definitions/StatsOptions/properties/entrypoints/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                            if (vErrors === null) {
                                                vErrors = [err9];
                                            }
                                            else {
                                                vErrors.push(err9);
                                            }
                                            errors++;
                                        }
                                        else {
                                            errors = _errs19;
                                            if (vErrors !== null) {
                                                if (_errs19) {
                                                    vErrors.length = _errs19;
                                                }
                                                else {
                                                    vErrors = null;
                                                }
                                            }
                                        }
                                        var valid2 = _errs18 === errors;
                                    }
                                    else {
                                        var valid2 = true;
                                    }
                                    if (valid2) {
                                        if (data.errors !== undefined) {
                                            const _errs23 = errors;
                                            if (typeof data.errors !== "boolean") {
                                                const err10 = { instancePath: instancePath + "/errors", schemaPath: "#/definitions/StatsOptions/properties/errors/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                if (vErrors === null) {
                                                    vErrors = [err10];
                                                }
                                                else {
                                                    vErrors.push(err10);
                                                }
                                                errors++;
                                            }
                                            var valid2 = _errs23 === errors;
                                        }
                                        else {
                                            var valid2 = true;
                                        }
                                        if (valid2) {
                                            if (data.errorsCount !== undefined) {
                                                const _errs25 = errors;
                                                if (typeof data.errorsCount !== "boolean") {
                                                    const err11 = { instancePath: instancePath + "/errorsCount", schemaPath: "#/definitions/StatsOptions/properties/errorsCount/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                    if (vErrors === null) {
                                                        vErrors = [err11];
                                                    }
                                                    else {
                                                        vErrors.push(err11);
                                                    }
                                                    errors++;
                                                }
                                                var valid2 = _errs25 === errors;
                                            }
                                            else {
                                                var valid2 = true;
                                            }
                                            if (valid2) {
                                                if (data.hash !== undefined) {
                                                    const _errs27 = errors;
                                                    if (typeof data.hash !== "boolean") {
                                                        const err12 = { instancePath: instancePath + "/hash", schemaPath: "#/definitions/StatsOptions/properties/hash/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                        if (vErrors === null) {
                                                            vErrors = [err12];
                                                        }
                                                        else {
                                                            vErrors.push(err12);
                                                        }
                                                        errors++;
                                                    }
                                                    var valid2 = _errs27 === errors;
                                                }
                                                else {
                                                    var valid2 = true;
                                                }
                                                if (valid2) {
                                                    if (data.modules !== undefined) {
                                                        const _errs29 = errors;
                                                        if (typeof data.modules !== "boolean") {
                                                            const err13 = { instancePath: instancePath + "/modules", schemaPath: "#/definitions/StatsOptions/properties/modules/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                            if (vErrors === null) {
                                                                vErrors = [err13];
                                                            }
                                                            else {
                                                                vErrors.push(err13);
                                                            }
                                                            errors++;
                                                        }
                                                        var valid2 = _errs29 === errors;
                                                    }
                                                    else {
                                                        var valid2 = true;
                                                    }
                                                    if (valid2) {
                                                        if (data.preset !== undefined) {
                                                            let data10 = data.preset;
                                                            const _errs31 = errors;
                                                            const _errs32 = errors;
                                                            let valid4 = false;
                                                            const _errs33 = errors;
                                                            if (typeof data10 !== "boolean") {
                                                                const err14 = { instancePath: instancePath + "/preset", schemaPath: "#/definitions/StatsOptions/properties/preset/anyOf/0/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err14];
                                                                }
                                                                else {
                                                                    vErrors.push(err14);
                                                                }
                                                                errors++;
                                                            }
                                                            var _valid2 = _errs33 === errors;
                                                            valid4 = valid4 || _valid2;
                                                            if (!valid4) {
                                                                const _errs35 = errors;
                                                                if (typeof data10 !== "string") {
                                                                    const err15 = { instancePath: instancePath + "/preset", schemaPath: "#/definitions/StatsOptions/properties/preset/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err15];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err15);
                                                                    }
                                                                    errors++;
                                                                }
                                                                var _valid2 = _errs35 === errors;
                                                                valid4 = valid4 || _valid2;
                                                            }
                                                            if (!valid4) {
                                                                const err16 = { instancePath: instancePath + "/preset", schemaPath: "#/definitions/StatsOptions/properties/preset/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                if (vErrors === null) {
                                                                    vErrors = [err16];
                                                                }
                                                                else {
                                                                    vErrors.push(err16);
                                                                }
                                                                errors++;
                                                            }
                                                            else {
                                                                errors = _errs32;
                                                                if (vErrors !== null) {
                                                                    if (_errs32) {
                                                                        vErrors.length = _errs32;
                                                                    }
                                                                    else {
                                                                        vErrors = null;
                                                                    }
                                                                }
                                                            }
                                                            var valid2 = _errs31 === errors;
                                                        }
                                                        else {
                                                            var valid2 = true;
                                                        }
                                                        if (valid2) {
                                                            if (data.publicPath !== undefined) {
                                                                const _errs37 = errors;
                                                                if (typeof data.publicPath !== "boolean") {
                                                                    const err17 = { instancePath: instancePath + "/publicPath", schemaPath: "#/definitions/StatsOptions/properties/publicPath/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err17];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err17);
                                                                    }
                                                                    errors++;
                                                                }
                                                                var valid2 = _errs37 === errors;
                                                            }
                                                            else {
                                                                var valid2 = true;
                                                            }
                                                            if (valid2) {
                                                                if (data.reasons !== undefined) {
                                                                    const _errs39 = errors;
                                                                    if (typeof data.reasons !== "boolean") {
                                                                        const err18 = { instancePath: instancePath + "/reasons", schemaPath: "#/definitions/StatsOptions/properties/reasons/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                        if (vErrors === null) {
                                                                            vErrors = [err18];
                                                                        }
                                                                        else {
                                                                            vErrors.push(err18);
                                                                        }
                                                                        errors++;
                                                                    }
                                                                    var valid2 = _errs39 === errors;
                                                                }
                                                                else {
                                                                    var valid2 = true;
                                                                }
                                                                if (valid2) {
                                                                    if (data.warnings !== undefined) {
                                                                        const _errs41 = errors;
                                                                        if (typeof data.warnings !== "boolean") {
                                                                            const err19 = { instancePath: instancePath + "/warnings", schemaPath: "#/definitions/StatsOptions/properties/warnings/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                            if (vErrors === null) {
                                                                                vErrors = [err19];
                                                                            }
                                                                            else {
                                                                                vErrors.push(err19);
                                                                            }
                                                                            errors++;
                                                                        }
                                                                        var valid2 = _errs41 === errors;
                                                                    }
                                                                    else {
                                                                        var valid2 = true;
                                                                    }
                                                                    if (valid2) {
                                                                        if (data.warningsCount !== undefined) {
                                                                            const _errs43 = errors;
                                                                            if (typeof data.warningsCount !== "boolean") {
                                                                                const err20 = { instancePath: instancePath + "/warningsCount", schemaPath: "#/definitions/StatsOptions/properties/warningsCount/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                if (vErrors === null) {
                                                                                    vErrors = [err20];
                                                                                }
                                                                                else {
                                                                                    vErrors.push(err20);
                                                                                }
                                                                                errors++;
                                                                            }
                                                                            var valid2 = _errs43 === errors;
                                                                        }
                                                                        else {
                                                                            var valid2 = true;
                                                                        }
                                                                        if (valid2) {
                                                                            if (data.outputPath !== undefined) {
                                                                                const _errs45 = errors;
                                                                                if (typeof data.outputPath !== "boolean") {
                                                                                    const err21 = { instancePath: instancePath + "/outputPath", schemaPath: "#/definitions/StatsOptions/properties/outputPath/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                    if (vErrors === null) {
                                                                                        vErrors = [err21];
                                                                                    }
                                                                                    else {
                                                                                        vErrors.push(err21);
                                                                                    }
                                                                                    errors++;
                                                                                }
                                                                                var valid2 = _errs45 === errors;
                                                                            }
                                                                            else {
                                                                                var valid2 = true;
                                                                            }
                                                                            if (valid2) {
                                                                                if (data.chunkModules !== undefined) {
                                                                                    const _errs47 = errors;
                                                                                    if (typeof data.chunkModules !== "boolean") {
                                                                                        const err22 = { instancePath: instancePath + "/chunkModules", schemaPath: "#/definitions/StatsOptions/properties/chunkModules/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                        if (vErrors === null) {
                                                                                            vErrors = [err22];
                                                                                        }
                                                                                        else {
                                                                                            vErrors.push(err22);
                                                                                        }
                                                                                        errors++;
                                                                                    }
                                                                                    var valid2 = _errs47 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid2 = true;
                                                                                }
                                                                                if (valid2) {
                                                                                    if (data.chunkRelations !== undefined) {
                                                                                        const _errs49 = errors;
                                                                                        if (typeof data.chunkRelations !== "boolean") {
                                                                                            const err23 = { instancePath: instancePath + "/chunkRelations", schemaPath: "#/definitions/StatsOptions/properties/chunkRelations/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                            if (vErrors === null) {
                                                                                                vErrors = [err23];
                                                                                            }
                                                                                            else {
                                                                                                vErrors.push(err23);
                                                                                            }
                                                                                            errors++;
                                                                                        }
                                                                                        var valid2 = _errs49 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid2 = true;
                                                                                    }
                                                                                    if (valid2) {
                                                                                        if (data.timings !== undefined) {
                                                                                            const _errs51 = errors;
                                                                                            if (typeof data.timings !== "boolean") {
                                                                                                const err24 = { instancePath: instancePath + "/timings", schemaPath: "#/definitions/StatsOptions/properties/timings/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                                if (vErrors === null) {
                                                                                                    vErrors = [err24];
                                                                                                }
                                                                                                else {
                                                                                                    vErrors.push(err24);
                                                                                                }
                                                                                                errors++;
                                                                                            }
                                                                                            var valid2 = _errs51 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid2 = true;
                                                                                        }
                                                                                        if (valid2) {
                                                                                            if (data.builtAt !== undefined) {
                                                                                                const _errs53 = errors;
                                                                                                if (typeof data.builtAt !== "boolean") {
                                                                                                    const err25 = { instancePath: instancePath + "/builtAt", schemaPath: "#/definitions/StatsOptions/properties/builtAt/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                                    if (vErrors === null) {
                                                                                                        vErrors = [err25];
                                                                                                    }
                                                                                                    else {
                                                                                                        vErrors.push(err25);
                                                                                                    }
                                                                                                    errors++;
                                                                                                }
                                                                                                var valid2 = _errs53 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid2 = true;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                const err26 = { instancePath, schemaPath: "#/definitions/StatsOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                if (vErrors === null) {
                    vErrors = [err26];
                }
                else {
                    vErrors.push(err26);
                }
                errors++;
            }
        }
        var _valid0 = _errs4 === errors;
        valid0 = valid0 || _valid0;
    }
} if (!valid0) {
    const err27 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
        vErrors = [err27];
    }
    else {
        vErrors.push(err27);
    }
    errors++;
    validate105.errors = vErrors;
    return false;
}
else {
    errors = _errs0;
    if (vErrors !== null) {
        if (_errs0) {
            vErrors.length = _errs0;
        }
        else {
            vErrors = null;
        }
    }
} validate105.errors = vErrors; return errors === 0; }
function validate10(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) { let vErrors = null; let errors = 0; if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
        const _errs1 = errors;
        for (const key0 in data) {
            if (!(func2.call(schema11.properties, key0))) {
                validate10.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                return false;
                break;
            }
        }
        if (_errs1 === errors) {
            if (data.cache !== undefined) {
                const _errs2 = errors;
                if (typeof data.cache !== "boolean") {
                    validate10.errors = [{ instancePath: instancePath + "/cache", schemaPath: "#/definitions/CacheOptions/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                    return false;
                }
                var valid0 = _errs2 === errors;
            }
            else {
                var valid0 = true;
            }
            if (valid0) {
                if (data.context !== undefined) {
                    const _errs5 = errors;
                    if (typeof data.context !== "string") {
                        validate10.errors = [{ instancePath: instancePath + "/context", schemaPath: "#/definitions/Context/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                    }
                    var valid0 = _errs5 === errors;
                }
                else {
                    var valid0 = true;
                }
                if (valid0) {
                    if (data.dependencies !== undefined) {
                        let data2 = data.dependencies;
                        const _errs8 = errors;
                        const _errs9 = errors;
                        if (errors === _errs9) {
                            if (Array.isArray(data2)) {
                                var valid4 = true;
                                const len0 = data2.length;
                                for (let i0 = 0; i0 < len0; i0++) {
                                    const _errs11 = errors;
                                    if (typeof data2[i0] !== "string") {
                                        validate10.errors = [{ instancePath: instancePath + "/dependencies/" + i0, schemaPath: "#/definitions/Dependencies/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                    }
                                    var valid4 = _errs11 === errors;
                                    if (!valid4) {
                                        break;
                                    }
                                }
                            }
                            else {
                                validate10.errors = [{ instancePath: instancePath + "/dependencies", schemaPath: "#/definitions/Dependencies/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                return false;
                            }
                        }
                        var valid0 = _errs8 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if (valid0) {
                        if (data.devServer !== undefined) {
                            let data4 = data.devServer;
                            const _errs13 = errors;
                            if (!(data4 && typeof data4 == "object" && !Array.isArray(data4))) {
                                validate10.errors = [{ instancePath: instancePath + "/devServer", schemaPath: "#/definitions/DevServer/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                return false;
                            }
                            var valid0 = _errs13 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if (valid0) {
                            if (data.devtool !== undefined) {
                                let data5 = data.devtool;
                                const _errs16 = errors;
                                const _errs18 = errors;
                                let valid7 = false;
                                const _errs19 = errors;
                                if (data5 !== false) {
                                    const err0 = { instancePath: instancePath + "/devtool", schemaPath: "#/definitions/DevTool/anyOf/0/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                    if (vErrors === null) {
                                        vErrors = [err0];
                                    }
                                    else {
                                        vErrors.push(err0);
                                    }
                                    errors++;
                                }
                                var _valid0 = _errs19 === errors;
                                valid7 = valid7 || _valid0;
                                if (!valid7) {
                                    const _errs20 = errors;
                                    if (errors === _errs20) {
                                        if (typeof data5 === "string") {
                                            if (!pattern0.test(data5)) {
                                                const err1 = { instancePath: instancePath + "/devtool", schemaPath: "#/definitions/DevTool/anyOf/1/pattern", keyword: "pattern", params: { pattern: "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$" }, message: "must match pattern \"" + "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$" + "\"" };
                                                if (vErrors === null) {
                                                    vErrors = [err1];
                                                }
                                                else {
                                                    vErrors.push(err1);
                                                }
                                                errors++;
                                            }
                                        }
                                        else {
                                            const err2 = { instancePath: instancePath + "/devtool", schemaPath: "#/definitions/DevTool/anyOf/1/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                                vErrors = [err2];
                                            }
                                            else {
                                                vErrors.push(err2);
                                            }
                                            errors++;
                                        }
                                    }
                                    var _valid0 = _errs20 === errors;
                                    valid7 = valid7 || _valid0;
                                }
                                if (!valid7) {
                                    const err3 = { instancePath: instancePath + "/devtool", schemaPath: "#/definitions/DevTool/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                    if (vErrors === null) {
                                        vErrors = [err3];
                                    }
                                    else {
                                        vErrors.push(err3);
                                    }
                                    errors++;
                                    validate10.errors = vErrors;
                                    return false;
                                }
                                else {
                                    errors = _errs18;
                                    if (vErrors !== null) {
                                        if (_errs18) {
                                            vErrors.length = _errs18;
                                        }
                                        else {
                                            vErrors = null;
                                        }
                                    }
                                }
                                var valid0 = _errs16 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if (valid0) {
                                if (data.entry !== undefined) {
                                    const _errs22 = errors;
                                    if (!(validate11(data.entry, { instancePath: instancePath + "/entry", parentData: data, parentDataProperty: "entry", rootData }))) {
                                        vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                                        errors = vErrors.length;
                                    }
                                    var valid0 = _errs22 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if (valid0) {
                                    if (data.experiments !== undefined) {
                                        let data7 = data.experiments;
                                        const _errs23 = errors;
                                        const _errs24 = errors;
                                        if (errors === _errs24) {
                                            if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
                                                const _errs26 = errors;
                                                for (const key1 in data7) {
                                                    if (!(((key1 === "asyncWebAssembly") || (key1 === "incrementalRebuild")) || (key1 === "lazyCompilation"))) {
                                                        validate10.errors = [{ instancePath: instancePath + "/experiments", schemaPath: "#/definitions/Experiments/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                                        return false;
                                                        break;
                                                    }
                                                }
                                                if (_errs26 === errors) {
                                                    if (data7.asyncWebAssembly !== undefined) {
                                                        const _errs27 = errors;
                                                        if (typeof data7.asyncWebAssembly !== "boolean") {
                                                            validate10.errors = [{ instancePath: instancePath + "/experiments/asyncWebAssembly", schemaPath: "#/definitions/Experiments/properties/asyncWebAssembly/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                            return false;
                                                        }
                                                        var valid9 = _errs27 === errors;
                                                    }
                                                    else {
                                                        var valid9 = true;
                                                    }
                                                    if (valid9) {
                                                        if (data7.incrementalRebuild !== undefined) {
                                                            const _errs29 = errors;
                                                            if (typeof data7.incrementalRebuild !== "boolean") {
                                                                validate10.errors = [{ instancePath: instancePath + "/experiments/incrementalRebuild", schemaPath: "#/definitions/Experiments/properties/incrementalRebuild/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                return false;
                                                            }
                                                            var valid9 = _errs29 === errors;
                                                        }
                                                        else {
                                                            var valid9 = true;
                                                        }
                                                        if (valid9) {
                                                            if (data7.lazyCompilation !== undefined) {
                                                                const _errs31 = errors;
                                                                const _errs32 = errors;
                                                                let valid10 = false;
                                                                const _errs33 = errors;
                                                                if (typeof data7.lazyCompilation !== "boolean") {
                                                                    const err4 = { instancePath: instancePath + "/experiments/lazyCompilation", schemaPath: "#/definitions/Experiments/properties/lazyCompilation/anyOf/0/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err4];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err4);
                                                                    }
                                                                    errors++;
                                                                }
                                                                var _valid1 = _errs33 === errors;
                                                                valid10 = valid10 || _valid1;
                                                                if (!valid10) {
                                                                    const err5 = { instancePath: instancePath + "/experiments/lazyCompilation", schemaPath: "#/definitions/Experiments/properties/lazyCompilation/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                    if (vErrors === null) {
                                                                        vErrors = [err5];
                                                                    }
                                                                    else {
                                                                        vErrors.push(err5);
                                                                    }
                                                                    errors++;
                                                                    validate10.errors = vErrors;
                                                                    return false;
                                                                }
                                                                else {
                                                                    errors = _errs32;
                                                                    if (vErrors !== null) {
                                                                        if (_errs32) {
                                                                            vErrors.length = _errs32;
                                                                        }
                                                                        else {
                                                                            vErrors = null;
                                                                        }
                                                                    }
                                                                }
                                                                var valid9 = _errs31 === errors;
                                                            }
                                                            else {
                                                                var valid9 = true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                validate10.errors = [{ instancePath: instancePath + "/experiments", schemaPath: "#/definitions/Experiments/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                return false;
                                            }
                                        }
                                        var valid0 = _errs23 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if (valid0) {
                                        if (data.externals !== undefined) {
                                            const _errs35 = errors;
                                            if (!(validate23(data.externals, { instancePath: instancePath + "/externals", parentData: data, parentDataProperty: "externals", rootData }))) {
                                                vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
                                                errors = vErrors.length;
                                            }
                                            var valid0 = _errs35 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                        if (valid0) {
                                            if (data.externalsType !== undefined) {
                                                let data12 = data.externalsType;
                                                const _errs36 = errors;
                                                if (data12 !== "var" && data12 !== "module" && data12 !== "assign" && data12 !== "this" && data12 !== "window" && data12 !== "self" && data12 !== "global" && data12 !== "commonjs" && data12 !== "commonjs2" && data12 !== "commonjs-module" && data12 !== "commonjs-static" && data12 !== "amd" && data12 !== "amd-require" && data12 !== "umd" && data12 !== "umd2" && data12 !== "jsonp" && data12 !== "system" && data12 !== "promise" && data12 !== "import" && data12 !== "script" && data12 !== "node-commonjs") {
                                                    validate10.errors = [{ instancePath: instancePath + "/externalsType", schemaPath: "#/definitions/ExternalsType/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" }];
                                                    return false;
                                                }
                                                var valid0 = _errs36 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                            if (valid0) {
                                                if (data.externalsPresets !== undefined) {
                                                    let data13 = data.externalsPresets;
                                                    const _errs38 = errors;
                                                    const _errs39 = errors;
                                                    if (errors === _errs39) {
                                                        if (data13 && typeof data13 == "object" && !Array.isArray(data13)) {
                                                            const _errs41 = errors;
                                                            for (const key2 in data13) {
                                                                if (!(key2 === "node")) {
                                                                    validate10.errors = [{ instancePath: instancePath + "/externalsPresets", schemaPath: "#/definitions/ExternalsPresets/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" }];
                                                                    return false;
                                                                    break;
                                                                }
                                                            }
                                                            if (_errs41 === errors) {
                                                                if (data13.node !== undefined) {
                                                                    if (typeof data13.node !== "boolean") {
                                                                        validate10.errors = [{ instancePath: instancePath + "/externalsPresets/node", schemaPath: "#/definitions/ExternalsPresets/properties/node/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                        return false;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            validate10.errors = [{ instancePath: instancePath + "/externalsPresets", schemaPath: "#/definitions/ExternalsPresets/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                            return false;
                                                        }
                                                    }
                                                    var valid0 = _errs38 === errors;
                                                }
                                                else {
                                                    var valid0 = true;
                                                }
                                                if (valid0) {
                                                    if (data.infrastructureLogging !== undefined) {
                                                        const _errs44 = errors;
                                                        if (!(validate28(data.infrastructureLogging, { instancePath: instancePath + "/infrastructureLogging", parentData: data, parentDataProperty: "infrastructureLogging", rootData }))) {
                                                            vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
                                                            errors = vErrors.length;
                                                        }
                                                        var valid0 = _errs44 === errors;
                                                    }
                                                    else {
                                                        var valid0 = true;
                                                    }
                                                    if (valid0) {
                                                        if (data.mode !== undefined) {
                                                            let data16 = data.mode;
                                                            const _errs45 = errors;
                                                            if (data16 !== "development" && data16 !== "production" && data16 !== "none") {
                                                                validate10.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/definitions/Mode/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" }];
                                                                return false;
                                                            }
                                                            var valid0 = _errs45 === errors;
                                                        }
                                                        else {
                                                            var valid0 = true;
                                                        }
                                                        if (valid0) {
                                                            if (data.module !== undefined) {
                                                                const _errs47 = errors;
                                                                if (!(validate32(data.module, { instancePath: instancePath + "/module", parentData: data, parentDataProperty: "module", rootData }))) {
                                                                    vErrors = vErrors === null ? validate32.errors : vErrors.concat(validate32.errors);
                                                                    errors = vErrors.length;
                                                                }
                                                                var valid0 = _errs47 === errors;
                                                            }
                                                            else {
                                                                var valid0 = true;
                                                            }
                                                            if (valid0) {
                                                                if (data.name !== undefined) {
                                                                    const _errs48 = errors;
                                                                    if (typeof data.name !== "string") {
                                                                        validate10.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/definitions/Name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                        return false;
                                                                    }
                                                                    var valid0 = _errs48 === errors;
                                                                }
                                                                else {
                                                                    var valid0 = true;
                                                                }
                                                                if (valid0) {
                                                                    if (data.node !== undefined) {
                                                                        const _errs51 = errors;
                                                                        if (!(validate67(data.node, { instancePath: instancePath + "/node", parentData: data, parentDataProperty: "node", rootData }))) {
                                                                            vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
                                                                            errors = vErrors.length;
                                                                        }
                                                                        var valid0 = _errs51 === errors;
                                                                    }
                                                                    else {
                                                                        var valid0 = true;
                                                                    }
                                                                    if (valid0) {
                                                                        if (data.optimization !== undefined) {
                                                                            const _errs52 = errors;
                                                                            if (!(validate69(data.optimization, { instancePath: instancePath + "/optimization", parentData: data, parentDataProperty: "optimization", rootData }))) {
                                                                                vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
                                                                                errors = vErrors.length;
                                                                            }
                                                                            var valid0 = _errs52 === errors;
                                                                        }
                                                                        else {
                                                                            var valid0 = true;
                                                                        }
                                                                        if (valid0) {
                                                                            if (data.output !== undefined) {
                                                                                const _errs53 = errors;
                                                                                if (!(validate73(data.output, { instancePath: instancePath + "/output", parentData: data, parentDataProperty: "output", rootData }))) {
                                                                                    vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
                                                                                    errors = vErrors.length;
                                                                                }
                                                                                var valid0 = _errs53 === errors;
                                                                            }
                                                                            else {
                                                                                var valid0 = true;
                                                                            }
                                                                            if (valid0) {
                                                                                if (data.plugins !== undefined) {
                                                                                    const _errs54 = errors;
                                                                                    if (!(validate100(data.plugins, { instancePath: instancePath + "/plugins", parentData: data, parentDataProperty: "plugins", rootData }))) {
                                                                                        vErrors = vErrors === null ? validate100.errors : vErrors.concat(validate100.errors);
                                                                                        errors = vErrors.length;
                                                                                    }
                                                                                    var valid0 = _errs54 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid0 = true;
                                                                                }
                                                                                if (valid0) {
                                                                                    if (data.resolve !== undefined) {
                                                                                        const _errs55 = errors;
                                                                                        if (!(validate102(data.resolve, { instancePath: instancePath + "/resolve", parentData: data, parentDataProperty: "resolve", rootData }))) {
                                                                                            vErrors = vErrors === null ? validate102.errors : vErrors.concat(validate102.errors);
                                                                                            errors = vErrors.length;
                                                                                        }
                                                                                        var valid0 = _errs55 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid0 = true;
                                                                                    }
                                                                                    if (valid0) {
                                                                                        if (data.snapshot !== undefined) {
                                                                                            let data24 = data.snapshot;
                                                                                            const _errs56 = errors;
                                                                                            const _errs57 = errors;
                                                                                            if (errors === _errs57) {
                                                                                                if (data24 && typeof data24 == "object" && !Array.isArray(data24)) {
                                                                                                    const _errs59 = errors;
                                                                                                    for (const key3 in data24) {
                                                                                                        if (!((key3 === "module") || (key3 === "resolve"))) {
                                                                                                            validate10.errors = [{ instancePath: instancePath + "/snapshot", schemaPath: "#/definitions/SnapshotOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key3 }, message: "must NOT have additional properties" }];
                                                                                                            return false;
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                    if (_errs59 === errors) {
                                                                                                        if (data24.module !== undefined) {
                                                                                                            let data25 = data24.module;
                                                                                                            const _errs60 = errors;
                                                                                                            if (errors === _errs60) {
                                                                                                                if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
                                                                                                                    const _errs62 = errors;
                                                                                                                    for (const key4 in data25) {
                                                                                                                        if (!((key4 === "hash") || (key4 === "timestamp"))) {
                                                                                                                            validate10.errors = [{ instancePath: instancePath + "/snapshot/module", schemaPath: "#/definitions/SnapshotOptions/properties/module/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key4 }, message: "must NOT have additional properties" }];
                                                                                                                            return false;
                                                                                                                            break;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    if (_errs62 === errors) {
                                                                                                                        if (data25.hash !== undefined) {
                                                                                                                            const _errs63 = errors;
                                                                                                                            if (typeof data25.hash !== "boolean") {
                                                                                                                                validate10.errors = [{ instancePath: instancePath + "/snapshot/module/hash", schemaPath: "#/definitions/SnapshotOptions/properties/module/properties/hash/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid18 = _errs63 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid18 = true;
                                                                                                                        }
                                                                                                                        if (valid18) {
                                                                                                                            if (data25.timestamp !== undefined) {
                                                                                                                                const _errs65 = errors;
                                                                                                                                if (typeof data25.timestamp !== "boolean") {
                                                                                                                                    validate10.errors = [{ instancePath: instancePath + "/snapshot/module/timestamp", schemaPath: "#/definitions/SnapshotOptions/properties/module/properties/timestamp/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid18 = _errs65 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid18 = true;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    validate10.errors = [{ instancePath: instancePath + "/snapshot/module", schemaPath: "#/definitions/SnapshotOptions/properties/module/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                                                                                    return false;
                                                                                                                }
                                                                                                            }
                                                                                                            var valid17 = _errs60 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid17 = true;
                                                                                                        }
                                                                                                        if (valid17) {
                                                                                                            if (data24.resolve !== undefined) {
                                                                                                                let data28 = data24.resolve;
                                                                                                                const _errs67 = errors;
                                                                                                                if (errors === _errs67) {
                                                                                                                    if (data28 && typeof data28 == "object" && !Array.isArray(data28)) {
                                                                                                                        const _errs69 = errors;
                                                                                                                        for (const key5 in data28) {
                                                                                                                            if (!((key5 === "hash") || (key5 === "timestamp"))) {
                                                                                                                                validate10.errors = [{ instancePath: instancePath + "/snapshot/resolve", schemaPath: "#/definitions/SnapshotOptions/properties/resolve/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key5 }, message: "must NOT have additional properties" }];
                                                                                                                                return false;
                                                                                                                                break;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        if (_errs69 === errors) {
                                                                                                                            if (data28.hash !== undefined) {
                                                                                                                                const _errs70 = errors;
                                                                                                                                if (typeof data28.hash !== "boolean") {
                                                                                                                                    validate10.errors = [{ instancePath: instancePath + "/snapshot/resolve/hash", schemaPath: "#/definitions/SnapshotOptions/properties/resolve/properties/hash/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid19 = _errs70 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid19 = true;
                                                                                                                            }
                                                                                                                            if (valid19) {
                                                                                                                                if (data28.timestamp !== undefined) {
                                                                                                                                    const _errs72 = errors;
                                                                                                                                    if (typeof data28.timestamp !== "boolean") {
                                                                                                                                        validate10.errors = [{ instancePath: instancePath + "/snapshot/resolve/timestamp", schemaPath: "#/definitions/SnapshotOptions/properties/resolve/properties/timestamp/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    var valid19 = _errs72 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid19 = true;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        validate10.errors = [{ instancePath: instancePath + "/snapshot/resolve", schemaPath: "#/definitions/SnapshotOptions/properties/resolve/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                }
                                                                                                                var valid17 = _errs67 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid17 = true;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    validate10.errors = [{ instancePath: instancePath + "/snapshot", schemaPath: "#/definitions/SnapshotOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                                                                    return false;
                                                                                                }
                                                                                            }
                                                                                            var valid0 = _errs56 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid0 = true;
                                                                                        }
                                                                                        if (valid0) {
                                                                                            if (data.stats !== undefined) {
                                                                                                const _errs74 = errors;
                                                                                                if (!(validate105(data.stats, { instancePath: instancePath + "/stats", parentData: data, parentDataProperty: "stats", rootData }))) {
                                                                                                    vErrors = vErrors === null ? validate105.errors : vErrors.concat(validate105.errors);
                                                                                                    errors = vErrors.length;
                                                                                                }
                                                                                                var valid0 = _errs74 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid0 = true;
                                                                                            }
                                                                                            if (valid0) {
                                                                                                if (data.target !== undefined) {
                                                                                                    let data32 = data.target;
                                                                                                    const _errs75 = errors;
                                                                                                    const _errs77 = errors;
                                                                                                    let valid21 = false;
                                                                                                    const _errs78 = errors;
                                                                                                    if (errors === _errs78) {
                                                                                                        if (Array.isArray(data32)) {
                                                                                                            if (data32.length < 1) {
                                                                                                                const err6 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf/0/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" };
                                                                                                                if (vErrors === null) {
                                                                                                                    vErrors = [err6];
                                                                                                                }
                                                                                                                else {
                                                                                                                    vErrors.push(err6);
                                                                                                                }
                                                                                                                errors++;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid22 = true;
                                                                                                                const len1 = data32.length;
                                                                                                                for (let i1 = 0; i1 < len1; i1++) {
                                                                                                                    let data33 = data32[i1];
                                                                                                                    const _errs80 = errors;
                                                                                                                    if (errors === _errs80) {
                                                                                                                        if (typeof data33 === "string") {
                                                                                                                            if (data33.length < 1) {
                                                                                                                                const err7 = { instancePath: instancePath + "/target/" + i1, schemaPath: "#/definitions/Target/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                                                                if (vErrors === null) {
                                                                                                                                    vErrors = [err7];
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    vErrors.push(err7);
                                                                                                                                }
                                                                                                                                errors++;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            const err8 = { instancePath: instancePath + "/target/" + i1, schemaPath: "#/definitions/Target/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                                                            if (vErrors === null) {
                                                                                                                                vErrors = [err8];
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                vErrors.push(err8);
                                                                                                                            }
                                                                                                                            errors++;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    var valid22 = _errs80 === errors;
                                                                                                                    if (!valid22) {
                                                                                                                        break;
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                        else {
                                                                                                            const err9 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                                                                            if (vErrors === null) {
                                                                                                                vErrors = [err9];
                                                                                                            }
                                                                                                            else {
                                                                                                                vErrors.push(err9);
                                                                                                            }
                                                                                                            errors++;
                                                                                                        }
                                                                                                    }
                                                                                                    var _valid2 = _errs78 === errors;
                                                                                                    valid21 = valid21 || _valid2;
                                                                                                    if (!valid21) {
                                                                                                        const _errs82 = errors;
                                                                                                        if (data32 !== false) {
                                                                                                            const err10 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf/1/enum", keyword: "enum", params: {}, message: "must pass \"enum\" keyword validation" };
                                                                                                            if (vErrors === null) {
                                                                                                                vErrors = [err10];
                                                                                                            }
                                                                                                            else {
                                                                                                                vErrors.push(err10);
                                                                                                            }
                                                                                                            errors++;
                                                                                                        }
                                                                                                        var _valid2 = _errs82 === errors;
                                                                                                        valid21 = valid21 || _valid2;
                                                                                                        if (!valid21) {
                                                                                                            const _errs83 = errors;
                                                                                                            if (errors === _errs83) {
                                                                                                                if (typeof data32 === "string") {
                                                                                                                    if (data32.length < 1) {
                                                                                                                        const err11 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf/2/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                                                        if (vErrors === null) {
                                                                                                                            vErrors = [err11];
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            vErrors.push(err11);
                                                                                                                        }
                                                                                                                        errors++;
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    const err12 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf/2/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                                                    if (vErrors === null) {
                                                                                                                        vErrors = [err12];
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        vErrors.push(err12);
                                                                                                                    }
                                                                                                                    errors++;
                                                                                                                }
                                                                                                            }
                                                                                                            var _valid2 = _errs83 === errors;
                                                                                                            valid21 = valid21 || _valid2;
                                                                                                        }
                                                                                                    }
                                                                                                    if (!valid21) {
                                                                                                        const err13 = { instancePath: instancePath + "/target", schemaPath: "#/definitions/Target/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                                                        if (vErrors === null) {
                                                                                                            vErrors = [err13];
                                                                                                        }
                                                                                                        else {
                                                                                                            vErrors.push(err13);
                                                                                                        }
                                                                                                        errors++;
                                                                                                        validate10.errors = vErrors;
                                                                                                        return false;
                                                                                                    }
                                                                                                    else {
                                                                                                        errors = _errs77;
                                                                                                        if (vErrors !== null) {
                                                                                                            if (_errs77) {
                                                                                                                vErrors.length = _errs77;
                                                                                                            }
                                                                                                            else {
                                                                                                                vErrors = null;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    var valid0 = _errs75 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid0 = true;
                                                                                                }
                                                                                                if (valid0) {
                                                                                                    if (data.watch !== undefined) {
                                                                                                        const _errs85 = errors;
                                                                                                        if (typeof data.watch !== "boolean") {
                                                                                                            validate10.errors = [{ instancePath: instancePath + "/watch", schemaPath: "#/definitions/Watch/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid0 = _errs85 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid0 = true;
                                                                                                    }
                                                                                                    if (valid0) {
                                                                                                        if (data.watchOptions !== undefined) {
                                                                                                            let data35 = data.watchOptions;
                                                                                                            const _errs88 = errors;
                                                                                                            const _errs89 = errors;
                                                                                                            if (errors === _errs89) {
                                                                                                                if (data35 && typeof data35 == "object" && !Array.isArray(data35)) {
                                                                                                                    const _errs91 = errors;
                                                                                                                    for (const key6 in data35) {
                                                                                                                        if (!(((((key6 === "aggregateTimeout") || (key6 === "followSymlinks")) || (key6 === "ignored")) || (key6 === "poll")) || (key6 === "stdin"))) {
                                                                                                                            validate10.errors = [{ instancePath: instancePath + "/watchOptions", schemaPath: "#/definitions/WatchOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key6 }, message: "must NOT have additional properties" }];
                                                                                                                            return false;
                                                                                                                            break;
                                                                                                                        }
                                                                                                                    }
                                                                                                                    if (_errs91 === errors) {
                                                                                                                        if (data35.aggregateTimeout !== undefined) {
                                                                                                                            const _errs92 = errors;
                                                                                                                            if (!(typeof data35.aggregateTimeout == "number")) {
                                                                                                                                validate10.errors = [{ instancePath: instancePath + "/watchOptions/aggregateTimeout", schemaPath: "#/definitions/WatchOptions/properties/aggregateTimeout/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid25 = _errs92 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid25 = true;
                                                                                                                        }
                                                                                                                        if (valid25) {
                                                                                                                            if (data35.followSymlinks !== undefined) {
                                                                                                                                const _errs94 = errors;
                                                                                                                                if (typeof data35.followSymlinks !== "boolean") {
                                                                                                                                    validate10.errors = [{ instancePath: instancePath + "/watchOptions/followSymlinks", schemaPath: "#/definitions/WatchOptions/properties/followSymlinks/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid25 = _errs94 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid25 = true;
                                                                                                                            }
                                                                                                                            if (valid25) {
                                                                                                                                if (data35.ignored !== undefined) {
                                                                                                                                    let data38 = data35.ignored;
                                                                                                                                    const _errs96 = errors;
                                                                                                                                    const _errs97 = errors;
                                                                                                                                    let valid26 = false;
                                                                                                                                    const _errs98 = errors;
                                                                                                                                    if (errors === _errs98) {
                                                                                                                                        if (Array.isArray(data38)) {
                                                                                                                                            var valid27 = true;
                                                                                                                                            const len2 = data38.length;
                                                                                                                                            for (let i2 = 0; i2 < len2; i2++) {
                                                                                                                                                let data39 = data38[i2];
                                                                                                                                                const _errs100 = errors;
                                                                                                                                                if (errors === _errs100) {
                                                                                                                                                    if (typeof data39 === "string") {
                                                                                                                                                        if (data39.length < 1) {
                                                                                                                                                            const err14 = { instancePath: instancePath + "/watchOptions/ignored/" + i2, schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/0/items/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                                                                                            if (vErrors === null) {
                                                                                                                                                                vErrors = [err14];
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                vErrors.push(err14);
                                                                                                                                                            }
                                                                                                                                                            errors++;
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        const err15 = { instancePath: instancePath + "/watchOptions/ignored/" + i2, schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/0/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                                                                                        if (vErrors === null) {
                                                                                                                                                            vErrors = [err15];
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            vErrors.push(err15);
                                                                                                                                                        }
                                                                                                                                                        errors++;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                var valid27 = _errs100 === errors;
                                                                                                                                                if (!valid27) {
                                                                                                                                                    break;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            const err16 = { instancePath: instancePath + "/watchOptions/ignored", schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/0/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                                                                                                            if (vErrors === null) {
                                                                                                                                                vErrors = [err16];
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                vErrors.push(err16);
                                                                                                                                            }
                                                                                                                                            errors++;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    var _valid3 = _errs98 === errors;
                                                                                                                                    valid26 = valid26 || _valid3;
                                                                                                                                    if (!valid26) {
                                                                                                                                        const _errs102 = errors;
                                                                                                                                        if (!(data38 instanceof RegExp)) {
                                                                                                                                            const err17 = { instancePath: instancePath + "/watchOptions/ignored", schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/1/instanceof", keyword: "instanceof", params: {}, message: "must pass \"instanceof\" keyword validation" };
                                                                                                                                            if (vErrors === null) {
                                                                                                                                                vErrors = [err17];
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                vErrors.push(err17);
                                                                                                                                            }
                                                                                                                                            errors++;
                                                                                                                                        }
                                                                                                                                        var _valid3 = _errs102 === errors;
                                                                                                                                        valid26 = valid26 || _valid3;
                                                                                                                                        if (!valid26) {
                                                                                                                                            const _errs103 = errors;
                                                                                                                                            if (errors === _errs103) {
                                                                                                                                                if (typeof data38 === "string") {
                                                                                                                                                    if (data38.length < 1) {
                                                                                                                                                        const err18 = { instancePath: instancePath + "/watchOptions/ignored", schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/2/minLength", keyword: "minLength", params: {}, message: "must pass \"minLength\" keyword validation" };
                                                                                                                                                        if (vErrors === null) {
                                                                                                                                                            vErrors = [err18];
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            vErrors.push(err18);
                                                                                                                                                        }
                                                                                                                                                        errors++;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    const err19 = { instancePath: instancePath + "/watchOptions/ignored", schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf/2/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                                                                                    if (vErrors === null) {
                                                                                                                                                        vErrors = [err19];
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        vErrors.push(err19);
                                                                                                                                                    }
                                                                                                                                                    errors++;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            var _valid3 = _errs103 === errors;
                                                                                                                                            valid26 = valid26 || _valid3;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    if (!valid26) {
                                                                                                                                        const err20 = { instancePath: instancePath + "/watchOptions/ignored", schemaPath: "#/definitions/WatchOptions/properties/ignored/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                                                                                        if (vErrors === null) {
                                                                                                                                            vErrors = [err20];
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            vErrors.push(err20);
                                                                                                                                        }
                                                                                                                                        errors++;
                                                                                                                                        validate10.errors = vErrors;
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        errors = _errs97;
                                                                                                                                        if (vErrors !== null) {
                                                                                                                                            if (_errs97) {
                                                                                                                                                vErrors.length = _errs97;
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                vErrors = null;
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    var valid25 = _errs96 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid25 = true;
                                                                                                                                }
                                                                                                                                if (valid25) {
                                                                                                                                    if (data35.poll !== undefined) {
                                                                                                                                        let data40 = data35.poll;
                                                                                                                                        const _errs105 = errors;
                                                                                                                                        const _errs106 = errors;
                                                                                                                                        let valid28 = false;
                                                                                                                                        const _errs107 = errors;
                                                                                                                                        if (!(typeof data40 == "number")) {
                                                                                                                                            const err21 = { instancePath: instancePath + "/watchOptions/poll", schemaPath: "#/definitions/WatchOptions/properties/poll/anyOf/0/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                                                                                                            if (vErrors === null) {
                                                                                                                                                vErrors = [err21];
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                vErrors.push(err21);
                                                                                                                                            }
                                                                                                                                            errors++;
                                                                                                                                        }
                                                                                                                                        var _valid4 = _errs107 === errors;
                                                                                                                                        valid28 = valid28 || _valid4;
                                                                                                                                        if (!valid28) {
                                                                                                                                            const _errs109 = errors;
                                                                                                                                            if (typeof data40 !== "boolean") {
                                                                                                                                                const err22 = { instancePath: instancePath + "/watchOptions/poll", schemaPath: "#/definitions/WatchOptions/properties/poll/anyOf/1/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                                                                                                                if (vErrors === null) {
                                                                                                                                                    vErrors = [err22];
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    vErrors.push(err22);
                                                                                                                                                }
                                                                                                                                                errors++;
                                                                                                                                            }
                                                                                                                                            var _valid4 = _errs109 === errors;
                                                                                                                                            valid28 = valid28 || _valid4;
                                                                                                                                        }
                                                                                                                                        if (!valid28) {
                                                                                                                                            const err23 = { instancePath: instancePath + "/watchOptions/poll", schemaPath: "#/definitions/WatchOptions/properties/poll/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
                                                                                                                                            if (vErrors === null) {
                                                                                                                                                vErrors = [err23];
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                vErrors.push(err23);
                                                                                                                                            }
                                                                                                                                            errors++;
                                                                                                                                            validate10.errors = vErrors;
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            errors = _errs106;
                                                                                                                                            if (vErrors !== null) {
                                                                                                                                                if (_errs106) {
                                                                                                                                                    vErrors.length = _errs106;
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    vErrors = null;
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        var valid25 = _errs105 === errors;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        var valid25 = true;
                                                                                                                                    }
                                                                                                                                    if (valid25) {
                                                                                                                                        if (data35.stdin !== undefined) {
                                                                                                                                            const _errs111 = errors;
                                                                                                                                            if (typeof data35.stdin !== "boolean") {
                                                                                                                                                validate10.errors = [{ instancePath: instancePath + "/watchOptions/stdin", schemaPath: "#/definitions/WatchOptions/properties/stdin/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                            var valid25 = _errs111 === errors;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            var valid25 = true;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    validate10.errors = [{ instancePath: instancePath + "/watchOptions", schemaPath: "#/definitions/WatchOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                                                                                    return false;
                                                                                                                }
                                                                                                            }
                                                                                                            var valid0 = _errs88 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid0 = true;
                                                                                                        }
                                                                                                        if (valid0) {
                                                                                                            if (data.builtins !== undefined) {
                                                                                                                let data42 = data.builtins;
                                                                                                                const _errs113 = errors;
                                                                                                                if (errors === _errs113) {
                                                                                                                    if (data42 && typeof data42 == "object" && !Array.isArray(data42)) { }
                                                                                                                    else {
                                                                                                                        validate10.errors = [{ instancePath: instancePath + "/builtins", schemaPath: "#/properties/builtins/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                }
                                                                                                                var valid0 = _errs113 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid0 = true;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        validate10.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
        return false;
    }
} validate10.errors = vErrors; return errors === 0; }
//# sourceMappingURL=schema.check.js.map