function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m" ){

  sexo=prompt("Por favor ingrese el caràcter -f(minuscula)- para Femenino o -m(minuscula)- para Masculino");

}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
