const duckCount = require('./basicCall');

let notDuck = Object.create({quack: true});
let duck = {quack: true};

describe('the duckCount function', () => {
	it('should return a number', () => {
		const result = duckCount(duck, notDuck);
		expect(typeof result).toBe('number');
	});
    
	it('should return the number of arguments passed to it which have a property quack defined directly on them', () => {
		const result = duckCount(duck, notDuck);
		expect(result).toBe(1);
	});



});