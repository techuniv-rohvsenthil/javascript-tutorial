const repeat = require('./higherOrder');

describe('the repeat function', () => {
	it('should return nothing', () => {
		const result = repeat(() => {console.log('Hello, world!');}, 5);
		expect(typeof result).toBe('undefined');
	});
    
	it('should call the passed function n times', () => {
		const testFunction = jest.fn();
		repeat(testFunction, 5);
		expect(testFunction).toHaveBeenCalledTimes(5);
	});



});