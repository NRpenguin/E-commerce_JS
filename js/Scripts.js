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

/* const datoProductos = [
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
        
    }
]

//Renderizar productos

function renderizarProductos(){
    let contenedorProductos = document.getElementById('productos');
    datoProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
        <div class="col-lg-4 col-sm-6 mb-4" id="${producto.id}">
            <div class="portfolio-item">
                <div class="responsive-img">
                    <img class="responsive-img" src="${producto.imagen}" alt="" />
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${producto.nombre}</div>
                    </div>
                </div>
                <button class="btn btn-primary agregar-carrito" type="button">
                    <i class="fas fa-smile-beam"></i>
                    Agregar al carrito
                </button>
                
            </div>
        </div>
        `
    });

    $("#Cambio").prepend(`
        <div class="position-arrow2-b circle responsive">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
        </div>
        `
    )
    $("#Cambio").prepend(`
        <div class="position-arrow-a circle">
            <svg class="hidden" focusable="false" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
        </div>
        `
    )

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
} */
 
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