class Rock {
    constructor(x,y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      }
      this.x=x;
		  this.y=y;

      this.body=Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 60;

		  World.add(world, this.body);
    }

    display(){
      var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);

			rectMode(CENTER)
			strokeWeight(3);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);

			pop()

    }
}