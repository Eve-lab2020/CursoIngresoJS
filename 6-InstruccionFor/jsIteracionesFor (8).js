function mostrar() {

    var num;

    num = parseInt(prompt("Ingrese un número"));


    while (isNaN(num) || num <= 0) {

        num = parseInt(prompt("Error. Ingrese un número"));
    }

    for (var i = 2; i < num; i++) {

        if (num % i == 0) {

            document.write(num + " No es un número primo");
            break;
        }


        if (num % i != 0) {

            document.write(num + " Es un número primo ");
            break;
        }
    }



}//FIN DE LA FUNCIÓN