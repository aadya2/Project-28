class Stone {
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }   
    this.body = Bodies.rectangle(x, y, 2, 2, options);
    this.width = 10;
    this.height = 10;
   
    this.image = loadImage("images/Plucking mangoes/stone.png");
    
    // this.image = loadImage("images/stone.png"); 
   
   World.add(world, this.body);
   
    }
display(){
      
      //this.image.scale = 0.07;
     // imageMode(CENTER);
    //  image(this.image, pos.x, pos.y, this.radius);

      push(); 
      translate(this.body.position.x, this.body.position.y)
     // rotate(angle)
     var pos = this.body.position;  
      imageMode(CENTER)
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
}

}