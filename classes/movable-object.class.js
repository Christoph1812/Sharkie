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

    // character.isColloding(JellyFish)
    isCollidingold(obj) {
        return (this.x + this.width - this.offset.right) >= (obj.x + obj.offset.left) &&
            (this.y + this.height) <=  &&
            ((this.x + this.offset.y) + (this.height - this.offset.height)) >= (obj.y + obj.offset.y) &&
            (this.y + this.offset.y) <= ((obj.y + obj.offset.y) + (obj.height - obj.offset.height));
    }

    isColliding(obj)


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
        return timepassed = timepassed < 2;
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

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


}