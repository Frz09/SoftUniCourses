function solve(number) {
    let flag = false;
    if(number % 2 !== 1 && number % number === 0){
        flag = false;
    }
    else{
        flag = true;
    }
    console.log(flag);
}

solve(7);