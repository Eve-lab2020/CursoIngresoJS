/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var suma;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);

    suma=num1+num2;

    alert("El resultado de la suma es : "+suma);
}

function restar()
{
    var num1;
    var num2;
    var resta;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);

    resta=num1-num2;

    alert("El resultado de la resta es : "+resta);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var mult;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);

    mult=num1*num2;

    alert("El resultado de la multiplicación entre "+num1+" y "+num2+" es "+mult)
    
}

function dividir()
{
    var num1;
    var num2;
    var div;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);

    div=num1/num2;

    alert("El resultado de la división es "+div)	
}

