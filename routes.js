const express = require("express")

const routes = express.Router()

routes.get("/instructors", function(req, res) {
    return res.render("instructors/index")
})

routes.get("/instructors/create", function(req, res) {
    return res.render("instructors/create")
})

routes.post("/instructors", function(req, res) {
    return res.send("Recebido")
})

routes.get("/members", function(req, res) {
    return res.send("OKEI =P ")
})


module.exports = routes