let level1;

function initLevel() {
    level1 = new Level(
        [
            new JellyFish('lila', 500, 200, 100, 0),
            new JellyFish('lila', 500, 100, 100, 0),
            new JellyFish('green', 800, 100, 0, 50),
            new JellyFish('green', 900, 100, 0, 50),
            // new PufferFish('orange', 50, 50),
            // new PufferFish('green', 200, 200),
            new Endboss()
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720 * -1),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720 * -1),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * -1),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720 * -1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720 * 1),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720 * 1),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 1),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720 * 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720 * 2),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720 * 2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720 * 2),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720 * 3),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720 * 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 3),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720 * 3),
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720 * 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720 * 4),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720 * 4),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720 * 4),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720 * 5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720 * 5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720 * 5),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720 * 5)
        ],
        [
            new CollecteableObject('coin', 300, 250),
            new CollecteableObject('coin', 500, 100),
            new CollecteableObject('coin', 850, 200),
            new CollecteableObject('coin', 850, 80),
            new CollecteableObject('coin', 1000, 250),
            new CollecteableObject('coin', 1200, 150),
            new CollecteableObject('coin', 1300, 300),
            new CollecteableObject('coin', 1500, 50),
            new CollecteableObject('coin', 2200, 200),
            new CollecteableObject('coin', 2300, 120),
            new CollecteableObject('posion', 300, 400),
            new CollecteableObject('posion', 700, 410),
            new CollecteableObject('posion', 900, 415),
            new CollecteableObject('posion', 1150, 400),
            new CollecteableObject('posion', 1600, 405),
            new CollecteableObject('posion', 1800, 415),
            new CollecteableObject('posion', 2500, 415),


        ]
    );
}
