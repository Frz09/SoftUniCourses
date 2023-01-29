function solve(num) {
    for(let i = 1; i <= num; i++) {
        let triangle = "";
        for(let iter = 0; iter < i; iter++){
            triangle += i + " ";
        }
        console.log(triangle);
    }
}

solve(5);