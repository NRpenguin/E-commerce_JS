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