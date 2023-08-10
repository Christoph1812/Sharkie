class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 6;
    x = 100;
    y = 120;
    world;
    offset = {
        x: 40,
        y: 80,
        width: 80,
        height: 130
    }
    idleCounter = 0; // counter to control idle animations
    isImmune = false; // variable for finslap 
    isBubbleAttacking = false; // bubble attack is performed
    isFinSlaping = false; // fin slap is performed
    isblowNoBubble = false; // blow no bubble is performed
    killedByJellyFish = false; // killed by jellyfish
    hitByJellyFish = false; // injured by the jellyfish
    finallyDead = false; // is finally dead
    deadAnimation = false; // is dying


    /**
     * Constructor for the Character class.
     * Loads initial image and initializes character animations, controls, and attacks.
     */
    constructor() {
        super().loadImage(sharkie_img['swimming'][0]);
        this.loadSharkyIamges();
        this.motionControl();
        this.animate();
        this.attack();
    }


    /**
     * Loads all the images needed for the character's animations and attacks.
     * Each image category corresponds to a specific animation or attack.
     * The images are loaded into arrays for easy access during animation.
     */
    loadSharkyIamges() {
        this.loadImages(sharkie_img['swimming']);
        this.loadImages(sharkie_img['idle']);
        this.loadImages(sharkie_img['sinking']);
        this.loadImages(sharkie_img['sleeping']);
        this.loadImages(sharkie_img['hurt_poisoned']);
        this.loadImages(sharkie_img['hurt_electric_shock'])
        this.loadImages(sharkie_img['dead_poisoned']);
        this.loadImages(sharkie_img['dead_electric_shock']);
        this.loadImages(sharkie_img['fin_slap']);
        this.loadImages(sharkie_img['blow_no_bubble']);
        this.loadImages(sharkie_img['blow_normal_bubble']);
        this.loadImages(sharkie_img['blow_poisend_bubble']);
    }


    /**
     * Controls the movments of the character and moves the camera.
     */
    motionControl() {
        let interval1 = setInterval(() => {
            if (!this.isDead()) {
                this.handleHorizontalMovement();
                this.handleVerticalMovement();
                this.handleAnimationAndCamera();
            }
        }, 1000 / 40);
        intervalIds.push(interval1);
    }

    /**
     * Controls the horizontal movments.
     */
    handleHorizontalMovement() {
        if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (this.world.keyboard.left && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }
    }


    /**
     * Controls the vertical movments.
     */
    handleVerticalMovement() {
        if (this.world.keyboard.up && this.y > -60) {
            this.moveUp();
        }
        if (this.world.keyboard.down && this.y < 300) {
            this.moveDown();
        }
    }


    /**
     * Controls the swim animation and the camera movment.
     */
    handleAnimationAndCamera() {
        if (this.oneMovementKeyIsPressed() && !this.isHurt()) {
            this.playAnimation(sharkie_img['swimming']);
            this.resetCounter();
        }
        if (this.x < 2500) {
            this.world.camera_x = -this.x + 100;
        }
    }


    /**
     * Controls the anmations of the character, dead, hurt and idle.
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.handleDeadAnimation();
            } else if (this.isHurt()) {
                this.handleHurtAnimation();
            } else if (this.noKeysArePressed()) {
                this.idleControl();
            }
            if (this.oneKeyIsPressed()) {
                this.resetCounter();
            }
            if (!this.isHurt()) {
                this.hitByJellyFish = false;
            }
        }, 100);

    }


    /**
     * Checks if the character is dead and by which enemy he was killed.
     */
    handleDeadAnimation() {
        if (this.killedByJellyFish) {
            this.playDeadAnimation(sharkie_img['dead_electric_shock']);
            this.deadAnimation = true;

        } else {
            this.playDeadAnimation(sharkie_img['dead_poisoned']);
            this.deadAnimation = true;

        }
    }

    /**
     * Checks if the character was injured and by which enemy.
     */
    handleHurtAnimation() {
        if (this.hitByJellyFish) {
            this.playAnimation(sharkie_img['hurt_electric_shock']);
            playElectroSound()
        } else {
            this.playAnimation(sharkie_img['hurt_poisoned']);
            playPoisondSound();
        }
    }


    /**
     * Plays the death animation of character using the specified image.
     * @param {path} image - arry with the paths to the images of the dead-anamtion
     */
    playDeadAnimation(image) {
        if (!this.deadAnimation) {
            this.currentImage = 0;
        }
        if (this.currentImage <= 9) {
            this.playAnimationOnce(image);
        } else {
            this.finallyDead = true;
        }
    }


    /**
     * Controls the spleeping animation of the character.
     */
    idleControl() {
        this.counter();
        if (this.idleCounter <= 40) {
            this.playAnimation(sharkie_img['idle']);
        }
        else if (this.idleCounter >= 40 && this.y < 300) {
            this.sinkDown();
        }
        else if (this.idleCounter >= 60 && this.y >= 300) {
            this.playAnimation(sharkie_img['sleeping']);
        }
    }

    /**
     * Lets the character sink to the ground.
     */
    sinkDown() {
        this.playAnimation(sharkie_img['sinking']);
        let sinking_speed = 3;
        if (this.y < 300)
            this.y += sinking_speed;

    }


    /**
     * Controls the attacks form the character.
     */
    attack() {
        setInterval(() => {
            if (this.world.keyboard.space) {
                this.handleFinSlapAttack();
            }
            if (this.world.keyboard.d) {
                this.handleNormalBubbleAttack();
            }
            if (this.world.keyboard.f) {
                this.handlepoisonBubbleAttack();
            }
        }, 100);
    }


    /**
     * Handels the fin slap animation.
     */
    handleFinSlapAttack() {
        this.aktiveAttack('space', this.isFinSlaping);
        this.playAnimation(sharkie_img['fin_slap']);
        this.isFinSlaping = true;
        this.isImmune = true;
    }


    /**
     * Handels the normal Bubble animation.
     */
    handleNormalBubbleAttack() {
        this.activeBubbleAttack('normal', 'd');
        this.playAnimation(sharkie_img['blow_normal_bubble']);
        this.isBubbleAttacking = true;
    }

    /**
     * Handels the poison bubble animation and the no bubble animation.
     */
    handlepoisonBubbleAttack() {
        if (this.world.collectedPoison > 0 || this.isBubbleAttacking) {
            this.activeBubbleAttack('poision', 'f');
            this.playAnimation(sharkie_img['blow_poisend_bubble']);
            this.isBubbleAttacking = true;
        } else {
            this.aktiveAttack('f', this.isblowNoBubble);
            this.playAnimation(sharkie_img['blow_no_bubble']);
            this.isblowNoBubble = true;
        }
    }


    /**
     * Aktivates fin slap or blow no bubble
     * @param {string} key - which key is pressed
     * @param {boolean} attack -whick attack is true
     */
    aktiveAttack(key, attack) {
        if (!attack) {
            this.currentImage = 0;
            let pressed = setInterval(() => {
                attack = true;
                this.world.keyboard[key] = true;
            }, 100)
            setTimeout(() => {
                clearInterval(pressed)
                this.isblowNoBubble = false;
                this.isFinSlaping = false;
                this.isImmune = false;
                this.world.keyboard[key] = false;
            }, 600)
        }
    }


    /**
     * Activates the bubble attack depending on the pressed key. If d is pressed, then normal bubble and on f poisened bubble.
     * @param {string} typ - its normal or poisoned bubble
     * @param {string} key - is pressed D or F
     */
    activeBubbleAttack(typ, key) {
        if (!this.isBubbleAttacking) {
            this.currentImage = 0;
            let pressed = setInterval(() => {
                this.isBubbleAttacking = true;
                this.world.keyboard[key] = true;
            }, 100)
            setTimeout(() => {
                clearInterval(pressed)
                this.isBubbleAttacking = false;
                this.world.keyboard[key] = false;
                this.createBubble(typ);
            }, 800)
        }
    }


    /**
     * Checks if one movment key is pressed
     * @returns - true if one movment key is pressed 
     */
    oneMovementKeyIsPressed() {
        return this.world.keyboard.left ||
            this.world.keyboard.right ||
            this.world.keyboard.up ||
            this.world.keyboard.down
    }


    /**
     * Checks if no is  that is assigned for the game is pressed.
     * @returns - true if no key is pressed
     */
    noKeysArePressed() {
        return !this.world.keyboard.left &&
            !this.world.keyboard.right &&
            !this.world.keyboard.up &&
            !this.world.keyboard.down &&
            !this.world.keyboard.space &&
            !this.world.keyboard.d &&
            !this.world.keyboard.f
    }

    /**
     * Checks if one is  that is assigned for the game is pressed.
     * @returns - true if one key is pressed
     */
    oneKeyIsPressed() {
        return this.world.keyboard.left ||
            this.world.keyboard.right ||
            this.world.keyboard.up ||
            this.world.keyboard.down ||
            this.world.keyboard.space ||
            this.world.keyboard.d ||
            this.world.keyboard.f
    }


    /**
     * Increases the idlecounter by 1 with each run.
     */
    counter() {
        this.idleCounter++
        this.isSinkDown = false;
    }


    /**
     * Resets the idlecounter to 0.
     */
    resetCounter() {
        this.idleCounter = 0;
    }

    /**
     * creates a bubble depending on the type.
     * @param {string} typ 
     */
    createBubble(typ) {
        let bubble = new Bubble((this.x + this.offset.x) + (this.width - this.offset.width), this.y + this.offset.y, typ);
        bubble.checkDirection(this.otherDirection, (this.width - this.offset.width));
        if (typ == 'normal') {
            this.world.bubbles.push(bubble);
        } else {
            this.world.poisonBubbles.push(bubble);
            this.world.collectedPoison--;
            world.statusbarPoisoned.setPercentage(world.statusbarPoisoned.percentage -= 20, 'poisoned');
        }
    }

}









