var http = require('http');

// create a server object:
http.createServer((req, res) => {
    // add an HTTP Header
    res.writeHead(200, {'Content-Type': 'text/html'});  // status code 200 means OK
    res.write('Hello World!');  // write a response to the client
    // res.write(req.url);      // read the query string
    res.end();                  // end the response
}).listen(8080);                // the server object listens on port 8080


