//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error
const http = require("http")
let fs = require('fs')
let url = require('url')

http.createServer(function(req, res){
    let q = url.parse(req.url, true)
    let filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
    });
}).listen(port=3000, hostname= '127.0.0.1', () => {
    console.log(`Server running at http://${hostname}:${port}/summer.html`);
  });