class Endboss extends MovableObject {
    height = 290;
    width = 350;
    speed = 2;
    x = 2600;
    y = 0;
    offset = {
        x: 30,
        y: 100,
        width: 70,
        height: 150
    }
    hadFirstContact = false;



    constructor() {
        super().loadImage(endboss_img['introducing'][0])
        this.loadAllImages();

    }

    loadAllImages() {
        this.loadImages(endboss_img['swimming']);
        this.loadImages(endboss_img['introducing']);
        this loadImages(endboss)

    }




    animationControll() {

    }




}