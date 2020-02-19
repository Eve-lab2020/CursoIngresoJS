function mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;
	var seguir;

do{

	numero=parseInt(prompt("Ibgrese un numero"));
	acumulador=acumulador + numero;
	contador ++;
	seguir=prompt("quiere continuar?")

}while(seguir == "s");



	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN