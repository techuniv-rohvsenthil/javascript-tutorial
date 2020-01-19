const sumArgs = require('./binary');

describe('the sumArgs function', () => {

	it('should return the passed arguement', () => {
		const result = sumArgs(1, 2);
		expect(result).toBe(3);
	});

	it('should return a number', () => {
		const result = sumArgs(1, 2);
		expect(typeof result).toBe('number');
	});
	
});