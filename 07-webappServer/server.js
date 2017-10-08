var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1
}
var server = http.createServer(function(req, res){
	var reqObj = url.parse(req.url);
	var resource = reqObj.pathname === '/' ? '/index.html' : reqObj.pathname;
	
	if (isStatic(resource)){
		var resourcePath = path.join(__dirname, resource);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	} else if (reqObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = querystring.parse(reqObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (reqObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var reqData = querystring.parse(rawData);
			var op = reqData.op,
				n1 = parseInt(reqData.n1, 10),
				n2 = parseInt(reqData.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8080);

console.log('server listening on 8080!!');