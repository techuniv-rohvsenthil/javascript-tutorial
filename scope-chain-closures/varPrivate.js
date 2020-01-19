function getObj(arg){
	let private = arg;
	return {
		getPrivate: function(){return private;},
		setPrivate: function(n){private = n;}    
	};

}

let obj = getObj(2);
let obj2 = getObj(4);
console.log(obj.getPrivate()); // 2
console.log(obj2.getPrivate());
obj.setPrivate(3); // sets to 3
console.log(obj.private); // undefined
console.log(obj.getPrivate()); // 3