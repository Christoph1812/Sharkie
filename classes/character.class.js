class Character extends MovableObject {
    height = 180;
    width = 220;
    images_swimming = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    currentImage = 0;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_swimming);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.images_swimming.length; // modulo  let i = 7 % 6; => 1, Rest 1
            // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0
            let path = this.images_swimming[i];
            this.img = this.imageCache[path];
            this.currentImage++;

        }, 1000 / 3);
    }



    jump() {

    }
}