rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(900, 100);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialised');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =  floor(leftWristX - rightWristX);
        a_diff = difference-100;

    }
}
function draw() {
    background('grey');
    fill('black');
    text('Arinjoy', 60, 200);
    textSize(a_diff);
}
setInterval(draw, 1000);