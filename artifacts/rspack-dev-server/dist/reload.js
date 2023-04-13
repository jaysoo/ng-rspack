"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reloadApp = void 0;
function reloadApp({ liveReload, hot }, status) {
    if (status.isUnloading) {
        return;
    }
    function applyReload(rootWindow, intervalId) {
        clearInterval(intervalId);
        console.log("App update, Reloading...");
        rootWindow.location.reload();
    }
    if (liveReload) {
        let rootWindow = self;
        const intervalId = self.setInterval(() => {
            if (rootWindow.location.protocol !== "about:") {
                applyReload(rootWindow, intervalId);
            }
        });
    }
}
exports.reloadApp = reloadApp;
//# sourceMappingURL=reload.js.map