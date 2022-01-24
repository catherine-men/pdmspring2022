function setup() {
  createCanvas(200, 100);
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 50);
  arc(50, 50, 80, 80, 5/4 * PI, 3/4 * PI);

  fill(240, 55, 0, 250);
  rect(110, 12, 78, 78, 40, 40, 0, 0);

  fill(255, 255, 255);
  noStroke();
  circle(130, 50, 24);

  fill(0, 40, 255);
  circle(130, 50, 15);

  fill(255, 255, 255);
  circle(168, 50, 24);

  fill(0, 40, 255);
  circle(168, 50, 15);
}