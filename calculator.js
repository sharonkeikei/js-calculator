// getting colors on the command lines
const colors = require('colors');  
// getting user input
const prompt = require('prompt');

const exampleAdditionInput = {
  num1: 50,
  num2: 5,
  operation: "%",
}

// helper function to check if the numbers provided are valid
const checkNumber = (input) => {
  return (!isNaN(input.num1) && !isNaN(input.num2))
};

// helper function to check if the operation provided is valid
const checkOperation = (input) => {
  let operationArray = ["add","+", "subtract", "-", "divide", "/", "multiply", "*", "%", "modulo"]
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
    }
  }
}

//
const calculate = (input) => {
  let num1 = input.num1
  let num2 = input.num2
  if (checkNumber(input) && checkOperation(input)) {
    console.log(`Your calculation: ${num1} ${input.operation} ${num2} = ${calculation(input)}`.blue);
  } else if (!checkNumber(input)) {
    console.log("The number(s) you just entered might not be valid! Check again!".blue);
  } else if (!checkOperation(input)){
    console.log("The operation sign is not valid, double check againg pleaseeeee!".blue);
  }
}


prompt.start();
// Get three properties from the user: num1, num2, operation

prompt.get(['num1', 'num2', 'operation'], function (err, result) {
  console.log(result.num1, result.num2, result.operation);
  const userInput = {
    num1: result.num1,
    num2: result.num2,
    operation: result.operation,
  };
  console.log(userInput)
  calculate(userInput);
});


//console.log(calculate(exampleAdditionInput));
//console.log(checkNumber(exampleAdditionInput));
//console.log(checkOperation(exampleAdditionInput));
//console.log(calculation(exampleAdditionInput));
//calculate(exampleAdditionInput);