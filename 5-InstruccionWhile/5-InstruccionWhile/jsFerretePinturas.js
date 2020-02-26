/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {

    var temp;
    var calculo_FaC;

    temp = parseFloat(document.getElementById("Temperatura").value);

    while (isNaN(temp)) {

        alert("Los datos ingresados no son válidos, por favor, introduzca la temperatura que desee convertir");
        parseFloat(document.getElementById("Temperatura").value) = temp;

    }

    calculo_FaC = (temp -32)*5/9;

    alert(temp + "° Fahrenheit., equivale a " + calculo_FaC.toFixed(2) + "° Centígrados. ");

}

function CentigradosFahrenheit() {
    
    var temp;
    var calculo_CaF;

    temp = parseFloat(document.getElementById("Temperatura").value);

    while (isNaN(temp)) {

        alert("Los datos ingresados no son válidos, por favor, introduzca la temperatura que desee convertir");
        parseFloat(document.getElementById("Temperatura").value) = temp;

    }

    calculo_CaF = (temp *9/5)+32;

    alert(temp + "° Centígrados, equivale a " + calculo_CaF.toFixed(2) + "° Fahrenheit. ");
}
