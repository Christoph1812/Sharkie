class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 120;
    width = 140;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


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
    isCollidingFalse(obj) {
        return ((this.x + 40) + (this.width - 80)) >= obj.x && (this.x + 40) <= (obj.x + obj.width) &&
            ((this.y + 80) + this.offsetY + (this.height - 120)) >= obj.y &&
            ((this.y + 80) + this.offsetY) <= (obj.y + obj.height);
    }

    isColliding(obj) {
        return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
            (this.Y + this.offsetY + this.height) >= obj.Y &&
            (this.Y + this.offsetY) <= (obj.Y + obj.height)
    }


    isCollidingOld(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height
    }



    /**
     * 
     * @param {Json} arr {'img/image1.png', 'img/image2.png' .....}
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }


    moveRight() {
        console.log('Moving right');
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed
        }, 1000 / 60);
    }
}