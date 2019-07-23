var liveServer = require("live-server");
 
var params = {
    root: "public", // Set root directory that's being served. Defaults to cwd.
    open: false,
    wait: 500, // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);