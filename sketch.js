var colorOptions = ["#5F0F40", "#9A031E", "#E36414", "#0F4C5C"];
var fallingRects = [];
var phrases = ["Creativity is intelligence having - Dr Albert Einstein", "Aesthetics: Beauty in design is paramount and must be used to evoke emotions that resonate", "Message-Focused: Every creation carries a narrative, a purpose that must not get lost in the process", "Meticulous: Precision & a detail-driven approach ensure quality", "Fun: Joy is a powerful tool, one that designers should keep in their toolkit forever", "Honest: Authenticity and transparency ensure design goals remain true with no ulterior motives"]; 
var phraseArr = []; 
var bodyFont; 
var count = 0; 
var phrasePositions = {x: 70, y: 120}; 
var instruction = ["click anywhere", "another time", "one more time", "again", "one more time", "last time", "welcome to a designer's manifesto"]; 
var instructionText; 

function preload(){
  bodyFont = loadFont("./fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < phrases.length; i++) {
    phraseArr[i] = phrases[i].split("");
  }
  instructionText = new letterObject(random(windowWidth/2, windowWidth-200), windowHeight-phrasePositions.y, 0, random(colorOptions), instruction[0], 24); 
}

function draw() {
  background("#FFF4EB");
  instructionText.display(); 
  for (let rect of fallingRects) {
    rect.letterFall();
    rect.onHover();
  }
}

function mouseClicked() {
  console.log("on mouse clicked count is ", count);
  for (let i = 0; i < phraseArr[count].length; i++) {
    let newRect = new letterObject((count+1)*phrasePositions.x+i*10, -i*5, (count+1)*phrasePositions.y, random(colorOptions), phraseArr[count][i], 20);
    fallingRects.push(newRect);
  }
  instructionText.t = instruction[count+1]; 
  instructionText.c = random(colorOptions); 
  if(count < 5){
    instructionText.x = random(phrasePositions.x, windowWidth-4*phrasePositions.x); 
    instructionText.y = random(phrasePositions.y, windowHeight-phrasePositions.y); 
  }
  else{
    instructionText.x = phrasePositions.x-1; 
    instructionText.y = windowHeight - 6.5*phrasePositions.y;  
  }
  count++; 
}


class letterObject {
  constructor(x, y, base, c, t, s) {
    this.x = x;
    this.y = y;
    this.base = base;
    this.c = c;
    this.t = t; 
    this.velocity = 0;
    this.acceleration = 0.5; 
    this.originalY = y;
    this.isBouncing = false;
    this.bounceAmount = 0;
    this.s = s; 
  }

  display() {
    fill(this.c);
    textFont(bodyFont); 
    textSize(this.s); 
    textAlign(LEFT, TOP); 
    text(this.t, this.x, this.y);
  }

  update() {
    this.velocity += this.acceleration; 
    this.y += this.velocity; 
  
    if (this.y + this.base > windowHeight) {
      this.y = windowHeight - this.base; 
      this.velocity *= -0.8;
    }
  
    if (abs(this.velocity) < 1 && windowHeight - this.y - this.base < 1) {
      this.velocity = 0;
      this.y = windowHeight - this.base;
    }
  }
  
  letterFall() {
    this.update();
    this.display();
  }

  onHover() {
    if (mouseX > this.x && mouseY > this.y && mouseX < this.x + 12 && mouseY < this.y + textSize()) {
      
      if (!this.isBouncing) {
        this.isBouncing = true;
        this.bounceAmount = 5; 
      }
    }

    if (this.isBouncing) {
      this.y -= this.bounceAmount; 
      this.bounceAmount *= -0.7; 

      if (abs(this.bounceAmount) < 0.5) {
        this.isBouncing = false;
        this.y = this.originalY; 
      }
    }
  }
}

