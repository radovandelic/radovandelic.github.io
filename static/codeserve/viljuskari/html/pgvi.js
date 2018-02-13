
( function( $ ) {
$( document ).ready(function() {
var selected = $("#selpg").attr('name');
$('.disabled').removeClass('disabled').addClass('page');
$("#"+selected).removeClass('page').addClass('disabled');
$(".page").on(   "click", function(){   
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "pgsqlviljuskari.php");
	params = { page: this.id };
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
});
});
} )( jQuery );