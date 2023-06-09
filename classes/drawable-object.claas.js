class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 300;
    height = 120;
    width = 140;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('cloud not loadf image,', this.img.src);
        }

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


    // draw Frames
    drawFrame(ctx) {
        if ((this instanceof JellyFish) || (this instanceof Endboss) || (this instanceof Character) || (this instanceof CollecteableObject) || (this instanceof Bubble)) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.width, this.height - this.offset.height);
            ctx.stroke();
        }
    }

    // <--------Ende-------------->
}