const curry = require('./curryFunction');

function abc(a, b, c){
	return a + b + c;
}

describe('the curry function defined', () => {

	it('should return a function', () => {		
		const curried = curry(abc);
		expect(typeof curried).toBe('function');
	});
    
	it('should return a function if required args are not passed', () => {		
		const curried = curry(abc);
		const result2 = curried(1, 2);
		const result3 = curried(1);
		expect(typeof result2).toBe('function');
		expect(typeof result3).toBe('function');
		
	});
    
	it('should return expected output if required args are passed', () => {		
		const curried = curry(abc);
		//const result = curried(1)(2)(3);
		const result2 = curried(1, 2)(3);
		const result3 = curried(1)(2, 3);
		const result4 = curried(1, 2, 3);
		//expect(result).toBe(6);
		expect(result2).toBe(6);
		expect(result3).toBe(6);
		expect(result4).toBe(6);
		
	});
	
});