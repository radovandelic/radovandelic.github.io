/*function doPost()
{   //document.getElementByName('x1').val = 1000;
    document.getElementById('form1').submit();
}*/
$(window).load(function(){
 $('#if1').css({"height": screen.height*1.8, "width":window.innerWidth*0.97});
});
( function( $ ) {
$( document ).ready(function() {
var slider = true;
$('#cssmenu > ul').prepend('<li class=\"mobile\"><a href=\"#\"><span>Menu <i>&#9776;</i></span></a></li>');

$("#Linde").on('click', function() {
  /* $.get("pgmodels.php", function(data){
           alert(data);
       });*/
});
 $("#cssmenu > ul > li > a").on(   "click", function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
    });
 $("#cssmenu ul ul a").on(   "click", function(){
    slider = false;
    //$(".active ul").slideUp('fast');
    $(".active ul").hide();
    //document.getElementById('form1').submit();
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "pgsqlviljuskari.php");
    form.setAttribute("target", "if1");
	params = { name: this.name, id: this.id };
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
    if (this.name == "cenaod") {
      $(".active > a > span").text("od €"+this.id);
      $("#ponuda1 > a > span").text("Ponuda");
     //$("#"+this.id).parent().prevAll().hide();
    }
    else if (this.name == "cenado") {
      $(".active > a > span").text("do €"+this.id);
      $("#ponuda1 > a > span").text("Ponuda");
     //$("#"+this.id).parent().nextAll().hide();
    }
    else if (this.name == "ponuda" && this.text.indexOf('Povoljnije') != -1) {
      $(".active > a > span").text("Povoljnije za "+this.id+"%");
      $("#Marka > a > span").text("Marka");
      $("#Model > a > span").text("Model");
      $("#Cenaod > a > span").text("Cena od");
      $("#Cendado > a > span").text("Cena do");
    }
    else {
      $(".active > a > span").text(this.id);
      $("#ponuda1 > a > span").text("Ponuda");
    }
     slider = true;
     /*
    if (this.id.indexOf('do') != -1) {
     $(this.name).parent().nextAll().hide();
    } else if (this.id.indexOf('od') != -1) {
     $(this.name).parent().prevAll().hide();
    }*/
    //$(this).closest('.has-sub').addClass("active");

    });
$('#cssmenu > ul > li > a').on("mouseover", function(e) {
   if (slider == true) {
      //$(".active ul").slideUp('normal');
      $(".active ul").hide();
      $('#cssmenu li').removeClass('active');
      $(this).closest('li').addClass('active');
      var checkElement = $(this).next('ul');
      //checkElement.slideDown('normal');
      checkElement.show();
      if( $(this).parent().hasClass('mobile') ) {
        e.preventDefault();
        $('#cssmenu').toggleClass('expand');
      }
      if($(this).closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;
      }
   } else {
      return false;
   }
});

$('#cssmenu ul ul').on("mouseleave", function(e) {

  //$(".active ul").slideUp('normal');
  $('.active').removeClass('active');
  var checkElement = $('#cssmenu  ul ul');
  //checkElement.slideUp('normal');
  checkElement.hide();
  if( $(this).parent().hasClass('mobile') ) {
    e.preventDefault();
    $('#cssmenu').toggleClass('expand');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});

});
} )( jQuery );
