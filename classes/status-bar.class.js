class StatusBar extends DrawableObject {
    percentage = 100; // percentage for statusbars

    /**
     * constructor for StatusBar class.
     * @param {string} type - The type of the status bar.
     * @param {number} percentage - The initial percentage to display on the status bar.
     * @param {number} x - The initial x-coordinate of the status bar.
     * @param {number} y - The initial y-coordinate of the status bar.
     */
    constructor(type, percentage, x, y) {
        super();
        this.loadImages(status_bar_img[type]);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 200;
        this.setPercentage(percentage, type)
    }

    /**
     * Sets the percentage value and updates the status bar's image.
     * @param {number} percentage - The new percentage value.
     * @param {string} type - The type of the status bar.
     */
    setPercentage(percentage, type) {
        this.percentage = percentage;
        let path = status_bar_img[type][this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    /**
     * Resolves the index of the image to display based on the current percentage.
     * @returns {number} The index of the image to display.
     */
    resolveImageIndex() {
        switch (true) {
            case (this.percentage == 100):
                return 5;
            case (this.percentage >= 80):
                return 4;
            case (this.percentage >= 60):
                return 3;
            case (this.percentage >= 40):
                return 2;
            case (this.percentage >= 20):
                return 1;
            default:
                return 0;
        }
    }


}


