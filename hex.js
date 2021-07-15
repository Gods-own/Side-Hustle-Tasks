const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


let body = document.querySelector("body");

let span = document.querySelector(".color");

let button = document.getElementById("btn");

function changeColor() {

	let color = "#";
	let randomIndex;

    for (let i = 0; i < 6; i++) {
    	randomIndex = Math.round(Math.random()*(hex.length - 1));
    	color += hex[randomIndex];
    }

	body.style.backgroundColor = color;

	span.innerText = color;

};

button.addEventListener("click", changeColor);
