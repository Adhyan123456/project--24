class Rubber{
	constructor(x,y,r)
	{
	var options={
     
    restitution:0.3,
	friction:5,
     density:1

	}


	
		
		this.body=Bodies.circle(x,y ,r, options);
		this.x=x;
		this.y=y;
		this.r=r
        World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle=this.body.angle
			push ()
			angleMode(RADIANS)		
			rotate (angle)
			translate(rubberpos.x, rubberpos.y);
			//rectMode(CENTER)
			strokeWeight(1);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
            ellipse(0,0,this.r,this.r);
			
	}

}