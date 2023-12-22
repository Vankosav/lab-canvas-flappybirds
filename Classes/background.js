

class Background {
  constructor(ctx, canvas) {
    this.x = 0;
    this.y = 0;
    
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "../images/bg.png";
    this.ctx = ctx;
    this.img.onload = () => {
      this.draw()
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //this.x -= this.speed
    this.ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    )
    //this.x + this.width <= 0 ? (this.x = 0) : void 0
  }


Update(speed) {
  this.x -= speed; 
  if (this.x < -this.width) this.x = 0;
}

}

export default Background;