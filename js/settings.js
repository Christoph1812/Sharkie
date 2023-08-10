
let enter_fullscreen = false; // status fullscreen


/**
 *  Opens the first page of settings menu and update the audio slider.
 */
function openSettings() {
    document.getElementById('back').classList.add('v-none');
    document.getElementById('settings-main-overlay').classList.remove('d-none');
    overview = document.getElementById('settings-content');
    overview.innerHTML = createHtmlOpenSettings();

    addMuteHandler();
    addSliderHandler();
}


/**
 * Opens the instruction and show the story point.
 */
function openInstruction() {
    document.getElementById('back').classList.remove('v-none');
    document.getElementById('settings-content').innerHTML = createHtmlOpenInstruction();
}


/**
 * Shows the story of the game, when clicking on the story button.
 */
function showStory() {
    document.getElementById('instruction-info').innerHTML = createhtmlShowStory();
}


/**
 * Shows the attacks of the character, when clicking on the attack button.
 */
function showAttack() {
    document.getElementById('instruction-info').innerHTML = createHtmlShowAttack();
}


/**
 *Shows the Gather in the Game, you must collted, when clicking on the Gather button.
 */
function showGather() {
    document.getElementById('instruction-info').innerHTML = createHtmlShowGather();
}


/**
 * Displays the key assignment when you click on the Buttons button.
 */
function showKeys() {
    document.getElementById('instruction-info').innerHTML = createHTMLShowKeys();
}


/**
 * displays the media credits form the App
 */
function openCredits() {
    document.getElementById('back').classList.remove('v-none');
    overview = document.getElementById('settings-content');
    overview.innerHTML = createHtmlOpenCredits();
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
        fullscreen_setting.innerHTML = createHtmlEnterFullscreen();
        enter_fullscreen = true;
        enterFullscreenModus();
    } else {
        fullscreen_setting.innerHTML = createHtmlExitFullscreen();
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



function exitFullscreenModus() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
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
    document.getElementById('canvas-container').style.width = '100vw';
    document.getElementById('canvas-container').style.height = '100vh';
    document.getElementById('canvas-container').classList.remove('canvas-border');
}


/**
 * Returns the game to normal mode.
 */
function changeViewNormalScreen() {
    document.getElementById('canvas-container').removeAttribute('style');
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


/**
 * opens the imprint overlay
 */
function openImprint() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
    legaleNotice = document.getElementById('legal-notice-overlay');
    legaleNotice.classList.remove('d-none');
    legaleNotice.innerHTML = createHtmlImprint();
}


/**
 * opens the privacy policy
 */
function openPrivacyPolicy() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
    legaleNotice = document.getElementById('legal-notice-overlay');
    legaleNotice.classList.remove('d-none');
    legaleNotice.innerHTML = createHtmlPrivacyPolicy();
}

/**
 * close leal notice
 */
function closeLegalNotice() {
    legaleNotice = document.getElementById('legal-notice-overlay');
    legaleNotice.classList.add('d-none');
}






