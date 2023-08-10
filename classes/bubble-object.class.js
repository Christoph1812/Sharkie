class Bubble extends MovableObject {
    uplift = 0; // vertical uplift of the bubble
    speed = 2; // horizontal movement speed of the bubble
    acceloration = 0.1; // rate of increase in vertical uplift over time
    characterWidth; // width of the character 
    height = 28;
    width = 28;


    /**
         * Creates 
         * @param {number} x - The X-coordinate of the object.
         * @param {number} y - The Y-coordinate of the object.
         * @param {string} typ - The type of the object.
         * @constructor
     */
    constructor(x, y, typ) {
        super();
        this.checkTyp(typ)
        this.x = x;
        this.y = y;
        this.blow();
    }


    /**
     * Starts movment of the bubble:
     */
    blow() {
        let startX = this.x;
        let interval2 = setInterval(() => {
            if (this.otherDirection) {
                this.moveLeft(startX);
            } else {
                this.moveRight(startX);
            }
        }, 1000 / 60);
        intervalIds.push(interval2);
    }


    /**
     * Move the bubble to the left and handle uplift.
     * @param {number} startX - The initial X-coordinate of the bubble.
     */
    moveLeft(startX) {
        this.x -= this.speed;
        if (this.x <= (startX - this.characterWidth - this.width - 25)) {
            this.moveUpward();
        }
    }


    /**
     * Move the bubble to the right and handle uplift.
     * @param {number} startX - The initial X-coordinate of the bubble.
     */
    moveRight(startX) {
        this.x += this.speed;
        if (this.x >= (startX + 25)) {
            this.moveUpward();
        }
    }


    /**
     * Move the bubble upward and increase uplift.
     */
    moveUpward() {
        this.y -= this.uplift;
        this.uplift += this.acceloration;
    }


    /**
     * Check the type of the bubble and load the appropriate image.
     * @param {string} typ - The type of the bubble.
     */
    checkTyp(typ) {
        if (typ == 'normal') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        } else if (typ == 'poision') {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        }
    }


    /**
     * Check the movement direction of the bubble and adjust the position accordingly.
     * @param {boolean} otherDirection - Indicates whether the bubble is moving in the other direction (to the left).
     * @param {number} changePosition - The change in position of the bubble.
     */
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


