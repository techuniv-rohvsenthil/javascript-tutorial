const logger = require('./withoutBind');

describe('the logger function', () => {
	it('should return a function', () => {
		const info = logger('INFO: ');
		expect(typeof info).toBe('function');
	});
    
	it('should return a function which in turn returns a string', () => {
		const info = logger('INFO: ');
		const result = info('this is an info message');
		expect(typeof result).toBe('string');
	});
    
	it('should return a function which in turn returns the namespace prepended to the arguemet strings', () => {
		const info = logger('INFO: ');
		const result = info('this is an info message', 'hello');
		expect(result).toBe('INFO: this is an info message hello');
	});
    
    



});