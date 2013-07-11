var express = require('express');
var fs=require("fs");

//var buffer = new Buffer("hello");
var buffer = new Buffer(fs.readFileSync('index.html'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
