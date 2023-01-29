function solve(x1,y1,x2,y2) {
    let calcx = Math.abs(x2-x1);
    let calcy = Math.abs(y2-y1);
    let calculate = Math.pow(calcx,2) + Math.pow(calcy,2);
    let distance = Math.sqrt(calculate);
    console.log(distance);
}

solve(2,4,5,0);