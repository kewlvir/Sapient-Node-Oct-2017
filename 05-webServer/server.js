var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function(req, res){
	var resource = path.join(__dirname, (req.url === '/' ? '/index.html' : req.url));
	if (fs.existsSync(resource)){
		var stream = fs.createReadStream(resource);
		/*stream.on('data', function(chunk){
			res.write(chunk);
		});
		stream.on('end', function(){
			res.end();
		});*/
		stream.pipe(res);
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);

console.log('server listening on 8080!!');