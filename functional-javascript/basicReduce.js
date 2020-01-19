function countWords(inputWords){
	let reducedInputWords = inputWords.reduce( function (wordCount, input){
		if(input in wordCount){
			wordCount[input]++;
		}
		else{
			wordCount[input] = 1;
		}
		return wordCount;
	}, {});
    
	return reducedInputWords;
    
}

module.exports = countWords;

//sum of array elements
// let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
//   }, 0)

//flatten array
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(accumulator, currentValue) {
//       return accumulator.concat(currentValue)
//     },
//     []
//   )

//group by keys
// function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }

//removing duplicates
// let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//     if (accumulator.indexOf(currentValue) === -1) {
//       accumulator.push(currentValue)
//     }
//     return accumulator
//   }, [])