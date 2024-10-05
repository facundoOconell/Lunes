/* let nombreProducto = "Manzanas";
let precioUnitario = 100;

alert("El precio de las manzanas es de $" + precioUnitario);

let cantidadDeseada = prompt("¿Cuantas " + nombreProducto + " desea comprar?");

let costoFinal = precioUnitario * cantidadDeseada;

if (cantidadDeseada >= 5) {
    let descuento = costoFinal * 0.10; 
    costoFinal = costoFinal - descuento; 
}

alert("El valor a abonar es de: $" + costoFinal);*/

function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    console.log("Total gastado: $" + totalGastado);
}


sumarProductos(30, 2);  
