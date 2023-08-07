class PufferFish extends MovableObject {

    color;
    height = 50;
    width = 70;
    characterIsNear = false;
    isHitByFinSlap = false;
    slapSpeed = 5;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 10
    }
    isABubble = false;
    transitionAnimation = false;


    constructor(color, x, y) {
        super().loadImage(pf_swimming_img[color][0]);
        this.loadImages(pf_swimming_img[color]);
        this.loadImages(pf_transition_img[color]);
        this.loadImages(pf_dead_img[color]);
        this.loadImages(pf_bubbleswim_img[color]);
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = 0.15 + Math.random() * 0.10;
        this.animate();
        this.movment();
    }


    animate() {
        setInterval(() => {
            if (this.characterIsNear && !this.isABubble) {
                this.playTransitionAnimation();
                this.transitionAnimation = true;
            }
            else if (this.isABubble) {
                this.playAnimation(pf_bubbleswim_img[this.color])
            } else {
                this.playAnimation(pf_swimming_img[this.color]);
            }
            if (this.isHitByFinSlap) {
                this.hitByFinSlap();
            }
        }, 100);
    }


    playTransitionAnimation() {
        if (!this.transitionAnimation) {
            this.currentImage = 0;
        }
        if (this.currentImage <= 4) {
            this.playAnimation(pf_transition_img[this.color]);
        } else {
            this.isABubble = true;
        }
    }


    movment() {
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

