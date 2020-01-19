const countWords = require('./basicReduce');

let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

describe('the countWords function', () => {
	it('should return an object', () => {
		const result = countWords(inputWords);
		expect(result).toBeInstanceOf(Object);
	});
    
	it('should return an object that contains the number of times each string occured in the array', () => {
		const result = countWords(inputWords);
		expect(result).toStrictEqual({
			Apple: 2,
			Banana: 1,
			Durian: 3
		});
	});



});