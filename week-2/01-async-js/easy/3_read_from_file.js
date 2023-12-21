const fs = require("fs")

let file = fs.readFileSync("3-read-from-file.md")
console.log(file.toString())