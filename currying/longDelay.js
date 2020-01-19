let initial = 0;
function addArgs(initialArg){
	if(!initialArg){
		let result = initial;
		initial = 0;
		return result;
	}
	else{
		initial += initialArg;
		return addArgs; 
	}
}

module.exports = addArgs;