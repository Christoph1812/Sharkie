class Level {
    enemies;  // array with all enemies (pufferfish, jellyfish und endboss)
    backgroundObjects; // array with all background objects
    collectibles; // arry with all collectable objets (coin poison)
    level_end_x = 2800; // end off the game


    /**
     * 
     * @param {arry} enemies - all enemies
     * @param {arry} backgroundObjects - all backgroundobjects
     * @param {arry} collectibles - all collectibles
     */
    constructor(enemies, backgroundObjects, collectibles) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectibles = collectibles;
    }
}