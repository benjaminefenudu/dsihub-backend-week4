// Writing Files

const fs = require('fs')

const content = 'This is week 5!'

var myWriteFile = fs.writeFile('./week5.txt', content, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully!')
})

exports.myWriteFile = myWriteFile