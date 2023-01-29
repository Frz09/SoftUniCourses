function souveniers(input) {
    let team = input[0];
    let itemType = input[1];
    let numberPurchased = Number(input[2]);
    let sum = 0;

    if (team === "Argentina") {
        switch (itemType) {
            case "flags":
                sum = numberPurchased * 3.25;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "caps":
                sum = numberPurchased * 7.20;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "posters":
                sum = numberPurchased * 5.10;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "stickers":
                sum = numberPurchased * 1.25;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            default:
                console.log("Invalid stock!");
                break;
        }
    }
    else if (team === "Brazil") {
        switch (itemType) {
            case "flags":
                sum = numberPurchased * 4.20;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "caps":
                sum = numberPurchased * 8.50;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "posters":
                sum = numberPurchased * 5.35;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "stickers":
                sum = numberPurchased * 1.20;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            default:
                console.log("Invalid stock!");
                break;
        }
    }
    else if (team === "Croatia") {
        switch (itemType) {
            case "flags":
                sum = numberPurchased * 2.75;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "caps":
                sum = numberPurchased * 6.90;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "posters":
                sum = numberPurchased * 4.95;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "stickers":
                sum = numberPurchased * 1.10;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            default:
                console.log("Invalid stock!");
                break;
        }
    }
    else if (team === "Denmark") {
        switch (itemType) {
            case "flags":
                sum = numberPurchased * 3.10;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "caps":
                sum = numberPurchased * 6.50;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "posters":
                sum = numberPurchased * 4.80;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            case "stickers":
                sum = numberPurchased * 0.90;
                console.log(`Pepi bought ${numberPurchased} ${itemType} of ${team} for ${sum.toFixed(2)} lv.`);
                break;
            default:
                console.log("Invalid stock!");
                break;
        }
    }
    else {
        console.log("Invalid country!");
    }
}

souveniers(["Argentina", "dicks", "5"]);