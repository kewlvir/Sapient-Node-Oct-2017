var path = require('path'),
	fs = require('fs');


var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1
}

module.exports = function(req, res){
	var resource = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
	if (isStatic(resource)){
		var resourcePath = path.join(__dirname, resource);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		//fs.createReadStream(resourcePath).pipe(res);
		var stream = fs.createReadStream(resourcePath);
		stream.on('data', function(chunk){
			console.log('[@serveStatic] data event triggered');
			res.write(chunk);
		});
		stream.on('end', function(){
			res.end();
		})
	}
}