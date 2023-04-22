class Barrier extends MovableObject {

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.x = 200 + Math.random() * 500; //Zahl zwischen 200 und 500
    }
}