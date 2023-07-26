class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    /**
     * Creates the background of the Game, with an image and an X-coordinate.
     * @param {string} imagePath - The path to the image to be loaded.
     * @param {number} x - The X-coordinate of the object.
     * @constructor
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}