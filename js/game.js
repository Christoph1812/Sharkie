let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let gameIsPaused = true;
let gameRuns = false;
let imagesToLoad = 0; // all images that need to be loaded
let imagesLoaded = 0; //  images that are loaded
let chargeProgress = 0; // the charge progress
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
}


/**
 * shows the loading screen
 */
function showLoadingScreen() {
    createGame();
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('d-none');
    loadingScreen.innerHTML = createHtmlLoadingScreen();
    loadingInterval = setInterval(updateLoadingBar, 100);
}

/**
 * updates the loading bar.
 */
function updateLoadingBar() {
    const loadingBar = document.getElementById('loadingBar');
    chargeProgress = (imagesLoaded / imagesToLoad) * 100;
    loadingBar.style.width = `${chargeProgress}%`;
    loadingBar.innerText = `${chargeProgress.toFixed(0)}%`;

    if (chargeProgress >= 100) {
        setTimeout(() => {
            clearInterval(loadingInterval);
            startGame();
        }, 1000);
    }
}


/**
 *  * Initializes a new game by initializing the level, starting the game, and creating a new game world.
 */
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
    document.getElementById('legal-notice-points').classList.add('d-none');
    document.getElementById('start-screen').removeAttribute('style');
    showMobileButton();
    playBackgroundSound();
}


/**
 * stops all intervals.
 */
function stopInterval() {
    if (gameRuns) {
        intervalIds.forEach(intervalId => {
            clearInterval(intervalId);
        });
        gameRuns = false;
    }
}


/**
 * Starts all intervals:
 */
function startInterval() {
    if (!gameRuns) {
        gameRuns = true;
        intervalIds.forEach(interval => {
            const newIntervalId = setInterval(interval.code, interval.delay);
            interval.id = newIntervalId;
        });
    }
}


/**
 * reload the page to return to the home screen
 */
function backToStart() {
    window.location.reload();
}


/**
 * shows the game over screen
 */
function showGameOverScreen() {
    setTimeout(() => {
        document.getElementById('end-screen-headline').innerText = 'Game Over';
        document.getElementById('end-screen-img').src = "img/assests/Sharkie-dead.png"
        document.getElementById('end-screen-img').removeAttribute('style');
        document.getElementById('end-screen-container').classList.remove('d-none');
        stopBackgroundSound();
        playLoseSound();
        clearAllIntervals();
    }, 3000);
}


/**
 * shows the game over screen
 */
function showWinScreen() {
    setTimeout(() => {
        document.getElementById('end-screen-headline').innerText = 'You Win';
        document.getElementById('end-screen-img').src = "img/assests/Endboss-dead.png";
        document.getElementById('end-screen-img').setAttribute('style', 'width')
        document.getElementById('end-screen-container').classList.remove('d-none');
        stopBackgroundSound();
        playWinSound();
        clearAllIntervals();
    }, 3000);
}


/**
 * clears all intervals und create a new game. 
 */
function tryAgain() {
    clearAllIntervals();
    init();
    createGame();
    document.getElementById('end-screen-container').classList.add('d-none');
}


/**
 * clears all intervals
 */
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
