const addArgs = require('./longDelay');

describe('the addArgs function defined', () => {

	it('should return a function if an argument is passed', () => {
		const result = addArgs(5);
		expect(typeof result).toBe('function');
	});
    
	it('should return a number if no argument is passed', () => {
		const result = addArgs(5);
		const result2 = result();
		expect(typeof result2).toBe('number');
	});

	it('should return 0 if no argument is passed the first time', () => {
		const result = addArgs();
		expect(result).toBe(0);
	});

	it('should return the sum of the passed arguements if no argument is passed', () => {
		const result = addArgs(5);
		const result2 = result(3);
		const answer = result2();
		expect(answer).toBe(8);
	});
	
});