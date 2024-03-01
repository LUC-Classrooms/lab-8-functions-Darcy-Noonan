function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height /2, 1);


  for (let i = 0; i < 10; i++)
  myShape ( i * 50 + 30, 50, .5, i)
  // myShape() takes three arguments
  // ((x, y, scale) )
 myShape (width / 3, height /3, 1)
 myShape (mouseX, mouseY, 1.5) // moves with mouse
 
  
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  
// MAKE SHAPES
fill (50, 40, 250) // blue color
 ellipse (100, 100, 50) // big ellipse
 ellipse (90, 90, 10) // bubble effect


  pop(); // dispose of the layer
}
