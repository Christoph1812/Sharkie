class Character extends MovableObject {
    height = 180;
    width = 220;
    speed = 2;
    images_swimming = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    images_hurt_poisoned = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];
    images_hurt_elektric_shock = [

    ];
    images_dead_poisoned = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];


    world;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_swimming);
        this.loadImages(this.images_dead_poisoned);
        this.loadImages(this.images_hurt_poisoned)
        this.animate();
        this.sinksdown();
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

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_dead_poisoned);
            }
            else if (this.isHurt()) {
                this.playAnimation(this.images_hurt_poisoned);
            }
            else (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down)
            this.swimmingAnimation();
        }, 150);

    }



    swimmingAnimation() {
        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                let i = this.currentImage % this.images_swimming.length; // modulo  let i = 7 % 6; => 1, Rest 1
                // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0
                let path = this.images_swimming[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }



    // Must be tested
    sinksdown() {
        setInterval(() => {
            if (!this.world.keyboard.right || !this.world.keyboard.left || !this.world.keyboard.up || !this.world.keyboard.down) {
                if (this.y < 300) {
                    this.y += this.speedY;
                }

                if (this.y == 300) {

                }
            }
        }, 1000 / 25);

    }
}