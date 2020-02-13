function mostrar() {


  var mes;

  mes = document.getElementById("mes").value;

  switch (mes) {
    case "Enero":
      alert("Que comiences bien el año!!!");

      break;

    case "Marzo":

      alert("A clases!!!");
      break;

    case "Julio":

      alert("Se vienen las vacaciones");

      break;

    case "Diciembre":

      alert("Felicies fiestas!!!");
      break;

    default:
      alert("A este mes no lo tuve en cuenta");
      break;

  }

}//FIN DE LA FUNCIÓN
