var counter = function () {
	var count = 0;
	return function () {
		++count;
		return count;
		}
	};

var counter1 = counter();
var counter2 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
