var calc = {

	lastResult: 0000,

	add: function (arg1, arg2) {
		return arg1 + arg2;
	},

	subtract: function subtract(arg1, arg2) {
		return arg1 - arg2;
	},

	multiply: function (arg1, arg2) {
		return arg1 * arg2;
	},

	divide: function (arg1, arg2) {
		return arg1 / arg2;
	},

	operate: function (operation, arg1, arg2) {

		if (arg2) {
			this.lastResult = operation(arg1, arg2);
			return this.lastResult;
		} else {
			this.lastResult = operation(calc.lastResult, arg1);
			return this.lastResult;
		}
	}
};

module.exports = calc;