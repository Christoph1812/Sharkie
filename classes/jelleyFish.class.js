class JellyFish extends MovableObject {
    height = 80;
    width = 70;
    images_swimming = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.images_swimming);
        this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 500
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate()

    }


    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.images_swimming.length; // modulo  let i = 7 % 6; => 1, Rest 1
            // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0
            let path = this.images_swimming[i];
            this.img = this.imageCache[path];
            this.currentImage++;

        }, 1000 / 3);
    }


}