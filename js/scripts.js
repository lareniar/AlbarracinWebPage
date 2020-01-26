 
  function go(loc){
    console.log(loc);
      document.getElementById('iframe').src = loc; 
  }
  // Variables globales
  var pathname = window.location.pathname;
  var iImg=1; //contador de imagenes del carrusel.
  setInterval(siguiente,5000);//intervalo para pasar de imagen

  //funcion siguiente imagen
  function siguiente(){
      iActual="#portada" + iImg;
      iImg++;
      if(iImg>3){
          iImg=1;
          iSiguiente="#portada" + iImg;
      }else{
          iSiguiente="#portada" + iImg;
      }

      $(iActual).hide("slide", {
          direction: "left"
      }, 1000);
      $(iSiguiente).show("slide",{
          direction: "right"
      }, 1000);
  }

  $(document).ready(function(){
    //MENU SUPERIOR DE PÁGINAS (cambio de color)
    aColor=["red","blue","green","yellow","orange"]// array de colores para los background
    // menú superior
    $( ".headerLinks" ).children().hover(function(){
      $(this).children().slideToggle(500).css("background-color",aColor[$(this).children().attr('id')]);
    });


    //seccion historia ...
    $("#tabs").tabs({
        collapsible: true,
        show: { effect: "blind", duration: 1000 }
    });
    $("#tab-Historia, #tab-Actualidad, #tab-Tradiciones").hide();   
    $("#tabs ul li").click(function(){
        $("#tabs ul li").css("background-color","rgb(0, 0, 0)");
        $(this).css("background-color","rgba(0, 0, 0, 0.452)");
    });
    
    //seccion turismo
    $(".gridItem").hover(function(){
      $(this).children().children(".divTexto").slideToggle(1000);
    });

    $("#gridActividades").hide();//ocultamos las actividades

    //cuando elija actividades toggle de los divs de botones
    $("#btnActividades").click(function(){
      $("#gridActividades").slideToggle(1000);
      $("#gridServicios").slideUp(1000)
    });
    //cuando elija servicios cambiamos los divs de botones/imagenes
    $("#btnServicios").click(function(){
      $("#gridActividades").slideUp(1000);
      $("#gridServicios").slideToggle(1000)
    });


    /* SOBRE NOSOTROS */
    //img seleccion de la galeria
    $("#divImgSelect").hide();
    $(".imgGaleria").click(function(){
      $("#imgSelect").attr("src",$(this).attr('src'));
      $("#divImgSelect").fadeIn();
    });
    $("#exit").click(function(){
      $("#divImgSelect").fadeOut();
    })
   

  })

 