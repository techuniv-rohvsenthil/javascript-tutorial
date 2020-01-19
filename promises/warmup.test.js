const timeOut = require('./warmup');

describe('the time_out function', () => {

	it('should return nothing', () => {
		const result = timeOut();
		expect(typeof result).toBe('undefined');
	});


});