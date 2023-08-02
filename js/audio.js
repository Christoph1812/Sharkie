let storageVolume = 50; // save the current volume
let currentVolume = 50; // the current sound volume value
let Image1 = true;

let background_sound = new Audio('audio/play_sound.wav');
background_sound.loop = true;

let endboss_sound = new Audio('audio/endboss_sound.mp3');
endboss_sound.loop = true;

let collect_bottle_sound = new Audio('audio/collect_bottle.mp3');
let collect_coin_sound = new Audio('audio/collect_coin.mp3');
let electro_shock_sound = new Audio('audio/elektro_shock.mp3');

let fin_slap = new Audio('audio/fin_slap_sound.mp3');
let poisend_sound = new Audio('audio/poisend_sound.mp3');
let swim_sound = new Audio('audio/swim_sound.mp3');
let win_sound = new Audio('audio/win_sound.mp3');



/**
 *  Plays the background music.
 */
function playBackgroundSound() {
    background_sound.volume = currentVolume / 100;
    background_sound.play();
}


/**
 *  Adds a click event listener to a sound icon element, allowing users to toggle the sound on and off. When clicked, the function mutes the sound if it's playing and restores the volume if it's muted.
 */
function addMuteHandler() {
    const soundImage = document.getElementById('sound-icon');
    if (soundImage) {
        soundImage.addEventListener('click', function () {
            if (Image1) {
                soundImage.src = 'img/assests/sound_off.png';
                volume = currentVolume;
                currentVolume = 0;
                background_sound.pause();
                Image1 = false;
            } else {
                soundImage.src = 'img/assests/sound_on.png';
                volume = currentVolume;
                background_sound.play();
                Image1 = true;
            }
        });
    }

}


/**
 * Controls a volume slider , updating the displayed volume value and adjusting the audio volume in real-time as the user interacts with the slider.
 */
function addSliderHandler() {
    const volumeSlider = document.getElementById("volume-slider");
    const volumeValue = document.getElementById("volume-value");
    if (volumeSlider) {
        volume = 50;
        volumeSlider.addEventListener("input", function () {
            currentVolume = Number(volumeSlider.value);
            volumeValue.innerHTML = currentVolume;
            background_sound.volume = currentVolume / 100;
        });
    }
}
