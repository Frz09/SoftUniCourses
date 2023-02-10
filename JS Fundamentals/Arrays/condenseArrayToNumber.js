function solve(input){
    let newArr = input;
    while(newArr.length > 1) {
        let modArr = [];
        for (let i = 0; i < newArr.length - 1; i++){
            let firstElement = newArr[i];
            let secondElement = newArr[i + 1];

            modArr.push(firstElement + secondElement);
        }
        newArr = modArr;
    }
    console.log(newArr[0]);
}

solve([2,10,3]);