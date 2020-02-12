function mostrar() {
  //tomo la edad

  /*var edad;
  var estado;

  edad=parseInt(document.getElementById("edad").value);
  estado=document.getElementById("estadoCivil").value;

  if(edad>17 && estado=="Soltero"){alert ("Es soltero y no es menor.");}*/


  var edad;
  var estado;

  edad = parseInt(document.getElementById("edad").value);
  estado = document.getElementById("estadoCivil").value;

  if (edad > 17 && estado == "Soltero") { alert("Es soltero y no es menor."); }
  else if (edad > 17 && (estado == "Divorciado" ||  estado == "Casado")) { alert("Usted está " + estado + " y no es menor. ") }
  else { alert("Es menor de edad") }



}//FIN DE LA FUNCIÓN
