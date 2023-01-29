function traderComissions(input) {
    let city = input[0];
    let numberComissions = Number(input[1]);
    if (numberComissions >= 0) {
        switch(city){
            case "Sofia":
                if(numberComissions > 0 && numberComissions <= 500) {
                    let sofiaLowComission = numberComissions * 0.05;
                    console.log(sofiaLowComission.toFixed(2));
                }
                else if(numberComissions > 500 && numberComissions <= 1000) {
                    let sofiaMidComission = numberComissions * 0.07;
                    console.log(sofiaMidComission.toFixed(2));
                }
                else if(numberComissions > 1000 && numberComissions <= 10000) {
                    let sofiaHighComissions = numberComissions * 0.08;
                    console.log(sofiaHighComissions.toFixed(2));
                }
                else if(numberComissions > 10000) {
                    let sofiaSkyHighComissions = numberComissions * 0.12;
                    console.log(sofiaSkyHighComissions.toFixed(2));
                }else{}
                break;
            case "Varna":
                if(numberComissions > 0 && numberComissions <= 500) {
                    let varnaLowComission = numberComissions * 0.045;
                    console.log(varnaLowComission.toFixed(2));
                }
                else if(numberComissions > 500 && numberComissions <= 1000) {
                    let varnaMidComission = numberComissions * 0.075;
                    console.log(varnaMidComission.toFixed(2));
                }
                else if(numberComissions > 1000 && numberComissions <= 10000) {
                    let varnaHighComissions = numberComissions * 0.1;
                    console.log(varnaHighComissions.toFixed(2));
                }
                else if(numberComissions > 10000) {
                    let varnaSkyHighComissions = numberComissions * 0.13;
                    console.log(varnaSkyHighComissions.toFixed(2));
                }else{}
                break;
            case "Plovdiv":
                if(numberComissions > 0 && numberComissions <= 500) {
                    let plovdivLowComission = numberComissions * 0.055;
                    console.log(plovdivLowComission.toFixed(2));
                }
                else if(numberComissions > 500 && numberComissions <= 1000) {
                    let plovdivMidComission = numberComissions * 0.08;
                    console.log(plovdivMidComission.toFixed(2));
                }
                else if(numberComissions > 1000 && numberComissions <= 10000) {
                    let plovdivHighComissions = numberComissions * 0.12;
                    console.log(plovdivHighComissions.toFixed(2));
                }
                else if(numberComissions > 10000) {
                    let plovdivSkyHighComissions = numberComissions * 0.145;
                    console.log(plovdivSkyHighComissions.toFixed(2));
                }else{}
                break;
            default:
                console.log("error");
        }
    }
    else {
        console.log("error");
    }
}

traderComissions(["Varna","500"]);