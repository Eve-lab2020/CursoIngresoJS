function mostrar() {

	var numero;
	var flag = 0;
	var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = 's';

	do {

		numero = parseInt(prompt("Los numeros positivos que ingrese se sumarán y lo negativos se multiplicaran "));

		while (isNaN(numero)) {

			numero = parseInt(prompt("Error Ingrese un número"));

		}

		if (numero < 0) {

			negativo = negativo * numero;
			
			flag=1;


		} else {

			positivo = positivo + numero;
			
			

		}

		respuesta = prompt("Desea continuar?");


	} while (respuesta == "s");

	if (flag == 0) { negativo = 0; }


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN