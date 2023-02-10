function solve(arr) {
    let i = 0;
    let newArr = [];
    for (i = 0; i <= arr.length+1; i++) {
        if (arr[i] > arr[i + 1] || arr[i+1] == undefined) {
            newArr.push(arr[i]);
        }
        else if (arr[i] === arr[i + 1]) {
            newArr.push(arr[i]);
            i++;
        }
        else if (i === arr.length) {
            if (arr[i] > arr[0]) {
                newArr.push(arr[i]);
            }
        }
    }
    console.log(newArr.join(" "));
}

solve([27, 19, 42, 2, 13, 45, 48]);