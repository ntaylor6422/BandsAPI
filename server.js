const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();
app.use(serveStatic(path.join(_dirname, "frontend")));

const port = process.env.PORT || 4000;

app.listen(port);
