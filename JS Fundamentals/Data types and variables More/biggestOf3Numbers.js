function solve(num1,num2,num3) {
    let toSort = [num1,num2,num3];
    let sorted = toSort.slice().sort((a, b) => (b - a));
    console.log(sorted[0]);
}

solve(-2,7,3);