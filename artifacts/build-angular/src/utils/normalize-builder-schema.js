"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeBrowserSchema = void 0;
const normalize_asset_patterns_1 = require("./normalize-asset-patterns");
const normalize_cache_1 = require("./normalize-cache");
const normalize_file_replacements_1 = require("./normalize-file-replacements");
const normalize_optimization_1 = require("./normalize-optimization");
const normalize_polyfills_1 = require("./normalize-polyfills");
const normalize_source_maps_1 = require("./normalize-source-maps");
const supported_browsers_1 = require("./supported-browsers");
function normalizeBrowserSchema(workspaceRoot, projectRoot, projectSourceRoot, options, metadata, logger) {
    return {
        ...options,
        cache: (0, normalize_cache_1.normalizeCacheOptions)(metadata, workspaceRoot),
        assets: (0, normalize_asset_patterns_1.normalizeAssetPatterns)(options.assets || [], workspaceRoot, projectRoot, projectSourceRoot),
        fileReplacements: (0, normalize_file_replacements_1.normalizeFileReplacements)(options.fileReplacements || [], workspaceRoot),
        optimization: (0, normalize_optimization_1.normalizeOptimization)(options.optimization),
        sourceMap: (0, normalize_source_maps_1.normalizeSourceMaps)(options.sourceMap || false),
        polyfills: (0, normalize_polyfills_1.normalizePolyfills)(options.polyfills, workspaceRoot),
        preserveSymlinks: options.preserveSymlinks === undefined
            ? process.execArgv.includes('--preserve-symlinks')
            : options.preserveSymlinks,
        statsJson: options.statsJson || false,
        budgets: options.budgets || [],
        scripts: options.scripts || [],
        styles: options.styles || [],
        stylePreprocessorOptions: {
            includePaths: (options.stylePreprocessorOptions && options.stylePreprocessorOptions.includePaths) || [],
        },
        // Using just `--poll` will result in a value of 0 which is very likely not the intention
        // A value of 0 is falsy and will disable polling rather then enable
        // 500 ms is a sensible default in this case
        poll: options.poll === 0 ? 500 : options.poll,
        supportedBrowsers: (0, supported_browsers_1.getSupportedBrowsers)(projectRoot, logger),
    };
}
exports.normalizeBrowserSchema = normalizeBrowserSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLWJ1aWxkZXItc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhcl9kZXZraXQvYnVpbGRfYW5ndWxhci9zcmMvdXRpbHMvbm9ybWFsaXplLWJ1aWxkZXItc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQVNILHlFQUFvRTtBQUNwRSx1REFBMEQ7QUFDMUQsK0VBR3VDO0FBQ3ZDLHFFQUFnRztBQUNoRywrREFBMkQ7QUFDM0QsbUVBQThEO0FBQzlELDZEQUE0RDtBQWM1RCxTQUFnQixzQkFBc0IsQ0FDcEMsYUFBcUIsRUFDckIsV0FBbUIsRUFDbkIsaUJBQXFDLEVBQ3JDLE9BQTZCLEVBQzdCLFFBQXlCLEVBQ3pCLE1BQXlCO0lBRXpCLE9BQU87UUFDTCxHQUFHLE9BQU87UUFDVixLQUFLLEVBQUUsSUFBQSx1Q0FBcUIsRUFBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO1FBQ3JELE1BQU0sRUFBRSxJQUFBLGlEQUFzQixFQUM1QixPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFDcEIsYUFBYSxFQUNiLFdBQVcsRUFDWCxpQkFBaUIsQ0FDbEI7UUFDRCxnQkFBZ0IsRUFBRSxJQUFBLHVEQUF5QixFQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUUsYUFBYSxDQUFDO1FBQzFGLFlBQVksRUFBRSxJQUFBLDhDQUFxQixFQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekQsU0FBUyxFQUFFLElBQUEsMkNBQW1CLEVBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDMUQsU0FBUyxFQUFFLElBQUEsd0NBQWtCLEVBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7UUFDL0QsZ0JBQWdCLEVBQ2QsT0FBTyxDQUFDLGdCQUFnQixLQUFLLFNBQVM7WUFDcEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xELENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCO1FBQzlCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUs7UUFDckMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRTtRQUM5QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO1FBQzlCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7UUFDNUIsd0JBQXdCLEVBQUU7WUFDeEIsWUFBWSxFQUNWLENBQUMsT0FBTyxDQUFDLHdCQUF3QixJQUFJLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO1NBQzVGO1FBQ0QseUZBQXlGO1FBQ3pGLG9FQUFvRTtRQUNwRSw0Q0FBNEM7UUFDNUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQzdDLGlCQUFpQixFQUFFLElBQUEseUNBQW9CLEVBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztLQUM3RCxDQUFDO0FBQ0osQ0FBQztBQXZDRCx3REF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsganNvbiwgbG9nZ2luZyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7XG4gIEFzc2V0UGF0dGVybkNsYXNzLFxuICBTY2hlbWEgYXMgQnJvd3NlckJ1aWxkZXJTY2hlbWEsXG4gIFNvdXJjZU1hcENsYXNzLFxufSBmcm9tICcuLi9idWlsZGVycy9icm93c2VyL3NjaGVtYSc7XG5pbXBvcnQgeyBCdWlsZE9wdGlvbnMgfSBmcm9tICcuL2J1aWxkLW9wdGlvbnMnO1xuaW1wb3J0IHsgbm9ybWFsaXplQXNzZXRQYXR0ZXJucyB9IGZyb20gJy4vbm9ybWFsaXplLWFzc2V0LXBhdHRlcm5zJztcbmltcG9ydCB7IG5vcm1hbGl6ZUNhY2hlT3B0aW9ucyB9IGZyb20gJy4vbm9ybWFsaXplLWNhY2hlJztcbmltcG9ydCB7XG4gIE5vcm1hbGl6ZWRGaWxlUmVwbGFjZW1lbnQsXG4gIG5vcm1hbGl6ZUZpbGVSZXBsYWNlbWVudHMsXG59IGZyb20gJy4vbm9ybWFsaXplLWZpbGUtcmVwbGFjZW1lbnRzJztcbmltcG9ydCB7IE5vcm1hbGl6ZWRPcHRpbWl6YXRpb25PcHRpb25zLCBub3JtYWxpemVPcHRpbWl6YXRpb24gfSBmcm9tICcuL25vcm1hbGl6ZS1vcHRpbWl6YXRpb24nO1xuaW1wb3J0IHsgbm9ybWFsaXplUG9seWZpbGxzIH0gZnJvbSAnLi9ub3JtYWxpemUtcG9seWZpbGxzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVNvdXJjZU1hcHMgfSBmcm9tICcuL25vcm1hbGl6ZS1zb3VyY2UtbWFwcyc7XG5pbXBvcnQgeyBnZXRTdXBwb3J0ZWRCcm93c2VycyB9IGZyb20gJy4vc3VwcG9ydGVkLWJyb3dzZXJzJztcblxuLyoqXG4gKiBBIG5vcm1hbGl6ZWQgYnJvd3NlciBidWlsZGVyIHNjaGVtYS5cbiAqL1xuZXhwb3J0IHR5cGUgTm9ybWFsaXplZEJyb3dzZXJCdWlsZGVyU2NoZW1hID0gQnJvd3NlckJ1aWxkZXJTY2hlbWEgJlxuICBCdWlsZE9wdGlvbnMgJiB7XG4gICAgc291cmNlTWFwOiBTb3VyY2VNYXBDbGFzcztcbiAgICBhc3NldHM6IEFzc2V0UGF0dGVybkNsYXNzW107XG4gICAgZmlsZVJlcGxhY2VtZW50czogTm9ybWFsaXplZEZpbGVSZXBsYWNlbWVudFtdO1xuICAgIG9wdGltaXphdGlvbjogTm9ybWFsaXplZE9wdGltaXphdGlvbk9wdGlvbnM7XG4gICAgcG9seWZpbGxzOiBzdHJpbmdbXTtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUJyb3dzZXJTY2hlbWEoXG4gIHdvcmtzcGFjZVJvb3Q6IHN0cmluZyxcbiAgcHJvamVjdFJvb3Q6IHN0cmluZyxcbiAgcHJvamVjdFNvdXJjZVJvb3Q6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgb3B0aW9uczogQnJvd3NlckJ1aWxkZXJTY2hlbWEsXG4gIG1ldGFkYXRhOiBqc29uLkpzb25PYmplY3QsXG4gIGxvZ2dlcjogbG9nZ2luZy5Mb2dnZXJBcGksXG4pOiBOb3JtYWxpemVkQnJvd3NlckJ1aWxkZXJTY2hlbWEge1xuICByZXR1cm4ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgY2FjaGU6IG5vcm1hbGl6ZUNhY2hlT3B0aW9ucyhtZXRhZGF0YSwgd29ya3NwYWNlUm9vdCksXG4gICAgYXNzZXRzOiBub3JtYWxpemVBc3NldFBhdHRlcm5zKFxuICAgICAgb3B0aW9ucy5hc3NldHMgfHwgW10sXG4gICAgICB3b3Jrc3BhY2VSb290LFxuICAgICAgcHJvamVjdFJvb3QsXG4gICAgICBwcm9qZWN0U291cmNlUm9vdCxcbiAgICApLFxuICAgIGZpbGVSZXBsYWNlbWVudHM6IG5vcm1hbGl6ZUZpbGVSZXBsYWNlbWVudHMob3B0aW9ucy5maWxlUmVwbGFjZW1lbnRzIHx8IFtdLCB3b3Jrc3BhY2VSb290KSxcbiAgICBvcHRpbWl6YXRpb246IG5vcm1hbGl6ZU9wdGltaXphdGlvbihvcHRpb25zLm9wdGltaXphdGlvbiksXG4gICAgc291cmNlTWFwOiBub3JtYWxpemVTb3VyY2VNYXBzKG9wdGlvbnMuc291cmNlTWFwIHx8IGZhbHNlKSxcbiAgICBwb2x5ZmlsbHM6IG5vcm1hbGl6ZVBvbHlmaWxscyhvcHRpb25zLnBvbHlmaWxscywgd29ya3NwYWNlUm9vdCksXG4gICAgcHJlc2VydmVTeW1saW5rczpcbiAgICAgIG9wdGlvbnMucHJlc2VydmVTeW1saW5rcyA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gcHJvY2Vzcy5leGVjQXJndi5pbmNsdWRlcygnLS1wcmVzZXJ2ZS1zeW1saW5rcycpXG4gICAgICAgIDogb3B0aW9ucy5wcmVzZXJ2ZVN5bWxpbmtzLFxuICAgIHN0YXRzSnNvbjogb3B0aW9ucy5zdGF0c0pzb24gfHwgZmFsc2UsXG4gICAgYnVkZ2V0czogb3B0aW9ucy5idWRnZXRzIHx8IFtdLFxuICAgIHNjcmlwdHM6IG9wdGlvbnMuc2NyaXB0cyB8fCBbXSxcbiAgICBzdHlsZXM6IG9wdGlvbnMuc3R5bGVzIHx8IFtdLFxuICAgIHN0eWxlUHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgaW5jbHVkZVBhdGhzOlxuICAgICAgICAob3B0aW9ucy5zdHlsZVByZXByb2Nlc3Nvck9wdGlvbnMgJiYgb3B0aW9ucy5zdHlsZVByZXByb2Nlc3Nvck9wdGlvbnMuaW5jbHVkZVBhdGhzKSB8fCBbXSxcbiAgICB9LFxuICAgIC8vIFVzaW5nIGp1c3QgYC0tcG9sbGAgd2lsbCByZXN1bHQgaW4gYSB2YWx1ZSBvZiAwIHdoaWNoIGlzIHZlcnkgbGlrZWx5IG5vdCB0aGUgaW50ZW50aW9uXG4gICAgLy8gQSB2YWx1ZSBvZiAwIGlzIGZhbHN5IGFuZCB3aWxsIGRpc2FibGUgcG9sbGluZyByYXRoZXIgdGhlbiBlbmFibGVcbiAgICAvLyA1MDAgbXMgaXMgYSBzZW5zaWJsZSBkZWZhdWx0IGluIHRoaXMgY2FzZVxuICAgIHBvbGw6IG9wdGlvbnMucG9sbCA9PT0gMCA/IDUwMCA6IG9wdGlvbnMucG9sbCxcbiAgICBzdXBwb3J0ZWRCcm93c2VyczogZ2V0U3VwcG9ydGVkQnJvd3NlcnMocHJvamVjdFJvb3QsIGxvZ2dlciksXG4gIH07XG59XG4iXX0=