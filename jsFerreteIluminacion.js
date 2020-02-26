/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var cantidad;
    var precio = 35;
    var marca;
    var porcentaje;
    var calculo_porcentaje;
    var importeFinal;
    var calculoBruto;



    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;



    while (isNaN(cantidad) || cantidad <= 0) {

        alert("Los datos ingresados no son válidos, por favor informar la cantidad y marca de las lamparas por las que se desee consultar");
        parseInt(document.getElementById("Cantidad").value) = cantidad;
    }


    switch (cantidad) {

        case 1: if (cantidad >= 6) {
            porcentaje = 50;
        }
            break;

        case 2:
            if (cantidad = 5 && marca == "ArgentinaLuz") {
                porcentaje = 40;
            }
            break;

        case 3:
            if (cantidad = 5 && marca != "ArgentinaLuz") {
                porcentaje = 30;
            }
            break;

        case 4:
            if (cantidad = 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
                porcentaje = 25;
            }
            break;

        case 5:
            if (cantidad = 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
                porcentaje = 20;
            }
            break;

        case 6: if (cantidad = 3 && marca == "ArgentinaLuz") {
            porcentaje = 15;
        }
            break;

        case 7:
            if (cantidad = 3 && marca == "FelipeLamparas") {
                porcentaje = 10;
            }
            break;

        case 8:
            if (cantidad = 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
                porcentaje = 5;
            }
            break;

        default:
                porcentaje = 0;
            
            break;

    }
    
    calculo_porcentaje=((precio*cantidad)*porcentaje)/100;
    importeFinal=(precio*cantidad)-calculo_porcentaje;
   
  

    

    /* if (importeFinal > 120) {
 
         calculoBruto = (importeFinal * 10) / 100;
         importeFinal = calculoBruto + importeFinal;
         document.getElementById("precioDescuento").value = importeFinal;
     }*/
     
    document.getElementById("precioDescuento").value = importeFinal;
}



/*var cant_lamparas;
    var marca;
    var precio_descuento;

    var calculo;
    var calculoBruto;


    cant_lamparas = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    document.getElementById("precioDescuento").value = precio_descuento;


    while (isNaN(cant_lamparas) || cant_lamparas <= 0) {

        alert("Los datos ingresados no son válidos, por favor informar la cantidad y marca de las lamparas por las que se desee consultar");
        parseInt(document.getElementById("Cantidad").value) = cant_lamparas;
    }


    if (cant_lamparas >= 6) {

        calculo = ((cant_lamparas * 35) * 50) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 5 && marca == "ArgentinaLuz") {

        calculo = ((cant_lamparas * 35) * 40) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 5 && marca != "ArgentinaLuz") {

        calculo = ((cant_lamparas * 35) * 30) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {

        calculo = ((cant_lamparas * 35) * 25) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {

        calculo = ((cant_lamparas * 35) * 20) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 3 && marca == "ArgentinaLuz") {

        calculo = ((cant_lamparas * 35) * 15) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 3 && marca == "FelipeLamparas") {

        calculo = ((cant_lamparas * 35) * 10) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else if (cant_lamparas == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {

        calculo = ((cant_lamparas * 35) * 5) / 100;
        precio_descuento = cant_lamparas * 35 - calculo;
        document.getElementById("precioDescuento").value = precio_descuento;

    } else {

        precio_descuento = cant_lamparas * 35;
        document.getElementById("precioDescuento").value = precio_descuento;
    }



    if (precio_descuento > 120) {

        calculoBruto = (precio_descuento * 10) / 100;
        precio_descuento = calculoBruto + precio_descuento;
        document.getElementById("precioDescuento").value = precio_descuento;

        alert("Usted pagó $" + calculoBruto+" de IIBB");
}*/
