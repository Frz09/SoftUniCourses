function solve(num1,num2,num3) {
    let string = "";
    let sorted = [num1,num2,num3];
    let sorting = sorted.slice().sort((a, b) => (b - a));
    for(i = 0; i <= 2; i++){
        string = sorting[i];
        console.log(string);
    }
}
solve(0,0,2);