var display = [ 
	"High School Student",
    "Musician",
    "Programmer"
];


var part = 0;

var part_index = 0;

var interval_val;

var el = document.querySelector("#aspects");
var last = Date.now();
function Type() { 
	var now = Date.now();
	var text =  display[part].substring(0, part_index + 1);
	el.innerHTML = text;
	part_index++;
	if(text === display[part]) {
		if (now-last>=200 && text==display[display.length-1]) {
			clearInterval(interval_val)
		} else {
			
		clearInterval(interval_val);
		setTimeout(function() {
			interval_val = setInterval(Delete, 50);
		}, 1000);
		}
	}
	last=now;
}

function Delete() {
	var text =  display[part].substring(0, part_index - 1);
	el.innerHTML = text;
	part_index--;
	if(text === '') {
		clearInterval(interval_val);
		if(part == (display.length - 1))
			part = 0;
		else
			part++;	
		part_index = 0;
		setTimeout(function() {
			interval_val = setInterval(Type, 100);
		}, 200);
	}
}
let skills = [
	{
		"url": "firebaseLogo.png",
		"name": "Firebase",
		"time": "3 years"
	},
	{
		"url": "reactLogo.png",
		"name": "React",
		"time": "3 years"
	},
	{
		"url": "mongoLogo.webp",
		"name": "MongoDB",
		"time": "1 year"
	},
	{
		"url": "nodeLogo.png",
		"name": "Node.js",
		"time": "3 years"
	},
	{
		"url": "pythonLogo.png",
		"name": "Python",
		"time": "3 years"
	},
	{
		"url": "sailsLogo.png",
		"name": "Sails",
		"time": "3 years"
	},
	{
		"url": "githubLogo.png",
		"name": "Github",
		"time": "3 years"
	},
	{
		"url": "javascriptLogo.png",
		"name": "Javascript",
		"time": "3 years"
	},
	{
		"url": "postgreLogo.png",
		"name": "PostgreSQL",
		"time": "3 years"
	},
	

	
]
var skillsContainer = document.getElementsByClassName("skillsContainer")[0]

for (let i=0; i<skills.length; i++){
	let skill = skills[i]
	skillsContainer.innerHTML+=`<div class="skillBox"><img src="/images/${skill.url}"><div><h4>${skill.name}</h4><p>${skill.time}</p></div></div>`
}
interval_val = setInterval(Type, 100);
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
	cursorFollow.style.left = e.clientX + "px",
    cursorFollow.style.top = e.clientY + "px";

});
