// const { createServer } = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.write("Hello Woafi");
//   res.end(`Hello World`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.write("Hello World!");
  res.end();
}).listen(8080);

//http://localhost:8080/
//http://localhost:3000/
//http://127.0.0.1:8080/