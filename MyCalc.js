const validation = require('./validation');
const operations = require('./operations');

console.log(process.argv);
const inputArr = process.argv.splice(2);
console.log(inputArr);

const indexOfOperation = inputArr.findIndex((e) => e.startsWith('--'));
console.log(indexOfOperation);

const [oper] = inputArr.splice(indexOfOperation);
const operWithOutDash = oper.substring(2);
console.log(oper.substring(2));
console.log(inputArr);
console.log(Number('0'));

const numbers = validation(...inputArr);
console.log(numbers);


const mathematicalOperation = operations[operWithOutDash];
const result = mathematicalOperation(...numbers);

console.log(result);