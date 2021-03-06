// Jesse Allison 2022

let sound1 = new Tone.Player('media/FamilyFeud-Buzzer3.mp3')
let sounds = new Tone.Players({
  'shot': 'media/02-shot.mp3',
  'through': 'media/03-through.mp3',
  'theHeart': 'media/04-theHeart.mp3',
  'andYoure': 'media/05-andYoure.mp3'
})

let soundNames = ['shot','through','theHeart', 'andYoure']

const delay = new Tone.FeedbackDelay("8n", 0.5);

let button;
let buttons = [];
let slider;

function setup() {
  createCanvas(400, 400);
  sound1.connect(delay);
  sounds.connect(delay);
  delay.toDestination();

  button = createButton('through');
  button.position(200, 400);
  button.mousePressed(  ()=>playSound('theHeart')   );

  slider = createSlider(0., 1., 0.5, 0.05);
  slider.mouseReleased( ()=>{
    delay.delayTime.value = slider.value();
  })

  soundNames.forEach((word, index)=>{
    buttons[index] = createButton(word);
    buttons[index].position(index*50, 100);
    buttons[index].mousePressed(  ()=>playSound(word)   );
  })
}

function draw() {
  background(220);
  text('Press these buttons!', 20, 70);
  text('Use the slider to control!', 20, 380);
}

function keyPressed() {
  console.log("key is: ", key);
  if(key === "1"){
    sounds.player('shot').start();
    // sound1.start();
  } 
  
  // sound1.playbackRate = (mouseY /200)+0.01;
  // sound1.start();
}

function playSound(whichSound='shot') {
    sounds.player(whichSound).start();
  }

