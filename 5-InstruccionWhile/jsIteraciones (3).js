function mostrar() {


  var utn = "utn750"
  var clave = prompt("ingrese el número clave.");

  while (clave != utn) { //otra es ponet (!(clave=="utn750"))

    alert("La clave es incorrecta ");
    clave = prompt("ingrese la clave.");


  }

  alert("Acceso concedido");



}//FIN DE LA FUNCIÓN
