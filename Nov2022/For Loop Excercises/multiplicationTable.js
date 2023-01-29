function table(input) {
    let number = Number(input[0]);
    let result = 0;

    for(let x = 1; x <= 10; x++) {
        result = number * x;
        console.log(`${x} * ${number} = ${result}`)
    }
}

table(["5"]);