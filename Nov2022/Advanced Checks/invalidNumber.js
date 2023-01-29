function invalidNumber (input) {
    let number = Number(input[0]);
    if(number < 100 && number != 0 || number > 200 && number != 0){
        console.log("invalid");
    }else{}
}

invalidNumber(["0"]);