
let enter_fullscreen = false;

/**
 *  Opens the first page of settings menu and update the audio slider.
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
       <div onclick="backToStart()" class="back-to-start-container" >
            <img src="img/assests/back-to-start.png" alt="Exit">
            <p>Back to start</p>
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
           <img src="img/assests/copyright.png" alt="Copyright">
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
        <div class="attack">
            <img  src="img/assests/sharkie-normal-bubble.png" alt="poisoned-bubble">
            <span>Use the bubble attack against <br> the jellyfish</span></div>
        <div class="attack">
             <img  src="img/assests/sharkie-fin-slap.png" alt="Fin-slap">
            <span>Use the fin slap attack against <br> the bubble fishes</span></div>
        <div class="attack">
            <img src="img/assests/sharkie-posion-bubble.png" alt="poisoned-bubble">
            <span> Use the poisoned bubble attack <br> against the whale</span>
        </div>
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
        <div class="gather">
            <img src="img/4. Marcadores/1. Coins/4.png" alt="coin">
            <span>collect at least 5 coins <br> for an extra life</span>
        </div>
        <h3>poisoned bottles</h3>
        <div class="gather">
            <img src="img/4. Marcadores/Posión/Animada/1.png" alt="bottle">
            <span>Collecting bottles to blow <br> poisoned bubbles</span>
        </div>  
    </div>
`
}

/**
 * Displays the key assignment when you click on the Buttons button.
 */
function showKeys() {
    document.getElementById('instruction-info').innerHTML =/*html*/`
    <div class="key-container">
        <h2>Keys</h2>
        <figure class="arrow-keys">
            <div>
                <div class="key-top" >
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-up.png" alt="Key up"></div>
                </div>
                <div class="key-bottom">
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-left.png" alt="key left"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-down.png" alt="Key down"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-right.png" alt="Key right"></div>
                </div>
            </div>
            <figcaption>Use the arrow-Keys <br> to move Sharkie</figcaption>  
        </figure>
        <figure>
            <div class="instruction-key">Space</div>
            <figcaption>Press <kbd>Space</kbd> for fin slap attack</figcaption>
        </figure>
        <figure>
            <div class="instruction-key">D</div>
            <figcaption>Press <kbd>D</kbd> for normal bubble attack </figcaption>
        </figure>
        <figure>
            <div class="instruction-key">F</div>
            <figcaption>Press <kbd>F</kbd> for poisened bubble attack</figcaption>
        </figure>
    </div>`
}


function openCredits() {
    document.getElementById('back').classList.remove('v-none');
    overview = document.getElementById('settings-content');
    overview.innerHTML =/*html*/`<div>
    Music: Aquatic Ambiance by Thunder Hawk (Official)
    Source: https://soundcloud.com/thunder_hawk/aquatic-ambiance
    License: http://creativecommons.org/licenses/by/3.0/
    Get music free for a link from https://starfrosch.com
    https.freepik.com
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
        fullscreen_setting.innerHTML = /*html*/ `
       <img src="img/assests/fullscreen-exit.png" alt="Fullscreen ">
        <p>Exit fullscreen</p>`
        enter_fullscreen = true;
        enterFullscreenModus();
    } else {
        fullscreen_setting.innerHTML = /*html*/ `
      <img src="img/assests/fullscreen-enter.png" alt="Normalscreen">
        <p>Enter fullscreen</p>`;
        enter_fullscreen = false;
        exitFullscreenModus();
    }
}


/**
 * enables fullscreen mode for an HTML element identified by the ID "fullscreen."
 * It ensures compatibility across different browsers and adjusts the view accordingly.
 */
function enterFullscreenModus() {
    let fullscreen = document.getElementById('fullscreen');
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (fullscreen.mozRequestFullScreen) { // Firefox
        fullscreen.mozRequestFullScreen();
    } else if (fullscreen.webkitRequestFullscreen) { // Chrome, Safari und Opera
        fullscreen.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) { // Internet Explorer und Edge
        fullscreen.msRequestFullscreen();
    }
    enter_fullscreen = true;
    changeViewFullscreen();
}


/**
 * 
 */
function exitFullscreenModus() {
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
    document.getElementById('canvas-container').classList.remove('canvas-border');

}


/**
 * Returns the game to normal mode.
 */
function changeViewNormalScreen() {
    document.getElementById('canvas').removeAttribute('style');
    document.getElementById('canvas-container').classList.add('canvas-border');
}

/**
 * Closed fullscreen mode on browser events.
 */
function exitFullscreenEventHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        exitFullscreenModus();
    }
}

/**
 * These event listeners listen for changes in the fullscreen mode of the document and call the "exitFullscreenEventHandler" function
 *  when the fullscreen mode is exited, regardless of whether it's a Webkit, Mozilla, or Microsoft browser event.
 */
document.addEventListener('fullscreenchange', exitFullscreenEventHandler);
document.addEventListener('webkitfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('mozfullscreenchange', exitFullscreenEventHandler);
document.addEventListener('MSFullscreenChange', exitFullscreenEventHandler);

/**
 * Returns true if the device is an mobile device.
 * @returns boolean
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}


function updateVisibility() {
    const gameContainer = document.getElementById('game-container');
    const rotateDeviceScreen = document.getElementById('rotate-device-screen');
    const isMobile = isMobileDevice();
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const isWideScreen = window.innerWidth >= 800;
    const showCanvas = (!isMobile && isWideScreen) || (isMobile && isLandscape);

    gameContainer.classList.toggle('d-none', !showCanvas);
    rotateDeviceScreen.classList.toggle('d-none', showCanvas);
    showMobileButton();
}

function showMobileButton() {
    const panelBottom = document.getElementById('panel-bottom');
    const isMobile = isMobileDevice();
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && isLandscape && gameRuns) {
        panelBottom.classList.remove('d-none');
    } else {
        panelBottom.classList.add('d-none');
    }
}




