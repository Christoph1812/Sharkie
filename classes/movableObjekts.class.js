class MovableObject {
    x = 120;
    y = 380;
    img;
    height = 100;
    width = 120;

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