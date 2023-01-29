function summingNumbers(input) {
    let n = input[0] + "";
    let sum = 0;
    for(i = 0; i <=n.length -1; i++){
        sum = sum + Number(n[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

summingNumbers(["564891"]);