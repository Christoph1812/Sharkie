class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 2;
    x = 150;
    y = 120;
    offset = {
        x: 40,
        y: 80,
        width: 80,
        height: 130
    }
    idle_counter = 0;
    world;


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
            if (!this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up && !this.world.keyboard.down) {
                this.counter();
                if (this.idle_counter > 3 && this.idle_counter < 20) {
                    this.playAnimation(sharkie_img['idle']);
                }
                else if (this.idle_counter > 20 && this.y < 300) {
                    this.playAnimation(sharkie_img['sinking']);
                    this.moveDown();
                    this.otherDirection = true;
                }
            }
        }, 1000);

        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            else if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            else if (this.world.keyboard.up && this.y > -60) {
                this.moveUp();
                this.otherDirection = true;
            }
            else if (this.world.keyboard.down && this.y < 300) {
                this.moveDown();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1);

    }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(sharkie_img['dead_poisoned']);
            }
            else if (this.isHurt() && !this.isDead()) {
                this.playAnimation(sharkie_img['hurt_poisoned']);
            } else if (this.world.keyboard.space) {
                this.playAnimation(sharkie_img['fin_slap']);

            } else if (this.idle_counter < 3) {
                this.playAnimation(sharkie_img['swimming']);
            }
        }, 250);
    }

    counter() {
        setInterval(() => {
            this.idle_counter++
        }, 1000);
    }
}

