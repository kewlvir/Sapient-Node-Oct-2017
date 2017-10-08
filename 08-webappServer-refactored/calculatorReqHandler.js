var querystring = require('querystring'),
	calculator = require('./calculator');


module.exports = function(req, res){
	if (req.urlObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = querystring.parse(req.urlObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.urlObj.pathname === '/calculator' && req.method === 'POST'){
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
	}
}