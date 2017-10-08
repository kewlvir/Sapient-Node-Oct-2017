var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');


app.use(dataParser);
app.use(serveStatic);
app.use(calculatorReqHandler);
app.use(notFoundHandler);

var server = http.createServer(function(req, res){
	app(req, res);
});

server.listen(8080);

console.log('server listening on 8080!!');