var line1 = {x1: 0, y1: 0, x2: 0, y2: 0}; 
var line2 = {x1: 0, y1: 0, x2: 0, y2: 0}; 
var line3 = {x1: 0, y1: 0, x2: 0, y2: 0}; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  line1.x1 = 0; 
  line1.x2 = width;
  line1.y1 = windowHeight/4; 
  line1.y2 = line1.y1; 

  line2.x1 = windowWidth/4; 
  line2.x2 = 3*line2.x1;
  line2.y1 = 0; 
  line2.y2 = windowHeight; 

  line3.x1 = windowWidth/2; 
  line3.x2 = 0;
  line3.y1 = 0; 
  line3.y2 = windowHeight; 

}

function draw() {
  background(255);
  stroke(0); 
  line(line1.x1, line1.y1, line1.x2, line1.y2); 
  line(line2.x1, line2.y1, line2.x2, line2.y2); 
  line(line3.x1, line3.y1, line3.x2, line3.y2); 
  if(mouseY < pmouseY){
    line1.y1 -= 5; 
    line1.y2 -= 5; 
    line2.x1 += 5; 
    line2.x2 += 5; 
    line3.x1 += 7; 
    line3.x2 += 7; 
  }
  else if(mouseY > pmouseY){
    line1.y1 += 5; 
    line1.y2 += 5; 
    line2.x1 -= 7; 
    line2.x2 -= 7; 
    line3.x1 -= 5; 
    line3.x2 -= 5; 
  }
}

