function checkPassword(input) {
    let password = input[0];
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

checkPassword(["s3cr3t!P@ssw0r"]);