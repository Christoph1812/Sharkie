class PufferFish extends MovableObject {
    color;
    height = 50;
    width = 70;
    characterIsNear = false;
    isHitByFinSlap = false;
    slapSpeed = 5;


    constructor(color, x, y) {
        super().loadImage(pf_swimming_img[color][0]);
        this.loadImages(pf_swimming_img[color]);
        this.loadImages(pf_transition_img[color]);
        this.loadImages(pf_dead_img[color]);
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = 0.15 + Math.random() * 0.50;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.characterIsNear) {
                this.playAnimationOnce(pf_transition_img[this.color]);
            }
            if (this.isHitByFinSlap) {
                this.hitByFinSlap();
            } else {
                this.playAnimation(pf_swimming_img[this.color]);
            }
        }, 100);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    hitByFinSlap() {
        this.playAnimation(pf_dead_img[this.color]);
        this.x += (this.slapSpeed / 2);
        this.y += this.slapSpeed;
        if (this.y < 0) {
            const index = world.level.enemies.indexOf(this);
            if (index !== -1) {
                world.level.enemies.splice(index, 1);
            }
        }

    }



}

