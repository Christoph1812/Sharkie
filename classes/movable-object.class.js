class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 30;
    energy = 100;
    lastHit = 0;
    timepassed;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }


    isColliding(obj) {
        return (this.x + this.offset.x + this.width - this.offset.width) > (obj.x + obj.offset.x) &&
            (this.x + this.offset.x) < (obj.x + obj.offset.x + obj.width - obj.offset.width) &&
            (this.y + this.offset.y + this.height - this.offset.height) > obj.y + obj.offset.y &&
            (this.y + this.offset.y) < (obj.y + obj.offset.y + obj.height - obj.offset.height);
    }


    isNear(obj) {
        return (this.x + this.offset.x + this.width - this.offset.width) > (obj.x + obj.offset.x - 80) &&
            (this.x + this.offset.x) < (obj.x + obj.offset.x + obj.width - obj.offset.width + 80) &&
            (this.y + this.offset.y + this.height - this.offset.height) > obj.y + obj.offset.y - 40 &&
            (this.y + this.offset.y) < (obj.y + obj.offset.y + obj.height - obj.offset.height + 40);
    }


    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed = timepassed < 1.5;
    }


    isInvulnerable() {
        if (this.timepassed < 2) {
            return true;
        } else {
            return false;
        }
    }


    moveRight() {
        this.x += this.speed;

    }


    moveLeft() {
        this.x -= this.speed;

    }


    moveUp() {
        this.y -= this.speed;

    }


    moveDown() {
        this.y += this.speed;

    }

    /**movments for Enemeys */
    movmentLeft() {
        this.moveLeft();
        if (this.x <= (this.startX - this.rangeX)) {
            this.turnX = true;
        }
    }


    movmentRight() {
        this.moveRight();
        if (this.x >= this.startX) {
            this.turnX = false;
        }
    }


    movmentUp() {
        this.moveUp();
        if (this.y <= (this.startY - this.rangeY)) {
            this.turnY = true;
        }
    }


    movmentDown() {
        this.moveDown();
        if (this.y >= this.startY) {
            this.turnY = false;
        }
    }
    // '< -------------------------------------->'

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        if (i != (images.length - 1)) {
            this.currentImage++;
        }
    }


}