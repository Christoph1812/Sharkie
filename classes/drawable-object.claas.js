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


    /**
     * This function loads an image using the specified 'path' and assigns it to the 'img' property
     * @param {string} path- The path to the image to be loaded
     */
    loadImage(path) {
        imagesToLoad++;
        this.img = new Image();
        this.img.onload = function () {
            imagesLoaded++;

            // let percent = (imagesLoaded / imagesToLoad) * 100;
            // console.log(`${percent} loaded`);
        }
        this.img.src = path;
    }


    /**
     * The function draws an image on the canvas context with error handling for loading issues
     * @param {CanvasRenderingContext2D} ctx - 2D drawing context for the canvas to draw the image.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('cloud not loadf image,', this.img.src);
        }

    }


    /**
    * Loads a list of images into the image cache.
    * @param {string[]} arr - An array of paths to the images to be loaded.
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
        if ((this instanceof JellyFish) || (this instanceof Endboss) || (this instanceof Character) || (this instanceof CollecteableObject) || (this instanceof Bubble) || (this instanceof PufferFish)) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.width, this.height - this.offset.height);
            ctx.stroke();
        }
    }

    // <--------Ende-------------->
}