"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveWebpackBrowser = exports.executeDevServerBuilder = void 0;
const architect_1 = require("@angular-devkit/architect");
const builder_1 = require("./builder");
Object.defineProperty(exports, "executeDevServerBuilder", { enumerable: true, get: function () { return builder_1.execute; } });
Object.defineProperty(exports, "serveWebpackBrowser", { enumerable: true, get: function () { return builder_1.execute; } });
exports.default = (0, architect_1.createBuilder)(builder_1.execute);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL3NyYy9idWlsZGVycy9kZXYtc2VydmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUVILHlEQUEwRDtBQUMxRCx1Q0FBb0M7QUFJaUMsd0dBSjVELGlCQUFPLE9BSTRFO0FBSXhFLG9HQVJYLGlCQUFPLE9BUXVCO0FBSHZDLGtCQUFlLElBQUEseUJBQWEsRUFBa0QsaUJBQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGNyZWF0ZUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvYXJjaGl0ZWN0JztcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2J1aWxkZXInO1xuaW1wb3J0IHsgU2NoZW1hIGFzIERldlNlcnZlckJ1aWxkZXJPcHRpb25zIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgRGV2U2VydmVyQnVpbGRlck91dHB1dCB9IGZyb20gJy4vd2VicGFjay1zZXJ2ZXInO1xuXG5leHBvcnQgeyBEZXZTZXJ2ZXJCdWlsZGVyT3B0aW9ucywgRGV2U2VydmVyQnVpbGRlck91dHB1dCwgZXhlY3V0ZSBhcyBleGVjdXRlRGV2U2VydmVyQnVpbGRlciB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnVpbGRlcjxEZXZTZXJ2ZXJCdWlsZGVyT3B0aW9ucywgRGV2U2VydmVyQnVpbGRlck91dHB1dD4oZXhlY3V0ZSk7XG5cbi8vIFRlbXBvcmFyeSBleHBvcnQgdG8gc3VwcG9ydCBzcGVjc1xuZXhwb3J0IHsgZXhlY3V0ZSBhcyBzZXJ2ZVdlYnBhY2tCcm93c2VyIH07XG4iXX0=