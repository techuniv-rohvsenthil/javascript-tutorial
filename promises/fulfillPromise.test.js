const fulfilledPromise = require('./fulfillPromise');

describe('the fulfilledPromise', () => {

	it('should be a promise object', () => {
		const result = fulfilledPromise();
		expect(typeof result).toBe('object');
	});

    
	// it('should resolve to be _____ when called', async () => {
	// 	const prom = await returnPromise();
	// 	expect(prom).toBeUndefined();
	// 	// prom.then((data) => {
	// 	// 	expect(data).toBeUndefined();
	// 	// });
	// });

	it('should call console.log with resolved message', () => {
		console.log = jest.fn();
		return fulfilledPromise().then(() => {
			expect(console.log).toHaveBeenCalledWith('FULFILLED!');
		});
		
	});
    
    

});