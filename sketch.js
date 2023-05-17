let paracolor = 1

let posicion =200

let movimiento =120

let contorno= 10

let movimiento2=120

let fondos= (100,111,100)


//let rotacion= quiero hacer que una de las lineas rote como la aguja de un reloj, no se me ocurre como D:

document.oncontextmenu = function() {
  return false;
}

function setup() {
  createCanvas(400, 400);

}
  

function draw() {
   background(200, 80, 0);
  
  stroke(200,100,100)
  strokeWeight(contorno);
  fill(12,paracolor,120);
  circle(movimiento2, 124, 150);
  
  if (mouseIsPressed)
    contorno=contorno+1
  if (contorno>220)
    contorno=10
  
  if (mouseIsPressed)
    paracolor=paracolor+1
  
  {if (keyIsPressed) 
    if (key == "w" || key == "W")
     movimiento2=movimiento2+1
   if (keyIsPressed)
   if(key =="s"  ||  key =="W")
     movimiento2=movimiento2-1
  }

  stroke(0)
  strokeWeight(0);
  fill(180, 220, 250);
  circle(movimiento, 150, 80);
  
  movimiento=movimiento+1
  if (movimiento>435)
    movimiento=-35

  fill(200, 175, 200); //color de relleno de formas
  triangle(posicion, posicion, 160, 240, 240, 240);
  posicion=posicion+1
  if (posicion>=400)
    posicion=400
  
  
  fill(0, 215, 321);

  strokeWeight(10); //grosor de linea
  strokeCap(SQUARE); //terminacion de la linea (cuadrada, circular, etc)

  line(165, 250, 165, 380);

  line(220, 250, 220, 380);

  line(160, 250, 225, 250);

  strokeWeight(12);
  line(160, 280, 225, 280);

  strokeWeight(13);
  line(160, 310, 225, 310);

  strokeWeight(14);
  line(160, 340, 225, 340);

  strokeWeight(16);
  line(160, 372, 225, 372);

  strokeWeight(2);
  line(250, 270, 330, 270);
  

  line(120, 300, 120, 380);
if (mouseIsPressed)
  line (mouseX, mouseY,mouseX+100,mouseY+200)
if (mousePressed=1)
  
  


  

  
  
  console.log("X: " + mouseX + " Y:" + mouseY);
}
