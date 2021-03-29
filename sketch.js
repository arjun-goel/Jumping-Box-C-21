var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    surface1 = createSprite(100,590,200,20);
    surface1.shapeColor = ("blue");

    surface2 = createSprite(300,590,200,20);
    surface2.shapeColor = ("orange");

    surface3 = createSprite(500,590,200,20);
    surface3.shapeColor = ("magenta");

    surface4 = createSprite(700,590,200,20);
    surface4.shapeColor = ("green");
    //create box sprite and give velocity
box = createSprite(random(20,750),300,20,20);
box.shapeColor = ("white");
box.velocityX = 4
box.velocityY = 4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(box.x<0){
box.velocityX = 3;
    }else if(box.x>800){
box.velocityX = -3;
    }
  if(box.y<0){
box.velocityY = 3;
  }


if(box.isTouching(surface4)){
box.shapeColor = ("green");
music.play();
box.bounceOff(surface4);
}
if(box.isTouching(surface3)){
    box.shapeColor = ("magenta");
    music.play();
    box.bounceOff(surface3);
    }
    if(box.isTouching(surface2)){
        box.shapeColor = ("orange");
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
        }
        if(box.isTouching(surface1)){
            box.shapeColor = ("blue");
            music.play();
            box.bounceOff(surface1);
            }
drawSprites();
}
