class Stone {
    constructor(x,y,radius){

        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.image = loadImage("images/stone.png")
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
    }
    
}