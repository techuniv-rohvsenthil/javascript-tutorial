function curry(functionToBeCurried){
	let argsLength = functionToBeCurried.length;
	return function curriedFunction(...args){
		if(args.length == argsLength){
			return functionToBeCurried(...args);
		}
		else{
			return functionToBeCurried.bind(null, ...args);
		}
	};
}

module.exports = curry;