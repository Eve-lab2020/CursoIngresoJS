function mostrar() {

	var numero;
	var contador = 0;
	var positivo = 0;
	var negativo =-1;

	var respuesta = 's';

	do {
		numero=parseInt(prompt("Los numeros positivos que ingrese se sumarán y lo negativos se multiplicaran "));

		if (numero >= 0) {
			
			positivo = positivo + numero;
			contador++;
			respuesta = prompt("Desea continuar?");

		} else {

			negativo = negativo * numero;
			contador++;
			respuesta = prompt("Desea continuar?");

		}


	} while (respuesta == "s");


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN