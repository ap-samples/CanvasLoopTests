const FPS = 30;
const FRAME_REQ_INTERVAL_MS = 1000/FPS;

var canv = document.getElementById("main-canv");
var ctx = canv.getContext("2d");

var imgX = 10;
var imgY = 20;
const imgXMax = canv.width;
var bugImage = loadImage('img/bug.png');

function doFrame(){
	ctx.clearRect(0,0,canv.width, canv.height);
	((imgX+30) < imgXMax) ? imgX += 2 : imgX -= 2;
	ctx.drawImage(bugImage, imgX, imgY);
}

function loadImage(path){
	var img = new Image();
	img.src = path;
	
	return img;
}

ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.font = "18px Arial";
setInterval(doFrame, FRAME_REQ_INTERVAL_MS);