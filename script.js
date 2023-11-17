//your JS code here. If required.
let para = document.getElementById("counter");
let buttons = document.getElementById("incrementBtn");
let count=0;
function func()
{
	para.innerHTML=count;
	count++;
	alert(count);
}
buttons.addEventListener("click",func);
