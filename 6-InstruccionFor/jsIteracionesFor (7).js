function mostrar() {

    var num;
    var i;
    var contador=0;


    num = parseInt(prompt("Ingrese un número : "));

    for (i = 1; i < num; i++) {

        if (num % i == 0) {
            document.write("Divisor" + i + "</br>");
            contador++;
        }
    }

    document.write("Cantidad de divisores encontrados " + contador);

}//FIN DE LA FUNCIÓN