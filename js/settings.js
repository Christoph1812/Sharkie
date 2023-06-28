
let enter_fullscreen = false;


function openSettings() {
    document.getElementById('settings-main-overlay').classList.remove('d-none');
}


function closeSettings() {
    document.getElementById('settings-main-overlay').classList.add('d-none');
}



// <-------------------------Fullscreen------------------------------------>
function toggleFullscreen() {
    let fullscreen_setting = document.getElementById('fullscreen-setting');


    if (!enter_fullscreen) {
        fullscreen_setting.innerHTML = /*html*/ `<img src="img/assests/fullscreen-exit.png" alt="Fullscreen">
                <p>Exit fullscreen</p>`
        enterFullscreen();
    } else {
        fullscreen_setting.innerHTML = /*html*/ `<img src="img/assests/fullscreen-enter.png" alt="Fullscreen">
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
