class Level {
    enemies;
    backgroundObjects;
    collectebales;
    level_end_x = 3200;

    constructor(enemies, backgroundObjects, collectebales) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectebales = collectebales;
    }
}