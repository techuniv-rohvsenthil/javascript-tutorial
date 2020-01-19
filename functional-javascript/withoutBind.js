function logger(namespace){
	return function AddMessage(...inputMessage){
		return ((str1, strArray) => str1 + strArray.join(' ')).apply(namespace, [namespace, inputMessage]);
		//return console.log.apply(null, [namespace + ' ' + inputMessage.join(' ')]);
	};
}

module.exports = logger;


//basic apply
// var obj = {name:"Niladri"};
// var greeting = function(a,b,c){
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c;
// };
// // array of arguments to the actual function
// var args = ["Newtown","KOLKATA","WB"];  
// console.log("Output using .apply() below ")
// console.log(greeting.apply(obj,args));