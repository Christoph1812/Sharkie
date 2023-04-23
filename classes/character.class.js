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
    world;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_swimming);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
            if (this.world.keyboard.up && this.y > -60) {
                this.y -= this.speed;
                this.otherDirection = true;
            }
            if (this.world.keyboard.down && this.y < 300) {
                this.y += this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;

        }, 1);


        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.up || this.world.keyboard.down) {
                // Walk animation
                let i = this.currentImage % this.images_swimming.length; // modulo  let i = 7 % 6; => 1, Rest 1
                // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0
                let path = this.images_swimming[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);

    }




    jump() {

    }
}