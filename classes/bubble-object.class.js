class Bubble extends MovableObject {


    uplift = 0;
    speed = 2;
    acceloration = 0.1;
    characterWidth;

    constructor(x, y, typ) {
        super();
        this.checkTyp(typ)
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 20;
        this.blow();
    }

    blow() {
        let startX = this.x;
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= this.speed;
                if (this.x <= (startX - this.characterWidth - this.width - 25)) {
                    this.y -= this.uplift;
                    this.uplift += this.acceloration;
                }
            } else {
                this.x += this.speed;
                if (this.x >= (startX + 25)) {
                    this.y -= this.uplift;
                    this.uplift += this.acceloration;
                }
            }
        }, 1000 / 60)
    }



    checkTyp(typ) {
        if (typ == 'normal') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        } else if (typ == 'poision') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        }
    }


    checkDirection(otherDirection, changePosition) {
        this.characterWidth = changePosition;
        if (otherDirection) {
            this.otherDirection = true;
            this.x -= changePosition + this.width;
        } else {
            this.otherDirection = false;
        }
    }


}


