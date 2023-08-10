class CollectibleObject extends MovableObject {
    x = 0;
    y = 0;
    height = 35;
    width = 35;
    id;  // id of the collectibels
    type; // coin or poison
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }


    /**
     * The constuctur for the collectible class.
     * 
     * @param {string} type - The type of the collectible.
     * @param {number} x - The x-coordinate position of the collectible.
     * @param {number} y - The y-coordinate position of the collectible.
     * @param {number} id - The unique identifier of the collectible.
     */
    constructor(type, x, y, id) {
        super();
        this.loadImage(collectibles[type][0]);
        this.loadImages(collectibles[type]);
        this.type = type
        this.id = id;
        this.x = x;
        this.y = y;
        this.animate();

    }


    /**
     * Animation of the collectibles
     */
    animate() {
        setInterval(() => {
            this.playAnimation(collectibles[this.type]);
        }, 300);
    }
}