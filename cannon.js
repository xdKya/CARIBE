class Cannon {
  constructor(x, y, w, h, angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;

    this.cannonImage = loadImage("assets/canon.png");
    this.cannonBase = loadImage("assets/cannonBase.png");
  }
  show() {
    //base do canhao
    image(this.cannonBase, 70, 20, 200, 200);

    //topo do canhao
    push();
    imageMode(CENTER);
    image(this.cannonImage, this.x, this.y, this.w, this.h);
    pop();
  }
}
