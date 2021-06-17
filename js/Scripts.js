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



/* Agregar carrito */
const datoProductos = [
    {
        nombre:"Despensero Micro Muro",
        precio: 600
    },
    {
        nombre:"BAHIUT Muro Vertical",
        precio: 523
        
    },
    {
        nombre:"Hindu Muro",
        precio: 843
        
    },
    {
        nombre:"Rrack Muro Vertical",
        precio: 203
        
    },
    {
        nombre:"Casita Muro",
        precio: 698
        
    },
    {
        nombre:"Hordenador de Tela Muro",
        precio: 345
        
    }
]

function agregarCarrito () {
    datoProductos.forEach(element => {
        let contenedorNom = document.createElement("div")
        contenedorNom.innerHTML = element.nombre
        let contenedorPre = document.createElement("p")
        contenedorPre.innerHTML = element.precio
        document.querySelector("#agregarCarrito").appendChild(contenedorNom)
        document.querySelector("#agregarCarrito").appendChild(contenedorPre)
    });
}

agregarCarrito()
 

const apretarBotonA = document.querySelector(".carrito1");

const agregado = []

const apretaste1 = () => {
    agregado.push(agregarCarrito)
    const JSON = JSON.stringify (agregado)
    localStorage.setItem("agregado", JSON);

}

apretarBotonA.addEventListener("click", apretaste1) 
/* 

const apretarBotonB = document.querySelector(".carrito2");

const agregarCarrito1 = {
    producto: "Despensero Micro Muro",
    precio: 500   
};

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

apretarBotonB.addEventListener("click", apretaste2) */



const agregado = []


function objetos (nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
}
const objetos1 = new objetos("Despensero Micro Muro", 643);
const objetos2 = new objetos("BAHIUT Muro Vertical", 523);
const objetos3 = new objetos("Hindu Muro", 843);
const objetos4 = new objetos("Rrack Muro Vertical", 203);
const objetos5 = new objetos("Casita Muro", 698);
const objetos6 = new objetos("Hordenador de Tela Muro", 345);


agregado.push(objetos2) 
agregado.push(objetos3) 
agregado.push(objetos4) 
agregado.push(objetos5) 
agregado.push(objetos6)  

const apretarBotonA = document.querySelector(".carrito1");

const apretaste1 = () => {
    agregado.push(objetos1)
    const json = JSON.stringify (agregado)
    localStorage.setItem("agregado", json);
    agregado.forEach(agre =>{
        let contenedorNom = document.createElement("div")
        contenedorNom.innerHTML = agre.nombre
        let contenedorPre = document.createElement("p")
        contenedorPre.innerHTML = agre.precio
        document.querySelector("#agregarCarrito").appendChild(contenedorNom)
        document.querySelector("#agregarCarrito").appendChild(contenedorPre)
    })
}

apretarBotonA.addEventListener("click", apretaste1)
