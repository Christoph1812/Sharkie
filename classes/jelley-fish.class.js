class JellyFish extends MovableObject {
    color;
    height = 60;
    width = 50;
    upLiftSpeed = 4;
    move_right = false;
    move_down = false;
    rangeX;
    rangeY;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
    dead = false;
    catched = false;



    constructor(color, x, y, rangeX, rangeY) {
        super();
        this.loadImage(jf_swimming_img[color][0])
        this.loadImages(jf_swimming_img[color]);
        this.loadImages(jf_dead_img[color]);
        this.color = color
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.speed = 0.15 + Math.random() * 0.25;
        this.motionControl(x, y);
        this.animate()
    }



    motionControl(x, y) {
        setInterval(() => {
            if (!this.catched) {
                if (!this.move_right && !this.rangeY >= 0) {
                    this.moveLeft();
                }
                if (this.move_right && !this.rangeY >= 0) {
                    this.moveRight();
                }
                if (!this.move_down && !this.rangeX >= 0) {
                    this.moveUp();
                }
                if (this.move_down && !this.rangeX >= 0) {
                    this.moveDown();
                }
                if (this.y >= y) {
                    this.move_down = false;
                }
                if (this.y <= (y - this.rangeY)) {
                    this.move_down = true;
                }
                if (this.x <= (x - this.rangeX)) {
                    this.move_right = true;
                }
                if (this.x >= x) {
                    this.move_right = false;
                }
            }
        }, 1000 / 60);
    }



    animate() {
        setInterval(() => {
            if (this.catched) {
                this.playAnimation(jf_dead_img[this.color]);
                this.upLift();
            } else {
                this.playAnimation(jf_swimming_img[this.color]);
            }
        }, 100)
    }


    upLift() {
        this.y -= this.upLiftSpeed;
        if (this.y < 0) {
            const index = world.level.enemies.indexOf(this);
            if (index !== -1) {
                world.level.enemies.splice(index, 1);
            }
        }
    }
}
