function mostrar() {

   

    var altura;
    var sexo;
    var promedio;
    var acumuladorAltura=0;
    var contadorAltura=0;
    var masBaja;
    var sexoAlturaBaja;
    var contadormujeresMas190=0;
    var flag=0;



    for (var i = 0; i < 5; i++) {

        altura = parseFloat(prompt("Ingrese Altura : "));

        while (isNaN(altura) || altura < 0 || altura > 250) {
            altura = parseFloat(prompt("Error. Ingrese Altura : "));
        }

        sexo = prompt("Ingrese sexo : ").toLowerCase();

        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Error. Ingrese sexo : ").toLowerCase();
        }


        if(altura<masBaja||flag==0){
            masBaja=altura;
            sexoAlturaBaja=sexo;
            flag=1;

        }

        if(( sexo=='f'&& altura>=190 ) ){
            contadormujeresMas190++;

        }


        acumuladorAltura=acumuladorAltura+altura;
        contadorAltura++;




    }

    promedio=acumuladorAltura/contadorAltura;

    

    alert('El promedio de las alturas totales : '+promedio+'\nAltura más baja : '+masBaja+', es de sexo : '+ sexoAlturaBaja+'\nCantidad de mujeres con más de 190 cm : ' +contadormujeresMas190);


   


















}
