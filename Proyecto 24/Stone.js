class Stone{
	constructor(x,y,b,h){
		var options = {
			'density': 12,
			'friction': 0.9,
			'restitution': 0.8,
		};
		this.body = Bodies.rectangle(x, y, b, h, options);
		this.width = b;
        this.height = h;
        World.add(world, this.body);

	}
	display()
	{
			var stones=this.body.position;
			var angle=this.body.angle;	
			push()
			translate(stones.x, stones.y);
			rotate(angle)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}