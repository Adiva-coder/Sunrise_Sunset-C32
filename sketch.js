//declaring constants and name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring variables
var engine, world;
var backgroundImg;
var hour, time;
var bg = "sunrise1.png";
var date, month, year;


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
    stroke(5);
    textSize(30);
    fill("red");
    text("Time: " + time, 50, 50);
    
    //displaying good morning, afternoon, evening and night
    if(hour>=01 && hour<=11){
        text("Good Morning !! :)", 50, 80);
    }

    if(hour>=12 && hour<=17){
        text("Good Afternoon !! :)", 50, 80);
    }

    if(hour>=18 && hour<=19){
        text("Good Evening !! :)", 50, 80);
    }

    if(hour>=20 && hour<=00){
        text("Good Night !! :)", 50, 80);
    }
   
    //displaying the date in dd/mm/yyyy format
    text("Date: " + date, 600, 50);
    text("- "+month, 720, 50);
    text("- "+year, 780, 50);

}


//async and await allows javascript to wait and fetch the link
async function getBackgroundImg(){
    //writing code to fetch time from the given API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //changing the retrieved data to JSON format
    var responseJSON = await response.json();

    //taking the datetime from the data and slicing the hour, time, date, month, year from it
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11, 13);
    time = datetime.slice(11, 16);

    date = datetime.slice(8, 10);
    month = datetime.slice(5, 7);
    year = datetime.slice(0, 4);

    //adding conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=07){
        bg = "sunrise1.png";
      
    }else if(hour>=08 && hour<=09){
        bg = "sunrise2.png";
    
    }else if(hour>=10 && hour<=14){
        bg = "sunrise3.png";

    }else if(hour==15){
        bg = "sunrise4.png";

    }else if(hour>=16 && hour<=17){
        bg = "sunrise5.png";

    }else if(hour==18){
        bg = "sunrise6.png";

    }else if(hour==19){
        bg = "sunset7.png";

    }else if(hour==20){
        bg = "sunset8.png";

    }else if(hour==21){
        bg = "sunset9.png";

    }else if(hour==22){
        bg = "sunset10.png";

    }else if(hour==22){
        bg = "sunset11.png";

    }else {
        bg = "sunset12.png";

    }

    //loading the image in backgroundImg variable
    backgroundImg = loadImage(bg);

}

