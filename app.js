var http = require('http');
var idx=0;
http.createServer(function (req, res) { res.end((idx++)+" : "+req.url) } ).listen(80); 

