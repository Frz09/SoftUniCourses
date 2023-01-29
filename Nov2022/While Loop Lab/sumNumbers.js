function numbers(input) {
    let number = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < number) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum)
}

numbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;