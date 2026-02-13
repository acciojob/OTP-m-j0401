
let input=document.querySelectorAll(".code");
for(let i of input)
{
i.addEventListener("input",verify)
}
function verify(e) {
	let t=e.target;
     t.classList.toggle("selected");
	
}