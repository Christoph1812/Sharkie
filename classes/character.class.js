class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 3;
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
                    this.otherDirection = false;
                }
                if (this.world.keyboard.down && this.y < 300) {
                    this.moveDown();
                    this.otherDirection = false;
                }
                if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                    this.resetCounter()
                    this.playAnimation(sharkie_img['swimming']);
                }
                this.world.camera_x = -this.x + 100;
            }

        }, 1000 / 60);

    }


    animate() {
        setInterval(() => {
            if (!this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up && !this.world.keyboard.down) {
                this.idleControl()
            }
            if (this.isDead()) {
                this.playAnimation(sharkie_img['dead_poisoned']);
            }
            if (this.isHurt() && !this.isDead()) {
                this.playAnimation(sharkie_img['hurt_poisoned']);
            } if (this.world.keyboard.space) {
                this.playAnimation(sharkie_img['fin_slap']);

            }
        }, 100);
    }


    idleControl() {
        this.counter();
        if (this.idle_counter >= 5 && this.idle_counter < 50) {
            this.playAnimation(sharkie_img['idle']);
            console.log(this.idle_counter);
        }
        if (this.idle_counter >= 50 && this.y <= 300) {
            this.sinkDown();
        }
        if (this.idle_counter >= 80 && this.y >= 300) {
            this.playAnimation(sharkie_img['sleeping'])
        }
    }

    sinkDown() {
        this.playAnimation(sharkie_img['sinking']);
        let sinking_speed = 1;
        this.y += sinking_speed;

    }

    counter() {
        this.idle_counter++
    }

    resetCounter() {
        this.idle_counter = 0;
    }





}
