class Tree {
    constructor(x,y){

        var options={
            isStatic: true,
            restitution: 0.3,
            friction: 1,
            density:1.0
        }

        this.body=Bodies.rectangle(x,y,15,15,options);
        World.add(world, this.body);
        this.image = loadImage("images/tree.png")
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,380,380);
    }
    
}