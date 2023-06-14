class Character extends MovableObject {
    height = 190;
    width = 230;
    speed = 2;
    x = 120;
    offset = {
        x: 40,
        y: 80,
        width: 80,
        height: 130
    }
    world;


    constructor() {
        super().loadImage(sharkie_img['swimming'][0]);
        this.loadImages(sharkie_img['swimming']);
        this.loadImages(sharkie_img['hurt_poisoned']);
        this.loadImages(sharkie_img['dead_poisoned']);
        this.loadImages(sharkie_img['fin_slap']);
        this.animate();

    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
            if (this.world.keyboard.up && this.y > -60) {
                this.moveUp();
                this.otherDirection = true;
            }
            if (this.world.keyboard.down && this.y < 300) {
                this.moveDown();
                this.otherDirection = true;
            }


        }, 1);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(sharkie_img['dead_poisoned']);
            }
            else if (this.isHurt() && !this.isDead()) {
                this.playAnimation(sharkie_img['hurt_poisoned']);
            } else if (this.world.keyboard.space) {
                this.playAnimation(sharkie_img['fin_slap']);

            } else {
                this.playAnimation(sharkie_img['swimming']);
            }
        }, 250);
    }
}

