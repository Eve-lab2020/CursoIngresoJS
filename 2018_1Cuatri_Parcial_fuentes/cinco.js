function mostrar() {

    var planetas;
    planetas = prompt("Por favor ingrese el nombre de un planeta").toLowerCase();

    switch (planetas) {

        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
            break;

        case "tierra":
            alert("Acá vivimos");
            break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "Urano":
            alert("Acá hace más frio");
            break;
        default:
            alert("Error. Lo ingresado no es un planeta, precione le botón para volver a intentarlo");
            break;    

    }

    

}
