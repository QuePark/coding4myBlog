const quickSort = function (...arr) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[0];
	let previousArr = [],
		afterArr = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			previousArr.push(arr[i]);
		} else {
			afterArr.push(arr[i]);
		}
	}
	return quickSort(...previousArr)
		.concat(pivot)
		.concat(quickSort(...afterArr));
};

const generateRandomArr = function (max) {
	let len = Math.floor(Math.random() * max);
	const tmpArr = [];
	let randomNumber = 0;
	for (let i = 0; i < len; i++) {
		randomNumber = Math.floor(Math.random() * max);
		tmpArr.push(randomNumber);
	}
	return tmpArr;
};

const init = function () {
	let randomArr = [];
	for (let i = 10; i < 100; i += 9) {
		randomArr.push(generateRandomArr(i));
	}
	for (let i = 0; i < randomArr.length; i++) {
		let a = randomArr[i];
		let b = quickSort(...randomArr[i]);
		console.log(a, b);
	}
};

init();
