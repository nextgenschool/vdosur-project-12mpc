objects = [];
status = "";

 function preload(){
    video = createVideo('video.mp4');
} 

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}

functionstart()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementByld("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    ojjects = results;
}


function draw(){
image(video,0,0,480,380);
if(status !="")


objectDetector.detect(video, gotResult);
for(i=0; i <objects.lenth; i++){
    document.getElementByld("status").innerHTML = "status : objects Detected";
    document.getElementByld("number_of_objects").innerHTML = "number of objects detected are:"+
    objects.length;

    Fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label +""+percent +"%", objects[i].x + 15,objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   }
}
