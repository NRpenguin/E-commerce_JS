/* //carrito
function añadirProducto() {
    let producto = prompt("pelota | busoMasc. | moñoMasc.") 
    let precio = prompt("ingrese el precio del producto")
    const precioArray = [];
    precioArray.push(precio)
    return precioArray
}

function elegirProducto2() {
    let producto2 = prompt("¿Algo mas? Si/No")
    if (producto2 == "si") {
        let elegirProducto2 = prompt("juguete | consola | traje") 
        let precio2 = prompt("ingrese el precio del producto")
        const precio2Array = [];
        precio2Array.push(precio2)
        return precio2Array
    } else {
        console.log("no selecciono ningun otro producto")
        return producto2 = 0
    }
}


function envio(productoAñadido, producto2Añadido) {
    if (producto2 = true) {
        let precioTotal = parseInt(productoAñadido) + parseInt(producto2Añadido) + 100
        return precioTotal
    } else {
        let precioTotal = parseInt(productoAñadido) + 100
        return precioTotal
    }
}

function mostrarPrecioTotal(resultadoFinal) {
    document.write("el precio total es " + resultadoFinal)
}



function guardarResultados(producto, productoSecundario, totalEnvio) {
    this.producto = producto
    this.productoSecundario = productoSecundario;
    this.totalEnvio = totalEnvio;
}
const guardarResultados1 = new guardarResultados(añadirProducto, elegirProducto2, envio(añadirProducto(), elegirProducto2()))

mostrarPrecioTotal(guardarResultados1.totalEnvio) */

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


const apretarBotonA = document.querySelector(".carrito1");
const apretarBotonB = document.querySelector(".carrito2");

/* Agregar carrito */

const agregarCarrito1 = {
    producto: "Despensero Micro Muro",
    precio: 500   
};
const apretaste1 = () => {
    const pasarJson = JSON.stringify(agregarCarrito1);
    localStorage.setItem("agregarCarrito1", pasarJson);
    let storage = localStorage.getItem ("agregarCarrito1") 
    console.log("productos guardados= " + storage)
}

const agregarCarrito2 = {
    producto: "BAHIUT Muro Vertical",
    precio: 700
}
const apretaste2 = () => {
    const pasarJson = JSON.stringify(agregarCarrito2);
    localStorage.setItem("agregarCarrito2", pasarJson);
    let storage = localStorage.getItem ("agregarCarrito2") 
    console.log("productos guardados= " + storage)
}

let total = agregarCarrito1.precio + agregarCarrito2.precio

let totalCarrito = document.createElement("p")
totalCarrito.innerHTML = `el precio total es= ${total}`;
document.body.appendChild(totalCarrito)
//no se como hacer para que aparezca abajo de los botones de destacados :( 

apretarBotonA.addEventListener("click", apretaste1)
apretarBotonB.addEventListener("click", apretaste2)

