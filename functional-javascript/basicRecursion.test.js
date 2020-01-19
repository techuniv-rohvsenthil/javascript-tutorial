const reduce = require('./basicRecursion');

describe('the reduce function', () => {
	it('should return a number', () => {
		const result = reduce([1,2,3], function(prev, curr, index, arr) {return prev + curr;}, 0);
		expect(typeof result).toBe('number');
	});
    
	it('should return the sum of elements after reduction', () => {
		const result = reduce([1,2,3], function(prev, curr, index, arr) {return prev + curr;}, 0);
		expect(result).toBe(6);
	});

	it('should call the function recursively', () => {
		const func = jest.fn();
		reduce([1,2,3], func, 0);
		expect(func).toHaveBeenCalledTimes(3);
	});
 

});