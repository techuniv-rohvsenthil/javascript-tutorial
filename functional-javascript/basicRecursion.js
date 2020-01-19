function reduce(inputArray, inputFunction, initial){
	return function applyreduce(arrayIndex, resultant){
		if(arrayIndex < inputArray.length){
			return applyreduce(arrayIndex+1, inputFunction(resultant, inputArray[arrayIndex], arrayIndex, inputArray)); 
		}
		else{
			return resultant; 
		}
	}(0, initial);
}

module.exports = reduce;