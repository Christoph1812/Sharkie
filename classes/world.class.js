class World {
    character = new Character();
    level;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusbarEndbossAdded = false; // true if the character goes over the triggerpoint
    statusBarLife = new StatusBar('life', 100, 25, 0);
    statusBarCoin = new StatusBar('coin', 0, 25, 45);
    statusbarPoisoned = new StatusBar('poisoned', 0, 25, 90);
    statusBarEndboss = new StatusBar('endboss', 100, 400, 0);
    bubbles = []; // arry with normal bubble objects
    poisonBubbles = []; // array with poison bubble objects
    collectedPoison = 0;
    triggerendboss = false;
    endboss = level1.enemies.find(enemy => enemy instanceof Endboss);


    /**
     * Creates a new World instance.
     * @param {HTMLCanvasElement} canvas - The canvas element to render the world.
     * @param {Keyboard} keyboard - The keyboard handler for user input.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.runIntervals();
    }


    /**
     * Sets up the world by initializing the level and character.
     */
    setWorld() {
        this.level = level1;
        this.character.world = this;

    }


    /**
     * Runs intervals for various game checks and updates.
     */
    runIntervals() {
        let interval11 = setInterval(() => {
            this.checkCollisionsCollectibles();
            this.checkCollisionJellyFish();
            this.checkcollisionBubble();
            this.checkcollisionPoisonBubble()
            this.checkCollisionEndboss();
            this.checkCollisionPufferFish();
            this.triggerEndboss();
            this.checkIsNear();
            this.checkEndOfGame();
        }, 100)
        intervalIds.push(interval11);
    }


    /**
     * Checks if the character is near enemies and updates their behavior accordingly.
     */
    checkIsNear() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isNear(enemy) && (enemy instanceof Endboss)) {
                this.endboss.characterIsNear = true;
            }
            else {
                this.endboss.characterIsNear = false;

            }
            if (this.character.isNear(enemy) && (enemy instanceof PufferFish)) {
                enemy.characterIsNear = true;
            }
        });
    }


    /**
     * Checks for collisions between the character and jellyfish enemies.
     */
    checkCollisionJellyFish() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt() && (enemy instanceof JellyFish)) {
                this.statusBarLife.setPercentage(this.statusBarLife.percentage -= 20, 'life');
                this.character.hit();
                if (world.character.energy == 0) {
                    this.character.killedByJellyFish = true;
                } else {
                    this.character.hitByJellyFish = true;
                }
            }
        });
    }


    /**
     * Checks for collisions between the character and the end boss enemy.
     */
    checkCollisionEndboss() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt() && (enemy instanceof Endboss) && !enemy.isHurt()) {
                this.statusBarLife.setPercentage(this.statusBarLife.percentage -= 20, 'life');
                this.character.hit();
            }
        });
    }


    /**
     * Checks for collisions between the character and puffer fish enemies.
     */
    checkCollisionPufferFish() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt() && (enemy instanceof PufferFish)) {
                if (this.character.isImmune) {
                    enemy.isHitByFinSlap = true;
                } else {
                    this.statusBarLife.setPercentage(this.statusBarLife.percentage -= 20, 'life');
                    this.character.hit();
                }

            }
        });
    }


    /**
     * Checks for collisions between bubbles and enemies.
     */
    checkcollisionBubble() {
        this.bubbles.forEach((bubble) => {
            if (bubble.y <= 0)
                this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
                    if (enemy instanceof JellyFish) {
                        enemy.catched = true;
                    }
                }
            })
        })
    }


    /**
     * Checks for collisions between poison bubbles and enemies.
     */
    checkcollisionPoisonBubble() {
        this.poisonBubbles.forEach((bubble) => {
            if (bubble.y <= 0)
                this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
                    if (enemy instanceof Endboss) {
                        this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage -= 20, 'endboss');
                        enemy.hit();
                    }
                }
            })
        })
    }


    /**
     * Checks for collisions between the character and collectible objects.
     */
    checkCollisionsCollectibles() {
        this.level.collectibles.forEach((collectible, index) => {
            if (this.character.isColliding(collectible)) {
                if (collectible.type == 'coin') {
                    this.statusBarCoin.setPercentage(this.statusBarCoin.percentage += 20, 'coin');
                    collectCoinSound();
                }
                else if (collectible.type == 'posion') {
                    this.statusbarPoisoned.setPercentage(this.statusbarPoisoned.percentage += 20, 'poisoned');
                    this.collectedPoison++;
                    playBottlesound();
                }
                this.level.collectibles.splice(index, 1);
            }
        });
    }


    /**
     * Draws the game world and its components.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // delete World
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.fixedObjects();
        this.ctx.translate(+this.camera_x, 0);
        this.movingObjects();
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * Draws fixed objects, such as status bars and end boss status.
     */
    fixedObjects() {
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusbarPoisoned);
        this.addendbossStatus();
    }


    /**
     * Draws moving objects, including enemies, collectibles, bubbles, and the character.
     */
    movingObjects() {
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectibles);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
        this.addToMap(this.character);
    }


    /**
     * Adds the end boss status bar to the map if conditions are met.
     */
    addendbossStatus() {
        if (this.character.x >= 2200 || this.statusbarEndbossAdded) {
            this.addToMap(this.statusBarEndboss);
            this.statusbarEndbossAdded = true;
        }
    }


    /**
     * Adds an array of objects to the map by calling the addToMap function for each object.
     * @param {Array} objects - An array of objects to be added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }


    /**
     * Adds a drawable object to the map and handles flipping the image if needed.
     * @param {DrawableObject} mo - The drawable object to be added to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips the image of a drawable object horizontally.
     * @param {DrawableObject} mo - The drawable object whose image will be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }


    /**
     * Restores the original image orientation after flipping.
     * @param {DrawableObject} mo - The drawable object whose image was flipped.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    /**
     * Triggers the end boss by setting its "hadFirstContact" property to true under certain conditions.
     */
    triggerEndboss() {
        if (this.character.x >= 2200 && !this.endboss.triggerendboss) {
            this.endboss.hadFirstContact = true;
        }
    }


    /**
     * Checks whether the game has ended and triggers the respective screen.
     */
    checkEndOfGame() {
        if (this.endboss.isDead()) {
            showWinScreen();
        }
        else if (this.character.isDead()) {
            showGameOverScreen();
        }
    }

}



