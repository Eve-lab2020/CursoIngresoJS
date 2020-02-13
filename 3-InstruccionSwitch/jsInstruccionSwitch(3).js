function mostrar()
{

var mes = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mes){

  case "Febrero":
  alert ("Este mes no tiene màs de 29 dìas");
  break;

  default :
  alert("Este mes tiene 30 o más días");
  break;
}



}//FIN DE LA FUNCIÓN
