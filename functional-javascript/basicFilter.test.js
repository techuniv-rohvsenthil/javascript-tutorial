const getShortMessages = require('./basicFilter');

describe('the getShortMessages function', () => {
	it('should return an array', () => {
		const result = getShortMessages([ {message: 'Tempor quis esse consequat sunt ea eiusmod.'}, {message: 'Id culpa ad proident ad nulla laborum incididunt tech uni 2020.'}, {message: 'Ullamco in ea et ad anim anim ullamco est.'}, {message: 'Est ut irure irure nisi.'} ]);
		expect(result).toBeInstanceOf(Array);
	});
    
	it('should return an array of strings', () => {
		const result = getShortMessages([ {message: 'Tempor quis esse consequat sunt ea eiusmod.'}, {message: 'Id culpa ad proident ad nulla laborum incididunt tech uni 2020.'}, {message: 'Ullamco in ea et ad anim anim ullamco est.'}, {message: 'Est ut irure irure nisi.'} ]);
		result.forEach(message => expect(typeof message).toBe('string'));
	});

	it('should return an array of messages < 50 characters', () => {
		const result = getShortMessages([ {message: 'Tempor quis esse consequat sunt ea eiusmod.'}, {message: 'Id culpa ad proident ad nulla laborum incididunt tech uni 2020.'}, {message: 'Ullamco in ea et ad anim anim ullamco est.'}, {message: 'Est ut irure irure nisi.'} ]);
		result.forEach(message => expect(message.length).toBeLessThan(50));
	});
    
	it('should return the filtered short messages for the passed input', () => {
		const result = getShortMessages([ {message: 'Tempor quis esse consequat sunt ea eiusmod.'}, {message: 'Id culpa ad proident ad nulla laborum incididunt tech uni 2020.'}, {message: 'Ullamco in ea et ad anim anim ullamco est.'}, {message: 'Est ut irure irure nisi.'} ]);
		expect(result).toStrictEqual([ 'Tempor quis esse consequat sunt ea eiusmod.', 'Ullamco in ea et ad anim anim ullamco est.', 'Est ut irure irure nisi.' ]);
	});

});

//for each for copying object
// function copy(obj) {
//     const copy = Object.create(Object.getPrototypeOf(obj))
//     const propNames = Object.getOwnPropertyNames(obj)
  
//     propNames.forEach(function(name) {
//       const desc = Object.getOwnPropertyDescriptor(obj, name)
//       Object.defineProperty(copy, name, desc)
//     })
  
//     return copy
//   }
  
//   const obj1 = { a: 1, b: 2 }
//   const obj2 = copy(obj1) 

//for each for flattening array
// function flatten(arr) {
//     const result = []
  
//     arr.forEach((i) => {
//       if (Array.isArray(i)) {
//         result.push(...flatten(i))
//       } else {
//         result.push(i)
//       }
//     })
    
//     return result
//   }