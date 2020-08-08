/**
 * Author: Gyuha Park
 * Nickname: Gray
 * Start Date: 2020-08-06 20:30
 */

/**
 * 이전까지 메소드를 설명하면서 각각의 기능을 구현해보았습니다
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
		for (let i = 0; i < elements.length; i++) {
			obj[`${i}`] = elements[i];
			length++;
		}
		for (let j = 0; j < length; j++) {
			arr[j] = obj[j];
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
}

// 1. 클래스를 이용해서 G-array() 만들고, 기존 Array() 메소드 실행해보기
let myArray = new Garray(1, 2, 3);
myArray.printInfo();
myArray.value.push(4);
myArray.printInfo();
myArray.value.unshift(0);
myArray.printInfo();
myArray.value.pop();
myArray.printInfo();
myArray.value.shift();
myArray.printInfo();
/**
 * class가 선언될 때 constructor에서 length를 잡아줬습니다.
 * 이후 제 class method를 사용하지 않고, Array()에 선언된 메소드를 사용하면
 * 길이가 변하지 않습니다.
 */

// 2. Garray() 클래스를 생성하고 새로운 array를 선언하여 Array() 메소드와 비교하기

let myMethod = new Garray(1, 2, 3);
myMethod.printInfo();
myMethod.myPush(5);
myMethod.printInfo();
myMethod.myUnshift(0);
myMethod.printInfo();
myMethod.myPop();
myMethod.printInfo();
myMethod.myShift();
myMethod.printInfo();
let a = myMethod.getArr();
console.log(a);
/**
 * 클래스에서 선언한 class method를 사용하면
 * 길이가 변하는 것을 확인할 수 있습니다.
 */
