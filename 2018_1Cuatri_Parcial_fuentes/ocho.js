function mostrar() {
    var numero;
    var letra;
    var respuesta;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var promedioPositivo;
    var contadorPositivos = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var numMaximo;
    var numMinimo;
    var letraMinimo;
    var letraMaximo;
    var flag = 0;
    var flag2 = 0;
    var flag3=0;

    do {

        numero = parseFloat(prompt('Ingrese un número entre -100 y 100 '));

        while (isNaN(numero) || numero < -100 || numero > 100) {

            numero = parseFloat(prompt('Error. Ingrese un número entre -100 y 100 '));

        }

        letra = prompt('ingrese una letra');

        if (numero % 2 == 0) {
            contadorPares++;
        }

        if (numero % 2 != 0) {
            contadorImpares++;
        }

        if (numero == 0) {
            contadorCeros++;
        }
        if (numero > 0 || flag3==0) {

            sumaPositivos = sumaPositivos + numero;
            contadorPositivos++;
            

        }
        if (numero < 0) {

            sumaNegativos = sumaNegativos + numero;
        }
        if (numero < numMinimo || flag == 0) {

            numMinimo = numero;
            letraMinimo = letra;
            flag = 1;

        }
        if (numero > numMaximo || flag2 == 0) {

            numMaximo = numero;
            letraMaximo = letra;
            flag2 = 1

        }





        respuesta = prompt('desea continuar?').toLowerCase();
    } while (respuesta == 's');

    promedioPositivo = sumaPositivos/contadorPositivos;

    if(flag3=0){ promedioPositivo=0}

    document.write("Numeros pares: " + contadorPares + "</br> Numeros Impares : " + contadorImpares + "</br> Cantidad de ceros : " + contadorCeros + "</br> Promedio de positivos ingresados : " + promedioPositivo.toFixed(2) + "</br> Suma negativos : " + sumaNegativos + "</br>   Maximo Ingresado : " + numMaximo + " Letra: " + letraMaximo+ "</br> Minimo ingresado : "+numMinimo+"  Letra : "+letraMinimo);
}
