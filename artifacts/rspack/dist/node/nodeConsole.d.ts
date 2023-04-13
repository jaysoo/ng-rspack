/**
 * The following code is modified based on
 * https://github.com/webpack/webpack/blob/4b4ca3b/lib/node/nodeConsole.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack/blob/main/LICENSE
 */
declare const _default: ({ colors, appendOnly, stream }: {
    colors: any;
    appendOnly: any;
    stream: any;
}) => {
    log: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    logTime: (...args: any[]) => void;
    group: (...args: any[]) => void;
    groupCollapsed: (...args: any[]) => void;
    groupEnd: () => void;
    profile: (name: any) => void;
    profileEnd: (name: any) => void;
    clear: false | (() => void);
    status: (...args: any[]) => void;
};
export = _default;
//# sourceMappingURL=nodeConsole.d.ts.map