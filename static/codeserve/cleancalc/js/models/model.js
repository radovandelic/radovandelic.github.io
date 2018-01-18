var model = {

    lastResult: 0000,
    getResult: function (error, callback) {
        if (callback) {
            callback(error, this.lastResult);
        } else {
            return this.lastResult;
        }
    },
    setResult: function (error, value, callback) {
        if (error) {
            callback(error, value);
        } else {
            this.lastResult = value;
            if (callback) {
                callback(error, value);
            }
        }
    },
    clear: function () {
        this.lastResult = 0000;
    }
};