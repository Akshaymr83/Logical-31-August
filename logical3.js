

const prompt = require('prompt-sync')();

const number = prompt('Enter a number: ');

if(number < 1){
    console.log("there is no factorila");
    
}
else if(number == 0 ){
    console.log("factorial of 0 is 1");
}
else{
    let factorial = 1
    for(let i = 1 ; i<= number ;i++){
     
        factorial *= i;
    }
    console.log(factorial);
    
}