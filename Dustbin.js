class Dustbin{
    constructor(x,y){
        this.bottomBody = Bodies.rectangle(x,y,100,10,{isStatic:true});
        this.leftBody = Bodies.rectangle(x-50,y-25,10,50,{isStatic:true});
        this.rightBody = Bodies.rectangle(x+50,y-25,10,50,{isStatic:true});
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }
    display(){
        var LR, RR, BR;
        LR = createSprite(this.leftBody.position.x,this.leftBody.position.y,10,50);
        RR = createSprite(this.rightBody.position.x,this.rightBody.position.y,10,50);
        BR = createSprite(this.bottomBody.position.x,this.bottomBody.position.y,100,10);
    }
}