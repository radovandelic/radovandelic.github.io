const http = require("http");
const express = require("express");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");

const app = express();
const ip = process.env.IP || "0.0.0.0";
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "production";

app.use(compression());
app.use(morgan("dev"));
app.use(morgan(" - :date[clf] - :remote-addr"));
app.use(express.static("build"));
app.use(express.static("../cookwork-admin/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const server = http.createServer(app);

setImmediate(() => {
    server.listen(port, ip, () => {
        console.log("Express server listening on http://%s:%d, in %s mode", ip, port, env);
    });
});

module.exports = app;