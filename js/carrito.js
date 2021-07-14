
function renderizarProductos(){
    fetch('productos.json')
    .then(respuesta => respuesta.json())
    .then(producto =>{
        let contenedorProductos = document.querySelector('#productos');
        producto.forEach(prod => {
            contenedorProductos.innerHTML += ` 
            <div id="${prod.id}" class="producto">
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
                <button class="btn btn-primary remover-carrito colocar" data-id=${prod.idEliminar}" type="button">
                <i class="fas fa-times-circle"></i>
                </button>
                <div class="producto_contentenido">
                <span class="centrar precio">$${prod.precio}</span>
                <p>${prod.nombre}</p>
                </div>
                </div>
                </div>
                `
            });
            /* Eliminar producto especifico */
        let quitarCarritoBotones = document.getElementsByClassName('remover-carrito');
        for (let boton of quitarCarritoBotones){
            boton.addEventListener('click', (evt)=>{quitarProductoCarrito(evt)});
        }
    }else{
        const noIngresado = () => {
            pintar.innerHTML +=`
            <p>no se a ingresado ningun producto en el carrito</p>
            `
        }
    }
}

recibirProductoCarrito()

function quitarProductoCarrito(evt) {
    let producto, productoID;
    if (evt.target.classList.contains('remover-carrito')){
        evt.target.parentElement.parentElement.remove();
       producto = evt.target.parentElement.parentElement;
       productoID = producto.querySelector('button').getAttribute('data-id');
       
    }
    
}

/* Eliminar todos los productos */
const traerBtn = document.querySelector('#eliminarTodo')
const traerID = document.querySelector('#Agregar')
traerBtn.addEventListener('click', quitarProductosCarrito)
function quitarProductosCarrito(evt){
    while(traerID.firstChild){
        traerID.removeChild(traerID.firstChild);
    }
    return false
}

function Total(){
    let total = 0 
    const CarritoTotal = document.querySelector('.carritoTotal')
    const ProductosCarrito = document.querySelectorAll('.producto')
    ProductosCarrito.forEach(item =>{
        const obtenerPrecioElemento = ProductosCarrito.querySelector('.precio')
        const obtenerPrecio = Number(
            obtenerPrecioElemento.textContent.replace('$', '')
            )
        ProductosCarrito
    })
}
