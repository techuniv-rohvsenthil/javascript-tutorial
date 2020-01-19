function logger(namespace){
	return function AddMessage(...inputMessage){
		//const msg = console.log.bind(null, namespace + ' ' + inputMessage.join(' '));
		const msg =  ((str1, strArray) => str1 + strArray.join(' ')).bind(null, namespace, inputMessage);
		return msg();
	};
}

module.exports = logger;

// this.x = 9;    // this refers to global "window" object here in the browser
// const module = {
//   x: 81,
//   getX: function() { return this.x; }
// };
// module.getX(); // 81
// const retrieveX = module.getX;
// retrieveX();   
// // returns 9 - The function gets invoked at the global scope
// const boundGetX = retrieveX.bind(module);
// boundGetX(); // 81


// function list() {
//     return Array.prototype.slice.call(arguments);} 
//   function addArguments(arg1, arg2) {
//       return arg1 + arg2}
//   // Create a function with a preset leading argument
//   const leadingThirtysevenList = list.bind(null, 37);
//   // Create a function with a preset first argument.
//   const addThirtySeven = addArguments.bind(null, 37); 
//   const list3 = leadingThirtysevenList(1, 2, 3); 
//   // [37, 1, 2, 3]
//   const result2 = addThirtySeven(5); 
//   // 37 + 5 = 42 