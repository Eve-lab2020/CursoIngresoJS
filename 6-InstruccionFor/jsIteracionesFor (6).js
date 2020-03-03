function mostrar() {

    var num;
    var i;
    var contador = 0;

    num = parseInt(prompt("ingrese un número"));

    for (i = 1; i < num; i++) {

        if (i % 2 == 0) {
            
            document.write("Pares : " + i + "</br>");
            contador++;
        }
    }
    document.write(" cantidad de numeros pares :" + contador);

}//FIN DE LA FUNCIÓN