function mostrar() {

	var num;
	var respuesta;
	var acumulador_positivo = 0;
	var acumulador_negativo = 0;
	var contador_positivo = 0;
	var contador_negativo = 0;
	var contador_ceros = 0;
	var contador_pares = 0;
	var contador_impares = 0;
	var promedio_positivos;
	var promedio_negativos;
	var diferencia_pn;

	do {

	

		num = parseFloat(prompt("Ingrese un número"));

		if (num > 0) {

			acumulador_positivo = acumulador_positivo + num;
			contador_positivo++;

			if (num % 2 == 0) {

				contador_pares++;
	
			} 

			if (num % 3 == 0) {

				contador_impares++;
	
			}

		} else if (num < 0) {

			acumulador_negativo = acumulador_negativo + num;
			contador_negativo++;

			if (num % 3 == 0) {

				contador_impares++;
	
			}

			if (num % 2 == 0) {

				contador_pares++;
	
			} 

		} else if (num == 0) {

			contador_ceros++;

		}else{}

		
		
		while (isNaN(num)) {

			alert("Error. Ingrese un número. ");
			num = parseFloat(prompt("Ingrese un número"));
		} 


	respuesta = prompt("Desea continuar?")

	} while (respuesta == "s");


	promedio_positivos = acumulador_positivo / contador_positivo;
	promedio_negativos = acumulador_negativo / contador_negativo;
	diferencia_pn = acumulador_positivo - acumulador_negativo;

	document.write("Cantidad de numeros positivos         ---->  " + contador_positivo + "</br>");
	document.write("Suma de los positivos                 ---->  " + acumulador_positivo + "</br>");
	document.write("Cantidad de numeros negativos         ---->  " + contador_negativo + "</br>");
	document.write("Suma de los negativos                 ---->  " + acumulador_negativo + "</br>");
	document.write("Cantidad de ceros ingresados          ---->  " + contador_ceros + "</br>");
	document.write("Cantidad de números pares             ---->  " + contador_pares + "</br>");
	document.write("Cantidad de números impares           ---->  " + contador_impares + "</br>");
	document.write("Promedio de los números positivos     ---->  " + promedio_positivos.toFixed(2) + "</br>");
	document.write("Promedio de los números negativos     ---->  " + promedio_negativos.toFixed(2) + "</br>");
	document.write("Diferencia entre números Positivos y Negativos ---->" + diferencia_pn);


/*
	var num;
	var respuesta;
	var acumulador_positivo = 0;
	var acumulador_negativo = 0;
	var contador_positivo = 0;
	var contador_negativo = 0;
	var contador_ceros = 0;
	var contador_pares = 0;
	var contador_impares = 0;
	var promedio_positivos;
	var promedio_negativos;
	var diferencia_pn;

	do {


		num = parseFloat(prompt("Ingrese un número"));

		while (isNaN(num)) {

			alert("Error. Ingrese un número. ");
			num = parseFloat(prompt("Ingrese un número"));
		} 

		switch (num) {

			case (num > 0):

				acumulador_positivo = acumulador_positivo + num;
				contador_positivo++;

				if (num % 2 == 0) {

					contador_pares++;
				}

				if (num % 3 == 0) {

					contador_impares++;

				}

				

			case (num < 0):

				acumulador_negativo = acumulador_negativo + num;
				contador_negativo++;

				if (num % 3 == 0) {

					contador_impares++;

				}

				if (num % 2 == 0) {

					contador_pares++;

				}

				

			case (num == 0):

				contador_ceros++;

				break;

		
		}

		respuesta = prompt("Desea continuar?")

	} while (respuesta == "s");


	promedio_positivos = acumulador_positivo / contador_positivo;
	promedio_negativos = acumulador_negativo / contador_negativo;
	diferencia_pn = acumulador_positivo - acumulador_negativo;

	document.write("Cantidad de numeros positivos         ---->  " + contador_positivo + "</br>");
	document.write("Suma de los positivos                 ---->  " + acumulador_positivo + "</br>");
	document.write("Cantidad de numeros negativos         ---->  " + contador_negativo + "</br>");
	document.write("Suma de los negativos                 ---->  " + acumulador_negativo + "</br>");
	document.write("Cantidad de ceros ingresados          ---->  " + contador_ceros + "</br>");
	document.write("Cantidad de números pares             ---->  " + contador_pares + "</br>");
	document.write("Cantidad de números impares           ---->  " + contador_impares + "</br>");
	document.write("Promedio de los números positivos     ---->  " + promedio_positivos.toFixed(2) + "</br>");
	document.write("Promedio de los números negativos     ---->  " + promedio_negativos.toFixed(2) + "</br>");
	document.write("Diferencia entre números Positivos y Negativos ---->" + diferencia_pn);*/






}//FIN DE LA FUNCIÓN
