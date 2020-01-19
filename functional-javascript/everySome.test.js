const checkUsersValid = require('./everySome');

const goodUsers = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 }
];

describe('the checkUsersValid function', () => {
	it('should return a function', () => {
		const result = checkUsersValid(goodUsers);
		expect(typeof result).toBe('function');
	});
    
	it('should return a function that returns true if submittedUsers are valid', () => {
		const testAllValid = checkUsersValid(goodUsers);
		const result = testAllValid([
			{ id: 2 },
			{ id: 1 }
		]);
		expect(result).toBe(true);
	});
    
	it('should return a function that returns false if submittedUsers are not valid', () => {
		const testAllValid = checkUsersValid(goodUsers);
		const result = testAllValid([
			{ id: 2 },
			{ id: 4 },
			{ id: 1 }
		]);
		expect(result).toBe(false);
	});



});