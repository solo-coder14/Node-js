var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(port=3000, hostname= '127.0.0.1', () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });