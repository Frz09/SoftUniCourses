function password(input) {
    index = 3;
    let username = input[0];
    let password = input[1];
    let data = input[2];
    index++;

    while (data!== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);