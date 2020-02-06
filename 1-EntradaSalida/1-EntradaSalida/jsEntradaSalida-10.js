/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

    var importe;
    var result;

    importe = parseFloat(document.getElementById("importe").value);
    result =  importe - (importe * 25) / 100 ;

    document.getElementById("resultado").value = result.toFixed(2);


}
