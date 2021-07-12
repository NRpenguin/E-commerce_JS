function renderizarProductos(){
    fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(productos =>{
        let contenedorProductos = document.getElementById('productos');
        productos.forEach(producto => {
            contenedorProductos.innerHTML += ` 
            <div id="${producto.id}">
                <div class="swiperDestacados__elemento spaceDestacados">
                    <a href="#" class="alinear-imagen mostrar_modal">
                        <img src="${producto.imagen}" alt=""/>
                    </a>
                    <div class="producto_contentenido">
                        <a href="#" class="producto_link centrar"><span>$${producto.precio}</span></a>
                        <a href="#" class="producto_link"><p>${producto.nombre}</p></a>
                        <button class="btn btn-primary agregar-carrito" type="button">
                        <i class="fas fa-smile-beam"></i>
                        Agregar al carrito
                    </div>
                </button>
                </div>
            </div>
            ` 
        });
        
        let agregarCarritoBotones = document.getElementsByClassName('agregar-carrito');
    
        for (let boton of agregarCarritoBotones){
            boton.addEventListener('click', agregarCarrito);
        }
    })

}
renderizarProductos();


let carrito =[];

function agregarCarrito(evt) {
    console.log(evt.target.parentNode.parentNode.id);
    fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(productos =>{
        productos.forEach(producto => {
            if(evt.target.parentNode.parentNode.id == producto.id){
                carrito.push(producto);
            }
        })
    });
    localStorage.setItem('productos-carrito', JSON.stringify(carrito));
}

function recibirProductoCarrito(){
    const accederInfo = localStorage.getItem ('productos-carrito')
    const pasar = JSON.parse (accederInfo)
    let pintar = document.getElementById('Agregar');
    pasar.forEach(prod => {
        pintar.innerHTML += `
        <div id="${prod.id}">
            <div class="swiperDestacados__elemento spaceDestacadosCarrito">
                <a href="#" class="alinear-imagen mostrar_modal">
                    <img src="${prod.imagen}" alt=""/>
                </a>
                <div class="producto_contentenido">
                    <a href="#" class="producto_link centrar"><span>$${prod.precio}</span></a>
                    <a href="#" class="producto_link"><p>${prod.nombre}</p></a>
                </div>
            </div>
        </div>
        `
    })
}
recibirProductoCarrito()

/* Carousel Productos */
window.addEventListener('load', function() {
    new Glider(document.querySelector('.swiperDestacados__lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        
        dots: '.swiperDestacados__indicador',
        
        arrows: {
            prev: '.swiperDestacados__anterior',
            next: '.swiperDestacados__siguiente'
        }
    })
})

window.addEventListener('load', function() {
    new Glider(document.querySelector('.swiperOfertas__lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,

        dots: '.swiperOfertas__indicador',

        arrows: {
            prev: '.swiperOfertas__anterior',
            next: '.swiperOfertas__siguiente'
        }
    })
})

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

