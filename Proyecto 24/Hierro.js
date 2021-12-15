class Hierro{
	constructor(x,y){
		var options = {
			'density': 30,
			'friction': 3,
			'restitution': 0.8,
		};
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,50,60, options)
		this.width = 80
		this.height = 50
		World.add(world, this.body);
	

	}
	display()
	{
			var Iron=this.body.position;
			var angle=this.body.angle;		
			push()
			translate(Iron.x, Iron.y);
			rotate(angle)
			strokeWeight(4);
			stroke("black");
			fill("green");
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}