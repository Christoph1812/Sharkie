class Bubble extends MovableObject {

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
        setInterval(() => {
            this.x += 10;
        }, 50);
    }

    checkTyp(typ) {
        if (typ == 'normal') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        } else if (typ == 'poision') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        }
    }

    checkDirection() {

    }

}