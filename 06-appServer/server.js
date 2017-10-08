var http = require('http'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var server = http.createServer(function(req, res){
	var reqObj = url.parse(req.url);
	if (reqObj.pathname === '/calculator'){
		var reqData = querystring.parse(reqObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log('server running on 8080!!');