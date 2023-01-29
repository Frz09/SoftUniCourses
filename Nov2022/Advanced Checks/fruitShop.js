function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let numberOfItems = Number(input[2]);
    switch(day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        switch(fruit) {
        case "banana":
            let bananaPrice = numberOfItems * 2.50;
            console.log(bananaPrice.toFixed(2));
            break;
        case "apple":
            let applePrice = numberOfItems * 1.20;
            console.log(applePrice.toFixed(2));
            break;
        case "orange":
            let orangePrice = numberOfItems * 0.85;
            console.log(orangePrice.toFixed(2));
            break;
        case "grapefruit":
            let grapefruitPrice = numberOfItems * 1.45;
            console.log(grapefruitPrice.toFixed(2));
            break;
        case "kiwi":
            let kiwiPrice = numberOfItems * 2.70;
            console.log(kiwiPrice.toFixed(2));
            break;
        case "pineapple":
            let pineapplePrice = numberOfItems * 5.50;
            console.log(pineapplePrice.toFixed(2));
            break;
        case "grapes":
            let grapesPrice = numberOfItems * 3.85;
            console.log(grapesPrice.toFixed(2));
            break;
        default:
            console.log("error");
            break;
        }
        break;
        case "Saturday":
        case "Sunday":
        switch(fruit) {
            case "banana":
                let bananaPrice = numberOfItems * 2.70;
                console.log(bananaPrice.toFixed(2));
                break;
            case "apple":
                let applePrice = numberOfItems * 1.25;
                console.log(applePrice.toFixed(2));
                break;
            case "orange":
                let orangePrice = numberOfItems * 0.90;
                console.log(orangePrice.toFixed(2));
                break;
            case "grapefruit":
                let grapefruitPrice = numberOfItems * 1.60;
                console.log(grapefruitPrice.toFixed(2));
                break;
            case "kiwi":
                let kiwiPrice = numberOfItems * 3.00;
                console.log(kiwiPrice.toFixed(2));
                break;
            case "pineapple":
                let pineapplePrice = numberOfItems * 5.60;
                console.log(pineapplePrice.toFixed(2));
                break;
            case "grapes":
                let grapesPrice = numberOfItems * 4.20;
                console.log(grapesPrice.toFixed(2));
                break;
        default:
            console.log("error");
            break;
        }
        break;
        default:
            console.log("error");
    }
}

fruitShop(["tomato","Monday","0.5"]);