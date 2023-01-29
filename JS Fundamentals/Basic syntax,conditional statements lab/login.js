function solve(input) {
    let username = input[0];
    let reversed = "";

    for(let t = 1; t <= 4; t++){
        let password = input[t];
        let strLength = password.length;
        for(let r = 0; r <= strLength; r++){
            let split = password.split("");
            let reverse = split.reverse();
            let join = reverse.join("");
            reversed = join;
            break;
        }
        if(reversed === username){
            console.log(`User ${username} logged in.`);
            break;
        }else if(t === 4){
            console.log(`User ${username} blocked!`);
        }
        else{
            console.log(`Incorrect password. Try again.`);
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);