const fs = require("fs")
const data = require("./data.json")
const { age, date } = require("./utils")

exports.show = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id ==  id
  })

  if (!foundInstructor) {
    return res.send("Instructor not found!")
  }

  const instructor = {
    ...foundInstructor,
    birth: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    create_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.create_at),
  }

  return res.render("instructors/show", { instructor })
}

exports.post = function(req, res) { 
  const keys  = Object.keys(req.body)

  for ( key of keys) {
    if(req.body[key] == ""){
      return res.send("Please, Fill all fiels")
    }
  }

  let { avatar_url, birth, name, services, gender } = req.body

  birth = Date.parse(birth)
  const create_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    avatar_url,
    birth,
    create_at,
    id,
    gender,
    services,
    name
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) 
      return res.send("Write File error!")
    
      return res.redirect("/instructors")
    
  })
}

exports.edit = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id ==  id
  })

  if (!foundInstructor)  return res.send("Instructor not found!")
  
  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth)
  }

  return res.render("instructors/edit", {instructor})


}

