let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let gameIsPaused = true;
let gameRuns = false;



function init() {
    canvas = document.getElementById('canvas');
    playBackgroundSound();
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

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) {
        keyboard.left = true;
    }
    if (e.keyCode == 39) {
        keyboard.right = true;
    }
    if (e.keyCode == 38) {
        keyboard.up = true;
    }
    if (e.keyCode == 40) {
        keyboard.down = true;
    }
    if (e.keyCode == 32) {
        keyboard.space = true;
    }
    if (e.keyCode == 68) {
        keyboard.d = true;
    }
    if (e.keyCode == 70) {
        keyboard.f = true;
    }

});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
        keyboard.left = false;
    }
    if (e.keyCode == 39) {
        keyboard.right = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = false;
    }
    if (e.keyCode == 40) {
        keyboard.down = false;
    }
    if (e.keyCode == 32) {
        keyboard.space = false;
    }
    if (e.keyCode == 68) {
        keyboard.d = false;
    }
    if (e.keyCode == 70) {
        keyboard.f = false;
    }

});     