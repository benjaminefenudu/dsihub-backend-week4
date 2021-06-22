const fs = require('fs')

dir = './create-delete'
fs.rmdir(dir, {recursive: true}, (err) => {
    if (err) {
        throw err;
    }
    console.log(`${dir} is deleted!`)
})