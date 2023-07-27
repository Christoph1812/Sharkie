let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let gameIsPaused = true;
let gameRuns = false;


/**
 * Saves the canvas in the canvas variable
 */
function init() {
    canvas = document.getElementById('canvas');
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('orientationchange', updateVisibility);
    mobileButtonsHandler();
}

//  <-----------PausableIntervalle mus geprüft werden ---------------------->

// setPausableInterval(() => setPausableFn(self, self.movement), 1000/60);
// setPausableInterval(() => setPausableFn(self, self.animate), 200);

// function setPausableInterval(fn, time) {
//     let id = setInterval(fn, time);
//     intervalIds.push(id);
// }


// function setPausableFn(self, fn) {
//     if(!gameIsPaused) fn(self);
// }


/**
 * Initializes the game by setting up the level, creating the game world, hiding the start screen,and playing the background sound when the start button on the start screen is clicked.
 */
function startGame() {
    initLevel();
    gameRuns = true;
    world = new World(canvas, keyboard);
    document.getElementById('panel-middle').classList.add('v-none');
    document.getElementById('start-screen').removeAttribute('style');
    showMobileButton()
    playBackgroundSound();
}

function resetGame() {
    intervallIds.forEach(clearInterval);
}


/**
 * Handls key press events and updates key state data.
 */
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keyboard.left = true;
            break;
        case 'ArrowRight':
            keyboard.right = true;
            break;
        case 'ArrowUp':
            keyboard.up = true;
            break;
        case 'ArrowDown':
            keyboard.down = true;
            break;
        case ' ':
            keyboard.space = true;
            break;
        case 'd':
            keyboard.d = true;
            break;
        case 'f':
            keyboard.f = true;
            break;

    }
});

/**
 *  Handels key release events and updates ky state data
 */
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            keyboard.left = false;
            break;
        case 'ArrowRight':
            keyboard.right = false;
            break;
        case 'ArrowUp':
            keyboard.up = false;
            break;
        case 'ArrowDown':
            keyboard.down = false;
            break;
        case ' ':
            keyboard.space = false;
            break;
        case 'd':
            keyboard.d = false;
            break;
        case 'f':
            keyboard.f = false;
            break;
    }
});


function mobileButtonsHandler() {
    document.getElementById('btn-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
    });
    document.getElementById('btn-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
    });
    document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    });
    document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    });
    document.getElementById('btn-up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.up = true;
    });
    document.getElementById('btn-up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.up = false;
    });
    document.getElementById('btn-down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.down = true;
    });
    document.getElementById('btn-down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.down = false;
    });
    document.getElementById('btn-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.d = true;
    });
    document.getElementById('btn-bubble').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.d = false;
    });
    document.getElementById('btn-fin-slap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.space = true;
    });
    document.getElementById('btn-fin-slap').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.space = false;
    });
    document.getElementById('btn-poison-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.f = true;
    });
    document.getElementById('btn-poison-bubble').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.f = false;
    });

}




/**
 * Returns true if the device is an mobile device or your in developer tools
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


// function updateVisibility() {
//     const gameContainer = document.getElementById('game-container');
//     const rotateDeviceScreen = document.getElementById('rotate-device-screen');
//     const isMobile = isMobileDevice();
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;
//     const isWideScreen = window.innerWidth >= 800;

//     const showCanvas = (!isMobile && isWideScreen) || (isMobile && isLandscape);

//     gameContainer.classList.toggle('d-none', !showCanvas);
//     rotateDeviceScreen.classList.toggle('d-none', showCanvas);

// }

// function updateVisibility() {
//     const gameContainer = document.getElementById('game-container');
//     const rotateDeviceScreen = document.getElementById('rotate-device-screen');
//     const isMobile = isMobileDevice();
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;
//     const isWideScreen = window.innerWidth >= 800;

//     if (!isMobile) {
//         // Nicht auf einem mobilen Gerät, daher entweder Desktop oder Tablet
//         if (isWideScreen) {
//             // Breiter Bildschirm, Canvas anzeigen
//             gameContainer.classList.remove('d-none');
//             rotateDeviceScreen.classList.add('d-none');
//         } else {
//             // Schmaler Bildschirm, bitte Gerät drehen anzeigen
//             gameContainer.classList.add('d-none');
//             rotateDeviceScreen.classList.remove('d-none');
//         }
//     } else {
//         // Auf einem mobilen Gerät, also nur im Landscape-Modus Canvas anzeigen
//         if (isLandscape) {
//             gameContainer.classList.remove('d-none');
//             rotateDeviceScreen.classList.add('d-none');
//         } else {
//             gameContainer.classList.add('d-none');
//             rotateDeviceScreen.classList.remove('d-none');
//         }
//     }







