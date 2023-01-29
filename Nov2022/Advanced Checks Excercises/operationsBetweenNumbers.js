function opBtwnNums(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let oddOrEven = "";
    let problem = 0;
    let result = "";

    switch(operator) {
        case "+":
            problem = number1 + number2;
        break;
        case "-":
            problem = number1 - number2;
        break;
        case "*":
            problem = number1 * number2;
        break;
        case "/":
            problem = number1 / number2;
        break;
        case "%":
            problem = number1 % number2;
        break;
        default:
        break;
    }

    if(operator === "+") {
        if(problem % 2 === 0){
            oddOrEven = "even";
            console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
        }else{
            oddOrEven = "odd";
            console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
        }
    }
    else if(operator === "-") {
        if(problem % 2 === 0){
            oddOrEven = "even";
            console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
        }
        else{
            oddOrEven = "odd";
            console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
        }
    }
    else if(operator === "*") {
    if(problem % 2 === 0) {
        oddOrEven = "even";
        console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
    }
    else{
        oddOrEven = "odd";
        console.log(`${number1} ${operator} ${number2} = ${problem} - ${oddOrEven}`);
        }
    }else{}
    if(operator === "/" && number1 != 0 && number2 != 0){
        problem = problem.toFixed(2);
        console.log(`${number1} ${operator} ${number2} = ${problem}`);
    }
    else if(operator === "/" && number1 === 0) {
        problem = `Cannot divide ${number2} by zero`;
        console.log(problem);
    }
    else if(operator === "/" && number2 === 0) {
        problem = `Cannot divide ${number1} by zero`;
        console.log(problem);
    }else{}
    if(operator === "%" && number1 != 0 && number2 != 0) {
        console.log(`${number1} ${operator} ${number2} = ${problem}`);
    }
    else if(operator === "%" && number1 === 0) {
        problem = `Cannot divide ${number2} by zero`;
        console.log(problem);
    }
    else if(operator === "%" && number2 === 0) {
        problem = `Cannot divide ${number1} by zero`;
        console.log(problem);
    }else{}
}
opBtwnNums(["10","3","%"]);