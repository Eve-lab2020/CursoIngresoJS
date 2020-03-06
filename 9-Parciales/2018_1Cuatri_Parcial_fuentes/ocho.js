function mostrar() {
    /* var letra;
     var numero;
     var seguir;
     var contadorPares = 0;
     var contadorImpares = 0;
     var contadorCeros = 0;
     var contadorPos = 0;
     var acumuladorPos = 0;
    
     var acumuladorNeg = 0;
     var maximo;
     var minimo;
     var letraMax;
     var letraMin;
     var flag = 0;
     var minimoMinus;
     var letraMinMinus;
     var flagMinus = 0;
     var promedioPos = 0;
 
     do {
         // pido los datos
         letra = prompt("Ingrese una letra: ");
         while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
             letra = prompt("Eso no es una letra. Ingrese una letra: ");
         }
 
         numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
         while (numero < -100 || numero > 100 || isNaN(numero)) {
             numero = parseInt(prompt("Dato invalido. Ingrese un numero (-100 y 100): "));
         }
         // ------------- paridad ---------------
 
         if (numero % 2 == 0) {
             // pares
             contadorPares++;
         }
         else {
             // impares
             contadorImpares++;
         }
 
         // --------------- signo ---------------
 
         if (numero == 0) {
             // ceros
             contadorCeros++;
         }
         else if (numero > 0) {
             // positivos
             acumuladorPos = acumuladorPos + numero;
             contadorPos++;
         }
         else {
             // negativo
             acumuladorNeg = acumuladorNeg + numero;
         }
 
         // ------------- maximos y minimos -------------
 
         if (flag == 0 || numero < minimo) {
             minimo = numero;
             letraMin = letra;
         }
         if (flag == 0 || numero > maximo) {
             maximo = numero;
             letraMax = letra;
             flag = 1;
         }
 
         // --------------- g --------------
 
         if ((letra >= 'a' && letra <= 'z') && (flagMinus == 0 || numero < minimoMinus)) {
             minimoMinus = numero;
             letraMinMinus = letra;
             flagMinus = 1;
         }
 
         seguir = prompt("Quiere continuar?: ");
     } while (seguir == 's');
 
     if (contadorPos != 0) {
         promedioPos = acumuladorPos / contadorPos;
     }
 
     document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
     document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
     document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
     document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
     document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
     document.write("f) Maximo: " + maximo + " Letra: " + letraMax + "</br>");
     document.write("f) Minimo: " + minimo + " Letra: " + letraMin + "</br>");
     document.write("g) El menor numero de las letras minusculas: " + minimoMinus + " Letra: " + letraMinMinus + "</br>");*/



    /*var letra;
    var numero;
    var respuesta;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var acumuladorPositivo = 0;
    var promedioPositivos;
    var acumuladorNegativos = 0;
    var numeroMaximo;
    var letraMaximo;
    var numeroMinimo;
    var letraMinimo;
    var minimoMinuscula;
    var letraMinimoMinuscula;
    var flag = 0;
    var flagminuscula = 0;



    do {

        letra = prompt("Ingrese una letra");

        while (!((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z'))) {
            letra = prompt("Error.Ingrese una letra");
        }

        numero = parseFloat(prompt("Ingrese un numero"));
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseFloat(prompt("Error. Ingrese un numero"));
        }

        if (numero % 2 == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }

        if (numero == 0) {
            contadorCeros++;
        } else if (numero > 0) {
            contadorPositivos++;
            acumuladorPositivo = acumuladorPositivo + numero;
        } else {
            acumuladorNegativos = acumuladorNegativos + numero;
        }


        if (numero > numeroMaximo || flag == 0) {
            numeroMaximo = numero;
            letraMaximo = letra;

        }

        if (numero < numeroMinimo || flag == 0) {

            numeroMinimo = numero;
            letraMinimo = letra;
            flag = 1;
        }

        if ((letra >= 'a' && letra <= 'z') && (flag == 0 || numero < minimoMinuscula)) {
            minimoMinuscula = numero;
            letraMinimoMinuscula = letra;
            flagminuscula = 1;
        }



        respuesta = prompt("Desea continuar?").toLocaleLowerCase();

    } while (respuesta == 's');


    if (acumuladorPositivo != 0) {
        promedioPositivos = acumuladorPositivo / contadorPositivos;
    }

    document.write("Cantidad de numeros pares :" + contadorPares);
    document.write("</br>Cantidad de numeros Impares : " + contadorImpares);
    document.write("</br>Cantidad de Ceros : " + contadorCeros);
    document.write("</br>Promedio Positivos : " +promedioPositivos);
    document.write("</br> Suma de negativos"+acumuladorNegativos);
    document.write("</br>Numero máximo : "+numeroMaximo+" es letra : "+letraMaximo);
    document.write("</br>Numero mínimo : "+numeroMinimo+" es letra : "+letraMinimo);*/



    var letra;
    var numero;
    var respuesta;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var PromedioPos;
    var acumuladorNegativos=0;
    var Maximo;
    var letraMaximo;
    var minimo;
    var letraMinimo;
    var flag=0;
    var menorMinuscula;
    var letraMenorMinuscula;
    var flagMinus=0;



    do {

        letra = prompt("Ingrese una letra");

        while (!((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z'))){
            letra = prompt("Error .Ingrese una letra");
        }

        numero = parseInt(prompt('Ingrese un numero'));

        while(isNaN(numero) || numero < -100 || numero > 100){
            numero = parseInt(prompt('Error. Ingrese un numero'));
        }

        if(numero%2==0){
            contadorPares++;
        
        }else{contadorImpares++;}

        if(numero>0){
            contadorPositivos++;
            acumuladorPositivos=acumuladorPositivos+numero;
        }else if(numero==0){
            contadorCeros
        }else{
            acumuladorNegativos=acumuladorNegativos+numero;
        }

        if(flag==0|| numero>Maximo){
            Maximo=numero;
            letraMaximo=letra;
        }

        if(flag=0||numero<minimo){
            minimo=numero;
            letraMinimo=letra;
            flag=1;
        }

        if((letra>='a'&&letra<='z')&&(flag==0||numero<menorMinuscula)){
            menorMinuscula=numero;
            letraMenorMinuscula=letra;
            flagMinus=1;
        }




            respuesta = prompt("Desea continuar?").toLowerCase();
    }while (respuesta == 's');


    if(contadorPositivos!=0){
        PromedioPos=acumuladorPositivos/contadorPositivos;
    }

    document.write("Cantidad Pares : "+contadorPares);
    document.write("</br>Cantidad Impares : "+contadorImpares);
    document.write("</br>Cantidad de CEros : "+contadorCeros);
    document.write("</br>Promedio Positivos : "+PromedioPos);
    document.write("</br>Suma Negativos : "+acumuladorNegativos);
    document.write("</br>Numero máximo : "+Maximo+", es letra : "+letraMaximo);
    document.write("</br>Numero minimo : "+minimo+", es letra : "+letraMinimo);
    document.write("</br>Menor numero de minúscula : "+menorMinuscula + ", es letra :"+letraMenorMinuscula);


    /*a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/


















































}

