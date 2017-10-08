var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(req, res){
	var resource = req.url;
	if (fs.existsSync(resource)){
		res.write('<h1>The requested resource will be served!!</h1>');
		res.end();	
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

console.log('server listening on 8080!!');