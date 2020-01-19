function duckCount(...args){
	let quackArray = args.filter(arg => Object.prototype.hasOwnProperty.call(arg, 'quack'));
	return quackArray.length;
}

module.exports = duckCount;

//assigning constructors
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   } 
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }

//function.call(obj, parameters)
//Array.prototype.map.call(str, increment-char);