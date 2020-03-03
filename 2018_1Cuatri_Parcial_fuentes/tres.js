function mostrar() {

    var precio;
    var porcentajeDescuento;
    var calculo;
    var precioFinal;

    precio = parseFloat(prompt("Ingrese el precio :"));

    while (isNaN(precio) || precio < 0) {
        precio = parseFloat(prompt("Error. Ingrese el precio :"));
    }

    porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de Descuento :"));

    while (isNaN(porcentajeDescuento) || precio < 0) {

        porcentajeDescuento = parseInt(prompt("Error . Ingrese el porcentaje de Descuento :"));
    }

    calculo = (precio * porcentajeDescuento) / 100;
    precioFinal = precio - calculo;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
