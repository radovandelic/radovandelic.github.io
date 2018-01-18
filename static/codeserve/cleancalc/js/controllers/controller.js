var controller = {
    model: {},
    view: {},
    logic: {},
    inputbox: function (error, number) {
        this.view.inputbox(error, number);
    },
    showResult: function (error) {
        this.model.getResult(error, this.view.showResult);
    },
    clear: function () {
        this.model.clear();
        this.view.clear();
    },
    operate: function (error, method, number1, number2) {
        var lastResult = this.model.getResult();
        if (method) {
            if (number2) {
                lastResult = this.logic[method](number1, number2);
            } else if (lastResult != 0000) {
                lastResult = this.logic[method](lastResult, number1);
            }
        }
        this.model.setResult(error, lastResult, this.view.showResult);
    }
}