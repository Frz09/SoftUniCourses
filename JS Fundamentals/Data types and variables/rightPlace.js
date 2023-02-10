function solve(string, char, correct) {
    let corr = string.replace(`_`,char);
    let output = corr === correct? "Matched": "Not Matched";
    console.log(output);
}

solve(`Str_ng`,`I`,`String`);