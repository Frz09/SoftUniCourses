function summingVowels(input) {
    let string = input[0];
    let textLength = string.length;
    let sum = 0;

    for (i = 0; i <= textLength; i++){
    switch(string.charAt(i)){
        case "a":
            sum = sum + 1;
            break;
        case "e":
            sum = sum + 2;
            break;
        case "i":
            sum = sum + 3;
            break;
        case "o":
            sum = sum + 4;
            break;
        case "u":
            sum = sum + 5;
            break;
        default:
            break;
        }
    }
    console.log(sum);
}

summingVowels(["aeiou"]);