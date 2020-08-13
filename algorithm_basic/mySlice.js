let mySlice = function (arr, a, b) {
	if (!Array.isArray(arr)) {
		return 'ERROR: First parameter must be an array.\n';
	}
	if (typeof a === 'number' && (typeof b === 'number' || b === undefined)) {
		if (a >= arr.length) {
			return [];
		}
		if (b === undefined) {
			b = arr.length;
		}
		let newArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (a <= i && i < b) {
				newArr[i - a] = arr[i];
			}
		}
		return newArr;
	}
	return arr;
};
let arr = [0, 1, 2, 3, 4, 5];
console.log('arr', arr);
// [0, 1, 2, 3, 4, 5]
console.log('mySlice(arr)', mySlice(arr));
// [0, 1, 2, 3, 4, 5]
console.log('arr.slice()', arr.slice());
// [0, 1, 2, 3, 4, 5]
console.log('mySlice(arr, 1)', mySlice(arr, 1));
// [1, 2, 3, 4, 5]
console.log('arr.slice(1)', arr.slice(1));
// [1, 2, 3, 4, 5]
console.log('mySlice(arr, 2, 4)', mySlice(arr, 2, 4));
// [2, 3]
console.log('arr.slice(2, 4)', arr.slice(2, 4));
// [2, 3]
console.log('mySlice(arr, 2, 5)', mySlice(arr, 2, 5));
// [2, 3, 4]
console.log('arr.slice(2, 5)', arr.slice(2, 5));
// [2, 3, 4]
console.log('mySlice(arr, 6)', mySlice(arr, 6));
// []
console.log('arr.slice(6)', arr.slice(6));
// []
