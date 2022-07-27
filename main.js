noseX = 0
noseY = 0
difference = 0
leftWX = 0
rightWX = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(500,550)

    canvas = createCanvas(550,550)
    canvas.position(560,200)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function draw(){
    background('#969A97')
    fill('#FF7F50')
    stroke('#05696B')
    text("Chaitra",noseX,noseY)
    textSize(difference)
}

function modelLoaded(){
    console.log('model Loaded')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWX = results[0].pose.leftWrist.x
        rightWX = results[0].pose.rightWrist.x
        difference = leftWX - rightWX
        document.getElementById('fontsize').innerHTML = "Font size of the word:"+ Math.floor(difference)
    }
}