
let pos = 0;

let box = document.getElementById("button");

let t = setInterval(move , 10);

function move(){
if(window.innerWidth > 700){
	if (pos >= 600){
		clearInterval(t);
	}
	else{
		pos = pos + 2;
		box.style.left = pos + "px";
		
	}
}
}