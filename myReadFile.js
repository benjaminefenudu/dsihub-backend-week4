const fs = require('fs')

var myReadFile = fs.readFile('./week5.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

exports.myReadFile = myReadFile