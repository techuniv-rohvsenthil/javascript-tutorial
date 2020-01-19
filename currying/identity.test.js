const printArg = require('./identity');

describe('the printArg function', () => {

	it('should return the passed arguement', () => {
		const result = printArg('hello');
		expect(result).toBe('hello');
	});

	it('should return the same type as passed arguement', () => {
		const arg = 6;
		const result = printArg(arg);
		expect(typeof result).toBe(typeof arg);
	});
	
});