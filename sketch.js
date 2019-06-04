var p;
var neurona;
var numNeu = 200;
var velCuadros=1;

function setup() {
  createCanvas(500,500);
  p = new Puntos(numNeu);
  neurona = new Perceptron([p.x[0], p.y[0]], p.label[0]);
  frameRate(velCuadros);
}

function draw() {
  background(255);
  p.show();
  p.line();
  for (ind = 0; ind < numNeu; ind++) {
    neurona.setInput([p.x[ind], p.y[ind]], p.label[ind]);
    neurona.train();
  }
 /* ind=ind++;
  if(ind>numNeu){
    ind=0;}*/
  console.log(neurona);

}
