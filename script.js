//your JS code here. If required.
let para = document.getElementById("counter");
let buttons = document.getElementById("incrementBtn");
let count=0;
function func()
{
	count++;
}
buttons.addEventListener("click",func);
