function solve(input,rotations){
    for(i=0;i<rotations;i++){
        input.push(input.shift());
    }
    console.log(input.join(" "));
}

solve([51, 47, 32, 61, 21], 2);