/**
 * nodejs entry point file
 */

var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.set(path.resolve(__dirname,'views'));

app.get('/', function(req, res){
	//res.send('Hello, Express');
	res.render('index');
});

//app.post();

app.listen(process.env.PORT || 1337);

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'content-type':'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('server running')