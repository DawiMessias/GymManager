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

server.get("/", function(req, res) {
  
  return res.render("home",)
})

server.get("/courses", function(req, res) {
  return res.render("courses", {items: content })
})

server.get("/about", function(req, res) {
  const sobre = {
    link: [
      { github: "Github", url: "https://github.com/Rocketseat"},
      { github: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
      { github: "Facebook", url: "https://pt-br.facebook.com/rocketseat/"},
    ]
  }

  return res.render("about", { sobre })
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  const contents = content.find(function(contents){
    return  content.id == id
  })

  if ( !contents ) {
    return res.render("not-found")
  }

  return res.render("courseId", { items: content })
})

server.get("/video" , function(req, res) {
  const id = req.query.id

  const contents = content.find(function(contents){
    if ( contents.id == id) {
      return true
    }
  })

  if ( !contents ) {
    return res.render("not-found")
  }

  return res.render("courseId", { items: content })

})

