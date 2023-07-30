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


function showLoadingScreen() {
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('d-none')
    loadingScreen.innerHTML = /*html*/`
    <img src="img/assests/sharkie-sleeping.gif" alt="Sleeping Sharkie">
    <div class="loading-bar-container">
                <div class="loading-bar" id="loadingBar"></div>
            </div>
            <p>Loading...</p>`
}




/**
 * Initializes the game by setting up the level, creating the game world, hiding the start screen,and playing the background sound when the start button on the start screen is clicked.
 */
function startGame() {
    initLevel();
    gameRuns = true;
    world = new World(canvas, keyboard);
    document.getElementById('loading-screen').classList.remove('d-none');
    document.getElementById('panel-middle').classList.add('v-none');
    document.getElementById('start-screen').removeAttribute('style');
    showMobileButton();
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
    mobileButtonRigth();
    mobileButtonLeft();
    mobileButtonUp();
    mobileButtonDown();
    mobileButtonFinslap();
    mobileButtonBubble();
    mobileButtonPoisionBubble();
}

function mobileButtonRigth() {
    document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    });
    document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    });
}

function mobileButtonLeft() {
    document.getElementById('btn-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
    });
    document.getElementById('btn-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
    });
}
function mobileButtonUp() {
    document.getElementById('btn-up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.up = true;
    });
    document.getElementById('btn-up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.up = false;
    });
}
function mobileButtonDown() {
    document.getElementById('btn-down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.down = true;
    });
    document.getElementById('btn-down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.down = false;
    });
}
function mobileButtonFinslap() {
    document.getElementById('btn-fin-slap').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.space = true;
    });
    document.getElementById('btn-fin-slap').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.space = false;
    });
}


function mobileButtonBubble() {
    document.getElementById('btn-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.d = true;
    });
    document.getElementById('btn-bubble').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.d = false;
    });
}

function mobileButtonPoisionBubble() {
    document.getElementById('btn-poison-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.f = true;
    });
    document.getElementById('btn-poison-bubble').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.f = false;
    });
}

function showGameOverScreen() {

}



function showWinScreen() {

}




