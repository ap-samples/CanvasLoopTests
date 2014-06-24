const FPS = 30;
const FRAME_REQ_INTERVAL_MS = 1000/FPS;

var canv = document.getElementById("main-canv");
var ctx = canv.getContext("2d");

var textX = 10;
var textY = 20;
const textXMax = canv.width;

function doFrame(){
	ctx.clearRect(0,0,canv.width, canv.height);
	((textX+30) < textXMax) ? textX += 2 : textX -= 2;
	ctx.fillText("This is test",textX,textY);
}

ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.font = "18px Arial";

setInterval(doFrame, FRAME_REQ_INTERVAL_MS);
