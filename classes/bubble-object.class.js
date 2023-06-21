class Bubble extends MovableObject {

    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x;
        this.y;
        this.height = 20;
        this.width = 20;
        this.blow(100, 150);
    }

    blow(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += 10;
        }, 50);
    }
}