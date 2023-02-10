function solve(arr1,arr2) {
    let lenArr1 = arr1.length;
    let lenArr2 = arr2.length;

    for(i = 0; i<lenArr1; i++){
        for(j = 0; j<lenArr2; j++){
            if(arr1[i] === arr2[j]){
                console.log(arr1[i])
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);