
/* ============== Templates for settengs menu =============== */


/**
 * Template for settings.
 * @returns The Html code for the first setting page
 */
function createHtmlOpenSettings() {
    return /*html*/ `<div class="overview" id="overview"><h2>Settings</h2>
    <span class="headline-volume">volume</span>
       <div class="slider-container">
           <img class="sound-icon" id="sound-icon" src="img/assests/sound_on.png" alt="Sound">
           <input type="range" id="volume-slider" min="0" max="100" value="50" step="1">
           <output id="volume-value">50</output>
       </div>
       <div onclick="backToStart()" class="back-to-start-container" >
            <img src="img/assests/back-to-start.png" alt="Exit">
            <p>Back to start</p>
       </div>
       <div onclick="toggleFullscreen()" class="fullscreen-container" id="fullscreen-setting">
           <img src="img/assests/fullscreen-enter.png" alt="Fullscreen">
           <p>Enter Fullscreen</p>
       </div>
       <div onclick="openInstruction()" class="instruction-container">
           <img src="img/assests/info.png" alt="Info">
           <p>Instruction</p>
       </div>
       <div onclick="openCredits()" class="credits-container">
           <img src="img/assests/copyright.png" alt="Copyright">
           <p>Credits</p>
       </div>
       </div>`;
}


/**
 * Template for settings/instruction.
 * @returns  The Html for the first instruction page
 */
function createHtmlOpenInstruction() {
    return /*html*/`
    <div class="instruction-menu">
        <div class="button-menu">
            <button class="instruction-button" onclick="showStory()">Story</button>
            <button class="instruction-button" onclick="showAttack()">Attack</button>
            <button class="instruction-button" onclick="showGather()">Gather</button>
            <button class="instruction-button" onclick="showKeys()">Keys</button>
        </div>
        <div class="instruction-info" id="instruction-info">
            <h2>Story</h2>
            <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
            </div>
        </div>
    </div>`;
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/story
 */
function createhtmlShowStory() {
    return /*html*/`
    <div>
        <h2>Story</h2>
        <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
        </div>
    </div>`
}



/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/attack
 */
function createHtmlShowAttack() {
    return /*html*/`
    <div class="attack-container">
        <h2>Attack</h2>
        <div class="attack">
            <img  src="img/assests/sharkie-normal-bubble.png" alt="poisoned-bubble">
            <span>Use the bubble attack against <br> the jellyfish</span></div>
        <div class="attack">
             <img  src="img/assests/sharkie-fin-slap.png" alt="Fin-slap">
            <span>Use the fin slap attack against <br> the bubble fishes</span></div>
        <div class="attack">
            <img src="img/assests/sharkie-posion-bubble.png" alt="poisoned-bubble">
            <span> Use the poisoned bubble attack <br> against the whale</span>
        </div>
    </div>`
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/gather
 */
function createHtmlShowGather() {
    return /*html*/`
    <div class="gather-container">
        <h2>Gather</h2>         
        <h3>Coins</h3>
        <div class="gather">
            <img src="img/4. Marcadores/1. Coins/4.png" alt="coin">
            <span>collect at least 5 coins <br> for an extra life</span>
        </div>
        <h3>poisoned bottles</h3>
        <div class="gather">
            <img src="img/4. Marcadores/Posión/Animada/1.png" alt="bottle">
            <span>Collecting bottles to blow <br> poisoned bubbles</span>
        </div>  
    </div>`
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/story
 */
function createHTMLShowKeys() {
    return /*html*/`
    <div class="key-container">
        <h2>Keys</h2>
        <figure class="arrow-keys">
            <div>
                <div class="key-top" >
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-up.png" alt="Key up"></div>
                </div>
                <div class="key-bottom">
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-left.png" alt="key left"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-down.png" alt="Key down"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-right.png" alt="Key right"></div>
                </div>
            </div>
            <figcaption>Use the arrow-Keys <br> to move Sharkie</figcaption>  
        </figure>
        <figure>
            <div class="instruction-key">Space</div>
            <figcaption>Press <kbd>Space</kbd> for fin slap attack</figcaption>
        </figure>
        <figure>
            <div class="instruction-key">D</div>
            <figcaption>Press <kbd>D</kbd> for normal bubble attack </figcaption>
        </figure>
        <figure>
            <div class="instruction-key">F</div>
            <figcaption>Press <kbd>F</kbd> for poisened bubble attack</figcaption>
        </figure>
    </div>`
}


/**
 *  Template for media credits.
 * @returns the Html for media credits
 */
function createHtmlOpenCredits() {
    return /*html*/`
    <div>
        <p>Music: Aquatic Ambiance by Thunder Hawk (Official)</p>
        <p>Source: <a href="https://soundcloud.com/thunder_hawk/aquatic-ambiance">https://soundcloud.com/thunder_hawk/aquatic-ambiance</a></p>
        <p>License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported (CC BY 3.0)</a></p>
        <p>Music obtained for free with a link from <a href="https://starfrosch.com">https://starfrosch.com</a></p>
        <p>Background image: <a href="https://freepik.com">https://freepik.com</a></p>
    </div>`
}


/**
 *  Template for fullscreen setting point.
 * @returns The Html for setting point normal screen/exit fullscreen
 */
function createHtmlEnterFullscreen() {
    return /*html*/ `
    <img src="img/assests/fullscreen-exit.png" alt="Fullscreen ">
     <p>Exit fullscreen</p>`
}


/**
 *  Template for fullscreen setting point.
 * @returns The Html for setting point normal screen/enter fullscreen
 */
function createHtmlExitFullscreen() {
    return /*html*/ `
    <img src="img/assests/fullscreen-enter.png" alt="Normalscreen">
      <p>Enter fullscreen</p>`;
}

/*============================================================*/