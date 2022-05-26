function preload(){
    song=loadSound("music.mp3");
}

song=" ";
leftwristX= 00000;
leftwristY= 00000000;
rightwristX=00000000000;
rightwristY=000000000000000;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet is initiallized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].psoe.leftWrist.y;
        console.log("leftwristX= "+leftwristX+"leftwristY= "+leftwristY);
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("rightwristX= "+rightwristX+"rightwristY= "+rightwristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw(){
    image(video,0,0,600,500);
}

