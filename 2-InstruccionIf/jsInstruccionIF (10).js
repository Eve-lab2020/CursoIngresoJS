function mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	var nota = Math.floor(Math.random() * (11 - 1)) + 1;

	if (nota == 9 || nota == 10) { alert("Su nota es " + nota + " , EXCELENTE"); }
	else if (nota >= 4) { alert("Su nota es " + nota + " , APROBÓ") }
	else { alert("Su nota es : " + nota + "  Vamos, la próxima se puede  ") }

}//FIN DE LA FUNCIÓN