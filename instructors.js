exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
        if ( req.body[keys] == "")
            return res.send("Please, fill all fields")
  }
  return res.send(req.body)
}