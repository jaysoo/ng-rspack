/// <reference types="node" />
/// <reference types="node" />
/**
 * The following code is modified based on
 * https://github.com/webpack/webpack-dev-server/blob/b0f15ace0123c125d5870609ef4691c141a6d187/lib/Server.js
 *
 * MIT Licensed
 * Author Tobias Koppers @sokra
 * Copyright (c) JS Foundation and other contributors
 * https://github.com/webpack/webpack-dev-server/blob/b0f15ace0123c125d5870609ef4691c141a6d187/LICENSE
 */
import { Compiler, MultiCompiler } from "@rspack/core";
import type { Socket } from "net";
import type { FSWatcher } from "chokidar";
import type { Server } from "http";
import WebpackDevServer from "webpack-dev-server";
import type { ResolvedDevServer, DevServer } from "./config";
export declare class RspackDevServer extends WebpackDevServer {
    /**
     * resolved after `normalizedOptions`
     */
    options: ResolvedDevServer;
    staticWatchers: FSWatcher[];
    sockets: Socket[];
    server: Server;
    compiler: Compiler | MultiCompiler;
    webSocketServer: WebpackDevServer.WebSocketServerImplementation | undefined;
    constructor(options: DevServer, compiler: Compiler | MultiCompiler);
    addAdditionEntires(compiler: Compiler): void;
    getClientTransport(): string;
    initialize(): Promise<void>;
    private setupDevMiddleware;
    private setupMiddlewares;
}
//# sourceMappingURL=server.d.ts.map