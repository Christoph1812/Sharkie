class PufferFish extends MovableObject {
    color;
    height = 50;
    width = 70;

    constructor(color, x, y) {
        super().loadImage(pf_swimming_img[color][0]);
        this.loadImages(pf_swimming_img[color]);
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = 0.15 + Math.random() * 0.50;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(pf_swimming_img[this.color]);

        }, 1000 / 15);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

    }

}

