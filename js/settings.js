function openSettings() {
    document.getElementById('settings-main-overlay').classList.remove('d-none');
}


function closeSettings() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
}


document.addEventListener("DOMContentLoaded", function () {
    let volumeSlider = document.getElementById("volume-slider");
    let volumeValue = document.getElementById("volume-value");

    volumeSlider.addEventListener("input", function () {
        var volume = volumeSlider.value;
        volumeValue.innerHTML = volume;
    });


});