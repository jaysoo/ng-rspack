"use strict";
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/logging/Logger.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogType = void 0;
exports.LogType = Object.freeze({
    error: /** @type {"error"} */ "error",
    warn: /** @type {"warn"} */ "warn",
    info: /** @type {"info"} */ "info",
    log: /** @type {"log"} */ "log",
    debug: /** @type {"debug"} */ "debug",
    trace: /** @type {"trace"} */ "trace",
    group: /** @type {"group"} */ "group",
    groupCollapsed: /** @type {"groupCollapsed"} */ "groupCollapsed",
    groupEnd: /** @type {"groupEnd"} */ "groupEnd",
    profile: /** @type {"profile"} */ "profile",
    profileEnd: /** @type {"profileEnd"} */ "profileEnd",
    time: /** @type {"time"} */ "time",
    clear: /** @type {"clear"} */ "clear",
    status: /** @type {"status"} */ "status" // message, arguments
});
const LOG_SYMBOL = Symbol("webpack logger raw log method");
const TIMERS_SYMBOL = Symbol("webpack logger times");
const TIMERS_AGGREGATES_SYMBOL = Symbol("webpack logger aggregated times");
class Logger {
    constructor(log, getChildLogger) {
        this[LOG_SYMBOL] = log;
        this.getChildLogger = getChildLogger;
    }
    error(...args) {
        this[LOG_SYMBOL](exports.LogType.error, args);
    }
    warn(...args) {
        this[LOG_SYMBOL](exports.LogType.warn, args);
    }
    info(...args) {
        this[LOG_SYMBOL](exports.LogType.info, args);
    }
    log(...args) {
        this[LOG_SYMBOL](exports.LogType.log, args);
    }
    debug(...args) {
        this[LOG_SYMBOL](exports.LogType.debug, args);
    }
    assert(assertion, ...args) {
        if (!assertion) {
            this[LOG_SYMBOL](exports.LogType.error, args);
        }
    }
    trace() {
        this[LOG_SYMBOL](exports.LogType.trace, ["Trace"]);
    }
    clear() {
        this[LOG_SYMBOL](exports.LogType.clear);
    }
    status(...args) {
        this[LOG_SYMBOL](exports.LogType.status, args);
    }
    group(...args) {
        this[LOG_SYMBOL](exports.LogType.group, args);
    }
    groupCollapsed(...args) {
        this[LOG_SYMBOL](exports.LogType.groupCollapsed, args);
    }
    groupEnd(...args) {
        this[LOG_SYMBOL](exports.LogType.groupEnd, args);
    }
    profile(label) {
        this[LOG_SYMBOL](exports.LogType.profile, [label]);
    }
    profileEnd(label) {
        this[LOG_SYMBOL](exports.LogType.profileEnd, [label]);
    }
    time(label) {
        this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
        this[TIMERS_SYMBOL].set(label, process.hrtime());
    }
    timeLog(label) {
        const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
        if (!prev) {
            throw new Error(`No such label '${label}' for WebpackLogger.timeLog()`);
        }
        const time = process.hrtime(prev);
        this[LOG_SYMBOL](exports.LogType.time, [label, ...time]);
    }
    timeEnd(label) {
        const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
        if (!prev) {
            throw new Error(`No such label '${label}' for WebpackLogger.timeEnd()`);
        }
        const time = process.hrtime(prev);
        this[TIMERS_SYMBOL].delete(label);
        this[LOG_SYMBOL](exports.LogType.time, [label, ...time]);
    }
    timeAggregate(label) {
        const prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
        if (!prev) {
            throw new Error(`No such label '${label}' for WebpackLogger.timeAggregate()`);
        }
        const time = process.hrtime(prev);
        this[TIMERS_SYMBOL].delete(label);
        this[TIMERS_AGGREGATES_SYMBOL] =
            this[TIMERS_AGGREGATES_SYMBOL] || new Map();
        const current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
        if (current !== undefined) {
            if (time[1] + current[1] > 1e9) {
                time[0] += current[0] + 1;
                time[1] = time[1] - 1e9 + current[1];
            }
            else {
                time[0] += current[0];
                time[1] += current[1];
            }
        }
        this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }
    timeAggregateEnd(label) {
        if (this[TIMERS_AGGREGATES_SYMBOL] === undefined)
            return;
        const time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
        if (time === undefined)
            return;
        this[TIMERS_AGGREGATES_SYMBOL].delete(label);
        this[LOG_SYMBOL](exports.LogType.time, [label, ...time]);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map