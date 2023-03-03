var http = require('http');
var idx=0;
var html='<meta name="viewport" content="width=device-width, initial-scale=1.0"><hr>Request Number: ';
var html2='<hr>You appended the following information to the url:<p>';
http.createServer(function (req, res) {
 res.setHeader("content-type", "text/html");
 res.end(html+(idx++)+" : "+html2+req.url+"<hr>"); } ).listen(8080); 

