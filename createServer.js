const http = require('http');

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});