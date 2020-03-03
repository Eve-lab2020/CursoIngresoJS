function mostrar() {
    /*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
     el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
   a) El promedio de las notas totales.
   b) La nota más baja y el sexo de esa persona.
   c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


    var nota;
    var sexo;
    var notaMasBaja=0;
    var sexoNotaMasBaja;
    var acumuladorNotas = 0;
    var PromedioNotas;
    var contadorVaronesMas6 = 0;
    var flag = 0;



    for (i = 0; i < 5; i++) {

        nota = parseFloat(prompt("Ingrese la nota (0 al 10)"));

        while (isNaN(nota) || nota < 0 || nota > 10) {

            nota = parseFloat(prompt("Error. Ingrese la nota (0 al 10)"));

        }

        sexo = prompt("Ingrese el sexo 'f o m ' ");

        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error. Ingrese el sexo 'f o m'");

        }

        acumuladorNotas = acumuladorNotas + nota;

        if (nota < notaMasBaja || flag == 0) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
            flag = 1;
        }

        if (nota >= 6 && sexo == 'm') {
            contadorVaronesMas6++;
        }

        



    }



    PromedioNotas = acumuladorNotas / 5;

    alert("Promedio de notas totales : " + PromedioNotas + "\nNota más baja : " + notaMasBaja + ", es de Sexo : " + sexoNotaMasBaja + "\nVarones con nota mayor o igual a 6 : " + contadorVaronesMas6);



}
