function delayAdd(initialInput){
	return function adder(delayedInput){
		return initialInput + delayedInput;
	};
}

module.exports = delayAdd;