class Ground {
    constructor(){
        var options={
            isStatic: true
        }   
    this.body = Bodies.rectangle(400, 690, 800, 10, options);
    this.width = 800;
    this.height = 15;

   
   World.add(world, this.body);
   
    }
display(){
      var pos = this.body.position;  
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
}

}