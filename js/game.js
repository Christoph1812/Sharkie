let canvas;


let world;
let keyboard = new Keyboard();
let intervallIds = [];
let gameIsPaused = true;
let gameRuns = false;

// variable for loading screen
let imagesToLoad = 0;
let imagesLoaded = 0;
let chargeProgress = 0;
let loadingInterval;



/**
 * Saves the canvas in the canvas variable
 */
function init() {
    canvas = document.getElementById('canvas');
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    window.addEventListener('orientationchange', updateVisibility);
    keyEventListeners();
    mobileButtonsHandler();
}


function showLoadingScreen() {
    createGame()
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('d-none')
    loadingScreen.innerHTML = /*html*/`
        <img src="img/assests/sharkie-sleeping.gif" alt="Sleeping Sharkie">
        <div class="loading-bar-container">
                <div class="loading-bar" id="loadingBar">${chargeProgress.toFixed(0)}%</div>
        </div>`
    loadingInterval = setInterval(updateLoadingBar, 100);
}


function updateLoadingBar() {
    const loadingBar = document.getElementById('loadingBar');
    if (chargeProgress < 100) {
        chargeProgress = (imagesLoaded / imagesToLoad) * 100;
        loadingBar.style.width = `${chargeProgress}%`;
        loadingBar.innerHTML =/*html*/`<div class="loading-bar" id="loadingBar">${chargeProgress.toFixed(0)}%</div>`
    } else {
        setTimeout(() => {
            clearInterval(loadingInterval);
            startGame();
        }, 1000);
    }
}

function createGame() {
    initLevel();
    gameRuns = true;
    world = new World(canvas, keyboard);
}


/**
 * Initializes the game by setting up the level, creating the game world, hiding the start screen,and playing the background sound when the start button on the start screen is clicked.
 */
function startGame() {
    document.getElementById('loading-screen').classList.add('d-none');
    document.getElementById('panel-middle').classList.add('v-none');
    document.getElementById('start-screen').removeAttribute('style');
    showMobileButton();
    playBackgroundSound();
}

/**
 * reload the page to return to the home screen
 */
function backToStart() {
    window.location.reload();
}

function resetGame() {
    intervallIds.forEach(clearInterval);
}



function showGameOverScreen() {
    document.getElementById('end-screen-headline').innerText = 'Game Over';
    document.getElementById('end-screen-img').classList.remove('v-none');
    document.getElementById('end-screen-container').classList.remove('d-none');
}


function showWinScreen() {
    document.getElementById('end-screen-headline').innerText = 'You Win';
    document.getElementById('end-screen-img').classList.add('v-none');
    document.getElementById('end-screen-container').classList.remove('d-none');
}

function tryAgain() {
    clearAllIntervals();
    init();
    createGame();
    document.getElementById('end-screen-container').classList.add('d-none');

}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
};


/**
 * Manages the visibility of game-related elements and a device rotation message based on the device type and screen orientation.
 * It ensures a better user experience during gameplay on both mobile devices.
 */
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
