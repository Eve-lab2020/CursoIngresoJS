function mostrar() {

    var nombre;
    var edad;
    var sexo;
    var nota;
    var respuesta;
    var contadorVaronesAprob = 0;
    var promedioNotasMenores;
    var acumuladorNotasMenores = 0;
    var contadorNotasMenores = 0;
    var promedioNotasAdolescentes;
    var acumuladorNotasAdolescentes = 0;
    var contadorNotasAdolescentes = 0;
    var acumuladorNotasMayores = 0;
    var contadorNotasMayores = 0;
    var promedioNotasMayores;
    var promedioMasculino ;
    var contadorNotasMasculino = 0;
    var acumuladorNotasMasculino = 0;
    var promedioFemenino;
    var acumuladorNotasFemenino = 0;
    var contadorNotasFemenino = 0;


    do {

        nombre = prompt("Ingrese el nombre del estudiante : ");
        edad = parseInt(prompt("Ingrese la edad (7 a 90)"));
        while (isNaN(edad) || edad < 6 || edad > 90) {
            edad = parseInt(prompt("Error . Ingrese la edad (7 a 90)"));
        }
        sexo = prompt("Ingrese el sexo 'f o m ':").toLowerCase();
        while (sexo != 'f' && sexo != 'm') {

            sexo = prompt("Error .Ingrese el sexo 'f o m ':").toLowerCase();
        }
        nota = parseFloat(prompt("Ingrese la Nota (0 a 10) :"));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseFloat(prompt("Error. Ingrese la Nota (0 a 10) :"));
        }

        if (sexo == 'm' && nota > 6) {
            contadorVaronesAprob++;
        }

        if (edad < 18) {
            acumuladorNotasMenores = acumuladorNotasMenores + nota;
            contadorNotasMenores++;

        } else if (edad >= 12 && edad < 17) {
            acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + nota;
            contadorNotasAdolescentes++;
        } else {
            acumuladorNotasMayores = acumuladorNotasMayores + nota;
            contadorNotasMayores++;

        }


        if (sexo == 'f') {
            acumuladorNotasFemenino = acumuladorNotasFemenino + nota;
            contadorNotasFemenino++;
        } else {
            contadorNotasMasculino++;
            acumuladorNotasMasculino = acumuladorNotasMasculino + nota;
        }










        respuesta = ("Desea continuar ? :").toLowerCase();
    } while (respuesta == 's');


    switch (sexo) {
        case 'f':
            if (contadorNotasFemenino != 0) {
                promedioFemenino = acumuladorNotasFemenino / contadorNotasFemenino;
            }
            break;
        case 'm':
            if (contadorNotasMasculino != 0) {
                promedioMasculino = acumuladorNotasMasculino / contadorNotasMasculino;
            }
            break;
    }


    switch (true) {
        case edad < 18:
            if (contadorNotasMenores != 0) {
                promedioNotasMenores = acumuladorNotasMenores / contadorNotasMenores;
            } else { promedioNotasMenores = 0 }
            break;

        case edad > 12:
        case edad < 18:
            if (contadorNotasAdolescentes != 0) {
                promedioNotasAdolescentes = acumuladorNotasAdolescentes / contadorNotasAdolescentes;
            } else { promedioNotasAdolescentes = 0 }
            break;

        case edad > 18:
            if (contadorNotasMayores != 0) {

                promedioNotasMayores = acumuladorNotasMayores / contadorNotasMayores;
            } else { promedioNotasMayores = 0 }
            break;
    }





    alert("varones aprob : " + contadorVaronesAprob + "Pormedio Adolñescentes : " + promedioNotasAdolescentes + "promedio manores :" + promedioNotasMenores + "proimdeio femenino " + promedioFemenino + "promedio masc" + promedioMasculino);

    /* ingreso por document.write:
 a) La cantidad de varones aprobados
 b) El promedio de notas de los menores de edad
 c) El promedio de notas de los adolescentes.
 d) El promedio de notas de los mayores
 f) El promedio de notas por sexo masculino y femenino*/
}
