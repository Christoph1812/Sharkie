
let enter_fullscreen = false;


function openSettings() {
    document.getElementById('settings-main-overlay').classList.remove('d-none');
    overview = document.getElementById('overview');
    overview.innerHTML =/*html*/ `<h2>Settings</h2>
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
       <div onclick="openInstruction()" class="instruction-button">
           <img src="img/assests/info.png" alt="Info">
           <p>Instruction</p>
       </div>
       <div onclick="openCredits()" class="credits-container">
           <img src="img/assests/copyright.png" alt="copyright">
           <p>Credits</p>
       </div>`
}

function openInstruction() {
    document.getElementById('overview').innerHTML =/*html*/`<h2>Story</h2><div class="instruction-container">Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch attacks. On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale. Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his defenses. With each hit, the whale becomes more and more vulnerable.
    In the end, Sharke triumphs, restoring the balance of the ocean.</div>`

}

function showStory() {

}

function showAttack() {

}

function show() {

}


function closeSettings() {
    document.getElementById('settings-main-overlay').classList.add('d-none');

}



// <-------------------------Fullscreen------------------------------------>
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

// Funktion, um den Vollbildmodus zu verlassen
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
    // changeViewNormalScreen();
}


function changeViewFullscreen() {
    document.getElementById('canvas').style.width = '100vw';
    document.getElementById('canvas').style.height = '100vh';
    document.getElementById('start-screen').classList.add('start-screen-fullscreen');
    document.getElementById('panel-top').classList.add('panel-top-fullscreen');
    document.getElementById('panel-bottom').classList.add('panel-bottom-fullscreen');

}

function changeViewNormalScreen() {
    document.getElementById('canvas-frame').classList.remove('d-none');
    document.getElementById('canvas').style.width = '720px';
    document.getElementById('canvas').style.height = '480px';
    document.getElementById('pannel-container').classList.remove('startscreenFullScreen');
    document.getElementById('top-pannel').classList.remove('topBotPannelFullScreen');
    document.getElementById('mid-pannel').classList.remove('midPannelFullScreen');
    document.getElementById('bottom-pannel').classList.remove('topBotPannelFullScreen');
}

// <---------------------------------------------------------------------------------------->



// Sharke, der tapfere Hai, schwimmt durch das Meer. Er kämpft gegen Quallen und Kugelfische mit Blasen- und Flossenschlagattacken. Auf seiner Mission sammelt er vergiftete Flaschen und Münzen ein. Schließlich stellt er sich dem furchterregenden Endboss, einem Walfisch. Sharke setzt die vergifteten Flaschen geschickt als Waffen gegen den Walfisch ein, indem er ihm kräftige Schläge verpasst und seine Abwehrkräfte schwächt. Mit jedem gut gezielten Wurf wird der Walfisch immer verwundbarer. Am Ende triumphiert Sharke, stellt das Gleichgewicht des Ozeans wieder her und verdient sich den Titel eines legendären Beschützers.
