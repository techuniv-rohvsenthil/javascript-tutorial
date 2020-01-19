const foo = require("./closure");

describe("the foo function", () => {
	it("should return a function", () => {
		const result = foo();
		expect(typeof result).toBe("function");
	});

});



