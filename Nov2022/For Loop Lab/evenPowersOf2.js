function evenpowersof2(input){
    let n = Number(input[0]);
    for (let i = 0; i <=n; i = i + 1) {
        if (i % 2 === 0){
            let num = Math.pow(2, i);
            console.log(num);
        }
    }
}

evenpowersof2(["7"]);