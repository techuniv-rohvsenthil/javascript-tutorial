function doubleAll(inputArray){
	const doubledArray = inputArray.map(arrayElement => arrayElement*2);
	return doubledArray;
}

// map on array of objects
// let kvArray = [{key: 1, value: 10}, 
//     {key: 2, value: 20}, 
//     {key: 3, value: 30}]

// let reformattedArray = kvArray.map(obj => {
// let rObj = {}
// rObj[obj.key] = obj.value
// return rObj
// })
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// usage of map with strings
// let map = Array.prototype.map
// let a = map.call('Hello World', function(x) { 
//   return x.charCodeAt(0)
// })
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


module.exports = doubleAll;