function solve(num) {
    let sum = 0;
    for(let i=1; i<=num*2; i++) {
        if(i % 2 !== 0) {
            console.log(i);
            sum = Number(sum + i);
        }
        else{}
    }
    console.log(`Sum: ${sum}`);
}

solve(1);