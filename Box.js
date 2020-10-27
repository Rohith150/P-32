class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 225;
  }

  display(){

    

    if(this.body.speed<4){
      super.display();
    }else{
      push();
      this.visibility = this.visibility - 10;
      tint(225,this.visibility);
      World.remove(world, this.body)
      pop();
    }
  }

  score(){

    if(this.visibility < 0 && this.visibility >- 10){
      score++;
    }
  }
}