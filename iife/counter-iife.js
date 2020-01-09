var counter = (function () {
	var count = 0;
	return function () {
		++count;
		return count;
		}
	})();

console.log(counter());
console.log(counter());
