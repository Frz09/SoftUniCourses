function stringOfNumbers(input) {
    let index = 1;
    let number = Number(input[0]);
    while(index <= number){
        console.log(index);
        index = index*2 +1;
    }
}

stringOfNumbers(["10"]);