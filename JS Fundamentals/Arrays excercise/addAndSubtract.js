function solve(input) {
    let evens = 0;
    let odds = 0;
    let sumOrig = 0;
    let sumNew = 0;
    let newArr = [];
    for (i = 0; i < input.length; i++) {
        sumOrig += input[i];
        if (input[i] % 2 === 0) {
            evens = i + input[i];
            newArr.push(evens);
            sumNew += evens;
            evens = 0;
        }
        else {
            odds = input[i] - i;
            newArr.push(odds)
            sumNew += odds;
            odds = 0;
        }
    }
    console.log(newArr);
    console.log(sumOrig);
    console.log(sumNew);
}

solve([5, 15, 23, 56, 35]);