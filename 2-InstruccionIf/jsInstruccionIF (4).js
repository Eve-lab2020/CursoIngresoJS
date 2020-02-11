function mostrar()
{
//tomo la edad  

var edad;

edad=parseInt(document.getElementById("edad").value);

if(edad>=13<=17){alert("Usted es un adolescente")}
if(edad>17){alert("Usted está en la infancia")}else{alert("Usted es considerado un adulto")}


}//FIN DE LA FUNCIÓN