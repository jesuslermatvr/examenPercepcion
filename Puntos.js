
class Puntos {
  constructor(num) {
    this.x = [];
    this.y = [];
    this.label = [];
    
    for (var i = 0; i< num; i++) {
      this.x[i] = random(0, width);
      this.y[i] = random(0, height);

      if (this.y[i] < this.x[i]) {
        this.label[i] = 1;
      } else {
        this.label[i] = -1;
      }
    }
  }
  show(){
    for(var j =0; j<this.x.length;j++)
    {
      if(this.label[j]==-1){stroke(0,255,0)}
      else{stroke(0,0,255)}
      strokeWeight(10);
      point(this.x[j],this.y[j]);
    }
  }
  line(){
    stroke(0);
    strokeWeight(2);
    line(0, 0, width, height);
    
  }
}
