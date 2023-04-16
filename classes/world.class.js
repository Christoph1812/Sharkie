class World {

    character = new Character();
    enemies = [
        new JellyFish(),
        new JellyFish(),
        new JellyFish()
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 1440),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 1440),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 1440),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 1440),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 2160),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 2160),
    ];

    canvas;
    ctx;
    keyboard;
    camera_x;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        // delete World
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder ausgeführt
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }



    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1)
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();

        }





    }
}