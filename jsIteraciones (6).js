function mostrar()
{

	var num1;
	var num2;
	var num3;
	var num4;
	var num5;
	
	var promedio;
	var acumulador;

	num1=parseFloat(prompt("Por favor ingrese el 1er dígito : "));
	num2=parseFloat(prompt("Por favor ingrese el 2do dígito : "));
	num3=parseFloat(prompt("Por favor ingrese el 3ro dígito : "));
	num4=parseFloat(prompt("Por favor ingrese el 4to dígito : "));
	num5=parseFloat(prompt("Por favor ingrese el 5to dígito : "));

	while(isNaN(num1,num2,num3,num4,num5)){

		alert("Hay almenos un dato inválido, por favor vuelva a ingresar los 5 números")
	num1=parseFloat(prompt("Por favor ingrese el 1er dígito : "));
	num2=parseFloat(prompt("Por favor ingrese el 2do dígito : "));
	num3=parseFloat(prompt("Por favor ingrese el 3ro dígito : "));
	num4=parseFloat(prompt("Por favor ingrese el 4to dígito : "));
	num5=parseFloat(prompt("Por favor ingrese el 5to dígito : "));
	}

	acumulador=num1+num2+num3+num4+num5;
	promedio=acumulador/5;

document.getElementById('suma').value=acumulador.toFixed(2);
document.getElementById('promedio').value=promedio.toFixed(2);

}//FIN DE LA FUNCIÓN
//COMO INGRESAR EN EL ID ALGÚN TEXTO ADEMAS DEL PROMEDIO/ACUMULADO???