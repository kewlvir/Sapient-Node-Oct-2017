var fs = require('fs');

var contents = fs.readFileSync('sample.txt', { encoding : 'utf8'});
console.log(contents);
console.log('====================== Thats all folks!! ======================');