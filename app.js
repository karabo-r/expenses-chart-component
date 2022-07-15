import data from "./modules/data.json" assert { type: "json" };
const statsContainer = document.getElementById("statsContainer");

// Start processing data from json file
appendData(processData());

function processData() {
	let dataStore = [];
	data.forEach((element) => {
		// create needed elements
		const boxContainer = document.createElement("div");
		const boxAmount = document.createElement("div");
		const box = document.createElement("div");
		const boxDay = document.createElement("p");

		// add class names and dynamic styling
		box.className = "main-box";
		boxAmount.className = "boxPrice";
		boxContainer.className = 'boxContainer'
		box.style.margin = "7px";
		// value of amounts provides height difference 
		box.style.height = `${(18 * element.amount) / 100}rem`;


		// add eventListners to change class names
		box.onmouseover = () => (boxAmount.className = "boxPrice-active");
		box.onmouseleave = () => (boxAmount.className = "boxPrice");

		// append to current parent div boxContainer
		boxDay.append(element.day);
		boxAmount.append(`$${element.amount}`);
		boxContainer.append(boxAmount);
		boxContainer.append(box);
		boxContainer.append(boxDay);

		// push to array
		dataStore.push(boxContainer);
	});
	return dataStore;
}

function appendData(dataStore) {
	// reset and map returned array in param to parent div in HTML
	statsContainer.replaceChildren('')
	dataStore.map((item) => statsContainer.append(item));
}
