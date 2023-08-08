
/**
 * Adds all event listeners for different keys.
 * Each event listener is associated with the corresponding key name and the keyboard object.
 */
function keyEventListeners() {
    attachKeyListener('ArrowLeft', 'left');
    attachKeyListener('ArrowRight', 'right');
    attachKeyListener('ArrowUp', 'up');
    attachKeyListener('ArrowDown', 'down');
    attachKeyListener(' ', 'space');
    attachKeyListener('d', 'd');
    attachKeyListener('f', 'f');
}


/**
 * Sets the status of a specific key in the keyboard object.
 *
 * @param {string} key - The name of the key.
 * @param {boolean} status - The status the key should have (true or false).
 */
function setKeyStatus(key, status) {
    keyboard[key] = status;
}


/**
 * Attaches an event listener for a specific key to the "keydown" and "keyup" events.
 * When the key is pressed, its status will be set to "true", and when it's released, the status will be set to "false".
 *
 * @param {string} key - The name of the key to which the event listener is applied.
 * @param {string} keyName - The name of the key in the keyboard object to set its status.
 */
function attachKeyListener(key, keyName) {
    window.addEventListener('keydown', (e) => {
        if (e.key === key) {
            setKeyStatus(keyName, true);
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === key) {
            setKeyStatus(keyName, false);
        }
    });
}


/**
 * Adds all eventhandlers for the mobilebuttons which are needed for the game
 */
function mobileButtonsHandler() {
    mobileButtonRight();
    mobileButtonLeft();
    mobileButtonUp();
    mobileButtonDown();
    mobileButtonFinslap();
    mobileButtonBubble();
    mobileButtonPoisonBubble();
}


/**
 * Adds an evenhandler for move right to the "arrow right" key.
 */
function mobileButtonRight() {
    document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    });
    document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    });
}


/**
 * Adds an evenhandler for move left to the "arrow left" key.
 */
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


/**
 * Adds an evenhandler for move up to the "arrow up" key.
 */
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


/**
 * Adds an evenhandler for move down to the "arrow down" key.
 */
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


/**
 * Adds an evenhandler for fin slap to the "space" key.
 */
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


/**
 * Adds an evenhandler for normal bubble to the "D" key.
 */
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


/**
 * Adds an evenhandler for poison bubble to the "F" key.
 */
function mobileButtonPoisonBubble() {
    document.getElementById('btn-poison-bubble').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.f = true;
    });
    document.getElementById('btn-poison-bubble').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.f = false;
    });
}



function renderMobileButtons() {
    let mobileButton = document.getElementById('panel-bottom');

    mobileButton.innerHTML = createHtmlMobileButtons();
}


/**
 * checks the screen size and orientation. In landscape mode on a mobile device, the mobile buttons are displayed.
 */
function showMobileButton() {
    const panelButtom = document.getElementById('panel-bottom');
    const isMobile = isMobileDevice();
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && isLandscape && gameRuns) {
        panelButtom.classList.remove('d-none');
        renderMobileButtons();
        mobileButtonsHandler();
    } else {
        panelButtom.classList.add('d-none');
    }
}
