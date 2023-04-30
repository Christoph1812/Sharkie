class PufferFish extends MovableObject {


    constructor(color, x, y) {
        super().loadImage(pf_swimming_img[color][0]);
        this.loadImages(pf_swimming_img[color]);
        this.x = x;
        this.y = y;


    }

}

