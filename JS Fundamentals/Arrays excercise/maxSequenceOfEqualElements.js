function solve(arr) {
    let seq1 = [];
    let flag = false;
    let counter = 1;
    let lastCount = 0;
    let lastNum = 0;
    let resArr = [];
    let equals = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            if (flag === true) {
                seq1.push(arr[i + 1]);
            } else {
                seq1.push(arr[i], arr[i + 1]);
                if (equals.includes(arr[i]) === false) {
                    equals.push(arr[i]);
                }
            }
            counter++;
            flag = true;
        } else if (flag === true && arr[i] === arr[i + 1]) {
            seq1.push(arr[i + 1]);
            counter++;
        } else if (flag === true && arr[i] !== arr[i + 1]) {
            flag = false;
            if (counter > lastCount) {
                lastCount = counter;
                lastNum = arr[i];
                counter = 1;
            } else if (counter === lastCount) {
                counter = 1;
                if (equals.includes(arr[i]) === false) {
                    equals.push(arr[i]);
                }
            }
        }
    }
    if (equals.includes(lastNum)) {
        let index = equals.indexOf(lastNum);
        equals.splice(index, 1);

        while (seq1.includes(lastNum)) {
            let index1 = seq1.indexOf(lastNum);
            seq1.splice(index1, 1);
        }
    }
    for(k=0; k<lastCount; k++){
        resArr.push(lastNum);
    }
    let result = resArr.join(" ");

    console.log(result);

}

solve([4, 4, 4, 4]);