/* Eventos de cuotas */
const eleccionA = document.querySelector(".doce");
const eleccionB = document.querySelector(".dieciocho");

const remarcarA = () => {
    console.log("ofertas en productos de cocina y productos para niños")
}

const remarcarB = () => {
    console.log("ofertas en productos de decoracion")
}

eleccionA.addEventListener("click", remarcarA)
eleccionB.addEventListener("click", remarcarB)


/* Agregar carrito */

const datoProductos = [
    {
        nombre:"Despensero Micro Muro",
        precio: 600,
        imagen: './assets/Img/productos-destacados/1.jpg',
        id: 1
    },
    {
        nombre:"BAHIUT Muro Vertical",
        precio: 523,
        imagen: './assets/Img/productos-destacados/2.jpg',
        id: 2
    },
    {
        nombre:"Hindu Muro",
        precio: 843,
        imagen: './assets/Img/productos-destacados/3.jpg',
        id: 3
    },
    {
        nombre:"Rrack Muro Vertical",
        precio: 203,
        imagen: './assets/Img/productos-destacados/4.jpg',
        id: 4  
    },
    {
        nombre:"Casita Muro",
        precio: 698,
        imagen: './assets/Img/productos-destacados/5.jpg',
        id: 5   
    },
    {
        nombre:"Hordenador de Tela Muro",
        precio: 345,
        imagen: './assets/Img/productos-destacados/6.jpg',
        id: 6
    },
     {
        nombre:"7",
        precio:124,
        imagen: './assets/Img/productos-destacados/6.jpg',
        id: 7
    },
    {
        nombre:8,
        precio:754,
        imagen: './assets/Img/productos-destacados/6.jpg',
        id: 8
    }
]

function renderizarProductos(){
    let contenedorProductos = document.getElementById('productos');
    datoProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
        <div id="${producto.id}"> 
            <div>
                <div class="swiperDestacados__elemento spaceDestacados">
                    <img src="${producto.imagen}" alt=""/>
                    <p>${producto.nombre}</p>
                </div>
                <button class="btn btn-primary agregar-carrito" type="button">
                <i class="fas fa-smile-beam"></i>
                Agregar al carrito
                </button>
            </div>
        </div>
        `
    });

    let agregarCarritoBotones = document.getElementsByClassName('agregar-carrito');

    for (let boton of agregarCarritoBotones){
        boton.addEventListener('click', agregarCarrito);
    }
}

renderizarProductos();

let carrito =[];

function agregarCarrito(evt) {
    console.log(evt.target.parentNode.parentNode.id);
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

/* 
let carrito = {}

const addCarrito = e => {
    if (e.targe.classList.contains('btn-primary')){
        console.log(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {

} */