const fs = require("fs")

const file = fs.readFileSync("4-write-to-file.md").toString().split("\n")

fs.appendFileSync("4-write-to-file.md", "\n\nhello\nnew\nstring\nappended\nto this file.")