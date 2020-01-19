function repeat(functionToBeCalled, n){
	if(n > 0){
		functionToBeCalled();
		return repeat(functionToBeCalled, n-1);
	}
}

module.exports = repeat;