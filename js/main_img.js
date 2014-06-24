const FPS = 30;
const FRAME_REQ_INTERVAL_MS = 1000/FPS;

var canv = document.getElementById("main-canv");
var ctx = canv.getContext("2d");
var moveForward = true;

var imgX = 10;
var imgY = 20;
const imgXMax = canv.width;

var startTime = Date.now();
var currentTime = null;
var bugImage = loadImage('img/bug.png');

function makeAnimFrame(){
	//currentTime = Date.now();
	//var elapsed = currentTime - startTime;
	
	//if(elapsed > FRAME_REQ_INTERVAL_MS){
		//startTime = currentTime - (elapsed % FRAME_REQ_INTERVAL_MS);
		doFrame();
	//}
	requestAnimationFrame(makeAnimFrame);
}

function doFrame(){
	ctx.clearRect(0,0,canv.width, canv.height);
	if((imgX+30) >= imgXMax)
		moveForward = false;
	else if((imgX + 30) <= 0)
		moveForward = true;
	
	(moveForward) ? imgX += 1 : imgX -= 1;
	ctx.drawImage(bugImage, imgX, imgY);
}

function loadImage(path){
	var img = new Image();
	img.src = path;
	
	return img;
}


ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.font = "18px Arial";
requestAnimationFrame(makeAnimFrame);
