class Endboss extends MovableObject {
    height = 290;
    width = 350;
    speed = 10;
    x = 3200;
    y = 0;
    offset = {
        x: 30,
        y: 100,
        width: 70,
        height: 150
    }
    hadFirstContact = false; // set true in world.class
    introduce = false;  // is true if the introduce animation was executed
    characterIsNear = false; // set true in world.class
    startX;
    startY;
    rangeX;
    rangeY;
    turnX = false;
    turnY = false;
    finallyDead = false; // is true the end boss is dead
    deadAnimation = false; // is true if dead animation is running


    /**
    * constructor for the endboss class:
    * @param {number} x - The starting X position of the end boss.
    * @param {number} startY - The starting Y position of the end boss.
    * @param {number} rangeX - The horizontal movement range of the end boss.
    * @param {number} rangeY - The vertical movement range of the end boss.
    */
    constructor(x, startY, rangeX, rangeY) {
        super();
        this.x = x;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = startY;
        this.loadImage(endboss_img['introducing'][0]);
        this.loadAllImages();
        this.animationControll();
        this.movecontroll();

    }


    /**
     * Loads all images for the different animations of the end boss.
     */
    loadAllImages() {
        this.loadImages(endboss_img['swimming']);
        this.loadImages(endboss_img['introducing']);
        this.loadImages(endboss_img['attack']);
        this.loadImages(endboss_img['dead']);
        this.loadImages(endboss_img['hurt']);
    }


    /**
     *  Controls the animation of the end boss.
     */
    animationControll() {
        let interval6 = setInterval(() => {
            if (this.hadFirstContact && !this.finallyDead) {
                if (!this.introduce) {
                    this.introduceAnimation()
                }
                else if (this.isHurt() && !this.isDead()) {
                    this.playAnimation(endboss_img[`hurt`]);
                }
                else if (this.isDead()) {
                    this.playDeadAnimation();
                    this.deadAnimation = true;
                }
                else if (this.characterIsNear) {
                    this.playAnimation(endboss_img['attack']);
                }
                else {
                    this.playAnimation(endboss_img['swimming']);
                }
            }
        }, 200);
        intervalIds.push(interval6);
    }


    /**
     * Plays the dead animation
     */
    playDeadAnimation() {
        if (!this.deadAnimation) {
            this.currentImage = 0;
        }
        if (this.currentImage <= 4) {
            this.playAnimationOnce(endboss_img['dead']);
        } else {
            this.finallyDead = true;
        }

    }


    /**
     * Controlls the animation of the end boss
     */
    movecontroll() {
        let interval7 = setInterval(() => {
            if (!this.isDead() && this.introduce) {
                if (!this.turnX && this.rangeX > 0) {
                    this.movmentLeft();
                    this.otherDirection = false;
                }
                if (this.turnX && this.rangeX > 0) {
                    this.movmentRight();
                    this.otherDirection = true;
                }
                if (!this.turnY && this.rangeY > 0) {
                    this.movmentUp();
                }
                if (this.turnY && this.rangeY > 0) {
                    this.movmentDown();
                }
            }
        }, 200);
        intervalIds.push(interval7);

    }


    /**
     * Plays the introducing animation of the end boss.
     * After playing the introducing animation once, it sets the 'introduce' variable of true.
     */
    introduceAnimation() {
        this.playAnimationOnce(endboss_img['introducing']);
        if (this.currentImage == 9) {
            this.introduce = true;
        }
    }



}
