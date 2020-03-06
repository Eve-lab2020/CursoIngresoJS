function mostrar() {
    
        /*var nota;
        var sexo;
        var notaMenor;
        var sexoMenor;
        var contadorVaronesMas6 = 0;
        var acumuladorNotas = 0;
        var promedio;
        var flag = 0;
    
        for (var i = 0; i < 5; i++) {
    
            nota = parseInt(prompt("Ingrese nota (0-10): "));
            while (nota < 0 || nota > 10 || isNaN(nota)) {
                nota = parseInt(prompt("Nota invalida. Ingrese nota (0-10): "));
            }
            // acá valido la nota
    
            sexo = prompt("Ingrese sexo (f-m): ");
            while (sexo != 'f' && sexo != 'm') {
                sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
            }
            // acá valido el sexo
    
            acumuladorNotas = acumuladorNotas + nota;
    
            if (nota < notaMenor || flag == 0) {
                notaMenor = nota;
                sexoMenor = sexo;
                flag = 1;
            }
    
            if (sexo == 'm' && nota >= 6) {
                contadorVaronesMas6++;
            }
    
        }
    
        promedio = acumuladorNotas / 5;
    
        alert("Promedio Notas: " + promedio + "\nNota Baja: " + notaMenor + "\nSexo nota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6);*/
    
        var nota;
        var sexo;
        var promedio;
        var contadorNotas=0;
        var notaBaja;
        var sexoBaja;
        var VaronesNota6=0;
        var flag=0;

    

        for(i=0;i<5;i++){

            nota=parseFloat(prompt("Ingrese la nota (0 a 10)"));

            while(isNaN(nota)|| nota<0||nota>10){

            nota=parseFloat(prompt("Error. Ingrese la nota (0 a 10)"));

            }

            sexo=prompt("Indique el sexo 'f o m'");

            while(sexo!= 'f'&& sexo !='m'){
                sexo=prompt("Error.Indique el sexo 'f o m'");
            }


            contadorNotas=contadorNotas+nota;


            

        

            if(nota<notaBaja|| flag==0){

                notaBaja=nota;
                sexoBaja=sexo;
                flag=1;
            }

            if(nota>=6 && sexo=='f'){
                VaronesNota6++;
            }
            
        }

        promedioNotas=contadorNotas/5;

        alert("Pormedio de las notas totales : "+promedioNotas+"\nNota más baja :"+notaBaja+" , sexo : "+sexoBaja+"\nVarones con nota 6 o más : "+VaronesNota6);




























        
    
    }
     


