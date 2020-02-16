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
    var cant_lamparas;
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

        alert("IIBB Usted pagó $" + calculoBruto);
    }



}