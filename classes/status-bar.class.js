class StatusBar extends DrawableObject {

    images_life = [
        'img/4. Marcadores/green/Life/0_copia 3.png',
        'img/4. Marcadores/green/Life/20_copia 4.png',
        'img/4. Marcadores/green/Life/40_copia 3.png',
        'img/4. Marcadores/green/Life/60_copia 3.png',
        'img/4. Marcadores/green/Life/80_copia 3.png',
        'img/4. Marcadores/green/Life/100_copia 2.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.images_life);
        this.x = 25;
        this.y = 0;
        this.height = 60;
        this.width = 200;
        this.setPercentage(100);

    }

    setPercentage(percentage) {
        this.percentage = percentage; // =>0...5
        let path = this.images_life[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        }
        else if (this.percentage > 40) {
            return 2;
        }
        else if (this.percentage > 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}


