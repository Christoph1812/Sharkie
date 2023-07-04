
let enter_fullscreen = false;


function openSettings() {
    document.getElementById('settings-main-overlay').classList.remove('d-none');
    overview = document.getElementById('instruction-content');
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
       <div onclick="openInstruction()" class="instruction-button">
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

function openInstruction() {
    document.getElementById('instruction-content').innerHTML =/*html*/`
    <div class="instruction-menu">
        <div class="button-menu">
            <button class="instruction-button" onclick="showStory()">Story</button>
            <button class="instruction-button" onclick="showAttack()">Attack</button>
            <button class="instruction-button" onclick="showGather()">Gather</button>
            <button class="instruction-button" onclick="showKeys()">Keys</button>
        </div>
        <div class="instruction-info" id="instruction-info"><div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch
            attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his
            defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
        </div></div>
    </div>`;
}

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



function showAttack() {
    document.getElementById('instruction-info').innerHTML =/*html*/`<div>
    <h2>Attack</h2>
    <span>Use the bubble attack against the jellyfish</span>
    <img src="img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png" alt="poisoned-bubble">
    <span>Use the fin slap attack against the bubble fishes</span>
    <img src="img/1.Sharkie/4.Attack/Fin slap/7.png" alt="Fin-slap">
    <span> Use the poisoned bubble attack against the final boss</span>
    <img src="img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png" alt="poisoned-bubble">
</div>`
}

function showGather() {
    document.getElementById('instruction-info').innerHTML =/*html*/`<div>
    <h2>Gather</h2>
    <h3>Coins</h3>
    <span>collect at least 5 coins for an extra life</span>
    <img src="img/4. Marcadores/1. Coins/4.png" alt="coin">
    <h3>poisoned bottles</h3>
    <span>Flaschen sammeln, um vergiftete Seifenblasen zu blasen</span>
    <img src="img/4. Marcadores/Posión/Animada/1.png" alt="bottle">
</div>
`
}

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
