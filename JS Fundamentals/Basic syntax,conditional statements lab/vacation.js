function solve(group,type,day) {
    let sum = 0;
    if(type === "Students"){
        if(day === "Friday"){
            sum = 8.45;
        }
        else if(day === "Saturday"){
            sum = 9.80;
        }
        else if(day === "Sunday"){
            sum = 10.46;
        }else{}
        if(group >= 30){
            sum = sum * group - sum * group * 0.15;
        }else{
            sum = sum * group;
        }
    }
    else if(type === "Business"){
        if(day === "Friday"){
            sum = 10.90;
        }
        else if(day === "Saturday"){
            sum = 15.60;
        }
        else if(day === "Sunday"){
            sum = 16;
        }else{}
        if(group >= 100){
            sum = sum * group - sum * 10;
        }else{
            sum = sum * group;
        }
    }
    else if(type === "Regular"){
        if(day === "Friday"){
            sum = 15;
        }
        else if(day === "Saturday"){
            sum = 20;
        }
        else if(day === "Sunday"){
            sum = 22.50;
        }else{}
        if(group >= 10 && group <= 20){
            sum = sum * group - sum * group * 0.05;
        }else{
            sum = sum * group;
        }
    }else{}
    console.log(`Total price: ${sum.toFixed(2)}`);
}

solve(30, "Students", "Sunday");