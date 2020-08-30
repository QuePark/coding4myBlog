import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { selectionSort } from './selectionSort.js';
import { mergeSort } from './mergeSort.js';
import { quickSort } from './quickSort.js';

export const print = (ranArr, sortingFn, flag = true) => {
	if (flag) {
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
	}

	if (typeof sortingFn === 'function') {
		return sortingFn(ranArr, flag);
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
	let test = [...randomNumberArray];
	const flag = false;
	let result;
	console.log('start: ', randomNumberArray);
	result = print(test, bubbleSort, false);
	console.log('bubbleSort: ', result);
	test = [...randomNumberArray];
	flag ? console.log('start: ', test) : console.log('');
	result = print(test, insertionSort, false);
	console.log('insertionSort: ', result);
	test = [...randomNumberArray];
	flag ? console.log('start: ', test) : console.log('');
	result = print(test, selectionSort, false);
	console.log('selectionSort: ', result);
	test = [...randomNumberArray];
	flag ? console.log('start: ', test) : console.log('');
	result = print(test, mergeSort, false);
	console.log('mergeSort: ', result);
	test = [...randomNumberArray];
	flag ? console.log('start: ', test) : console.log('');
	result = print(test, quickSort, false);
	console.log('quickSort: ', result);
};

init();
