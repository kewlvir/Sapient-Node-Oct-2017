
var n1 = 100,
	n2 = 20;
var calculator = require('./calculator');
console.log('[@calculatorClient.js] -> ', calculator);

console.log(calculator.add(n1, n2));
console.log(calculator.subtract(n1, n2));
console.log(calculator.multiply(n1, n2));
console.log(calculator.divide(n1, n2));