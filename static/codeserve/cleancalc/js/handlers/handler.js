/*
var number1, number2, method, inputbox, lr;
document.addEventListener("DOMContentLoaded", function (event) {
    inputbox = document.getElementById("inputbox");
    lr = document.getElementById("lastResult");
});*/

var handler = {
    number1: undefined,
    number2: undefined,
    method: undefined,
    controller: {},
    lr: undefined,
    init: function () {
        this.controller = controller;
        this.controller.model = model;
        this.controller.view = view;
        this.controller.logic = logic;
    },
    numbers: function (number) {
        number = number.innerHTML;
        var error = isNaN(Number(number)) ? "Error: Not a number" : false;
        this.controller.inputbox(error, number);
    },
    operations: function (doWhat) {
        doWhat = doWhat.innerHTML;
        var number = document.getElementById("inputbox").value;
        this.lr = document.getElementById("lastresult").innerHTML.trim();
        var error = isNaN(number) ? "You think this is a mf game? \nEnter an actual number." : false;
        if (this.number1 == undefined & doWhat != "C") {
            this.number1 = number ? Number(number) : undefined;
        } else {
            this.number2 = Number(number);
        }
        document.getElementById("inputbox").value = "";

        if (doWhat == "C") {
            this.clear();
            this.controller.clear();
        } else {
            this.calculate(error, doWhat);
        }
    },
    calculate: function (error, doWhat) {
        if (this.number1 || error) {
            this.controller.operate(error, this.method, this.number1, this.number2);
            if (this.number2 || this.lr != "<br>") { this.clear(); }
        }
        if (doWhat != "=") { this.switchboard(doWhat); }
    },
    switchboard: function (doWhat) {
        if (/\*/.test(doWhat)) { this.method = "multiply"; }
        else {
            switch (doWhat) {
                case "+":
                    this.method = "add";
                    break;
                case "-":
                    this.method = "subtract";
                    break;
                case "/":
                    this.method = "divide";
                    break;
                default:
                    break;
            }
        }
    },
    clear: function () {
        this.method = undefined;
        this.number1 = undefined;
        this.number2 = undefined;
    }
};