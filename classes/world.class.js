class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusbarEndbossAdded = false;
    statusBarLife = new StatusBar('life', 100, 25, 0);
    statusBarCoin = new StatusBar('coin', 0, 25, 45);
    statusbarPoisoned = new StatusBar('poisoned', 0, 25, 90);
    statusBarEndboss = new StatusBar('endboss', 100, 400, 0)

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies[this.level.enemies.length - 1].world = this;
    }


    checkCollisions() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsCollectables();
        }, 100)
    }


    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy, 'life');
            }
        });
    }

    checkCollisionsCollectables() {
        this.level.collectebales.forEach((collecteable, index) => {
            if (this.character.isColliding(collecteable)) {
                if (collecteable.type == 'coin') {
                    this.statusBarCoin.setPercentage(this.statusBarCoin.percentage += 20, 'coin');
                }
                else if (collecteable.type == 'posion') {
                    this.statusbarPoisoned.setPercentage(this.statusbarPoisoned.percentage += 20, 'poisoned');
                }
                this.level.collectebales.splice(index, 1);
            }
        });
    }



    draw() {
        // delete World
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        //--------space for fixed objects---------------
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusbarPoisoned);
        // this.addToMap(this.statusBarEndboss);
        this.addendbossStatus();
        this.ctx.translate(+this.camera_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectebales);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder ausgeführt
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addendbossStatus() {
        if (this.character.x >= 2000 || this.statusbarEndbossAdded) {
            this.addToMap(this.statusBarEndboss);
            this.statusbarEndbossAdded = true;
        }
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);

        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);

        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}



