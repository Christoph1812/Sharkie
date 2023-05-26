class SuperDangerousJellyFish extends MovableObject {
    height = 80;
    width = 70;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.images_swimming);
        this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 500
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate()

    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.images_swimming)

        }, 1000 / 3);
    }


}