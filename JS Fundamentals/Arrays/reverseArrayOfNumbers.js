function solve(num, arr){
    let newArr = [];
    for(let i=num-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    let output = newArr.join(" ");
    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);