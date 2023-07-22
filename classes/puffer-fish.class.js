class PufferFish extends MovableObject {
    color;
    height = 50;
    width = 70;
    characterIsNear = false;

    constructor(color, x, y) {
        super().loadImage(pf_swimming_img[color][0]);
        this.loadImages(pf_swimming_img[color]);
        this.loadImages(pf_transition_img[color])
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = 0.15 + Math.random() * 0.50;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.characterIsNear) {
                this.playAnimationOnce(pf_transition_img[this.color])
            }
        }, 100);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


    }

}

