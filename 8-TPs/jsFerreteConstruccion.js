/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    var largo;
    var ancho;

    var calculo;
    var calculo2;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);


    while (isNaN(largo) || isNaN(ancho) || largo < 0 || ancho < 0) {

        alert("Los datos ingresados no son válidos.");

        parseFloat(document.getElementById("Largo").value) = largo;
        parseFloat(document.getElementById("Ancho").value) = ancho;
    }

    calculo = largo + ancho * 2;
    calculo2 = (calculo * 3);
    alert("Para alambrar un terreno de esta longitud, cada hilo que se desee colocar debe tener una largo de " + calculo.toFixed(2) + " mts. Por ejemplo para alambrarlo con tres hilos se necesitaría  un total de : " + calculo2.toFixed(2) + " mts.");


}

function Circulo() {

    var radio;
    var calculo;
    var calculo2;

    radio = parseFloat(document.getElementById("Radio").value);

    while (isNaN(radio) || radio < 0) {
        
        alert("Los datos ingresados no son válidos.");

        parseFloat(document.getElementById("Radio").value) = radio;
    }

    calculo = 2 * 3.14 * radio;
    calculo2 = calculo * 3;

    alert("Para alambrar un terreno circular de radio " + radio + ", se necesitarían : " + calculo.toFixed(2) + " mts de alambre. Por ejemplo para alambrarlo con tres hilos se necesita un total de :" + calculo2.toFixed(2) + " mts.");

}

function Materiales() {

    var largo;
    var ancho;

    var calculo;
    var calculo2;
    var calculo3;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    while (isNaN(largo) || isNaN(ancho) || largo < 0 || ancho < 0) {

        alert("Los datos ingresados no son válidos.");

        parseFloat(document.getElementById("Largo").value) = largo;
        parseFloat(document.getElementById("Ancho").value) = ancho;
    }

    calculo = largo * ancho;
    calculo2 = (calculo * 2);
    calculo3 = (calculo * 3);

    alert("Para hacer un contrapiso de " + calculo.toFixed(2) + " mts², se necesitan : " + calculo2.toFixed(2) + " bolsas de Cemento y " + calculo3.toFixed(2) + " bolsas de Cal.");


}//para calcular el total de bolsas tengo que hacer con un numero entero_? o puede ser fraccionario?
//esta bien expresar π solo como 3.14?