class Player {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 30;
        this.y = 30;
        this.width = 30;
        this.height = 30;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0.14;
        this.gravitySpeed = 0;
        this.img = new Image();
        this.img.src = "../images/flappy.png";
        this.img.onload = () => {
            this.draw();
            document.addEventListener('keydown', this.handleKeyDown.bind(this));
            document.addEventListener('keyup', this.handleKeyUp.bind(this));
        }
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    newPos() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
    }

        handleKeyDown(event) {
            if (event.code === 'Space') {
                this.gravity = -0.7; // Change gravity to negative
            }
        }

        handleKeyUp(event) {
            if (event.code === 'Space') {
                this.gravity = 0.7; // Change gravity to positive
            }
        }

      

    update() {
        this.newPos();
        this.draw();
    }
}

export default Player;