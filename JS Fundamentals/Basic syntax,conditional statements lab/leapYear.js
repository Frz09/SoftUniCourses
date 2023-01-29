function solve(year){
    if(year % 4 === 0 || year % 400 === 0) {
        if(year % 100 === 0){
            if(year === 2000) {
                console.log(`yes`);
            }else{
            console.log(`no`);
            }
        }else{
            console.log(`yes`)
        }
    }
    else{
        console.log(`no`);
    }
}

solve(2000);