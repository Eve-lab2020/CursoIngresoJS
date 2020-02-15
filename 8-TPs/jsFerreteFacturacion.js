/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);

    var suma;

    while (isNaN(precio1) || isNaN(precio2) || isNaN(precio3) || precio1 < 0 || precio2 < 0 || precio3 < 0) {

        alert("Los datos ingresados no son válidos. Por favor revise que los precios ingresados esten expresados en valores numéricos e intentelo nuevamente.");

        parseFloat(document.getElementById("PrecioUno").value) = precio1;
        parseFloat(document.getElementById("PrecioDos").value) = precio2;
        parseFloat(document.getElementById("PrecioTres").value) = precio3;

    }

    suma = precio1 + precio2 + precio3;

    alert(" El total de los productos sin IVA es : $" + suma.toFixed(2));


}
function Promedio() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);

    var promedio;

    while (isNaN(precio1) || isNaN(precio2) || isNaN(precio3) || precio1 < 0 || precio2 < 0 || precio3 < 0) {

        alert("Los datos ingresados no son válidos. Por favor revise que los precios ingresados estén expresados en valores numéricos e intentelo nuevamente.");

        parseFloat(document.getElementById("PrecioUno").value) = precio1;
        parseFloat(document.getElementById("PrecioDos").value) = precio2;
        parseFloat(document.getElementById("PrecioTres").value) = precio3;

    }

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio de los precios ingresados es : $" + promedio.toFixed(2));
}
function PrecioFinal() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);

    var calculo;
    var iva;

    while (isNaN(precio1) || isNaN(precio2) || isNaN(precio3) || precio1 < 0 || precio2 < 0 || precio3 < 0) {

        alert("Los datos ingresados no son válidos. Por favor revise que los precios ingresados estén expresados en valores numéricos e intentelo nuevamente.");

        parseFloat(document.getElementById("PrecioUno").value) = precio1;
        parseFloat(document.getElementById("PrecioDos").value) = precio2;
        parseFloat(document.getElementById("PrecioTres").value) = precio3;

    }

    calculo = ((precio1 + precio2 + precio3) * 21) / 100;
    var iva = (precio1 + precio2 + precio3) + calculo;

    alert("El precio final más IVA es : $" + iva.toFixed(2));
}