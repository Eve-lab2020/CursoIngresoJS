function mostrar() {

    var letra;
    var numero;
    var respuesta;

    var contadorPares = 0;
    var contadorImpares = 0;

    var contadorCeros = 0;
    var contadorPositivos = 0;
    var acumuladorPositivos = 0;
    var promedioPositivos;
    var sumaNegativos = 0;


    var numeroMinimo;
    var letraMinimo;
    var numeroMaximo;
    var letraMaximo;

    var flag=0;
    var flag1 = 0;
    var flag2 = 0;


    do {

        letra = prompt("Ingrese una letra : ");
        numero = parseInt(prompt("Ingrese un número : "));

        while (isNaN(numero) || numero < -100 || numero > 100) {

            numero = parseInt(prompt("Error. Ingrese un número : "));
        }


        if (numero % 2 == 0) {
            contadorPares++;

        } else {
            contadorImpares++;  
        }



        if (numero == 0) {
            contadorCeros++;

        }
        else if (numero > 0|| flag==0) {
            contadorPositivos++;
            acumuladorPositivos = acumuladorPositivos + numero;
            flag=1;

        } else {
         
            sumaNegativos = sumaNegativos + numero;
        }



        if (numero > numeroMaximo || flag1 == 0) {
            numeroMaximo = numero;
            letraMaximo = letra;
            flag1 = 1;
        }
        
        if(numero<numeroMinimo||flag2==0){
            numeroMinimo=numero;
            letraMinimo=letra;
            flag2=1;
        }


        respuesta=prompt('Desea continuar?').toLowerCase();
    } while (respuesta == "s");


    promedioPositivos = acumuladorPositivos / contadorPositivos;
    if(flag==0){promedioPositivos=0}

    document.write("Cantidad de números pares : "+contadorPares+"</br>Cantidad de números impares : "+contadorImpares+"</br>Cantidad de ceros : "+contadorCeros+"</br>Promedio de todos los números positivos ingresados : "+promedioPositivos+"</br>Suma de todos los números negativos : "+sumaNegativos+"</br> Numero Máximo : "+numeroMaximo+" , letra : "+letraMaximo+"</br>Numero Mínimo : "+numeroMinimo+" , letra : "+letraMinimo);
}


/*  Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/