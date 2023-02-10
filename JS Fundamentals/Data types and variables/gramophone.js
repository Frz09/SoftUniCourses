function solve(bandName,albumName,songName) {
    let songDurationSec = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = songDurationSec / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');