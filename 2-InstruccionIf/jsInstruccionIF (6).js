function mostrar() {
  //tomo la edad
  var edad;

  edad = parseInt(document.getElementById("edad").value);

  if (edad < 13) { alert("Niño"); }

  else if (edad < 17) { alert("Adolescente") }

  else { alert("Adulto"); }

  /*

  var edad;

  edad = parseInt(document.getElementById("edad").value);

  if (edad < 13) { alert("Niño"); }
  else if (edad < 17) { alert("Adolescente") }
  else if (edad < 18) { alert("adulto") }
  else { alert("Anciano"); }*/


}//FIN DE LA FUNCIÓN
