const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(err){
      console.log(err)
    }else{
      res.write(data)
    }
    res.end();
  });
}).listen(8080);