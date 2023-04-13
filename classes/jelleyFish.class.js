class JellyFish extends MovableObject {
    height = 80;
    width = 70;



    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')

        this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 500
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.y -= 0.2;
            this.x -= 0.2;
        }, 1000 / 60);
    }


}