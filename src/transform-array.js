// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(/* arr */) {
//   throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// };


let str = 'Zasderf';
let arr = str.split('');

arr.map((letter, i) => {
  console.log(letter.toUpperCase() + letter.toLocaleLowerCase().repeat(i));
});