const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes")
const server = express();


server.listen(4003);

server.set("view engine", "njk");

server.use(express.static("public"));
server.use(routes)

nunjucks.configure("Views", {
  express:server,
  autoescape: false,
  watch: true,
  noCache: true,
})


