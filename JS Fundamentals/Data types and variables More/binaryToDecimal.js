function solve(binary){
    let sum = 0;
    let binaryStr = binary.toString().split("").reverse();
    let len = binary.length;
    for(let i=0;i<=len;i++){
        if(binaryStr[i] == 1){
            sum += Math.pow(2,i);
        }else{}
    }
    console.log(sum);
}

solve(`11110000`);