/* Animacion y efectos */
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    },
    function() {
        $(this).removeClass('transition');
    });
});

/* Scroll */
window.onload = () => {
    let links = document.querySelectorAll('.nav-link')
    
    let pageTop = links[0]
    pageTop.addEventListener('click', () => {
        scrollSuave('#page-top', 500, 125)
    })
    
    let Destacados = links[1]
    Destacados.addEventListener('click', () => {
        scrollSuave('#Destacados', 500, 125)
    })

    let Ofertas = links[2]
    Ofertas.addEventListener('click', () => {
        scrollSuave('#Ofertas', 500, 125)
    }) 

    let MasEspecifico = links[3]
    MasEspecifico.addEventListener('click', () => {
        scrollSuave('#Mas-Especifico', 500, 125)
    })

    let Ubicacion = links[4]
    Ubicacion.addEventListener('click', () => {
        scrollSuave('#Ubicacion', 500, 125)
    })
}

const scrollSuave = (objetivo, duracion, compensacio) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacio
    let posInicial = window.pageYOffset
    let tiempoInicial = null

    const animacion = tiempoAhora => {
        if (tiempoInicial === null) tiempoInicial = tiempoAhora 
        let tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
        window.scrollTo (0, auxAnimacion)
        if(tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
}

const easeInOutQuad = (t, b, c, d) => {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) -1) + b;
}