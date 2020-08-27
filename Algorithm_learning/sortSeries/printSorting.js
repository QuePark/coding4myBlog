import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';

export const print = (ranArr, sortingFn) => {
	for (let i = 0; i < ranArr.length; i++) {
		let str = '';
		for (let j = 0; j < ranArr[i]; j++) {
			str += '*';
		}
		console.log(str, ranArr[i]);
	}

	console.log('==========================');
	console.log('==========================');
	console.log('==========================');
	if (typeof sortingFn === 'function') {
		sortingFn(ranArr, true);
	}
};

const generateRandomNumberArr = (max) => {
	let arr = [];
	for (let i = 0; i < max; i++) {
		arr.push(Math.floor(Math.random() * 100));
	}
	return arr;
};

const init = () => {
	const randomNumberArray = generateRandomNumberArr(10);
	print(randomNumberArray, insertionSort);
};

init();
