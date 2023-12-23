class Obstacles {
    constructor(width, height, x, y, ctx) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.imgTop = new Image();
      this.imgTop.src = "../images/obstacle_top.png";
      this.imgBottom = new Image();
      this.imgBottom.src = "../images/obstacle_bottom.png";
      this.gap = 150;
    }
  
    draw(ctx) {
      ctx.drawImage(this.imgTop, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.imgBottom, this.x, this.y + this.height + this.gap, this.width, canvas.height - this.height - this.gap);
    }
  
    update(ctx) {
      this.draw(ctx); 
      this.x += -1;
    }
  }
  
  export default Obstacles;
  