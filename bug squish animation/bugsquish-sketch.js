let bgImage, score, walking, squished, time, gameState, startTime, timerIsDone, bugGroup;
let bugImages = [];
let walls = [];
let imageURL = "https://catherine-men.github.io/pdmspring2022/bugsquishpics/";
let dir = [0, 90, 180, 270];
let speed = 2;




function preload() {
bgImage = loadImage(imageURL + "background.jpg");

  for (let i = 0; i < 4; i++) {
    bugImages[i] = loadImage(imageURL + "bugsprite_" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  score = 0;
  startTime = 30;
  timerIsDone = false;
  gameState = "start";
  bugGroup = new Group();
  walls = new Group();
  rectMode(CENTER);
  textAlign(CENTER);




}

function draw() {
  background(bgImage);
  
  if (gameState === "start") {
    push();
    fill("grey");
    rect(width / 2, height / 2, 200, 150);
    fill(0);
    text(" squish all the bugs!\nclick to begin", width / 2, height / 2);
    pop();

    if (mouseIsPressed) {
      makeBugs(20);
      gameState = "play";

  }

} else if (gameState === "play") {

  push();
  fill(0);
  text("time left: " + (startTime - timer() % startTime) + "\nscore: " + score, 50, 20);
  pop();

  if (bugGroup.length < 1) {
    makeBugs(20);
  }
  
timer();
bugGroup.collide(walls, teleport);
drawSprites();

if (timerIsDone === true) {
  gameState = "end";
}

} else if (gameState === "end") {
  push();
  fill("grey");
  rect(width / 2, height / 2, 200, 200);
  fill(0);
  text("game over!\nyou squished\n" + score + "\nbugs!\npress space to play again", width / 2, height / 2);
  pop();

if (keyIsPressed) {
  if (keyCode === 32) {
    setup(); 
  }
 }
 }


}


function timer() {
  time = int((millis() - startTime) / 1000);
  if (time % startTime === 0) {
    timerIsDone = true;
  }
  return time;
}

function makeBugs(num) {
  for (let i = 0; i < num; i++) {
     
  let testBug = createSprite(random(100, width - 100), random(100, height - 100), 50, 50);
  testBug.scale = 0.5;
  testBug.isDead = false;
  testBug.rotation = random(dir);

  if (testBug.rotation === 0) {
    testBug.setSpeed(speed, 270);
  } else if (testBug.rotation === 90) {
    testBug.setSpeed(speed, 0);
  } else if (testBug.rotation === 180) {
    testBug.setSpeed(speed, 90);
  } else if (testBug.rotation === 270) {
    testBug.setSpeed(speed, 180);
  }


  walking = testBug.addAnimation("walk",
  bugImages[0],
  bugImages[1],
  bugImages[0],
  bugImages[2]
  );
  walking.frameDelay = 8;

  squished = testBug.addAnimation("squish", 
  bugImages[3]
  );

    testBug.onMousePressed = function() {
      if (this.isDead === false) {
          this.changeAnimation("squish");
          this.setSpeed(0, 0);
          this.life = 100;
          score++;
          bugGroup.remove(this);
          this.isDead = true;
        } 
    };

bugGroup.add(testBug);
  }
}

function borders() {
  for (let i = 0; i < 4; i++) {
  if (i === 0) {
    let wall = createSprite(width / 2, -100, 2000, 10);
  } else if (i === 1) {
    let wall = createSprite(width / 2, height + 100, 2000, 10);
  } else if (i === 2) {
    let wall = createSprite(-100, height / 2, 10, 2000);
  } else if (i === 3) {
    let wall = createSprite(height + 100, height / 2, 10, 2000);
  } 
  wall.immovable = true;
  walls.add(wall);
}


}

function teleport() {
    if (this.rotation === 90) {
  this.position.x = -50;
  this.position.y = random(20, height - 20);
} else if (this.rotation === 270) {
  this.position.x = width + 50;
  this.position.y = random(20, height - 20);
}  else if (this.rotation === 180) {
  this.position.y = -75;
  this.position.x = random(20, width - 20);
} else if (this.rotation === 0) {
  this.position.y = height + 50;
  this.position.x = random(20, width - 20);
}
}
