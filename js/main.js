window.addEventListener("load", function() {

    // Selección de opción del menú en base a la sección actual.
    let pagina = window.location.pathname;
    let arrayAhref = $(".navegacion-principal a");

    if ( pagina != "/" ) {

        arrayAhref.removeClass("item-activo");
        for (var i = 0; i < arrayAhref.length; i++) {
            let elemento = arrayAhref[i];
            if ( elemento.pathname == pagina ) {
                elemento.classList.add("item-activo");
                // --- Se agrega la clase para no mostrar el borde inferior del elemento.
                contenedorPadre = elemento.parentNode;
                contenedorPadre.classList.add("background-color-none");
                return;
            }
        }

    } else {
        arrayAhref[0].classList.add("item-activo");
    }

});


/**
 * 
 * Movimiento scrollY
 * 
 */
$(document).on("scroll", function() { 

    /**
     * --- Unidades en pixeles.
     */
    let offsetHeight = $(document)[0].scrollingElement.offsetHeight; // Altura total del elemento
    let scrollTop = $(document).scrollTop(); // Desplazamiento del scroll vertical.
    let clientHeight = $(document)[0].scrollingElement.clientHeight;

    // console.log(offsetHeight, clientHeight, (offsetHeight-clientHeight), " = ", scrollTop);

    if ( (offsetHeight-clientHeight) == scrollTop ) {

        $(".irAbajo i").addClass("transform-r-180");
        $(".irAbajo").removeClass("irAbajo").addClass("irArriba");

    } else {

        $(".irAbajo i").removeClass("transform-r-180");
        $(".irArriba").removeClass("irArriba").addClass("irAbajo");

    }

    /**
     * 
     * Fijar menú
     * 
     */

    if ( scrollTop >= 200 ) {
        $(".navbar")[0].classList.add("menu-fijado");
    } else {
        $(".navbar")[0].classList.remove("menu-fijado");
    }
    
});

// --- Se establece el anio actual en el campo correspondiente.
$(".anio-actual").text(new Date().getFullYear());

$(document).on("click", ".irAbajo", function(){
    window.scroll({
        top: document.body.offsetHeight,
        behavior: 'smooth'
    });
});

$(document).on("click", ".irArriba", function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

// ///////////////////////////////////NUMERO ANIMACIÓN//////////////////////////////
$(function () {
    $(window).resize(function () { $(document).width() >= 768 ? $(".navegacion-principal").show() : $(".navegacion-principal").hide() }), $(".programa-evento .info-curso:first").show(), $(".menu-programa a:first").addClass("activo"), $(".menu-programa a").on("click", function () { $(".menu-programa a").removeClass("activo"), $(this).addClass("activo"), $(".ocultar").hide(); var n = $(this).attr("href"); return $(n).fadeIn(1e3), !1 }), jQuery(".resumen-evento").length > 0 && $(".resumen-evento").waypoint(function () { $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 30 }, 1200), $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200), $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1500), $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1500) }, { offset: "60%" }), $(".cuenta-regresiva").countdown("2017/12/10 09:00:00", function (n) { $("#dias").html(n.strftime("%D")), $("#horas").html(n.strftime("%H")), $("#minutos").html(n.strftime("%M")), $("#segundos").html(n.strftime("%S")) }), $(".invitado-info").colorbox({ inline: !0, width: "50%" }), $(".boton_newsletter").colorbox({ inline: !0, width: "50%" })
});