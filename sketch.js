


var canvas;
var music, rect1, rect2, rect3, rect4, rect5, rect6, box, edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(590,400);

    //create 4 different surfaces
rect1 = createSprite(60, 370, 85, 10);
rect1.shapeColor = "purple";

rect2 = createSprite(150, 370, 85, 10);
rect2.shapeColor = "blue";

rect3 = createSprite(240, 370, 85, 10);
rect3.shapeColor = "green";

rect4 = createSprite(330, 370, 85, 10);
rect4.shapeColor = "yellow";

rect5 = createSprite(420, 370, 85, 10);
rect5.shapeColor = "orange";

rect6 = createSprite(510, 370, 85, 10);
rect6.shapeColor = "red";

//create edge sprites
edge1 = createSprite(300, 0, 600, 1);
edge2 = createSprite(300, 400, 600, 10);
edge3 = createSprite(590, 200, 10, 400);
edge4 = createSprite(0, 300, 10, 600);



    //create box sprite and give velocity
box = createSprite(Math.round(random(20,550)), 20, 20, 20);
box.shapeColor = "white";
box.velocityY = 5;
box.velocityX = 1;
}

function draw() {
    background("black");

    if(box.isTouching(rect1)){
        box.shapeColor = "purple";
      
    }

    if(box.isTouching(rect2)){
        box.shapeColor = "blue";
        music.play();
    }

    if(box.isTouching(rect3)){
        box.shapeColor = "green";
        music.play();
    }

    if(box.isTouching(rect4)){
        box.shapeColor = "yellow";
   
    }

    if(box.isTouching(rect5)){
        box.shapeColor = "orange";
        box. velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(rect6)){
        box.shapeColor = "red";
     
    }
    

box.bounceOff(rect1);
box.bounceOff(rect2);
box.bounceOff(rect3);
box.bounceOff(rect4);
box.bounceOff(rect5);
box.bounceOff(rect6);

box.bounceOff(edge1);
box.bounceOff(edge2);
box.bounceOff(edge3);
box.bounceOff(edge4);

edge1.visible = false;
edge2.visible = false;
edge3.visible = false;
edge4.visible = false;



drawSprites();
}







