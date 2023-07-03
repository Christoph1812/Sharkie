class World {
    character = new Character();
    level;
    canvas;
    ctx;
    keyboard;
    camera_x;
    statusbarEndbossAdded = false;
    statusBarLife = new StatusBar('life', 100, 25, 0);
    statusBarCoin = new StatusBar('coin', 0, 25, 45);
    statusbarPoisoned = new StatusBar('poisoned', 0, 25, 90);
    statusBarEndboss = new StatusBar('endboss', 100, 400, 0);
    endboss;
    bubbles = [];
    poisonBubbles = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
    }

    setWorld() {
        this.level = level1;
        this.endboss = this.level.enemies.find(e => e instanceof Endboss);
        this.character.world = this;
        this.endboss.world = this;
    }


    checkCollisions() {
        setInterval(() => {
            this.checkCollisionsCollectables();
            this.checkCollisionJellyFish();
            this.checkcollisionBubble()

        }, 100)
    }


    // checkCollisionsEnemy() {
    //     this.level.enemies.forEach((enemy) => {
    //         if (this.character.isColliding(enemy) && !this.character.isHurt()) {
    //             this.character.hit();
    //             this.statusBarLife.setPercentage(this.character.energy, 'life');
    //         }
    //     });
    // }

    checkCollisionJellyFish() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt() && (enemy instanceof JellyFish)) {
                console.log('bubble');
            }
        });
    }


    checkcollisionBubble() {
        this.bubbles.forEach((bubble) => {
            if (bubble.y <= 0)
                this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
                    if (enemy instanceof JellyFish) {
                        enemy.dead = true;
                    }

                }
            })
        })
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

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectebales);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonBubbles);
        this.addToMap(this.character);

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



