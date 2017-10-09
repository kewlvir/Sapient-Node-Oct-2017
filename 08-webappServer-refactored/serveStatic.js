var path = require('path'),
	fs = require('fs');


var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.json'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1
}

module.exports = function(folderPath){
	return function(req, res, next){
		var resource = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
		if (isStatic(resource)){
			var resourcePath = path.join(folderPath, resource);
			if (!fs.existsSync(resourcePath)){
				res.statusCode = 404;
				res.end();
				return;
			}
			fs.createReadStream(resourcePath).pipe(res);		
		} else {
			next();
		}
	}
}