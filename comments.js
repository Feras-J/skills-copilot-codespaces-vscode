// Create web server
// Create a web server that listens for requests on port 3000.
// When a request is received, the server will respond with the contents of the comments.json file.
// If the comments.json file does not exist, the server should respond with a 404 status code and an error message.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});