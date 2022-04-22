noseXimageloc = 0;
noseYimageloc = 0;
function preload() {
    noseFilterNoseBallImg = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup() {
    canvas = createCanvas(300,300)
    canvas.center();
    webcamCam = createCapture(VIDEO)
    webcamCam.hide()
    poseNet = ml5.poseNet(webcamCam,modelLoaded)

    
    poseNet.on('pose',getPoseresultsConsleLog)

    
}
    function modelLoaded(){
        
    }
    function getPoseresultsConsleLog(results){
        console.log(results);
        if (results.length > 0){

        
        noseXimageloc = results[0].pose.nose.x-175;
        noseYimageloc = results[0].pose.nose.y-130;
        
        }
        console.log(noseXimageloc);
        console.log(noseYimageloc);
    }
function draw() {
    image(webcamCam,0,0,300,300)
    image(noseFilterNoseBallImg,noseXimageloc,noseYimageloc,40,40)

}
function takePhoto(){
    save ('TheUglisetGuy.jpg')
} 
