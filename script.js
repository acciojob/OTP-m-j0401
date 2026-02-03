//your JS code here. If required.

let input=document.querySelectorAll(".code");
for(let i of input)
{
i.addEventListener("input",verify)
}
function verify(e) {
	let t=e.target;
	if(t<input.length-1)
	{
	   t+1.addClassList("selected");
		
	}
	
}


