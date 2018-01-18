* calc: object
    * lastResult: number
		* initialized: 0000
		* purpose: "to allow chained operation"s
	* operate: function
		* args: 3
			* operation: string
				* purpose: designates which method to call
			* arg1: number
				* purpose: required operand
			* arg2: number
				* purpose: optional operand
		* return: number
		* behavior: calls the right method with arg1 and arg2 OR lastResult
		* purpose: allows users to access math methods from a single interface
	
	* add: function
		* args: 2
			* arg1, arg2: number
				* purpose: math need numbers
 		* return: number
 		* behavior: adds arg1 to arg2 and returns the sum
 		* purpose: so users can add

 	* subtract: function
		* args: 2
			* arg1, arg2: number
				* purpose: math need numbers
		* return: number
		* behavior: sutracts arg1 to arg2 and returns the result
		* purpose: so users can subtract

	* multiply: function
		* args: 2
			* arg1, arg2: number
				* purpose: math need numbers
		* return: number
		* behavior: multiplies arg1 to arg2 and returns the result
		* purpose: so users can multiply
	* divide: function
		* args: 2
			* arg1, arg2: number
				* purpose: math need numbers
		* return: number
		* behavior: divides arg1 to arg2 and returns the result
		* purpose: so users can divide

* tests: object
	* testAdd: function
		* numbers: 2
			* number1, number2: number
				* purpose: math need numbers
		* return: number
		* behavior: tests the add function
		* purpose: so users can test the add function

	* testSubtract: function
		* numbers: 2
			* number1, number2: number
				* purpose: math need numbers
		* return: number
		* behavior: tests the subtract function	
		* purpose: so users can the test subtract function

	* testMultiply: function
		* numbers: 2
			* number1, number2: number
				* purpose: math need numbers
		* return: number
		* behavior: tests the multiply function
		* purpose: so users can test the multiply function
	* testDivide: function
		* numbers: 2
			* number1, number2: number
				* purpose: math need numbers
		* return: number
		* behavior: tests the add function	
		* purpose: so users can test the divide function

	* testOperate: function
		* numbers: 3
			* operation: string
				* purpose: designates which method to call
			* number1: number
				* purpose: required operand
			* number2: number
				* purpose: optional operand
		* return: number
		* behavior: testing switchboard
		* purpose: allows users to access testing methods from a single interface