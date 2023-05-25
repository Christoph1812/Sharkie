class StatusBar extends DrawableObject {
    percentage = 100;

    constructor(type, percentage, x, y) {
        super();
        this.loadImages(status_bar_img[type]);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 200;
        this.setPercentage(percentage, type)
    }

    setPercentage(percentage, type) {
        this.percentage = percentage;
        let path = status_bar_img[type][this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        }
        else if (this.percentage > 40) {
            return 2;
        }
        else if (this.percentage > 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}


