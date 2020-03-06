function mostrar() {
    /*var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorPares = 0;
    var marcaPesada;
    var maximoPeso;
    var flag = 0;
    var contadorCongelados = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var pesoMax;
    var pesoMin;

    do {
        // pido los datos
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }

        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalido. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > maximoPeso) && temperatura > 0) {
            maximoPeso = peso;
            marcaPesada = marca;

            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }


        if (contador == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (contador == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');


    promedioPeso = acumuladorPeso / contador;






    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    if (flag == 0) {
        document.write("b) La marca del producto más pesado no congelado: No se ingresaron productos no congelados</br>");

    }
    else {

        document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + " Peso: " + maximoPeso + "</br>");
    }
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("e) Maximo: " + pesoMax + "</br>");
    document.write("e) Minimo: " + pesoMin + "</br>");*/



    /* Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
     la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
     a) La cantidad de temperaturas pares.
     b) La marca del producto más pesado
     c) La cantidad de productos que se conservan a menos de 0 grados.
     d) El promedio del peso de todos los productos.
     f) El peso máximo y el mínimo.*/


    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contadorTempPares = 0;
    var masPesado;
    var marcaMasPesado;
    var flag = 0;
    var contadorProductosbajoCero = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contadorPesoTodos = 0;
    var pesoMaximo;
    var pesoMinimo;
    var flagMaxMin = 0;
    var pesadoNoCongelado;
    var MarcaPesadoNoCongelado;
    var flagPNC=0;


    do {
        marca = prompt("Ingrese la Marca :");
        while (!((marca >= 'a' && marca <= 'z') || (marca >= 'A' && marca <= 'Z'))) {
            marca = prompt("Error. Ingrese la Marca :");
        }

        peso = parseFloat(prompt("Ingrese el Peso : "));

        while (isNaN(peso) || peso > 100 || peso < 1) {
            peso = parseFloat(prompt("Error. Ingrese el Peso : "));
        }

        temperatura = parseFloat(prompt("Ingrese la Temperatura: "));

        while (isNaN(temperatura) || temperatura > 30 || temperatura < -30) {
            temperatura = parseFloat(prompt("Error. Ingrese el Peso : "));
        }




        if (temperatura % 2 == 0) {
            contadorTempPares++;
        }

        if (peso > masPesado || flag == 0) {
            masPesado = peso;
            marcaMasPesado = marca;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorProductosbajoCero++

        }

        if (peso > pesoMaximo || flagMaxMin == 0) {
            pesoMaximo = peso;
        }


        if (peso > pesoMinimo || flagMaxMin == 0) {
            pesoMinimo = peso;
            flagMaxMin = 1;
        }

        if((peso>pesadoNoCongelado||flag ==0)&&temperatura>0){
            pesadoNoCongelado=peso;
            MarcaPesadoNoCongelado=marca;
            flagPNC=1;
        }



        contadorPesoTodos++;
        acumuladorPeso = acumuladorPeso + peso;







        respuesta = prompt("Desea continuar?").toLowerCase();
    } while (respuesta == 's');

    promedioPeso = acumuladorPeso / contadorPesoTodos;

    document.write("Cantidad de temperaturas pares."+contadorTempPares);
    document.write("</br>marca del producto más pesado : "+marcaMasPesado);
    document.write("</br>cantidad de productos que se conservan a menos de 0 grados." +contadorProductosbajoCero);
    document.write("</br>El promedio del peso de todos los productos. :"+promedioPeso.toFixed(2));
    document.write("</br>Peso máximo :"+pesoMaximo);
    document.write("</br>Peso Minimo : "+pesoMinimo);
    if(flagPNC==0){
        document.write("</br> Más pesado que no necesita ser congelado : no se ingresaron no congelados");
    }else{
    document.write("</br> Más pesado que no necesita ser congelado : "+MarcaPesadoNoCongelado);}


}