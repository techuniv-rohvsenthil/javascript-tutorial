const delayAdd = require('./delayInvocation');

describe('the delayAdd function defined', () => {

	it('should return a function', () => {
		const result = delayAdd(5);
		expect(typeof result).toBe('function');
	});
    
});

describe('the adder function defined', () => {

	it('should return a number', () => {
		const result = delayAdd(5);
		const result2 = result(7);
		expect(typeof result2).toBe('number');
	});
    
	it('should return the sum of arguements passed', () => {
		const result = delayAdd(5);
		const result2 = result(7);
		expect(result2).toBe(12);
	});
    
});
