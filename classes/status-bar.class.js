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


