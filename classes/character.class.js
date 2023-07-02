class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 5;
    x = 150;
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



    constructor() {
        super();
        this.loadSharkyIamges();
        this.motionControl();
        this.animate();
    }

    loadSharkyIamges() {
        this.loadImage(sharkie_img['swimming'][0]);
        this.loadImages(sharkie_img['swimming']);
        this.loadImages(sharkie_img['idle']);
        this.loadImages(sharkie_img['sinking']);
        this.loadImages(sharkie_img['sleeping']);
        this.loadImages(sharkie_img['hurt_poisoned']);
        this.loadImages(sharkie_img['dead_poisoned']);
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
                if (OneMovementKeyIsPressed()) {
                    this.playAnimation(sharkie_img['swimming']);
                }
                this.world.camera_x = -this.x + 100;
            }

        }, 1000 / 50);

    }



    animate() {
        setInterval(() => {
            // if (!this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up && !this.world.keyboard.down) {
            //     this.idleControl()
            // }
            // if (this.isDead()) {
            //     this.playAnimation(sharkie_img['dead_poisoned']);
            // }
            // if (this.isHurt() && !this.isDead()) {
            //     this.playAnimation(sharkie_img['hurt_poisoned']);



            //  <-----------------------------Attacken---------------------->   
            if (this.world.keyboard.space) {
                this.aktiveFinslapAttack('space');
                this.playAnimation(sharkie_img['fin_slap']);
                this.isFinSlaping = true;
            }
            if (this.world.keyboard.d) {
                this.activeBubbleAttack('normal', 'd')
                this.playAnimation(sharkie_img['blow_normal_bubble']);
                this.isBubbleAttacking = true;

            }
            if (this.world.keyboard.f) {
                this.activeBubbleAttack('poision', 'f')
                this.playAnimation(sharkie_img['blow_poisend_bubble']);
                this.isBubbleAttacking = true;
            }
        }, 100);
    }

    aktiveFinslapAttack(key) {
        if (!this.isFinSlaping) {
            this.currentImage = 0;
            let pressed = setInterval(() => {
                this.isFinSlaping = true;
                this.world.keyboard[key] = true;
            }, 100)
            setTimeout(() => {
                clearInterval(pressed)
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


    OneMovementKeyIsPressed() {
        return this.world.keyboard.left ||
            this.world.keyboard.right ||
            this.world.keyboard.up ||
            this.world.keyboard.down;
    }

    allKeysArePressed() {
        !this.world.keyboard.left &&
            !this.world.keyboard.right &&
            !this.world.keyboard.up &&
            !this.world.keyboard.down &&
            !this.world.keyboard.space &&
            !this.world.keyboard.d &&
            !this.world.keyboard.f;
    }

    idleControl() {
        this.counter();
        if (this.idleCounter >= 5 && this.idleCounter < 50) {
            this.playAnimation(sharkie_img['idle']);
        }
        if (this.idleCounter >= 50 && this.y <= 300) {
            this.sinkDown();
        }
        if (this.idleCounter >= 80 && this.y >= 300) {
            this.playAnimation(sharkie_img['sleeping'])
        }
    }

    resetAttacking() {
        this.isBubbleAttacking =
            this.world.keyboard.H = this.world.keyboard.J = this.world.keyboard.SPACE = false;
    }

    sinkDown() {
        this.playAnimation(sharkie_img['sinking']);
        let sinking_speed = 1;
        this.y += sinking_speed;

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
        }

    }





}









