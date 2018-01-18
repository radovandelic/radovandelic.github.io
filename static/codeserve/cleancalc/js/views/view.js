var view = {
    inputbox: function (error, number) {
        if (error) {
            alert(error);
        } else {
            document.getElementById("inputbox").value += number;
        }
    },
    showResult: function (error, result) {
        if (error) {
            alert(error);
        } else if (result != 0000) {
            document.getElementById("lastresult").innerHTML = "&nbsp;&nbsp;&nbsp; Last result: " + result;
        }
    },
    clear: function () {
        document.getElementById("inputbox").value = "";
        document.getElementById("lastresult").innerHTML = "<br>";
    }
}