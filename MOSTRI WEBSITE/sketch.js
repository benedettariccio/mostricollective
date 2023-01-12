var gif_loadImg, gif_createImg;


function preload(){
  gif_loadImg = loadImage("./assets/gifffffff.gif");
  gif_createImg = createImg("./assets/gifffffff.gif");
  //myFont = loadFont('./assets/fonts/Mattone-150.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  button = (100, 200, 100, 50, "Hello");
  button.size(150, 150);
  button.position(width/2, height/2);
  button.mousePressed(goToDrawPage); //callback

}

function draw() {
  background('red');
  image(gif_loadImg,-150,0);
  gif_createImg.position(50, 350);
}



function goToDrawPage() {
  window.open("draw.html", "_self");
}
