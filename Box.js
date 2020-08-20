class Box {
    constructor(x, y){
      var options={
       friction:0.0,
       restitution:0.4
      }
      this.body = Bodies.rectangle(x,y,40,50,options);
      this.width = 40;
      this.height = 50;
      World.add(world,this.body);
      //this.Visibility = 255;
      fill("blue");

    }
  
    display(){
      //console.log(this.body.speed);
      //if(this.body.speed<8){
        push();
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height); 
     // }
  
      //else{
         //World.remove(world,this.body);
         pop();
      //}
    }
  };