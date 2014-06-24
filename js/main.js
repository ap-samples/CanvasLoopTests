const FPS = 30;
const FRAME_REQ_INTERVAL_MS = 1000/FPS;

var canv = document.getElementById("main-canv");
var ctx = canv.getContext("2d");

var textX = 10;
var textY = 20;
const textXMax = canv.width;

var startTime = Date.now();
var currentTime = null;

function makeAnimFrame(){
	currentTime = Date.now();
	var elapsed = currentTime - startTime;
	
	if(elapsed > FRAME_REQ_INTERVAL_MS){
		startTime = currentTime - (elapsed % FRAME_REQ_INTERVAL_MS);
		doFrame();
	}
	requestAnimationFrame(makeAnimFrame);
}

function doFrame(){
	ctx.clearRect(0,0,canv.width, 100);
	((textX+30) < textXMax) ? textX += 2 : textX -= 2;
	ctx.fillText("This is test",textX,textY);
}

ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.font = "18px Arial";
requestAnimationFrame(makeAnimFrame);
