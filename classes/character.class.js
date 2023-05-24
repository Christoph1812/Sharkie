class Character extends MovableObject {
    height = 180;
    width = 220;
    speed = 2;
    x = 120;
    offset = {
        x: 40,
        y: 80,
        width: 80,
        height: 120
    }

    world;


    constructor() {
        super().loadImage(sharkie_img['swimming'][0]);
        this.loadImages(sharkie_img['swimming']);
        this.loadImages(sharkie_img['hurt_poisoned']);
        this.loadImages(sharkie_img['dead_poisoned']);
        this.animate();

    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
            }
            this.world.camera_x = -this.x + 100;
            if (this.world.keyboard.up && this.y > -60) {
                this.moveUp()
            }
            if (this.world.keyboard.down && this.y < 300) {
                this.moveDown();
            }

        }, 1);

        // setInterval(() => {
        //     switch (true) {
        //         case (this.world.keyboard.right && this.x < this.world.level.level_end_x):
        //             this.moveRight();
        //             break;
        //         case (this.world.keyboard.left && this.x > 0):
        //             this.moveLeft();
        //             break;
        //         case (this.world.keyboard.up && this.y > -60):
        //             this.moveUp();
        //             break;
        //         case (this.world.keyboard.down && this.y < 300):
        //             this.moveDown();
        //             break;
        //         default:
        //             break;
        //     }
        //     this.world.camera_x = -this.x + 100;
        // }, 1);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(sharkie_img['dead_poisoned']);
            }
            else if (this.isHurt() && !this.isDead()) {
                this.playAnimation(sharkie_img['hurt_poisoned']);
            } else {
                this.playAnimation(sharkie_img['swimming']);
            }
        }, 150);
    }
}

