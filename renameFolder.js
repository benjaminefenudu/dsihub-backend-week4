const fs = require('fs')


fs.rename('./week-4a', './week-4b', err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('The folder has been renamed.')
})
