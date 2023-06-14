class JellyFish extends MovableObject {
    height = 60;
    width = 50;
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


    constructor(color, x, y, rangeX, rangeY) {
        super();
        this.loadImage(JF_swimming_img[color][0]);
        this.loadImages(JF_swimming_img[color]);
        this.color = color
        this.x = x;
        this.y = y;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate(x, y)

    }


    animate(x, y) {
        setInterval(() => {
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

        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(JF_swimming_img[this.color]);

        }, 1000 / 3);
    }


}