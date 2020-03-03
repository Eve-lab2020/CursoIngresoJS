function mostrar()
{
    var resta;
    var suma;

    var num1=parseFloat(prompt("Ingrese el primer número"));

    while(isNaN(num1)){

        num1=parseFloat(prompt("Error. Ingrese el primer número"));
    }
    var num2=parseFloat(prompt("Ingrese el segundo número"));

    while(isNaN(num2)){
        
        num1=parseFloat(prompt("Error. Ingrese el segundo número"));
    }

   


    if(num1==num2){

            alert("Los números son iguales ; "+ num1 + num2);//concatenados, se refiere a juntos?como si fueran string?

    }else if(num1>num2){

        resta=num1-num2;
        alert(num1 +" menos "+ num2 +" = "+resta);

    }else {

        suma=num1+num2;

        if(suma>10){

            alert("La suma es "+num1+" + "+num2+" = "+suma+" y supero el 10.");
        }

        alert(num1+" + "+num2+" = "+suma);


    }
}
