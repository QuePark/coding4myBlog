const x = 1680,
	y = 640;

const maxSquare = function (x, y) {
	let short, long;
	if (x > y) {
		long = x;
		short = y;
	} else {
		short = x;
		long = y;
	}
	console.log(`x: ${x}, y: ${y}, long: ${long}, short: ${short}`);
	if (short * 2 === long) {
		console.log(`The answer is ${short}m`);
		return short;
	}
	return maxSquare(long - short, short);
};

let a = maxSquare(x, y);
console.log(a);
