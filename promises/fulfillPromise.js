const fulfillPromise = function() {
	return new Promise(function (fulfill, reject) {
		setTimeout(() => {
			fulfill('FULFILLED!');
		}, 300);
	}).then((value) => console.log(value));
};

module.exports = fulfillPromise;