"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_js_1 = __importDefault(require("webpack/hot/log.js"));
const socket_1 = __importDefault(require("./socket"));
const createSocketURL_1 = __importDefault(require("webpack-dev-server/client/utils/createSocketURL"));
const parseURL_1 = __importDefault(require("webpack-dev-server/client/utils/parseURL"));
// WARNING: reloadApp will import a instance of emitter from webpack/hot.
// If a different instance is referenced, it can cause hmr to fail
const reloadApp_1 = __importDefault(require("webpack-dev-server/client/utils/reloadApp"));
const sendMessage_1 = __importDefault(require("webpack-dev-server/client/utils/sendMessage"));
const stripAnsi_1 = __importDefault(require("webpack-dev-server/client/utils/stripAnsi"));
const overlay_1 = require("webpack-dev-server/client/overlay");
const log_1 = require("webpack-dev-server/client/utils/log");
const status = {
    isUnloading: false,
    currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : "",
    previousHash: undefined
};
const options = {
    hot: false,
    liveReload: false,
    progress: false,
    overlay: false,
    reconnect: 3,
    logging: false
};
const parsedResourceQuery = (0, parseURL_1.default)(__resourceQuery);
const enabledFeatures = {
    "Hot Module Replacement": false,
    "Live Reloading": false,
    Progress: false,
    Overlay: false
};
if (parsedResourceQuery.hot === "true") {
    options.hot = true;
    enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
    options.liveReload = true;
    enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
    options.progress = true;
    enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
    try {
        options.overlay = JSON.parse(parsedResourceQuery.overlay);
    }
    catch (e) {
        log_1.log.error("Error parsing overlay options from resource query:", e);
    }
    // Fill in default "true" params for partially-specified objects.
    if (typeof options.overlay === "object") {
        options.overlay = {
            errors: true,
            warnings: true,
            ...options.overlay
        };
    }
    enabledFeatures.Overlay = true;
}
if (parsedResourceQuery.logging) {
    options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
    options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */
function setAllLogLevel(level) {
    // This is needed because the HMR logger operate separately from dev server logger
    log_js_1.default.setLogLevel(level === "verbose" || level === "log" ? "info" : level);
    (0, log_1.setLogLevel)(level);
}
if (options.logging) {
    setAllLogLevel(options.logging);
}
(0, log_1.logEnabledFeatures)(enabledFeatures);
self.addEventListener("beforeunload", () => {
    status.isUnloading = true;
});
// TODO: change `options` by the result of `parsedResourceQuery`.
const onSocketMessage = {
    hot() {
        if (parsedResourceQuery.hot === "false") {
            return;
        }
        options.hot = true;
    },
    liveReload() {
        if (parsedResourceQuery["live-reload"] === "false") {
            return;
        }
        options.liveReload = true;
    },
    invalid() {
        log_1.log.info("App updated. Recompiling...");
        // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
        if (options.overlay) {
            (0, overlay_1.hide)();
        }
        (0, sendMessage_1.default)("Invalid");
    },
    /**
     * @param {string} hash
     */
    hash(hash) {
        status.previousHash = status.currentHash;
        status.currentHash = hash;
    },
    logging: setAllLogLevel,
    /**
     * @param {boolean} value
     */
    overlay(value) {
        if (typeof document === "undefined") {
            return;
        }
        options.overlay = value;
    },
    /**
     * @param {number} value
     */
    reconnect(value) {
        if (parsedResourceQuery.reconnect === "false") {
            return;
        }
        options.reconnect = value;
    },
    /**
     * @param {boolean} value
     */
    progress(value) {
        options.progress = value;
    },
    /**
     * @param {{ pluginName?: string, percent: number, msg: string }} data
     */
    "progress-update": function progressUpdate(data) {
        if (options.progress) {
            log_1.log.info(`${data.pluginName ? `[${data.pluginName}] ` : ""}${data.percent}% - ${data.msg}.`);
        }
        (0, sendMessage_1.default)("Progress", data);
    },
    "still-ok": function stillOk() {
        log_1.log.info("Nothing changed.");
        if (options.overlay) {
            (0, overlay_1.hide)();
        }
        (0, sendMessage_1.default)("StillOk");
    },
    ok() {
        (0, sendMessage_1.default)("Ok");
        if (options.overlay) {
            (0, overlay_1.hide)();
        }
        (0, reloadApp_1.default)(options, status);
    },
    // TODO: remove in v5 in favor of 'static-changed'
    /**
     * @param {string} file
     */
    "content-changed": function contentChanged(file) {
        log_1.log.info(`${file ? `"${file}"` : "Content"} from static directory was changed. Reloading...`);
        self.location.reload();
    },
    /**
     * @param {string} file
     */
    "static-changed": function staticChanged(file) {
        log_1.log.info(`${file ? `"${file}"` : "Content"} from static directory was changed. Reloading...`);
        self.location.reload();
    },
    /**
     * @param {Error[]} warnings
     * @param {any} params
     */
    warnings(warnings, params) {
        log_1.log.warn("Warnings while compiling.");
        const printableWarnings = warnings.map(error => {
            const { header, body } = (0, overlay_1.formatProblem)("warning", error);
            return `${header}\n${(0, stripAnsi_1.default)(body)}`;
        });
        (0, sendMessage_1.default)("Warnings", printableWarnings);
        for (let i = 0; i < printableWarnings.length; i++) {
            log_1.log.warn(printableWarnings[i]);
        }
        const needShowOverlayForWarnings = typeof options.overlay === "boolean"
            ? options.overlay
            : options.overlay && options.overlay.warnings;
        if (needShowOverlayForWarnings) {
            const trustedTypesPolicyName = typeof options.overlay === "object" &&
                options.overlay.trustedTypesPolicyName;
            (0, overlay_1.show)("warning", warnings, trustedTypesPolicyName || null);
        }
        if (params && params.preventReloading) {
            return;
        }
        (0, reloadApp_1.default)(options, status);
    },
    /**
     * @param {Error[]} errors
     */
    errors(errors) {
        log_1.log.error("Errors while compiling. Reload prevented.");
        const printableErrors = errors.map(error => {
            const { header, body } = (0, overlay_1.formatProblem)("error", error);
            return `${header}\n${(0, stripAnsi_1.default)(body)}`;
        });
        (0, sendMessage_1.default)("Errors", printableErrors);
        for (let i = 0; i < printableErrors.length; i++) {
            log_1.log.error(printableErrors[i]);
        }
        const needShowOverlayForErrors = typeof options.overlay === "boolean"
            ? options.overlay
            : options.overlay && options.overlay.errors;
        if (needShowOverlayForErrors) {
            const trustedTypesPolicyName = typeof options.overlay === "object" &&
                options.overlay.trustedTypesPolicyName;
            (0, overlay_1.show)("error", errors, trustedTypesPolicyName || null);
        }
    },
    error(error) {
        log_1.log.error(error);
    },
    close() {
        log_1.log.info("Disconnected!");
        if (options.overlay) {
            (0, overlay_1.hide)();
        }
        (0, sendMessage_1.default)("Close");
    }
};
const socketURL = (0, createSocketURL_1.default)(parsedResourceQuery);
(0, socket_1.default)(socketURL, onSocketMessage);
//# sourceMappingURL=index.js.map