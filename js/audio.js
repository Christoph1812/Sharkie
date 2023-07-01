let storageVolume = 50;
let currentVolume = 50;
let Image1 = true;

let play_sound = new Audio('audio/play_sound.wav');
play_sound.loop = true;

let collect_bottle_sound = new Audio('audio/collect_bottle.mp3');
let collect_coin_sound = new Audio('audio/collect_coin.mp3');
let electro_shock_sound = new Audio('audio/elektro_shock.mp3');
let endboss_sound = new Audio('audio/endboss_sound.mp3');
let fin_slap = new Audio('audio/fin_slap_sound.mp3');
let poisend_sound = new Audio('audio/poisend_sound.mp3');
let swim_sound = new Audio('audio/swim_sound.mp3');
let win_sound = new Audio('audio/win_sound.mp3');


function playBackgroundSound() {
    play_sound.volume = currentVolume / 100;
    play_sound.play();
}


document.addEventListener("DOMContentLoaded", function () {
    const soundImage = document.getElementById('sound-icon');
    if (soundImage) {
        soundImage.addEventListener('click', function () {
            if (Image1) {
                soundImage.src = 'img/assests/sound_off.png';
                volume = currentVolume;
                currentVolume = 0;
                play_sound.pause();
                Image1 = false;
            } else {
                soundImage.src = 'img/assests/sound_on.png';
                volume = currentVolume;
                play_sound.play();
                Image1 = true;
            }
        });
    }

    const volumeSlider = document.getElementById("volume-slider");
    const volumeValue = document.getElementById("volume-value");
    if (volumeSlider) {
        volume = 50;
        volumeSlider.addEventListener("input", function () {
            currentVolume = Number(volumeSlider.value);
            volumeValue.innerHTML = currentVolume;
            play_sound.volume = currentVolume / 100;
        });
    }
});