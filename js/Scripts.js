function renderizarProductos(){
    fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(producto =>{
        let contenedorProductos = document.querySelector('#productos');
        producto.forEach(prod => {
            contenedorProductos.innerHTML += ` 
            <div id="${prod.id}">
                <div class="swiperDestacados__elemento spaceDestacados">
                    <a href="#" class="alinear-imagen mostrar_modal">
                        <img src="${prod.imagen}" alt=""/>
                    </a>
                    <div class="producto_contentenido">
                        <a href="#" class="producto_link centrar"><span>$${prod.precio}</span></a>
                        <a href="#" class="producto_link"><p>${prod.nombre}</p></a>
                        <button class="btn btn-primary agregar-carrito" type="button">
                        <i class="fas fa-cart-plus"></i>
                        Agregar al carrito
                        </button>
                    </div>
                    <button class="btn btn-primary centrar-btn" type="button">
                        <i class="fas fa-handshake"></i>
                        Comprar
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

let carrito =[];

function agregarCarrito(evt) {
    console.log(evt.target.parentNode.parentNode.parentNode.id);
    fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(productos =>{
        productos.forEach(producto => {
            if(evt.target.parentNode.parentNode.parentNode.id == producto.id){
                carrito.push(producto);
            }
        })
    });
    localStorage.setItem('productos-carrito', JSON.stringify(carrito));
}

const accederInfo = JSON.parse(localStorage.getItem('productos-carrito'))

function recibirProductoCarrito(){
    if(accederInfo != null){
        let pintar = document.getElementById('Agregar');
        accederInfo.forEach(prod => {
            pintar.innerHTML += `
                <div id="${prod.id}">
                    <div class="swiperDestacados__elemento spaceDestacadosCarrito itemCarrito">
                        <img src="${prod.imagen}" alt=""/>
                        <button class="btn btn-primary remover-carrito colocar" type="button">
                            <i class="fas fa-times-circle"></i>
                        </button>
                        <div class="producto_contentenido">
                            <span class="centrar">$${prod.precio}</span>
                            <p>${prod.nombre}</p>
                        </div>
                    </div>
                </div>
            `
        });
        /* Eliminar producto especifico */
        let quitarCarritoBotones = document.getElementsByClassName('remover-carrito');
    
        for (let boton of quitarCarritoBotones){
            boton.addEventListener('click', quitarProductoCarrito);
        }
    }
}

recibirProductoCarrito()

function quitarProductoCarrito(evt) {
   let producto, productoID;
   if (evt.target.classList.contains('remover-carrito')){
       evt.target.parentNode.parentNode.remove()
       producto = evt.target.parentNode.parentNode;
       productoID = producto.querySelector('button').getAttribute('data-id');
   }
}

/* Eliminar todos los productos */
const traerBtn= document.querySelector('#eliminarTodo')
traerBtn.addEventListener('click', quitarProductosCarrito)
function quitarProductosCarrito(evt){
    while(accederInfo.firstChild){
        accederInfo.removeChild(accederInfo.firstChild);
    }
    return false
}


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