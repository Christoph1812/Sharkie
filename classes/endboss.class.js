class Endboss extends MovableObject {
    height = 290;
    width = 350;
    speed = 10;
    x = 2600;
    y = 0;
    offset = {
        x: 30,
        y: 100,
        width: 70,
        height: 150
    }
    hadFirstContact = false;
    introduce = false;
    characterIsNear = false;
    // moventvariable
    startX;
    startY;
    rangeX;
    rangeY;
    turnX = false;
    turnY = false;




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


    loadAllImages() {
        this.loadImages(endboss_img['swimming']);
        this.loadImages(endboss_img['introducing']);
        this.loadImages(endboss_img['attack']);
        this.loadImages(endboss_img['dead']);
        this.loadImages(endboss_img['hurt']);
    }


    animationControll() {
        setInterval(() => {
            if (this.hadFirstContact) {
                if (!this.introduce) {
                    this.introduceAnimation()
                }
                else if (this.isHurt() && !this.isDead()) {
                    this.playAnimation(endboss_img[`hurt`]);
                }
                else if (this.isDead()) {
                    this.playAnimation(endboss_img['dead']);
                }
                else if (this.characterIsNear) {
                    this.playAnimation(endboss_img['attack']);
                }
                else
                    this.playAnimation(endboss_img['swimming']);
            }
        }, 200);
    }


    movecontroll() {
        setInterval(() => {
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

    }








    introduceAnimation() {
        this.playAnimationOnce(endboss_img['introducing']);
        if (this.currentImage == 9) {
            this.introduce = true;
        }
    }



}
