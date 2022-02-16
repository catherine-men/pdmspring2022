letbugImages = [];
let imageURL = "https://catherine-men.github.io/pdmspring2022/bugsquishpics/";
let testBug;

function preload() {

  for (let i = 0; i < 4; i++) {
    bugImages[i] = loadImage(imageURL + "bugsprite_" + (i+1) + ".png");
  }
}
function setup() {
  createCanvas(800, 800);

  testBug = createSprite(width / 2, height / 2, 50, 50);
  testBug.oddAnimation("walk",
                       bugImages[1],
                       bugImages[2],
                       bugImages[3],
                       bugImages[4],
  );
}

function draw() {
  background(220);
  drawSprites();

}