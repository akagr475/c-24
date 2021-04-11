class Log{
    contructor(x,y,height,angle){
        var options = {
            'restitution':1,
            'frction':0.8,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,30,height,options);
        this.width=21;   
        this.height=height;
        Matter.body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}






