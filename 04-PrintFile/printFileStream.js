var fs = require('fs');

var stream = fs.createReadStream('calculator.dat', { encoding : 'utf8'});

/* readableStream events -> open, data, close, end, error */

var readCount = 0;

stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('====================== Thats all folks!! ======================');
	console.log('readCount = ', readCount);
})

