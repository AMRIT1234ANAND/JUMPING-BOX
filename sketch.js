var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var surface5;
var block1;
var block2;
function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(565,400);
    box=createSprite(random(20,565),30,20,20);
 box.shapeColor="white";
 box.velocityX=-5;
 box.velocityY=5;
 surface1=createSprite(65,400,130,40);
surface1.shapeColor="blue";
surface2=createSprite(210,400,130,40);
surface2.shapeColor="orange";
surface3=createSprite(355,400,130,40);
surface3.shapeColor="pink";
surface4=createSprite(500,400,130,40);
surface4.shapeColor="green";
    
    
}

function draw() {
    background(rgb(169,169,169));
    
var edges=createEdgeSprites();
box.bounceOff(edges);

if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue";
    music.play();
}
if(surface2.isTouching(box)){
    box.shapeColor="orange";
    box.velocityX=0;
    box.velocityY=0;
   music.stop();
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="pink";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="green";
    
}


drawSprites();

    
}
