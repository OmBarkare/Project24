class Paperball{
    constructor(x,y,diameter){
        var options = {restitution:0.5, friction:0.5, density:1.2, isStatic:false}
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        fill("green");
        ellipse(this.body.position.x,this.body.position.y,this.diameter,this.diameter);
    }
}