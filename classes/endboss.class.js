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
    world;
    hadFirstContact = false;


    constructor() {
        super().loadImage(endboss_img['swimming'][0])
        this.loadImages(endboss_img['swimming']);
        this.loadImages(endboss_img['introducing']);
        this.animate();

    }

    animate() {
        let i = 0
        setInterval(() => {
            if (i <= 8) {
                this.playAnimation(endboss_img['introducing']);
                i++;
            }
            else {
                this.playAnimation(endboss_img['swimming']);
            }


            if (this.world && this.world.character && this.world.character.x > 2000 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }

        }, 150);
    }




}