document.getElementById('app').innerHTML = `
<h1>Hello Full Pre 6th!</h1>
<div>
  This is the result of [ Selection Sort! ]
  
</div>
`;

// 목적 : 선택 정렬을 만들자!
// 1. Random하게 번호를
// n 배열 생성
// random number 호출

//선택 정렬 = 작은 숫자부터 큰 숫자까지 정렬;
// 함수 실행

const generateNumber = function (max) {
	return Math.floor(Math.random() * max);
};

const makeArr = function (num) {
	const result = [];
	for (let i = 0; i < num; i++) {
		result.push(generateNumber(num * 5));
	}
	return result;
};

// 선택 정렬을 해야 함
// 이중 for 문을 가동
// 가장 작은 숫자를 찾는다. Swap을 하는 함수가 필요
// [30, 345, 22, 203, 123, 44, 33, 23, 99, 100]
// swap 함수를 호출한다고 생각하고 진행을 해라...
// arr[i]와 arr[j]가 같은 경우 continue
// minValue < arr[j] => minValue가

const swap = function (a, b) {
	const tmp = a;
	a = b;
	b = tmp;
	return a, b;
};

const selectionSort = function (arr) {
	let min = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		min = i;
		for (let j = i + 1; j < arr.length - 1; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (arr[i] > arr[min]) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
	return arr;
};

const init = function () {
	const span = document.createElement('span');
	const randomArr = makeArr(100);
	document
		.querySelector('#app')
		.append((span.textContent = `Origin Array: ${randomArr}>`));
	const result = selectionSort(randomArr);
	document
		.querySelector('#app')
		.append((span.textContent = `Sorted Array: ${result}`));
};

init();
