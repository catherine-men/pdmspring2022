function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0, 0, 139);
  fill(0, 139, 0);
  strokeWeight(3);
  stroke(255);
  circle(95, 90, 95);
  beginShape();
  fill(255, 0, 0);
  vertex(108, 70); //bottom 
  vertex(95, 35); //top

  vertex(80, 70); //left bottom
  vertex(95, 35); //left top
  vertex(80, 70); //left line
  vertex(50, 70); //left line

  vertex(80, 89);
  vertex(50, 70);

  vertex(80, 89);
  vertex(65, 130);

  vertex(65, 130);
  vertex(95, 110);

  vertex(95, 110);
  vertex(120, 134);

  vertex(120, 134);
  vertex(110, 90);
  
  vertex(108, 89); 
  vertex(140, 70);
  vertex(108, 70); 
  vertex(140, 70); 
  endShape();
}