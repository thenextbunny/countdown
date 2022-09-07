const button = document.querySelector("button");
const text = document.querySelector("p");
const input = document.querySelector("input");

button.addEventListener("click", countdown);

function countdown() {
	const number = input.value;
	text.innerHTML = number;
	let count = number;

	const interval = setInterval(() => {
		count--;
		text.innerHTML = count;
		if (count === 0) {
			text.innerHTML = "The end!";
			clearInterval(interval);
		}
	}, 1000);
}
