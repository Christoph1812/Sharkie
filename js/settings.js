
let enter_fullscreen = false;

/**
 *  Opens the first page of settings menu update the audio slider.
 */
function openSettings() {
    document.getElementById('back').classList.add('v-none');
    document.getElementById('settings-main-overlay').classList.remove('d-none');
    overview = document.getElementById('settings-content');
    overview.innerHTML =/*html*/ `<div class="overview" id="overview"><h2>Settings</h2>
    <span class="headline-volume">volume</span>
       <div class="slider-container">
           <img class="sound-icon" id="sound-icon" src="img/assests/sound_on.png" alt="Sound">
           <input type="range" id="volume-slider" min="0" max="100" value="50" step="1">
           <output id="volume-value">50</output>
       </div>
       <div onclick="toggleFullscreen()" class="fullscreen-container" id="fullscreen-setting">
           <img src="img/assests/fullscreen-enter.png" alt="Fullscreen">
           <p>Enter Fullscreen</p>
       </div>
       <div onclick="openInstruction()" class="instruction-container">
           <img src="img/assests/info.png" alt="Info">
           <p>Instruction</p>
       </div>
       <div onclick="openCredits()" class="credits-container">
           <img src="img/assests/copyright.png" alt="copyright">
           <p>Credits</p>
       </div>
       </div>`;
    addMuteHandler();
    addSliderHandler();
}


/**
 * Opens the instruction and show the story point.
 */
function openInstruction() {
    document.getElementById('back').classList.remove('v-none');
    document.getElementById('settings-content').innerHTML =/*html*/`
    <div class="instruction-menu">
        <div class="button-menu">
            <button class="instruction-button" onclick="showStory()">Story</button>
            <button class="instruction-button" onclick="showAttack()">Attack</button>
            <button class="instruction-button" onclick="showGather()">Gather</button>
            <button class="instruction-button" onclick="showKeys()">Keys</button>
        </div>
        <div class="instruction-info" id="instruction-info">
            <h2>Story</h2>
            <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch
            attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his
            defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.

            </div>
        </div>
    </div>`;
}


/**
 * Shows the story of the game, when clicking on the story button.
 */
function showStory() {
    document.getElementById('instruction-info').innerHTML =/*html*/`
    <div>
        <h2>Story</h2>
        <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch
            attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his
            defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
        </div>
    </div>`
}


/**
 * Shows the attacks of the character, when clicking on the attack button.
 */
function showAttack() {
    document.getElementById('instruction-info').innerHTML =/*html*/`
    <div class="attack-container">
        <h2>Attack</h2>
        <img class="attack-image" src="img/assests/sharkie-normal-bubble.png" alt="poisoned-bubble">
        <span>Use the bubble attack against the jellyfish</span>
        <img class="attack-image" src="img/assests/sharkie-fin-slap.png" alt="Fin-slap">
        <span>Use the fin slap attack against the bubble fishes</span>
        <img class="attack-image" src="img/assests/sharkie-posion-bubble.png" alt="poisoned-bubble">
        <span> Use the poisoned bubble attack against the final boss</span>
        
    </div>`
}


/**
 *Shows the Gather in the Game, you must collted, when clicking on the Gather button.
 */
function showGather() {
    document.getElementById('instruction-info').innerHTML =/*html*/`
    <div class="gather-container">
        <h2>Gather</h2>         
        <h3>Coins</h3>
        <img src="img/4. Marcadores/1. Coins/4.png" alt="coin">
        <span>collect at least 5 coins for an extra life</span>
        <h3>poisoned bottles</h3>
        <img src="img/4. Marcadores/Posión/Animada/1.png" alt="bottle">
        <span>Collecting bottles to blow poisoned bubbles</span>
    </div>
`
}

/**
 * Displays the key assignment when you click on the Buttons button.
 */
function showKeys() {
    document.getElementById('instruction-info').innerHTML =/*html*/`<div>
    <h2>Keys</h2>
    <span>Use the arrow-Keys to move Sharkie</span>
    <div class="arrow-keys">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>
    <div>
        <button>SPACE</button>
        <span>Press SPACE for fin slap attack</span>
    </div>
    <div>
        <button>D</button>
        <span>Press D for normal bubble attack </span>
    </div>
    <div>
        <button>F</button>
        <span>Press F for poisened bubble attack</span>
    </div>
</div>`
}


/**
 * Closes the settings.
 */
function closeSettings() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
}


/**
 *  Opens the fullscreen Modus.
 */
function toggleFullscreen() {
    let fullscreen_setting = document.getElementById('fullscreen-setting');

    if (!enter_fullscreen) {
        fullscreen_setting.innerHTML = /*html*/ `< img src = "img/assests/fullscreen-exit.png" alt = "Fullscreen" >
        <p>Exit fullscreen</p>`
        enterFullscreen();
    } else {
        fullscreen_setting.innerHTML = /*html*/ `< img src = "img/assests/fullscreen-enter.png" alt = "Fullscreen" >
        <p>Enter fullscreen</p>`;
        enter_fullscreen = true;
        // exitFullscreen();
    }
}


/**
 * Enables the "fullscreen" HTML element to enter fullscreen mode using the browser's Fullscreen API and makes further adjustments
 */
function enterFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (fullscreen.mozRequestFullScreen) { // Firefox
        fullscreen.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari und Opera
        fullscreen.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) { // Internet Explorer und Edge
        fullscreen.msRequestFullscreen();
    }
    enter_fullscreen = true;
    changeViewFullscreen();
}


/**
 * Enables the exiting of the current fullscreen mode using the browser's respective methods .
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari und Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // Internet Explorer und Edge
        document.msExitFullscreen();
    }
    enter_fullscreen = false;
    changeViewNormalScreen();
}


/**
 * Displays the game in full screen mode.
 */
function changeViewFullscreen() {
    document.getElementById('canvas').style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    document.getElementById('start-screen').classList.add('start-screen-fullscreen');
    document.getElementById('panel-top').classList.add('panel-top-fullscreen');
    document.getElementById('panel-bottom').classList.add('panel-bottom-fullscreen');

}

/**
 * Returns to normal mode.
 */

function changeViewNormalScreen() {
    document.getElementById('canvas-frame').classList.remove('d-none');
    document.getElementById('canvas').style.width = '720px';
    document.getElementById('canvas').style.height = '480px';
    document.getElementById('pannel-container').classList.remove('startscreenFullScreen');
    document.getElementById('top-pannel').classList.remove('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.remove('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.remove('topBotPannelFullScreen');
}






