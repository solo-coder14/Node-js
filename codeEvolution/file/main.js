const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const data = fs.readFileSync('demofile1.html');
    res.end(data);
}).listen(8080);