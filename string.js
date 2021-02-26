class String {
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 500,
            stiffness: 1
        }
        this.string = Constraint.create(options);
        this.offsetX = offsetX;
        this.offsetY = offsetY
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        stroke("red");
        strokeWeight(5);
        line(pointA.x+this.offsetX,pointA.y+this.offsetY,pointB.x,pointB.y);
    }
}