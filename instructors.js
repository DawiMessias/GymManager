const fs = require("fs")
const data = require("./data.json")

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for(key of keys) {
    if ( req.body[key] == "")
      return res.send("Please, fill all fields")
  }

  let { avatar_url, birth, name, gender } = req.body

  birth = Date.parse(req.body.birth)
  const create_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    id,
    avatar_url,
    birth,
    create_at,
    name,
    gender
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) 
      return res.send("Write File error!")
    
      return res.redirect("/instructors")
    
  })
  // return res.send(req.body)
}