// Writing Files

const fs = require('fs')

const content = ('./week4.txt', content, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})