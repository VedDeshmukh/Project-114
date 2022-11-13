function preload(){

}

function setup(){
    create_canvas = createCanvas(400, 400);
    create_canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(400, 400);
    webcam.hide();
    indentifier = ml5.poseNet(webcam, modelLoaded);
    indentifier.on("pose", gotPoses);
}


function draw(){
image(webcam, 0, 0, 400, 400);
}

function takeSnap(){
save("mustache_image.png");
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("The x coordinate of the nose is" + results[0].pose.nose.x);
        console.log("The y coordinate of the nose is" + results[0].pose.nose.y);
    }

}



