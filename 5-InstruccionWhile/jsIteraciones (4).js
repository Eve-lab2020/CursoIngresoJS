function mostrar() {

  var num = parseInt(prompt("ingrese un número entre 0 y 10."));

  while (num > 10 || num < 0 || isNaN(num) ) {


    alert("El nùmero ingresado debe estar dentro del rango del 1 al 10");
    num=prompt("ingrese un número entre 0 y 10.");


  }

    document.getElementById("Numero").value = num


}//FIN DE LA FUNCIÓN
