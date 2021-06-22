const fs = require('fs')

const folderName = './week-4a'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log('Folder created successfully!')
    }
} catch (err) {
    console.error(err);
}