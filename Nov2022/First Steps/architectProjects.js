function projectTime(input) {
    let architectName = input[0];
    let architectGrossTime = parseInt(input[1] * 3);
    console.log(`The architect ${architectName} will need ${architectGrossTime} hours to complete ${input[1]} project/s.`);
}

projectTime(["Sanya","9"]);