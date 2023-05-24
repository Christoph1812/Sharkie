class Endboss extends MovableObject {
    height = 290;
    width = 350;
    speed = 2;
    x = 2600;
    y = 0;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
    world;
    hadFirstContact = false;


    constructor() {
        super();
        this.loadImages(endboss_img['swimming']);
        this.loadImages(endboss_img['introducing']);
        this.animate();

    }

    animate() {
        let i = 0
        setInterval(() => {
            if (i < 10 && this.hadFirstContact) {
                this.playAnimation(endboss_img['introducing']);
            }
            else {
                this.playAnimation(endboss_img['swimming']);
            }

            i++;

            if (this.world && this.world.character && this.world.character.x > 2000 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }

        }, 150);
    }




}