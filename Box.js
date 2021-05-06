class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
      
        World.add(myworld, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        stroke("cyan");
        strokeWeight(2);
        fill("yellow");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}