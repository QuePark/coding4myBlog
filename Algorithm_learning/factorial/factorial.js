const normalFactorial = function (num) {
	return num <= 1 ? num : num * normalFactorial(num - 1);
};

const tailFactorial = function (num, acc = 1) {
	return num <= 1 ? acc : tailFactorial(num - 1, num * acc);
};

const init = () => {
	const number = 3;
	const normal = normalFactorial(number);
	const tail = tailFactorial(number);
	console.log('normal', normal);
	console.log('tail', tail);
};

init();
