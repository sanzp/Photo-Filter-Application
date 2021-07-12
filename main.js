//skipped preload function becuse no assets are required..
function setup(){
    canvas = createCanvas(500,450);
    canvas.position(500,350);
    video=createCapture(VIDEO);
    video.hide()
    tint_color=""
}

function draw(){
    image(video,0,0,500,450);
    tint(tint_color);
    
}

function apply(){
    tint_color=document.getElementById("filter_color").value;

}

function take_snapshot(){
    save("My_Selfie.png")
}