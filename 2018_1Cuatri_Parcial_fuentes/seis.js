function mostrar() {
    var hora;
    hora = parseInt(prompt("Ingrese una hora"));

    switch (hora) {

        case hora:

            if (hora > 5 && hora < 12) {
                alert("Es de mañana");

            }
            else if (hora > 11 && hora < 20) {
                alert("Es de tarde");

            }

            else if ((hora <= 5 && hora > -1) || (hora > 19 && hora < 25)) {
                alert("Es de noche");

            } else {
                alert("Error, ingrese una hora valida");
            }

            break;
    }
}
