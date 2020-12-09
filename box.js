class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 0.8,
      'density': 0.0001
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
    if (this.body.speed > 3) {
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }
    else {
      this.visibility = 255;
    }
  }

  score() {
    if (this.body.speed > 3) {
      score = score + 5;
    }
  }

};
