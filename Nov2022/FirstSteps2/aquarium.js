function aquariumCapacity(input) {
    let length = input[0];
    let width = input[1];
    let height = input[2];
    let percentage = input[3] / 100;
    let volumeAquarium = length * width * height;
    let volumeInLiters = volumeAquarium * 0.001;
    let litersRequired = volumeInLiters * (1 - percentage);
    console.log(litersRequired);
}

aquariumCapacity(["105","77","89","18.5"]);