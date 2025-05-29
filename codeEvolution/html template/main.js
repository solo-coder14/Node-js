const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    const name = "Woafi"
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let data = fs.readFileSync('./index.html', "utf-8");
    data = data.replace("{{name}}", name )
    res.end(data);
}).listen(8080);