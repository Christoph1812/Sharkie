class JellyFish extends MovableObject {
    color;
    height = 60;
    width = 50;
    upLiftSpeed = 4;
    move_right = true;
    move_down = true;
    rangeX;
    rangeY;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
    catched = false; //JellyFish is catched

    /**
     * Constructor for JellyFish class.
     * @param {string} color - The color of the JellyFish.
     * @param {number} x - The initial x-coordinate of the JellyFish.
     * @param {number} y - The initial y-coordinate of the JellyFish.
     * @param {number} rangeX - The range of motion along the x-axis.
     * @param {number} rangeY - The range of motion along the y-axis.
     */
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


    /**
     * Controls the motion behavior of the JellyFish character.
     * @param {number} x - The initial x-coordinate of the JellyFish.
     * @param {number} y - The initial y-coordinate of the JellyFish.
     */
    motionControl(x, y) {
        setInterval(() => {
            if (!this.catched) {
                this.checkMoveLeftAndRight();
                this.checkMoveUpAndDown();
                this.checkDirectionVertical(y);
                this.checkDirectionHorizontal(x);
            }
        }, 1000 / 60);
    }


    checkMoveLeftAndRight() {
        if (!this.move_right && !this.rangeY >= 0) {
            this.moveLeft();
        }
        if (this.move_right && !this.rangeY >= 0) {
            this.moveRight();
        }
    }

    checkMoveUpAndDown() {
        if (!this.move_down && !this.rangeX >= 0) {
            this.moveUp();
        }
        if (this.move_down && !this.rangeX >= 0) {
            this.moveDown();
        }
    }

    checkDirectionVertical(y) {
        if (this.y >= y) {
            this.move_down = false;
        }
        if (this.y <= (y - this.rangeY)) {
            this.move_down = true;
        }
    }

    checkDirectionHorizontal(x) {
        if (this.x <= (x - this.rangeX)) {
            this.move_right = true;
        }
        if (this.x >= x) {
            this.move_right = false;
        }
    }



    /**
     * Animates the behavior of the character, including swimming animation and handling when caught.
     */
    animate() {
        let interval12 = setInterval(() => {
            if (this.catched) {
                this.playAnimation(jf_dead_img[this.color]);
                this.upLift();
            } else {
                this.playAnimation(jf_swimming_img[this.color]);
            }
        }, 100);
        intervalIds.push(interval12);
    }


    /**
     * Moves the character upwards with a specific uplift speed and handles removal if it goes above a certain threshold.
     */
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
