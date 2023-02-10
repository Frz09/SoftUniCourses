function solve(num) {
    num = num-1;
    for(let i=0; i<=num; i++){
        for(let j=0; j<=num; j++){
            for(let f=0; f<=num; f++){
                let char1 = String.fromCharCode(`a`.charCodeAt(0)+i);
                let char2 = String.fromCharCode(`a`.charCodeAt(0)+j);
                let char3 = String.fromCharCode(`a`.charCodeAt(0)+f);
                let output = char1 + char2 + char3;
                console.log(output);
            }
        }
    }
}

solve(3);