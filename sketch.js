//declaring constants and name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring variables
var engine, world;
var backgroundImg;
var hour;
var bg = "sunrise1.png";


function preload() {
   //loading and displaying the getBackgroundImg();
   getBackgroundImg();

}


function setup(){
    //creating the canvas
    createCanvas(1200,700);

    //creating the engine and adding world to it
    engine = Engine.create();
    world = engine.world;

}


function draw(){
    //updating the engine
    Engine.update(engine);
    
    //adding condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    //displaying the rounded-off time
    stroke(10);
    textSize(30);
    fill("red");
    text("Time: " + hour, 50, 50);
    text(" ' th hour", 160, 50)
   
}


//async and await allows javascript to wait and fetch the link
async function getBackgroundImg(){
    //writing code to fetch time from the given API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //changing the retrieved data to JSON format
    var responseJSON = await response.json();

    //taking the datetime from the data and slicing the hour from it
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11, 13);

    //adding conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=07){
        bg = "sunrise1.png";
      
    }else if(hour>=08 && hour<=09){
        bg = "sunrise2.png";
    
    }else if(hour>=10 && hour<=14){
        bg = "sunrise3.png";

    }else if(hour=15){
        bg = "sunrise4.png";

    }else if(hour>=16 && hour<=17){
        bg = "sunrise5.png";

    }else if(hour=18){
        bg = "sunrise6.png";

    }else if(hour=19){
        bg = "sunrise7.png";

    }else if(hour=20){
        bg = "sunrise8.png";

    }else if(hour=21){
        bg = "sunrise9.png";

    }else if(hour=22){
        bg = "sunrise10.png";

    }else if(hour=22){
        bg = "sunrise11.png";

    }else {
        bg = "sunrise12.png";

    }

    //loading the image in backgroundImg variable
    backgroundImg = loadImage(bg);

    //logging the bg img and current hour in the console
    console.log(bg);
    console.log(hour);
    
}

