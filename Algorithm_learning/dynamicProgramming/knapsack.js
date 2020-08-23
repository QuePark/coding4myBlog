const market = [
	{ name: 'laptop', price: 2000, weight: 3 },
	{
		name: 'stereo',
		price: 3000,
		weight: 4,
	},
	{
		name: 'guitar',
		price: 1500,
		weight: 1,
	},
];

const sortByWeight = (arr) => {
	arr.sort((a, b) => a.weight - b.weight);
};

const getItems = (arr) => {
	const maxWidth = arr
		.map((obj) => obj.weight)
		.reduce((max, cur) => Math.max(max, cur));
	let bag = new Array();
	let remainder = 1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < maxWidth; j++) {
			bag[i][j] = 0;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < maxWidth; j++) {
			if (arr[i].weight <= remainder) {
				bag[i][j] = arr[i];
				remainder = j - bag[i].weight;
			} else {
				bag[i][j] = bag[i - 1][j];
			}
		}
	}

	return bag;
};

const init = () => {
	sortByWeight(market);
	const stolenProperty = getItems(market);
	console.log(stolenProperty);
};

init();
