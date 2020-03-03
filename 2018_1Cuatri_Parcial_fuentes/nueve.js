function mostrar() {

    var marca;
    var peso;
    var temperaturaAlmacenamiento;
    var temperaturasPares;
    var masPesado;
    var marcaProductoMasPesado;
    var cantidadProductoConservaMenosCeroGrados;
    var sumaPeso = 0;
    var contadorPeso = 0;
    var PromedioPeso;
    var pesoMaximo;
    var marcaPesoMaximo;
    var pesoMinimo;
    var MarcaPesoMinimo;
    var respuesta;
    var flag1 = 0;
    var flag2 = 0;
    var flag2 = 0;


    do {

        marca = prompt('Ingrese la marca :');


        peso = parseFloat(prompt('Ingrese el Peso : '));

        while (isNaN(peso) || peso < 1 || peso > 100) {

            peso = parseFloat(prompt('Error . Ingrese el Peso (0 a 100): '));
        }


        temperaturaAlmacenamiento = parseFloat(prompt('Temperatura de Almacenamiento (-30 a 30 ):'));

        while (isNaN(peso) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30) {

            temperaturaAlmacenamiento = parseFloat(prompt('Error. Ingrese la Temperatura de Almacenamiento :'));
        }



        if (temperaturaAlmacenamiento % 2 == 0) {
            temperaturasPares++;
        }


        if (peso > masPesado || flag1 == 0) {
            masPesado = peso;
            pesoMaximo = peso;
            marcaProductoMasPesado = marca;
            flag1 = 1;

        }

        sumaPeso = sumaPeso + peso;
        contadorPeso++;


        if (peso < pesoMinimo || flag2 == 0) {
            pesoMinimo = peso;
            MarcaPesoMinimo = marca;
            flag2 = 1;

        }



        respuesta = prompt('Desea continuar?');

    } while (respuesta == 's');
}


PromedioPeso = sumaPeso / contadorPeso;

document.write("Cantidad de temperaturas pares : " + temperaturasPares + "</br> Marca Producto más pesado : " + marcaProductoMasPesado + "</br> Cantidad de producto que se conserva a menos 0 grados = 50kg " + "</br> Promedio del Peso de todos los productos : " + PromedioPeso + "</br> Peso máximo : " + pesoMaximo + " Marca : " + marcaProductoMasPesado + "</br> Peso máximo : " + MarcaPesoMinimo + " Marca : " + MarcaPesoMinimo);