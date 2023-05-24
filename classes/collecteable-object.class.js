class CollecteableObject extends MovableObject {
    x = 0;
    y = 0;
    height = 40;
    width = 40;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }


    constructor(type, x, y) {
        super();
        this.loadImage(collecteables[type][0]);
        this.loadImages(collecteables[type]);
        this.x = x;
        this.y = y;
        this.animate(type);

    }

    animate(type) {
        setInterval(() => {
            this.playAnimation(collecteables[type]);
        }, 300);

    }
}