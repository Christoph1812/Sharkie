class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 1;
    energy = 100;
    lastHit = 0;


    drawFrame(ctx) {
        if (this instanceof JellyFish) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameCharacter(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 40, this.y + 80, this.width - 80, this.height - 120);
            ctx.stroke();
        }
    }


    // character.isColloding(JellyFish)
    isColliding(obj) {
        return ((this.x + 40) + (this.width - 80)) >= obj.x && (this.x + 40) <= (obj.x + obj.width) &&
            ((this.y + 80) + (this.height - 120)) >= obj.y &&
            (this.y + 80) <= (obj.y + obj.height);
    }


    hit() {
        this.energy -= 5;
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
        this.otherDirection = false;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    moveUp() {
        this.y -= this.speed;
        this.otherDirection = true;
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