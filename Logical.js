const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');

if (number < 1) {
  console.log("There is no factorial.");
} else if (number == 0) {
  console.log("Factorial is 1");
} else {

  let calculation = '';
  for (let i = number; i >= 1; i--) {
 
    calculation += i + ' × ';
  }
  
  console.log(calculation );
} 


