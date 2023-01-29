function divideBy9(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num1String = num1 + "";
    let num2String = num2 + "";
    let sum = 0;
    for(let i = num1; i <=num2; i++){
        if(i % 9 === 0) {
            sum = sum + i;
        }
    }
    console.log(`The sum: ${sum}`);

    for(let i = num1; i <=num2; i++){
        if(i % 9 === 0) {
            console.log(i);
        }
    }
}

divideBy9(["100","200"]);