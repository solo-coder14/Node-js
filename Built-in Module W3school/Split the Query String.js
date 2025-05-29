let http = require(`http`)
let url = require(`url`)

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': `text/html`})
    let q = url.parse(req.url, true).query;
    let text = q.year + " " + q.month;
    res.end(text);
}).listen(port=3000, hostname= '127.0.0.1', () => {
      console.log(`Server running at http://${hostname}:${port}//?year=2017&month=July`);
    });

    //http://127.0.0.1:3000//?year=2017&month=July