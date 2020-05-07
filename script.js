let ballArray = [];
let totalBalls = 25;
let balls = [];

for (i = 1; i <= totalBalls; i++) {
	let ball = {};
	ball.index = i;
	ball.xaxis = getNumber();
	ball.yaxis = getNumber();
	ballArray.push(ball);

	var element = document.createElement("span");
	element.setAttribute("class", "ball ball" + i);

	element.style["background-color"] = getColor();
	element.style["top"] = ball.yaxis + "px";
	element.style["left"] = ball.xaxis + "px";
	// element.innerHTML = i;
	balls.push(element);
	document.body.appendChild(element);
}
// console.log(ballArray);

balls.forEach((el, i, ra) => {
	let toPosition = {
		xaxis: getNumber(1) * (getNumber(1) % 2 == 0 ? -10 : 10),
		yaxis: getNumber(2),
	};

	el.animate(
		[
			{ transform: "translate(0,0)" },
			{ transform: `translate(${toPosition.xaxis}px,${toPosition.yaxis}px)` },
		],
		{
			duration: getNumber(1) * 0.5 * 1000, // random duration
			direction: "alternate",
			fill: "both",
			iterations: Infinity,
			easing: "ease-in-out",
		}
	);
});

window.addEventListener("DOMContentLoaded", (event) => {
	console.log("dom loaded");
	setInterval(changeDirection, 2000);
});

function changeDirection() {
	let i = getNumber(2, 1, totalBalls);
	console.log(i);
	list = document.querySelectorAll(".ball" + i);
	list.forEach((el, i, ra) => {
		// console.log(el);
		el.style["border"] = "2px solid orange";
		removeBorder(el);
		let toPosition = {
			xaxis: getNumber(1) * (getNumber() % 2 == 0 ? -10 : 10),
			yaxis: getNumber(2),
		};

		el.animate(
			[
				{ transform: "translate(0,0)" },
				{ transform: `translate(${toPosition.xaxis}px,${toPosition.yaxis}px)` },
			],
			{
				duration: getNumber(1) * 0.5 * 1000, // random duration
				direction: "alternate",
				fill: "both",
				iterations: Infinity,
				easing: "ease-in-out",
			}
		);
	});
	// el = $(el);
}

function removeBorder(el) {
	setTimeout(function () {
		el.style["border"] = "none";
		console.log("timeout");
	}, 2000);
}

function getNumber(digits = 3, min = 0, max = 800) {
	let temp = Math.random() * 10 ** digits;
	temp = Math.ceil(temp);
	if (temp >= min && temp <= max) {
		return temp;
	} else {
		return getNumber(digits, min, max);
	}
}

function getColor() {
	var randomColor = "#000000".replace(/0/g, function () {
		return (~~(Math.random() * 16)).toString(16);
	});
	return randomColor;
}
