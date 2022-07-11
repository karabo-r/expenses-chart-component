import data from "./modules/data.json" assert { type: "json" };

const statsContainer = document.getElementById("statsContainer");

function processData(data) {
	let boxes = [];
	for (let i = 0; i < data.length; i++) {
		const boxContainer = document.createElement("div");
		const box = document.createElement("div");
		const boxPrice = document.createElement("div");
		const pTag = document.createElement("p");

		box.className = "main-box";
		boxContainer.className = "boxContainer";

		box.style.height = `${200 / data[i].amount}rem`;
		box.style.margin = "10px";

		boxPrice.append(data[i].amount);

		pTag.append(data[i].day);
		boxContainer.append(boxPrice);
		boxContainer.append(box);
		boxContainer.append(pTag);

		boxes.push(boxContainer);
	}
	return boxes;
}

function appendData(data) {
	for (let i = 0; i < data.length; i++) {
		statsContainer.appendChild(data[i]);
		console.log(data[i]);
	}
}

appendData(processData(data));
