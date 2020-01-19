const upperCaser = require('./helloWorld');

describe('the upperCaser function', () => {
	it('should return a string', () => {
		const result = upperCaser('input');
		expect(typeof result).toBe('string');
	});
    
	it('should return the upperacsed input string', () => {
		const result = upperCaser('input');
		expect(result).toBe('INPUT');
	});



});