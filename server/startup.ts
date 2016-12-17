import * as ServeStatic from "serve-static";
import * as Express from "express";
import * as Path from "path";

// create server
const server: Express.Express = Express();

// serve up public folder
server.use(ServeStatic("public", { index: ["index.html"] }));

// serve up index as fallback for SPA
server.get("*", (req, res) => {
    res.sendFile("/index.html", { root: Path.join(__dirname, "../public") });
});

// listen
const portNumber: number = 3000;
server.listen(portNumber);
console.log("serving at port", portNumber);