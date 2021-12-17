var  player,p1,player2,player3,player4,player5,players;
var edges;
var gs = 0;
var line;
var speed ;
var gen = 1;
var n = 6;
var menu,dawa;
var choice;
var score = 100;
var counter = 0;
//0 = speed giver, 1 = PLAY, 2 = next gen


function preload() {

p1 = loadImage('R.png');
dawa = loadImage('instructions.png');

}

function setup() {
createCanvas(1600,600);

player = new Player(20,100,50,50,0);
player2 = new Player(20,200,50,50,0);
player3 = new Player(20,300,50,50,0);
player4 = new Player(20,400,50,50,0);
player5 = new Player(20,500,50,50,0);

menu = createSprite(800,300,40,40);
menu.addImage('a',dawa);
menu.scale = 0.5;

edges = createEdgeSprites();
line = createSprite(1400,300,10,600);


}

function draw() {
background('black');

if (gs===1) {
  speedGiver();
  menu.visible = false;
}

if (gs===0) {
menu.visible = true;
}
console.log(n);
if (gs === 2) {
  player.speed(0);
  player2.speed(0);
  player3.speed(0);
  player4.speed(0);
  player5.speed(0);
  
}


player.touches(line);
player2.touches(line);
player3.touches(line);
player4.touches(line);
player5.touches(line);




if (gs===0) {

  if (keyDown('Q')) {
    choice = 1;
    gs = 1;
    score -= 50;
  }
  if (keyDown('w')) {
    choice = 2;
    gs =1;
    score -= 50;
  }
  if (keyDown('e')) {
    choice = 3;
    gs = 1;
    score -= 50;
  }
  if (keyDown('r')) {
    choice = 4;
    gs = 1;
    score -= 50;
  }
  if (keyDown('t')) {
    choice = 5;
    gs = 1;
    score -= 50;
  }
}
switch(choice){
case 1:
  player.highlight();
  if (counter=== 0) {
    if (player.touches(line)){
   score += 100;
   counter++;
 }
  }

 
  break;
  case 2:
  player2.highlight();
  if (counter=== 0) {
    if (player2.touches(line)){
   score += 100;
   counter++;
   
 }
  }
 
  break;
  case 3:
  player3.highlight();
  if (counter=== 0) {
    if (player3.touches(line)){
   score += 100;
   counter++;
 }
  }
  break;
  case 4:
  player4.highlight();
  if (counter=== 0) {
    if (player4.touches(line)){
   score += 100;
   counter++;
 }
  }
  break;
  case 5:
  player5.highlight();
  if (counter=== 0) {
    if (player5.touches(line)){
   score += 100;
   counter++;
 }
  }
  break;


}
text('Score:'+score,100,40);

drawSprites();
  }   
function mouseClicked(){
  
counter = 0;
  if (gs===2) {
    player.setPos(20,100);
    player2.setPos(20,200);
    player3.setPos(20,300);
    player4.setPos(20,400);
    player5.setPos(20,500);
    gs = 0;
  }
}


function speedGiver(){
  
    
  
var ran = Math.round(random(-10,10))
player.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player2.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player3.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))
 player4.speed(Math.round(random(n-1,n+1)));
 var ran = Math.round(random(-10,10))

 player5.speed(Math.round(random(n-1,n+1)));

 gs = 3;
}

 