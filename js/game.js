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
    rotateScreen();
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
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');
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

// Funktion zum Rotieren des Bildschirms
function rotateScreen() {
    if (window.innerWidth >= 800) {
        document.getElementById('game-container').classList.remove('d-none');

    } else {
        document.getElementById('game-container').classList.add('d-none');

    }
}

// Eventlistener hinzufügen, um die Funktion bei Änderungen der Bildschirmbreite auszuführen
window.addEventListener("resize", rotateScreen);


