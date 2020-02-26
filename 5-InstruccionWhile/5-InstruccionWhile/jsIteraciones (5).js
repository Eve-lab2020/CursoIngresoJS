function mostrar() {

  var sexo = prompt("Por favor ingrese el caràcter -F- para Femenino o -M- para Masculino");

  while (sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M") {

    sexo = prompt("Lo ingresado no es válido. Por favor ingrese el caràcter -F- para Femenino o -M- para Masculino");

  }


  document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN
//como hago que en el id además de f o m diga "Sexo Masculino" o "Sexo femenino"
