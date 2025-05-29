//for reading file
// var http = require('http');
var fs = require('fs'); //fs module

// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

//for creating files
/*
fs.appendFile()
fs.open()
fs.writeFile()
*/

// fs.writeFile('mynewfile1.txt', 'Hello Woafi!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//Delete Files
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
//rename
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });