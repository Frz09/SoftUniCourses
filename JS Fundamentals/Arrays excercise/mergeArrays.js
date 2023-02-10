function solve(arr1,arr2){
    let newArr = [];
    let arrLen = arr1.length;
    for(i=0; i<arrLen; i++){
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
    }
    for(j=0; j<arrLen; j++){
        if(j % 2 === 0){
            newArr.push(arr1[j] + arr2[j]);
        }else{
            newArr.push(arr1[j].toString() + arr2[j].toString());
        }
    }
    console.log(newArr.join(" - "));
}

solve([`0`],[`0`]);