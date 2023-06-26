let volume;
let currentVolume;
let Image1 = true;


function openSettings() {
    document.getElementById('settings-main-overlay').classList.remove('d-none');
}


function closeSettings() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
}


document.addEventListener("DOMContentLoaded", function () {
    const soundImage = document.getElementById('sound-icon')

    soundImage.addEventListener('click', function () {
        if (Image1) {
            soundImage.src = 'img/assests/sound_off.png';
            currentVolume = volume;
            volume = 0;
            Image1 = false;
        } else {
            soundImage.src = 'img/assests/sound_on.png';
            volume = currentVolume;
            Image1 = true;
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    volume = 50;
    let volumeSlider = document.getElementById("volume-slider");
    let volumeValue = document.getElementById("volume-value");

    volumeSlider.addEventListener("input", function () {
        volume = Number(volumeSlider.value);
        volumeValue.innerHTML = volume;
    });
});