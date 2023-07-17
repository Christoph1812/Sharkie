class statusbarCounter extends DrawableObject {
    constructor() {
        this.number = 0;
      }
    
      setNumber(number) {
        this.number = number;
      }
    
      getNumber() {
        return this.number;
      }
    }



    class StatusBarBottle extends DrawableObject {
        IMAGE_BOTTLE = [
            'img/6_salsa_bottle/salsa_bottle.png'
        ];
    
        id;
        count = 0;
    
        constructor(id) {
            super();
            this.loadImage(this.IMAGE_BOTTLE);
            this.x = 280;
            this.y = 20;
            this.width = 60;
            this.height = 60;
            this.id = id;
        }
    
    /**
     * The function increments a count variable by 1.
     */
        incrementCount() {
            this.count++;
        }
    
    /**
     * This function draws a text on a canvas context with a specific font, color, and position.
     * @param ctx - ctx stands for "context" and refers to the canvas context on which the drawing will be
     * performed. It is typically obtained by calling the getContext() method on a canvas element. The
     * context provides methods and properties for drawing shapes, text, images, and other graphical
     * elements on the canvas.
     */
        draw(ctx) {
            super.draw(ctx);
            ctx.font = '30px zabars';
            ctx.fillStyle = 'black';
            ctx.fillText(this.count, this.x + this.width - 15, this.y + 43);
        }
    
        decrementCount() {
            this.count--;
        }    
    }
    

    // constructor(type, x, y) {
    //     super();
    //     this.loadImage(status_bar_img[type]);
    //     this.x = x;
    //     this.y = y;
    //     this.height = 60;
    //     this.width = 200;
       
    // }

    