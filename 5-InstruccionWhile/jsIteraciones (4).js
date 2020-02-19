function mostrar() {

  /*var num = parseInt(prompt("ingrese un número entre 0 y 9."));

  while (num > 10 || num < 0 || isNaN(num) ) {


    alert("El nùmero ingresado debe estar dentro del rango del 0 al 09");
    num=prompt("ingrese un número entre 0 y 10.");


  }

    document.getElementById("Numero").value = num*/


}//FIN DE LA FUNCIÓN

var num = parseInt(prompt("ingrese un número entre 0 y 9."));

while (num < 10 || num > 0 ) { //en este no hace falta isNan. o (!(num >=0 && num <=9))


  alert("El nùmero ingresado debe estar dentro del rango del 0 al 09");
  num=prompt("ingrese un número entre 0 y 10.");


}

  document.getElementById("Numero").value = num
