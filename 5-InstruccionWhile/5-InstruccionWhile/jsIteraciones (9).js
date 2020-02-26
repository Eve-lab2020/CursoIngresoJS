function mostrar() {

	var num;
	var flag = 0;
	var max;
	var min;

	var respuesta;


	do{
		
		num = parseInt(prompt("Ingrese un número"));

		if (flag == 0) {
			max = num;
			min = num;
			flag=1;	

		} 

			if (num > max) {
				max = num;
				

			}
			if (num < min) {
				min = num;
				
			}
		
		respuesta=prompt("Desea continuar?");
	
	}while(respuesta =="s");
	

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN