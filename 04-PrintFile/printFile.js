var fs = require('fs');

fs.readFile('sample.txt', { encoding : 'utf8'}, function(err, contents){
	console.log(contents);	
	console.log('====================== Thats all folks!! ======================');
});
