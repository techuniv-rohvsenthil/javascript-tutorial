module.exports = function average(...numbers) {
	let result = 0;
       numbers.forEach(function(value) {
	result  += value;
	});
   return result/numbers.length}

