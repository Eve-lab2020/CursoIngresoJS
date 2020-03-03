function mostrar() {


    var largo;
    var altura;
    var perimetro;

    largo=parseInt(prompt("Ingrese el largo del rectangulo"));


    while(isNaN(largo)||  largo<0){

        largo=parseInt(prompt("Error. Ingrese el largo del rectangulo"));
    }


    altura=parseInt(prompt("Ingrese la altura del rectangulo"));
    

    while(isNaN(altura)||  altura<0){

        altura=parseInt(prompt("Error. Ingrese el largo del rectangulo"));
    }
  


    perimetro=largo*altura;


    alert("El perímetro del rectangulo para las medidas ingresadas es :" +perimetro);
    


}
