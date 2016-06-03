$(document).foundation()
$(function(){
  $(".accordion-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open
          contenido.slideDown(250);
          $(this).addClass("open");
        }
        else{ //close
          contenido.slideUp(250);
          $(this).removeClass("open");
        }

      });
});

$('.boton-top').click(function(){
    $('body,html').animate({scrollTop : 0}, 500);
    return false;
});

function mostrar(enla) {
obj = document.getElementById('oculto'+enla);
obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';
}
