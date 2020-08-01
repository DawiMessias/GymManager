module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)
 
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth - birthDate.getMonth()
 
    if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
      age = age - 1
    }
 
    return age
  },
  date: function(timestamp) {
    const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = formatTimeUnit(date.getUTCMonth() + 1)
    const day = formatTimeUnit(date.getUTCDate())

    return `${year}-${month}-${day}`
  }
}