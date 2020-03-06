function mostrar() {

    var letra;
    var numero;
    var respuesta;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivo = 0;
    var contadorPositivo = 0;
    var promedioPos;
    var acumuladorNegativos = 0;
    var maximo;
    var letraMax;
    var minimo;
    var letraMinimo;
    var flag = 0;





    do {

        letra = prompt('Ingrese una letra :');
        while (!((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z'))) {

            letra = prompt('Error. Ingrese una letra :');
        }

        numero = parseFloat(prompt('Ingrese un numero : '));

        while (isNaN(numero) || numero < -100 | numero > 100) {
            numero = parseFloat(prompt('Error. Ingrese un numero : '));
        }



        if (numero % 2 == 0) {
            contadorPares++;

        } else { contadorImpares++ }

        if (numero == 0) {
            contadorCeros++;
        } else if (numero > 0) {
            acumuladorPositivo = acumuladorPositivo + numero;
            contadorPositivo++;
        }else{
            acumuladorNegativos=acumuladorNegativos+numero;
    
        }


        if(numero>maximo||flag==0){
            maximo=numero;
            letraMax=letra;
        }
        if(numero<minimo||flag==0){
            minimo=numero;
            letraMinimo=letra;
            flag=1;
        }




        respuesta = prompt('Desea continuar ?').toLowerCase();

    } while (respuesta == 's');

    if (contadorPositivo != 0) {
        promedioPos = acumuladorPositivo / contadorPositivo
    }

    document.write("La cantidad de números pares : "+contadorPares+"</br> La cantidad de números impares : "+contadorImpares+"</br>La cantidad de ceros : "+contadorCeros+"</br>El promedio de todos los números positivos ingresados : "+promedioPos.toFixed(2)+" </br>Suma Negativos : "+acumuladorNegativos+"</br>Numero Máximo : "+numero+", es letra : "+letraMax+"</br>Numero Minimo : "+minimo+" , es letra : "+letraMinimo);


}
