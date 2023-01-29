function solve(string) {
    let split = string.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    console.log(join);
}

solve("Hello");