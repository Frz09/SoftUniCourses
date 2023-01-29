function cornerShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    switch (city) {
        case "Sofia":
            switch(product){
                case "coffee":
                    let priceCoffee = quantity * 0.50;
                    console.log(priceCoffee);
                    break;
                case "water":
                    let priceWater = quantity * 0.80;
                    console.log(priceWater);
                    break;
                case "beer":
                    let priceBeer = quantity * 1.20;
                    console.log(priceBeer);
                    break;
                case "sweets":
                    let priceSweets = quantity * 1.45;
                    console.log(priceSweets);
                    break;
                case "peanuts":
                    let pricePeanuts = quantity * 1.60;
                    console.log(pricePeanuts);
                    break;
                default:
                    console.log("Product unavailable.");
                    break;
                }
            break;
        case "Plovdiv":
            switch(product) {
                case "coffee":
                    let priceCoffee = quantity * 0.40;
                    console.log(priceCoffee);
                    break;
                case "water":
                    let priceWater = quantity * 0.70;
                    console.log(priceWater);
                    break;
                case "beer":
                    let priceBeer = quantity * 1.15;
                    console.log(priceBeer);
                    break;
                case "sweets":
                    let priceSweets = quantity * 1.30;
                    console.log(priceSweets);
                    break;
                case "peanuts":
                    let pricePeanuts = quantity * 1.50;
                    console.log(pricePeanuts);
                    break;
                default:
                    console.log("Product unavailable.");
                    break;
                }
            break;
        case "Varna":
            switch(product){
                case "coffee":
                    let priceCoffee = quantity * 0.45;
                    console.log(priceCoffee);
                    break;
                case "water":
                    let priceWater = quantity * 0.70;
                    console.log(priceWater);
                    break;
                case "beer":
                    let priceBeer = quantity * 1.10;
                    console.log(priceBeer);
                    break;
                case "sweets":
                    let priceSweets = quantity * 1.35;
                    console.log(priceSweets);
                    break;
                case "peanuts":
                    let pricePeanuts = quantity * 1.55;
                    console.log(pricePeanuts);
                    break;
                default:
                    console.log("Product unavailable.");
                    break;
                }
        break;
    }
}
cornerShop(["beer","Sofia","2"]);