const doubleAll = require('./basicMap');

describe('the doubleAll function', () => {
	it('should return an array', () => {
		const result = doubleAll([1, 2, 3, 4, 5]);
		expect(result).toBeInstanceOf(Array);
	});
    
	it('should return an array with its elements doubled', () => {
		const result = doubleAll([1, 2, 3, 4, 5]);
		expect(result).toStrictEqual([2, 4, 6, 8, 10]);
	});



});