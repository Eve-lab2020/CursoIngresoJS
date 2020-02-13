function mostrar()
{
//tomo la edad
var mes = document.getElementById('mes').value;

switch(mes){

  case "Enero":
  case "Marzo" :
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
  alert("Sì, tiene 31 dìas");
  break;

  case "Febrero":
  alert("Si, tiene 28 dìas");
  break;

  default:
  alert("Si, tiene 30 dìas");
  break;


}






}//FIN DE LA FUNCIÓN
