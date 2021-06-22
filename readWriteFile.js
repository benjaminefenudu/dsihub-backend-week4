const fs = require('fs')

const content = './week5.txt'

fs.readFile(content, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log('Write to other file')
    fs.writeFileSync('week4b.txt', data);

    // Log output
    console.log(data)
})