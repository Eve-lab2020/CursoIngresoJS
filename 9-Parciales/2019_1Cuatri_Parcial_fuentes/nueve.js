function mostrar() {

    var pais;
    var cantHabitantes;
    var temperatura;
    var respuesta;
    var contadortempPares = 0;
    var menosHabitantes;
    var paisMenosHabitantes;
    var contadorpaisesMas40 = 0;
    var acumuladorHabitantes = 0;
    var contadorHabitantes = 0;
    var promedioHabitantes;
    var flag = 0;
    var tempMinima;
    var paisTempMinima;
    var flagtemMinima = 0;
    var paisMayuscula;
    var cantHabPaisMayuscula;
    var flagPaisMayus = 0;
    do {

        pais = prompt("Ingrese el nombre del país");

        while (!((pais >= 'a' && pais <= 'z') || (pais >= 'A' && pais <= 'Z'))) {

            pais = prompt("Error. Ingrese el nombre del país");
        }

        cantHabitantes = parseInt(prompt('Ingrese la cantidad de habitantes : '));

        while (isNaN(cantHabitantes) || cantHabitantes < 1 || cantHabitantes > 7000) {
            cantHabitantes = parseInt(prompt('Error . Ingrese la cantidad de habitantes : '));
        }

        temperatura = parseInt(prompt('Ingrese la temperatura Minima de este país : '));

        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt('Error .Ingrese la temperatura Minima de este país : '));
        }


        if (temperatura % 2 == 0) {
            contadortempPares++;
        }


        if (cantHabitantes < menosHabitantes || flag == 0) {
            menosHabitantes = cantHabitantes;
            paisMenosHabitantes = pais;
            flag = 1;
        }


        if (temperatura > 40) {
            contadorpaisesMas40++;
        }

        acumuladorHabitantes = acumuladorHabitantes + cantHabitantes;
        contadorHabitantes++;

        if (temperatura < tempMinima || flagtemMinima == 0) {
            tempMinima = temperatura;
            paisTempMinima = pais;
            flagtemMinima = 1;
        }

        if ((pais >= 'A' && pais <= 'Z') && (cantHabitantes > cantHabPaisMayuscula || flagPaisMayus == 0)) {
            cantHabPaisMayuscula = cantHabitantes;
            paisMayuscula = pais;
            flagPaisMayus = 1;
        }







        respuesta = prompt("Desea continuar ?").toLowerCase();
    } while (respuesta == 's');

  
        promedioHabitantes = acumuladorHabitantes / contadorHabitantes;
    

    document.write("Cantidad de temperaturas pares : " + contadortempPares + "</br>El nombre del pais con menos habitantes es : " + paisMenosHabitantes + " , tiene : " + menosHabitantes + " habitantes " + "</br>la cantidad de paises que superan los 40 grados : " + contadorpaisesMas40 + "</br>Pormedio de habitantes :" + promedioHabitantes.toFixed(2) + "</br>Temperatura minima es : " + tempMinima + " , la registró : " + paisTempMinima + "</br>Pais ingresado en letra mayuscula con mayor cantidad de habitantes " + paisMayuscula + ", tiene :" + cantHabPaisMayuscula + " habitantes.");


    /*Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
    la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de temperaturas pares.
    b) El nombre del pais con menos habitantes
    c) la cantidad de paises que superan los 40 grados.
    d) el promedio de habitantes entre los paises ingresados
    f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/

}
