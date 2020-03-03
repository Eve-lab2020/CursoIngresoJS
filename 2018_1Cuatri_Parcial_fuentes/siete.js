function mostrar() {

    var nota;
    var sexo;
    var flag = 0;
    var acumNotas = 0;
    var promedioNota;
    var notamasBaja = 0;
    var sexoNotamasBaja;

    var contadorVarones = 0;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Por favor ingrese la nota  (de 0 a 10) : "));


        while (nota < 0 || nota > 10 || isNaN(nota)) {

            nota = parseInt(prompt("Error. Por favor ingrese la nota  (de 0 a 10) : "));

        }


        sexo = prompt("Por favor Ingrese el Sexo ('f' o 'm')").toLowerCase();

        while (sexo != "m" && sexo != "f") {

            sexo = prompt("Error . Por favor Ingrese el Sexo ('f' o 'm')").toLowerCase();
        }


        acumNotas = acumNotas + nota;


        if (nota < notamasBaja || flag == 0) {

            notamasBaja = nota;
            sexoNotamasBaja = sexo;
            flag = 1;
        }

        if (sexo == 'm' && nota >= 6) {

            contadorVarones++;

        }



    }

    promedioNota = acumNotas / 5;

    alert(" Promedio de las notas : " + promedioNota + "\nNota menor : " + notamasBaja + "  es de sexo : " + sexoNotamasBaja + "\n Catidad de varones con nota mayor a 6 : " + contadorVarones);
}



