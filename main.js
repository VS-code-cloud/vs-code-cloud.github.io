var display = [ 
	"High School Student",
    "Musician",
    "Programmer"
];


var part = 0;

var part_index = 0;

var interval_val;

var el = document.querySelector("#aspects");

function Type() { 
	var text =  display[part].substring(0, part_index + 1);
	el.innerHTML = text;
	part_index++;
	if(text === display[part]) {
		clearInterval(interval_val);
		setTimeout(function() {
			interval_val = setInterval(Delete, 50);
		}, 1000);
	}
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

// Start the typing effect on load
interval_val = setInterval(Type, 100);