// getting colors on the command lines
const colors = require('colors');  
// getting user input
const prompt = require('prompt');

const operationOptions = {
  add: '+',
  subtract: '-',
  divide: '/',
  multiply: '*',
  modulo: '%',
  exponents: "^",
}

//helper function to put greeting and choices on the command line for user
const greeting = () => {
  console.log("Welcome to JS calculator! Let's do some math! Please enter two numbers and an operation. \nchoices for operation are below:".blue);
  console.log("=======================================================");
  for(let key in operationOptions){
    console.log(key, "or", operationOptions[key]);
  };
  console.log("=======================================================");
}


// helper function to check if the numbers provided are valid
const checkNumber = (input) => {
  return (!isNaN(input.num1) && !isNaN(input.num2));
};


// helper function to check if the operation provided is valid
const checkOperation = (input) => {
  let operationArray = ["add", "+", "subtract", "-", "divide", "/", "multiply", "*", "modulo", "%", "^", "exponents" ]
  return (operationArray.includes(input.operation));
}

// helper function to doing the calculation
const calculation = (input) =>{
  if (checkNumber(input) && checkOperation(input)) {
    switch (input.operation){
    case "add":
    case "+":
      return (input.num1 + input.num2);
      break;
    case "subtract":
    case "-":
      return (input.num1 - input.num2);
      break;
    case "divide":
    case "/":
      if (input.num2 == 0){
        return ("Oops! You couldn't divide it by 0!")
      } else {
      return (input.num1 / input.num2);
      };
      break;
    case "multiply":
    case "*":
      return (input.num1 * input.num2);
      break;
    case "modulo":
    case "%":
      return (input.num1 % input.num2);
      break;
    case "exponents":
    case "^":
      return (Math.pow(input.num1,input.num2));
      break;
    }
  }
}

// helper function to do the math
const calculate = (input) => {
  let num1 = input.num1
  let num2 = input.num2
  if (checkNumber(input) && checkOperation(input)) {
    console.log(`Your calculation: ${num1} ${input.operation} ${num2} = ${calculation(input)}`.blue);
  } else if (!checkNumber(input)) {
    console.log("The number(s) you just entered might not be valid! Try again!".blue);
    getUserInput();
  } else if (!checkOperation(input)){
    console.log("The operation sign is not valid, double check and try again pleaseeeee!".blue);
    getUserInput();
  }
}

// helper function to get user input
const getUserInput = () => {
  prompt.start();
  // Get three properties from the user: num1, num2, operation
  prompt.get(['num1', 'num2', 'operation'], function (err, result) {
    console.log(`Got it! your first number is ${result.num1},  operation is ${result.operation}, second number is ${result.num2}`.blue);
    const userInput = {
      num1: parseInt(result.num1),
      num2: parseInt(result.num2),
      operation: result.operation.toLowerCase(),
    };
  calculate(userInput);
});
};

// main function to put all the user interface together.
const main = () => {
  greeting();
  getUserInput();
};

main();
