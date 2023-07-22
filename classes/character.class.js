class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 5;
    x = 2200;
    y = 120;
    offset = {
        x: 40,
        y: 80,
        width: 80,
        height: 130
    }
    idleCounter = 0;
    world;
    isBubbleAttacking = false;
    isFinSlaping = false;
    isblowNoBubble = false;
    killedByJellyFish = false;
    hitByJellyFish = false;


    constructor() {
        super().loadImage(sharkie_img['swimming'][0]);
        this.loadSharkyIamges();
        this.motionControl();
        this.animate();
        this.attack();
    }

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

    motionControl() {
        setInterval(() => {
            if (!this.isDead()) {
                if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                }
                if (this.world.keyboard.left && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                }
                if (this.world.keyboard.up && this.y > -60) {
                    this.moveUp();
                }
                if (this.world.keyboard.down && this.y < 300) {
                    this.moveDown();
                }
                if (this.oneMovementKeyIsPressed() && !this.isHurt()) {
                    this.playAnimation(sharkie_img['swimming']);
                    this.resetCounter();
                }

                this.world.camera_x = -this.x + 100;
            }
        }, 1000 / 50);

    }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
                if (this.killedByJellyFish) {
                    this.playAnimation(sharkie_img['dead_electric_shock']);
                } else {
                    this.playAnimation(sharkie_img['dead_poisoned']);
                }
            }
            if (this.isHurt() && !this.isDead()) {
                if (this.hitByJellyFish) {
                    this.playAnimation(sharkie_img['hurt_electric_shock']);
                } else
                    this.playAnimation(sharkie_img['hurt_poisoned']);

            }
            if (this.noKeysArePressed() && !this.isHurt() && !this.isDead()) {
                this.playAnimation(sharkie_img['idle']);
                this.idleControl();
            }
            if (this.oneKeyIsPressed()) {
                this.resetCounter();
                console.log(this.idleCounter);

            }
        }, 100)
    }


    idleControl() {
        this.counter();
        if (this.idleCounter >= 40 && this.y <= 300) {
            this.sinkDown();
        }
        if (this.idleCounter >= 60 && this.y >= 300) {
            this.playAnimation(sharkie_img['sleeping'])
        }
    }


    sinkDown() {
        this.playAnimation(sharkie_img['sinking']);
        let sinking_speed = 3;
        this.y += sinking_speed;

    }


    attack() {
        setInterval(() => {
            if (this.world.keyboard.space) {
                this.aktiveAttack('space', this.isFinSlaping);
                this.playAnimation(sharkie_img['fin_slap']);
                this.isFinSlaping = true;
            }
            if (this.world.keyboard.d) {
                this.activeBubbleAttack('normal', 'd')
                this.playAnimation(sharkie_img['blow_normal_bubble']);
                this.isBubbleAttacking = true;

            }
            if (this.world.keyboard.f) {
                if (this.world.collectedPoison > 0 || this.isBubbleAttacking) {
                    this.activeBubbleAttack('poision', 'f')
                    this.playAnimation(sharkie_img['blow_poisend_bubble']);
                    this.isBubbleAttacking = true;

                } else {
                    this.aktiveAttack('f', this.isblowNoBubble);
                    this.playAnimation(sharkie_img['blow_no_bubble']);
                    this.isblowNoBubble = true;
                }
            }
        }, 100);
    }


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
                this.world.keyboard[key] = false;
            }, 700)
        }
    }


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


    oneMovementKeyIsPressed() {
        return this.world.keyboard.left ||
            this.world.keyboard.right ||
            this.world.keyboard.up ||
            this.world.keyboard.down
    }


    noKeysArePressed() {
        return !this.world.keyboard.left &&
            !this.world.keyboard.right &&
            !this.world.keyboard.up &&
            !this.world.keyboard.down &&
            !this.world.keyboard.space &&
            !this.world.keyboard.d &&
            !this.world.keyboard.f
    }


    oneKeyIsPressed() {
        return this.world.keyboard.left ||
            this.world.keyboard.right ||
            this.world.keyboard.up ||
            this.world.keyboard.down ||
            this.world.keyboard.space ||
            this.world.keyboard.d ||
            this.world.keyboard.f
    }


    // can possibly be deleted
    resetAttacking() {
        this.isBubbleAttacking = false
        this.world.keyboard.H = this.world.keyboard.J = this.world.keyboard.SPACE = false;
    }


    counter() {
        this.idleCounter++
    }


    resetCounter() {
        this.idleCounter = 0;
    }


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









