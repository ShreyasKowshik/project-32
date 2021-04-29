const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


    function preload() {
        backgroundImg = loadImage("sprites/bg.png");
        getbackgroundImage();
    }

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background()
}

async function getBackgroundImage(){
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
console.log(responce);
var responceJSON = await responce.json(); 
console.log(responceJSON);
var date_time = responceJSON.datetime;
console.log(date_time);
var hour = date_time.slice(11,13);
console.log(hour);
if(hour >= 06 && hour < 12){
    bg = "sunrise1.png";
    }

else if(hour >= 05 && hour < 07){
        bg = "sunrise2.png";
}
else if(hour >= 07 && hour < 09){
     bg = "sunrise3.png";
}
else if(hour >= 09 && hour < 11){
     bg = "sunrise4.png";
}
else if(hour >= 11 && hour < 13){
     bg = "sunrise5.png";
}
else if(hour >= 13 && hour < 15){
     bg = "sunrise6.png";
}
else if(hour >= 15 && hour < 17){
     bg = "sunset7.png";
}
else if(hour >= 17 && hour < 19){
     bg = "sunset8.png";
}
else if(hour >= 19 && hour < 21){
     bg = "sunset9.png";
    }
else if(hour >= 21 && hour < 23){
     bg = "sunset10.png";
    }
else if(hour >= 23 && hour < 01){
     bg = "sunset11.png";
    }
else {
     bg = "sunset12.png";
    }

Engine.update(engine)