class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 1;
    energy = 100;
    lastHit = 0;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }

    // character.isColloding(JellyFish)
    isColliding(obj) {
        return ((this.x + this.offset.x) + (this.width - this.offset.width)) >= (obj.x + obj.offset.x) && (this.x + this.offset.x) <= ((obj.x + this.offset.x) + (obj.width - obj.width)) &&
            ((this.y + this.offset.y) + (this.height - this.offset.height)) >= (obj.y + obj.offset.y) &&
            (this.y + this.offset.y) <= ((obj.y + obj.offset.y) + (obj.height - obj.offset.height));
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
        return timepassed = timepassed < 3;
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
        this.otherDirection = true;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;


    }
}