class MovableObject {
    x = 120;
    y = 350;
    img;
    height = 120;
    width = 140;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}