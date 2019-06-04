class Perceptron {

  constructor(input, target) {

    this.input = input;
    this.target = target;
    this.w = [];
    
    this.constante =0.01;
    for (var i = 0; i < this.input.length; i++) {
      this.w[i] = random(-1, 1);
    }
  }

  train() {
    this.sumWeight();
    this.signo(this.sumaPond);
    this.showPrediction();
    this.errores();
  }
  sumWeight() {
    var suma = 0;
    for (var i = 0; i < this.w.length; i++) {
      suma = suma + this.input[i] * this.w[i];
    }
    this.sumaPond = suma;
  }
  signo(num) {
    if (num > 0) {
      this.output = 1;
    } else {
      this.output = -1;
    }
  }
  showPrediction() {
    
    noFill();
    //cambiar el < por >
    if (this.output<0) {
      stroke(0, 0,255);
      
    } else {
      
      stroke(0, 255, 0);
    }
    
    ellipse(this.input[0],this.input[1],15,15);
  }
  errores(){
    this.error= this.target-this.output;
    
    
    for(var i=0;i<this.w.length;i++)
    {
      this.w[i]+=this.error*this.input[i]*this.constante;
    }
  }
  setInput(input,target){
    this.input=input;
    this.target=target;
    
  }
}
