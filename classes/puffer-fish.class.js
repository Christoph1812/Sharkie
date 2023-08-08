class PufferFish extends MovableObject {
    color;
    height = 50;
    width = 70;

    slapSpeed = 5;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 10
    }
    characterIsNear = false; // is set true in world.class
    isHitByFinSlap = false; // is set true in world.class
    isABubble = false; // transition animation is already done
    transitionAnimation = false; // transition animation is running

    /**
    * Constructor for the PufferFish class.
    * @param {string} color - The color of the puffer fish.
    * @param {number} x - The initial x-coordinate of the puffer fish.
    * @param {number} y - The initial y-coordinate of the puffer fish.
    */
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


    /**
     * Animates the puffer fish's movements and animations.
     */
    animate() {
        let interval9 = setInterval(() => {
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
        intervalIds.push(interval9);

    }


    /**
     * Plays the transition animation.
     */
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


    /**
     * Controls the puffer fish's basic movement behavior.
     */
    movment() {
        let interval10 = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        intervalIds.push(interval10);

    }


    /**
     * Handles the puffer fish being hit by a fin slap.
     */
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

