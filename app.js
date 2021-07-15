const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#88a2cf", "rgb(100, 230, 34)", "plum",
"greenyellow", "beige", "darkorchid", "darksalmon", "mediumturquoise", "peru"];

let body = document.querySelector("body");

let span = document.querySelector(".color");

let button = document.getElementById("btn");

let randomIndex;

button.addEventListener("click", function() {
	randomIndex = Math.round(Math.random()*(colors.length - 1));

	body.style.backgroundColor = colors[randomIndex];

	span.innerText = colors[randomIndex];

});




