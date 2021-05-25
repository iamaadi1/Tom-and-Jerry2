var cat1 ,cat2 ,cat3 ,cat4 ,garden1 ,mouse1 ,mouse2 ,mouse3 ,mouse4 
function preload() {
    //load the images here
    Cat1Image=loadAnimation("images/cat1.png");
    Cat2Image=loadAnimation("images/cat2.png","images/cat3.png");
    Cat3Image=loadAnimation("images/cat4.png");
    GardenImage=loadImage("images/garden.png");
    Mouse1Image=loadAnimation("images/mouse1.png");
    Mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png");
    Mouse3Image=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
Cat1=createSprite(400,300,50,100)
Cat1.addAnimation("catsleeping",Cat1Image);
Cat1.scale=0.2;

Mouse1=createSprite(500,400,50,100)
Mouse1.addAnimation("Mousestanding",Mouse1Image);
Mouse1.scale=0.15;


}

function draw() {

    background(GardenImage);
    //Write condition hre to evalute if tom and jerry collide
    if(Cat1.x - Mouse1.x < (Cat1.width - Mouse1.width)/2){
        Cat1.velocityX=0;
        Cat1.addAnimation("catlastimage",Cat3Image);
        Cat1.x=300;
        Cat1.scale=0.2;
        Cat1.changeAnimation("catlastimage");
        Mouse1.addAnimation("mouselastimage",Mouse3Image);
        Mouse1.scale=0.15;
        Mouse1.changeAnimation("mouselastimage");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
Mouse1.addAnimation("mouseteasing",Mouse2Image);
Mouse1.frameDelay=25;
Mouse1.changeAnimation("mouseteasing");
}
if(keyCode === RIGHT_ARROW){
Mouse1.addAnimation("mouseteasing",Mouse2Image);
Mouse1.changeAnimation("mouseteasing")
}

}

