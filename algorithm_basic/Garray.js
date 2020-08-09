/**
 * Author: Gyuha Park
 * Nickname: Gray
 * Start Date: 2020-08-06 20:30
 */

/**
 * 이전까지 메소드를 설명하면서 각각의 기능을 구현해보았습니다
 * https://dev-gp.tistory.com/category/JavaScript
 *
 * 초보 개발자의 객기일지도 모르겠지만,
 * mdn에서 수없이 찾아본 Array() 메소드를 정복하기 위해서
 * Garray() 클래스를 생성해 보았습니다.
 *
 */

class Garray {
	constructor(...elements) {
		let obj = {};
		let arr = [];
		let length = 0;
		if (elements.length === 1 && typeof elements[0] === 'number') {
			for (let i = 0; i < elements[0]; i++) {
				arr[i] = null;
			}
		} else {
			for (let i = 0; i < elements.length; i++) {
				obj[`${i}`] = elements[i];
				length++;
			}
			for (let j = 0; j < length; j++) {
				arr[j] = obj[j];
			}
		}
		this.value = arr;
		this.length = length;
	}

	getArr() {
		return this.value;
	}

	printInfo(something) {
		if (something !== undefined) {
			console.log(
				`Your input is ${something}, this value is [${this.value}], this length is ${this.length}`
			);
		} else {
			console.log(
				`The value is [${this.value}], and the length is ${this.length}`
			);
		}
	}

	myPush(element) {
		let length = this.length;
		this.value[this.value.length] = element;
		this.length++;
	}

	myPop() {
		let length = this.length;
		this.value.length = this.value.length - 1;
		this.length--;
	}

	myShift() {
		let length = this.length;
		let tmpArr = [];
		for (let i = 1; i < length; i++) {
			tmpArr[i - 1] = this.value[i];
		}
		for (let i = 0; i < length - 1; i++) {
			this.value[i] = tmpArr[i];
		}
		this.value.length--;
		this.length--;
	}

	myUnshift(element) {
		let length = this.length;
		let tmpArr = [];
		tmpArr[0] = element;
		for (let i = 0; i <= length; i++) {
			tmpArr[i + 1] = this.value[i];
		}
		this.value.length++;
		this.length++;
		for (let i = 0; i < this.length; i++) {
			this.value[i] = tmpArr[i];
		}
	}

	myJoin(str) {
		let insert = '';
		let result = '';

		if (str === undefined) {
			insert += ',';
		} else {
			insert += str;
		}
		for (let i = 0; i < this.length; i++) {
			result += String(this.value[i]);
			if (i !== this.length - 1) {
				result += insert;
			}
		}
		return result;
	}

	myConcat(...arr) {
		let tmpArr = [];
		for (let index in this.value) {
			tmpArr[index] = this.value[index];
		}
		for (let i = this.length; i < this.length + arr.length; i++) {
			tmpArr[i] = arr[i - this.length];
		}
		return tmpArr;
	}

	myFilter(fn) {
		let result = new Garray(0);

		for (let value of this.value) {
			if (fn(value)) {
				result.myPush(value);
			}
		}

		return result;
	}

	myMap(fn) {
		let result = new Garray(0);
		for (let value of this.value) {
			result.myPush(fn(value));
		}
		return result;
	}

	myReduce(reducer, initialValue) {
		if (typeof reducer !== 'function') {
			return 'TYPEERROR: First parameter must be a function.\n';
		}
		if (initialValue === undefined) {
			initialValue = this.value[0];
		}

		let result;
		let accumulator = initialValue;

		for (let currentValue of this.value) {
			result = reducer(accumulator, currentValue);
			accumulator = reducer(accumulator, currentValue);
		}
		return result;
	}
	mySlice(start, end) {
		if (end === undefined) {
			end = this.length;
		}
		if (!isNaN(Number(start)) || !isNaN(Number(end))) {
			if (start >= this.length) {
				return [];
			}

			let newArr = [];
			for (let i = 0; i < this.length; i++) {
				if (start <= i && i < end) {
					newArr[i - start] = this.value[i];
				}
			}
			return newArr;
		}
		return this.value;
	}
	mySplice(index, removeNumbers, ...replacement) {
		if (removeNumbers === undefined || isNaN(Number(removeNumbers))) {
			removeNumbers = 0;
		}
		if (replacement.length < 1) {
			replacement[0] = '';
		}
		let newArr = new Garray(...this.value);
		let previousArr = newArr.mySlice(0, index);
		let lastArr = newArr.mySlice(index + removeNumbers);
		for (let value of replacement) {
			previousArr.push(value);
		}
		return previousArr.concat(lastArr);
	}
}

// 1. 클래스를 이용해서 G-array() 만들고, 기존 Array() 메소드 실행해보기
let myArray = new Garray(1, 2, 3);
console.log('Using Array.prototype.method()');
myArray.printInfo();
myArray.value.push(4);
myArray.printInfo();
myArray.value.unshift(0);
myArray.printInfo();
myArray.value.pop();
myArray.printInfo();
myArray.value.shift();
myArray.printInfo();
let myArrayConcat = myArray.value.concat(4, 5, 6);
console.log(myArrayConcat);
myArray.printInfo();
let myArrayJoin = myArray.value.join(' , ');
console.log(myArrayJoin);
myArray.printInfo();
console.log(myArray);
console.log(' ');
/**
 * class가 선언될 때 constructor에서 length를 잡아줬습니다.
 * 이후 제 class method를 사용하지 않고, Array()에 선언된 메소드를 사용하면
 * 길이가 변하지 않습니다.
 */

// 2. 클래스를 이용해서 G-array() 만들고, 내가 만든 메소드 실행해보기

let myMethod = new Garray(1, 2, 3);
console.log('Using Garray.prototype.method()');
myMethod.printInfo();
myMethod.myPush(4);
myMethod.printInfo();
myMethod.myUnshift(0);
myMethod.printInfo();
myMethod.myPop();
myMethod.printInfo();
myMethod.myShift();
myMethod.printInfo();
let myMethodMyConcat = myMethod.myConcat(4, 5, 6);
console.log(
	`Run a function (myConcat(4, 5, 6)), result is : ${myMethodMyConcat}`
);
myMethod.printInfo();
let myMethodMyJoin = myMethod.myJoin(' , ');
console.log(`Run a function (myJoin(' , ')), result is : ${myMethodMyJoin}`);
myMethod.printInfo();
let a = myMethod.getArr();
console.log(`Run a function (getArr), result is : ${a}`);
let b = myMethod.myFilter((x) => x > 2);
console.log(`Run a function (myFilter((x) => x > 2)), result is : ${b.value}`);
myMethod.printInfo();
let c = myMethod.myMap((x) => x + 2);
console.log(`Run a function (myMap((x) => x + 2)), result is : ${c.value}`);
myMethod.printInfo();
let d = myMethod.myReduce((acc, cur) => Math.max(acc, cur));
console.log(
	`Run a function (myReduce((acc, cur) => Math.max(acc, cur))), result is : ${d}`
);
myMethod.printInfo();
let e = myMethod.mySlice(2, 3);
console.log(`Run a function (mySlice(2, 3)), result is : ${e}`);
myMethod.myPush(4);
myMethod.myPush(5);
myMethod.myPush(6);
let f = myMethod.mySplice(2, 2, 1);
console.log(`Run a function (mySplice(2, 2, 1)), result is : ${f}`);

/**
 * 클래스에서 선언한 class method를 사용하면
 * 길이가 변하는 것을 확인할 수 있습니다.
 */
