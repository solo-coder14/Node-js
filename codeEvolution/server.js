const http = require('http');

http.createServer(function (req, res) {
    const data = {
        first: 55,
        second: 45
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}).listen(3000);