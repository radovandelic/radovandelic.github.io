It's a silly MVC app to add a few numbers.

* v4.0
    * refactored in MVC

* v3.0 
    * added a html GUI for the calculator
    * simplified commandline arguments. just enter e.g "calc 2 + 2" or "test 4 / 2" to do mathematical operations or tests. Be sure to put "*" in quotation marks tho.

* v2.1 added commandline functionality.
    * first argument: test or calc, selects the object you want to use.
    * second argument: selects the function you want to use
    * third argument: number1
    * fourth argument: number1

* v2.0: refactored, put functions inside objects and added a testing suite.

* v1.0: operatedIntermediary() is deprecated in favor of operate() which applies the mathematical operation on lastResult in case arg2 is undefined. 

* v0.1: added operateIntermediary() function in order to be able to calculate by passing add/subtract/divide/multiply functions and two numbers  to the function.