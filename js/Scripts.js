/* Agregar carrito */
/* Array de objetos productos Modals */
const datoProductosModals = [
    {
        nombre:"Despensero Micro Muro",
        precio: 600 ,
        imagen: './assets/Img/productos-destacados/1-full.jpg',
        informacionGeneral:"longitud del mueble A",
        dato1: "veces vendido: 591",
        dato2: "fecha de publicacion: Enero 2021",
        id: 1
    },
    {
        nombre:"BAHIUT Muro Vertical",
        precio: 523,
        imagen: './assets/Img/productos-destacados/2-full.jpg',
        informacionGeneral:"longitud del muebl S ",
        dato1: "veces vendido: 365",
        dato2: "fecha de publicacion: Noviembre 2020",
        id: 2
    },
    {
        nombre:"Hindu Muro",
        precio: 843,
        imagen: './assets/Img/productos-destacados/3-full.jpg',
        informacionGeneral:"longitud del mueble D",
        dato1: "veces vendido: 643",
        dato2: "fecha de publicacion: Febrero 2021",
        id: 3
    },
    {
        nombre:"Rrack Muro Vertical",
        precio: 203,
        imagen: './assets/Img/productos-destacados/4-full.jpg',
        informacionGeneral:"longitud del mueble F",
        dato1: "veces vendido: 457",
        dato2: "fecha de publicacion: Junio 2020",
        id: 4  
    },
    {
        nombre:"Casita Muro",
        precio: 698,
        imagen: './assets/Img/productos-destacados/5-full.jpg',
        informacionGeneral:"longitud del mueble G",
        dato1: "veces vendido: 982",
        dato2: "fecha de publicacion: Diciembre 2020",
        id: 5   
    },
    {
        nombre:"Hordenador de Tela Muro",
        precio: 345,
        imagen: './assets/Img/productos-destacados/6-full.jpg',
        informacionGeneral:"longitud del mueble H",
        dato1: "veces vendido: 374",
        dato2: "fecha de publicacion: Abril 2020",
        id: 6
    },
    {
        nombre:"7",
        precio:124,
        imagen: './assets/Img/productos-destacados/7-full.jpg',
        informacionGeneral:"longitud del mueble J",
        dato1: "veces vendido: 568",
        dato2: "fecha de publicacion: Abril 2020",
        id: 7
    },
    {
        nombre:8,
        precio:754,
        imagen: './assets/Img/productos-destacados/1-full.jpg',
        informacionGeneral:"longitud del mueble K",
        dato1: "veces vendido: 591",
        dato2: "fecha de publicacion: Abril 2020",
        id: 8
    }   
] 

function JSON(){
    let obtener =  fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(productos =>{
        debugger
        productos.forEach(producto => {
            `
            ${producto.id}
            `
        })
    })
    console.log(obtener)
    return obtener    
}
JSON()



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
                    </div>
                </div>
            </div>
            `
        });
    })
}

renderizarProductos();

$('.mostrar_modal').click(function(e){
    e.preventDefault();
    let producto = $(this).attr()
})

function renderizarProductosModal(){
    const contenedorProductosModal = document.getElementById('productos-modal');
    datoProductosModals.forEach(prod => {
        contenedorProductosModal.innerHTML += `
        <div class="portfolio-modal modal fade" id="${prod.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="./assets/Img/close-icon.lnk" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">${prod.nombre}</h2>
                                    <p class="item-intro text-muted">$${prod.precio}</p>
                                    <img class="img-fluid d-block mx-auto" src="${prod.imagen}" alt="" width="668px" height="468px" />
                                    <div class="position-modal-B">
                                        <p>${prod.informacionGeneral}</p>
                                        <ul class="list-inline">
                                            <li>${prod.dato1}</li>
                                            <li>${prod.dato2}</li>
                                        </ul>
                                        <a href="Compra.html">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-shopping-cart"></i>
                                                Comprar
                                            </button>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    
    let agregarCarritoBotones = document.getElementsByClassName('agregar-carrito');

    for (let boton of agregarCarritoBotones){
        boton.addEventListener('click', agregarCarrito);
    }
}
renderizarProductosModal()

let carrito =[];

function agregarCarrito(evt) {
    const productID= evt.target.parentNode.parentNode.id
    | console.log(evt.target.parentNode.parentNode.id);
    datoProductos.forEach(producto => {
        if(evt.target.parentNode.parentNode.id == producto.id){
            carrito.push(producto);
        }
    });
    localStorage.setItem('productos-carrito', JSON.stringify(carrito));
}

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

