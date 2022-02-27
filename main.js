function preload(){
    
}
function setup(){
    canvas=createCanvas(700,600);
    canvas.parent('canvas');
    video=createCapture(VIDEO);
    video.size(700,600);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("psoenet is initialixed");
}

