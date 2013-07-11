
var express = require('express');
var fs=require("fs");

//fs.readFileSync("index.html")
//var buffer = new Buffer("hello");
var buffer = new Buffer(fs.readFileSync('index.html'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
  response.send(buffer.toString());
});


// var http = require('http');
// http.createServer(function (req, res) {
//   //res.writeHead(200, {'Content-Type': 'text/plain'});
//   //res.end('Hello World\n');
// }).listen(8124, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:8124/');


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

