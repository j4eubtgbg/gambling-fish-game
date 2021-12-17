class Player{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = 0;

        this.sprite = createSprite(this.x,this.y,this.w,this.h);
      this.sprite.addImage(p1);
      this.sprite.scale = 0.5;
    }

    speed(s){
      if (gs!=2) {
        this.vel = s;
      }
      
       this.sprite.velocityX = s;
       
    }
  
  touches(obj){
    if (this.sprite.isTouching(obj)) {
      gs = 2;
      n = this.vel;
      return true;
    }
  }

  setPos(x,y){
    this.sprite.x = x;
    this.sprite.y = y;

  }
  highlight(){
    push();
    fill('red');
    circle(this.sprite.x,this.sprite.y,50,50);
    pop();
  }

  }

