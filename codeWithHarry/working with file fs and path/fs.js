// const fs = require("fs")
//const fs = require("fs/promises");
// console.log(fs)

//for reading file
// console.log("starting")
// // fs.writeFileSync("ok I will do it.txt", "I am done") 
// fs.writeFile("newFile.txt", "ok i will do it", ()=> {
//     console.log("done");
//     fs.readFile("newFile.txt", (error, data)=>{
//         console.log(error, data.toString())
//     })
// })


// fs.appendFile("woafi.txt", "it is an append func",()=>{
//     console.log("done");
// })
// console.log("ending")

// fs.writeFile("woafi.txt", "this is a amazing work")
// fs.appendFile("woafi.txt", "this is a amazing work")

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);