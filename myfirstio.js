var fs = require('fs')
var filecontents = fs.readFileSync(process.argv[2])
var lines = filecontents.toString().split('\n').length - 1
console.log(lines)
