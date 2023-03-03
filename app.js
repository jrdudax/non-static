var http = require('http');
var idx=0;
var html='<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n';
var html2='You appended the following informationt to the url: ';
http.createServer(function (req, res) {
 res.setHeader("content-type", "text/html");
 res.end(html+(idx++)+" : "+html2+req.url); } ).listen(8080); 

