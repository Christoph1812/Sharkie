let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let gameIsPaused = true;
let gameRuns = false;



function init() {
    canvas = document.getElementById('canvas');
    // playBackgroundSound();
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


function startGame() {
    initLevel();
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').classList.add('d-none');

}

function resetGame() {
    intervallIds.forEach(clearInterval);
}

/**
 * This function handles key press events and updates key state data.
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
 *  This function handels key release events and updates ky state data
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
        // Add more cases for other keys if needed
    }
});