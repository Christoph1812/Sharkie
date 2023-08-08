class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 30;
    energy = 100;
    lastHit = 0;
    timepassed;
    marginX = 80;
    marginY = 40;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }


    /**
     * Checks if the current object is colliding with another object.
     * @param {Object} obj - The object to check for collision with.
     * @returns {boolean} True if collision is detected, false otherwise.
     */
    isColliding(obj) {
        return (this.x + this.offset.x + this.width - this.offset.width) > (obj.x + obj.offset.x) &&
            (this.x + this.offset.x) < (obj.x + obj.offset.x + obj.width - obj.offset.width) &&
            (this.y + this.offset.y + this.height - this.offset.height) > obj.y + obj.offset.y &&
            (this.y + this.offset.y) < (obj.y + obj.offset.y + obj.height - obj.offset.height);
    }


    /**
     * Checks if the current object is near another object with a certain margin.
     * @param {Object} obj - The object to check proximity with.
     * @param {number} marginX - The margin X.
     * @param {number} marginY - The margin Y.
     * @returns {boolean} True if objects are near, false otherwise.
     */
    isNear(obj) {
        return (this.x + this.offset.x + this.width - this.offset.width) > (obj.x + obj.offset.x - this.marginX) &&
            (this.x + this.offset.x) < (obj.x + obj.offset.x + obj.width - obj.offset.width + this.marginX) &&
            (this.y + this.offset.y + this.height - this.offset.height) > (obj.y + obj.offset.y - this.marginY) &&
            (this.y + this.offset.y) < (obj.y + obj.offset.y + obj.height - obj.offset.height + this.marginY);
    }


    /**
     * Decreases the object's energy by 20 units.
     * If the energy goes below 0, it is set to 0.
     */
    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     *  Checks if the energy is 0.
     * @returns {boolean} true if the engerie is 0.
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * Checks if the object is currently considered hurt based on the time since the last hit.
     * @returns {boolean} True if the object is considered hurt.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed = timepassed < 1.5;
    }


    /** 
     * Moves the object to the right by its speed.
     */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * Moves the object to the left by its speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }


    /**
     * Moves the object upwards by its speed.
     */
    moveUp() {
        this.y -= this.speed;
    }


    /**
     * Moves the object downwards by its speed.
     */
    moveDown() {
        this.y += this.speed;
    }


    /**
     * Moves the enemy left and changes direction if it reaches the left range.
     */
    movmentLeft() {
        this.moveLeft();
        if (this.x <= (this.startX - this.rangeX)) {
            this.turnX = true;
        }
    }


    /**
     * Moves the enemy right and changes direction if it reaches the original position.
     */
    movmentRight() {
        this.moveRight();
        if (this.x >= this.startX) {
            this.turnX = false;
        }
    }


    /**
     * Moves the enemy up and changes direction if it reaches the upper range.
     */
    movmentUp() {
        this.moveUp();
        if (this.y <= (this.startY - this.rangeY)) {
            this.turnY = true;
        }
    }


    /**
     * Moves the enemy down and changes direction if it reaches the original position.
     */
    movmentDown() {
        this.moveDown();
        if (this.y >= this.startY) {
            this.turnY = false;
        }
    }


    /**
    * Plays an animation loop from a list of images.
    * @param {string[]} images - List of image paths for the animation.
    */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
    * Plays an animation loop from a list of images once, until the last image is reached.
    * @param {string[]} images - List of image paths for the animation.
    */
    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i != (images.length - 1)) {
            this.currentImage++;
        }
    }


}