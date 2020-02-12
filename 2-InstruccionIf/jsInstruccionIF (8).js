function mostrar() {
  //tomo la edad

  var edad;
  var estado;

  edad=parseInt(document.getElementById("edad").value);
  estado=document.getElementById("estadoCivil").value;

  if(edad>17 && estado=="Soltero"){alert ("Es soltero y no es menor.");}


  /*var edad;
  var estado;

  edad = parseInt(document.getElementById("edad").value);
  estado = document.getElementById("estadoCivil").value;

  if (edad > 17 && (estado == "Divorciado" || estado == "Casado" || estado == "Soltero")) { alert("Su estado Civil es " + estado + " y es mayor de edad. ") }
  else { alert("Es menor de edad") }*/



}//FIN DE LA FUNCIÓN
