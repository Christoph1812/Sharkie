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
        return ((this.x + 40) + (this.width - 80)) >= obj.x && (this.x + 40) <= (obj.x + obj.width) &&
            ((this.y + 80) + (this.height - 120)) >= obj.y &&
            (this.y + 80) <= (obj.y + obj.height);
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
        return timepassed = timepassed < 1;
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