const FS = require('fs')
const OS = require('os')

const filePath = process.argv[2]

let countLines = (input) => input.split(OS.EOL).length - 1

FS.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err

    console.log(countLines(data))
})
