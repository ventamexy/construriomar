window.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('load', function() {
        document.querySelector(".seccion-oculto").classList.add("d-none");
    });

    let totalImagenesMostrar = 3;
    if ( window.matchMedia("(max-width: 858px)" ).matches) {
        totalImagenesMostrar = 2;   
    }

    let objPropiedades = {
        autoplay: true, 
        keyboard: true,
        wheel:true,
        // By number (px)
        padding: 10,
        // By the CSS format
        padding: '1rem',
        // Specifies each value for a horizontal carousel
        padding: { left: 10, right: 20 },
        padding: { left: '1rem', right: '2rem' },
        // Specifies each value for a vertical carousel
        padding: { top: 10, bottom: 20 },
        type: 'loop',
        perPage: totalImagenesMostrar,
        interval: 5000,
    };

    let splide = new Splide('.splide', objPropiedades);
    splide.mount();

});